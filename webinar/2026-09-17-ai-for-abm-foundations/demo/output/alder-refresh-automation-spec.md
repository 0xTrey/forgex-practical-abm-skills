# Rehearsal fallback: Alder brief refresh automation specification

**Status:** Draft-only Level 4 teaching artifact. No schedule, connector, or system write has been activated.

## Purpose

Keep the fictional Alder Manufacturing campaign brief current when approved source files change. The route is deterministic and stops for human approval before creative, outreach, publication, or any system-of-record write.

## Trigger

- Rehearsal: manual run only.
- Proposed production pattern: weekly check or an approved repository-change event.
- Prohibited live-demo trigger: a real scheduler, webhook, external search, or CRM event.

## Approved sources

- `shared/SAFETY.md`
- `skills/abm-strategist/SKILL.md`
- Markdown files in `webinar/2026-09-17-ai-for-abm-foundations/northpeak/`
- The current approved brief in `demo/output/account-campaign-brief.md`

Any other source enters the exception queue.

## Current state

The future workflow would record:

- source file names and hashes;
- source-manifest review status;
- brief version and hash;
- last successful run time;
- last material-change decision;
- unresolved exceptions;
- human approval state.

Do not create this state file during the webinar.

## Fixed route

1. Read the safety contract and source manifest.
2. Compare approved source hashes with the prior state.
3. Stop if a source is missing, restricted, stale, or in conflict.
4. Decide whether a change is material using the tests below.
5. If no material change exists, write a no-change record and stop.
6. If a material change exists, run ABM Strategist against the approved source set.
7. Compare the new brief with the approved current brief by section.
8. Route unsupported claims, missing sections, and source conflicts to the exception queue.
9. Present the diff and required approvals to a human owner.
10. Stop before replacing the approved brief or taking external action.

## Material-change test

A change is material when it alters at least one of these:

- seller positioning, approved product language, or prohibited claims;
- target-account evidence or its source status;
- campaign objective or desired next action;
- buying-role hypothesis or required proof;
- message hierarchy;
- approval gate or safety boundary;
- source ownership, freshness, or conflict state.

Formatting-only edits, comments, or file-order changes are not material.

## Update rules

- Keep Observed, Hypothesis, Recommendation, Unknown, and Approval labels.
- Preserve source locations for every material seller or account claim.
- Narrow or remove language when proof weakens.
- Do not convert an unknown into a fact.
- Do not add a customer, metric, person, technology, financial result, or intent claim without an approved source.
- Do not change the approved brief until a human accepts the section-level diff.

## Diff and no-change behavior

The review output must show:

- source changes;
- brief sections changed;
- claims added, narrowed, or removed;
- unknowns added or resolved;
- approvals newly required;
- unchanged sections.

When no material change exists, record the source hashes, decision, time, and reason. Do not regenerate the brief merely because the trigger ran.

## Exception queue

Route these conditions to human review:

- conflicting source files;
- missing source owner or review status;
- a claim without an approved source;
- a requested external source or connector;
- an output-contract failure;
- repeated generation failure;
- a requested send, publication, spend, or system write.

## Retries and recovery

- Retry a transient read or generation failure once.
- Do not retry a permission, source-conflict, or approval failure.
- Keep the last approved brief unchanged.
- Record the failed step and inputs without storing credentials or hidden reasoning.
- Require a human owner to resume after the cause is resolved.

## Logs

Record the trigger, approved source hashes, material-change result, skill version, output hash, validation result, exceptions, and approval decision. Do not log secrets, cookies, tokens, personal data, or hidden model reasoning.

## Human approval gates

Human approval is required before:

- accepting the updated brief as canonical;
- creating external creative;
- using target branding;
- sending outreach;
- publishing an experience;
- writing to CRM or another system of record;
- spending budget;
- granting a tool new access.

## Why this is automation

The trigger, sources, material-change test, skill, diff, exception rules, retry limit, and stop conditions are predetermined. The workflow does not choose a new goal or invent a new route. It is a governed automation, not a goal-driven agent.
