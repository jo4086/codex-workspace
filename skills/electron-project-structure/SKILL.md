---
name: electron-project-structure
description: Organize Electron and TypeScript Main, Preload, Renderer, IPC, and shared contracts. Use for project initialization, process directory design, file placement, or structural refactoring across Electron boundaries.
---

# Electron Project Structure

## Purpose

Guide Electron file ownership and process-specific directory structure while preserving existing security and application behavior.

## Activation

Apply for Electron project initialization, directory design, file placement, or structural refactoring involving process organization. Do not apply solely for unrelated styling or an isolated logic change.

## Core Principles

- Inspect applicable `AGENTS.md`, process entrypoints, imports, IPC wiring, and build configuration before changing structure.
- Treat example layouts as optional and preserve the existing toolchain's conventions.
- Keep process-specific implementations separate and shared contracts independent of them.
- Make the smallest useful change without weakening process isolation or validation.

## Reference Routing

Start at [references/README.md](./references/README.md), then read only the relevant guidance for directory layout, process boundaries, IPC organization, or refactoring.

## Workflow

1. Map affected code to Main, Preload, Renderer, or a shared contract.
2. Select the relevant reference and plan the smallest structural change.
3. Update paths and imports while preserving IPC and application behavior.
4. Run relevant project checks and report changed paths and limitations.

## Cross-Skill Coordination

- This Skill owns Electron process organization and IPC placement.
- `react-project-structure` owns React-specific Renderer internals. Apply both when both concerns change.
- `code-style` owns code conventions and general module boundaries. Apply it when those concerns are part of the task.

## Restrictions

- Do not add privileged APIs or alter IPC contracts without an explicit request.
- Do not add dependencies or speculative shared layers for folder organization.
- Do not change UI, state, or business behavior during a structure-only task.
