# Routing Architecture

## 1. Preferred Architecture

For new React Router Declarative Mode projects, prefer centralized route configuration using `RouteObject[]` and `useRoutes()`.

Keep route definitions, route rendering, and application initialization separate.

## 2. Directory Structure

```text
src/
├── router/
│   ├── config.tsx
│   └── index.tsx
├── pages/
├── App.tsx
└── main.tsx
```

The structure is a preferred default, not a mandatory migration target.

## 3. File Responsibilities

### router/config.tsx

- Define and export the `RouteObject[]` configuration.
- Register paths, page components, and nested layouts.
- Keep route declarations centralized.
- Avoid unrelated application logic.

### router/index.tsx

- Render the configured routes using `useRoutes()`.
- Contain routing-specific integrations when necessary.
- Avoid duplicating route declarations.
- Use `.tsx` when the file contains JSX.

### App.tsx

- Keep the root application component minimal.
- Render the routing component.
- Include application-level providers when appropriate.
- Do not define route configurations directly.

### main.tsx

- Initialize the React application.
- Configure the environment-appropriate router provider.
- Mount the application.

## 4. Architecture Rules

- Prefer nested routes for shared layouts.
- Use `Outlet` to render nested route content.
- Keep page implementations outside the router directory.
- Avoid unnecessary wrappers and abstractions.
- Split route configurations only when complexity justifies it.
- Keep Web and Electron route definitions reusable where practical.

## 5. Compatibility

- Apply this architecture primarily to Declarative Mode.
- Preserve existing Data Mode and Framework Mode architectures.
- Do not replace `RouterProvider` architectures with `useRoutes()` automatically.
- Preserve existing loaders, actions, error handling, and navigation behavior.
- Do not restructure existing projects without explicit authorization.
