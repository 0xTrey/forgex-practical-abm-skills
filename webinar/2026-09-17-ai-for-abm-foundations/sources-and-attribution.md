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
- Peter S. Borkovich: [Hiring Signal Verification](https://github.com/swan-gtm/gtm-skills/tree/d378356a2668095d71e8dfb0661155255cf6776b/skills/peter-borkovich/hiring-signal-verification)
- Din Arbel: [Signal Interpreter](https://github.com/swan-gtm/gtm-skills/tree/d378356a2668095d71e8dfb0661155255cf6776b/skills/din-arbel/signal-interpreter)
- Erwann Lefevre: [Audience ICP Filter](https://github.com/swan-gtm/gtm-skills/tree/d378356a2668095d71e8dfb0661155255cf6776b/skills/erwann-lefevre/audience-icp-filter)
- Uriel Knorovich: [Company Deep Dive](https://github.com/swan-gtm/gtm-skills/tree/d378356a2668095d71e8dfb0661155255cf6776b/skills/uri-knorovich/company-deep-dive)

All links are pinned to commit `d378356a2668095d71e8dfb0661155255cf6776b`. Preserve the creator attribution and the MIT notice when copying or substantially reusing licensed material.

ForgeX is using these examples to teach reusable design patterns. They are not ForgeX-authored, ForgeX-certified, production-adopted, or production-proven.

### Local evaluation evidence

- Internal evidence package: `Folloze-Skills-swan-eval/evaluations/swan-gtm/EVALUATION_REPORT.md`, `skill-test-matrix.json`, and `handoffs/forgex-webinar-skill-placement.md`
- Evaluation commit: `8dd94e1` on `codex/swan-gtm-skill-evaluation`
- Publication state: committed locally, not pushed or published
- Evaluation boundary: no external writes, routing, sending, activation, spend, or real customer data
- Hiring Signal Verification: T3 synthetic plus T4 live read-only pass. Six adversarial cases passed. A live audit of 11 labels accepted 2, narrowed 4, and dropped 5.
- Signal Interpreter: T3 synthetic pass. The structured output and no-side-effect requirements passed, with minor schema defects still open.
- Audience ICP Filter: T3 synthetic and bundled regression pass. A 22-person fixture reconciled every row into Keep, Exclude, or Review, and the suite passed 45 of 45 checks.
- Multichannel Campaign Builder: T3 conditional synthetic pass. One fictional ForgeX brief produced three distinct angles and a five-touch sequence. Source-backed inputs and human copy QA remain mandatory.
- Company Deep Dive: T1 static review only. Use its source-hierarchy pattern as a Level 2-to-3 concept, not as an operationally verified package.

The evaluation supports a teaching recommendation, not a production adoption claim. A separate approval is required before code is copied or adapted, a package is installed, a live system is connected, real data is used, or any external action occurs.

## North Peak AI Security

North Peak AI Security, Alder Manufacturing, and all related people, facts, products, proof, and campaign material are fictional. They exist only as reusable demonstration assets. The canonical files for this webinar are in [`northpeak/`](northpeak/README.md).
