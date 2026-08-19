---
name: account-list-builder
description: Turn an approved ICP hypothesis and company evidence into a ranked, explainable account list for human ABM review.
---

# Account List Builder

Read [`../../shared/SAFETY.md`](../../shared/SAFETY.md) and [`../../shared/COMPATIBILITY.md`](../../shared/COMPATIBILITY.md) before starting.

## Outcome

Produce a reviewable account list in which every inclusion, exclusion, and score has a visible reason. The result is a targeting hypothesis—not a blast list and not a prediction that an account will buy.

## Use when

- A marketer has an offering and a starting ICP hypothesis.
- The team needs to prioritize companies, markets, partners, or event targets.
- Approved company-level files or public sources are available.

## Do not use when

- The request is to profile or rank individual people.
- The scoring will be used for employment, credit, insurance, housing, or another high-impact decision.
- The user expects automatic enrichment, outreach, CRM writes, or ad activation.

## Inputs

Required:

1. Offering and business problem solved.
2. ICP qualifiers and explicit disqualifiers.
3. Geography and company-size boundaries.
4. Approved candidate-account source or discovery boundary.
5. Human reviewer and intended campaign decision.

Optional: existing customers, competitors, partners, suppression list, technology category, account ownership, and approved fit weights.

## Workflow

1. Restate the offering, decision, ICP, exclusions, source boundary, and unknowns.
2. Build a simple scoring model with no more than five dimensions. Default dimensions are problem fit, company fit, GTM complexity, timing evidence, and actionability.
3. Normalize company names and domains. Deduplicate by domain while preserving source provenance.
4. Apply suppressions and hard exclusions before scoring. Never let a high score override an exclusion.
5. Collect only company-level evidence from supplied files or permitted public sources. Record source, date, and supported claim.
6. Score each eligible account transparently. Use `Unknown` rather than optimistic assumptions when evidence is missing.
7. Rank accounts, assign confidence, and explain the top reason for and against each account.
8. Create a separate exceptions queue for duplicates, conflicts, weak evidence, and manual-review cases.
9. Run the quality checks and stop for human review. Do not enrich people, launch outreach, or write to a system of record.

## Output contract

Return:

- `ranked-account-list.csv` or a Markdown table with domain, score components, confidence, inclusion reason, risk, and source IDs;
- `scoring-model.md` with weights and definitions;
- `exceptions.md` with suppressions and unresolved cases;
- `source-register.md` with provenance and dates;
- a five-line manager summary naming the decision and required human review.

## Quality checks

- Every row has a domain or a clearly documented identity exception.
- Suppressions were applied before scoring.
- Scores are reproducible from visible evidence.
- Company fit is not presented as purchase intent.
- Missing data lowers confidence rather than becoming a favorable assumption.
- No person-level enrichment or external action occurred.

## Quick-start prompt

> Use Account List Builder to rank these companies for `[OFFERING]`. Our ICP is `[QUALIFIERS]`; exclude `[DISQUALIFIERS]`. Use only the supplied file and approved public company sources. Return a draft list with evidence, confidence, and exceptions. Stop before enrichment or outreach.
