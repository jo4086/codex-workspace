# REQUEST01 — Dedicated Routes Directory and Entry-Only `App.tsx`

- **Requested:** 2026-11-23
- **Status:** Implemented and validated
- **Targets:** Existing [`react-router` Skill](../../../skills/react-router/SKILL.md) and [`react-project-structure` Skill](../../../skills/react-project-structure/SKILL.md)
- **Implementation owner:** `my-skill-creator`

## Purpose

Replace the current optional Declarative Mode layout with a consistent React project rule: route composition belongs in a dedicated routes directory, while `App.tsx` remains only the application entry component and contains no route configuration or other application implementation.

## Confirmed Requirements

- [x] When a React project configures routes, keep the route definitions and route-rendering component outside `App.tsx` in a dedicated route directory.
- [x] Use `src/routes/` as the canonical directory in new React projects instead of the current `src/router/` recommendation. Existing projects should follow the same ownership rule when routing structure is being created or intentionally reorganized; do not trigger an unrelated migration merely because the Skill is active.
- [x] Keep `App.tsx` limited to importing and returning the root route entry component. Do not define routes, providers, layouts, feature logic, business logic, or substantial JSX in `App.tsx`.
- [x] Move router-provider initialization and other application-level provider composition to an explicit bootstrap or app-composition owner outside `App.tsx`, such as `main.tsx` or a focused module selected by the project structure.
- [x] Make these rules mandatory defaults for applicable React project work rather than optional examples or complexity-dependent recommendations.
- [x] Treat first-time URL design for list and detail views as routing architecture work even when a starter project has no router. Before choosing whether or how to introduce routing, read `react-router/references/architecture.md`.

## Ownership and Skill Integration

- [x] Update `react-router` to own the contents and composition of `src/routes/`, including route objects, route rendering, nested routes, layouts, and environment-appropriate router integration.
- [x] Update `react-project-structure` to own the presence and placement of the dedicated routes directory and the entry-only responsibility of `App.tsx`.
- [x] Keep the detailed routing rules in `react-router`; the project-structure Skill should state the structural boundary and route routing decisions to `react-router` instead of duplicating them.
- [x] Reconcile the current `src/router/` example in `react-router` with the `src/routes/` example already present in the React project-structure specification and implemented references.
- [x] Preserve framework- or mode-required file locations for React Router Data or Framework Mode projects. Where those modes control route file placement, enforce the same separation of `App.tsx` responsibilities without inventing a conflicting directory layout.
- [x] Add an explicit `react-router` selection condition: when a starter has no existing router and list/detail URLs are being designed for the first time, read `references/architecture.md` before selecting an implementation approach.

## Expected Structure

The exact files inside `src/routes/` may scale with the project, but the minimum responsibility split should remain recognizable:

```text
src/
├── routes/       # Route definitions and root route rendering
├── App.tsx       # Imports and returns the root route entry only
└── main.tsx      # React bootstrap and environment router provider
```

This tree establishes ownership, not a requirement to create unused files or additional abstraction layers.

## Restrictions

- [x] Do not place route declarations directly in `App.tsx`.
- [x] Do not treat application providers or a shared page layout as entry-only `App.tsx` code.
- [x] Do not require an identical internal file count or premature feature-based route splitting inside `src/routes/`.
- [x] Do not change existing route paths, navigation behavior, loaders, actions, or error handling while applying this structural rule.

## Completion Evidence Required Later

- [x] The `react-router` architecture and route-configuration references consistently use the dedicated `src/routes/` ownership rule and no longer recommend `src/router/` for new Declarative Mode projects.
- [x] The `react-project-structure` entrypoint or focused reference makes the routes directory and entry-only `App.tsx` boundary discoverable for React project initialization and structural work.
- [x] Cross-Skill guidance assigns route internals to `react-router` and structural placement to `react-project-structure` without duplicating detailed rules.
- [x] Documentation scenarios cover a new Declarative Mode project, an existing project whose routing is not in scope, and a Data or Framework Mode project with required route locations.
- [x] Documentation scenarios also cover a router-free starter where list and detail URLs are first being designed; the architecture reference must be read before deciding how to implement routing.
- [x] Both Skills pass metadata validation; affected Markdown links, LF endings, line-count review, and `git diff --check` pass before the request is marked complete.

**Validation evidence (2026-11-23):** Reviewed the Declarative Mode structure, out-of-scope existing routes, Data/Framework Mode file-location preservation, and router-free list/detail URL design paths against both Skills. `quick_validate.py` passed for `skills/react-router` and `skills/react-project-structure`; affected Markdown link and LF checks, line-count review, and `git diff --check` passed. These checks validate Skill guidance; no target React project was migrated.

## Open Decisions

None. The canonical new-project directory is `src/routes/`, and `App.tsx` is restricted to returning the root route entry component. Internal route file names and non-router provider placement remain project-specific within those boundaries.
