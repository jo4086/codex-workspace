# Skill Ideas

TBD holds plans for Skills and Hooks before activation. It keeps early exploration separate from implemented components.

[Repository overview](../README.md) · [Skills](../skills/)

## Role

Use this directory to:

- Capture a skill idea and the problem it should solve.
- Clarify its purpose, scope, activation conditions, and restrictions.
- Gather references and identify overlap with existing skills.
- Keep incomplete concepts out of the maintained skills collection.

Each idea may use its own subdirectory while it is being developed.

## Skill Specifications

- [agent-doc-writer](./skills/agent-doc-writer/README.md) — Original plan; [implemented Skill](../skills/agent-doc-writer/SKILL.md).
- [code-style](./skills/code-style/README.md) — Original plan; [implemented Skill](../skills/code-style/SKILL.md).
- [git-commit](./skills/git-commit/README.md) — Commit message convention; [implemented Skill](../skills/git-commit/SKILL.md).
- [my-skill-creator](./skills/my-skill-creator/README.md) — Original plan; [implemented Skill](../skills/my-skill-creator/SKILL.md).
- [project-structures](./skills/project-structures/README.md) — Original plans; implemented [React Skill](../skills/react-project-structure/SKILL.md) and [Electron Skill](../skills/electron-project-structure/SKILL.md).
- [skill-spec-designer](./skills/skill-spec-designer/README.md) — Original plan; [implemented Skill](../skills/skill-spec-designer/SKILL.md).
- [workspace-unit-doc-manager](./skills/workspace-unit-doc-manager/README.md) — REQ별 문서 구조 개정안; [이전 검토안](./skills/workspace-unit-doc-manager/README.v1.md), [현재 구현 Skill](../skills/workspace-unit-doc-manager/SKILL.md).

## Hook Specifications

- [Git commit-msg](./hooks/git/commit-msg.md) — Commit subject validation and [repository Hook](../hooks/git/commit-msg).

## Workflow

1. Record the idea and its intended outcome.
2. Define responsibilities, boundaries, and activation conditions.
3. Review existing skills and repository conventions for reusable patterns or overlap.
4. Design the reference documents and proposed skill structure.
5. Create a Skill in [`skills/`](../skills/) only when its requirements and structure are clear; keep its plan under [`TBD/skills/`](./skills/).
6. Link to the implemented Skill while retaining the original plan unless asked to revise or remove it.
