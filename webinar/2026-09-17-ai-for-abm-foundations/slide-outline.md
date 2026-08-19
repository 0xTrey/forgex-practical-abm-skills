# Slide-by-slide outline

## Design system

- **Format:** 16:9 widescreen
- **Visual voice:** ForgeX editorial field guide—bold, useful, slightly irreverent, never generic SaaS
- **Backgrounds:** warm cream `#FAF7F2`, deep plum `#3D1F5C`, near-black `#0B0B0F`
- **Primary accent:** ForgeX pink `#E63888`
- **Signal accent:** lime `#C7F25C`, used sparingly for decisions and next actions
- **Type:** heavy geometric sans for claims; readable sans for supporting copy; optional small monospaced text for repository and prompt examples
- **Recurring motif:** a thin hot-pink path moving from scattered experiment to governed system
- **Rule:** one audience-facing claim per slide; timing and presenter instructions remain in the talk track

## 1 — Title

**Visible title:** AI for ABM: Setting Up the Foundations  
**Subtitle:** Context, skills, agents, MCP, and human review  
**Footer:** Trey Harnden · ForgeX · September 17, 2026

**Visual:** Minimal cream title slide. Oversized title anchored left; a pink path enters from the lower-left and resolves into a small lime node near the upper-right.

## 2 — The problem is not a shortage of prompts

**Title:** ABM teams do not need more prompts. They need repeatability.

**Visible copy:**

- Great output trapped in one chat
- No shared context or standards
- No evidence trail or approval path
- The next person starts over

**Visual:** Scattered fragments on the left collapse into one clean, versioned workflow on the right. Avoid a four-card grid.

## 3 — The five-layer foundation

**Title:** Five layers turn AI output into an ABM operating system.

**Visible copy:**

1. Context — what the AI should know
2. Instructions — what good work looks like
3. Tools — what systems it may use
4. Workflows and agents — how work progresses
5. Governance — where humans approve and improve

**Visual:** One ascending stepped path, not five separate cards. Governance forms a visible boundary around the final step.

## 4 — The operating loop

**Title:** The system is a loop, not a chat window.

**Visible flow:**

`CENTRAL BRAIN → REUSABLE SKILL → AUTHORIZED TOOLS → DRAFT OUTPUT → HUMAN REVIEW → LEARNING BACK TO THE BRAIN`

**Visual:** A single circular or folded path with one hot-pink approval gate. The central brain is the visual anchor, not the model logo.

## 5 — The central brain

**Title:** Your central brain should be inspectable, shared, and versioned.

**Visible repository structure:**

```text
/context      ICP, positioning, proof
/skills       repeatable instructions
/templates    approved output shapes
/examples     synthetic or approved references
/decisions    changes and ownership
```

**Bottom line:** GitHub is one practical pattern—not the only repository option.

**Visual:** One large repository tree with a subtle revision-history line. Do not render it as a software IDE screenshot.

**Source note:** [GitHub: About repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories)

## 6 — Prompt versus skill

**Title:** A prompt handles one request. A skill defines repeatable work.

**Visible comparison:**

**Prompt**

- Immediate instruction
- Often depends on the author
- Output quality varies with context

**Skill**

- Input and use boundary
- Repeatable workflow and stop conditions
- Output contract, evidence, and QA

**Visual:** One prompt fragment on the left grows into a documented workflow on the right. Use scale and typography, not UI cards.

## 7 — Prompt anatomy

**Title:** Strong prompts make the work inspectable.

**Visible formula:**

`CONTEXT + JOB + EVIDENCE + OUTPUT + GUARDRAILS`

**Example line:**

> Build an account brief from these approved sources. Separate facts from hypotheses. Return the decision, evidence, message, gaps, and human approvals. Stop before outreach.

**Visual:** One large sentence with five color-coded underlines corresponding to the formula.

## 8 — Workflow versus agent

**Title:** Use a workflow when you know the path. Use an agent when judgment must choose it.

**Visible copy:**

**Workflow:** predictable stages, explicit gates, repeatable task  
**Agent:** model chooses steps or tools, adapts to evidence, checks in when needed

**Bottom line:** Start with the simplest level of autonomy that can do the job.

**Visual:** A straight marked path that branches only on the agent side. Show the tradeoff between predictability and flexibility.

**Source note:** [Anthropic: Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)

## 9 — What MCP is for

**Title:** MCP connects AI to systems. It does not decide what should happen.

**Visible copy:**

- Resources provide context
- Prompts provide reusable starting points
- Tools retrieve information or take action
- The host still controls permissions and consent

**Visual:** AI host in the center connected to three clearly labeled primitives. A visible permission boundary sits before any action system.

**Source notes:**

- [Model Context Protocol introduction](https://modelcontextprotocol.io/docs/getting-started/intro)
- [MCP server primitives](https://modelcontextprotocol.io/specification/2025-06-18/server/index)

## 10 — Governance

**Title:** Human approval belongs at the boundary of consequence.

**Visible spectrum:**

`READ → RESEARCH → DRAFT → RECOMMEND | APPROVE | SEND → PUBLISH → SPEND → WRITE TO RECORD`

**Bottom line:** More consequence should mean more explicit human control.

**Visual:** A horizontal consequence spectrum. The approval line is the strongest visual element.

**Source note:** [Anthropic: Trustworthy agents in practice](https://www.anthropic.com/research/trustworthy-agents)

## 11 — The ABM application map

**Title:** ABM already gives us a natural sequence of jobs.

**Visible flow:**

`DISCOVER → PLAN → BUILD → ACTIVATE → LEARN`

**Examples beneath the flow:**

- Account selection and timing signals
- Campaign strategy and buying groups
- Pages, content, and experiences
- Personal outreach and orchestration
- Engagement review and next action

**Visual:** One continuous path across the slide. Place examples along the path rather than in five panels.

## 12 — Where to begin

**Title:** Start with three skills you can review in minutes.

**Visible sequence:**

1. **Account List Builder** — make targeting logic visible
2. **Why-Now Signal Scanner** — separate timing evidence from intent
3. **ABM Strategist** — turn account evidence into a campaign brief

**Bottom line:** Each creates a draft a marketer can challenge before anything reaches market.

**Visual:** Three numbered stops on the pink path with one example output thumbnail at the end.

## 13 — Live build

**Title:** Live build: from an empty Claude workspace to an account brief.

**Visible steps:**

1. Create a fresh project
2. Add shared safety and ABM Strategist
3. Add synthetic seller and target evidence
4. Run one copy-ready instruction
5. Review facts, assumptions, and decisions

**Visual:** Minimal stage-setting slide with the five steps large enough to remain visible during screen-share transition.

**Source note:** [Anthropic: Creating and managing projects](https://support.anthropic.com/en/articles/9519177-how-can-i-create-and-manage-projects)

## 14 — What a useful output exposes

**Title:** The output should expose evidence, assumptions, and decisions.

**Visible outline:**

- Account evidence with source locations
- Campaign premise and buying-role hypotheses
- Message hierarchy and experience recommendation
- Missing proof and unresolved questions
- Human approvals required before production

**Visual:** One annotated document excerpt. Use highlighted margins for `Evidence`, `Hypothesis`, and `Decision` rather than a dashboard.

## 15 — Thirty-day rollout

**Title:** A 30-day rollout starts with one workflow—not an agent program.

**Visible timeline:**

- **Week 1:** choose one repeated ABM job and collect approved context
- **Week 2:** package the skill, template, example, and review rules
- **Week 3:** run five real cases and capture corrections
- **Week 4:** assign ownership, measure quality, and decide what to connect

**Measures:** time to first useful draft · revision rate · approval pass rate · reuse · adoption

**Visual:** A four-week editorial timeline with the five measures running underneath.

## 16 — Close and resource

**Title:** Leave with one workflow and one next step.

**Visible copy:**

1. Name the repeated ABM job.
2. Package the context, instructions, output, and review gate.
3. Try one ForgeX Practical ABM Skill.

**Resource:** `github.com/0xTrey/forgex-practical-abm-skills`

**Closing question:** What is the first workflow your team should stop rebuilding from scratch?

**Visual:** Large repository URL and optional QR code. End on the audience's next action rather than a generic thank-you.
