# Layout Guidelines

## 1. Purpose

Define responsive layout strategies based on viewport size, application type, and content requirements.

This document governs visual layout and spatial behavior, not React Router route composition.

## 2. Layout Planning

Before implementing a layout, identify:

- Target environment: Web, mobile browser, or Electron.
- Target devices: Mobile, tablet, desktop, or multiple.
- Application type: Content page, dashboard, or workspace.
- Width strategy: Contained, full-width, or workspace.
- Height strategy: Content-driven, viewport-minimum, or viewport-filling.
- Scrolling behavior: Document scrolling or independent scroll regions.

Respect existing project requirements and layout conventions.

## 3. Existing Project Compatibility

- Inspect existing layouts, components, and styling conventions before making changes.
- Treat established project patterns as the primary reference.
- Match existing width strategies, spacing, breakpoints, and responsive behavior.
- Reuse existing layout components and design tokens whenever practical.
- Ensure new layouts integrate naturally with surrounding UI.
- Preserve existing functionality, accessibility, and visual consistency.
- Avoid introducing competing layout patterns without a clear requirement.
- Do not restructure or replace existing layouts unless explicitly requested.
- Limit changes to the requested scope and necessary integration points.

## 4. Width Strategies

### Contained Layout

Use for content-focused interfaces requiring readable line lengths.

- Center the primary content region.
- Apply a maximum width appropriate to the content.
- Maintain responsive horizontal padding.
- Avoid stretching text across excessively wide screens.

Example:

```tsx
<main className="mx-auto w-full max-w-5xl px-4 lg:px-6">{children}</main>
```

### Full-width Layout

Use for dashboards, tables, and interfaces benefiting from available screen width.

- Allow the main region to expand.
- Maintain appropriate edge padding.
- Constrain individual content sections when necessary.
- Avoid applying a global maximum width without justification.

Example:

```tsx
<main className="w-full min-w-0 flex-1 px-4 lg:px-6">{children}</main>
```

### Workspace Layout

Use for editors, development tools, and multi-panel applications.

- Prefer viewport-filling layouts when appropriate.
- Divide space into independent working regions.
- Allow flexible panel dimensions.
- Define minimum sizes for resizable panels.
- Manage scrolling independently when required.

Example:

```tsx
<div className="flex h-dvh min-h-0 overflow-hidden">
  <aside className="w-64 shrink-0">Sidebar</aside>
  <main className="min-w-0 flex-1 overflow-auto">{children}</main>
</div>
```

All examples are illustrative, not mandatory design values.

## 5. Height Strategies

### Content-driven

- Allow content to determine page height.
- Prefer natural document scrolling.
- Avoid unnecessary fixed heights.

### Viewport-minimum

- Use `min-h-dvh` when the page should fill at least the viewport.
- Allow content to extend beyond the viewport.

### Viewport-filling

- Use `h-dvh` when the interface must occupy the viewport.
- Define internal scrolling regions explicitly.
- Avoid clipping essential content.

## 6. Responsive Design

- Prefer mobile-first responsive utilities.
- Use the project's existing breakpoints.
- Adapt layout structure based on available space.
- Do not assume every interface requires mobile support.
- Preserve desktop-focused behavior when explicitly required.
- Avoid horizontal overflow unless it is intentional.

## 7. Alignment and Distribution

- Use Flexbox for primarily one-dimensional layouts.
- Use Grid for two-dimensional layouts.
- Prefer consistent alignment and spacing.
- Use `min-w-0` and `min-h-0` where flex or grid children must shrink.
- Avoid absolute positioning for ordinary document layout.
- Preserve predictable layout behavior as content changes.

## 8. Scrolling and Overflow

- Prefer document scrolling for content-oriented pages.
- Use independent scrolling for workspace panels when necessary.
- Avoid nested scroll containers without a clear purpose.
- Ensure essential content remains accessible.
- Use sticky or fixed positioning only when justified.

## 9. Environment Considerations

### Web

- Account for varying viewport sizes.
- Consider mobile browser viewport behavior.
- Preserve accessible document scrolling.

### Electron

- Consider resizable application windows.
- Support minimum window dimensions when required.
- Prefer adaptive workspace layouts for desktop tools.
- Avoid assuming a fixed screen resolution.

## 10. Cross-Skill Boundaries

- `react-router` owns route-layout composition and `Outlet` placement.
- `react-ui-style` owns visual layout, sizing, alignment, and responsiveness.
- Apply both skills when a task requires routing structure and visual layout implementation.
- Avoid duplicating routing architecture rules here.

## 11. Restrictions

- Do not impose one width strategy on every application.
- Do not introduce unnecessary fixed dimensions.
- Do not change existing responsive behavior without authorization.
- Do not add unsupported mobile layouts solely by assumption.
- Preserve established project design conventions.
