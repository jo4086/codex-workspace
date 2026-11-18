# Iconography Guidelines

## 1. Principles

- Select icons based on functional meaning, not appearance alone.
- Use consistent icons for equivalent actions and states.
- Respect existing project design systems and conventions.
- Avoid unnecessary dependencies, decoration, and icon variations.
- Preserve functionality, accessibility, and layout stability.

## 2. Icon Library

**Preferred:** `lucide-react`

Priority:

1. Existing shared icon components.
2. Existing installed icon library.
3. `lucide-react` when no icon library is established.
4. Custom SVG only when suitable icons are unavailable.

Rules:

- Do not mix icon libraries unnecessarily.
- Do not introduce dependencies without a clear need.
- Prefer SVG icons over Unicode symbols or emoji.
- Verify icon availability before use.

## 3. Semantic Icon Mapping

### Navigation and Direction

| Icon             | Usage                                                |
| ---------------- | ---------------------------------------------------- |
| `ChevronRight`   | Workflow steps, breadcrumbs, hierarchical navigation |
| `ChevronLeft`    | Previous item, hierarchical backward navigation      |
| `ArrowRight`     | Data flow, transformation, version comparison        |
| `ArrowLeft`      | Back navigation                                      |
| `ArrowUpRight`   | Internal shortcuts, quick navigation                 |
| `ExternalLink`   | External destinations, new tabs/windows              |
| `ArrowLeftRight` | Swap values or comparison targets                    |
| `ChevronDown`    | Select, dropdown, expand                             |
| `ChevronUp`      | Collapse                                             |
| `ChevronsUpDown` | Bidirectional selection indicators                   |

**Selection rules:**

- Chevron: hierarchy, navigation, or discrete progression.
- Arrow: direction, movement, transformation, or data relationships.
- `ArrowUpRight`: internal feature shortcuts.
- `ExternalLink`: external destinations or new browsing contexts.
- Use `ChevronRight` for conventional list-to-detail navigation.
- Use `ArrowRight` for `Base → Target` comparisons.

### Actions

| Icon                  | Usage                  |
| --------------------- | ---------------------- |
| `Pencil`              | Edit                   |
| `Plus`                | Create or add          |
| `Trash2`              | Delete                 |
| `Save`                | Save changes           |
| `Check`               | Confirm or select      |
| `X`                   | Cancel, close, dismiss |
| `Copy`                | Copy                   |
| `Download` / `Upload` | File transfer          |
| `RefreshCw`           | Refresh data           |
| `RotateCcw`           | Reset or restore       |
| `Search` / `Filter`   | Search or filter       |
| `Settings`            | Configuration          |
| `Ellipsis`            | Additional actions     |

### Status

| Icon             | Usage        |
| ---------------- | ------------ |
| `CircleCheck`    | Success      |
| `CircleAlert`    | Warning      |
| `CircleX`        | Error        |
| `Info`           | Information  |
| `LoaderCircle`   | Loading      |
| `Clock`          | Pending      |
| `Lock`           | Restricted   |
| `Eye` / `EyeOff` | Show or hide |

## 4. Visual Standards

| Property               | Default          |
| ---------------------- | ---------------- |
| Compact icon           | 14px             |
| Standard icon          | 16px             |
| Navigation/action icon | 18px             |
| Emphasized icon        | 20px             |
| Stroke width           | 1.75             |
| Secondary icon color   | Muted Foreground |

Rules:

- Prefer existing design tokens over hardcoded values.
- Maintain consistent size, stroke, spacing, and alignment.
- Leave context-appropriate clearance between icons and nearby edges, including icon-only controls and icons inside inputs or composite controls.
- Keep trailing icons in fixed positions regardless of text length.
- Avoid layout shifts when icons appear or change.
- Avoid unnecessary icon backgrounds, borders, and shadows.
- Preserve adequate interactive target sizes.

## 5. Interaction and Accessibility

- Provide subtle hover and active-state feedback.
- Maintain visible keyboard focus indicators.
- Apply disabled and loading states consistently.
- Give icon-only buttons accessible names (`aria-label`).
- Hide purely decorative icons from assistive technologies.
- Use semantic interactive elements and preserve keyboard access.
- Use tooltips when needed, but not as replacements for accessible names.
- Do not communicate important states through color alone.

## 6. Component-specific Rules

### Workflow

- Use `ChevronRight` between discrete workflow steps.
- Use `ArrowRight` when representing actual data transformation.

### Quick Actions

- Use `ArrowUpRight` for internal feature shortcuts.
- Use `ExternalLink` for external destinations or new browsing contexts.

### Version Comparison

- Use `ArrowRight` for directional `Base → Target` comparisons.
- Use `ArrowLeftRight` only for actual swapping actions.

### Select / Dropdown

- Prefer `ChevronDown` for dropdown indicators.
- Keep trailing icon alignment fixed.
- Preserve existing dimensions and keyboard behavior.

### Inline Editing

- `Pencil`: Enter edit mode.
- `Check`: Confirm changes.
- `Save`: Explicit save action.
- `X`: Cancel editing.
- Preserve icon alignment and prevent layout shifts.
- Follow `inline-editing.md` for detailed behavior.

## 7. Restrictions

- Do not use unrelated icons merely for visual preference.
- Do not use different icons for identical actions without reason.
- Do not use emoji for functional UI controls.
- Do not use `ExternalLink` for ordinary internal navigation.
- Do not replace existing icon systems without authorization.
- Do not modify unrelated component logic or layout.

## 8. Implementation Checklist

1. Inspect existing icon libraries and shared components.
2. Identify the icon's semantic purpose.
3. Select an appropriate icon and verify availability.
4. Apply existing design tokens and component conventions.
5. Check alignment, interaction states, and layout stability.
6. Verify accessibility and keyboard behavior.
7. Preserve existing functionality.

**Priority:** Explicit user requirements → Project design system → Shared components → Semantic guidelines → Default visual values.
