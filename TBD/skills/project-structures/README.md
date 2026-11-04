# Project Structure Skills — Creation Specification

## Goal

Create two coordinated Skills using `my-skill-creator`:

- `react-project-structure`
- `electron-project-structure`

## Read Order

1. Read this README.
2. Read `./common.md`.
3. Read `./react.md` and `./electron.md`.

## Ownership

- React Skill: React app structure, feature modules, shared code, file placement.
- Electron Skill: Main/Preload/Renderer separation, IPC placement, process boundaries.
- For React-based Electron Renderers, use both without duplicating React rules.

## Completion

- Validate Skill metadata, paths, Markdown links, and line counts.
- Register both in `skill-router/skill-map.md` with independent and combined activation conditions.
- Report created files, checks, and unresolved issues.

## Specifications

- [Common requirements](./common.md)
- [React requirements](./react.md)
- [Electron requirements](./electron.md)
