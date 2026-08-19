---
name: buying-committee-mapper
description: Map the role-based B2B buying committee, evidence needs, and coverage gaps for a named account or campaign.
---

# Buying Committee Mapper

Read [`../../shared/SAFETY.md`](../../shared/SAFETY.md) and [`../../shared/COMPATIBILITY.md`](../../shared/COMPATIBILITY.md) before starting.

## Outcome

Create a role-based map of the buying group: who is likely to initiate, evaluate, approve, implement, influence, or block a decision; what each role needs to learn; and where campaign coverage is missing.

## Use when

- A marketer needs to plan content, outreach, or experiences for a complex B2B decision.
- The offering and account or segment are known.
- Approved professional information or role-level research is available.

## Do not use when

- The request is to create a personal dossier or infer private, protected, emotional, political, health, or financial traits.
- Reporting lines or decision authority cannot be verified and the user wants them presented as fact.
- The user expects automatic enrichment or outreach.

## Inputs

Required:

1. Offering and buying decision.
2. Named account or well-defined segment.
3. Known roles, contacts, or organizational context, if available.
4. Approved sources and privacy boundary.

Optional: sales notes, account plan, job descriptions, public leadership pages, approved professional profiles, current content inventory, and known relationship owners.

## Workflow

1. Define the business decision and the work required before, during, and after purchase.
2. Create a role hypothesis covering champion, economic approver, functional evaluator, technical or security evaluator, implementation owner, end-user representative, and potential blocker where relevant.
3. Review supplied and permitted public professional evidence. Record names only when relevant, approved, and professionally sourced.
4. For each role, document job to be done, questions, objections, proof needed, preferred depth, and likely next action.
5. Mark reporting relationships and decision authority as `Verified`, `Inferred`, or `Unknown`.
6. Map existing content and messages to roles and buying stages.
7. Identify coverage gaps and recommend the smallest new asset or conversation needed.
8. Run privacy and evidence QA. Stop before enrichment, messaging, or CRM changes.

## Output contract

Return:

- `buying-committee-map.md` or spreadsheet with role, decision function, known professional contact if approved, evidence, questions, proof needs, content coverage, and confidence;
- a simple influence-and-decision diagram;
- `coverage-gaps.md` with prioritized missing assets or conversations;
- source register and human decisions required.

## Quality checks

- Every named person is relevant and sourced from approved professional information.
- Roles are not treated as personality types.
- Reporting lines and authority are labeled by confidence.
- The map includes implementation and risk roles, not only executives.
- Coverage gaps connect to a real decision need.
- No enrichment, contact, or system update occurred.

## Quick-start prompt

> Use Buying Committee Mapper for `[ACCOUNT OR SEGMENT]` evaluating `[OFFERING]`. Map the roles, questions, proof needs, and content gaps. Use only approved professional sources, label unverified relationships, and stop before enrichment or outreach.
