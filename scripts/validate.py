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

    if len(manifest.get("skills", [])) != 10:
        errors.append("manifest must contain exactly 10 skills")

    required_headings = (
        "## Outcome",
        "## Use when",
        "## Do not use when",
        "## Inputs",
        "## Workflow",
        "## Output contract",
        "## Quality checks",
    )

    for item in manifest.get("skills", []):
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
        for item in manifest.get("skills", []):
            if item["slug"] not in calendar_text:
                errors.append(f"calendar missing {item['slug']}")

    if errors:
        print("Validation failed:")
        for error in errors:
            print(f"- {error}")
        return 1

    print("Validation passed: 10 skills and content calendar are complete.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
