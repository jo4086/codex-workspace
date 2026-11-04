# Agent Doc Writer — Creation Specification

## Status and Purpose

- **Name:** `agent-doc-writer`
- **Status:** Planned (TBD)

Define shared writing and navigation standards for Markdown documents that agents create, revise, split, or connect in projects and Skills. The Skill covers document responsibility, structure, length, indexes, and links. It does not decide a document's domain requirements, technical content, or whether the user needs a particular document.

Apply when work materially involves documentation such as `AGENTS.md`, `README.md`, `GOAL.md`, `SPEC.md`, `ROADMAP.md`, `ARCHITECTURE.md`, `SKILL.md`, or documents in `docs/` and `references/`. These are examples, not a required file set. A task that only touches code does not activate this Skill solely because the project contains Markdown files.

The document roles and preservation rules below express the requested scope. The length exception and README placement criteria are proposed design choices based on the repository's existing preference for focused documents and selective indexes.

## Shared Document Rules

- Inspect the existing document tree, applicable instructions, links, and project conventions before editing. Preserve confirmed requirements and information when revising or splitting documents.
- Give each document a clear responsibility and an entry point appropriate to its audience. Keep a rule or explanation in one owning location; link to it where other documents need it.
- Prefer fewer than 200 lines per Markdown file, extending this repository's existing default for Skill documentation to other Markdown work. This is a review threshold, not a reason to delete, overcompress, or arbitrarily move important content. Split by responsibility when distinct topics can be read independently and the split improves use or maintenance.
- A longer cohesive document is acceptable when splitting would damage comprehension, duplicate context, or conflict with a required format or existing convention. Record the reason in the document or change report and keep navigation usable.
- Respect existing project structure and document-specific rules before applying general defaults. Do not create directories, README files, or indexes solely to meet a pattern.
- Use relative Markdown links for local documents. A target in the current directory or a child directory must start with `./`, for example `./guide.md` or `./docs/guide.md`; omitting `./` is not allowed. Use `../` to reach a parent directory. Check targets and update affected links and indexes when a document is added, removed, moved, renamed, or split. Do not link to a planned path as if the file already exists.
- Give navigational links a short description of the target's role. Let readers select relevant documents without making them read every reference.

## `AGENTS.md` and `README.md` Responsibilities

`AGENTS.md` contains instructions agents must follow within its applicable directory scope. Describe task principles, responsibility boundaries, restrictions, and necessary routing. Respect higher-priority instructions and the applicable parent and nested `AGENTS.md` hierarchy. Do not introduce rules that conflict with or unnecessarily repeat existing instructions.

`README.md` explains a project or directory and helps readers find relevant content. It may contain usage instructions for people, but ordinary README descriptions do not automatically become agent directives. Put extended explanations and document indexes in README or another owning document rather than bloating `AGENTS.md`.

If an `AGENTS.md` and `README.md` exist in the same directory, link from `AGENTS.md` to that README as `[README](./README.md)` so agents can find the area's explanation and related documents. Do not create a README merely to satisfy this link rule. Keep mandatory instructions in `AGENTS.md` or an explicitly routed instruction source; the README link does not change instruction priority.

## README Roles

| Location | Primary role | Content selected by actual need |
| --- | --- | --- |
| Project root | Project entry point | Purpose, main features and structure, setup, run and development guidance, and brief links to important areas. Keep practical instructions here when that is clearest. |
| Subdirectory | Entry point for that area | Area purpose, components, local usage, directly owned documents, and links to useful child areas. Avoid repeating the parent README. |
| `docs/` with directly owned documents | Document-area entry point or index | Purpose, each directly owned document's role and link, and reading conditions or order when useful. |
| Category directory such as `docs/foundations/` | Category entry point | Category purpose, member documents' roles and links, and reading conditions when useful. |

These roles guide content; no README is required at every level. An established Skill reference index has its own required shape under `my-skill-creator` and takes precedence over these general descriptions.

## README Placement and Navigation

Choose the shortest clear route from an existing entry point to each document. An intermediate README is useful when it owns multiple directly placed documents, integrates mixed content and subcategories, or adds meaningful context or reading guidance. Skip an intermediate README when it would only forward a single link or add a redundant navigation step.

- **Direct documents in `docs/`:** A `docs/README.md` can index files such as `architecture.md` and `workflow.md`.
- **Only categories under `docs/`:** The project README can link straight to `docs/foundations/README.md`; a `docs/README.md` is optional.
- **Direct documents plus categories:** A `docs/README.md` is useful when it explains both the directly owned documents and the category entry points.
- **One document under `docs/`:** The parent README can link directly to `docs/architecture.md` without a `docs/README.md`.

These are examples, not mandatory layouts. When a project or specialized Skill requires a particular index, follow that requirement even if a shorter path exists. Keep every maintained index accurate and avoid forcing readers through unrelated pages.

## Workflow for the Future Skill

1. Identify the requested document change, intended readers, applicable `AGENTS.md`, existing structure, and specialized document rules.
2. Assign each piece of content to an owning document. Decide whether to edit, split, or add a document based on responsibility and navigation value.
3. Draft or revise the documents while preserving requirements and respecting the document's role. Apply the length threshold with the exception criteria above.
4. Connect documents through relative links and update affected indexes and incoming links. Do not create empty intermediate indexes.
5. Verify content preservation, instruction hierarchy, document roles, links, index accuracy, length exceptions, and that the reader can reach relevant material without unnecessary hops.

## Coordination and Boundaries

- [`skill-spec-designer`](../../../skills/skill-spec-designer/SKILL.md) owns eliciting Skill requirements and writing TBD specifications. `agent-doc-writer` can guide the resulting Markdown's organization and links; it does not decide the specification's content.
- [`my-skill-creator`](../../../skills/my-skill-creator/SKILL.md) owns Skill creation and maintenance, including required `SKILL.md` and reference structures, Skill-specific index formats, and validation. `agent-doc-writer` supplies general documentation principles where that Skill leaves a choice; it must not duplicate or override its required rules.
- [`skill-router`](../../../skills/skill-router/SKILL.md) selects applicable Skills. `agent-doc-writer` supplies writing guidance after selection and does not own routing policy.
- Other domain Skills and project instructions retain ownership of their document-specific requirements. Apply this Skill alongside them only when the task includes substantive documentation work.

## Validation and Completion Criteria

The future Skill is ready when it can:

- Guide a representative project README and `AGENTS.md` edit without turning README prose into agent instructions or losing existing requirements.
- Choose sensible README placement for direct documents, categories, mixed content, and a single document, while respecting a specialized index rule.
- Split a long document by responsibility or justify a cohesive exception without deleting important content.
- Keep relative links and affected indexes valid after a move or split, use `./` for current-directory and child-directory targets, and route readers to relevant documents.
- Pass Skill metadata, structure, reference-link, documentation, and representative workflow checks required by this repository.

## Open Decisions

None required to begin implementation. The exact reference-file layout should follow the smallest structure that supports the distinct `AGENTS.md`, README, and navigation guidance during implementation.
