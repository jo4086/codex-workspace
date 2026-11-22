# Navigation and Disclosure Interactions

## Purpose

Define predictable behavior for links, transitions, menus, tabs, and expand/collapse controls. Route architecture remains outside this document.

## Existing Project Compatibility

- Reuse the project’s router, link components, disclosure primitives, and navigation state conventions.
- Preserve route structure, URL contracts, history behavior, and authorization rules.
- Prefer semantic HTML and installed components over custom event handling or new dependencies.
- Keep controls, labels, motion, and responsive behavior consistent with surrounding UI.

## Destinations and Actions

- Use links for destinations and buttons for actions that change local state or trigger work.
- Preserve expected link behavior, including opening in a new tab, copying the destination, and browser history.
- Give controls names that describe their destination or action without depending on nearby visual context.
- Mark external destinations or new browsing contexts when the distinction matters.
- Do not attach navigation only to a container click when a semantic link can identify the destination.
- Keep disabled actions out of link semantics; explain unavailable navigation when users need the reason.

## Current and Pending State

- Identify the current page or item programmatically as well as visually.
- Distinguish selected local state from the current route when they represent different concepts.
- Prevent duplicate transitions while navigation is pending without blocking unrelated navigation.
- Preserve current content during short transitions when possible; replace it with a loading state only when necessary.
- Keep navigation dimensions stable as labels, icons, badges, and pending indicators change.
- Preserve user context such as scroll, selection, or filters according to existing product behavior.
- Put shareable or restorable navigation state in the URL when the project convention requires it.

## Keyboard and Focus

- Preserve native keyboard behavior for links, buttons, and form controls.
- Keep logical DOM and tab order aligned with the visual order.
- Maintain visible focus indicators and do not move focus on ordinary link activation before the destination renders.
- After a client-side route change, follow the project’s focus-management convention; ensure the new view has a clear programmatic title or heading target.
- Support arrow-key navigation only for widgets whose established accessibility pattern requires it, such as tabs or menus.
- Do not add custom keyboard shortcuts that conflict with browser or assistive-technology commands.

## Disclosure, Menus, and Tabs

- Use a button for expand/collapse controls and expose expanded state and the controlled region programmatically.
- Keep collapsed content out of keyboard navigation and the accessibility tree when it is unavailable visually.
- Preserve disclosure state only when persistence improves the workflow and matches project behavior.
- Use menu semantics only for application-style command menus; ordinary groups of links remain navigation lists.
- Implement tabs as a coherent tab interface with associated panels, selection state, and the expected keyboard model.
- Close transient menus on Escape and return focus to their trigger.
- Do not hide essential destinations behind hover-only interactions.

## Motion and Stability

- Use motion only to clarify spatial or state changes.
- Respect reduced-motion preferences and keep interaction completion independent of animation.
- Avoid animated height or position changes that obscure focus, cause content jumps, or delay input.
- Keep trigger placement stable when regions expand, collapse, or load.
- Follow [iconography guidelines](../foundations/iconography.md) for directional and external-link icons.
- Follow [feedback guidelines](feedback.md) for transition loading and failures.

## Failure Handling

- Keep users on the current usable view when a destination cannot load, when practical.
- Present a clear retry or recovery action for failed transitions.
- Do not discard unsaved edits during navigation without the editing workflow’s protection.
- Preserve safe browser Back and Forward behavior after failures or redirects.

## Boundaries

- Route configuration, router providers, redirects, and route-layout composition belong to the routing solution or routing skill.
- This document governs presentation and interaction behavior around navigation controls.
- Do not replace router behavior with local state, manual history mutation, or full-page reloads without a requirement.
