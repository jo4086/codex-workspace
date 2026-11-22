# React Router References

Reference index for React Router architecture, route configuration, navigation, and environment-specific behavior.

## Document Index

| Document                             | Responsibility                                                  | Read When                                      |
| ------------------------------------ | --------------------------------------------------------------- | ---------------------------------------------- |
| [architecture.md](./architecture.md) | Directory structure, file responsibilities, router architecture | Creating or restructuring routing architecture; first designing list/detail URLs in a router-free starter |
| [route-config.md](./route-config.md) | RouteObject, nested routes, layouts, route registration         | Adding or modifying routes                     |
| [navigation.md](./navigation.md)     | Links, programmatic navigation, navigation state                | Implementing navigation behavior               |
| [environments.md](./environments.md) | Web, Electron, testing, router selection                        | Selecting or configuring router providers      |
| [layouts.md](./layouts.md)           | Shared layouts, Outlet composition, layout components           | Creating or modifying route layouts            |

## Routing Rules

1. Identify the routing concern from the current task.
2. Read only the relevant reference documents.
3. Consult multiple documents when the task spans multiple concerns.
4. Respect the installed React Router version and routing mode.
5. Preserve existing project conventions unless explicitly instructed otherwise.

When a starter has no existing router and list/detail URLs are being designed for the first time, read [architecture.md](./architecture.md) before choosing whether or how to introduce routing.

## General Principles

- Use `src/routes/` for route composition in new Declarative Mode projects.
- Separate route definitions from route rendering and application setup.
- Keep route configuration independent of the runtime environment where possible.
- Avoid unnecessary routing abstractions and dependencies.
- Do not migrate existing routing architectures without authorization.
