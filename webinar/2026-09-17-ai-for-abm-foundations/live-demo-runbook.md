# Live demo runbook

## Demo objective

Show a nontechnical marketer how a fresh Claude Code workspace becomes a grounded Level 3 ABM system by adding a versioned repository, approved context, a reusable skill, and human review.

Do not attempt to build a Level 4 automation live. Show the specification for the next layer after the Level 3 output is complete.

## Audience-visible success

By the end of 15 minutes, the audience should have seen:

1. a fresh Claude Code workspace through ForgeX;
2. the ForgeX repository structure;
3. the shared safety contract;
4. the North Peak company brain;
5. the ABM Strategist skill;
6. an approval-ready Alder campaign brief;
7. a visible explanation of what Level 4 would add.

## Preconditions

Complete by September 14:

- Confirm the exact ForgeX path for launching a fresh Claude Code environment.
- Confirm whether the GitHub repository will be public, private with authenticated access, or provided as a local approved copy.
- Verify the current Claude Code interface and repository access from the presentation device.
- Verify that Markdown files render readably at screen-share resolution.
- Run the prompts from a truly fresh workspace and record the elapsed time.
- Create a completed output, screenshots, and a short backup recording.
- Disable notifications and close unrelated terminals, repositories, tabs, and customer materials.
- Set display scaling so file paths and output remain readable.

## Demo data boundary

Use only:

- [`../../shared/SAFETY.md`](../../shared/SAFETY.md)
- [`../../skills/abm-strategist/SKILL.md`](../../skills/abm-strategist/SKILL.md)
- [`northpeak/`](northpeak/README.md)
- [`demo/demo-prompts.md`](demo/demo-prompts.md)

North Peak AI Security and Alder Manufacturing are fictional. Do not open the separate Folloze demo repository during the live session.

## 15-minute flow

### 0:00 to 2:00, open the fresh workspace

1. Launch the ForgeX Claude Code environment.
2. State the distinction: Claude is the model family, Claude Code is the harness.
3. Show that the workspace is empty or newly provisioned.
4. Bring in the repository using the event-week approved path.

Say:

> The model is not the system. The model becomes useful for this job when the workspace can read our context, process, and safety rules.

### 2:00 to 5:00, inspect the portable layers

Open these files in order:

1. `shared/SAFETY.md`
2. `webinar/2026-09-17-ai-for-abm-foundations/northpeak/README.md`
3. `webinar/2026-09-17-ai-for-abm-foundations/northpeak/proof-and-claims.md`
4. `webinar/2026-09-17-ai-for-abm-foundations/northpeak/campaign-demo-brief.md`
5. `skills/abm-strategist/SKILL.md`

Ask Claude Code to run Prompt 0 from [`demo-prompts.md`](demo/demo-prompts.md).

Point out:

- context files describe the company;
- the skill describes the process;
- the safety contract describes the shared boundaries;
- all three can move to another capable, approved harness.

### 5:00 to 7:00, run the Level 3 job

Paste Prompt 1 exactly. Do not improvise extra company claims or account facts.

While the system works, answer one moderated question or compare Prompt 1 with the Level 0 prompt on Slide 6.

### 7:00 to 12:00, inspect the output

Open the generated campaign brief and check it against the skill's output contract.

Find and name:

- the decision and campaign objective;
- observed Alder evidence with source locations;
- the campaign premise;
- role-level buying-group hypotheses;
- the message hierarchy;
- missing proof and unknowns;
- measurement and learning plan;
- approvals required before creative or activation.

Run Prompt 2 only if the first draft is complete by minute 10.

Say:

> A visible gap is a feature. It tells the marketer what judgment or evidence is still required.

### 12:00 to 14:00, show the Level 4 extension

Open Prompt 3. Do not run a scheduler or connect a live system.

Explain the required additions:

```text
trigger
  ↓
approved source check
  ↓
material-change decision
  ↓
skills run against current state
  ↓
section-level diff
  ↓
exception and approval routing
  ↓
audit record or no-change record
```

The fixed route makes this an automation, not an agent.

### 14:00 to 15:00, close

Return to the resource link.

Say:

> We did not make Claude smarter. We gave it a portable company brain, a process, an output contract, and clear limits. That is the move from a clever prompt to a reusable ABM system.

## Failure branches

### Repository access fails

Use the preloaded local copy. Tell the audience that repository access failed and continue. Do not troubleshoot authentication live for more than 30 seconds.

### Claude Code launch fails

Play the backup recording or switch to the completed screenshots. Keep narrating the same file sequence and prompt.

### Generation is slow

Open the pre-generated brief after 45 seconds. State that the completed file came from the same prompt and source set during rehearsal.

### Output invents a claim

Use the failure as the lesson. Locate the unsupported claim, run Prompt 2, and show why human review and the proof register exist.

### Output ignores the contract

Ask it to compare the draft with the skill's output contract and repair only the missing sections. Do not restart the whole demo.

## Do not do live

- No OAuth, API key, or MCP authorization flow
- No live customer or account data
- No external publishing or sending
- No CRM or other system-of-record write
- No broad permission grant
- No improvised public-repository change
- No claim that the Level 4 schedule is already running

## Backup asset checklist

- Fresh-workspace screenshot
- Repository tree screenshot
- Safety file screenshot
- North Peak corpus screenshot
- ABM Strategist screenshot
- Prompt screenshot
- Completed Alder campaign brief
- Output-contract review screenshot
- Level 4 architecture slide
- Three-minute screen recording of the successful path
