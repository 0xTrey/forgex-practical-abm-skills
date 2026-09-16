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

### 2. What you will learn today

**Visible path:**

`GROUND THE WORK → PACKAGE THE PROCESS → CONNECT THE SYSTEM → RUN IT SAFELY`

**Visible definitions:**

- Ground the work: company brain and approved context
- Package the process: reusable skills and output contracts
- Connect the system: tools, MCP, and permission boundaries
- Run it safely: state, evaluation, and human approval

**Bottom line:** Build the whole operating system, then move one useful level at a time.

**Visual:** Preserve the four-card progression so the learning contract previews the architecture that follows.

### 3. Breaking Down the Jargon

**Visible copy:**

- Model: interprets information and generates a response
- Harness: runs and governs the work around the model
- Prompt: gives one task, its goal, constraints, and desired output
- Context: supplies the facts, rules, examples, and current state
- Skill: documents a repeatable process, output rules, QA, and stop points
- Tool: performs an action, such as search, calculation, or creation
- MCP: connects the AI system to approved data, resources, and tools
- Automation: follows a predefined path from a trigger or schedule
- Agent: chooses and checks its next step while pursuing a goal

**Bottom line:** This is the shared language we will use for the rest of the session.

**Visual:** Two compact, plain-language definition columns. Make the differences between adjacent terms easy to scan.

**Source notes:** [MCP introduction](https://modelcontextprotocol.io/docs/getting-started/intro), [Anthropic: Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)

## Act II: Move up the AI for ABM ladder

### 4. The ForgeX AI for ABM maturity ladder

**Visible levels:**

`0 FANCY SEARCH → 1 CONTEXTUAL COPILOT → 2 GROUNDED WORKSPACE → 3 REUSABLE SKILL → 4 GOVERNED AUTOMATION → 5 GOAL-DRIVEN AGENT → 6 AGENTIC OPERATING SYSTEM`

**Bottom line:** Level 6 coordinates agents, tools, memory, triggers, and reliability across the stack.

**Visual:** One continuous rising path. The stack underneath grows with each level.

### 5. Level 0: Fancy Search

**Visible input:**

> Teach me about AI security for manufacturers. Give me five campaign ideas.

**Visible output:** Generalized ideas that the marketer must sift, verify, and rebuild.

**Layer:** model or search interface

**Warning:** A fluent answer is not an account insight.

**Visual:** Five blue links and a polished generic answer merge into the same loose pile.

### 6. Level 1: Contextual Copilot

**Visible input:**

> North Peak sells Discover, Protect, and Monitor. Alder is expanding industrial AI. Draft three campaign premises for a VP of Infrastructure. Separate facts from hypotheses.

**Visible output:** A more relevant one-off draft.

**Layer added:** structured prompt, supplied context, human iteration

**Marketer shift:** Define the job, evidence, output, and guardrails.

### 7. Level 2: Grounded Workspace

**Visible input:**

> Use the North Peak company brain and Alder evidence pack. Recommend one campaign premise. Cite the source file for each material claim.

**Visible output:** A grounded draft that uses the same brand, ICP, persona, product, and proof rules every time.

**Layer added:** persistent, approved context

**Bottom line:** Stop making the model relearn the company.

### 8. The company brain is only one layer of the system

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

**Visible layers:**

- Company brain: durable approved knowledge
- Repository: versioning, review, and portability
- Shared memory: what carries across runs
- Current state: what this job knows now
- Scoped access: only what the role and task require

**Bottom line:** GitHub versions the brain. A vault carries memory. Neither grants blanket access.

**Visual:** Put the North Peak corpus beside the five operating layers. Do not imply every file must move into GitHub or every agent can access every source.

**Source notes:** [Cerebras: How We Built Our Knowledge Base](https://www.cerebras.ai/blog/how-we-built-our-knowledge-base), [independent architectural walkthrough](https://www.stellarwork.com/captains-log/how-cerebras-built-their-company-brain)

### 9. The company gives you the van. You bring the tools.

**Visible copy:**

- Models change
- Harnesses change
- Data and APIs change
- Employers change
- Context, skills, templates, tests, and decision logs can compound

**Bottom line:** Connection patterns, blank templates, and tests can travel. Employer data and intellectual property stay behind.

**Visual:** A clean pipe diagram connecting company brain, skills, tools, review, and output. Each vendor component can be swapped without breaking the business logic.

### 10. Level 3: Reusable Skill

**Visible shift:**

`TELL ME X ANSWER → PRODUCE Y OUTCOME THROUGH THIS PROCESS`

**Visible input:**

> Follow the ABM Strategist skill. Use the North Peak corpus and Alder evidence. Produce the required campaign brief. Apply the output contract and QA. Stop before creative or outreach.

**Visible output:** The same inspectable brief structure across accounts and users.

**Layer added:** skill, template, output contract, QA, stop conditions

### 11. The model thinks. The harness makes it work.

**Visible harness anatomy:**

`CONTEXT + MEMORY → SKILLS → TOOLS + MCP → STATE + LOOP → EVALUATION → HUMAN + PERMISSIONS`

**Bottom line:** The harness loads evidence, runs the loop, uses approved tools, checks the result, and knows when to stop.

**Visual:** Use the existing six-part ForgeX sequence. The robot is an optional metaphor, not the architecture.

### 12. Skills worth borrowing from the GTM community

**Visible title:** Verify, interpret, qualify, then draft.

**Level 3 sequence:**

1. **Verify evidence:** Hiring Signal Verification, Peter S. Borkovich. T3 synthetic plus T4 live read-only pass. Verify a hiring claim before scoring or messaging.
2. **Interpret meaning:** Signal Interpreter, Din Arbel. T3 synthetic pass. Produce strength, confidence, why-now, limits, and open questions without routing or writing.
3. **Qualify the audience:** Audience ICP Filter, Erwann Lefevre. T3 synthetic and bundled regression pass. Reconcile Keep, Exclude, and Review records before downstream work.
4. **Generate a draft:** Multichannel Campaign Builder, Erwann Lefevre. T3 conditional synthetic pass. Use source-backed inputs and mandatory human copy QA. Do not send or activate.

**Level 2-to-3 bridge:** Company Deep Dive, Uriel Knorovich. Use only the source hierarchy, dated-claim, contradiction, and refresh-deduplication concepts. The package has T1 static-review evidence only and is not operationally verified.

**Local evidence strip:** Hiring audit: 11 labels, 2 accepted, 4 narrowed, 5 dropped. Audience filter: 22 synthetic records reconciled and 45 of 45 checks passed. Campaign builder: 3 angles and 5 touches in one synthetic draft, with mandatory human QA.

**Status line:** External MIT-licensed community work, with creator attribution. Evidence labels describe local static, synthetic, or live read-only evaluation. These are teaching references, not ForgeX-certified, production-adopted, or production-proven capabilities.

**Visual:** One four-step sequence with evidence labels attached to each step. Put the Company Deep Dive source-hierarchy concept in a separate bridge strip so it cannot be mistaken for a verified Level 3 package.

**Audience exercise:** Give attendees a raw hiring claim and ask where the system must stop next. The correct sequence is verify the claim, interpret its meaning, decide qualification, then draft. Routing and sending are separate decisions.

**Speaker job:** Teach attendees to inspect the design pattern and its evidence before copying code. Do not present these skills as part of the live build.

**Source notes:** [Hiring Signal Verification, Peter S. Borkovich](https://github.com/swan-gtm/gtm-skills/tree/d378356a2668095d71e8dfb0661155255cf6776b/skills/peter-borkovich/hiring-signal-verification), [Signal Interpreter, Din Arbel](https://github.com/swan-gtm/gtm-skills/tree/d378356a2668095d71e8dfb0661155255cf6776b/skills/din-arbel/signal-interpreter), [Audience ICP Filter, Erwann Lefevre](https://github.com/swan-gtm/gtm-skills/tree/d378356a2668095d71e8dfb0661155255cf6776b/skills/erwann-lefevre/audience-icp-filter), [Multichannel Campaign Builder, Erwann Lefevre](https://github.com/swan-gtm/gtm-skills/tree/d378356a2668095d71e8dfb0661155255cf6776b/skills/erwann-lefevre/multichannel-campaign-builder), [Company Deep Dive, Uriel Knorovich](https://github.com/swan-gtm/gtm-skills/tree/d378356a2668095d71e8dfb0661155255cf6776b/skills/uri-knorovich/company-deep-dive), [Swan GTM Skills MIT license](https://github.com/swan-gtm/gtm-skills/blob/d378356a2668095d71e8dfb0661155255cf6776b/LICENSE)

### 13. Level 4: Governed Automation

**Visible input:**

> Every Monday, check approved Alder sources. If material evidence changed, rerun the skills, update the brief, show the diff, and route exceptions. Do not publish or send.

**Visible output:** Updated brief, diff, no-change record, exception queue, and audit trail.

**Layer added:** trigger, state, routing, retries, monitoring

**Bottom line:** The value is real even when the path is fixed.

### 14. A cron job IN a trench coat

**Visible title:** Do not dress up a brittle automation and call it an agent.

**Visible test:**

- Predetermined path and tools: automation
- Goal, dynamic planning, and tool choice: agent

**Visual:** Two awkward computer robots stacked inside one oversized plum trench coat. Fun, memorable, and original. No movie brand or character references.

**Speaker job:** Respect useful automation. Warn against fake sophistication and unearned authority.

### 15. Every agent runs a loop

**Visible loop:**

1. Load context: company brain and current state
2. Choose: goal, plan, and next step
3. Act: skill plus approved tool or MCP
4. Evaluate: finish, revise, or ask a human

**Bottom line:** Memory, permissions, logs, and guardrails surround every pass through the loop.

**Visual:** One operating loop. Level 3 defines the process, Level 4 triggers the known loop, and Level 5 can choose the next step within bounded authority. Level 6 coordinates many loops without turning them into one giant agent.

**Source note:** [Anthropic: Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)

### 16. Level 5: Goal-Driven Agent System

**Visible shift:**

`I GIVE YOU TEXT, YOU GIVE ME AN ANSWER → I GIVE YOU A GOAL, YOU PRODUCE THE OUTCOME`

**Visible input:**

> Increase qualified engagement across North Peak's top industrial AI accounts. Decide which accounts need research, a refreshed brief, a personalized experience, or no action. Evaluate the work and request approval before activation.

**Visible output:** A prioritized plan and the right mix of research, briefs, experiences, and next actions.

**Layer added:** goal, plan, context, skills, tools, state, evaluation, and human interrupt

### 17. Level 6: Agentic Operating System

**Visible architecture:**

- Codex routes the work to bounded sub-agents, Cursor, Hermes, OpenClaw, Grokbot, and approved systems
- Obsidian Vault carries durable shared memory
- GitHub versions the shared skills and context repository
- time triggers start scheduled work
- event triggers start work when approved conditions change
- canaries exercise critical paths and failed checks become hardening work

**Bottom line:** One interface routes goals. Shared memory, portable skills, triggers, and reliability loops keep the work moving.

**Mental shift:** Level 5 is one goal-driven agent system deciding which work is needed. Level 6 is the coordination layer around many agents, systems, memory stores, schedules, triggers, evaluations, and hardening routines.

**Governance boundary:** More coordination does not grant blanket authority. Human approval still owns send, publish, spend, and system-of-record writes.

**Visual:** Use the two-layer ForgeX bus diagram. Put delegated execution systems above the bus and durable memory, versioned skills, triggers, canaries, and hardening below it. Keep the visual simple enough to explain in two minutes.

## Act III: Make the upgrade practical

### 18. Each level adds infrastructure beneath the outcome

**Visible job:** Keep North Peak's Alder campaign current.

**Visible progression:**

| Level | System returns |
|---:|---|
| 0 | search interface |
| 1 | prompt plus supplied context |
| 2 | company brain |
| 3 | skill plus output contract |
| 4 | trigger plus state plus monitoring |
| 5 | goal plus planning plus tool choice |
| 6 | orchestration plus shared memory plus triggers plus reliability loops |

**Visual:** A cumulative staircase. Use the Age of Empires analogy briefly: every new capability depends on the economy and infrastructure beneath it.

### 19. Measure outcomes, not AI activity

**Visible measures:**

`SPEED · QUALITY · CONSISTENCY · CAMPAIGN VOLUME · PERSONALIZATION`

**Operational measures for Levels 4 through 6:** correction rate, exceptions, failed runs, stale sources, unsupported claims, human overrides, canary failures, hardening cycle time, and cost per approved outcome

**Visual:** Five measures remain fixed while the maturity level rises behind them.

### 20. Most teams should focus here

**Visible spotlight:**

`LEVEL 2 → LEVEL 3 → LEVEL 4`

**Visible resources:**

- Company Brain Builder
- Skills Repository Starter
- Shared Memory Starter
- ABM Strategist
- Ten starter skills and 30-day plans

**Beyond Level 4 CTA:** Book a one-to-one architecture working session. The right Level 5 or Level 6 design depends on your goals, systems, data, permissions, operating model, and failure tolerance.

### 21. Live build: from a fresh workspace to a grounded ABM system

**Visible steps:**

1. Open a fresh Claude Code workspace through ForgeX
2. Bring in the ForgeX repository
3. Inspect permissions, the North Peak brain, and ABM Strategist
4. Run the Level 3 prompt for Alder
5. Trace the loop, review evidence and approvals, and explain Level 4

**Bottom line:** Leave with one repeated job you are ready to move up one level.

**Visual:** Keep this slide visible during the screen-share transition.

## Optional close after the demo

Return to Slide 19 only if time allows.

**Closing question:** What is the one repeated ABM job your team should stop rebuilding from scratch?

**Resource:** `github.com/0xTrey/forgex-practical-abm-skills`
