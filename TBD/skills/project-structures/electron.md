# Electron Project Structure — Requirements

## Scope
Electron + TypeScript apps, including Electron with React and electron-vite.
Owns process-specific directory organization, IPC placement, shared contracts, and structural refactoring across process boundaries. React Renderer internals belong to `react-project-structure`.

## Reference Layout (Optional)
```text
src/
├── main/       # Lifecycle, windows, privileged services, IPC handlers
├── preload/    # Restricted bridge exposed to Renderer
└── renderer/   # UI application; React structure delegated
```
Adapt to the existing toolchain and project conventions.

## Boundaries
- Main: native APIs, app lifecycle, windows, privileged operations, IPC handlers.
- Preload: narrow, explicitly approved bridge/API exposure.
- Renderer: UI, presentation state, calls to exposed APIs.
- Shared contracts: IPC types and contracts independent of process-specific implementations.
- Do not import Main-only implementations into Renderer.
- Preserve existing process isolation, validation, and security controls.
- Do not add privileged APIs or alter IPC contracts unless explicitly requested.
- Avoid unnecessary shared layers and duplicate type definitions.

## Coordination
- Use `react-project-structure` for React Renderer `app/`, `features/`, `pages/`, etc.
- Do not copy React-specific directory rules into this Skill.
- Preserve existing electron-vite or other build conventions.

## Suggested Generated References
- `directory-layout.md`
- `process-boundaries.md`
- `ipc-organization.md`
- `refactoring.md`
