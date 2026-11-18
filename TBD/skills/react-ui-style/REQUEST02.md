# REQUEST02 — Scrollbar Style Variants

- **Requested:** 2026-11-18
- **Status:** Implemented and validated
- **Target:** Existing [`react-ui-style` Skill](../../../skills/react-ui-style/SKILL.md)

## Purpose

Add a focused reference for scrollbar appearance and visibility in React UI work. Keep the default compact and make visibility variants available when product requirements call for them.

## Confirmed Requirements

- [x] Use a thin scrollbar as the default style when the project has no conflicting established scrollbar design.
- [x] Support a requested activity variant whose thumb and track are transparent while idle. Reveal the thumb while the user scrolls or hovers over the scrollbar region; keep the track transparent by default.
- [x] When scrolling has stopped and the pointer is no longer over the scrollbar region, return the thumb to transparent after a short idle period.
- [x] When a UI request raises track visibility without settling it, ask whether the track should stay transparent or appear alongside the thumb. If the user chooses to reveal it, keep the track partially transparent rather than fully opaque.
- [x] Support a separately requested variant that remains visually transparent, including during scroll and hover, while its content can still scroll.
- [x] Select the visibility behavior from the UI's requirements rather than applying the same variant to every scroll region.

## Proposed Implementation Guidance

- Place the focused appearance and visibility guidance in one scrollbar reference, linked from the relevant `react-ui-style` reference index. Keep the existing layout reference responsible for deciding whether an area should scroll independently.
- Explain the visual states and interaction behavior without making one CSS technique, timing value, or dependency mandatory for every project.
- Ensure the transparent scrollbar region can still respond to pointer hover when the activity variant is used.
- Respect existing design tokens and component conventions. Check that the chosen variant preserves scrolling through the relevant input methods and does not cause distracting layout shifts.
- Treat a fully transparent scrollbar as an explicit product choice because it removes a visible scrolling cue. Check that users can still discover and operate the scroll region.

## Open Decisions

- **Product-specific values:** Choose the exact scrollbar thickness, idle delay, and visible thumb and optional track opacity for the target design. This request fixes the states and triggers, not those values.

## Completion Evidence

- [x] The foundations index routes scrollbar styling to [scrollbars.md](../../../skills/react-ui-style/references/foundations/scrollbars.md); `layout.md` still owns the selection of document or independent scroll regions.
- [x] Reviewed the thin default, activity reveal, optional translucent track, and always-transparent cases against document and panel scroll regions, including keyboard, wheel/trackpad, pointer hover and drag, and touch where available. This is a guidance review; no application UI was changed or rendered.
- [x] `quick_validate.py skills/react-ui-style`, four-Skill reference/link/LF checks, and `git diff --check` passed on 2026-11-18. Native scrollbar appearance remains target-browser and operating-system dependent, so the reference requires target-platform verification.

Implementation owner: `my-skill-creator`. Keep this request open until implementation and validation are complete.
