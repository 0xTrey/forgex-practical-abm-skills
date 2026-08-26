---
name: context-corpus-builder
description: Turn approved company materials into a portable, source-backed context corpus for repeatable AI-assisted marketing work.
---

# Context Corpus Builder

Read [`../../shared/SAFETY.md`](../../shared/SAFETY.md) and [`../../shared/COMPATIBILITY.md`](../../shared/COMPATIBILITY.md) before starting.

## Outcome

Create a small, versionable company brain that gives approved AI tools consistent brand, messaging, ICP, persona, product, proof, and source context.

## Use when

- A team repeatedly pastes the same company information into prompts.
- Marketing outputs vary because different people use different context.
- The company needs portable knowledge that can move between approved models or agent harnesses.
- A reusable skill or automation needs a stable context layer.

## Do not use when

- Source ownership, permissions, or confidentiality are unclear.
- The request would place secrets, credentials, raw personal data, or restricted customer data in a repository.
- The user expects the skill to decide that conflicting claims are true without an owner.
- The source set is too broad to define a useful business purpose.

## Inputs

Required:

1. Business purpose and intended users.
2. Approved source files, URLs, or repositories.
3. Source owner and permission boundary.
4. Company or product scope.

Optional: current brand guide, messaging framework, product catalog, ICP, personas, proof library, approved examples, glossary, review cadence, and target output tools.

## Workflow

1. Confirm the corpus purpose, users, scope, approved sources, confidentiality boundary, and prohibited content.
2. Create a source manifest with owner, location, access date, permission, freshness expectation, and status.
3. Inventory candidate facts and rules. Separate observed source material from inferred guidance.
4. Identify contradictions, missing owners, stale claims, duplicate language, and unsupported proof. Stop for an owner decision on material conflicts.
5. Normalize the approved material into the smallest useful set of plain-text context files.
6. Give each core file an owner, status, and review cadence. Preserve source locations for consequential claims.
7. Create a proof and claims register that distinguishes approved, conditional, unknown, and prohibited language.
8. Test the corpus against three representative tasks. Record where retrieval is noisy, context is missing, or two files produce inconsistent guidance.
9. Produce a change summary, unresolved issue list, and readiness status. Stop before publishing, connecting live systems, or granting tool permissions.

## Output contract

Return a `context-corpus/` folder containing:

- `README.md` with scope, use rules, and conflict protocol;
- `brand-guidelines.md`;
- `messaging-framework.md`;
- `icp.md`;
- `personas.md`;
- `product-portfolio.md`;
- `proof-and-claims.md`;
- `source-manifest.md`;
- `glossary.md` when category language needs normalization;
- `validation-report.md` with test tasks, gaps, conflicts, and readiness.

Use [`references/corpus-template.md`](references/corpus-template.md) as the minimum schema. Omit a file only when it is genuinely out of scope, and record the reason in `README.md`.

## Quality checks

- Every consequential claim has a source, owner, and status.
- Observed facts and inferred guidance are visibly different.
- Conflicts and stale material are not silently resolved.
- No secrets, credentials, raw personal data, or restricted customer content are included.
- The corpus describes the business independently of one model or vendor interface.
- Three test tasks use the corpus without contradictory or generic outputs.
- The final status is `Ready`, `Incomplete`, or `Blocked`, with reasons.

## Quick-start prompt

> Use Context Corpus Builder on these approved company materials. Build a portable context corpus for `[BUSINESS PURPOSE]`. Preserve source locations, label contradictions and unsupported claims, assign owners and review dates, test the corpus on three representative tasks, and stop before publishing or connecting live systems.
