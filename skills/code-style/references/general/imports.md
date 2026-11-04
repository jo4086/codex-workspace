# Imports and Aliases

Inspect package manifests, TypeScript configuration, bundler/runtime resolution, and nearby imports before changing import paths. Existing working conventions take precedence.

## Application Imports

- For a new frontend or backend application that supports aliases, prefer `@/*` for imports from that application's `src/*` directory.
- Configure every tool that resolves application imports, including the runtime or bundler. `tsconfig.json` `paths` alone does not provide runtime resolution.
- Treat `@/*` as local to the application, never as a package's public API.

## Shared Package Imports

- Prefer `#internal/*` through the package's `package.json` `imports` map for private references within a shared package, when its runtime and build setup support that mapping.
- Import another package through `@scope/package` or an explicitly exported `@scope/package/subpath`. Do not reach into its source tree or private implementation.
- Add a public subpath only when an external consumer needs that boundary; define it in `exports` and check the corresponding type and runtime resolution.

## Selection and Ordering

- Follow configured lint rules and the surrounding module's grouping and ordering. Do not introduce an ordering policy solely for this Skill.
- For relative versus alias imports, follow the project's existing pattern. If a new convention is needed, choose one consistently with the team and configure its resolution before use.
- Do not rewrite working imports solely to impose these preferences.
