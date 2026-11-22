# Navigation Guidelines

## 1. Navigation Principles

- Prefer React Router navigation APIs for internal navigation.
- Preserve client-side navigation behavior.
- Use semantic links for navigable destinations.
- Use programmatic navigation only when necessary.
- Keep navigation logic separate from unrelated business logic.

## 2. Navigation Methods

| API               | Usage                                     |
| ----------------- | ----------------------------------------- |
| `Link`            | Standard internal navigation              |
| `NavLink`         | Navigation requiring active-state styling |
| `useNavigate`     | Programmatic navigation                   |
| `Navigate`        | Declarative redirects                     |
| `useLocation`     | Current location information              |
| `useParams`       | Dynamic route parameters                  |
| `useSearchParams` | URL query parameters                      |

## 3. Link Navigation

- Prefer `Link` for ordinary internal destinations.
- Use `NavLink` for menus, tabs, and active navigation indicators.
- Use regular anchors for external destinations.
- Avoid replacing semantic links with clickable containers unnecessarily.

## 4. Programmatic Navigation

- Use `useNavigate()` for navigation triggered by application logic.
- Prefer `replace` when the previous history entry should not be retained.
- Avoid direct `window.location` manipulation for ordinary internal routing.
- Keep navigation side effects predictable.

## 5. External Navigation

- Distinguish internal and external destinations.
- Use appropriate browser or Electron APIs for external links.
- In Electron, follow established security policies for opening external URLs.
- Do not expose privileged Electron APIs directly to untrusted renderer content.

## 6. Navigation State

- Preserve relevant query parameters when appropriate.
- Avoid unnecessary navigation loops.
- Handle unknown or invalid route parameters.
- Preserve existing history behavior.

## 7. External Navigation Integrations

When navigation is required outside React components:

- Prefer an existing application-level navigation abstraction.
- Keep navigation integrations separate from route definitions.
- Avoid introducing global navigation functions unless necessary.
- Clean up registered callbacks and subscriptions.
- Do not introduce global navigation bridges without a concrete requirement.
