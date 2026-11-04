# Skills Guidance

## Scope and Ownership

- This file applies to `skills/`.
- `agent-doc-writer/`, `code-style/`, `electron-project-structure/`, `my-skill-creator/`, `react-project-structure/`, `react-router/`, `react-ui-style/`, `skill-router/`, `skill-spec-designer/`, and `workspace-unit-doc-manager/` are user-authored skills.
- `.system/` contains separately bundled skills; do not use its content as a template to overwrite user-authored choices.
- Keep user skills and bundled skills independent. Change `.system/` only when the request explicitly targets a bundled skill.

## User Skill Map

- `agent-doc-writer/SKILL.md` is the general Markdown authoring, revision, and navigation entrypoint.
- `agent-doc-writer/references/README.md` routes to focused guidance for writing, `AGENTS.md`, README roles, and navigation.
- `code-style/SKILL.md` is the coding-conventions entrypoint.
- `git-commit/SKILL.md` is the Git commit message convention entrypoint; the repository `hooks/git/commit-msg` enforces its subject checks when activated.
- `code-style/references/README.md` routes through category indexes:
  - `general/README.md` links naming, imports, module boundaries, and error handling.
  - `languages/README.md` links TypeScript and JavaScript patterns.
  - `frameworks/README.md` links React and Node.js code organization.
- `electron-project-structure/SKILL.md` is the Electron process organization entrypoint.
- `my-skill-creator/SKILL.md` is the entrypoint for creating, extending, restructuring, and reviewing Skills managed in this repository.
- `my-skill-creator/references/README.md` routes through category indexes:
  - `workflows/README.md` selects creation from TBD or direct requests, extension, and review procedures.
  - `standards/README.md` links structure, documentation, indexes, Cross-Skill ownership, and validation.
  - `templates/README.md` links adaptable entrypoint, reference, and index shapes.
- `react-project-structure/SKILL.md` is the React application and feature organization entrypoint.
- `react-router/SKILL.md` is the routing entrypoint.
- `react-router/references/README.md` routes to focused documents:
  - `architecture.md` covers directory and router responsibilities.
  - `route-config.md` covers `RouteObject`, nesting, layouts, and registration.
  - `navigation.md` covers links, programmatic navigation, and navigation state.
  - `environments.md` covers Web, Electron, tests, and router selection.
  - `layouts.md` covers shared layouts and `Outlet` composition.
- `react-ui-style/SKILL.md` is the UI entrypoint.
- `react-ui-style/references/README.md` routes through category indexes:
  - `foundations/README.md` links layout, typography, and iconography guidance.
  - `interactions/README.md` links editing, navigation, and feedback guidance.
  - `technologies/README.md` is the technology category index.
- `react-ui-style/references/technologies/tailwindcss.md` contains Tailwind CSS v4 guidance.
- `skill-router/SKILL.md` is the Skill selection and coordination entrypoint; `skill-router/skill-map.md` maps task responsibilities to available user-authored Skills.
- `skill-spec-designer/SKILL.md` is the TBD Skill specification entrypoint.
- `skill-spec-designer/references/README.md` routes to the specification authoring, clarification, revision, and handoff procedure.
- `workspace-unit-doc-manager/SKILL.md` is the workspace-unit REQ document lifecycle and context-discovery entrypoint.
- `workspace-unit-doc-manager/references/README.md` routes to document lifecycle and focused session workflows.
- `technologies/README.md` is currently empty. Do not infer rules from its filename or describe it as complete guidance.

## Reading and Coordination

- Use `skill-router` to select the smallest sufficient set of available Skills, then enter each selected Skill through its `SKILL.md`, its linked `references/README.md` when present, and only targeted references.
- Keep relative Markdown links valid at every routing level. Prefix links to files in the current directory or a child directory with `./`; use `../` for parent directories. Link each maintained reference from `SKILL.md` or another relevant resource and state when to read it.
- `skill-router` owns Skill selection, coordination, and the user-authored Skill map; specialized Skills retain their domain guidance.
- `git-commit` owns commit message wording; the repository Git hook owns automatic subject validation. Neither component authorizes a commit or activates the hook.
- `agent-doc-writer` owns general Markdown structure, revision, and navigation; project instructions and specialized Skills retain document-specific content and required formats.
- `skill-spec-designer` owns creating and revising Skill specifications under `TBD/`; `my-skill-creator` owns implementation and validation under `skills/`.
- `workspace-unit-doc-manager` owns workspace-unit REQ document lifecycle, traceability, phased status, and focused context discovery; `agent-doc-writer` retains general Markdown ownership.
- `react-router` owns route configuration, navigation architecture, router providers, and route-layout composition.
- `react-ui-style` owns visual layout, sizing, responsiveness, component styling, and UI interactions.
- `code-style` owns names, imports, types, errors, file organization, and module boundaries across application and package code.
- `my-skill-creator` owns this repository's Skill workflows, Skill-specific documentation conventions, and validation expectations. The bundled `skill-creator` owns generic scaffolding, UI metadata generation, and structural validation tooling.
- Apply `react-router` and `react-ui-style` together only when work spans route structure and visual UI implementation. Do not load the other skill for routing-only or styling-only work.
- For route-aware visual layouts, preserve `react-router` ownership of route structure and `Outlet`; apply `react-ui-style` to presentation.

## Authoring Rules

- A skill folder requires `SKILL.md`; optional `agents/`, `scripts/`, `references/`, and `assets/` must serve an actual workflow.
- Use lowercase letters, digits, and hyphens for the folder and frontmatter `name`; keep the name under 64 characters and match the folder name.
- `SKILL.md` frontmatter requires `name` and `description`. Keep the description concise, discriminating, and explicit about when the skill applies.
- Keep shared purpose, essential constraints, workflow, and reference routing in `SKILL.md`; move conditional detail to focused references.
- Keep user-skill reference documents focused and preferably under 200 lines.
- Do not duplicate guidance across entrypoints and references. Do not add placeholders or resources without a concrete need.
- Use scripts only for repeated logic or deterministic reliability, and execute changed scripts to verify behavior.
- Use assets for generated output, not as instructions. Inspect them only when the task requires it.
- If changing `agents/openai.yaml`, read `.system/skill-creator/references/openai_yaml.md`; preserve unrelated policy and dependency fields.
- Do not regenerate an existing `openai.yaml` containing policy or dependencies because the generator replaces the whole file.

## Validation

- Run `python3 skills/.system/skill-creator/scripts/quick_validate.py <skill-directory>` for each created or changed skill.
- The validator checks `SKILL.md` presence, YAML frontmatter shape, allowed keys, required fields, hyphen-case names, name length, description limits, and unfinished TODO markers.
- The validator does not check decision quality, reference discoverability, link targets, script behavior, or whether frontmatter `name` matches the folder; verify those separately.
- For documentation changes, verify local links resolve, nonempty routed targets contain intended guidance, and Markdown uses LF line endings.
