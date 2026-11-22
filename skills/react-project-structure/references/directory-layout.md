# Directory Layout

Use the existing project structure and toolchain as the starting point. Inspect entrypoints, build configuration, TypeScript aliases, and current imports before proposing directories. The following is an optional layout for a React and TypeScript app, including an Electron Renderer:

```text
src/
├── app/          # Root composition and providers
├── components/   # UI shared across features
├── features/     # Feature-owned implementation
├── hooks/        # Hooks shared across features
├── layouts/      # Reusable page layouts
├── pages/        # Route-level page composition
├── routes/       # Route definitions and root route rendering
├── styles/       # Global styles and themes
├── types/        # Cross-feature types
├── utils/        # Cross-feature utilities
├── App.tsx       # Imports and returns the root route entry only
└── main.tsx      # Bootstrap and application-level provider composition
```

Create a directory only when existing code needs it. Keep a small app flat when that is clearer. When routes are configured, place their definitions and root rendering in `src/routes/`; do not place route declarations in `App.tsx`. Keep `App.tsx` to importing and returning the root route entry component, with no providers, layouts, feature logic, business logic, or substantial JSX. Place root providers and startup composition near the entrypoint; place feature behavior with its feature. Distinguish route-level pages, reusable layouts, and feature implementation by their actual roles. `react-router` owns route configuration and navigation details; `react-ui-style` owns visual layout and styling.
