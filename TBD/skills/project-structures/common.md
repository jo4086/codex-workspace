# Common Requirements

## Principles
- Treat sample layouts as guidance, not mandatory templates.
- Respect existing project conventions, `AGENTS.md`, and TypeScript path aliases.
- Create directories only when they serve an existing need.
- Keep modules cohesive; avoid speculative abstractions and premature shared code.
- Prefer minimal, reversible changes.
- Do not introduce dependencies solely to reorganize folders.

## Activation
- Apply the relevant Skill for project initialization, directory design, file placement, or structural refactoring.
- Do not activate solely for unrelated styling or isolated logic changes.
- Apply both Skills when Electron process organization and React Renderer structure are both affected.

## Refactoring
1. Inspect current structure, imports, config, and instructions.
2. Identify ownership and the smallest useful changes.
3. Move or extract code incrementally; update affected imports.
4. Preserve UI, routing, state, IPC, and business behavior unless explicitly requested otherwise.
5. Run relevant checks and summarize changed paths.

## Coordination
- `react-router`: routing behavior and configuration details.
- `react-ui-style`: visual design, styling, interactions.
- `code-style`: naming, import conventions, general code rules.
- `my-skill-creator`: generated Skill format and validation.
- Avoid copying detailed rules owned by other Skills.

## Documentation
- `SKILL.md`: scope, triggers, exclusions, core principles, reference routing.
- `references/README.md`: task-to-document index with relative links.
- Load only relevant references through the index.
- Every reference file must contain fewer than 200 lines.

## Acceptance
- Clear ownership and activation boundaries.
- Valid links and metadata; no duplicate or contradictory rules.
- Existing behavior preserved in structure-only changes.
- Both Skills registered in `skill-router/skill-map.md`.
