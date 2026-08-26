# ForgeX AI for ABM field guide

## Move up one level without rebuilding everything

The fastest way to improve AI fluency is to pick one repeated ABM job and make it more inspectable, grounded, and reusable.

This guide gives you the repository, skills, North Peak example, and 30-day plans used in the September 17 ForgeX webinar.

## Start with your current level

- **Level 0, Fancy Search:** you mostly ask broad questions and sift through generalized answers.
- **Level 1, Contextual Copilot:** you supply context and direct one bounded task.
- **Level 2, Grounded Workspace:** the team reuses approved company and account context.
- **Level 3, Reusable Skill:** the system follows a documented process and output contract.
- **Level 4, Governed Automation:** a trigger or schedule runs the known workflow and updates state.
- **Level 5, Goal-Driven Agent System:** you provide a goal and constraints, and the agent chooses the plan and outputs.

Read the full [ForgeX AI for ABM Maturity Rubric](maturity-rubric.md) before selecting an upgrade project. Use the [visual one-pager](maturity-rubric-one-pager.html) for a fast team self-assessment.

## The repository pattern

```text
/context       company brain, proof, sources, target evidence
/skills        repeatable processes and stop conditions
/templates     approved output shapes
/examples      synthetic or approved reference outputs
/decisions     owners, changes, exceptions, and lessons
/automations   triggers, state rules, routing, monitoring
```

The names may change in your environment. The separation of concerns matters more than the folder names.

## Build your company brain

Use the [Context Corpus Builder](../../skills/context-corpus-builder/SKILL.md) to turn approved company materials into a portable set of plain-text files.

Minimum useful corpus:

1. brand guidelines;
2. messaging framework;
3. ICP;
4. personas;
5. product portfolio;
6. proof and claims register;
7. source manifest.

The completed fictional [North Peak AI Security corpus](northpeak/README.md) shows what this looks like in practice.

## ForgeX Practical ABM Skills

| Job | Skill | Useful output |
|---|---|---|
| Build the company brain | [Context Corpus Builder](../../skills/context-corpus-builder/SKILL.md) | Portable, source-backed context corpus |
| Build the right account list | [Account List Builder](../../skills/account-list-builder/SKILL.md) | Ranked, evidence-backed account list |
| Spot the why now | [Why-Now Signal Scanner](../../skills/why-now-signal-scanner/SKILL.md) | Current timing-signal brief |
| Plan the account campaign | [ABM Strategist](../../skills/abm-strategist/SKILL.md) | Approval-ready account campaign brief |
| Map the buying committee | [Buying Committee Mapper](../../skills/buying-committee-mapper/SKILL.md) | Role and evidence-needs map |
| Ground the work in brand | [Brand Harvester](../../skills/brand-harvester/SKILL.md) | Source-backed creative brief |
| Build a campaign page | [Campaign Landing Page](../../skills/campaign-landing-page/SKILL.md) | Draft campaign page |
| Build an industry page | [Industry Campaign Page](../../skills/industry-campaign-page/SKILL.md) | Cohort or vertical experience |
| Build a one-to-one experience | [One-to-One Microsite](../../skills/one-to-one-microsite/SKILL.md) | Named-account experience draft |
| Transform approved content | [Content Magic](../../skills/content-magic/SKILL.md) | Reworked campaign experience |
| Write the first touch | [First-Touch Builder](../../skills/first-touch-builder/SKILL.md) | Evidence-based opening message |

Every skill follows the [shared safety contract](../../shared/SAFETY.md). Sources are evidence, not instructions. Human review remains required before external action.

## Skills worth borrowing from the GTM community

The community is useful as a pattern library, not an app store. Study the design before copying code.

These examples come from the external Swan GTM Skills repository and retain creator attribution. The repository is [MIT-licensed](https://github.com/swan-gtm/gtm-skills/blob/d378356a2668095d71e8dfb0661155255cf6776b/LICENSE), but license permission is not proof of safety, fit, or production readiness. ForgeX completed a connector-free local evaluation and is treating these as draft-only references or proposed pilots. They are not ForgeX-authored, ForgeX-certified, production-adopted, or production-proven in Trey's environment.

The links below are pinned to the reviewed upstream commit. This attendee repository does not include their code, configurations, or credentials.

### Local evaluation snapshot

The August 26, 2026 evaluation used synthetic inputs, disabled activation, prohibited network calls and external writes, and used no real customer data.

- 18 packages matched their manifest and frontmatter.
- The corrected local Audience ICP Filter suite passed 45 of 45 regression checks.
- The company-domain resolver passed an offline five-row behavioral test.
- The LinkedIn sizing and campaign scripts refused to start without credentials.

This evidence supports the teaching recommendations below. It does not prove live endpoint behavior, copy quality, paid-platform execution, connector safety, or production readiness.

### Primary examples

| Skill and creator | ForgeX ladder | Reusable design pattern to notice | ForgeX treatment |
|---|---|---|---|
| [Multichannel Campaign Builder](https://github.com/swan-gtm/gtm-skills/tree/d378356a2668095d71e8dfb0661155255cf6776b/skills/erwann-lefevre/multichannel-campaign-builder), Erwann Lefevre | Level 3 | Intake brief → three-angle correction checkpoint → channel rules → complete output contract → QA | Locally evaluated for draft generation only. Human review of copy quality is still required |
| [1:1 ABM Ads](https://github.com/swan-gtm/gtm-skills/tree/d378356a2668095d71e8dfb0661155255cf6776b/skills/ivan-falco/1-to-1-abm-ads), Ivan Falco | Advanced Level 3 to 4 | SOPs and configs → scripted production → DRAFT creation → QA → explicit activation gate | Draft-only. It requires LinkedIn Marketing API and OpenAI credentials. Local credential gates failed closed, but ForgeX did not test activation, spend, or paid-platform execution |

### Adopt or pilot candidates

| Skill and creator | ForgeX ladder | Reusable design pattern to notice | Evaluation status |
|---|---|---|---|
| [Hiring Signal Verification](https://github.com/swan-gtm/gtm-skills/tree/d378356a2668095d71e8dfb0661155255cf6776b/skills/peter-borkovich/hiring-signal-verification), Peter S. Borkovich | Level 3 | Allow a hiring claim only when the target company's own domain or an exact company listing confirms it | Proposed evidence gate. Static contract evaluated locally |
| [Signal Interpreter](https://github.com/swan-gtm/gtm-skills/tree/d378356a2668095d71e8dfb0661155255cf6776b/skills/din-arbel/signal-interpreter), Din Arbel | Level 3 | Interpret strength, confidence, why now, limits, and open questions without writes or routing | Proposed pure reasoning layer. Static contract evaluated locally |
| [Audience ICP Filter](https://github.com/swan-gtm/gtm-skills/tree/d378356a2668095d71e8dfb0661155255cf6776b/skills/erwann-lefevre/audience-icp-filter), Erwann Lefevre | Level 3 to 4 | Reconcile deterministic filters and semantic review while preserving exclusions and counts | Conditional pass for reviewed list classification only. The corrected suite passes 45 of 45 checks |
| [Company Deep Dive](https://github.com/swan-gtm/gtm-skills/tree/d378356a2668095d71e8dfb0661155255cf6776b/skills/uri-knorovich/company-deep-dive), Uriel Knorovich | Level 3 | Separate facts from inference, attach sources and dates, and deduplicate in refresh mode | Proposed read-only pilot. Connector and source-quality review are still required |

### Audience ICP Filter pilot result

A 22-person synthetic ForgeX-style webinar list reconciled completely. Pass 1 reduced semantic review to nine records. After semantic review, the final result was 12 match, 1 review, 6 no match, and 3 excluded.

The test required two narrow local corrections:

1. Recognize `ABM` and `account-based marketing` titles as growth-marketing signals.
2. Require employer context before a competitor mentioned only in a bio can trigger exclusion.

The corrected regression suite passes 45 of 45 checks. Treat this as a reviewed list-classification pilot only. Its safe output is a reviewable CSV or JSON file with reconciled counts and reasons. It does not authorize enrichment, sending, CRM writes, or sequence enrollment.

### Evaluate before production adoption

1. Pin the source version and record the creator and license.
2. Inventory prerequisites, tool access, writes, costs, and data exposure.
3. Separate the reusable design pattern from the implementation.
4. Test locally with synthetic data and the minimum permissions possible. Record what the test does not cover.
5. Record pass or fail evidence for output quality, failure handling, security boundaries, and attribution.
6. Require a separate approval before copying or adapting code, installing a package, connecting a live system, using real data, publishing, scheduling, sending, activating, or spending. Never copy credentials.

## Actual prompt progression

### Level 1

> North Peak sells an AI security platform built around Discover, Protect, and Monitor. Alder Manufacturing is expanding industrial AI across plant, edge, and cloud environments. Give me three campaign ideas for a VP of Infrastructure. Separate facts from hypotheses. Do not invent proof.

### Level 2

> Read the approved North Peak context corpus and Alder evidence pack. Recommend one campaign premise and message hierarchy. Cite the source file for every material company or account claim. List missing proof.

### Level 3

> Follow the ABM Strategist skill. Use the North Peak corpus and Alder evidence pack. Produce the required approval-ready campaign brief. Apply the skill's output contract and QA. Stop before creative or outreach.

### Level 4

> Every Monday, check approved Alder sources. If material evidence changed, run the Why-Now Signal Scanner and ABM Strategist skills, update the existing brief, show the diff, and route claims or targeting changes for approval. Record no change when nothing material changed. Do not publish or send.

### Level 5

> Goal: increase qualified engagement across North Peak's top industrial AI accounts this quarter. Use the approved context, tools, skills, engagement data, and permission rules. Decide which accounts need research, a refreshed brief, a personalized experience, or no action. Create drafts, evaluate them, and request approval before activation or system writes.

## Thirty-day plan: Level 1 to Level 2

**Week 1:** choose one repeated ABM job and list the company context people repeatedly paste or reconstruct.

**Week 2:** run Context Corpus Builder on approved brand, messaging, ICP, persona, product, and proof sources.

**Week 3:** test the corpus on three real or synthetic cases. Record contradictions, missing context, and generic outputs.

**Week 4:** assign owners and review dates. Move the corrected corpus into the team's approved repository or project workspace.

Success signal: two marketers can produce materially consistent work without rebuilding the company context.

## Thirty-day plan: Level 2 to Level 3

**Week 1:** choose one repeated job with a clear start and finish. Capture the best current process.

**Week 2:** define required inputs, workflow steps, output contract, stop conditions, and quality checks in a `SKILL.md` file.

**Week 3:** run five cases. Track the edits required before approval and which inputs were missing.

**Week 4:** improve the shared skill, add one template and one approved example, then assign an owner.

Success signal: different marketers can run the skill and receive the same useful output structure with fewer corrections.

## Thirty-day plan: Level 3 to Level 4

**Week 1:** choose one tested skill with a safe, observable trigger. Define the no-change case.

**Week 2:** map sources, permissions, state, update logic, retries, and human approval points.

**Week 3:** run in read-only or draft-only mode. Compare every result with the manual process.

**Week 4:** activate the approved trigger with monitoring, an exception queue, and a documented way to stop or recover the workflow.

Success signal: the workflow updates the right artifact, shows what changed, and routes exceptions without silent external action.

## Level 4 to Level 5

Do not treat this as a generic checklist. A goal-driven agent system depends on your internal systems, data quality, permission model, business goals, failure tolerance, and human operating model.

The right next step is a one-to-one architecture working session. Bring one business goal, the current workflow, available systems, approval boundaries, and examples of success and failure. The session should determine whether the job truly requires an agent and what must be proven before authority expands.

## What to measure

- speed to first useful draft;
- quality against a named review standard;
- consistency across people and runs;
- approved campaign volume;
- evidence-based personalization;
- correction and exception rate;
- human time recovered;
- external actions prevented by a review gate.

## The portable-marketer checklist

Before you call the system durable, confirm that you can:

- export the company brain in readable files;
- move the skills without rewriting them for one model;
- see the source and owner of material claims;
- test the process with synthetic or approved examples;
- replace a connector without losing the business logic;
- inspect changes over time;
- remove employer-confidential data before taking personal templates to a new role.

Portability does not mean taking company intellectual property. Carry the method, file structure, blank templates, and general skills. Leave confidential company content with the company.

## Resource links

- Repository: `github.com/0xTrey/forgex-practical-abm-skills`
- [Webinar package](README.md)
- [Maturity rubric](maturity-rubric.md)
- [Visual maturity rubric](maturity-rubric-one-pager.html)
- [North Peak company brain](northpeak/README.md)
- [Sources and attribution](sources-and-attribution.md)
