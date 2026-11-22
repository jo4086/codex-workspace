# Editing

Apply this reference when editing behavior can affect saved data.

- Reuse the project's field, validation, submission, and state-management patterns.
- Preserve input after a recoverable validation or save failure.
- Provide an explicit save and cancel path when edits are consequential, multi-field, or not safely reversible.
- Guard duplicate submission while a save is pending and avoid repeating destructive effects on retry.
- Ask before discarding meaningful unsaved changes when the project has no reliable recovery path.
- Return focus to the control that opened editing when the edit ends and that control remains available.
