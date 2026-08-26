# ForgeX webinar deliverables

This folder contains the audience-ready materials for the September 17, 2026 ForgeX webinar, **AI for ABM: What You Need to Know About MCPs, Agents & Prompts**.

## Final files

- [`forgex-ai-for-abm-webinar-deck.pptx`](forgex-ai-for-abm-webinar-deck.pptx): editable 21-slide presentation with presenter notes and source blocks.
- [`forgex-ai-for-abm-webinar-deck.pdf`](forgex-ai-for-abm-webinar-deck.pdf): presenter-safe PDF backup.
- [`forgex-ai-for-abm-field-guide.pdf`](forgex-ai-for-abm-field-guide.pdf): 12-page attendee leave-behind.

## Story and timing

The deck supports a 45-minute teaching session followed by the existing 15-minute live demonstration. The maturity ladder is the spine:

1. Fancy Search
2. Contextual Copilot
3. Grounded Workspace
4. Reusable Skill
5. Governed Automation
6. Goal-Driven Agent System

The live demonstration boundary remains unchanged. Use the fictional North Peak context, the shared safety contract, ABM Strategist, and the Alder Manufacturing brief. Explain the Level 4 extension without scheduling, activating, publishing, sending, spending, authenticating a connector, or writing to a system of record.

## ForgeX visual system

The deliverables use the current webinar promo creative as the visual anchor:

- deep plum: `#3D1F5C`
- near black: `#0B0B0F`
- hot pink: `#E63888`
- lime: `#C7F25C`
- warm cream: `#FAF7F2`
- typography: Avenir Next in the deck, with a clean Helvetica fallback in the PDF field guide

The design uses high-contrast plum and cream canvases, pink emphasis, lime safety and progression cues, rounded cards, generous margins, and minimal ForgeX dot accents.

Every visual starts with one primary headline. The eyebrow-headline-dek stack is prohibited. Supporting context belongs in the body, data, caption, or footer.

## Community skill treatment

External Swan GTM Skills examples remain creator-attributed community work. Their code, credentials, and configurations are not included in this repository.

- Multichannel Campaign Builder is a Level 3 draft-generation reference.
- 1:1 ABM Ads is an advanced Level 3 to 4 draft-only reference. Do not activate or spend.
- Hiring Signal Verification, Signal Interpreter, Audience ICP Filter, and Company Deep Dive are proposed pilots.
- Audience ICP Filter has a conditional local pass for reviewed list classification only. It does not authorize enrichment, sending, CRM writes, or sequence enrollment.

See [`../sources-and-attribution.md`](../sources-and-attribution.md) for the pinned sources, creators, local evidence, and unverified boundaries.

## Presenter handoff checklist

1. Review the presenter notes and confirm the 45-minute teaching pace.
2. Rehearse the [`../live-demo-runbook.md`](../live-demo-runbook.md) against the event-week Claude Code interface.
3. Use only the fictional North Peak and Alder inputs.
4. Keep a local copy of the PDF deck open as the presentation fallback.
5. Confirm repository access for attendees before placing the URL in event chat or follow-up email.
6. Run `python3 scripts/validate.py` from the repository root.
7. Confirm that the public or invited attendee view exposes no private branches, secrets, credentials, or evaluation worktrees.

## Release state

The GitHub repository is private as of August 26, 2026. The content is locally packaged and ready for review, but attendee access still requires an explicit ForgeX decision: make the repository public, invite the intended audience, or distribute a release archive. Do not change visibility or publish without approval.

## Validation completed

- PowerPoint overflow test passed across all 21 slides.
- Every slide was rendered and visually reviewed.
- Both PDFs were reopened, rendered, and visually reviewed.
- The attendee guide contains 12 letter-size pages and the deck backup contains 21 widescreen pages.
- Repository validation checks the full 11-skill collection while keeping the webinar-only Context Corpus Builder out of the original ten-part content calendar requirement.
