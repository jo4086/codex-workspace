# User-Written Requests

## Source and Indexes

Use the owning project's or Workspace Unit's `docs/user/` for Markdown the user prepares and submits as a request. Group documents by submission round and feature. For example, a viewer request might be at `docs/user/prompt01/viewer/navigation.md`.

- In `docs/README.md`, explain the role of `user/`, link to `./user/README.md`, and keep the link to the current requirements index.
- In `docs/user/README.md`, record each round's ID, purpose, feature index links, and completion status. Mark a round complete once the requested work has been implemented and verified. Link to evidence when available. Phase status lives in `ROADMAP.md`.
- In each `docs/user/promptNN/{feature}/README.md`, index the detailed request files for that feature and round. Keep the individual requirements in the user-authored files.

Preserve the submitted text and maintain navigation and completion metadata in the indexes. In the affected lifecycle documents, link directly to the relevant source files with relative links. Record agreed scope and acceptance criteria in REQUIREMENTS. Continue the owner's established REQUESTS or FEEDBACK convention for lifecycle records, linking to the submitted files where the context is needed. Preserve existing IDs, links, and history.

## Intake and Scope

1. Treat the files the user identifies under `docs/user/` as the request, whether the reference names the root, a round, a feature, or a single file. Use the round and feature indexes to find the relevant details. Read historical or completed rounds when they provide relevant context.
2. Compare the submission with the owning requirements and affected lifecycle documents. Keep unresolved choices visible in the plan and resolve consequential conflicts before changing agreed requirements.
3. Classify the submitted scope as a whole by impact and coordination. Isolated work with clear acceptance criteria can be small even when it spans files. Coordinated features or phases, cross-unit dependencies, and material architecture changes indicate broad work.
4. Follow [planning before implementation](./session-workflows.md#plan-before-implementation) for both paths:
   - **Small, clearly scoped request.** Update the applicable lifecycle records and proceed with implementation and verification in the same task. Use the small-correction path when a new REQ would add no useful lifecycle.
   - **Broad request.** Determine scope and dependencies. Prepare applicable REQUIREMENTS, SPEC, ROADMAP, and GOAL documents with source links, actionable phases, and acceptance criteria. Keep the round and planned Phases pending and completion conditions unchecked. End the task after preparing the documents, summarize the plan and open decisions, and wait for the user's direction to implement. This pause covers the whole submission, including its individually small items.

Direct chat requests follow the [normal session workflow](./session-workflows.md).
