#!/usr/bin/env python3
"""Validate the public ForgeX practical ABM skill pack."""

from __future__ import annotations

import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def main() -> int:
    manifest = json.loads((ROOT / "skill-manifest.json").read_text())
    errors: list[str] = []

    skills = manifest.get("skills", [])
    if not skills:
        errors.append("manifest must contain at least one skill")

    numbers = [item.get("number") for item in skills]
    if numbers != list(range(1, len(skills) + 1)):
        errors.append("manifest skill numbers must be unique and sequential")

    slugs = [item.get("slug") for item in skills]
    if len(slugs) != len(set(slugs)):
        errors.append("manifest skill slugs must be unique")

    required_headings = (
        "## Outcome",
        "## Use when",
        "## Do not use when",
        "## Inputs",
        "## Workflow",
        "## Output contract",
        "## Quality checks",
    )

    for item in skills:
        path = ROOT / "skills" / item["slug"] / "SKILL.md"
        if not path.exists():
            errors.append(f"missing {path.relative_to(ROOT)}")
            continue
        text = path.read_text()
        if not text.startswith("---\n") or "\n---\n" not in text[4:]:
            errors.append(f"missing YAML front matter: {path.relative_to(ROOT)}")
        if not re.search(r"^name:\s*\S+", text, re.MULTILINE):
            errors.append(f"missing name field: {path.relative_to(ROOT)}")
        if not re.search(r"^description:\s*.+", text, re.MULTILINE):
            errors.append(f"missing description field: {path.relative_to(ROOT)}")
        for heading in required_headings:
            if heading not in text:
                errors.append(f"missing {heading}: {path.relative_to(ROOT)}")
        if "../../shared/SAFETY.md" not in text:
            errors.append(f"missing shared safety link: {path.relative_to(ROOT)}")

    calendar = ROOT / "content-calendar" / "README.md"
    if not calendar.exists():
        errors.append("missing content-calendar/README.md")
    else:
        calendar_text = calendar.read_text()
        for item in skills:
            if item.get("content_calendar", True) is False:
                continue
            if item["slug"] not in calendar_text:
                errors.append(f"calendar missing {item['slug']}")

    if errors:
        print("Validation failed:")
        for error in errors:
            print(f"- {error}")
        return 1

    calendar_count = sum(item.get("content_calendar", True) is not False for item in skills)
    print(
        f"Validation passed: {len(skills)} skills are complete; "
        f"{calendar_count} are represented in the content calendar."
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
