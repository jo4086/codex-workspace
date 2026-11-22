# Skill Structure

## Required Entry Point

Every Skill directory requires `SKILL.md`. Its frontmatter `name` must use lowercase letters, digits, and hyphens, remain under 64 characters, and match the directory name. Include a concise `description` that states capability and activation conditions.

## Optional Resources

Add only resources used by an actual workflow:

- `references/` for conditional or substantial instructions.
- `scripts/` for repeated logic or deterministic reliability.
- `assets/` for files used in generated output, not instructions.
- `agents/` for requested UI metadata or invocation policy.

A reference hierarchy needs `references/README.md`. Each reference category directory needs its own `README.md`. Create categories only for distinct responsibility groups; do not add empty directories or placeholders.

## Selection Rules

Keep a simple Skill self-contained when routing adds no value. Use references for substantial mode-specific guidance required by the Skill's workflows. Follow an existing Skill's structure for narrow extensions unless restructuring is explicitly requested and justified.

## Compatibility

Use only metadata and resource types supported by the target Codex Skill format. Preserve optional fields that remain valid. Do not assume experimental capabilities.
