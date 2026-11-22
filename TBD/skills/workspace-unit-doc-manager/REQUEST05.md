# REQUEST05 — Organize User Submissions by Feature and Index Them Directly

- **Requested** 2026-11-22
- **Status** Implemented and validated
- **Target** [Workspace Unit Doc Manager](../../../skills/workspace-unit-doc-manager/SKILL.md)
- **Implementation owner** `my-skill-creator`

## Purpose

Let the user drop Markdown requirements into a new or existing round under `docs/user/` and tell the agent where they were added. The agent organizes those files by feature and registers each original document in the central index.

This updates the folder and index conventions established in [REQUEST03](./REQUEST03.md). Preserve its source traceability and execution rules for separately requested implementation, as well as [REQUEST04](./REQUEST04.md)'s planning prerequisites.

## Confirmed Requirements

- [x] Use `docs/user/promptNN/<type>(scope)/<request-file>.md` for new submissions. Use the type and scope naming style from the [Git commit convention](../../../skills/git-commit/SKILL.md). Select a type and scope that describe the submitted work.
- [x] Start registration when the user explicitly says they added a round or documents and identifies where to look. Inspect the indicated round, folder, or files. The user can point to `prompt10/` with Markdown files directly inside it without specifying feature folders or listing each filename.
- [x] Read the submitted documents to group related work. Put loose files into appropriate feature folders, reusing a matching folder when available. If a folder the user already named is unclear or misrepresents its contents, choose and apply a clearer `<type>(scope)` name. Keep request filenames and contents intact, and update affected relative links when paths change.
- [x] Update `docs/user/README.md` with a three-level checkbox list for the round, each feature folder, and each request document. Each leaf links directly to the original Markdown file at its final path and includes a concise, one-line summary. Use angle brackets around Markdown link destinations that contain parentheses.
- [x] Use the central index for new submissions and skip creating feature READMEs solely to index their files. Preserve older rounds, their feature READMEs, completion history, and evidence. When a notification concerns an existing round, update the affected entries and keep unrelated entries intact.
- [x] Register new entries as unchecked. Completion still depends on implementation and verification. Where a new pending document extends a previously completed group or round, reflect the updated scope in its parent checkboxes while retaining earlier verified document states.
- [x] A notice that documents were added triggers folder organization and index registration. When the user also asks to implement submitted work, use the existing scoped intake and planning workflow.

## Example Index

```markdown
- [ ] `prompt05`
  - [ ] `feat(history)`
    - [ ] [history-persistence](<./prompt05/feat(history)/history-persistence-requirements.md>): 히스토리 대표 썸네일과 메타데이터의 백엔드 영구 저장, 로컬 스토리지 동기화 및 데이터 복원.

- [ ] `prompt06`
  - [ ] `chore(workspace)`
    - [ ] [pnpm-workspace](<./prompt06/chore(workspace)/pnpm-workspace-requirements.md>): pnpm workspace 도입 및 의존성 관리 통합.
    - [ ] [AGENTS.md](<./prompt06/chore(workspace)/agents-cleanup-requirements.md>): AGENTS.md 지침 검증 및 정리.
```

## Proposed Implementation

- Update the Skill's activation and [user request intake guidance](../../../skills/workspace-unit-doc-manager/references/user-request-intake.md) to distinguish registration from an implementation request and route new submissions through the central index. Preserve feature READMEs that already document historical submissions.
- Reconcile existing entries against the affected files before moving and indexing them. Preserve headings, summaries, status, and evidence for unchanged entries. If a destination already has a different file with the same name, report the conflict and preserve both originals while registering the unaffected files.
- Use the existing `img_downloader/docs/user/README.md` as a local example of historical indexes and the nested checklist coexisting.

## Validation

- [x] Walk through an explicit notice about a new round containing loose Markdown files. Verify content-based grouping, original file text and filenames, and one direct checklist link per file.
- [x] Walk through a submission in an appropriately named feature folder and one in a poorly named folder. Verify the good name is retained, the other is corrected, and affected links resolve from their source documents at the final paths.
- [x] Register new files in an existing round and repeat the same notice. Verify there are no duplicate entries or resets of verified document states. Check that previously completed parent entries reflect newly pending work while unrelated rounds and legacy feature READMEs are preserved.
- [x] Verify the checklist nesting, unchecked new entries, one-line summaries, and angle-bracket link syntax. Verify that a registration-only notice ends after document organization and indexing and that separately requested implementation still follows REQUEST03 and REQUEST04.
- [x] Validate Skill metadata, reference links, and Markdown formatting. Record evidence before marking the request complete.

## Validation Evidence

**2026-11-22.** Temporary document walkthroughs covered loose files, suitable and unsuitable folder names, relative link repair and anchor preservation, checked and pending states, duplicate-free repeat registration, and destination collisions. The example index links resolved in the local reference project. The routing review confirmed that registration ends after indexing and that requested implementation still uses the existing intake and planning rules. The Skill validator passed for the manager and router. Relative links, LF formatting, and `git diff --check` passed.
