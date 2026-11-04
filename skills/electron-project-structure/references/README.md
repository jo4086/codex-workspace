# Reference Index

## Purpose

Route Electron project structure work to process layout, boundaries, IPC placement, and refactoring guidance.

## References

| Reference                                        | Responsibility                                | When to Read                                   |
| ------------------------------------------------ | --------------------------------------------- | ---------------------------------------------- |
| [directory-layout.md](./directory-layout.md)     | Process-specific directories and entrypoints  | Initializing or reorganizing the Electron tree |
| [process-boundaries.md](./process-boundaries.md) | Main, Preload, Renderer, and shared ownership | Placing code or moving it across processes     |
| [ipc-organization.md](./ipc-organization.md)     | IPC handler, bridge, and contract placement   | Organizing IPC files or shared contracts       |
| [refactoring.md](./refactoring.md)               | Safe structural changes                       | Moving existing files or directories           |

## Usage

Read only the references relevant to the requested structural decision. Preserve existing toolchain and process security conventions.
