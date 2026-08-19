---
name: brand-harvester
description: Translate public brand evidence into a source-backed creative brief without copying a website or inventing brand rules.
---

# Brand Harvester

Read [`../../shared/SAFETY.md`](../../shared/SAFETY.md) and [`../../shared/COMPATIBILITY.md`](../../shared/COMPATIBILITY.md) before starting.

## Outcome

Turn a public brand source into a practical creative brief containing verified assets, visual tokens, recurring patterns, screenshots, and design guidance for an original campaign experience.

## Use when

- A marketer needs reliable brand grounding before creating a page, slide, document, or campaign asset.
- A public website, brand guide, or approved asset folder is available.
- The goal is to translate brand patterns, not clone a page.

## Do not use when

- The source is private, blocked, unreadable, or ambiguous and no approved alternative is supplied.
- The user asks to impersonate another company or present its marks as an endorsement.
- The task requires downloading restricted assets or copying a site pixel-for-pixel.

## Inputs

Required:

1. Brand owner and intended campaign use.
2. Most specific approved source URL or brand guide.
3. Asset-use restrictions and required attribution.

Optional: logo files, fonts, prior campaigns, screenshots, tone guidance, accessibility requirements, and prohibited treatments.

## Workflow

1. Confirm the brand owner, source, output use, and asset restrictions.
2. Capture desktop and mobile source views when authorized, including the access date.
3. Inventory only verified logos, icons, imagery, and downloadable assets. Record source URLs and file types.
4. Extract observed colors, typography, spacing, shape, illustration, photography, and motion patterns.
5. Separate observed rules from inferred design guidance. Do not promote a one-off element into a brand rule without evidence.
6. Summarize voice, message structure, and recurring phrases without copying long passages.
7. Translate the evidence into an original campaign design system and accessible fallback choices.
8. Validate the brief against the source views and record contradictions or missing assets.
9. Stop before publishing or applying the design to a live property.

## Output contract

Return:

- `brand-brief.md` with observed design and voice patterns;
- `brand-tokens.css` or a token table with source confidence;
- `asset-manifest.md` with source, permission status, and intended use;
- desktop and mobile screenshot references;
- `creative-directions.md` describing what to preserve, reinterpret, and avoid;
- validation status of `Ready`, `Incomplete`, or `Blocked`.

## Quality checks

- Every logo and asset has a verified source.
- Observed evidence and inferred guidance are distinct.
- The brief does not invent customers, endorsements, proof, or brand rules.
- Proposed creative remains original and accessible.
- Both desktop and mobile patterns were considered when available.
- Blocked or incomplete sources result in a visible stop condition.

## Quick-start prompt

> Use Brand Harvester on `[PUBLIC URL]` for `[CAMPAIGN USE]`. Produce a source-backed brand brief, tokens, asset manifest, screenshot references, and original creative guidance. Stop if the source cannot be verified.
