# Typography Guidelines

## 1. Purpose

Define consistent typography practices for React user interfaces.

Prioritize readability, visual hierarchy, accessibility, and compatibility with existing project conventions.

## 2. Existing Project Compatibility

- Inspect existing fonts, typography components, and design tokens before making changes.
- Preserve established font families, sizes, weights, and line heights.
- Reuse existing typography utilities and shared components.
- Match the visual hierarchy of surrounding UI.
- Do not replace existing typography systems without authorization.
- Treat the guidelines below as defaults when no established conventions exist.

## 3. Typography Hierarchy

Use a clear hierarchy based on the semantic role of text.

| Role               | Purpose                                    |
| ------------------ | ------------------------------------------ |
| Page Title         | Primary heading of a page                  |
| Section Heading    | Major content sections                     |
| Subsection Heading | Nested content groups                      |
| Body               | Standard content and descriptions          |
| Label              | Form fields and interface controls         |
| Caption            | Supporting information and metadata        |
| Code / Numeric     | Technical values, identifiers, and numbers |

### Rules

- Use semantic heading levels (`h1`–`h6`) appropriately.
- Do not select heading elements solely for visual appearance.
- Prefer a consistent type scale.
- Distinguish hierarchy through size, weight, and spacing.
- Avoid excessive font-size variations.
- Keep heading levels logically structured.

## 4. Font Families

- Prefer the project's existing font family.
- Use established font tokens when available.
- Avoid introducing additional font families without justification.
- Use monospace fonts for code and technical identifiers when appropriate.
- Ensure appropriate font fallback for multilingual content.
- Do not require external font downloads unless explicitly requested.

## 5. Font Size and Weight

- Use the project's existing typography scale.
- Prefer Tailwind typography utilities when Tailwind is available.
- Use font weight to reinforce hierarchy.
- Avoid excessive bold text.
- Keep supporting text visually subordinate without sacrificing readability.
- Avoid arbitrary font sizes unless existing utilities are insufficient.

## 6. Line Height and Readability

- Use appropriate line heights for the text's purpose.
- Prefer comfortable line spacing for paragraphs.
- Use tighter line heights for short headings when appropriate.
- Avoid excessively long text lines.
- Allow text to wrap naturally unless the interface requires otherwise.
- Avoid fixed-height text containers that clip content.

## 7. Truncation and Wrapping

- Prefer wrapping when complete information is important.
- Use truncation only when the available space is intentionally constrained.
- Provide access to the complete text when truncation hides important information.
- Use `break-words` or equivalent utilities for long unbroken strings.
- Avoid unnecessary `whitespace-nowrap`.
- Prevent text overflow from breaking flex and grid layouts.

## 8. Numeric and Technical Text

- Use `tabular-nums` for aligned numerical values when supported.
- Prefer monospace fonts for code, paths, and technical identifiers.
- Preserve meaningful whitespace in code and preformatted content.
- Keep numerical formatting consistent within the same interface.
- Distinguish technical values from surrounding descriptive text when useful.

## 9. Responsive Typography

- Adapt typography to available space when necessary.
- Preserve readable font sizes on smaller viewports.
- Avoid scaling every text element solely because the viewport changes.
- Prefer existing responsive typography conventions.
- Consider content density in desktop applications and workspace interfaces.

## 10. Accessibility

- Maintain sufficient text contrast against backgrounds.
- Support browser zoom and user font-size preferences.
- Avoid relying exclusively on color to communicate hierarchy.
- Preserve semantic text structure.
- Ensure text remains readable when content wraps or expands.

## 11. Styling Conventions

- Prefer Tailwind utilities directly in JSX `className` for component-specific typography.
- Reuse existing typography components and design tokens.
- Extract shared typography styles only when reuse or complexity justifies it.
- Avoid unnecessary inline styles and duplicated CSS rules.

## 12. Restrictions

- Do not impose a fixed font family or type scale across all projects.
- Do not modify unrelated typography.
- Do not introduce unnecessary typography dependencies.
- Do not override established project design conventions.
- Avoid decorative typography that reduces readability.
