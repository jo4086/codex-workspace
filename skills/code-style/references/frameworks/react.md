# React Code Organization

- Follow the application's existing component, hook, and state conventions.
- Keep rendering concerns in components and move reusable behavior into a hook or module when it has a clear independent responsibility.
- Derive values during render when possible; use effects for synchronization with external systems and clean up subscriptions or timers.
- Keep props and component exports intentional. Avoid exposing a feature's internal components as shared APIs merely for import convenience.
- Preserve existing behavior and accessibility while reorganizing component code.

For visual styling and UI interactions, use `react-ui-style` when available. For routes, navigation, and route-layout composition, use `react-router` when available. Those Skills own their respective conventions.
