# North Peak AI Security personas

These are role-level hypotheses. They are not profiles of named individuals.

## CISO or Head of AI Security

**Job:** enable enterprise AI while maintaining defensible security ownership and control.

**Tensions:** fragmented inventories, unclear ownership, fast-moving agent access, manual evidence, pressure to avoid slowing delivery.

**Questions:** Which AI decisions create material exposure? Which controls act before and during runtime? Who owns exceptions? Can the team reconstruct what happened?

**Proof needs:** control coverage, exception handling, audit trail, integration boundary, implementation ownership.

**Useful message:** Make security context part of every consequential AI decision.

**Avoid:** claims that one platform removes AI risk or replaces governance.

## VP Infrastructure and Operations

**Job:** keep distributed environments reliable while new AI workloads move across plant, edge, cloud, and central operations.

**Tensions:** heterogeneous environments, uptime requirements, unclear dependencies, inconsistent controls, cross-team incident coordination.

**Questions:** Where does this workload run? What does it depend on? Can controls respect local constraints? Who decides the safest response? What happens to uptime?

**Proof needs:** dependency mapping, deployment model, response options, operational ownership, exception model.

**Useful message:** Standardize the control and evidence model without pretending every environment runs the same way.

**Avoid:** language that treats infrastructure as a passive implementation layer.

## AI Platform or Application Leader

**Job:** give builders a repeatable path to deploy models and agents safely.

**Tensions:** ambiguous policies, late review, changing model and tool choices, pressure to ship, duplicated integration work.

**Questions:** What is approved? Which checks happen automatically? How do policies appear in the developer workflow? What changes require review?

**Proof needs:** integration patterns, developer experience, policy interfaces, testability, deployment and change flow.

**Useful message:** Turn policy into a usable delivery path instead of a separate review queue.

**Avoid:** promising frictionless autonomy or implying builders own every risk decision.

## Risk, Privacy, or Compliance Leader

**Job:** connect policy obligations to real AI decisions and evidence.

**Tensions:** incomplete lineage, inconsistent documentation, unclear ownership, evidence assembled after the fact.

**Questions:** Which policy applied? Which data and identities were involved? Who approved the exception? Can the record be reviewed without reconstructing it manually?

**Proof needs:** decision history, source and policy version, ownership, retention, auditability.

**Useful message:** Make evidence a by-product of the control.

**Avoid:** legal conclusions, guaranteed compliance, or one-size-fits-all policy claims.

## Buying group guidance

Do not personalize to one role in isolation. A strong North Peak campaign connects at least three views:

1. the executive owner who carries risk and enablement accountability;
2. the infrastructure or platform owner who must operate the system;
3. the risk or security partner who defines and reviews control decisions.
