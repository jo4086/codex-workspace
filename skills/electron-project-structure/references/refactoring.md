# Structural Refactoring

1. Inspect process entrypoints, directory tree, IPC wiring, aliases, build configuration, and applicable `AGENTS.md`.
2. Map each affected file to Main, Preload, Renderer, or a genuinely shared contract.
3. Make the smallest incremental move and update imports, entrypoints, and build references.
4. Preserve UI, state, IPC contracts, process isolation, validation, and business behavior unless separately requested.
5. Run relevant type, build, lint, test, or application smoke checks; inspect the diff for accidental boundary changes and report the result.

Apply `react-project-structure` when the move also reorganizes a React Renderer. Do not add dependencies or unused shared layers for folder symmetry.
