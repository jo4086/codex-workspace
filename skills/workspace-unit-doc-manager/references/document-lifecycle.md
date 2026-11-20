# REQ Document Lifecycle

## Scope and Shape

Manage substantial work within a workspace unit: the smallest project area that owns its requirements, plans, implementation context, and verification records. Use the unit's established documentation root. `apps/electron/docs/` is one valid shape, not a required repository layout.

## Select the Unit's Document Model

Before creating documents, inspect applicable instructions and the owning unit's existing documents and indexes. Select the workflow for that unit, not for the repository as a whole:

- **Established unit:** If the unit already follows the earlier document structure or an established `REQUESTS` flow, preserve that structure and its meanings. Continue to use `REQUESTS` for individual requests and change context as its existing guidance requires. Do not add `FEEDBACK` alongside it.
- **New unit:** When establishing a unit's documentation model without an earlier `REQUESTS` convention, use `REQUIREMENTS` for current feature requirements and `FEEDBACK` for meaningful revisions to an existing feature or its requirements.

Keep one model within a unit. Do not rename, move, or migrate an established unit's documents or links merely to adopt `FEEDBACK`. Changing that unit's model needs a separately authorized migration scope. If instructions and documents disagree, resolve the conflict before changing the unit.

For each new substantial feature, assign a unit-local stable ID such as `REQ02`. Group owned documents by document type, then REQ. The example below shows the new unit model; an established unit retains its `REQUESTS` path and convention instead of adding `FEEDBACK`:

```text
<unit-docs>/
├── ARCHITECTURE.md
├── REQUIREMENTS/
│   ├── README.md
│   └── REQ02.md
├── FEEDBACK/
│   ├── README.md
│   └── REQ02/
│       └── <topic>.md
├── SPEC/
│   ├── README.md
│   └── REQ02/
│       └── <feature-area>.md
├── ROADMAP.md
├── ROADMAP/REQ02/Phase01.md
├── GOAL/REQ02/Phase01.md
├── REVIEW.md
└── REVIEW/REQ02/Phase01.md
```

Use `DOCUMENT-TYPE/REQ-ID/` even when that REQ currently has one document of the type. Do not repeat the REQ ID in child filenames. This is the default for new REQ-owned documents; do not flatten them to names such as `REQ02-Phase01.md`.

The tree shows ownership, not mandatory files. Adapt the documentation root and existing category names to the unit. Do not impose this example on unrelated units or create empty directories.

## Document Ownership

| Location | Owned information | Creation trigger |
| --- | --- | --- |
| `REQUIREMENTS/REQ02.md` | User problem, confirmed requirements, scope, constraints, and verifiable acceptance criteria | Substantial feature needs durable scope, acceptance, or phased coordination |
| `FEEDBACK/REQ02/<topic>.md` in a new unit | Meaningful revision feedback, its examples, rationale, and handling history for an existing feature or its requirements | The revision materially affects documented direction or criteria, or preserving its context helps later work |
| `REQUESTS/REQ02/<topic>.md` in an established unit | Individual request, question, change input, and handling history under that unit's earlier model | The unit already uses `REQUESTS` and preserving an individual record helps |
| `SPEC/REQ02/<feature-area>.md` | Behavior, UI, data, or other implementation-facing rules | Detail is needed beyond acceptance criteria |
| `ROADMAP.md` | Every REQ Phase ID, order, current status, and detailed-plan links | A REQ has phased work |
| `ROADMAP/REQ02/Phase01.md` | Phase scope, prerequisites, target SPEC, and sequence | Phase planning no longer fits clearly in `ROADMAP.md` |
| `GOAL/REQ02/Phase01.md` | Outputs and completion conditions agreed before execution | Separate execution criteria improve clarity |
| `REVIEW/REQ02/Phase01.md` | Verification against GOAL, evidence, failures, and remaining work | Verification results exist |
| `ARCHITECTURE.md` | Current implemented unit structure | Verified implementation changes current structure |

`REQUIREMENTS` contains the current agreed feature requirements and acceptance criteria. A genuinely separate new feature gets its own REQ even if proposed while another feature is in progress. In the new model, `FEEDBACK` preserves the source context for a meaningful revision during requirement formation or after implementation; it does not replace the authoritative requirement or completion criteria. Record a feedback document when a requested revision materially changes documented requirements, acceptance criteria, design direction, or completion conditions, or its examples and rationale are useful later. Do not record every conversational iteration. Once a revision is agreed, update the parent REQUIREMENTS and any affected SPEC, Phase plan, or GOAL; link to the feedback where its context matters.

In the established model, `REQUESTS` continues to preserve individual source records and change context. Do not create `FEEDBACK` for that unit or create `REQUESTS/REQ02/` without an individual record. A small independent correction with no owning REQ follows the unit's established convention; do not invent a REQ or a feedback hierarchy for it.

Keep proposed architecture in REQUIREMENTS, SPEC, or a clearly labeled proposal. Do not present a proposal in `ARCHITECTURE.md` as current structure. Update current architecture only after verified implementation changes it.

## Identifiers

1. Find all used and retired IDs in the owning unit before assigning the next `REQ<number>` ID.
2. Never reuse or renumber a REQ ID. Preserve it when the feature name changes.
3. Record split, replacement, or retirement relationships in the original requirement and update direct links.
4. Assign Phase numbers inside each REQ. Write the full identifier as `REQ02-Phase01` wherever Phase identity or status appears.
5. Use `Phase01.md` under the REQ folder. Use descriptive topic filenames for SPEC and the unit's FEEDBACK or REQUESTS records; do not create new numeric-only names such as `01.md`.

## Status and Evidence

`ROADMAP.md` is the sole source of Phase status. Detailed ROADMAP, GOAL, and REVIEW documents may explain progress and evidence but must not define a competing status. Update `ROADMAP.md` only after the evidence supports the status transition.

Draft actionable GOAL completion conditions and REVIEW verification items as unchecked task items. Change `- [ ]` to `- [x]` only after the stated condition is met and supporting evidence is recorded or directly linked nearby. Leave failed, blocked, partial, and unverified items unchecked. Preserve existing checked states unless their evidence changes.

## Links and Indexes

- `REQUIREMENTS/README.md` maps each REQ ID to its feature name and requirement document.
- Existing category indexes for SPEC, the unit's FEEDBACK or REQUESTS, GOAL, ROADMAP, and REVIEW link directly to applicable REQ-owned documents. Add an index only when the category exists and the index helps selection.
- Requirement documents link to source FEEDBACK or REQUESTS records when present. Those records link to their parent requirement and affected SPEC or GOAL. SPEC links to parent acceptance criteria. Phase plans link to their ROADMAP entry, parent requirement, and target SPEC. GOAL links to its Phase and relevant SPEC. REVIEW links to its GOAL and evidence.
- Indexes summarize identity and navigation. Do not copy requirements, Phase status, or evidence into them.
- Use relative links and verify each target from the source document's directory.

## Legacy Preservation

Existing documents without REQ ownership remain valid history. Do not move, rename, renumber, assign them to a REQ, rewrite anchors, or transfer completion evidence merely to adopt this structure. Preserve existing links and status while adding new REQ entries.

If migration becomes necessary, inspect incoming links, anchors, identifiers, status, and evidence first. Require an explicit migration scope and plan. Never infer migration or target-project edit permission from a documentation-management request.
