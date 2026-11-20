# REQUEST01 — Separate New Feature Requirements from Revision Feedback

- **Requested:** 2026-11-20
- **Status:** Implemented and validated
- **Target:** Existing [`workspace-unit-doc-manager` Skill](../../../skills/workspace-unit-doc-manager/SKILL.md)
- **Implementation owner:** `my-skill-creator`

## Purpose

For a Workspace Unit starting the new document model, give new feature requirements and later revision feedback distinct roles. Preserve the established document model of units that already use the earlier structure, so a unit does not mix `REQUESTS` and `FEEDBACK` conventions.

## Confirmed Requirements

- [x] Use `REQUIREMENTS` for a new feature's current, agreed scope and verifiable acceptance criteria. A genuinely separate new feature receives its own REQ, even when requested while another feature is being built.
- [x] Use `FEEDBACK` for a meaningful request to revise an existing feature or its requirements, whether received while the requirements are being formed or after implementation. Examples include a changed direction, an inadequate or awkward result, and a concrete example supplied to explain the desired revision.
- [x] Preserve the feedback's original context and its relationship to the affected REQ. When the revision is agreed, update the authoritative `REQUIREMENTS` document and any affected `SPEC`, Phase plan, or `GOAL` completion criteria. Do not leave the accepted change only in `FEEDBACK`.
- [x] Do not create a feedback document for every conversational iteration. Record feedback when the requested revision materially changes a documented requirement, acceptance criterion, design direction, or completion condition, or when preserving its examples and rationale helps later work.
- [x] Apply the `FEEDBACK` model only when establishing a new Workspace Unit document structure. If a unit already uses the earlier structure or has an established `REQUESTS` flow, keep using that unit's existing conventions. Do not add `FEEDBACK` beside `REQUESTS`, silently rename or migrate its documents, or rewrite its links and history merely to adopt this model.
- [x] Detect and follow the target unit's applicable instructions and existing document conventions before choosing either model. A change to an existing unit's model requires a separate, explicitly authorized migration scope.
- [x] Maintain one `workspace-unit-doc-manager` Skill with two document workflows selected per Workspace Unit: the existing `REQUESTS` workflow for units already using it, and the `FEEDBACK` workflow for units starting the new model. Do not create two Skill versions or mix their document conventions within one unit.

## Illustrative Flow

1. “Add search” starts a new feature REQ in `REQUIREMENTS`.
2. “The result list feels awkward; group it like this example” is feedback associated with that REQ when the example or change needs a durable record.
3. Once the revision is agreed, update the REQ's acceptance criteria and any affected `SPEC` or `GOAL`, retaining the feedback as the reason and source context.

The example does not require a separate feedback file for every comment or a new REQ for a revision within the same feature.

## Implementation and Validation

- [x] Update the Skill entry point and task-relevant references so the two document models, their activation conditions, and the `REQUIREMENTS`–`FEEDBACK`–`GOAL` relationship are unambiguous.
- [x] Verify a new unit scenario where a new feature receives a REQ and a later substantial revision is recorded as feedback and reflected in the authoritative documents.
- [x] Verify an existing unit with `REQUESTS` continues to use its earlier paths, indexes, and links without introducing `FEEDBACK`.
- [x] Verify workflow selection is based on the target unit's instructions and documents rather than a repository-wide switch.
- [x] Validate Skill metadata, direct reference links, and the affected documentation workflow. Record evidence before checking this request complete.

**Validation evidence (2026-11-20):** Reviewed the Skill's new-unit scenario against its `REQUIREMENTS/REQ02.md` → `FEEDBACK/REQ02/<topic>.md` link and the required update to affected REQUIREMENTS, SPEC, Phase plan, and GOAL. Reviewed the established-unit scenario against the preserved `REQUESTS/REQ02/<topic>.md` route and the explicit prohibition on introducing FEEDBACK or changing legacy links. Confirmed selection is unit-local in the entry point and both references. `quick_validate.py skills/workspace-unit-doc-manager`, local Markdown link and LF checks, and `git diff --check` passed. These checks validate Skill guidance; no target Workspace Unit documents were migrated.

## Open Decisions

- The exact path and filename layout for `FEEDBACK` in a new unit is not specified here. The implementer should follow the unit's established documentation root and use the smallest layout that preserves REQ ownership and navigation.
- Handling a small independent correction in a new unit when no existing REQ owns it should follow that unit's established convention; this request does not require inventing a REQ or a feedback hierarchy for it.
