# Module Boundaries and Public APIs

- Identify the owner of a module before sharing it across features or packages.
- Keep implementation details private. Export the smallest stable surface needed by consumers.
- Define package entry points with `package.json` `exports`; include subpaths only for intentional public APIs.
- Consume other packages through their declared exports. Preserve existing package contracts when reorganizing internals.
- Avoid dependency cycles. If two modules depend on each other, separate the common responsibility or reconsider ownership.
- Check the project's module system, build output, and runtime resolution before changing `imports`, `exports`, or aliases.

Use [imports.md](imports.md) for the path syntax and resolution requirements. A convenient path alone does not make an internal module public.
