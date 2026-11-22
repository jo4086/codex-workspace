# Tailwind CSS Guidelines

## 1. Technology

- Version: **Tailwind CSS v4**
- Configuration: CSS-first configuration
- Styling: Utility-first CSS
- Theme: CSS variables and `@theme`
- Dark mode: Class-based (`.dark`)

Prefer Tailwind CSS v4 native features over legacy configuration patterns.

## 2. Directory Structure

Use the following structure for new React projects:

```text
src/
└── styles/
    ├── main.css
    ├── components.css
    ├── theme.css
    └── utilities.css
```

### File Responsibilities

| File             | Responsibility                                       |
| ---------------- | ---------------------------------------------------- |
| `main.css`       | Entry point, imports, global base styles             |
| `components.css` | Reusable component classes using `@layer components` |
| `theme.css`      | Design tokens, `@theme`, light/dark themes           |
| `utilities.css`  | Custom utilities using `@utility`                    |

Keep each file focused on its assigned responsibility.

## 3. Main Stylesheet

**Path:** `src/styles/main.css`

```css
@import "tailwindcss";
@import "./theme.css";
@import "./components.css";
@import "./utilities.css";

@layer base {
  body {
    background-color: var(--color-background);
    color: var(--color-foreground);
  }
}
```

Rules:

- Use `main.css` as the primary stylesheet entry point.
- Import the other three stylesheets from `main.css`.
- Define global element styles inside `@layer base`.
- Do not place component-specific styles or custom utilities here.
- Import `main.css` once from the application's entry point.

## 4. Theme Configuration

**Path:** `src/styles/theme.css`

Use `@theme` for design tokens and CSS variables for theme-specific values.

```css
@custom-variant dark (&:where(.dark, .dark *));

@theme inline {
  --color-background: var(--app-background);
  --color-foreground: var(--app-foreground);
  --color-primary: var(--app-primary);
}

:root {
  color-scheme: light;
  --app-background: #ffffff;
  --app-foreground: #171717;
  --app-primary: #2563eb;
}

.dark {
  color-scheme: dark;
  --app-background: #111827;
  --app-foreground: #f9fafb;
  --app-primary: #60a5fa;
}
```

Rules:

- Centralize design tokens and theme definitions.
- Use `@theme` or `@theme inline` according to token requirements.
- Define light mode in `:root` and dark mode in `.dark`.
- Use semantic color names rather than appearance-specific names.
- Prefer existing theme tokens over hardcoded values.
- Avoid duplicating theme definitions in other stylesheets.

_Color values above are examples, not fixed requirements._

## 5. Component Styles

**Path:** `src/styles/components.css`

```css
@layer components {
  .app-card {
    @apply rounded-lg border p-4;
    background-color: var(--color-background);
  }
}
```

Rules:

- Define reusable component classes inside `@layer components`.
- Prefer Tailwind utilities directly in JSX for simple styling.
- Extract repeated or complex component styles when justified.
- Use meaningful, consistent class names.
- Avoid unnecessary abstraction and excessive `@apply`.
- Do not define global element styles or theme tokens here.

## 6. Custom Utilities

**Path:** `src/styles/utilities.css`

```css
@utility scrollbar-hidden {
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}
```

Rules:

- Use Tailwind CSS v4 `@utility` for custom utilities.
- Use `@utility`, not `@utilities`.
- Create custom utilities only when built-in utilities are insufficient.
- Keep utilities reusable and independent of specific components.
- Avoid duplicating existing Tailwind functionality.
- Do not use `@layer utilities` as a substitute for registering custom Tailwind v4 utilities.

## 7. Styling Conventions

### Styling Priority

1. **One-off styles:** Use Tailwind utilities directly in JSX `className`.
2. **Custom values:** Use Tailwind arbitrary values or properties when necessary.
3. **Reusable components:** Define shared classes in `components.css` using `@layer components`.
4. **Custom utilities:** Define reusable utilities in `utilities.css` using `@utility`.
5. **Theme values:** Define shared design tokens in `theme.css`.
6. **Global styles:** Define element-level base styles in `main.css` using `@layer base`.

### Rules

- Prefer `className` for ordinary and component-specific styling.
- Do not create CSS classes or files for simple one-off styles.
- Extract styles only when reuse or complexity justifies it.
- Prefer existing Tailwind utilities and design tokens.
- Use arbitrary values only when standard utilities are insufficient.
- Avoid React inline `style` when Tailwind utilities can express the same styling.
- Do not introduce CSS-in-JS or CSS Modules without a specific requirement.
- Keep styling consistent with existing project conventions.

## 8. Project Compatibility

### New Projects

- Use Tailwind CSS v4.
- Initialize the four-file stylesheet structure.
- Apply CSS-first configuration.
- Use the project's existing build-tool integration.

### Existing Projects

- Inspect the installed Tailwind version and current CSS architecture.
- Preserve established conventions unless migration is explicitly requested.
- Do not automatically migrate Tailwind v3 projects to v4.
- Do not reorganize existing stylesheets without authorization.
- Avoid unnecessary dependencies or configuration changes.

## 9. Implementation Checklist

1. Inspect the existing Tailwind configuration and stylesheet structure.
2. Identify the appropriate stylesheet based on responsibility.
3. Reuse existing design tokens and utilities.
4. Avoid duplicated or conflicting CSS definitions.
5. Verify responsive behavior and light/dark themes.
6. Preserve existing component behavior.
7. Run relevant project checks.

**Core Principle:** Maintain a clear separation between base styles, design tokens, component styles, and custom utilities while following Tailwind CSS v4 conventions.
