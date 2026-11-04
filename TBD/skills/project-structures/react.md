# React Project Structure — Requirements

## Scope
React + TypeScript apps, including Vite SPA and React-based Electron Renderer.
Owns app organization, feature boundaries, shared resources, and structural refactoring. Does not own Electron Main/Preload, UI styling, or detailed routing implementation.

## Reference Layout (Optional)
```text
src/
├── app/          # Root composition and providers
├── components/   # Shared UI
├── features/     # Feature-local code
├── hooks/        # Shared hooks
├── layouts/      # Shared page layouts
├── pages/        # Route-level pages
├── routes/       # Route configuration
├── styles/       # Global styles/themes
├── types/        # Shared types
├── utils/        # Shared utilities
└── main.tsx      # Entry point
```
Create only the directories that are actually needed.

## Feature Organization
Small feature:
```text
features/feature-a/
├── FeatureA.tsx
├── useFeatureA.ts
└── types.ts
```
Expanded feature:
```text
features/feature-a/
├── components/
├── hooks/
├── utils/
├── types.ts
└── index.ts      # Only if a public API helps
```

## Rules
- Keep feature-specific UI, hooks, types, and utilities inside the owning feature.
- Move code to shared directories only when cross-feature reuse is real.
- Begin flat; introduce subdirectories when complexity justifies them.
- Do not enforce identical structures across features.
- Avoid unnecessary barrels, re-export chains, and circular dependencies.
- Avoid uncontrolled imports into unrelated feature internals.
- Distinguish page composition, reusable layouts, and feature implementation.
- Delegate React Router specifics to `react-router` and styling to `react-ui-style`.

## Suggested Generated References
- `directory-layout.md`
- `feature-modules.md`
- `module-boundaries.md`
- `refactoring.md`
