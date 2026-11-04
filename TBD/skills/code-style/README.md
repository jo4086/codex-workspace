# Code Style Skill — Draft

## 1. Purpose

Define consistent coding conventions across frontend, backend, and shared packages.

This document records the planned scope and design decisions for a future `code-style` Skill.

**Status:** TBD — Not implemented

## 2. Scope

The Skill will cover:

- Naming and formatting conventions
- Import paths and module aliases
- Module boundaries and public APIs
- TypeScript and JavaScript coding patterns
- File organization and responsibility separation
- Error handling and type safety
- Framework-specific conventions when necessary

Existing project conventions and tooling configurations take precedence.

## 3. Import Alias Conventions

Import aliases have different responsibilities depending on the project type.

| Context                   | Convention               | Purpose                           |
| ------------------------- | ------------------------ | --------------------------------- |
| Frontend application      | `@/*`                    | Local `src/*` imports             |
| Backend application       | `@/*`                    | Local `src/*` imports             |
| Shared package internals  | `#internal/*`            | Package-private imports           |
| Shared package public API | `@scope/package`         | Public package entry point        |
| Public subpath API        | `@scope/package/subpath` | Explicitly exported functionality |

### Application Aliases

- Prefer `@/*` for local application imports.
- Resolve `@/*` to the application's `src/*` directory.
- Do not interpret `@/*` as a public package API.
- Ensure aliases are supported by the runtime or build system.

### Package-Private Imports

- Prefer Node.js package `imports` mappings using the `#` prefix.
- Use `#internal/*` for package-private implementation references.
- Keep internal implementation details outside the public API.
- Do not expose internal modules merely for import convenience.

### Package Public APIs

- Use scoped package names such as `@scope/package`.
- Define public entry points through `package.json` `exports`.
- Export only functionality intended for external consumers.
- Prefer importing other packages through their public entry points.
- Avoid direct imports into another package's internal source files.

## 4. Module Boundary Principles

- Separate private implementation from public interfaces.
- Keep package boundaries explicit.
- Avoid circular dependencies.
- Prefer stable public APIs over internal implementation imports.
- Preserve existing package contracts when refactoring.
- Do not introduce aliases without configuring their resolution.

## 5. Tooling Considerations

- Respect existing TypeScript, ESLint, and Prettier configurations.
- Do not duplicate formatting rules already enforced by tooling.
- `tsconfig.json` `paths` does not automatically configure runtime resolution.
- Consider Node.js `imports` and `exports` for package-level boundaries.
- Verify compatibility with the project's module system, bundler, and build output.

## 6. Planned Skill Structure

```text
code-style/
├── SKILL.md
└── references/
    ├── README.md
    ├── general/
    │   ├── README.md
    │   ├── naming.md
    │   ├── imports.md
    │   ├── module-boundaries.md
    │   └── error-handling.md
    ├── languages/
    │   ├── README.md
    │   ├── typescript.md
    │   └── javascript.md
    └── frameworks/
        ├── README.md
        ├── react.md
        └── nodejs.md
```

The structure is provisional and may change during implementation.

## 7. Implementation Guidelines

When implementing this Skill:

1. Create reference documents before `SKILL.md`.
2. Keep each reference focused on one responsibility.
3. Prefer reference documents under 200 lines.
4. Use category `README.md` files as reference indexes.
5. Keep `SKILL.md` focused on activation, principles, and reference routing.
6. Avoid duplicating guidelines across documents.
7. Respect existing project configurations and architecture.

## 8. Pending Decisions

- Final naming conventions for internal package aliases
- Import ordering and grouping conventions
- Relative imports versus alias imports
- Package public subpath export policies
- Framework-specific coding conventions
- Additional language support
