---
name: why-now-signal-scanner
description: Find current company-level signals and turn them into a cited, cautious why-now brief for ABM planning.
---

# Why-Now Signal Scanner

Read [`../../shared/SAFETY.md`](../../shared/SAFETY.md) and [`../../shared/COMPATIBILITY.md`](../../shared/COMPATIBILITY.md) before starting.

## Outcome

Produce a compact signal brief showing what changed at an account, why it may matter to the campaign, and what remains unknown. A signal is evidence for a hypothesis—not proof of intent.

## Use when

- A marketer needs a timely reason to prioritize or research an account.
- The relevant evidence may appear in public announcements, company pages, job postings, filings, events, or approved internal files.
- The team wants a weekly account-signal review or one-account briefing.

## Do not use when

- The request requires gated-profile scraping, private surveillance, or inference about a person's private behavior.
- The user wants a signal automatically converted into outreach or a CRM status.
- The available sources are stale, anonymous, or too weak to support the claim.

## Inputs

Required:

1. Account or account list.
2. Offering and campaign hypothesis.
3. Relevant signal categories and lookback window.
4. Approved public or internal source boundary.

Default signal categories: leadership or strategy change, relevant hiring, product or market launch, technology or operational change, event participation, and material company announcement.

## Workflow

1. Define the decision, accounts, lookback window, source boundary, and excluded signal types.
2. Review supplied evidence first, then run focused public research when authorized.
3. Record atomic observations with source, event date, publication date, and direct link.
4. Label each item `Observed`, `Inferred`, `Recommended`, or `Unknown`.
5. Rate relevance and confidence separately. A recent signal is not automatically relevant.
6. Connect relevant observations to the campaign hypothesis in one cautious sentence.
7. Recommend the smallest next research or human-review step; do not draft outreach unless separately requested.
8. Document contradictions, stale evidence, and uncovered source classes.
9. Stop after producing the draft brief.

## Output contract

Return:

- `why-now-brief.md` with executive summary and account signal cards;
- a signal table with observation, date, source, relevance, confidence, implication, and unknowns;
- `source-register.md` with direct links;
- a watch list for signals that need more evidence;
- a manager summary and human decision required.

## Quality checks

- Every observation maps to a direct source.
- Event dates and publication dates are not confused.
- Inference is visibly separated from observation.
- No signal is described as proof that an account is buying.
- Recommendations are proportionate to evidence strength.
- No private-person profiling or automatic action occurred.

## Quick-start prompt

> Use Why-Now Signal Scanner for `[ACCOUNT]` and `[OFFERING]`. Look back `[TIME WINDOW]` using approved public sources. Find only signals relevant to `[CAMPAIGN HYPOTHESIS]`, cite them, separate observation from inference, and stop with a research brief.
