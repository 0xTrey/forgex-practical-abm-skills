# ForgeX AI for ABM Maturity Rubric

## The point of the model

AI maturity is not measured by how many tools a team has purchased. It is measured by how reliably the team can turn approved context into useful ABM outcomes.

The six levels below show what changes as a marketer moves from isolated questions to governed agent systems. Each level adds a new layer. The earlier layers do not disappear.

## The six-level view

| Level | Name | The request changes to | What the system can reliably do | Main risk |
|---:|---|---|---|---|
| 0 | Fancy Search | "Tell me about this." | Return a generalized answer from the model's available knowledge or a search result | Generic output is mistaken for account insight |
| 1 | Contextual Copilot | "Use this context to help me create this draft." | Complete a bounded task in one working session | Quality depends on who wrote the prompt and what they remembered to include |
| 2 | Grounded Workspace | "Use our approved company brain and this account evidence." | Produce work grounded in shared brand, product, ICP, persona, and proof context | The brain becomes stale, contradictory, or too broad |
| 3 | Reusable Skill | "Produce this outcome through this specific process." | Follow a documented workflow with required inputs, an output contract, stop conditions, and QA | A weak process becomes repeatable at scale |
| 4 | Governed Automation | "Run this workflow when this trigger occurs, update the existing record, and route exceptions." | Execute a known sequence on a schedule or event, preserve state, and surface changes for review | A brittle workflow is mislabeled as an agent and allowed to act beyond its design |
| 5 | Goal-Driven Agent System | "Here is the goal, constraints, and authority. Decide how to achieve the outcome." | Plan, choose tools and skills, adapt to evidence, create the right outputs, and ask for decisions at consequence boundaries | Excess authority, weak evaluation, hidden failure modes, or unclear ownership |

## The stack

```text
LEVEL 5  + goals + planning + tool choice + evaluation + bounded delegation
LEVEL 4  + triggers + schedules + state + routing + exception handling
LEVEL 3  + skills + templates + output contracts + tests
LEVEL 2  + company brain + source register + approved examples
LEVEL 1  + structured prompt + supplied context + human iteration
LEVEL 0    model or search interface

GOVERNANCE surrounds every level: sources, permissions, review, ownership, and measurement.
```

The model is replaceable. The durable value sits above it: your context, processes, examples, tools, evaluations, and decision history.

## What changes at every level

### Level 0: Fancy Search

**Mental model:** AI is a faster place to ask a question.

**Typical input**

> Teach me about AI security for manufacturing companies. Give me five campaign ideas.

**Typical output**

A plausible list of common problems and generic campaign themes. It may be useful for orientation, but it is not grounded in North Peak's position, Alder's context, or approved proof.

**Technology**

- A company chat tool or public assistant
- Optional web search
- No persistent project context

**Marketer behavior**

- Asks one-off questions
- Accepts or rewrites the answer manually
- Starts a new chat for the next job

**Underlying assets**

- Whatever the marketer remembers to paste
- No shared source register

**Personal governance**

- Verify factual claims before reuse
- Do not treat generalized research as account evidence
- Do not paste confidential or restricted material into an unapproved environment

**Ready to advance when:** the marketer can define the job, supply relevant context, name the desired output, and critique the result.

### Level 1: Contextual Copilot

**Mental model:** AI helps me complete a bounded task.

**Typical input**

> North Peak sells an AI security platform built around Discover, Protect, and Monitor. Alder Manufacturing is evaluating industrial AI across plants, edge systems, and cloud services. Draft three account campaign premises for a VP of Infrastructure. Separate supplied facts from hypotheses. Do not invent proof.

**Typical output**

Three more relevant campaign premises. The result improves because the marketer supplied the missing context, but the work still depends on one person's prompt and judgment.

**Technology**

- Company-approved chat assistant
- File attachment or project chat
- Optional search or basic connector

**Marketer behavior**

- Gives the model a clear job, audience, evidence, format, and guardrails
- Iterates deliberately instead of accepting the first answer
- Evaluates the output against a named standard

**Underlying assets**

- A prompt pattern
- A small input brief
- An example of a useful output

**Personal governance**

- Label facts, hypotheses, and unknowns
- Review every external claim
- Keep consequential actions manual

**Ready to advance when:** useful prompts repeat, missing context is obvious, and multiple people need the same grounding.

### Level 2: Grounded Workspace

**Mental model:** the model should not have to relearn the company every time.

**Typical input**

> Use the North Peak context corpus and the approved Alder account brief. Recommend one campaign premise and a message hierarchy for the VP of Infrastructure. Cite the source file for each company or account claim. List missing proof.

**Typical output**

A draft grounded in the same brand, positioning, product, ICP, persona, and proof rules that the rest of the team uses. The process is still directed manually, but the inputs are consistent and portable.

**Technology**

- A project or workspace with persistent files
- A versioned repository such as GitHub
- Search or retrieval across approved material

**Marketer behavior**

- Curates context before asking for production work
- Reuses a shared company brain
- Corrects the source material, not only the output

**Underlying assets**

- Brand guidelines
- Messaging framework
- ICP and persona definitions
- Product portfolio
- Proof and claims register
- Source manifest, owners, and review dates

**Personal governance**

- Name an owner and review date for every core document
- Preserve source permissions and confidentiality
- Resolve conflicts instead of silently choosing one version
- Keep project scope narrow enough to avoid noisy retrieval

**Ready to advance when:** the same job is performed repeatedly and the team can describe the process and acceptance criteria.

### Level 3: Reusable Skill

**Mental model:** move from "tell me the answer" to "produce the outcome through this process."

**Typical input**

> Follow the ABM Strategist skill. Use the North Peak corpus and Alder evidence pack. Produce an approval-ready account campaign brief. Apply the skill's workflow, output contract, safety rules, and QA checks. Stop before creative production or outreach.

**Typical output**

A consistent brief with a decision, source register, campaign premise, buying-role hypotheses, message hierarchy, experience recommendation, missing proof, measurement plan, and required approvals.

**Technology**

- A repository of plain-text skills and templates
- A capable assistant or coding-agent harness that can read files
- Optional MCP tools for approved research or file access

**Marketer behavior**

- Documents the best-known process
- Defines required inputs and a useful output contract
- Reviews exceptions and improves the skill after real use

**Underlying assets**

- Context corpus
- Reusable `SKILL.md` files
- Templates and approved examples
- QA checklist and stop conditions
- Decision log and change history

**Personal governance**

- Test the skill on multiple cases before team rollout
- Keep human approval at targeting, claims, creative, and activation
- Track common corrections and update the shared skill

**Ready to advance when:** the skill passes real cases consistently, exceptions are understood, and the team can name a safe trigger.

### Level 4: Governed Automation

**Mental model:** run the known process when something changes.

**Typical input**

> Every Monday, check the approved source list for Alder changes. If material evidence changed, rerun the signal scan and ABM Strategist skill, update the existing brief, show a section-level diff, and route claims or targeting changes to the owner. Do not publish or send.

**Typical output**

An updated brief, source changes, a clear diff, an exception queue, and an audit record. If nothing material changed, the workflow records a no-change result rather than generating unnecessary work.

**Technology**

- Scheduler or event trigger
- Deterministic workflow orchestration
- State, logs, retries, and failure notifications
- Approved APIs, MCP servers, or other connectors
- Human review queue

**Marketer behavior**

- Designs for normal cases, edge cases, and no-change cases
- Monitors quality and exceptions
- Owns the workflow as an operating process, not a one-time build

**Underlying assets**

- Everything from Level 3
- Trigger definition
- State and update rules
- Field mappings and permissions
- Test cases, rollback path, and runbook

**Personal governance**

- Default to read, research, draft, and recommend
- Require explicit approval before send, publish, spend, or system-of-record writes
- Log what ran, what changed, which sources were used, and who approved
- Measure false positives, correction rate, failures, and stale outputs

**Ready to advance when:** some goals genuinely require dynamic planning rather than a longer fixed workflow.

### Level 5: Goal-Driven Agent System

**Mental model:** provide the goal, context, tools, authority, and evaluation. Let the agent decide what work is needed.

**Typical input**

> Goal: increase qualified engagement across North Peak's top industrial AI accounts this quarter. Use the approved company brain, account evidence, engagement data, and available ABM skills. Decide which accounts need research, a refreshed brief, a personalized experience, or no action. Explain the plan, create drafts, evaluate them against our standards, and request approval before any external activation or system write.

**Typical output**

A prioritized work plan and the artifacts required to pursue it. The system may choose different paths for different accounts, use multiple tools or skills, revise its work, and surface decisions that need a human owner.

**Technology**

- Agent harness with planning, tools, memory or state, and evaluation
- MCP servers and APIs with scoped permissions
- Optional sub-agents for bounded specialist work
- Observability, budget limits, audit trail, and interrupt controls

**Marketer behavior**

- Defines goals, constraints, success measures, and authority boundaries
- Evaluates outcomes and system behavior, not just individual drafts
- Redesigns the operating model around what humans and agents each do best

**Underlying assets**

- Everything from Level 4
- Goal and policy definitions
- Tool registry and permission model
- Evaluation suite and failure taxonomy
- Escalation rules, budgets, ownership, and incident runbook

**Personal governance**

- Grant the minimum authority required
- Require checkpoints at consequential decisions
- Test adversarial, ambiguous, stale, and partial-data scenarios
- Maintain a clear human owner for outcomes and failures

**Ready to operate when:** the system can show why it chose a path, what evidence it used, how it evaluated the result, and where it stopped for a human decision.

## Same ABM job across all six levels

**Job:** Create and keep current a campaign for North Peak AI Security targeting Alder Manufacturing's VP of Infrastructure.

| Level | What the marketer provides | What the system returns | Human work that remains |
|---:|---|---|---|
| 0 | A broad topic question | Generic industrial AI security ideas | Find relevance, verify everything, rebuild the answer |
| 1 | Seller, target, persona, facts, format, guardrails | A one-off account campaign draft | Re-supply context, judge quality, preserve the useful parts |
| 2 | Shared North Peak corpus plus Alder evidence | A grounded draft using consistent language and claims | Choose the process and assemble the output |
| 3 | The corpus, evidence pack, and ABM Strategist skill | A repeatable approval-ready campaign brief | Review exceptions, approve strategy, improve the skill |
| 4 | A trigger, workflow, state rules, and approval routing | A refreshed brief, diff, audit record, and exception queue | Monitor operations and approve consequential changes |
| 5 | A business goal, tools, skills, constraints, authority, and evaluation | The right mix of prioritized research, briefs, experiences, and next actions | Own the goal, approve consequences, govern the system |

## What to measure

Track the same five outcomes at every level. The meaning changes as the system matures.

| Outcome | Useful measure |
|---|---|
| Speed | Time from approved input to first useful draft or decision |
| Quality | Percentage of outputs passing the defined review standard |
| Consistency | Variation across users, accounts, and runs |
| Campaign volume | Number of approved campaigns or account experiences produced without lowering quality |
| Personalization | Percentage of material claims and recommendations grounded in account or persona evidence |

Add operational measures at Levels 4 and 5: exception rate, failed runs, stale sources, unsupported-claim rate, human override rate, cost per approved outcome, and time to recover.

## Crosswalk to Zapier's AI Fluency Rubric V2

Zapier's V2 rubric evaluates fluency across Mindset, Strategy, Building, and Accountability at three levels: Capable, Adoptive, and Transformative. The ForgeX model applies that logic to ABM work and adds the missing infrastructure steps.

This is an interpretive crosswalk, not a direct conversion:

| Zapier V2 | ForgeX AI for ABM | Practical interpretation |
|---|---|---|
| Before Capable | Levels 0 and early 1 | AI use is inconsistent, one-off, or difficult to evaluate |
| Capable | Levels 1 and 2 | AI improves core work and uses repeatable context or prompts |
| Capable to Adoptive | Level 3 | Individual practice becomes a documented, reusable system |
| Adoptive | Level 4 | Multiple tools and workflows remove meaningful manual work with validation loops |
| Transformative | Level 5 | The team redesigns how ABM work happens around goal-driven systems and organizational governance |

The evidence matters more than the label. A Level 4 team should be able to show a working trigger, update logic, exception path, audit record, and measurable before-and-after result.

## The warning: a cron job IN a trench coat

A scheduled workflow can be extremely valuable. It becomes misleading when the team calls it an autonomous agent.

If the route is predetermined, the prompts are fixed, the tools are fixed, and the system cannot adapt its plan to evidence, it is an automation. Treat it like one. Give it tests, state, monitoring, retries, and human review.

An agent receives a goal and decides how to pursue it within explicit constraints. That extra flexibility is useful only when the job requires it. Fake sophistication creates real operational risk.

## The portable-marketer principle

Models, vendors, interfaces, and employers will change. A marketer should be able to carry the durable parts of the system:

- context files that separate company truth from tool configuration;
- skills that describe repeatable work in plain language;
- templates, examples, tests, and evaluation rules;
- tool contracts and permission assumptions;
- source history, decisions, and improvement notes.

Think like a plumber. Know how the system connects. Use the fixtures your company provides, but understand the pipes well enough to repair, replace, and reconfigure them.
