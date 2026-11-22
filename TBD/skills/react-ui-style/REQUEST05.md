# REQUEST05 — Reduce UI guidance to project conventions

- Requested on 2026-11-23
- Implemented for the [react-ui-style Skill](../../../skills/react-ui-style/SKILL.md); benchmark comparison pending
- Implementation owner: `my-skill-creator`

## Reason for the change

In the user's benchmark, the agent chose a working native control with the Skill disabled. With the Skill enabled, it built a custom control and missed keyboard interactions. The comparison warrants reviewing the instructions. Which passages influenced that run remains unknown.

This request replaces [REQUEST04](./REQUEST04.md), the earlier proposal for a shared control-selection guide. The user wants a smaller Skill that preserves project conventions and leaves ordinary HTML and React decisions to the agent.

## Required outcome

- [x] Remove component recipes, implementation checklists, and generic development advice where they add no project-specific decision. Consolidate repeated instructions at their owning location. Leave element selection and routine interaction design to the task, the project, and the agent's judgment.
- [x] Keep the entry point sufficient for ordinary UI work. Route to a short reference only when a requested feature depends on a convention the agent could not infer from the project. Remove unnecessary reading steps and repair links affected by consolidation.
- [x] Retain explicit visual preferences and observable behaviors from earlier accepted requests. Keep each at its narrowest applicable scope. Avoid adding a role-to-element table, a universal keyboard matrix, or an exception for the benchmark.

## Proposed cuts from the review

| Location | Why review it | Suggested change |
| --- | --- | --- |
| [Navigation](../../../skills/react-ui-style/references/interactions/navigation.md) | The disclosure section prescribes a button even for ordinary content expansion. | Remove the blanket implementation choice. Keep any focus or state requirement that serves an established interaction. |
| [Iconography](../../../skills/react-ui-style/references/foundations/iconography.md) | The icon map and component recipes repeat dropdown, shortcut, and comparison indicators. The dropdown recipe can make an optional icon look like a field requirement. | Drop duplicate recipes. Retain verified visual conventions for tasks that actually need an icon. |
| [Entry point](../../../skills/react-ui-style/SKILL.md), [reference index](../../../skills/react-ui-style/references/README.md), and [editing](../../../skills/react-ui-style/references/interactions/editing.md) | Component reuse and reference navigation recur across documents. The editing reference already favors native controls. | Collapse repeated defaults and routing steps. Check what remains before adding any shared principle. |
| [Layout](../../../skills/react-ui-style/references/foundations/layout.md) and [density request](./REQUESTS01.md) | Generic Flexbox and Grid instructions sit beside explicit preferences about field widths, page density, and composite alignment. | Remove basic layout instruction. Preserve the requested visual decisions, including when a field may use full width. |
| [Scrollbar variants](./REQUEST02.md) and [image gallery](./REQUEST03.md) | These requests establish behavior for particular tasks. Their examples and implementation detail can consume context in other UI work. | Retain the requested outcomes in narrowly routed references. Trim illustrative values, optional action catalogs, and repeated mechanics where the original request already records them. |

## Evidence for completion

- [x] Compare the documents and amount of text an ordinary field task needs before and after the change. Check that a task involving an explicit preference can still find it.
- [ ] Compare the same single-choice task with the Skill disabled, with the current version, and with the reduced version, keeping the model, prompt, and project fixed. Record the references read when observable, the rendered control, and whether a user can reach, operate, and leave it by keyboard from the surrounding page. A direct test call to `.focus()` skips the entry path.
- [ ] Check an established working interaction and a requested visual convention for regressions. Record observed results separately from untested effects on model performance. Run the repository's Skill and reference checks before closing the request.

## Validation evidence

- The Skill and routed Markdown decreased from 1,129 to 117 lines. An ordinary field task stops at `SKILL.md`; page density and field width remain in `layout.md`.
- Link, line-ending, structural, and diff checks passed. Interaction regression and benchmark comparison remain unverified because no application fixture or benchmark execution command is available in this repository.
