# REQ Document Lifecycle

## Scope and Shape

Manage substantial work within a workspace unit: the smallest project area that owns its requirements, plans, implementation context, and verification records. Use the unit's established documentation root. `apps/electron/docs/` is one valid shape, not a required repository layout.

For each new substantial feature, assign a unit-local stable ID such as `REQ02`. Group owned documents by document type, then REQ:

```text
<unit-docs>/
├── ARCHITECTURE.md
├── REQUIREMENTS/
│   ├── README.md
│   └── REQ02.md
├── REQUESTS/
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
| `REQUESTS/REQ02/<topic>.md` | Individual request, question, change input, and handling history | An individual record exists and preserving its context helps |
| `SPEC/REQ02/<feature-area>.md` | Behavior, UI, data, or other implementation-facing rules | Detail is needed beyond acceptance criteria |
| `ROADMAP.md` | Every REQ Phase ID, order, current status, and detailed-plan links | A REQ has phased work |
| `ROADMAP/REQ02/Phase01.md` | Phase scope, prerequisites, target SPEC, and sequence | Phase planning no longer fits clearly in `ROADMAP.md` |
| `GOAL/REQ02/Phase01.md` | Outputs and completion conditions agreed before execution | Separate execution criteria improve clarity |
| `REVIEW/REQ02/Phase01.md` | Verification against GOAL, evidence, failures, and remaining work | Verification results exist |
| `ARCHITECTURE.md` | Current implemented unit structure | Verified implementation changes current structure |

`REQUIREMENTS` contains the normalized feature requirements and acceptance criteria. `REQUESTS` preserves individual source records and change context. Do not create `REQUESTS/REQ02/` when no individual records exist. A small independent change may remain `REQUESTS/<topic>.md` when durable REQ lifecycle management adds no value.

Keep proposed architecture in REQUIREMENTS, SPEC, or a clearly labeled proposal. Do not present a proposal in `ARCHITECTURE.md` as current structure. Update current architecture only after verified implementation changes it.

## Identifiers

1. Find all used and retired IDs in the owning unit before assigning the next `REQ<number>` ID.
2. Never reuse or renumber a REQ ID. Preserve it when the feature name changes.
3. Record split, replacement, or retirement relationships in the original requirement and update direct links.
4. Assign Phase numbers inside each REQ. Write the full identifier as `REQ02-Phase01` wherever Phase identity or status appears.
5. Use `Phase01.md` under the REQ folder. Use descriptive topic filenames for SPEC and REQUESTS; do not create new numeric-only names such as `01.md`.

## Status and Evidence

`ROADMAP.md` is the sole source of Phase status. Detailed ROADMAP, GOAL, and REVIEW documents may explain progress and evidence but must not define a competing status. Update `ROADMAP.md` only after the evidence supports the status transition.

Draft actionable GOAL completion conditions and REVIEW verification items as unchecked task items. Change `- [ ]` to `- [x]` only after the stated condition is met and supporting evidence is recorded or directly linked nearby. Leave failed, blocked, partial, and unverified items unchecked. Preserve existing checked states unless their evidence changes.

## Links and Indexes

- `REQUIREMENTS/README.md` maps each REQ ID to its feature name and requirement document.
- Existing `SPEC/README.md`, `REQUESTS/README.md`, `GOAL/README.md`, `ROADMAP.md`, and `REVIEW.md` link directly to applicable REQ-owned documents. Add an index only when the category exists and the index helps selection.
- Requirement documents link to source REQUESTS when present. REQUESTS link to their parent requirement and affected SPEC. SPEC links to parent acceptance criteria. Phase plans link to their ROADMAP entry, parent requirement, and target SPEC. GOAL links to its Phase and relevant SPEC. REVIEW links to its GOAL and evidence.
- Indexes summarize identity and navigation. Do not copy requirements, Phase status, or evidence into them.
- Use relative links and verify each target from the source document's directory.

## Legacy Preservation

Existing documents without REQ ownership remain valid history. Do not move, rename, renumber, assign them to a REQ, rewrite anchors, or transfer completion evidence merely to adopt this structure. Preserve existing links and status while adding new REQ entries.

If migration becomes necessary, inspect incoming links, anchors, identifiers, status, and evidence first. Require an explicit migration scope and plan. Never infer migration or target-project edit permission from a documentation-management request.
