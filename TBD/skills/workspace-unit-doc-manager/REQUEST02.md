# REQUEST02 — Require `docs/` from the First Project or Workspace Unit Document

- **Requested:** 2026-11-21
- **Status:** Implemented and validated
- **Target:** Existing [`workspace-unit-doc-manager` Skill](../../../skills/workspace-unit-doc-manager/SKILL.md)
- **Implementation owner:** `my-skill-creator`

## Purpose

Make structured documentation the default from the first durable project document. A new project and each new monorepo Workspace Unit under `apps/*` or `packages/*` must start and continue its own documentation under its own `docs/` directory. Do not begin a root-level, single-document plan that later becomes the sole place for requirements, specifications, goals, and progress.

## Confirmed Requirements

- [x] For a newly documented project, use `<project>/docs/` as the required documentation root from the first durable planning or requirement document.
- [x] In a monorepo, treat each application or package that begins its own documentation as a separate documentation owner: `apps/<app>/docs/` and `packages/<package>/docs/`. Keep project-wide documents under the project-level `docs/`; do not replace a unit's own documents with a single root document.
- [x] Continue placing later requirements, specifications, plans, goals, reviews, and current architecture under the owning project's or unit's `docs/` directory. Use the existing document-type and REQ ownership rules for substantial work, including `REQUIREMENTS/`, `SPEC/`, `ROADMAP`, `GOAL/`, and `REVIEW/` as their content warrants.
- [x] When substantial initial work needs durable scope and acceptance criteria, create its REQ in `docs/REQUIREMENTS/` and connect the requirement index. Create other category documents only when their existing lifecycle triggers apply; the required `docs/` location does not require empty folders or every possible document on day one.
- [x] Keep the current `REQUESTS` versus new `FEEDBACK` selection rule within each unit. Requiring `docs/` does not authorize renaming, moving, or rewriting established documents and links in an existing project or unit.
- [x] Preserve the distinction between project-level ownership and application or package ownership. Cross-unit requirements retain explicit owner and dependency references rather than being folded into a root-level catch-all document.

## Scope and Boundaries

- This request applies when **starting** durable documentation for a new project or for an `apps/*` or `packages/*` Workspace Unit. Existing documented projects retain their established locations until a separately authorized migration.
- A root `README.md` may remain the project entry point, and `AGENTS.md` may remain where its instruction scope requires. They are not substitutes for the project's `docs/` lifecycle documents.
- `workspace-unit-doc-manager` owns document placement, REQ identity, and lifecycle. The related [architecture planning request](../project-architecture-planner/REQUEST01.md) owns where the first reviewed architecture plan is recorded. `agent-doc-writer` retains generic Markdown and navigation guidance.
- The global agent baseline should route newly authored project and Workspace Unit documentation to these rules so the requirement applies before a Skill-specific workflow is selected. Any future edit to the active global instruction file needs its own authorized implementation step.

## Implementation and Validation

- [x] Update the Skill entry point and focused lifecycle and session guidance so `docs/` is mandatory at initial documentation creation for a project and for each new `apps/*` or `packages/*` unit, while established documentation remains stable.
- [x] Check a standalone new project scenario: its first durable requirement or plan is under project `docs/`, and later SPEC, Phase, GOAL, and REVIEW files use the same owner and REQ links.
- [x] Check a new monorepo scenario with project-wide `docs/`, `apps/<app>/docs/`, and `packages/<package>/docs/`: each document has a clear owner and no unit's lifecycle is maintained solely in a root document.
- [x] Check an existing unit with an established document root or `REQUESTS` model: no implicit move, new `FEEDBACK` folder, broken link, or status transfer occurs.
- [x] Validate Skill metadata, reference links, Markdown formatting, and consistency with the architecture planning Skill. Record evidence before marking this request complete.

**Validation evidence (2026-11-21):** Reviewed the lifecycle and session routes for a standalone first REQ at `<project>/docs/REQUIREMENTS/`, a monorepo with project, app, and package `docs/` owners, and an established `REQUESTS` unit retaining its paths and links. The Skill keeps existing SPEC, Phase, GOAL, REVIEW, status, and migration rules. `quick_validate.py` passed for this Skill and the related architecture and router Skills; 13 affected Markdown files passed link and LF checks; `git diff --check` passed. These are guidance scenarios; no target project documents were migrated.

## Open Decisions

None for the requested placement rule. The actual content and optional category files still follow the task and the Skill's existing creation triggers.
