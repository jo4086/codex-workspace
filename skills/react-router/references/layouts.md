# Layout Guidelines

## 1. Purpose

Define reusable, route-aware layouts using independent React components and React Router's `Outlet`.

Separate application structure from page-specific content.

## 2. Preferred Directory Structure

```text
src/
└── layout/
    ├── Layout.tsx
    ├── Main.tsx
    ├── Header.tsx
    ├── Footer.tsx
    ├── EmptyLayout.tsx
    ├── FeatureLayout.tsx
    └── index.ts
```

File names are examples. Prefer existing project naming conventions.

## 3. Component Responsibilities

### Layout.tsx

- Compose shared application regions.
- Reuse independent structural components.
- Avoid page-specific business logic.

### Main.tsx

- Define the main content container.
- Render nested route content through `Outlet`.
- Apply shared layout styles when appropriate.

### Header.tsx / Footer.tsx

- Implement reusable header and footer regions.
- Keep unrelated page logic outside shared regions.
- Allow composition without requiring every layout to include them.

### EmptyLayout.tsx

- Provide a minimal route layout.
- Render nested content through `Outlet`.
- Avoid unnecessary shared application chrome.

### FeatureLayout.tsx

- Define layouts for specific application areas.
- Include feature-specific navigation and structure when required.
- Render nested pages through `Outlet`.

### index.ts

- Export public layout components.
- Keep implementation logic in individual files.
- Avoid unnecessary re-exports.

## 4. Composition Rules

- Prefer composition over duplicated layout markup.
- Keep layout components independent and reusable.
- Use `Outlet` for nested route rendering.
- Avoid placing page-specific content directly inside shared layouts.
- Do not require every layout to share the same header, footer, or container.
- Extract components when they have clear, independent responsibilities.

## 5. Route Integration

- Register layouts through route configuration.
- Group related pages under shared layout routes.
- Use nested routes for layout inheritance.
- Keep layout selection centralized in route configuration.
- Avoid manually switching layouts inside page components.

## 6. Semantic Structure

- Use semantic HTML elements when appropriate.
- Prefer a single primary `main` landmark per rendered page.
- Do not nest `main` elements unnecessarily.
- Avoid semantic wrappers that do not match their content.
- Preserve accessibility and document structure.

## 7. Styling

- Keep layout styling consistent with the project's styling system.
- Prefer Tailwind `className` utilities when the project uses Tailwind.
- Avoid unnecessary inline styles.
- Delegate detailed visual design rules to the relevant UI styling guidelines.

## 8. Restrictions

- Do not merge independent layouts without a clear reason.
- Do not duplicate shared layout structures unnecessarily.
- Do not introduce layout abstractions before they are needed.
- Do not modify unrelated page components.
- Preserve existing layout behavior unless changes are requested.
