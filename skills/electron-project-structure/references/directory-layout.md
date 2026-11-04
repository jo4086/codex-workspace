# Electron Directory Layout

Inspect the existing Electron toolchain, entrypoints, build output, import rules, and applicable `AGENTS.md`. Adapt to their conventions. This layout is optional:

```text
src/
├── main/       # Lifecycle, windows, privileged services, IPC handlers
├── preload/    # Restricted bridge exposed to Renderer
└── renderer/   # UI application
```

Keep each process's entrypoint and implementation in its owned area. Put contracts shared across processes in an existing or clearly justified shared location, independent of process implementations. Do not create a shared layer solely to match the example. Preserve electron-vite or other toolchain conventions. For a React Renderer, use `react-project-structure` to organize code inside `renderer/`.
