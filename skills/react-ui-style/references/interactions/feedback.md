# Feedback and Confirmation Interactions

## Purpose

Define timely, accessible feedback for loading, success, empty, warning, error, and confirmation states without destabilizing the interface.

## Existing Project Compatibility

- Reuse established status components, notification systems, error boundaries, and asynchronous state patterns.
- Match the project’s terminology, severity levels, placement, and dismissal behavior.
- Prefer semantic HTML, platform behavior, and installed dependencies over custom feedback systems.
- Keep feedback proportional to the action and preserve surrounding layout conventions.

## Choosing Feedback

- Place feedback near the action or content it describes when users can resolve it there.
- Use persistent inline feedback for validation, blocking errors, and states requiring action.
- Use transient notifications for non-blocking outcomes that do not require immediate action.
- Use a page or region state when loading, errors, or empty results replace that region’s content.
- Reserve modal confirmations for consequential, destructive, costly, or difficult-to-reverse actions.
- Do not show duplicate messages for the same outcome in multiple channels unless each serves a distinct need.

## Loading and Progress

- Show loading feedback when a delay is perceptible; avoid flashing indicators for operations that complete immediately.
- Keep existing usable content visible during background refreshes when stale content is safe.
- Use determinate progress only when progress can be measured accurately; otherwise communicate ongoing activity without false precision.
- Scope busy state to the affected control or region and prevent duplicate submissions.
- Keep labels and control dimensions stable when adding spinners or progress text.
- Do not use a skeleton that misrepresents the expected content structure.
- Expose busy state programmatically without repeatedly announcing every progress update.

## Success, Empty, and No-Result States

- Confirm success when completion is not otherwise obvious or when users need assurance that data persisted.
- Keep success messages concise and identify the completed action.
- Do not interrupt the workflow with success dialogs for routine actions.
- Distinguish an expected empty state from no search results, unavailable data, and load failure.
- Give an empty state a relevant next action only when users can change the outcome.
- Preserve stable content regions when transitioning among empty, loaded, and refreshed states.

## Errors and Recovery

- State what failed, what remains safe, and what the user can do next.
- Preserve user input and usable data after recoverable failures.
- Provide retry only when the operation is safe to repeat and retry can reasonably succeed.
- Place field-specific errors with their fields; use a summary when users may not find all invalid controls.
- Keep actionable errors visible until resolved, replaced, or explicitly dismissed.
- Do not expose stack traces, internal identifiers, secrets, or raw service responses to users.
- Do not rely on color or icons alone to communicate severity.
- Provide a safe fallback for unexpected render failures according to the project’s error-boundary conventions.

## Confirmation and Destructive Actions

- Prefer undo over confirmation when the action is reliably reversible and recovery remains available long enough.
- Confirm irreversible, destructive, or broadly consequential actions before execution.
- Name the affected item and consequence in confirmation text.
- Label the confirm action with the specific outcome rather than a generic “OK.”
- Make cancel easy to find, preserve normal keyboard behavior, and avoid preselecting the destructive action.
- Require typed confirmation only for exceptional high-impact actions where the added friction is justified.
- After completion, report partial success separately from complete success or failure.

## Accessibility and Focus

- Use appropriate status or alert semantics based on urgency; do not make routine updates interruptive.
- Announce asynchronous outcomes once, using concise text.
- Move focus only when users must act immediately or when a modal confirmation opens.
- On modal close, return focus to the invoking control when it still exists.
- For submitted forms with errors, focus an error summary or the first invalid field according to project convention.
- Keep visible focus indicators and ensure dismiss controls have accessible names.
- Ensure messages remain understandable at zoom and with text wrapping.

## Timing and Dismissal

- Do not auto-dismiss errors, warnings, or messages that require action.
- Allow enough time to perceive transient messages and pause dismissal while users interact with them when supported.
- Keep essential information available elsewhere if a transient notification disappears.
- Remove stale feedback when context changes, but do not clear unresolved errors because focus moved.
- Respect reduced-motion preferences for notification and progress animations.

## Restrictions

- Do not block the entire interface for work limited to one control or region.
- Do not use notifications as the only location for field validation.
- Do not add a notification, modal, or progress dependency when established components can handle the behavior.
- Do not claim success before persistence is confirmed unless the project has explicit optimistic-update and rollback behavior.
- Follow [iconography guidelines](../foundations/iconography.md) when feedback includes status icons.
