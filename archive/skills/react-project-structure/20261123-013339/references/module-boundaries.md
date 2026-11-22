# React Module Boundaries

Identify the owner and consumers of a module before moving it. Keep feature internals local; expose a small entrypoint only when other features need a stable way to consume it. Avoid unrelated features reaching into one another's private files, unnecessary barrels, re-export chains, and circular dependencies.

Shared folders hold code with real cross-feature ownership. A feature-specific helper does not become shared merely because it is small or broadly named. Preserve configured path aliases and check both TypeScript and runtime resolution before changing import paths.

`code-style` owns detailed import, naming, type, and general module-boundary conventions. This reference concerns placement and ownership within a React app.
