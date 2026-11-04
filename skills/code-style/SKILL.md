---
name: code-style
description: Apply coding conventions to TypeScript or JavaScript frontend, backend, and shared-package code. Use when creating, changing, or reviewing names, imports, module boundaries, types, errors, or file organization.
---

# Code Style

## Purpose

Keep code conventions consistent across applications and shared packages while respecting each project's established architecture and tools.

## Core Principles

- Inspect nearby code and the project's TypeScript, lint, format, package, and build configuration before choosing a convention.
- Existing project conventions and tooling take precedence over this Skill's preferences.
- Keep changes focused on the requested work; preserve public contracts and behavior unless their change is requested.
- Configure and verify import resolution in the actual runtime or build system before introducing an alias.
- Keep private implementation separate from intentional package public APIs.

## Reference Routing

Start at [references/README.md](./references/README.md), then load only the relevant guidance:

- [General](references/general/README.md): names, imports, module boundaries, and errors.
- [Languages](references/languages/README.md): TypeScript or JavaScript patterns.
- [Frameworks](references/frameworks/README.md): React or Node.js code organization.

## Workflow

1. Identify the files, consumers, project conventions, and configured checks that matter to the change.
2. Read the references for the affected concerns and follow existing project decisions where this Skill leaves a choice open.
3. Implement the smallest consistent change, including configuration only when required for the code to resolve and run.
4. Run checks relevant to the changed code and report any unresolved compatibility issue.

## Cross-Skill Coordination

- This Skill owns code conventions, types, imports, errors, and module boundaries.
- `react-ui-style` owns React visual design, styling, and UI interactions; `react-router` owns routes, navigation, and route-layout composition. Apply them when those concerns are part of the task and the Skills are available.

## Restrictions

- Do not impose an import ordering, relative-versus-alias, or public-subpath policy where the project has not chosen one.
- Do not add dependencies, aliases, or public exports solely for stylistic consistency.
- Do not replace rules already enforced by project tooling with conflicting instructions.
