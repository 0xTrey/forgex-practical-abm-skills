---
name: abm-strategist
description: Research a named B2B account and turn the evidence into a focused, approval-ready account campaign brief.
---

# ABM Strategist

Read [`../../shared/SAFETY.md`](../../shared/SAFETY.md) and [`../../shared/COMPATIBILITY.md`](../../shared/COMPATIBILITY.md) before starting.

## Outcome

Create an evidence-backed campaign brief for one named account. The brief should tell a marketer what business change to address, which buying roles matter, what story to test, what experience to build, and what evidence is still missing.

## Use when

- A seller or marketer has a named account and offering.
- The team needs an account hypothesis before building creative or outreach.
- Approved account context and public research can support the brief.

## Do not use when

- The target account, seller, or offering is ambiguous.
- The user wants fabricated personalization or private-person inference.
- The user expects the skill to publish a page, send a message, or declare the account ready to buy.

## Inputs

Required:

1. Seller brand and offering.
2. Named target account and domain.
3. Campaign objective and desired next action.
4. Approved source materials or permission for public research.

Optional: active opportunity context, known stakeholders, prior conversations, approved proof, competitors, template or channel constraints.

## Workflow

1. Confirm seller, target, offering, objective, CTA, source boundary, and prohibited claims.
2. Research the target's current priorities, relevant initiatives, operating context, and public language.
3. Separate observed account facts from inferred problems and messaging hypotheses.
4. Define the account-level campaign premise in one sentence: `Because [evidence], help [buying group] move from [current tension] to [desired outcome] with [offering relevance].`
5. Map the likely buying roles, their jobs, proof needs, and objections without stereotyping individuals.
6. Build a message hierarchy: problem, point of view, value, proof, next step.
7. Recommend the smallest useful experience and channel sequence.
8. Define success signals and learning questions; do not promise revenue outcomes.
9. Run QA, list gaps, and stop for brief approval before creative production.

## Output contract

Return `account-campaign-brief.md` containing:

- decision and objective;
- account evidence and source register;
- campaign premise and message hierarchy;
- buying-role hypotheses;
- experience and channel recommendation;
- approved-proof inventory and missing proof;
- measurement and learning plan;
- assumptions, risks, and human approvals required.

## Quality checks

- The seller, target, offering, and CTA are unambiguous.
- Every account-specific factual claim is sourced.
- The story could not be reused unchanged for any random account.
- Buying roles are role-based hypotheses, not invented personal facts.
- The brief contains one coherent campaign premise.
- No page was published and no outreach was sent.

## Quick-start prompt

> Use ABM Strategist for `[SELLER]` selling `[OFFERING]` to `[TARGET ACCOUNT]`. The objective is `[OBJECTIVE]`. Use the supplied materials plus approved public research, produce an account campaign brief, label assumptions, and stop for approval before building anything.
