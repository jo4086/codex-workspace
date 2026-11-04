---
name: react-project-structure
description: Organize React and TypeScript application directories, feature modules, shared code, and file placement. Use for project initialization, directory design, or structural refactoring, including React-based Electron Renderers.
---

# React Project Structure

## Purpose

Guide the placement and ownership of React application files while preserving the project's existing architecture.

## Activation

Apply for React project initialization, directory design, file placement, or structural refactoring. Do not apply solely for unrelated styling or an isolated logic change.

## Core Principles

- Inspect applicable `AGENTS.md`, current directories, imports, build configuration, and TypeScript aliases before changing structure.
- Treat example layouts as optional; create directories only when current code needs them.
- Keep modules cohesive and feature-owned code local. Share code when reuse is established.
- Make the smallest useful structural change and preserve application behavior.

## Reference Routing

Start at [references/README.md](./references/README.md), then read only the relevant guidance for app layout, feature modules, module boundaries, or refactoring.

## Workflow

1. Inspect the existing app and identify the owner of each affected file.
2. Select the relevant reference and plan the smallest change.
3. Update affected paths and imports while preserving behavior.
4. Run relevant project checks and report changed paths and limitations.

## Cross-Skill Coordination

- This Skill owns React app and feature structure, including a React-based Electron Renderer.
- `electron-project-structure` owns Main, Preload, Renderer, and IPC process boundaries. Apply both when both concerns change.
- `react-router` owns routing behavior and configuration; `react-ui-style` owns visual design and interactions; `code-style` owns code conventions and general module boundaries. Apply them when those concerns are part of the task.

## Restrictions

- Do not add dependencies or speculative shared layers for folder organization.
- Do not change UI, routing, state, or business behavior during a structure-only task.
