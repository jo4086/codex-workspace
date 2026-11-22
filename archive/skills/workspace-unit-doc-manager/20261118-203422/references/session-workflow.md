# Focused Session Workflow

## Determine Applicability

Use the managed document workflow when work needs durable REQ scope, traceability, phased status, architecture transition, or retained verification evidence.

Bypass it for a small local change when all are true:

- ownership and requested outcome are clear;
- no durable requirement, acceptance condition, structural decision, or Phase status changes;
- no existing REQ document requires an update;
- normal code, test, and user-request checks can carry the evidence.

Bypass means do not create REQ documents. It does not permit ignoring an existing relevant REQ or applicable project instruction.

## Start a New Session

1. Determine whether the user named a workspace unit or REQ.
2. Read applicable `AGENTS.md` files before treating README content as rules.
3. If the unit or REQ is not named, use affected code paths, nearby project entrypoints, and direct documentation links to identify candidates.
4. Read the unit's nearest existing README or documentation entrypoint when available. Do not create one solely for discovery.
5. Follow the task-specific path below and load only directly relevant documents.
6. Follow links to dependency units or unresolved issues only when the selected documents make them relevant.
7. After work, check changed documents' direct references and affected entry indexes.

Do not scan every workspace unit or read every document by default.

## Task-Specific Reading

- Requirement change: parent REQUIREMENTS, then affected SPEC documents.
- Implementation: current ROADMAP Phase or GOAL, target SPEC documents, then only relevant current or proposed ARCHITECTURE.
- Structural design: parent REQUIREMENTS and affected SPEC, current ARCHITECTURE if present, then proposed ARCHITECTURE.
- Verification or acceptance: Phase completion conditions, target SPEC and acceptance links, then relevant earlier REVIEW documents.
- Session resumption: ROADMAP first because it owns status, then current Phase targets and unresolved links.

## Handle Uncertainty

Narrow uncertainty before creating or changing documents:

- If one nearby unit is strongly indicated, inspect its entrypoint and direct links before asking the user.
- If multiple units can plausibly own the work, ask which unit owns it.
- If no REQ exists, decide whether the small-work bypass applies. For non-small work, ask for unresolved product scope or create a REQ only when the user has supplied enough confirmed requirements and document creation is authorized.
- If an identifier, link, or status conflicts, do not guess. Report the conflicting sources and ask which source is authoritative.
- If a link is missing or stale, search only the relevant unit and mark any state that remains unverified.
- If current implementation differs from a proposal, distinguish observed current state from proposed intent; do not silently reconcile them.

Never invent product requirements, acceptance decisions, ownership, Phase completion, or verification results.