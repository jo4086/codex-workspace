# Skill Map

## Purpose

Map task responsibilities to the appropriate user-authored Skills.

## Available Skills

| Skill | Apply When | Responsibility |
| --- | --- | --- |
| `react-ui-style` | Creating or modifying React UI, styling, responsive layouts, or interactions | Visual design and UI behavior |
| `react-router` | Modifying React routes, navigation, providers, or route-aware layouts | Routing architecture |
| `react-project-structure` | Initializing or reorganizing React app directories, features, or file placement, including a React-based Electron Renderer | React app and feature structure |
| `electron-project-structure` | Initializing or reorganizing Electron process directories, IPC placement, or file ownership across Main, Preload, and Renderer | Electron process structure |
| `code-style` | Writing or modifying code, imports, types, or general module boundaries | Coding conventions |
| `git-commit` | Drafting, revising, or reviewing Git commit messages | Commit message convention |
| `agent-doc-writer` | Substantive writing, revision, structure, navigation, or link changes in project or Skill Markdown | General document structure and navigation |
| `workspace-unit-doc-manager` | Managing workspace-unit REQ document meaning, identifiers, traceability, lifecycle, ROADMAP Phase status, architecture transitions, or focused session discovery | REQ-based document lifecycle and context discovery |
| `skill-spec-designer` | Planning a new Skill or recording a numbered TBD change request for an existing Skill or Hook | TBD specification and request authoring |
| `my-skill-creator` | Creating, extending, reviewing, or validating Skills, including implementing numbered TBD Skill requests | Skill authoring, validation, and validated request closure |

## Reference Entry Points

| Skill | Entry Point |
| --- | --- |
| `react-ui-style` | [SKILL.md](../react-ui-style/SKILL.md) |
| `react-router` | [SKILL.md](../react-router/SKILL.md) |
| `react-project-structure` | [SKILL.md](../react-project-structure/SKILL.md) |
| `electron-project-structure` | [SKILL.md](../electron-project-structure/SKILL.md) |
| `code-style` | [SKILL.md](../code-style/SKILL.md) |
| `git-commit` | [SKILL.md](../git-commit/SKILL.md) |
| `agent-doc-writer` | [SKILL.md](../agent-doc-writer/SKILL.md) |
| `workspace-unit-doc-manager` | [SKILL.md](../workspace-unit-doc-manager/SKILL.md) |
| `skill-spec-designer` | [SKILL.md](../skill-spec-designer/SKILL.md) |
| `my-skill-creator` | [SKILL.md](../my-skill-creator/SKILL.md) |

Links in this table are relative to this document.

## Selection Rules

- Select Skills based on actual task responsibilities.
- Apply multiple Skills only when their responsibilities overlap.
- Confirm Skill availability before loading.
- Treat missing or unfinished Skills as unavailable.
- Read each selected Skill's own reference index for detailed guidance.
- Do not assume all mapped Skills must be used for every task.
- Apply both project-structure Skills when React Renderer internals and Electron process organization are both affected. For Renderer-only React structure, select `react-project-structure`; for Main, Preload, or IPC structure, select `electron-project-structure`.
- For TBD planning of an existing Skill or Hook, select `skill-spec-designer`; for implementation of a numbered Skill request, select `my-skill-creator`. Select both only when the user requests both planning and implementation.

## Maintenance

Update this map when a managed Skill is added, removed, renamed, or its responsibility changes.

Do not duplicate the full contents of individual Skill references here.
