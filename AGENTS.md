# Codex Workspace — Agent Instructions

## 1. Project Purpose

This repository is a dedicated workspace for designing, developing, testing, and maintaining customized Codex components.

Managed components include Skills, Hooks, Agents, configurations, templates, and supporting scripts.

The repository serves as the source workspace for Codex customizations.

## 2. Component Organization

- Organize components by responsibility and purpose.
- Separate stable implementations from drafts and experiments.
- Follow established naming and directory conventions.
- Reuse existing templates and component structures.
- Keep components modular and independently maintainable.
- Avoid duplicating instructions across related components.

## 3. Skill Development

When creating or modifying Skills:

1. Inspect existing Skills and their conventions.
2. Define the Skill's purpose, scope, and activation conditions.
3. Design reference documents before writing `SKILL.md` for new Skills.
4. Keep `SKILL.md` focused on purpose, principles, routing, and restrictions.
5. Place detailed implementation guidelines in `references/`.
6. Use `README.md` files as reference indexes when necessary.
7. Keep reference documents focused and preferably under 200 lines.
8. Avoid duplicating reference content in `SKILL.md`.
9. Define cross-Skill coordination when responsibilities overlap.
10. Preserve compatibility with the supported Codex Skill format.

## 4. Hook Development

When creating or modifying Hooks:

- Inspect existing Hook implementations and configurations.
- Verify supported events, input schemas, and execution behavior.
- Prefer `.mjs` for Node.js-based Hooks unless otherwise required.
- Keep each Hook focused on a clear responsibility.
- Validate inputs and handle unexpected payloads.
- Minimize execution overhead and unnecessary output.
- Preserve established Hook behavior.
- Test normal execution and relevant failure scenarios.
- Ensure outputs conform to the expected Hook protocol.

## 5. Configuration Management

- Preserve supported configuration formats and fields.
- Separate reusable examples from machine-specific settings.
- Avoid hardcoding machine-specific paths in reusable components.
- Verify compatibility with the intended Codex version.
- Do not introduce unsupported or undocumented configuration fields.
- Keep sensitive values out of version-controlled configurations.

## 6. Documentation Standards

- Prefer English for repository documentation unless otherwise requested.
- Use consistent Markdown structure and naming conventions.
- Keep each document focused on a clear responsibility.
- Distinguish required rules from illustrative examples.
- Clearly identify example paths and configurable values.
- Maintain reference indexes and relative document links.
- Avoid duplicating detailed guidelines across documents.

## 7. Component Validation

- Validate components according to their type.
- Verify Skill metadata, structure, and reference links.
- Verify Hook syntax, supported event behavior, and output formats.
- Check configuration syntax and supported fields.
- Report compatibility limitations and unverified behavior.
- Do not activate components that have not passed required validation.

## 8. Active Environment Management

- Treat this repository and `~/.codex` as separate environments.
- Do not automatically install, synchronize, or activate components.
- Do not modify the active Codex environment without explicit authorization.
- Inspect existing targets before deployment or synchronization.
- Preserve active configurations and components unless changes are requested.

## 9. Repository Restrictions

- Do not treat this repository as a general application development project.
- Do not introduce application frameworks or build systems without a specific need.
- Do not create placeholder components without a clear requirement.
- Do not duplicate global agent instructions in this document.
- Do not assume experimental Codex capabilities are supported.
- Do not deploy unfinished components without authorization.
