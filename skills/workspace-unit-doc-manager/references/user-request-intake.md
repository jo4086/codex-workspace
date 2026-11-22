# User-Written Requests

## Source and Indexes

Use the owning project's or Workspace Unit's `docs/user/` for Markdown the user prepares and submits as a request. Store new submissions at `docs/user/promptNN/<type>(scope)/<request-file>.md`. Use the type and lowercase scope naming rules in the [Git commit convention](../../git-commit/SKILL.md), with a scope required for each folder. Examples include `feat(history)` and `chore(workspace)`.

- In `docs/README.md`, explain the role of `user/`, link to `./user/README.md`, and keep the link to the current requirements index.
- Use `docs/user/README.md` as the central index. For new submissions, nest checkboxes by round, feature folder, and request document. Give each document a direct relative link to its final path and a one-line summary. Keep individual requirements in the original files.
- Preserve earlier rounds, their feature READMEs, and their existing progress records. New feature folders use the central index for navigation.
- Mark a request complete after implementation and verification. Mark its feature and round complete when their requested work has been implemented and verified. Link to evidence when available. Phase status lives in `ROADMAP.md`.

Preserve the submitted text and maintain navigation and completion metadata in the indexes. In the affected lifecycle documents, link directly to the relevant source files with relative links. Record agreed scope and acceptance criteria in REQUIREMENTS. Continue the owner's established REQUESTS or FEEDBACK convention for lifecycle records, linking to the submitted files where the context is needed. Preserve existing IDs, links, and history.

## Register Additions

An explicit notice that the user added a round or request documents under `docs/user/` starts registration. A round path such as `prompt10/` is enough. Inspect the indicated round, folder, or files and the relevant entries in the central index.

1. Read the submitted documents and group them by the work they describe. Move loose files from the round root into matching feature folders, reusing suitable folders. Keep a user-supplied folder name when it follows the convention and fits the work. Rename an unclear or misleading folder to the appropriate `<type>(scope)`.
2. Preserve filenames and original file contents. Check destination collisions and affected links before moving files. Update links in indexes and other referring documents to the final paths, keeping any anchors and making destinations relative to their containing document. Check links in the moved files from their new locations too. If a name collision or a link that would require changing the original text prevents a move, preserve the affected originals in place, report the conflict, and continue with unaffected files.
3. Update the affected branch of `docs/user/README.md` in place. Match existing entries to the request files, including entries at their pre-move paths, so names and links can be updated without duplicating entries. Preserve unchanged entries, summaries, states, and evidence. Start new items with `- [ ]`. If newly pending work extends a checked feature or round, reopen the affected parent checkboxes and keep the verified document items checked.
4. Verify that each registered document appears once and that its link resolves. Report any folders renamed, entries added, and unresolved conflicts. For a registration notice alone, end here. If the user also requests implementation, continue to the workflow below using the registered paths.

Use angle brackets around link destinations containing parentheses:

```markdown
- [ ] `prompt05`
  - [ ] `feat(history)`
    - [ ] [history-persistence](<./prompt05/feat(history)/history-persistence-requirements.md>): Persist history thumbnails and metadata.
```

## Intake for Implementation

1. Treat the files the user identifies under `docs/user/` as the request, whether the reference names the root, a round, a feature, or a single file. Follow direct links in the central index or existing feature indexes for older submissions. Read historical or completed rounds when they provide relevant context.
2. Compare the submission with the owning requirements and affected lifecycle documents. Keep unresolved choices visible in the plan and resolve consequential conflicts before changing agreed requirements.
3. Classify the submitted scope as a whole by impact and coordination. Isolated work with clear acceptance criteria can be small even when it spans files. Coordinated features or phases, cross-unit dependencies, and material architecture changes indicate broad work.
4. Follow [planning before implementation](./session-workflows.md#plan-before-implementation) for both paths:
   - **Small, clearly scoped request.** Update the applicable lifecycle records and proceed with implementation and verification in the same task. Use the small-correction path when a new REQ would add no useful lifecycle.
   - **Broad request.** Determine scope and dependencies. Prepare applicable REQUIREMENTS, SPEC, ROADMAP, and GOAL documents with source links, actionable phases, and acceptance criteria. Keep the round and planned Phases pending and completion conditions unchecked. End the task after preparing the documents, summarize the plan and open decisions, and wait for the user's direction to implement. This pause covers the whole submission, including its individually small items.

Direct chat requests follow the [normal session workflow](./session-workflows.md).
