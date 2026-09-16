# Presenter talk track

These notes are prompts for a natural conversation. They are not a script to read word for word.

## Timing control

The primary path is 45 minutes of teaching plus the protected 15-minute fresh-workspace build. If the event window shrinks, use the exact 30-minute teaching path in [`run-of-show.md`](run-of-show.md). Do not improvise a shorter demo.

- Slide 4 starts by minute 7.
- Slide 10 starts by minute 24.
- Slide 16 starts by minute 39.
- Slide 18 starts by minute 44.
- Slide 21 starts at minute 45.

## Slide 1: AI for ABM

**Target time:** 1 minute

- Open with the outcome: "By the end of this hour, you should know which level you are at, what it takes to move up one level, and what you should build first."
- Confirm the public promise. The session covers MCPs, agents, prompts, the company brain, and a fresh Claude workspace.
- Set the audience boundary. This is designed for marketers, not software engineers.

**Transition:** "Today we are building the operating system underneath the work."

## Slide 2: What you will learn today

**Target time:** 2 minutes

- Set the contract for the hour. This is about building the operating system beneath ABM work, not reviewing another collection of AI features.
- Walk left to right: ground the work with a company brain, package the process as reusable skills, connect approved tools through MCP, then run the system with state, evaluation, permissions, and human approval.
- Invite the chat: "Which of these four layers is missing from your current setup?"

**Keep:** Build the whole operating system, then move one useful level at a time.

## Slide 3: Breaking Down the Jargon

**Target time:** 4 minutes

- Tell the room why this slide exists: we need one shared vocabulary before we can talk about maturity.
- Pair the terms instead of reading a glossary. The model generates. The harness runs and governs the work. The prompt gives one instruction. Context supplies what the system can use right now.
- A skill captures the reusable process. A tool performs an action. MCP is the approved connection that makes data, resources, or tools available.
- An automation follows a predefined route. An agent can choose and evaluate its next step while pursuing a goal within boundaries.
- Avoid teaching hidden chain-of-thought as a capability. Ask for a visible plan, evidence, decisions, and evaluation.
- Close with the contract: these are the meanings we will use for the rest of the session.

**Audience question:** "Which one of these terms is the most overloaded on your team?"

## Slide 4: The ForgeX maturity ladder

**Target time:** 3 minutes

- Walk the labels once from zero to six.
- State that every level can produce value. The question is whether the architecture matches the job.
- Ask for a private zero-to-six self-rating.
- Remove the status anxiety: "This is not a race to Level 6. A well-run Level 3 process can outperform a poorly governed Level 5 or Level 6 experiment."
- Preview the same job: North Peak targeting Alder's VP of Infrastructure.
- Point out the cumulative layer beneath each step: model, prompt, context, skill, state, and goal. Level 6 coordinates the full stack across multiple agents and systems.

## Slide 5: Level 0, Fancy Search

**Target time:** 2 minutes

- Reuse the earlier "Fancy Search" language.
- Explain the difference from a normal search engine. Search can surface links and generalized answers. A model can synthesize a corpus into a fluent answer. Neither makes the result specific to the seller or account by default.
- The output can teach, summarize, or orient. It is weak evidence for a campaign decision.
- Call out the trap: fluency feels like specificity.

**Question:** "Could this answer be reused for any cybersecurity company and any manufacturer? If yes, it is not ABM yet."

## Slide 6: Level 1, Contextual Copilot

**Target time:** 3 minutes

- Show the five parts of the better request: seller context, target context, job, output, and guardrail.
- The marketer is doing the orchestration manually. That is still valuable.
- Quality remains trapped in the person who knows what to paste and which corrections to make.
- Tie this to the promo promise around prompting. Strong prompts make the work inspectable. They do not replace missing company context or a weak process.

## Slide 7: Level 2, Grounded Workspace

**Target time:** 3 minutes

- Level 2 removes the repeated setup work.
- The North Peak brain gives every run the same brand, messaging, ICP, personas, product portfolio, proof rules, and source manifest.
- Explain context window versus company context. The context window is how much the model can consider at once. The company brain is the curated material worth considering.
- More files are not automatically better. Scope and freshness matter.

**Keep:** Stop making the model relearn the company.

## Slide 8: The company brain is one layer

**Target time:** 3 minutes

- Credit Cerebras for the practical architecture.
- A company brain is durable approved knowledge. It is not a random document dump and not a chatbot trained on everything.
- Separate it from the repository, shared memory, and the current job state. The repository versions the brain. Shared memory carries operating knowledge across runs. Current state is what this job knows now.
- Centralize access and the query interface. The underlying sources can remain where teams own and update them.
- Name the hard parts: connectors, source schemas, freshness, deduplication, permissions, audit, and scope.
- Explain why GitHub is useful: plain files, change history, portability, review, and ownership. It is one pattern, not the only answer.
- Show the source manifest. Every material document should have an owner and a review date.
- State the access boundary plainly. A repository or vault does not grant every agent access to every source or action.

## Slide 9: The company gives you the van

**Target time:** 3 minutes

- Use the blue-collar metaphor directly and respectfully. The craft is knowing how the pieces connect and what breaks when one changes.
- The company may give you Claude, ChatGPT, Gemini, Copilot, or a house-built system. That is the van and the standard toolkit.
- The durable system is brand context, product truth, the process, templates, tests, tool contracts, and decision history.
- Model portability: plain-text context and skills should work in another approved harness.
- Career portability: take your method, blank templates, and general skills. Do not take confidential company content.
- Ask: "If your company changed AI tools tomorrow, what would you lose?"

**Keep:** Your value is not memorizing one interface. It is understanding the plumbing well enough to rebuild the connection.

## Slide 10: Level 3, Reusable Skill

**Target time:** 3 minutes

- Deliver the key mental shift slowly: "Tell me X answer" becomes "Produce Y outcome through this process."
- A skill packages the judgment that usually hides in the best operator's head.
- The ABM Strategist does not just ask for an account brief. It defines evidence rules, buying-role logic, the message hierarchy, the output contract, QA, and where to stop.
- The same skill can run in different capable harnesses because it is documented in plain text.

## Slide 11: Harness anatomy

**Target time:** 3 minutes

- Reveal the harness in order: context and memory, skills, tools and MCP, state and loop, evaluation, then humans and permissions.
- Explain that the model produces, while the harness runs and governs the work.
- Connect the skill to the harness. The skill defines the repeatable process, output contract, quality checks, and stop conditions that the harness can execute.
- Reinforce that access is not permission. The system must know when to stop, revise, or ask a human.

## Slide 12: Skills worth borrowing from the GTM community

**Target time:** 2 minutes

- Treat the community as a pattern library, not an app store.
- Read the sequence from left to right: verify, interpret, qualify, then draft.
- Hiring Signal Verification is the evidence gate. Six adversarial synthetic cases passed, then a live read-only audit of 11 labels accepted 2, narrowed 4, and dropped 5. Verification belongs before scoring or messaging.
- Signal Interpreter is a pure reasoning gate. It returns meaning, strength, confidence, why-now, limits, and open questions without routing or writing. Keep interpretation separate from tiering and workflow routing.
- Audience ICP Filter is the qualification gate. Its 22-person synthetic fixture reconciled every record into Keep, Exclude, or Review, and the bundled regression suite passed 45 of 45 checks.
- Multichannel Campaign Builder is the draft-generation example. One synthetic brief produced three distinct angles and a five-touch LinkedIn and email sequence. Its conditional pass still requires source-backed inputs and human copy QA before any send or activation.
- Company Deep Dive sits below the sequence as a Level 2-to-3 source-hierarchy concept. Its useful patterns passed static review, but the full workflow did not complete a live source-quality trial. Do not call it operationally verified.
- Do not turn local evidence into a production claim. These are MIT-licensed external community examples with creator attribution and explicit static, synthetic, or live read-only labels.
- The evaluation supports teaching use only. It does not authorize copying code, installing packages, connecting live systems, using real data, routing, sending, activating, or spending.

**Audience prompt:** Where should the system stop after it sees a raw hiring claim? Answer: verify the claim before scoring, interpreting, qualifying, or drafting.

**Keep:** Evidence first. Meaning second. Audience decision third. Draft last.

## Slide 13: Level 4, Governed Automation

**Target time:** 2 minutes

- Level 4 adds time and state. Run the proven skill when an event happens or on a schedule.
- The workflow must understand the current artifact, what changed, and what no change looks like.
- A good weekly workflow does not manufacture a new campaign every Monday. It records no change when the evidence does not justify one.
- Name the operating parts: trigger, state, routing, retries, monitoring, exception queue, audit trail.

## Slide 14: A cron job IN a trench coat

**Target time:** 2 minutes

- Get the wording right: a cron job IN a trench coat.
- Run the automation-or-agent challenge from the run of show.
- Respect the automation. Deterministic workflows are easier to test and often exactly what the job requires.
- The warning is about fake sophistication. A schedule plus one repeated prompt does not become an agent because a vendor renamed it.
- A brittle automation with broad write access is more dangerous when everyone assumes it has judgment.

## Slide 15: Every agent runs a loop

**Target time:** 3 minutes

- Trace the loop: load context, choose the next step, act through a skill and approved tool, then evaluate.
- Level 3 makes the process explicit. Level 4 runs that known loop from a trigger and tracks state. Level 5 can choose the next step within bounded authority. Level 6 coordinates many loops across agents and systems.
- Memory, permissions, logs, and guardrails surround the whole loop. They are not a final check added after the action.
- Give one concrete MCP example from Part I. The Folloze MCP can expose approved resources or tools, but the process still defines what to build, which evidence to use, and who approves it.

## Slide 16: Level 5, Goal-Driven Agent System

**Target time:** 2 minutes

- Deliver the second major shift: "I give you text and you give me an answer" becomes "I give you a goal and you produce the outcome."
- The agent can decide that one account needs research, another needs a refreshed brief, and a third needs no action.
- Real agency requires a goal, plan, context, skills, tools, state, evaluation, permission boundaries, and a human interrupt.
- Do not imply that the human disappears. The human owns the goal, authority, evaluation standard, and consequential decisions.

**Transition:** "That is one agent system. The next level is the operating system around many agent systems."

## Slide 17: Level 6, Agentic Operating System

**Target time:** 3 minutes

- Make the distinction first. Level 5 is one bounded agent system choosing the work needed for a goal. Level 6 coordinates multiple agents, systems, memory stores, triggers, and reliability loops.
- Codex is the interface and routing layer in this example. It assigns bounded work to sub-agents, Cursor, Hermes, OpenClaw, Grokbot, and approved systems.
- The Obsidian Vault carries durable shared memory. GitHub versions the shared skills and context repository.
- Time triggers start scheduled work. Event triggers start work when an approved condition changes.
- Canaries exercise critical workflows. A failed check becomes a hardening task for the shared skill or workflow.
- Keep the authority boundary explicit. The operating system can coordinate more work without gaining blanket permission to send, publish, spend, or write.

**Keep:** "This is broader coordination, not simply more autonomy."

## Slide 18: Infrastructure beneath the outcome

**Target time:** 20 seconds

- Move quickly up the staircase: search interface, supplied context, company brain, skill and output contract, trigger and state, then goal and planning.
- Point out that Level 6 adds orchestration, shared memory, triggers, canaries, and hardening around the whole stack.
- Use the Age of Empires analogy once. A new capability is useful only when the economy, rules, and defenses beneath it are ready.

## Slide 19: Measure outcomes

**Target time:** 20 seconds

- Name the five business outcomes: speed, quality, consistency, campaign volume, and personalization.
- Add operational metrics only when the system runs without direct supervision.
- Avoid vanity measures such as prompt count or number of AI tools purchased.

## Slide 20: Most teams should focus here

**Target time:** 20 seconds

- Spotlight Levels 2 to 4.
- Point attendees to the Company Brain Builder, Skills Repository Starter, Shared Memory Starter, ABM Strategist, starter skills, and 30-day plans.
- Be direct about moving beyond Level 4: a generic checklist is irresponsible. The right Level 5 or Level 6 architecture depends on internal systems, data, permission boundaries, goals, operating model, and failure tolerance.
- Ask attendees to put `2→3` or `3→4` in chat.

## Slide 21: Live build

**Target time:** 15 minutes

- Tell the audience exactly what they will see before switching screens.
- Orient them to the fresh workspace, then the repository structure.
- Open the permissions and safety contract, North Peak `README.md`, proof register, Alder evidence, and ABM Strategist.
- Run the Level 3 prompt without additional hidden setup.
- Trace the harness loop while reviewing the output against the contract. Find the facts, hypotheses, unknowns, and approval gates.
- Show the Level 4 prompt without activating a schedule. Name the infrastructure that would be required: trigger, state, update logic, diff, exception route, logs, and permissions.
- Close with one sentence: "Do not leave here trying to build an autonomous agent. Leave with one repeated job you are ready to move up one level."
