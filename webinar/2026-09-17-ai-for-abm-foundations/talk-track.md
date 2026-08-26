# Presenter talk track

These notes are prompts for a natural conversation. They are not a script to read word for word.

## Slide 1: AI for ABM

**Target time:** 1 minute

- Open with the outcome: "By the end of this hour, you should know which level you are at, what it takes to move up one level, and what you should build first."
- Confirm the public promise. The session covers MCPs, agents, prompts, the company brain, and a fresh Claude workspace.
- Set the audience boundary. This is designed for marketers, not software engineers.

**Transition:** "Part I showed what these systems can produce. Today we are opening the hood."

## Slide 2: Part I showed the output

**Target time:** 2 minutes

- Recap Part I in one breath: propensity, landing pages, microsites, the Folloze MCP, and the skills behind those experiences.
- Explain that none of those outputs begins with the page. The work begins with context, a process, access to tools, and a decision about what a human must review.
- Invite the chat: "What is one repeated ABM job your team keeps rebuilding from scratch?"

**Keep:** Part I is proof of the output. Part II is the operating system underneath it.

## Slide 3: The terms

**Target time:** 4 minutes

- Use the engine and workbench distinction. The model is the engine. Claude Code, Cursor, or another harness is the workbench that gives the model files, tools, state, and controls.
- A prompt is this request. Context is what the system can use right now.
- A skill is a repeatable process. A tool is a capability.
- MCP is a standard connection layer. It does not supply business judgment or approval.
- An automation follows a known route. An agent chooses a route to pursue a goal.
- Avoid teaching hidden chain-of-thought as a capability. Ask for a visible plan, evidence, decisions, and evaluation.

**Audience question:** "Which two of these terms does your team use as if they mean the same thing?"

## Slide 4: Zapier V2

**Target time:** 3 minutes

- Give Zapier full credit for the reference framework.
- Point to the four dimensions: Mindset, Strategy, Building, and Accountability.
- Capable means AI is improving core work. Adoptive means the person orchestrates tools and durable systems. Transformative means the team redesigns how work happens.
- Emphasize accountability. The ability to catch and correct poor output is part of fluency.
- Explain the adaptation: ForgeX needs more resolution between a good prompt, a company brain, a reusable skill, an automation, and an agent.

**Transition:** "So we rebuilt the ladder for the actual work of ABM."

## Slide 5: The ForgeX maturity ladder

**Target time:** 3 minutes

- Walk the labels once from zero to five.
- State that every level can produce value. The question is whether the architecture matches the job.
- Ask for a private zero-to-five self-rating.
- Remove the status anxiety: "This is not a race to Level 5. A well-run Level 3 process can outperform a poorly governed Level 5 experiment."
- Preview the same job: North Peak targeting Alder's VP of Infrastructure.

## Slide 6: Level 0, Fancy Search

**Target time:** 2 minutes

- Reuse the earlier "Fancy Search" language.
- Explain the difference from a normal search engine. Search can surface links and generalized answers. A model can synthesize a corpus into a fluent answer. Neither makes the result specific to the seller or account by default.
- The output can teach, summarize, or orient. It is weak evidence for a campaign decision.
- Call out the trap: fluency feels like specificity.

**Question:** "Could this answer be reused for any cybersecurity company and any manufacturer? If yes, it is not ABM yet."

## Slide 7: Level 1, Contextual Copilot

**Target time:** 3 minutes

- Show the five parts of the better request: seller context, target context, job, output, and guardrail.
- The marketer is doing the orchestration manually. That is still valuable.
- Quality remains trapped in the person who knows what to paste and which corrections to make.
- Tie this to the promo promise around prompting. Strong prompts make the work inspectable. They do not replace missing company context or a weak process.

## Slide 8: Level 2, Grounded Workspace

**Target time:** 3 minutes

- Level 2 removes the repeated setup work.
- The North Peak brain gives every run the same brand, messaging, ICP, personas, product portfolio, proof rules, and source manifest.
- Explain context window versus company context. The context window is how much the model can consider at once. The company brain is the curated material worth considering.
- More files are not automatically better. Scope and freshness matter.

**Keep:** Stop making the model relearn the company.

## Slide 9: Build a company brain

**Target time:** 3 minutes

- Credit Cerebras for the practical architecture.
- A company brain is not a random document dump and not a chatbot trained on everything.
- Centralize access and the query interface. The underlying sources can remain where teams own and update them.
- Name the hard parts: connectors, source schemas, freshness, deduplication, permissions, audit, and scope.
- Explain why GitHub is useful: plain files, change history, portability, review, and ownership. It is one pattern, not the only answer.
- Show the source manifest. Every material document should have an owner and a review date.

## Slide 10: The marketer becomes the plumber

**Target time:** 4 minutes

- Use the blue-collar metaphor directly and respectfully. The craft is knowing how the pieces connect and what breaks when one changes.
- The company may give you Claude, ChatGPT, Gemini, Copilot, or a house-built system. Those are fixtures and tools.
- The durable system is brand context, product truth, the process, templates, tests, tool contracts, and decision history.
- Model portability: plain-text context and skills should work in another approved harness.
- Career portability: take your method, blank templates, and general skills. Do not take confidential company content.
- Ask: "If your company changed AI tools tomorrow, what would you lose?"

**Keep:** Your value is not memorizing one interface. It is understanding the plumbing well enough to rebuild the connection.

## Slide 11: Level 3, Reusable Skill

**Target time:** 3 minutes

- Deliver the key mental shift slowly: "Tell me X answer" becomes "Produce Y outcome through this process."
- A skill packages the judgment that usually hides in the best operator's head.
- The ABM Strategist does not just ask for an account brief. It defines evidence rules, buying-role logic, the message hierarchy, the output contract, QA, and where to stop.
- The same skill can run in different capable harnesses because it is documented in plain text.

## Slide 12: Skill anatomy

**Target time:** 3 minutes

- Reveal the anatomy in order: when to use, required inputs, process, output contract, quality checks, stop conditions.
- Explain that the stop condition is part of the design. A useful skill can produce a draft without publishing or sending it.
- Show how corrections compound. Fix the shared skill once, and the next run starts from the improved process.
- Connect to the attendee kit. Context Corpus Builder gets a team to Level 2. ABM Strategist and the supporting skills help it reach Level 3.

## Slide 13: Skills worth borrowing from the GTM community

**Target time:** 1 minute

- Treat the community as a pattern library, not an app store.
- Start with Erwann Lefevre's Multichannel Campaign Builder. Its useful pattern is the intake brief, three distinct angles, an early correction checkpoint, channel-specific rules, a complete output contract, and QA.
- Use Ivan Falco's 1:1 ABM Ads package as the advanced Level 3-to-4 example. Its useful pattern is a documented, scripted system that creates drafts first and separates creation from activation. Keep the treatment draft-only, with no activation or spend.
- Flash the four narrower candidates as patterns worth evaluating: verification gate, interpretation without side effects, list reconciliation, and dated research with refresh deduplication.
- Use Audience ICP Filter as the concrete pilot proof. A 22-person synthetic webinar list reconciled completely, reduced semantic review to nine records, and finished at 12 match, 1 review, 6 no match, and 3 excluded. Two local corrections were required, and the regression suite passes 45 of 45 checks.
- Keep the boundary explicit. This is a reviewed list-classification pilot only, with no enrichment, sending, CRM writes, or sequence enrollment.
- Be precise about status. A connector-free local evaluation is complete. It inspected 18 packages, passed an offline five-row domain resolver check, and confirmed that the LinkedIn scripts refused to start without credentials.
- Do not turn local test evidence into a production claim. These are MIT-licensed external community examples with creator attribution. They are draft-only or proposed pilots, not ForgeX-certified, production-adopted, or production-proven.
- The evaluation supports the teaching recommendation. It does not authorize copying code, configurations, or credentials into the attendee repository.

**Keep:** Borrow the pattern before you borrow the code.

## Slide 14: Level 4, Governed Automation

**Target time:** 2 minutes

- Level 4 adds time and state. Run the proven skill when an event happens or on a schedule.
- The workflow must understand the current artifact, what changed, and what no change looks like.
- A good weekly workflow does not manufacture a new campaign every Monday. It records no change when the evidence does not justify one.
- Name the operating parts: trigger, state, routing, retries, monitoring, exception queue, audit trail.

## Slide 15: A cron job IN a trench coat

**Target time:** 2 minutes

- Get the wording right: a cron job IN a trench coat.
- Run the automation-or-agent challenge from the run of show.
- Respect the automation. Deterministic workflows are easier to test and often exactly what the job requires.
- The warning is about fake sophistication. A schedule plus one repeated prompt does not become an agent because a vendor renamed it.
- A brittle automation with broad write access is more dangerous when everyone assumes it has judgment.

## Slide 16: Workflow, agent, MCP, governance

**Target time:** 3 minutes

- Use the road analogy. Workflow is the marked route. Agent is the driver choosing the route. MCP provides on-ramps to approved resources and tools. Governance defines where the gates are and who may pass.
- Give one concrete MCP example from Part I: the Folloze MCP can expose resources or tools to the host. The ABM process still defines what to build, what evidence to use, and who approves it.
- Reinforce the boundary: access is not authorization. A tool may technically support an action that the workflow is not permitted to take.
- Credit Anthropic's guidance to start with the simplest architecture that can do the job.

## Slide 17: Level 5, Goal-Driven Agent System

**Target time:** 2 minutes

- Deliver the second major shift: "I give you text and you give me an answer" becomes "I give you a goal and you produce the outcome."
- The agent can decide that one account needs research, another needs a refreshed brief, and a third needs no action.
- Real agency requires context, tools, skills, planning, state, evaluation, permission boundaries, and a human interrupt.
- Do not imply that the human disappears. The human owns the goal, authority, evaluation standard, and consequential decisions.

## Slide 18: One ABM job across six levels

**Target time:** 20 seconds

- Move quickly down the outputs.
- Point out that the artifact becomes more grounded and repeatable before it becomes more autonomous.
- The stack matters. Level 5 still needs the prompt discipline, company brain, skill, and operating controls below it.

## Slide 19: Measure outcomes

**Target time:** 20 seconds

- Name the five business outcomes: speed, quality, consistency, campaign volume, and personalization.
- Add operational metrics only when the system runs without direct supervision.
- Avoid vanity measures such as prompt count or number of AI tools purchased.

## Slide 20: Most teams should focus here

**Target time:** 20 seconds

- Spotlight Levels 2 to 4.
- Point attendees to the North Peak corpus, Context Corpus Builder, ABM Strategist, and 30-day plans.
- Be direct about Level 4 to 5: this is the one place where a generic checklist is irresponsible. The right architecture depends on internal systems, data, permission boundaries, goals, and failure tolerance.
- Ask attendees to put `2→3` or `3→4` in chat.

## Slide 21: Live build

**Target time:** 15 minutes

- Tell the audience exactly what they will see before switching screens.
- Orient them to the fresh workspace, then the repository structure.
- Open the safety contract, North Peak `README.md`, proof register, Alder evidence, and ABM Strategist.
- Run the Level 3 prompt without additional hidden setup.
- Review the output against the contract. Find the facts, hypotheses, unknowns, and approval gates.
- Show the Level 4 prompt without activating a schedule. Name the infrastructure that would be required: trigger, state, update logic, diff, exception route, logs, and permissions.
- Close with one sentence: "Do not leave here trying to build an autonomous agent. Leave with one repeated job you are ready to move up one level."
