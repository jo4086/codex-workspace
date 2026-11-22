# Editing Interactions

## Purpose

Define predictable behavior for inline editors and forms. Preserve project conventions, data integrity, accessibility, and layout stability.

## Existing Project Compatibility

- Reuse established form components, validation, submission utilities, and state-management patterns.
- Preserve existing field names, data contracts, permissions, and save semantics.
- Prefer native controls and installed dependencies over custom interaction systems.
- Keep visual styling aligned with surrounding UI and the project design system.

## Entering and Leaving Edit Mode

- Make the edit action discoverable without replacing clear labels with unexplained icons.
- Initialize the draft from the latest committed value when editing begins.
- Move focus to the first relevant field or the edited value when a mode change would otherwise leave focus behind.
- Preserve the editor while validation or submission errors require user action.
- On cancel, discard only the current draft and restore the committed value.
- Ask before discarding meaningful unsaved changes when navigation, closing, or another action could cause data loss.
- Return focus to the control that opened the editor when editing ends, when that control still exists.

## Input and Validation

- Associate every control with an accessible label and any instructions or error text.
- Preserve user input after validation or save failures.
- Validate at the project’s established time; avoid reporting errors before users can reasonably correct input.
- Show field errors next to their controls and provide a summary when several errors or a long form make discovery difficult.
- Set invalid state programmatically, not through color or iconography alone.
- Distinguish optional, required, read-only, and disabled fields semantically.
- Do not silently trim, reformat, or coerce meaningful input unless the product contract requires it.

## Save and Cancel

- Use explicit save and cancel actions when edits are consequential, multi-field, or not safely reversible.
- Use autosave only when the project already supports it or the requirement defines recovery and failure behavior.
- Disable or otherwise guard duplicate submissions while a save is pending.
- Keep the last committed content visible until replacement data is ready when practical.
- Update the committed view only after success, unless the project has a reliable optimistic-update and rollback pattern.
- Make retry safe after failure; do not create duplicate records or repeat destructive effects.
- Do not disable cancel solely because a save is pending unless interruption would corrupt data.

## Keyboard and Focus

- Preserve normal Tab and Shift+Tab order.
- Use Enter to submit only where form semantics and multiline input behavior remain clear.
- Do not use Enter to save from text areas or rich-text controls unless the established convention provides another way to insert a line break.
- Use Escape to cancel only when loss is limited to the current draft and the behavior is communicated or conventional.
- Keep visible focus indicators on all interactive elements.
- Do not trap focus except inside a true modal interaction; restore focus when the modal closes.

## State and Feedback

- Represent idle, modified, validating, saving, success, and error states when the workflow needs them.
- Keep controls and status text stable as states change to avoid unexpected layout shifts.
- Announce save results and validation failures when they are not otherwise exposed to assistive technologies.
- Keep actionable error messages until resolved or dismissed; do not hide them on a short timer.
- Follow [feedback guidelines](feedback.md) for loading, errors, confirmations, and announcements.
- Follow [iconography guidelines](../foundations/iconography.md) when editing actions use icons.

## Restrictions

- Do not overwrite newer server data without the project’s conflict-handling policy.
- Do not reset unrelated fields after a failed submission.
- Do not rely on placeholders as labels.
- Do not add form, validation, or state dependencies when existing code can support the behavior.
- Do not change business rules or persistence behavior as a styling convenience.
