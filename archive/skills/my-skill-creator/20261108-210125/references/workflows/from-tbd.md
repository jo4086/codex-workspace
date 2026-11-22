# Create from TBD

## Purpose

Convert a planned Skill specification in `TBD/<skill-name>/README.md` into a managed Skill without changing the specification.

## Workflow

1. Read the specification and every local document it explicitly requires.
2. Separate requirements, preferences, restrictions, completion criteria, and unresolved decisions.
3. Inspect applicable repository instructions, related user-authored Skills, and available creation guidance.
4. Define purpose, activation conditions, responsibility boundaries, and Cross-Skill relationships.
5. Design the smallest reference hierarchy that satisfies the specification. When the specification requires named files, retain them unless a conflict makes implementation impossible.
6. Write individual references, category indexes, the root index, and `SKILL.md`, in that order.
7. Compare the result with every requirement and completion criterion.
8. Run structural, link, format, and relevant behavioral checks.

## Unresolved Decisions

Do not guess when an unresolved decision changes scope, ownership, permissions, compatibility, or output structure. Preserve the decision and ask the user when implementation cannot proceed safely. Report non-blocking unresolved items explicitly.

Never edit the source TBD specification unless the user separately requests that change.
