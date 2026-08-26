# Sources and attribution

This file is the source register for the September 17, 2026 ForgeX webinar. It separates external frameworks from ForgeX interpretation.

## Zapier AI Fluency Rubric V2

- Article: [We raised the bar for AI fluency in hiring. Here is what we learned.](https://zapier.com/blog/raising-ai-fluency-bar-in-hiring/)
- Official V2 visual: [Zapier's AI Fluency Rubric, updated March 2026](https://images.ctfassets.net/lzny33ho1g45/4k3Lhj5hWuAxfBmPAqOYVe/4474ad100a57fa1eddfe880af5b70f2c/FINAL_Rubric_3Levels_V2.png)
- Related framework: [The AI fluency framework](https://zapier.com/blog/ai-fluency/)
- Related organizational model: [The AI maturity model](https://zapier.com/blog/ai-maturity/)

Use the official visual as an attributed reference slide. Do not present it as a ForgeX framework. The ForgeX six-level model is an ABM-specific interpretation and extension.

## Anthropic workflow and agent guidance

- [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)

The webinar uses Anthropic's distinction between workflows with predefined code paths and agents that dynamically direct their process and tool use. It also adopts the recommendation to begin with the simplest architecture that can do the job.

## Model Context Protocol

- [Introduction to Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro)
- [MCP server primitives](https://modelcontextprotocol.io/specification/2025-06-18/server/index)

Use these sources for current protocol definitions. MCP connects an AI host to resources, prompts, and tools. It does not supply the business process, permission model, or approval policy by itself.

## Cerebras company brain

- Primary article: [How We Built Our Knowledge Base](https://www.cerebras.ai/blog/how-we-built-our-knowledge-base)
- Cerebras blog index: [Cerebras Blog](https://www.cerebras.ai/blog)
- Detailed independent analysis: [How Cerebras built their company brain](https://www.stellarwork.com/captains-log/how-cerebras-built-their-company-brain)

Recommendations carried into the webinar:

- Centralize access and the query interface, not necessarily the ownership or location of every source.
- Use a common schema, source-specific freshness rules, scoped search, and permission-aware retrieval.
- Keep raw records available for exact retrieval, while also creating cleaner summaries for semantic search.
- Expose small retrieval tools that an agent can orchestrate instead of hiding the entire system behind one vague search command.
- Treat connectors, schemas, deduplication, synchronization, permissions, audit, and source metadata as core product work.

The primary Cerebras article should remain the lead citation. The independent analysis is included because it provides a readable architectural walkthrough when the primary page is unavailable.

## GitHub and portable repositories

- [GitHub documentation: About repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories)

ForgeX uses GitHub as one practical example of a versioned central brain. The broader requirement is an inspectable, portable, permission-appropriate repository with ownership and change history.

## Claude live implementation

- [Anthropic Help Center: Creating and managing projects](https://support.anthropic.com/en/articles/9519177-how-can-i-create-and-manage-projects)

Product labels and interfaces may change before the webinar. Rehearse against the current interface during event week. The live build demonstrates a portable architecture, not a permanent dependency on one vendor.

## Swan GTM Skills community examples

- Repository license: [MIT license at the reviewed commit](https://github.com/swan-gtm/gtm-skills/blob/d378356a2668095d71e8dfb0661155255cf6776b/LICENSE)
- Erwann Lefevre: [Multichannel Campaign Builder](https://github.com/swan-gtm/gtm-skills/tree/d378356a2668095d71e8dfb0661155255cf6776b/skills/erwann-lefevre/multichannel-campaign-builder)
- Ivan Falco: [1:1 ABM Ads](https://github.com/swan-gtm/gtm-skills/tree/d378356a2668095d71e8dfb0661155255cf6776b/skills/ivan-falco/1-to-1-abm-ads)
- Peter S. Borkovich: [Hiring Signal Verification](https://github.com/swan-gtm/gtm-skills/tree/d378356a2668095d71e8dfb0661155255cf6776b/skills/peter-borkovich/hiring-signal-verification)
- Din Arbel: [Signal Interpreter](https://github.com/swan-gtm/gtm-skills/tree/d378356a2668095d71e8dfb0661155255cf6776b/skills/din-arbel/signal-interpreter)
- Erwann Lefevre: [Audience ICP Filter](https://github.com/swan-gtm/gtm-skills/tree/d378356a2668095d71e8dfb0661155255cf6776b/skills/erwann-lefevre/audience-icp-filter)
- Uriel Knorovich: [Company Deep Dive](https://github.com/swan-gtm/gtm-skills/tree/d378356a2668095d71e8dfb0661155255cf6776b/skills/uri-knorovich/company-deep-dive)

All links are pinned to commit `d378356a2668095d71e8dfb0661155255cf6776b`. Preserve the creator attribution and the MIT notice when copying or substantially reusing licensed material.

ForgeX is using these examples to teach reusable design patterns. They were evaluated locally for draft-only or proposed-pilot use. They are not ForgeX-authored, ForgeX-certified, production-adopted, or production-proven in Trey's environment.

The 1:1 ABM Ads package is an advanced example because it depends on LinkedIn Marketing API and OpenAI credentials and can prepare paid-platform changes. Local tests confirmed that its LinkedIn sizing and campaign scripts refused to start without credentials. Keep it draft-only, with no live objects, activation, or spend. Do not include it in the live build or imply that ForgeX tested paid-platform execution.

### Local evaluation evidence

- Internal evidence package: `Folloze-Skills-swan-eval/evaluations/swan-gtm/EVALUATION_REPORT.md` and `manifest.json`
- Base evaluation commit: `9826ca8c522e06d051ca8ea76d23ed87f6b4ed35` on `codex/swan-gtm-skill-evaluation`
- Audience ICP Filter pilot: `evaluations/swan-gtm/pilots/audience-icp-filter/sample-evaluation.md`, committed locally at `938b70d760e002a85c5b0a6a83fe395403b98959`
- Publication state: committed locally, not pushed or published
- Evaluation boundary: activation disabled, network calls prohibited, external writes prohibited, and real customer data prohibited
- Results: 18 packages matched the manifest and frontmatter; the corrected Audience ICP Filter suite passed 45 of 45 checks; the domain resolver passed an offline five-row behavioral test; LinkedIn scripts failed closed without credentials

The Audience ICP Filter pilot used 22 fictional ForgeX-style webinar attendees. Every record reconciled. Pass 1 reduced semantic review to nine records, and the final result was 12 match, 1 review, 6 no match, and 3 excluded. The local copy added two corrections: ABM titles count as growth-marketing signals, and a competitor mentioned only in a bio requires employer context before exclusion.

Treat the result as a conditional pass for reviewed list classification only. No enrichment, sending, CRM writes, or sequence enrollment were tested or authorized.

The evaluation supports a teaching recommendation, not a production adoption claim. Live endpoint behavior, rate limits, source quality, copy quality, read-only connector behavior, API readback, and paid-platform execution remain unverified. A separate approval is required before code is copied or adapted, a package is installed, a live system is connected, real data is used, or any external action occurs.

## North Peak AI Security

North Peak AI Security, Alder Manufacturing, and all related people, facts, products, proof, and campaign material are fictional. They exist only as reusable demonstration assets. The canonical files for this webinar are in [`northpeak/`](northpeak/README.md).
