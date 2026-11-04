# Routing Environments

## 1. Router Selection

Choose the router according to the application's execution environment and deployment requirements.

| Environment                    | Preferred Router                |
| ------------------------------ | ------------------------------- |
| Web SPA with server fallback   | `BrowserRouter`                 |
| Electron using `file://`       | `HashRouter`                    |
| Electron using custom protocol | `BrowserRouter` or `HashRouter` |
| Component and navigation tests | `MemoryRouter`                  |

These recommendations apply primarily to React Router Declarative Mode.

## 2. Web Applications

Prefer `BrowserRouter` when the server supports client-side routing fallback.

**Example path:** `src/main.tsx`

```tsx
import { BrowserRouter } from "react-router";

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
```

Rules:

- Ensure direct navigation and page refreshes resolve correctly.
- Configure server fallback when required.
- Preserve existing deployment and base-path settings.

## 3. Electron Applications

Prefer `HashRouter` when loading the application through `file://`.

**Example path:** `src/main.tsx` (Electron renderer)

```tsx
import { HashRouter } from "react-router";

root.render(
  <HashRouter>
    <App />
  </HashRouter>,
);
```

Rules:

- Keep routing inside the renderer process.
- Do not assume Electron always requires `HashRouter`.
- Consider custom protocol behavior before selecting `BrowserRouter`.
- Ensure development and production builds resolve routes correctly.
- Preserve Electron security boundaries.

## 4. Testing

Use `MemoryRouter` when tests require isolated in-memory navigation.

- Configure initial routes according to test requirements.
- Avoid unnecessary dependencies on browser URL state.
- Use Data Router test utilities when testing loaders or actions.

## 5. Shared Architecture

- Keep `RouteObject[]` definitions reusable between Web and Electron when possible.
- Select the router provider at the application entry point.
- Avoid embedding environment detection inside individual route definitions.
- Preserve environment-specific navigation behavior where necessary.

## 6. Compatibility

- Inspect the installed React Router version and mode.
- Preserve existing Data Router and Framework Mode configurations.
- Do not mix incompatible router providers.
- Do not migrate routing modes without explicit authorization.
