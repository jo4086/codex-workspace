# REQUEST04 — Resolve conflicting TBD requests before Skill implementation

- Requested on 2026-11-23
- Status: Implemented and validated
- Target and implementation owner: [my-skill-creator](../../../skills/my-skill-creator/SKILL.md)

## Implementation requirements

- [x] Before implementing a TBD request, consult the component index and compare requests that govern the same behavior. Treat compatible additions as cumulative. A conflict exists when fulfilling one requirement would violate another in the same circumstances.
- [x] When the user's wording clearly withdraws an earlier request or adopts a new structure to replace it, record the cancellation and proceed with the chosen direction without asking again. A later date, higher request number, or exploratory suggestion alone leaves the decision open.
- [x] If intent is unclear, identify the conflicting request IDs, explain the practical difference, and ask which behavior the user wants. Keep both statuses intact and defer the affected implementation until the user answers. Apply the answer even when the user keeps the earlier request.
- [x] Preserve request files, IDs, and historical validation evidence. For a fully withdrawn request, record a dated `- [c]` link under `### Cancelled` in the component README with the user's reason and the surviving request link when applicable. For a partial conflict, mark only the withdrawn item and keep the remaining requirements active.
- [x] Use the surviving requirements for implementation and validation. Exclude cancelled work when checking for outstanding requests or updating the parent Skill index.

## Acceptance examples

- [x] Walk through the [react-ui-style cancellation](../react-ui-style/README.md#cancelled). The explicit replacement preserves REQUEST04 as cancelled and leaves REQUEST05's benchmark status intact.
- [x] Walk through two incompatible open requests with no stated preference. Verify that the same question can lead to either request being cancelled, depending on the answer, and that independent requirements survive both outcomes.

## Validation evidence

- Walkthrough of the UI index confirmed that REQUEST04 records cancellation while REQUEST05 retains its pending benchmark.
- For two open requests requiring opposite defaults, both remain pending until the user chooses. Choosing the earlier default withdraws the later one. Choosing the later default withdraws the earlier one. A separate compatible requirement in either request stays active.
- The Skill validator passed. Both implementation workflows reach the same conflict-resolution section.
