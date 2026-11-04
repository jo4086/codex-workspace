# Cross-Skill Coordination

## Ownership

When responsibilities overlap, identify each related Skill and assign each concern to one owner. Keep detailed rules in the owning Skill; coordination text should only explain when another Skill is relevant and how boundaries divide.

## Coordination Rules

1. Inspect related Skills before defining overlap.
2. Apply multiple Skills only when the request spans their owned responsibilities.
3. Link or name another Skill only when it is available in the target environment and materially supports the workflow.
4. Do not copy detailed guidance between Skills.
5. Treat coordination guidance as routing, not guaranteed automatic activation.

## Bundled Skill Creator

The bundled `skill-creator` owns generic Codex Skill anatomy, scaffolding tools, UI metadata generation, and structural validation. `my-skill-creator` owns repository-specific reference-first workflows, index conventions, and validation expectations. Use bundled scripts when useful, but preserve user-authored structure and repository requirements.
