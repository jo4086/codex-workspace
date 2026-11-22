# REQUEST03 — Accept User-Written Requests from `docs/user/`

- **Requested** 2026-11-22
- **Status** Implemented and validated
- **Target** [Workspace Unit Doc Manager](../../../skills/workspace-unit-doc-manager/SKILL.md)
- **Implementation owner** `my-skill-creator`

## Purpose

Let users submit multiple Markdown files in place of a chat prompt. Keep their original wording available for reference while recording agreed scope, acceptance criteria, and work plans in the owning project's or Workspace Unit's existing lifecycle documents.

## Document Layout

```text
docs/
├── README.md
├── user/
│   ├── README.md
│   ├── prompt01/
│   │   ├── viewer/
│   │   │   ├── README.md
│   │   │   └── navigation.md
│   │   └── ui/
│   │       ├── README.md
│   │       └── toolbar.md
│   └── prompt02/
│       ├── history/
│       │   ├── README.md
│       │   └── layout.md
│       └── viewer/
│           ├── README.md
│           └── display.md
└── REQUIREMENTS/
    ├── README.md
    ├── REQ01.md
    └── REQ02.md
```

The round numbers, feature names, filenames, and REQ IDs in the tree are examples.

- [x] Use `docs/user/` under the owning project or Workspace Unit for request documents manually prepared and supplied by the user. Group submissions by round in `promptNN/` and within each round by feature in `promptNN/{feature}/`.
- [x] Ensure `docs/README.md` explains the role of `user/` and links to `./user/README.md` when the workflow is in use. Keep the link to the current requirements index.
- [x] Use `docs/user/README.md` to track each round's ID, purpose, feature index links, and completion status. Mark a round complete only after its requested work has been implemented and verified. Link to the evidence when available. Phase status stays in `ROADMAP.md`.
- [x] Use `docs/user/promptNN/{feature}/README.md` to index that round's detailed request documents for the feature. Keep individual requirements in the user-authored files.
- [x] Preserve the submitted request text. Maintain navigation and completion metadata in the indexes as needed. Record analyzed requirements and plans in the appropriate lifecycle documents, with direct relative links to the relevant user sources. `REQUIREMENTS` remains the current source of agreed scope and acceptance criteria.
- [x] Retain established `REQUESTS` or `FEEDBACK` rules for the owning project's or unit's lifecycle records. Link to submitted files where their context is needed and preserve existing IDs, links, and history. Continue the existing workflow for requests submitted directly in chat.

## Intake and Execution

- [x] When the user points to `docs/user/`, a round, a feature, or a request file, treat the referenced documents as the request. Use the round and feature indexes to locate the relevant details, then compare them with the affected REQ and lifecycle documents. Preserve unresolved choices in the resulting plan and resolve consequential conflicts before changing agreed requirements. Historical and completed rounds provide context when relevant.
- [x] **Small, clearly scoped request.** Update the affected `REQUIREMENTS`, `GOAL`, or other applicable documents as needed and proceed with implementation and verification in the same task. Use the existing small-correction workflow when a new REQ would add no useful lifecycle.
- [x] **Broad request.** Determine scope and dependencies, and prepare the applicable `REQUIREMENTS`, `SPEC`, `ROADMAP`, and `GOAL` documents with source links, actionable phases, and acceptance criteria. Leave planned work pending and its completion conditions unchecked. End the task after preparing the documentation, summarize the plan and open decisions, and wait for the user to direct implementation. This applies to the submitted scope as a whole, including individually small items within a broad request.

As proposed classification guidance, use the impact and coordination involved. An isolated change with clear acceptance criteria can proceed directly. Multiple coordinated features or phases, cross-unit dependencies, and material architectural changes indicate broader work. File count alone does not determine the branch.

## Reference Example

The local example is `~/projects/img_downloader/docs/user/`. Its round index links to separate `prompt01/viewer/README.md` and `prompt01/history/README.md` indexes and records partial, completed, and superseded work. The project's `docs/README.md` links to both the user request index and the official requirements index. Use this layout and navigation as a reference for the Skill change. The example project's numbering, feature names, and revision conventions are specific to that project.

## Implementation and Validation

- [x] Update the Skill entry point and relevant lifecycle and session guidance for placement, intake, source links, and the two execution paths.
- [x] Verify the navigation path from `docs/README.md` through the round index and feature index to the submitted files, and trace the resulting REQ documents back to their sources.
- [x] Verify that one small request submitted through files can proceed through implementation and verification with only the applicable documentation changes.
- [x] Verify that a broad multi-feature request stops after preparing its documents, leaves the round and planned Phases incomplete, and produces no implementation changes.
- [x] Verify that submitted request text, unrelated rounds, and established `REQUESTS` or `FEEDBACK` records are preserved. Check that a direct chat request still follows the existing workflow.
- [x] Validate Skill metadata, reference links, Markdown formatting, and the workflow scenarios. Record evidence before checking the request complete.

## Validation Evidence

**2026-11-22.** Inspected the reference project’s root, round, and feature indexes. Temporary small and broad submissions exercised source links from REQUIREMENTS, verified completion for the small request, and a pending round and Phase after broad intake with documentation changes only. Source text, earlier rounds, and the established REQUESTS record were preserved. Skill metadata validation, local links, LF formatting, and `git diff --check` passed.
