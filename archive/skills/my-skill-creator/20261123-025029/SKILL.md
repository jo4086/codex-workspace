---
name: my-skill-creator
description: Create, extend, restructure, or review Codex Skills managed in codex-workspace using its reference-first workflow, documentation conventions, and validation requirements.
---

# My Skill Creator

## Purpose

Create and maintain Codex Skills that follow this repository's structure, reference hierarchy, documentation, coordination, and quality conventions.

Apply this Skill to Skills managed in `codex-workspace`. Preserve explicit user requirements, existing conventions, and unresolved decisions.

## Core Principles

- Inspect applicable instructions, source requirements, and related Skills before editing.
- Use the smallest structure that supports the actual workflows.
- For new Skills with references, write focused references and indexes before `SKILL.md`.
- Keep shared routing and constraints in `SKILL.md`; keep conditional detail in its owning reference.
- Preserve unrelated content and established architecture during incremental changes.
- Never infer permissions to install, synchronize, activate, or modify the active Codex environment.

## Reference Routing

Start at [references/README.md](./references/README.md), then load only relevant documents.

- Read [workflows/README.md](./references/workflows/README.md) to select creation, extension, or review procedure.
- Read [standards/README.md](./references/standards/README.md) for structure, documentation, indexes, Cross-Skill ownership, and validation.
- Read [templates/README.md](./references/templates/README.md) only when drafting a corresponding document.

## Workflow

1. Identify the source of truth, requested operation, scope, and completion criteria.
2. Inspect repository instructions, the target or source Skill, and related user-authored Skills.
3. Resolve responsibility boundaries and design only needed resources.
4. Implement from focused references upward, ending with the entrypoint for a new referenced Skill.
5. Compare the result with the source requirements without silently discarding unresolved items.
6. Apply the [Skill validation standard](./references/standards/validation.md), including the available validator and checks it does not cover.
7. Report changed files, exact checks and exits, relevant output, applicability status, and open issues.

## Cross-Skill Coordination

The bundled `skill-creator` owns generic scaffolding, UI metadata generation, and structural validation tooling. This Skill owns `codex-workspace` Skill workflows, required document structures and indexes, and Skill validation. Use bundled tooling when relevant without treating bundled content as a template that overrides user-authored choices.

`agent-doc-writer` owns general Markdown structure and navigation. Apply it when Skill work includes substantive documentation decisions, while this Skill's specific structure and index requirements take precedence.

Related domain Skills retain ownership of their own technical guidance. Document routing and ownership instead of copying their rules.

## Restrictions

- Do not invent unsupported Codex features or metadata.
- Do not override explicit requirements with templates or defaults.
- Do not add placeholder resources or unnecessary categories.
- Do not restructure unrelated Skills or modify source TBD documents unless explicitly requested.
- Do not duplicate detailed guidance across entrypoints, references, or Skills.
- Do not install or activate a Skill without explicit authorization.
