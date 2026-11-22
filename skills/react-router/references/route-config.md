# Route Configuration

## 1. Route Definition

Prefer `RouteObject[]` for centralized route definitions in Declarative Mode.

**Example path:** `src/routes/config.tsx`

```tsx
import type { RouteObject } from "react-router";
import { Outlet } from "react-router";

import { HomePage, NotFoundPage } from "@/pages";

function MainLayout() {
  return <Outlet />;
}

const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  { path: "*", element: <NotFoundPage /> },
];

export default routes;
```

The example paths, imports, and components are illustrative.

## 2. Route Rendering

**Example path:** `src/routes/index.tsx`

```tsx
import { useRoutes } from "react-router";
import routes from "./config";

export function AppRoutes() {
  return useRoutes(routes);
}
```

## 3. Configuration Rules

- Centralize route definitions in `config.tsx`.
- Use `RouteObject[]` for route type safety.
- Prefer index routes for default nested content.
- Use relative paths for nested child routes where appropriate.
- Use layout routes to share page structure.
- Provide a fallback route for unmatched paths.
- Keep route paths and component registrations readable.
- Avoid duplicating the same route definitions.

## 4. Conditional Routes

- Register conditional routes only when required.
- Use explicit conditions for feature-dependent routes.
- Do not treat hidden routes as an authorization mechanism.
- Enforce access permissions independently of route visibility.

## 5. Route Organization

- Keep small route configurations centralized.
- Split configurations by feature only when necessary.
- Combine feature routes through a clear root configuration.
- Avoid premature route registries or abstractions.

## 6. Restrictions

- Do not place unrelated business logic in route definitions.
- Do not change existing paths without authorization.
- Do not assume Declarative Mode supports Data Router loaders or actions.
- Preserve the project's existing routing mode.
