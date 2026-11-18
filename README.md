# Codex Workspace

A dedicated workspace for designing, developing, organizing, and maintaining customized Codex configurations and extensions.

## Purpose

This repository serves as the source workspace for customizing Codex according to the user's preferred development workflows, coding conventions, and operational requirements.

Its primary goal is to create consistent, reusable, and maintainable Codex components rather than relying on scattered or independently managed configurations.

## Scope

The repository may include:

- **Skills** — Reusable instructions, specialized workflows, and reference documents.
- **Hooks** — Automated actions, validation, formatting, and workflow integrations.
- **Agents** — Agent roles, responsibilities, and collaboration guidelines.
- **Configurations** — Codex settings, profiles, and execution preferences.
- **Templates** — Standardized structures for creating new components.
- **Scripts** — Utilities for testing, validating, and managing configurations.
- **Drafts** — Planned components and specifications that are not yet implemented.

Additional components may be introduced as requirements evolve.

Skill and Hook plans that need definition before activation are kept in [TBD](./TBD/README.md).

For a portfolio-oriented analysis of the project's goals, architecture, implementation examples, and validation limits, see the [portfolio documents](./docs/portfolio/README.md).

## Core Principles

- Prioritize the user's explicit requirements and preferred workflows.
- Maintain consistent structures, naming conventions, and documentation.
- Design components with clear, independent responsibilities.
- Prefer reusable and modular implementations.
- Respect existing components and established conventions.
- Avoid unnecessary complexity, dependencies, and abstractions.
- Keep changes limited to the requested scope.
- Separate experimental or unfinished components from stable implementations.
- Preserve compatibility with the intended Codex environment.

## Repository Guidelines

- Treat this repository as the source of truth for managed Codex customizations.
- Inspect existing structures and conventions before creating or modifying components.
- Reuse established templates and patterns whenever appropriate.
- Keep documentation concise, focused, and maintainable.
- Do not assume every component must be installed or activated immediately.
- Do not modify the active `~/.codex` environment unless explicitly requested.
- Validate components before integrating them into the active environment.

## Development Approach

1. Identify the user's requirements.
2. Review existing components and conventions.
3. Design the appropriate structure.
4. Implement or update the relevant components.
5. Validate behavior and compatibility.
6. Document important decisions and usage requirements.
7. Integrate into the active Codex environment only when requested.

## Syncing Skills

After validating a Skill, run [sync-skills.sh](./scripts/sync-skills.sh) from the repository root with the names to install or update:

```bash
scripts/sync-skills.sh project-architecture-planner
```

The script copies each named Skill from `skills/` to `~/.agents/skills/` and always compares `skill-router` as part of the same run. It replaces `skill-router` only when its repository copy differs, including when another Skill's registration changed its map. Changed installed copies of other Skills are first moved to `archive/skills/<skill-name>/<YYYYMMDD-HHMMSS>/`; the router is replaced without a lasting archive. Identical copies are skipped. Creating or editing a Skill in this repository does not run the script automatically.

For a one-time router refresh even when both copies are identical, run `scripts/sync-skills.sh --force-router`. This still leaves no router archive.

## Project Status

This repository is developed incrementally. Its structure and components will evolve according to actual requirements rather than a fixed implementation roadmap.
