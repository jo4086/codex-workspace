# Process Boundaries

- Main owns app lifecycle, windows, native APIs, privileged services, and IPC handlers.
- Preload owns the narrow bridge exposed to the Renderer.
- Renderer owns UI, presentation state, and calls to the exposed API.
- Shared contracts describe messages and types without importing process-specific implementations.

Do not import Main-only implementation into Renderer. Preserve existing process isolation, validation, and security controls when moving files. A structure-only change must not expand the exposed API or move privileged work into Renderer. Use `react-project-structure` for React-specific Renderer placement.
