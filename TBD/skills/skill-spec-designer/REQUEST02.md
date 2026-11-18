# REQUEST02 — Maintain the TBD Skill Status Index

- **Requested:** 2026-11-18
- **Status:** Implemented and validated
- **Target:** Existing [`skill-spec-designer` Skill](../../../skills/skill-spec-designer/SKILL.md)

## Purpose

Make pending Skill work visible from `TBD/skills/README.md` when a plan or numbered request is recorded.

## Requirements

- [x] Maintain one linked checkbox per Skill plan in `TBD/skills/README.md`.
- [x] Add a new plan with an empty checkbox until its implementation and validation are complete.
- [x] When recording a new numbered request for an already completed Skill, uncheck its index entry in the same change and link the pending request as the reason.
- [x] Preserve unrelated entries and their states. Keep the component README and request file as the detailed requirement and evidence source.

## Completion Evidence

- [x] Reviewed the new-plan path against the open `project-architecture-planner` plan and the new-request path against `react-ui-style` with its earlier completed request and later open request.
- [x] `quick_validate.py skills/skill-spec-designer`, local link and LF checks, and `git diff --check` passed on 2026-11-18. The index has one entry for each current TBD Skill directory.

Implementation owner: `my-skill-creator`. This request covers TBD planning and index updates; closing implemented requests belongs to the creator workflow.
