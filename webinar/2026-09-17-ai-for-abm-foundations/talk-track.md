# Presenter talk track

The notes are written to be spoken naturally, not read word for word. Bold text marks the thought that should survive even if time is tight.

## Slide 1 — AI for ABM: Setting Up the Foundations

**Target time: 1 minute**

- Welcome everyone and thank ForgeX/Yael for organizing.
- Establish the boundary immediately: this is not a Claude-versus-ChatGPT session and not a tour of shiny AI features.
- “I want to answer a more useful question: what has to be true for AI work inside an ABM program to become repeatable, reviewable, and safe enough for a team to use?”
- Tell the audience they will see a fresh Claude workspace because examples make architecture tangible, but every principle is portable.
- Preview the practical payoff: they should leave able to choose one repeated ABM job and package it into a reusable skill.

**Transition:** “Let’s begin with the failure mode almost every team recognizes.”

## Slide 2 — ABM teams do not need more prompts

**Target time: 3 minutes**

- Ask for a mental show of hands: who has a prompt that worked beautifully once but could not be reproduced by a colleague?
- Describe the common pattern: a smart marketer combines private context, domain judgment, and several corrections inside one chat. The output is good, but the method disappears with the chat.
- Explain why a prompt library alone does not fix it. A prompt without the right evidence, output contract, stop conditions, and review expectations still depends on the original author.
- **The gap is not between teams using AI and teams not using AI. It is between isolated experiments and shared operating infrastructure.**
- Name the cost: repeated setup, uneven quality, invented facts, unclear approvals, and no learning loop.

**Transition:** “So what has to be shared? I use five layers.”

## Slide 3 — Five layers turn output into an operating system

**Target time: 3 minutes**

- Walk through the layers without drowning the audience in definitions.
- Context: the approved facts, positioning, ICP, proof, voice, and constraints the AI needs.
- Instructions: what task it is doing and what good looks like.
- Tools: systems it may read or act through.
- Workflows and agents: how the task progresses and where judgment chooses the next move.
- Governance: ownership, evidence, QA, approvals, permissions, and measurement.
- **Skipping a layer does not make the work simpler. It pushes ambiguity into the output.**
- Make the vendor-neutral point: every major AI environment has some version of context, instructions, tools, and permissions, even if the product labels differ.

**Transition:** “Those layers matter because a production workflow is a loop.”

## Slide 4 — The system is a loop

**Target time: 3 minutes**

- Start at the central brain: shared context and reusable instructions.
- A skill activates the right method for a specific job.
- Authorized tools may add evidence or create a draft.
- The output reaches a human review boundary before consequence.
- The corrections should flow back into the shared instructions, template, or example.
- **A chat produces an answer. An operating loop improves the next answer.**
- Tell the audience this is why “we bought an AI tool” is not an implementation plan. The tool is one component inside the loop.

**Transition:** “The first place most teams need to invest is the central brain.”

## Slide 5 — The central brain

**Target time: 3 minutes**

- Explain why you like a repository pattern: the contents are inspectable, permissioned, versioned, and reusable by people and agents.
- Walk the folder structure quickly:
  - context holds approved business knowledge;
  - skills hold the reusable methods;
  - templates define expected output;
  - examples show what good looks like;
  - decisions preserve changes and ownership.
- GitHub is the live example because it handles files and revision history well. A well-governed SharePoint, Drive, or another knowledge system can play the same role.
- Stress that the repository contains operating knowledge, not raw credential files or uncontrolled customer exports.
- **Centralized does not mean “put everything in.” It means the right approved material has a durable home.**

**Transition:** “Once the brain exists, we can be precise about the difference between a prompt and a skill.”

## Slide 6 — Prompt versus skill

**Target time: 3 minutes**

- A prompt is the immediate instruction for this interaction.
- A skill is a reusable contract for a type of work.
- A useful skill says when to use it, when not to use it, the minimum inputs, the workflow, the output contract, quality checks, and stop conditions.
- Use a cooking analogy sparingly: a prompt is the instruction you give now; a skill is the tested recipe plus ingredients, standards, and “do not serve yet” checks.
- **Prompts help individuals move faster. Skills help teams become consistent.**
- Mention that a skill can still be plain Markdown. It does not need a software engineering program before it creates value.

**Transition:** “The prompt still matters. We just ask it to do a more focused job.”

## Slide 7 — Strong prompts make the work inspectable

**Target time: 3 minutes**

- Walk the five-part formula: context, job, evidence, output, guardrails.
- Point to each phrase in the example prompt.
- Context: which seller, account, audience, and goal.
- Job: the single artifact or decision requested.
- Evidence: approved files, public sources, and how to cite them.
- Output: the required structure.
- Guardrails: what cannot happen and where the agent must stop.
- Explain that specificity is not about making prompts long. It is about removing consequential ambiguity.
- **A strong prompt lets another human inspect the request before judging the answer.**

**Transition:** “Now we can decide whether this job needs a workflow or an agent.”

## Slide 8 — Workflow versus agent

**Target time: 3 minutes**

- Define a workflow as a known path: research, synthesize, review, produce a draft, stop.
- Define an agent as a system where the model dynamically chooses steps or tools based on what it finds.
- Use ABM examples:
  - a webinar follow-up kit is usually a predictable workflow;
  - open-ended account research across many possible evidence paths may justify more agentic judgment.
- Explain the tradeoff: flexibility versus predictability, latency, cost, and review burden.
- **Do not build an agent merely because the word sounds more advanced. Start with the least autonomy that can solve the job.**
- Note that even agentic work needs explicit check-in conditions.

**Transition:** “Tools are where the system begins touching the rest of the company, which brings us to MCP.”

## Slide 9 — MCP connects AI to systems

**Target time: 3 minutes**

- Define MCP in plain language: an open standard for connecting AI applications to external data, tools, and reusable workflows.
- Explain the three server primitives in marketer language:
  - resources are context the AI can read;
  - prompts are reusable starting points;
  - tools retrieve information or perform actions.
- Make the critical distinction: MCP gives the AI a standardized door. It does not define the marketing strategy, the data policy, or whether the action is appropriate.
- Give an example: a calendar connector can read availability or create an event. The use case and permission model determine which should happen without approval.
- **Connection is capability. Governance determines permission.**
- Avoid implementation details about transports or protocol versions unless asked in Q&A.

**Transition:** “The safest design move is to put review where consequence begins.”

## Slide 10 — Human approval at the boundary of consequence

**Target time: 3 minutes**

- Walk left to right on the spectrum.
- Reading an approved brief is lower consequence than emailing a prospect.
- Drafting copy is lower consequence than publishing it.
- Recommending a next action is lower consequence than changing a CRM stage or spending media budget.
- The exact line can differ by company, but the line must exist and the team must know who owns it.
- **Approval should be attached to the action, not buried in a generic “human in the loop” statement.**
- Give four default hard gates for marketers: external send, public publish, spend, and system-of-record write.

**Transition:** “With those foundations in place, the ABM use cases organize themselves naturally.”

## Slide 11 — ABM's natural sequence of jobs

**Target time: 3 minutes**

- Walk the audience through discover, plan, build, activate, and learn.
- Discover: which accounts fit and what has changed.
- Plan: campaign hypothesis, buying roles, message, proof, and next step.
- Build: pages, content experiences, event journeys, and sales materials.
- Activate: personal outreach, paid media, seller coordination, and events.
- Learn: engagement, conversations, revisions, and next actions.
- The sequence matters because AI can accelerate the wrong decision just as easily as the right one.
- **Start upstream enough that the output improves the decision—not only the speed of production.**

**Transition:** “For most teams, I would begin with three small, reviewable skills.”

## Slide 12 — Start with three practical skills

**Target time: 3 minutes**

- Account List Builder: exposes the ICP, exclusions, scoring, evidence, and confidence behind the target list.
- Why-Now Signal Scanner: looks for current company-level evidence and explicitly separates signal from inferred intent.
- ABM Strategist: turns one account and one offer into an approval-ready brief.
- Explain why these are good starting points: the outputs are easy for a domain expert to inspect, no external action is required, and the learning improves later creative.
- Mention that the repository also includes page, industry, one-to-one, content, brand, buying-committee, and first-touch skills.
- **The first skill should create something a marketer can challenge in minutes.**

**Transition:** “Let me show you what it looks like to start from zero.”

## Slide 13 — Live build setup

**Target time: 1 minute before switching screens**

- Tell the audience exactly what they will see: a fresh Claude Project, two shared instruction files, one synthetic input, and one prompt.
- State that no live customer data or external system will be used.
- Tell them the demo is intentionally boring infrastructure: the goal is repeatability, not a magic trick.
- Keep this slide visible while switching windows.
- **Success is not a perfect campaign. Success is an inspectable first draft with visible gaps and approval gates.**

**Transition to demo:** “I’m going to create the workspace, give it the shared rules, and ask it to run one skill.”

## Slide 14 — What a useful output exposes

**Target time: 2 minutes after the live generation**

- Return to this slide after inspecting the generated brief.
- Call out the five things the audience should look for in any AI-generated ABM artifact:
  - sourced facts;
  - labeled hypotheses;
  - a coherent recommendation;
  - missing evidence;
  - explicit human decisions.
- Show one example of a useful gap: “Approved proof for this claim is missing.” That is better than confident invention.
- Explain that the output should be reviewable even by someone who did not watch the agent create it.
- **Good infrastructure makes uncertainty visible.**

**Transition:** “You do not need to implement all of this at once.”

## Slide 15 — Thirty-day rollout

**Target time: 3 minutes**

- Week one: choose one repeated job with a visible output and a clear reviewer. Gather the approved context.
- Week two: document the skill, template, example, QA, and stop conditions.
- Week three: run five real cases. Capture corrections instead of silently fixing every output in the chat.
- Week four: assign an owner, agree on measurements, and decide whether any connection or additional autonomy is justified.
- Explain the measures:
  - time to first useful draft;
  - amount of human revision;
  - approval pass rate;
  - repeated reuse;
  - practitioner adoption.
- Avoid declaring ROI before there is a stable baseline.
- **Scale the method only after the team can explain why the outputs improved.**

**Transition:** “The practical next step is deliberately small.”

## Slide 16 — Leave with one workflow and one next step

**Target time: 2 minutes plus Q&A transition**

- Ask the audience to name one ABM job their team rebuilds from scratch every week or month.
- Package the approved context, the instruction, the output contract, and the review gate.
- Invite them to start with one skill from the repository rather than an empty prompt box.
- Share the GitHub URL and explain what it contains.
- Commercial bridge, lightly: “If your team needs help choosing the first workflow, building the repository, or putting the governance around it, that is the kind of implementation work ForgeX is organizing.”
- End on the question: “What is the first workflow your team should stop rebuilding from scratch?”
- Invite questions about use-case selection, repository structure, skills, MCP, agents, or governance.

**Q&A bridge:** “If you put a workflow in the chat, I’ll tell you which layer I would build first.”
