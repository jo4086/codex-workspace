# Routing Architecture

## 1. Preferred Architecture

For new React Router Declarative Mode projects, use centralized route configuration with `RouteObject[]` and `useRoutes()`.

Keep route definitions, route rendering, application initialization, and `App.tsx` responsibilities separate.

When a starter has no existing router and list/detail URLs are being designed for the first time, review this architecture before choosing whether or how to introduce routing. First URL design is routing architecture work even before a router implementation exists.

## 2. Directory Structure

```text
src/
├── routes/
│   ├── config.tsx
│   └── index.tsx
├── pages/
├── App.tsx
└── main.tsx
```

Use this responsibility split whenever a Declarative Mode routing structure is created or intentionally reorganized. Do not migrate an existing project whose routing structure is outside the requested work.

## 3. File Responsibilities

### routes/config.tsx

- Define and export the `RouteObject[]` configuration.
- Register paths, page components, and nested layouts.
- Keep route declarations centralized.
- Avoid unrelated application logic.

### routes/index.tsx

- Render the configured routes using `useRoutes()`.
- Contain routing-specific integrations when necessary.
- Avoid duplicating route declarations.
- Use `.tsx` when the file contains JSX.

### App.tsx

- Import and return the root route entry component only.
- Do not define routes, providers, layouts, feature logic, business logic, or substantial JSX.

### main.tsx

- Initialize the React application.
- Configure the environment-appropriate router provider.
- Own application-level provider composition when a focused app-composition module does not do so.
- Mount the application.

## 4. Architecture Rules

- Prefer nested routes for shared layouts.
- Use `Outlet` to render nested route content.
- Keep page implementations outside the `routes` directory.
- Keep route definitions and route rendering in `src/routes/`.
- Avoid unnecessary wrappers and abstractions.
- Split route configurations only when complexity justifies it.
- Keep Web and Electron route definitions reusable where practical.

## 5. Compatibility

- Apply this architecture primarily to Declarative Mode.
- Preserve existing Data Mode and Framework Mode architectures.
- Preserve framework- or mode-required route locations for Data Mode and Framework Mode projects; apply the `App.tsx` responsibility boundary without creating a conflicting `src/routes/` structure.
- Do not replace `RouterProvider` architectures with `useRoutes()` automatically.
- Preserve existing loaders, actions, error handling, and navigation behavior.
- Do not restructure existing projects without explicit authorization.
