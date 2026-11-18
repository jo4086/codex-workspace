# REQUEST01 — Incremental Requests for Existing Components

- **Requested:** 2026-11-08
- **Status:** Implemented and validated
- **Target:** Existing [`skill-spec-designer` Skill](../../../skills/skill-spec-designer/SKILL.md)

## Purpose

Extend TBD planning so additions or revisions to an existing Skill or Hook are recorded as numbered requests while the original specification remains available.

## Requirements

- [x] When a user requests a change to an existing Skill or Hook as a TBD plan, add `TBD/skills/<name>/REQUEST<next-number>.md` or `TBD/hooks/<name>/REQUEST<next-number>.md`, respectively. Use the next available number in that component directory and preserve existing request files.
- [x] Record the request date and the user's confirmed requirements in the new file. Distinguish examples, proposed implementation details, and unresolved decisions from requirements.
- [x] Add a dated link to the request in that component's `README.md` with an unchecked completion checkbox. Make the checkbox mean that the request has been implemented and validated by the responsible creator workflow; drafting the request does not complete it.
- [x] Preserve the original README specification and unrelated request entries when adding an incremental request. Keep the README navigable as further requests accumulate.
- [x] Apply the same process to Skills and Hooks, while respecting any user-specified filename that differs from the normal numbering pattern.

## Coordination and Completion

`skill-spec-designer` owns recording and indexing the TBD request. [`my-skill-creator` REQUEST01](../my-skill-creator/REQUEST01.md) defines how implementation confirms completion and updates the README checkbox for Skill requests. Hook implementation ownership should be identified before a Hook request is marked complete.

The change is complete when the implemented planning workflow creates the correct next request file, records a dated unchecked README entry, and preserves earlier specifications and requests in representative Skill and Hook cases.

## Validation Evidence

- Reviewed the workflow with the existing Skill request directories and the Hook path pattern. The React UI Style `REQUESTS01.md` demonstrates preservation of a user-provided filename; its README entry was initially dated and unchecked before validation.
- Confirmed the reference separates request creation from creator-owned completion, preserves original specifications, and prevents overwriting earlier request files. No Hook request was created for this documentation-only change.
- `quick_validate.py skills/skill-spec-designer`, Markdown link and LF checks, and `git diff --check` passed on 2026-11-08.
