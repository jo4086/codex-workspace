# REQ Document Lifecycle

## Responsibility Model

Treat a workspace unit as the project-defined ownership boundary for a product, service, package, component, or other cohesive area. Follow the project's existing unit names and paths; do not impose an `apps/` or `packages/` layout.

Give each document one responsibility:

| Document | Responsibility | Create or Split When |
| --- | --- | --- |
| REQUIREMENTS | User problem, scope, constraints, and verifiable acceptance conditions for one REQ | Work needs durable scope, acceptance, or coordination beyond a small local change |
| SPEC | Behavior or feature detail linked to the parent REQ and its acceptance conditions | Requirements need implementation-relevant elaboration without embedding design structure |
| Current ARCHITECTURE | Durable description of the unit's implemented structure | Maintainers need a current structural reference; do not create it only for one proposal |
| Proposed ARCHITECTURE | Structural change, rationale, alternatives when useful, and affected boundaries for one REQ | The REQ changes important boundaries or requires a consequential design decision |
| ROADMAP | REQ-local Phase order, dependencies, and status | Execution spans Phases or needs durable status and session resumption |
| GOAL | Detailed deliverables and completion conditions for one Phase | Phase criteria would make the ROADMAP hard to scan; otherwise keep them in the ROADMAP |
| REVIEW | Verification evidence, result, unresolved issues, and follow-up against Phase completion conditions | Validation or acceptance produces evidence worth retaining |

Do not use SPEC for structural rationale, ARCHITECTURE for copied behavior requirements, ROADMAP for detailed acceptance criteria, or REVIEW to silently revise plans or requirements. Link to the owning document instead of copying its content.

## Stable Identity and Links

Use the project's established identifier format when one exists. Otherwise use these unit-local forms:

- `REQ001` for a requirement. Assign once, keep unique within the unit, and never reuse after replacement or retirement.
- `REQ001-01` for a SPEC owned by that REQ.
- `REQ001-P01` for a Phase owned by that REQ.
- `<unit>:REQ001` for a cross-unit reference, where `<unit>` is the project's stable unit identifier rather than an assumed directory path.

Keep the identifier stable when descriptive filenames or titles change. Record replacement or retirement relationships in the affected REQ document and repair direct references. Before issuing a new REQ identifier, search the unit's maintained documents for collisions, including retired identifiers.

Use relative links between maintained documents. Put identifiers and links in owning documents rather than duplicating their contents in a separate traceability table:

1. Each SPEC links to its parent REQ and identifies the acceptance conditions it elaborates.
2. Each ROADMAP Phase or separate GOAL links to its target SPEC identifiers.
3. Each REVIEW links to the Phase completion conditions and records verification evidence and result.
4. Unit documentation entrypoints link briefly to relevant REQs and the ROADMAP; they do not duplicate status.

## Placement and Indexes

Treat directory and filename examples as adaptable paths, not a mandatory template. Follow the project's existing documentation layout and create only the files needed for owned information.

Use `docs/README.md`, when present or useful, as a short entrypoint to relevant REQs and current work. Link to the authoritative ROADMAP for current Phase status rather than copying that status into the README. Let a small entrypoint link directly to documents; add a category README only after that category contains enough documents that selection guidance helps. Never precreate all document-type directories or indexes.

## Phase and Status Rules

Number and manage Phases within one REQ. Do not assume a one-to-one relationship between a SPEC and a Phase; one Phase may implement several SPEC items, and one SPEC may span Phases when the links make that relationship explicit.

Write Phase deliverables and completion conditions as checklists in a GOAL, or in the ROADMAP when no separate GOAL is needed. Prepare REVIEW verification items as unchecked tasks when they are known, then check each only after recording its result and evidence. Follow `agent-doc-writer` for the common checklist format; do not create a GOAL or REVIEW solely to hold a checklist.

When tracked execution status exists, keep its authoritative value in the REQ ROADMAP. Other indexes may link to the current Phase but must not maintain a second status value. Treat scheduling across multiple REQs as a future extension; do not invent a release-level plan or change REQ-local numbering without an explicit project requirement.

## Architecture Transition

Keep current and proposed architecture distinct:

1. Read current architecture when the REQ depends on existing boundaries.
2. Record REQ-specific structural changes and rationale in proposed architecture linked to that REQ.
3. During REVIEW, verify whether accepted implementation requires current architecture updates.
4. Update current architecture only to describe what is now implemented. Preserve proposal history rather than rewriting it as current state.

A proposal does not become current architecture merely because implementation started.
