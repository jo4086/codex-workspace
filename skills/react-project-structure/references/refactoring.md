# Structural Refactoring

1. Inspect the current tree, applicable `AGENTS.md`, imports, entrypoints, TypeScript paths, build settings, and relevant tests.
2. Identify each file's owner and the smallest move or extraction that solves the structural problem.
3. Move code incrementally and update imports, exports, and configuration only where required.
4. Preserve UI, routing, state, and business behavior unless the request also changes them.
5. Run the project's relevant type, build, lint, or test checks. Review the diff for accidental behavior changes and summarize changed paths.

Do not add dependencies or new shared abstractions solely to reorganize files. If a move crosses an Electron process boundary, also apply `electron-project-structure`.
