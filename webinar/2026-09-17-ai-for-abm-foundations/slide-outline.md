# Slide-by-slide storyline

## Design system

- Format: 16:9 widescreen
- Brand: ForgeX first, with North Peak appearing only inside the demonstration
- Visual voice: editorial field guide, useful, slightly irreverent, and built for nontechnical marketers
- ForgeX palette: warm cream `#FAF7F2`, deep plum `#3D1F5C`, near-black `#0B0B0F`, pink `#E63888`, lime `#C7F25C`
- Type: heavy geometric sans for claims, readable sans for explanation, monospaced type for prompts and repository paths
- Recurring motif: the AI stack grows one physical layer at a time
- Rule: one claim or decision per slide. Do not turn the maturity rubric into six dense software-architecture diagrams
- Forbidden composition: never stack an eyebrow or kicker above a headline with a subtitle or dek below it. Start with one primary headline. Put support in the body, data, caption, or footer.

## Act I: Name the shift

### 1. Title

**Visible title:** AI for ABM: What You Need to Know About MCPs, Agents & Prompts

**Footer:** Trey Harnden, ForgeX · September 17, 2026

**Visual:** Match the public promo creative closely enough for continuity. Keep the title exact.

### 2. Part I showed the output. Part II builds the system.

**Visible path:**

`PROPENSITY → LANDING PAGES → MICROSITES → THE OPERATING SYSTEM UNDERNEATH`

**Bottom line:** The Folloze MCP and skills were examples of a larger maturity shift.

**Visual:** Three recognizable Part I outputs on the left. Their context, skill, connector, and review layers unfold on the right.

### 3. The terms, in one sentence each

**Visible copy:**

- Model: the reasoning and generation engine
- Harness: the workbench that gives the model files, tools, state, and controls
- Prompt: the instruction for this request
- Context: the evidence and rules the model can use now
- Skill: a reusable process with inputs, outputs, stop conditions, and QA
- Tool: a capability the system can call
- MCP: a standard way for an AI host to access approved resources, prompts, and tools
- Automation: a known path run by a trigger or schedule
- Agent: a system that chooses how to pursue a goal within constraints

**Visual:** A single annotated pipeline. Avoid a glossary grid.

**Source notes:** [MCP introduction](https://modelcontextprotocol.io/docs/getting-started/intro), [Anthropic: Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)

### 4. Zapier raised the AI fluency bar

**Visible title:** Fluency is observable behavior, not tool familiarity.

**Visible reference:** Zapier's V2 rubric: Capable, Adoptive, Transformative across Mindset, Strategy, Building, and Accountability.

**Visual:** Flash the [official Zapier V2 visual](https://images.ctfassets.net/lzny33ho1g45/4k3Lhj5hWuAxfBmPAqOYVe/4474ad100a57fa1eddfe880af5b70f2c/FINAL_Rubric_3Levels_V2.png) with clear attribution. Then highlight Building and Accountability.

**Speaker job:** Explain that ForgeX is adapting the logic to the specific jobs and infrastructure of ABM.

## Act II: Move up the AI for ABM ladder

### 5. The ForgeX AI for ABM maturity ladder

**Visible levels:**

`0 FANCY SEARCH → 1 CONTEXTUAL COPILOT → 2 GROUNDED WORKSPACE → 3 REUSABLE SKILL → 4 GOVERNED AUTOMATION → 5 GOAL-DRIVEN AGENT`

**Bottom line:** Do not jump to Level 5. Move up one useful level.

**Visual:** One continuous rising path. The stack underneath grows with each level.

### 6. Level 0: Fancy Search

**Visible input:**

> Teach me about AI security for manufacturers. Give me five campaign ideas.

**Visible output:** Generalized ideas that the marketer must sift, verify, and rebuild.

**Layer:** model or search interface

**Warning:** A fluent answer is not an account insight.

**Visual:** Five blue links and a polished generic answer merge into the same loose pile.

### 7. Level 1: Contextual Copilot

**Visible input:**

> North Peak sells Discover, Protect, and Monitor. Alder is expanding industrial AI. Draft three campaign premises for a VP of Infrastructure. Separate facts from hypotheses.

**Visible output:** A more relevant one-off draft.

**Layer added:** structured prompt, supplied context, human iteration

**Marketer shift:** Define the job, evidence, output, and guardrails.

### 8. Level 2: Grounded Workspace

**Visible input:**

> Use the North Peak company brain and Alder evidence pack. Recommend one campaign premise. Cite the source file for each material claim.

**Visible output:** A grounded draft that uses the same brand, ICP, persona, product, and proof rules every time.

**Layer added:** persistent, approved context

**Bottom line:** Stop making the model relearn the company.

### 9. Build a company brain, not a document dump

**Visible repository:**

```text
/brand-guidelines.md
/messaging-framework.md
/icp.md
/personas.md
/product-portfolio.md
/proof-and-claims.md
/source-manifest.md
```

**Visible principles:** scoped, permission-aware, source-backed, fresh, versioned

**Visual:** One connected corpus with owners and review dates. Show source systems feeding a common interface without pretending every file must move into GitHub.

**Source notes:** [Cerebras: How We Built Our Knowledge Base](https://www.cerebras.ai/blog/how-we-built-our-knowledge-base), [independent architectural walkthrough](https://www.stellarwork.com/captains-log/how-cerebras-built-their-company-brain)

### 10. The marketer becomes the plumber

**Visible title:** Learn the plumbing. Keep the durable parts portable.

**Visible copy:**

- Models change
- Harnesses change
- Connectors change
- Employers change
- Context, skills, templates, tests, and decision history can survive

**Bottom line:** Company tools are fixtures. Your ability to connect the system is the craft.

**Visual:** A clean pipe diagram connecting company brain, skills, tools, review, and output. Each vendor component can be swapped without breaking the business logic.

### 11. Level 3: Reusable Skill

**Visible shift:**

`TELL ME X ANSWER → PRODUCE Y OUTCOME THROUGH THIS PROCESS`

**Visible input:**

> Follow the ABM Strategist skill. Use the North Peak corpus and Alder evidence. Produce the required campaign brief. Apply the output contract and QA. Stop before creative or outreach.

**Visible output:** The same inspectable brief structure across accounts and users.

**Layer added:** skill, template, output contract, QA, stop conditions

### 12. A skill is a small operating manual for an agent

**Visible anatomy:**

`WHEN TO USE → INPUTS → PROCESS → OUTPUT CONTRACT → QUALITY CHECKS → STOP CONDITIONS`

**Example:** ABM Strategist turns evidence into an approval-ready account campaign brief.

**Visual:** One plain-text `SKILL.md` expands into a campaign brief with visible evidence, hypothesis, recommendation, unknown, and approval labels.

### 13. Skills worth borrowing from the GTM community

**Visible title:** Borrow the pattern. Keep the attribution.

**Primary examples:**

- **Multichannel Campaign Builder, Erwann Lefevre, Level 3:** intake brief → three-angle correction checkpoint → channel rules → output contract → QA. Local treatment: draft generation only
- **1:1 ABM Ads, Ivan Falco, advanced Level 3 to 4:** SOPs and configs → scripted production → DRAFT creation → QA → explicit activation gate. Local treatment: draft-only, with no activation or spend

**Adopt or pilot candidates:**

- Hiring Signal Verification: source-domain verification gate
- Signal Interpreter: interpretation without side effects
- Audience ICP Filter: deterministic and semantic reconciliation. Conditional pass for reviewed list classification only
- Company Deep Dive: dated sources, facts versus inference, and refresh deduplication

**Local evidence strip:** 18 packages inspected · 45 of 45 ICP-filter tests passed · 22 synthetic attendees reconciled to 12 match, 1 review, 6 no match, and 3 excluded · LinkedIn scripts refused to start without credentials

**Status line:** External MIT-licensed community work, with creator attribution. The examples were evaluated locally for draft-only or proposed-pilot use. They are not ForgeX-certified, production-adopted, or production-proven in Trey's environment.

**Visual:** Two large example lanes with the reusable pattern highlighted. Use a narrow pattern strip for the four additional candidates. Keep creator attribution next to every skill.

**Speaker job:** Teach attendees to inspect the design pattern before copying code. Do not present these skills as part of the live build.

**Source notes:** [Multichannel Campaign Builder, Erwann Lefevre](https://github.com/swan-gtm/gtm-skills/tree/d378356a2668095d71e8dfb0661155255cf6776b/skills/erwann-lefevre/multichannel-campaign-builder), [1:1 ABM Ads, Ivan Falco](https://github.com/swan-gtm/gtm-skills/tree/d378356a2668095d71e8dfb0661155255cf6776b/skills/ivan-falco/1-to-1-abm-ads), [Swan GTM Skills MIT license](https://github.com/swan-gtm/gtm-skills/blob/d378356a2668095d71e8dfb0661155255cf6776b/LICENSE)

### 14. Level 4: Governed Automation

**Visible input:**

> Every Monday, check approved Alder sources. If material evidence changed, rerun the skills, update the brief, show the diff, and route exceptions. Do not publish or send.

**Visible output:** Updated brief, diff, no-change record, exception queue, and audit trail.

**Layer added:** trigger, state, routing, retries, monitoring

**Bottom line:** The value is real even when the path is fixed.

### 15. A cron job IN a trench coat

**Visible title:** Do not dress up a brittle automation and call it an agent.

**Visible test:**

- Predetermined path and tools: automation
- Goal, dynamic planning, and tool choice: agent

**Visual:** Two awkward computer robots stacked inside one oversized plum trench coat. Fun, memorable, and original. No movie brand or character references.

**Speaker job:** Respect useful automation. Warn against fake sophistication and unearned authority.

### 16. Workflow, agent, and MCP each solve a different problem

**Visible copy:**

- Workflow defines a known route
- Agent chooses the route
- MCP provides a standard connection to approved resources and tools
- Governance defines what may happen and where a human decides

**Bottom line:** MCP gives access. It does not give judgment or permission.

**Visual:** A road map, a driver, a set of on-ramps, and guarded gates.

**Source note:** [Anthropic: Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)

### 17. Level 5: Goal-Driven Agent System

**Visible shift:**

`I GIVE YOU TEXT, YOU GIVE ME AN ANSWER → I GIVE YOU A GOAL, YOU PRODUCE THE OUTCOME`

**Visible input:**

> Increase qualified engagement across North Peak's top industrial AI accounts. Decide which accounts need research, a refreshed brief, a personalized experience, or no action. Evaluate the work and request approval before activation.

**Visible output:** A prioritized plan and the right mix of research, briefs, experiences, and next actions.

**Layer added:** goals, planning, tool choice, evaluation, bounded delegation, interrupt controls

## Act III: Make the upgrade practical

### 18. One ABM job across all six levels

**Visible job:** Keep North Peak's Alder campaign current.

**Visible progression:**

| Level | System returns |
|---:|---|
| 0 | generic ideas |
| 1 | one-off tailored draft |
| 2 | grounded draft |
| 3 | repeatable approval-ready brief |
| 4 | refreshed brief, diff, and exception queue |
| 5 | prioritized plan and the artifacts the goal requires |

**Visual:** One campaign brief transforms as layers stack underneath it.

### 19. Measure outcomes, not AI activity

**Visible measures:**

`SPEED · QUALITY · CONSISTENCY · CAMPAIGN VOLUME · PERSONALIZATION`

**Operational measures for Levels 4 and 5:** correction rate, exceptions, failed runs, stale sources, unsupported claims, human overrides, cost per approved outcome

**Visual:** Five measures remain fixed while the maturity level rises behind them.

### 20. Most teams should focus here

**Visible spotlight:**

`LEVEL 2 → LEVEL 3 → LEVEL 4`

**Visible resources:**

- North Peak company brain
- Context Corpus Builder
- ABM Strategist and supporting skills
- 30-day Level 2-to-3 plan
- 30-day Level 3-to-4 plan

**Level 4-to-5 CTA:** Book a one-to-one architecture working session. The right design depends on your goals, systems, data, permissions, and failure tolerance.

### 21. Live build: from a fresh workspace to a grounded ABM system

**Visible steps:**

1. Open a fresh Claude Code workspace through ForgeX
2. Bring in the ForgeX repository
3. Inspect the safety contract, North Peak brain, and ABM Strategist
4. Run the Level 3 prompt for Alder
5. Review the output, evidence, gaps, and approvals
6. Show what would be added for Level 4

**Bottom line:** The useful artifact is the portable system, not the empty chat.

**Visual:** Keep this slide visible during the screen-share transition.

## Optional close after the demo

Return to Slide 19 only if time allows.

**Closing question:** What is the one repeated ABM job your team should stop rebuilding from scratch?

**Resource:** `github.com/0xTrey/forgex-practical-abm-skills`
