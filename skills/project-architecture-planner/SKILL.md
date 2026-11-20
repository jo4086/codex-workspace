---
name: project-architecture-planner
description: Plan project and child-area responsibilities, interactions, boundaries, and directory ownership through dialogue before initial implementation or material structural change.
---

# Project Architecture Planner

## Purpose and Activation

Plan architecture before implementing a new project or entering an application, package, service, feature, or other child area whose responsibilities and boundaries have not been established. Revisit the affected level when new work materially changes its architecture. Do not invoke a fresh planning cycle for a small isolated edit within an established structure.

## Core Principles

- Inspect applicable instructions, existing structure, and project conventions before proposing changes.
- Establish a broad responsibility map and cross-boundary interactions before choosing directories.
- Proactively surface essential roles implied by the work, explain them, and discuss consequential choices with the user. Treat proposals as proposals until reviewed.
- Give each agreed role a clear owner. Decompose meaningful child responsibilities recursively, without speculative layers or catch-all directories.
- Use the reviewed structure to guide implementation and revisit it when responsibilities or interactions change.
- Save the first durable project plan under the project's `docs/`; save a newly documented monorepo app's or package's first plan under its own `docs/`. Keep later documents with their owner and preserve established paths.

## Reference Routing

Start at [references/README.md](./references/README.md). Read [new project planning](./references/project-planning.md) for an initial project and [child area planning](./references/area-planning.md) when work enters or materially changes a lower-level area. Load both only when both levels are in scope.

## Workflow

1. Identify the planning level and inspect current ownership, constraints, and conventions.
2. Map responsibilities, boundaries, dependencies, data flow, and shared contracts at that level.
3. Present proposed roles and a directory tree for user review; resolve consequential choices before implementing the affected structure.
4. Record the reviewed result at a level appropriate to the work. A conversational tree can suffice for a small scope; once saved as a durable document, place it in the owning project's, application's, or package's `docs/` root and follow the document lifecycle for substantial work.
5. Create directories as authorized work needs them, place code with its agreed owner, and check that roles and interactions remain accounted for.

## Cross-Skill Coordination

- This Skill owns the project-to-child-area planning conversation and responsibility boundaries. `react-project-structure` owns React app and feature placement; `electron-project-structure` owns Electron process and IPC organization. Apply the relevant technology Skill when detailed placement is needed.
- `workspace-unit-doc-manager` owns REQ identifiers, architecture document lifecycle, and traceability for substantial workspace-unit work; this Skill supplies technical planning content.
- `agent-doc-writer` owns Markdown structure and navigation when decisions are documented. `skill-router` owns Skill selection and coordination.

## Restrictions

- Preserve established architecture unless a structural change is authorized.
- Do not invent product requirements or treat a suggested role as an agreed decision.
- Do not infer a framework, dependency, service boundary, or deployment topology from a directory tree alone.
- Do not create empty directories, placeholder files, or a full documentation hierarchy solely to represent future roles.
