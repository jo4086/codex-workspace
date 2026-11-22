---
name: skill-router
description: Identify, select, and coordinate relevant Codex Skills based on task intent, even when the user does not explicitly name a Skill. Use when determining which Skills apply to a task.
---

# Skill Router

## 1. Purpose

Identify and coordinate applicable Codex Skills based on the user's request, available Skills, and established responsibility boundaries.

This Skill serves as a lightweight routing entry point. It does not replace specialized Skills or implement their domain-specific guidelines.

## 2. Core Principles

- Select Skills based on task responsibilities, not only keywords.
- Apply relevant Skills even when the user does not explicitly name them.
- Prefer the smallest sufficient set of Skills.
- Respect explicit user requirements and existing project conventions.
- Avoid loading unrelated Skills or unnecessary reference documents.
- Preserve each Skill's ownership of its specialized guidelines.
- Do not assume a Skill is available solely because it appears in the Skill map.

## 3. Skill Selection Workflow

1. Analyze the requested task and affected responsibilities.
2. Read [Skill Map](./skill-map.md).
3. Identify candidate Skills based on their activation conditions.
4. Verify that each selected Skill is available.
5. Read each selected Skill's `SKILL.md`.
6. Follow the selected Skill's reference routing instructions.
7. Load only the references relevant to the task.
8. Coordinate overlapping responsibilities when multiple Skills apply.
9. Proceed with the task using the selected guidelines.

If no relevant Skill is available, proceed using applicable project instructions and established conventions.

## 4. Skill Map Management

- `skill-map.md` defines managed Skills, activation conditions, and responsibility boundaries.
- Use the map for initial Skill selection.
- Treat each Skill's own `SKILL.md` as authoritative for its detailed scope and instructions.
- Verify availability before applying mapped Skills.
- Update the map when a Skill is added, removed, renamed, or its responsibilities change.
- Do not duplicate detailed Skill references in the map.

## 5. Cross-Skill Coordination

- Apply multiple Skills only when the task spans their responsibilities.
- `project-architecture-planner` owns the project-to-child-area planning conversation, responsibility boundaries, interactions, and directory ownership before implementation. Apply the relevant technology-specific structure Skill for detailed placement.
- `react-router` owns routing architecture, navigation, and route composition.
- `react-ui-style` owns visual layout, styling, responsiveness, and UI interactions.
- `react-project-structure` owns React app directories, feature organization, and file placement, including React-based Electron Renderers.
- `electron-project-structure` owns Electron process directories, IPC placement, and Main, Preload, and Renderer boundaries.
- `code-style` owns coding conventions, imports, types, and module boundaries.
- `agent-doc-writer` owns substantive Markdown writing, revision, structure, and navigation.
- Route explicitly reported additions under `docs/user/` and project or Workspace Unit implementation requests to `workspace-unit-doc-manager`. It owns submission registration, ROADMAP and GOAL planning before implementation (including small corrections and requests that omit document names), and owner-specific REQ lifecycles.
- `skill-spec-designer` owns new TBD Skill specifications and numbered change requests for existing Skills or Hooks.
- `my-skill-creator` owns Skill creation, extension, maintenance, validation, and closure of validated numbered Skill requests.
- For an existing component, route TBD planning to `skill-spec-designer` and Skill implementation to `my-skill-creator`. Apply both when the user requests both stages; Hook implementation requires its own owner.
- Apply both documentation Skills when lifecycle work also needs substantive Markdown writing or navigation. A Phase status-only change uses `workspace-unit-doc-manager` alone.
- For route-aware visual layouts, apply both `react-router` and `react-ui-style` when appropriate.
- When work changes both React Renderer internals and Electron process organization, apply both project-structure Skills. Use only the relevant one when the change stays within its ownership.
- Apply `code-style` alongside specialized Skills when coding conventions are relevant.
- Do not load unrelated Skills solely because they are listed in the map.
- Follow higher-priority instructions and existing project conventions when recommendations differ.

## 6. Restrictions

- Do not implement domain-specific guidelines within this Skill.
- Do not duplicate detailed instructions from specialized Skills.
- Do not load every available Skill for every task.
- Do not invent missing Skills or references.
- Do not modify other Skills as part of routing alone.
- Do not override higher-priority instructions.
- Do not assume that Skill routing guarantees automatic Skill activation.
