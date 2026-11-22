# REQUEST04 — Semantic HTML control selection

- Requested on 2026-11-23
- Status: Cancelled. Superseded by [REQUEST05](./REQUEST05.md).
- Implementation owner: `my-skill-creator`

## Findings and proposed edit locations

| Document | Current guidance | Proposed change |
| --- | --- | --- |
| [Skill entry point](../../../skills/react-ui-style/SKILL.md) | The workflow covers component reuse and accessibility checks. It gives no criterion for choosing a control before styling it. | At the component selection step, state the native-first, role-based principle and point to the Interactions index for details. |
| [Interactions index](../../../skills/react-ui-style/references/interactions/README.md) | Its shared principles call for keyboard accessibility. Its routes cover individual interaction patterns. | Use the existing general principles section for the compact selection guide and a keyboard verification procedure. Link to the existing pattern owners for details. |
| [Navigation and disclosure](../../../skills/react-ui-style/references/interactions/navigation.md) | It distinguishes destinations from actions, preserves native keyboard behavior, and limits arrow keys to appropriate widgets. Its disclosure rule prescribes a button for all expand/collapse controls. | Retain the destination and action rules. Revise the disclosure rule to cover native disclosure and the existing button-based alternative. |
| [Editing interactions](../../../skills/react-ui-style/references/interactions/editing.md) | It already covers native form controls, accessible labels, tab order, visible focus, and focus restoration when editing ends. | Refer here for editing-specific behavior. Keep the general selection and verification criteria discoverable outside form work. |

## Implementation requirements

- [c] Choose the element by the intended operation before applying visual styles. Prefer `<select>` for choosing one value and a suitable multi-selection control such as labeled `<input type="checkbox">` controls for independently selectable values. A shared visual treatment is insufficient reason to substitute a control with a different meaning.
- [c] Use `<button>` to execute a command and `<a href="…">` for a destination, including a router link that renders an anchor. Prefer `<details>` with `<summary>` for ordinary content disclosure. Keep button-based disclosure available when required, with its expanded state and controlled content exposed as described in the navigation reference.
- [c] Prefer native keyboard, focus, and accessibility behavior. When design or functionality calls for a custom control, implement the chosen pattern's keyboard interactions, focus management, accessible name, role, and relevant states. Evaluate shared components by the behavior and semantics they render.
- [c] Verify that users can reach, operate, and leave the control using only the keyboard. Start from a preceding focusable element or the page entry point and follow the normal Tab path. For a selection pattern, check arrow navigation, Enter or Space selection, Escape dismissal, and focus movement or restoration where each applies. Check the resulting value and focus location. A test that starts by calling `.focus()` on the target can exercise key handling but leaves keyboard reachability unverified.
- [c] Keep the shared guide short and independent of project examples. Preserve the existing reference routes so a control-selection task can use the index directly and consult only the relevant pattern details.

## Completion evidence

Record the edited sections and verify the links between them. Walk through a single-value field, independent choices, a command, a destination, and a disclosure from the Skill entry point. Check that each leads to a suitable native default and that a custom selection widget leads to pattern-specific keyboard and focus checks. Confirm the disclosure guidance is consistent across documents. Close the TBD entry after Skill validation.
