# Session Workflows

## Selective Discovery

Load only context needed for the requested operation:

1. Locate the project and candidate applications or packages, then read applicable root-to-target `AGENTS.md` files.
2. Identify whether the project or a particular unit owns the work. Use its established documentation root, or its own `docs/` root when starting documentation; never substitute a project-level document for an app or package's lifecycle.
3. Identify that owner's established `REQUESTS` or new `FEEDBACK` model before selecting a REQ. Do not infer its document model from another owner.
4. Read the owner's requirement index and the selected requirement document when they exist. For first documentation, choose the owning `docs/` root and document type before creating them.
5. Follow direct links according to task type:
   - requirements work: source FEEDBACK or REQUESTS under the selected model and affected acceptance criteria;
   - design or implementation work: relevant SPEC and current Phase plan;
   - execution tracking: current Phase and GOAL;
   - verification: current Phase, GOAL, REVIEW, and linked evidence;
   - architecture work: current `ARCHITECTURE.md` plus the proposal source.
6. Read `ROADMAP.md` for implementation work or whenever Phase status or the current Phase matters. For implementation, also read the applicable GOAL if it exists.
7. Expand to adjacent REQs, other owners, or legacy documents only when a direct dependency, conflict, or missing fact requires them.

Do not load every category, every REQ, or all historical Phase records by default.

## Classify New Work and Revisions

1. Identify the project's or unit's documentation root and document model from its instructions and existing documents. Start new documentation in that owner's `docs/`; never switch an established `REQUESTS` unit to `FEEDBACK` as a side effect of handling work.
2. Use a new REQ for a separate new feature with durable scope or acceptance criteria, multiple documents or phases, or a need for stable traceability, even when it is requested during work on another feature.
3. Treat a change of direction, an inadequate or awkward result, or a clarifying example as a revision of the owning REQ when it changes that feature. In a new unit, preserve meaningful revisions in FEEDBACK; in an established unit, follow its existing REQUESTS convention. Do not record every conversational iteration.
4. When a revision is agreed, update the authoritative REQUIREMENTS and affected SPEC, Phase plan, or GOAL. Keep source context linked where useful; do not leave the change only in its feedback or request record.
5. Keep a small independent correction with no owning REQ in the unit's established flow when a REQ would add no useful lifecycle. Do not invent a FEEDBACK hierarchy for it.
6. Preserve undecided product or technical choices as open choices. Do not write them as confirmed requirements.
7. Confirm the owning project or unit, existing naming conventions, and used or retired IDs before assigning an ID. Keep cross-owner dependencies linked to their owners.
8. When a new REQ is warranted, create `REQUIREMENTS/<REQ-ID>.md` and update its index. Create other REQ-owned documents only when their trigger in [REQ Document Lifecycle](./document-lifecycle.md) applies.

## Plan Before Implementation

1. Inspect the request, ownership, and affected context. Apply this workflow to implementation work from chat or [user-written requests](./user-request-intake.md), including small corrections. Handle questions, read-only investigations, and planning-only requests directly.
2. Check the owner's `ROADMAP.md` for scope and sequence and the applicable GOAL for deliverables and verifiable completion conditions. Reuse existing entries when they cover the requested work. If either record is missing or the scope changes, write or update the planning documents first, before editing implementation files. A chat summary or internal plan leaves the written planning prerequisite unmet.
3. For a small correction without a REQ, link a short ROADMAP entry to a brief GOAL in the owner's existing layout. If there is no GOAL convention, use `GOAL/<topic>.md` under the owner's documentation root. Use the owner's applicable Phase and GOAL paths for REQ-owned work. Add a new REQ, detailed Phase plan, or SPEC only when its lifecycle trigger applies. Start new completion conditions unchecked.
4. Once the records are ready, proceed with clearly scoped small work and its verification in the same task. For other chat requests, proceed according to the user's authorized scope. For a broad submission under `docs/user/`, finish the intake with planning documents and wait for the user's direction to implement.

## Build a Phase Trace

For a representative `REQ02-Phase01`:

1. Link `REQUIREMENTS/REQ02.md` to source `FEEDBACK/REQ02/<topic>.md` in the new model or `REQUESTS/REQ02/<topic>.md` in the established model, only when that record exists.
2. Link `SPEC/REQ02/<feature-area>.md` to the acceptance criteria it details.
3. Add `REQ02-Phase01` and its current status to `ROADMAP.md`; link a detailed plan only if one is needed.
4. If detailed planning is needed, link `ROADMAP/REQ02/Phase01.md` to the requirement, target SPEC, and ROADMAP entry.
5. Link `GOAL/REQ02/Phase01.md` to the Phase entry or plan and any relevant SPEC. Prepare its completion conditions before implementation and start them unchecked.
6. When verification results exist, link `REVIEW/REQ02/Phase01.md` to the GOAL when present and to evidence; check only verified items.
7. Confirm every existing direct link resolves and all documents use the same REQ and Phase IDs.

## Advance or Complete a Phase

1. Compare work with acceptance criteria and the applicable GOAL conditions.
2. Record commands, artifacts, observations, or other evidence in REVIEW or link them directly.
3. Check only conditions proven by that evidence. Keep failures and unknowns unchecked.
4. Record blockers and remaining work without converting them into completion claims.
5. Decide Phase completion from the documented criteria and evidence.
6. Update the Phase status only in `ROADMAP.md`.
7. Update `ARCHITECTURE.md` only when verified implementation changed the current structure.

## Existing Instructions and Conflicts

Read every applicable `AGENTS.md` from repository root through the target documentation directory before applying this Skill.

- Follow higher-priority instructions and more specific target instructions when they are compatible with the request.
- If target instructions require an established legacy discovery order, preserve that order and integrate REQ links where compatible.
- If target instructions conflict with the requested REQ structure, status ownership, evidence rules, or edits, follow an explicit higher-priority user instruction where it resolves the conflict. Otherwise stop before changing the target, report the exact conflict, and ask for a decision. Changing target `AGENTS.md` itself still needs explicit authorization.
- Do not edit `AGENTS.md`, migrate legacy documents, or broaden target-project permissions unless the user explicitly authorizes that action.

## Final Checks

- Confirm document-type/REQ folder placement and IDs stable within the owning project or unit.
- Confirm the first and later durable documents of a newly documented project, application, or package use that owner's `docs/` root; preserve established roots without implicit migration.
- Confirm full REQ-local Phase IDs where identity or status appears.
- Confirm `ROADMAP.md` remains the only Phase status source.
- Confirm ROADMAP and GOAL covered the requested scope before any implementation edits. For broad user-written submissions at intake, confirm the round remains pending and only documentation was prepared.
- Confirm optional documents exist only for their actual trigger.
- Confirm the selected document model matches the unit's instructions and existing documents; do not mix FEEDBACK and REQUESTS or migrate legacy paths without authorization.
- Confirm GOAL and REVIEW checked items have nearby evidence.
- Confirm current architecture and proposals remain distinct.
- Confirm category indexes and direct relative links resolve.
- Confirm legacy paths, anchors, IDs, and evidence remain preserved unless migration was explicitly authorized.
- Report unresolved choices, conflicts, permissions, and unverified conditions without guessing.
