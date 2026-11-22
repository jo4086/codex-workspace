# Session Workflows

## Selective Discovery

Load only context needed for the requested operation:

1. Locate candidate workspace units and read applicable root-to-target `AGENTS.md` files.
2. Identify the owning unit before selecting a REQ. Do not infer ownership from a similar feature name in another unit.
3. Read the unit's requirement index and the selected requirement document.
4. Follow direct links according to task type:
   - requirements work: source REQUESTS and affected acceptance criteria;
   - design or implementation work: relevant SPEC and current Phase plan;
   - execution tracking: current Phase and GOAL;
   - verification: current Phase, GOAL, REVIEW, and linked evidence;
   - architecture work: current `ARCHITECTURE.md` plus the proposal source.
5. Read `ROADMAP.md` whenever Phase status or the current Phase matters.
6. Expand to adjacent REQs or legacy documents only when a direct dependency, conflict, or missing fact requires them.

Do not load every category, every REQ, or all historical Phase records by default.

## Classify New Work

1. Use a new REQ when work has durable scope or acceptance criteria, spans multiple documents or phases, or needs stable traceability.
2. Keep a small independent correction in the established REQUESTS flow when a REQ would add no useful lifecycle.
3. Preserve undecided product or technical choices as open choices. Do not write them as confirmed requirements.
4. Confirm the owning unit, existing naming conventions, and used or retired IDs before assigning an ID.
5. Create `REQUIREMENTS/<REQ-ID>.md` and update its index. Create other REQ-owned documents only when their trigger in [REQ Document Lifecycle](./document-lifecycle.md) applies.

## Build a Phase Trace

For a representative `REQ02-Phase01`:

1. Link `REQUIREMENTS/REQ02.md` to source `REQUESTS/REQ02/<topic>.md` only when that record exists.
2. Link `SPEC/REQ02/<feature-area>.md` to the acceptance criteria it details.
3. Add `REQ02-Phase01` and its current status to `ROADMAP.md`; link a detailed plan only if one is needed.
4. If detailed planning is needed, link `ROADMAP/REQ02/Phase01.md` to the requirement, target SPEC, and ROADMAP entry.
5. If separate completion criteria help, link `GOAL/REQ02/Phase01.md` to the Phase entry or plan and relevant SPEC; start conditions unchecked.
6. When verification results exist, link `REVIEW/REQ02/Phase01.md` to the GOAL when present and to evidence; check only verified items.
7. Confirm every existing direct link resolves and all documents use the same REQ and Phase IDs.

## Advance or Complete a Phase

1. Compare work with acceptance criteria and any separate GOAL conditions.
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

- Confirm document-type/REQ folder placement and unit-local stable IDs.
- Confirm full REQ-local Phase IDs where identity or status appears.
- Confirm `ROADMAP.md` remains the only Phase status source.
- Confirm optional documents exist only for their actual trigger.
- Confirm GOAL and REVIEW checked items have nearby evidence.
- Confirm current architecture and proposals remain distinct.
- Confirm category indexes and direct relative links resolve.
- Confirm legacy paths, anchors, IDs, and evidence remain preserved unless migration was explicitly authorized.
- Report unresolved choices, conflicts, permissions, and unverified conditions without guessing.
