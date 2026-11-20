# Project Architecture Planner — Draft Skill Specification

## Purpose

Plan a project's architecture through dialogue before implementation, then apply the same planning process whenever work begins in a child area whose structure has not been established. Establish a broad view of responsibilities, boundaries, and interactions before deciding where code belongs.

The [Skill](../../../skills/project-architecture-planner/SKILL.md) is implemented and validated in this repository. Its installation is managed separately from this specification.

## Confirmed Requirements

- At the start of every new project, discuss the intended product, major responsibilities, architectural boundaries, and directory structure with the user before implementation begins.
- Proactively identify essential functions and roles that can be separated early, including ones the user has not listed. Explain and discuss the proposed split rather than silently treating it as a settled requirement.
- Produce a broad project-level directory structure that gives each agreed responsibility a clear owner.
- Repeat the same process when work starts in a lower-level area whose architecture has not been established. For example, starting `apps/*/backend` requires a backend architecture discussion, an account of its interactions with other areas, and a role-based internal directory structure before backend implementation.
- At each level, identify interactions across boundaries before finalizing the local structure: dependencies, shared contracts, data flow, and ownership of each connection as relevant to the project.
- Decompose the chosen area by distinct responsibilities rather than placing unrelated work in one catch-all directory. Continue recursively where a child area has multiple meaningful responsibilities.
- Use the agreed structure to guide subsequent implementation and file placement. Revisit the relevant level when new work changes responsibilities or interactions.

## Activation and Scope

Apply when initializing a new project or starting implementation in a project area, application, package, service, or feature whose internal responsibilities and boundaries have not yet been planned. Also apply when new work materially changes an established area's architecture.

The Skill owns the cross-project planning conversation and the sequence from architecture to directory ownership. It should work across technology stacks. It does not replace framework-specific structure guidance or require a wholesale redesign for a small isolated edit.

## Proposed Workflow

The following workflow is a proposed way to implement the confirmed requirements; its exact prompts and artifact format can be refined during implementation.

1. Inspect applicable instructions and existing repository structure. For a new project, gather its goals, constraints, likely applications or packages, and integration points from the user.
2. Present a concise high-level map of responsibilities and their interactions. Surface essential missing roles and consequential architectural choices for discussion.
3. Agree on ownership boundaries and the smallest useful project-level directory tree that represents those responsibilities. Distinguish roles needed now from later possibilities.
4. Before implementing a selected child area, repeat the conversation for that area's responsibilities and its interactions with sibling areas or external systems. Design its internal directory tree by role.
5. Create the agreed directories as part of the authorized project work, where the environment and repository conventions support them; otherwise provide the exact tree as the implementation plan. Place code only after its owner is clear.
6. Check that every planned role has an owner, each cross-boundary interaction has an identified contract or coordination point, and the tree matches the agreed architecture. Revise it when the work reveals a real missing responsibility.

## Boundaries and Constraints

- Preserve existing architecture and repository conventions unless the user authorizes a structural change.
- Do not invent product requirements or present proposed roles as user decisions. Resolve consequential choices through dialogue.
- Avoid empty or speculative layers added only for visual symmetry. Make the proactive split concrete enough to support foreseeable work while keeping it tied to agreed responsibilities.
- Do not select a framework, dependency, service boundary, or deployment topology solely because a directory tree suggests one.
- Do not force repeated discussions for every file or trivial change; recurse when a new area has meaningful architectural decisions.
- Do not create a complete documentation hierarchy as a side effect of planning.

## Related Skills

- `react-project-structure` owns React application and feature placement after the relevant project boundaries are identified.
- `electron-project-structure` owns Electron process and IPC boundaries.
- `workspace-unit-doc-manager` owns REQ identifiers and the lifecycle of architecture and planning documents for substantial workspace-unit work; this Skill determines technical responsibilities, interactions, and structure.
- `agent-doc-writer` owns Markdown structure and navigation if architecture decisions are recorded in documents.
- `skill-router` should select this Skill alongside the applicable technology-specific Skill when both planning and detailed placement are needed.

The existing `TBD/skills/project-structures/` plan produced the React and Electron Skills. Its optional, technology-specific layout guidance does not cover this recurring project-to-child-area planning conversation.

## Future Implementation and Validation

- [x] Draft the Skill entrypoint and only the reference guidance needed for project-level and child-area planning.
- [x] Verify that activation includes both new projects and substantial child-area starts without triggering on trivial edits.
- [x] Check the workflow against at least a new project and the `apps/*/backend` example: responsibility map, external interactions, role-based tree, and recursive planning must all be explicit.
- [x] Verify coordination with the React, Electron, documentation, and REQ management Skills without duplicating their rules.
- [x] Validate Skill metadata, links, and structure; register the implemented Skill in the router only after validation.

Implementation owner: `my-skill-creator`.

**Validation evidence (2026-11-18):** The entrypoint and its two focused references cover initial-project and recursive child-area planning. Reviewed a new-project responsibility map and the `apps/<app>/backend` example against boundary ownership, shared contracts, role-based trees, and recursion. The Skill router lists this Skill. `quick_validate.py skills/project-architecture-planner`, four-Skill reference/link/LF checks, and `git diff --check` passed. These are Skill-documentation scenarios; no target project architecture was changed.

## Implementation Decisions

- **Planning artifact:** A reviewed directory tree and implementation plan suffice for smaller scopes; substantial work or repository conventions may require a durable architecture document.
- **Empty directories:** Show future roles in the reviewed plan. Create directories only when authorized implementation needs them; do not add placeholder files solely to represent future roles.

## Change Requests

- [x] **2026-11-21:** [REQUEST01 — Record initial architecture planning under `docs/`](./REQUEST01.md). The first durable project, application, or package plan belongs in its owning `docs/` structure. Implemented and validated; evidence is in the request.
