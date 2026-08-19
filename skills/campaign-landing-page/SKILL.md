---
name: campaign-landing-page
description: Turn an approved B2B campaign brief into a focused, accessible, draft landing-page package without publishing it.
---

# Campaign Landing Page

Read [`../../shared/SAFETY.md`](../../shared/SAFETY.md) and [`../../shared/COMPATIBILITY.md`](../../shared/COMPATIBILITY.md) before starting.

## Outcome

Create a public-safe, one-to-many campaign landing-page draft that gives one audience a clear reason to care, useful content, credible proof, and one primary next step.

## Use when

- An approved campaign brief, audience, offer, and CTA exist.
- The team needs a wireframe, copy deck, HTML draft, or platform-ready page specification.
- Approved brand and proof sources are available.

## Do not use when

- The campaign strategy, audience, offer, or CTA is unresolved.
- The user expects unsupported proof, invented customer logos, or automatic publication.
- The page requires collecting sensitive data without approved privacy language and routing.

## Inputs

Required:

1. Approved campaign brief.
2. Audience and single primary job of the page.
3. Offer and primary CTA.
4. Approved brand brief and assets.
5. Approved proof, content, and legal or privacy requirements.

Optional: destination platform, analytics specification, form fields, secondary content, accessibility requirements, and prior page performance.

## Workflow

1. Confirm the audience, page job, offer, CTA, evidence, brand, and platform boundary.
2. Create a message hierarchy: audience problem, useful point of view, offer, proof, next step.
3. Select the smallest page architecture that can do the job. Default to hero, value, proof, resources, and CTA.
4. Write concise copy using only approved claims and source IDs.
5. Design the content sequence and responsive behavior before decorative treatment.
6. Produce the requested draft format: wireframe, copy deck, platform specification, or accessible HTML/CSS.
7. Add analytics and form requirements as a specification only unless the user explicitly authorizes implementation.
8. QA message clarity, citations, links, mobile behavior, accessibility, brand fit, and CTA consistency.
9. Stop at a previewable draft. Do not publish or connect a live form.

## Output contract

Return:

- `landing-page-brief.md` with audience, job, CTA, evidence, and constraints;
- page outline and copy deck;
- draft wireframe, platform specification, or code files;
- source and asset register;
- QA report covering copy, responsive behavior, accessibility, links, analytics, and privacy;
- publication decisions still requiring a human.

## Quality checks

- The page serves one audience and one primary CTA.
- Every proof claim and logo is approved and traceable.
- The hero explains the audience value without requiring product knowledge.
- Mobile order and CTA behavior are defined.
- Accessibility and form/privacy requirements are explicit.
- No live page, form, analytics, or CRM integration was activated.

## Quick-start prompt

> Use Campaign Landing Page with the attached approved brief and brand assets. Create a responsive draft for `[AUDIENCE]` promoting `[OFFER]` with `[CTA]`. Use only approved proof and stop at a previewable draft.
