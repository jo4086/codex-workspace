# REQUESTS01 — React UI Density and Layout

- **Requested:** 2026-11-08
- **Status:** Implemented and validated
- **Target:** Existing [`react-ui-style` Skill](../../../skills/react-ui-style/SKILL.md)

## Purpose

Add visual layout guidance to the existing React UI Style Skill. Apply these rules when creating or revising React pages and composite controls, while respecting explicit product requirements and established project design systems.

## Requirements

- [x] Size dropdowns, text inputs, and similar controls to their content and task by default. Avoid stretching them across the available width without a reason. Allow full-width controls when the interaction benefits from it, such as a page-wide search field.
- [x] On dashboards, edit pages, and information-dense pages, use available space efficiently. Avoid unnecessary card wrappers; use spacing and dividers to separate regions when they make the content clearer.
- [x] Omit page headings when they do not help the page, or keep them visually small when a heading is useful. Do not make a visible page heading a mandatory part of the base layout. Let each page use the otherwise empty layout area according to its own content.
- [x] Give icons appropriate padding or space from nearby edges in each context, including icon-only controls and icons inside inputs or other components.
- [x] In composite components containing different kinds of controls or content, align internal dividers and tune the heights and alignment of the child components so the whole component remains visually stable.

## Implementation Handoff

- Add the guidance to the relevant existing layout, typography, iconography, and interaction references, without duplicating a rule across them.
- Keep sizing and spacing responsive to context; the examples above do not prescribe fixed pixel values or prohibit justified full-width controls or cards.
- Check representative dense pages, page shells, form controls, and composite controls at relevant viewport sizes. Confirm useful space, readable separation, icon clearance, and stable alignment.

## Validation Evidence

- Added the rules to the existing layout, typography, and iconography references without fixed pixel values or duplicate guidance.
- Reviewed the guidance against dense dashboard and edit-page layouts, a full-width search exception, narrow-viewport controls, page shells, icon-only buttons, input icons, and mixed-control composites. These are documentation scenarios; no application UI was changed or rendered.
- `quick_validate.py skills/react-ui-style`, Markdown link and LF checks, and `git diff --check` passed on 2026-11-08.
