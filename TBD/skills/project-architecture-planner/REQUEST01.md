# REQUEST01 — Record Initial Architecture Planning under `docs/`

- **Requested:** 2026-11-21
- **Status:** Implemented and validated
- **Target:** Existing [`project-architecture-planner` Skill](../../../skills/project-architecture-planner/SKILL.md)
- **Implementation owner:** `my-skill-creator`

## Purpose

Ensure the first durable architecture plan for a new project or a newly documented application or package starts the structured `docs/` workflow instead of becoming a root-level single document.

## Confirmed Requirements

- [x] At the start of a new project, discuss responsibilities, boundaries, interactions, and the proposed directory tree as before. When recording the reviewed result as a durable project document, place it under `<project>/docs/` from the first write.
- [x] When architecture planning starts in a new monorepo application or package, place that area's durable plan under `apps/<app>/docs/` or `packages/<package>/docs/`. Project-wide decisions belong under the project-level `docs/`, with links to affected unit documents where needed.
- [x] Keep subsequent architecture and implementation planning documents in the same owning `docs/` structure, coordinated with the document categories, REQ IDs, and current-versus-proposed architecture rules of [`workspace-unit-doc-manager` REQUEST02](../workspace-unit-doc-manager/REQUEST02.md).
- [x] Do not let the existing allowance for a reviewed tree or implementation plan become a root-level, single-document substitute for structured documentation. A conversational tree can still precede a durable document; once saved, it follows the owning `docs/` rule.
- [x] Do not create every category, empty directories, or placeholder files merely to display the future architecture. Preserve existing project and unit documents unless a separate migration is authorized.

## Boundaries

This Skill owns the planning conversation and architecture content. `workspace-unit-doc-manager` owns the documentation root, document type, REQ lifecycle, and unit-level ownership rules. Root `README.md` and `AGENTS.md` retain their existing entry-point and instruction roles.

## Implementation and Validation

- [x] Update the new-project and child-area planning guidance, plus the Skill entry point if needed, to route first and later durable architecture records to the owning `docs/` directory.
- [x] Check a standalone new project and a monorepo with one new app and one new package: the first saved plan is in the correct `docs/` root and project-wide versus unit decisions are distinct.
- [x] Check that conversation-only sketches do not cause placeholder folders and that an existing project is not implicitly migrated.
- [x] Validate Skill metadata, reference links, Markdown formatting, and consistency with the companion document-management request. Record evidence before marking this request complete.

**Validation evidence (2026-11-21):** Reviewed first saved plans for a standalone project, `apps/<app>/`, and `packages/<package>/` against their owning `docs/` paths, with project-wide decisions in root `docs/`. Reviewed the conversation-only path and established-project preservation against both planning references. `quick_validate.py` passed for this Skill and the related document-management and router Skills; 13 affected Markdown files passed link and LF checks; `git diff --check` passed. These checks validate guidance, not a target project's generated documents.

## Open Decisions

None for the requested placement rule. The exact document type and whether a separate architecture document is needed depend on the planning content and the owning unit's document lifecycle.
