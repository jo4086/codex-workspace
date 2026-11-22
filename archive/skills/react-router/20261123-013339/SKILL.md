---
name: react-router
description: >
  React Router architecture and implementation guidelines for React
  applications, including Web and Electron environments.
  Use when creating or modifying route configurations, nested layouts,
  router providers, navigation behavior, or routing architecture.
---

# React Router

## 1. Purpose

Provide consistent routing architecture and implementation guidelines for React applications using React Router.

Support Web and Electron environments while respecting existing project conventions and routing modes.

## 2. Core Principles

- Respect existing routing architecture and project conventions.
- Prefer centralized route configuration for new Declarative Mode projects.
- Separate route definitions, route rendering, and application initialization.
- Keep route definitions independent of the execution environment where practical.
- Prefer nested routes and shared layouts when appropriate.
- Avoid unnecessary routing abstractions and complexity.
- Preserve existing paths, navigation behavior, and application functionality.

## 3. Technology Stack

### Preferred Packages

- `react-router`: Primary routing package for React Router v7.
- `react-dom`: React DOM rendering.

### Package Rules

- Prefer `react-router` for new React Router v7 projects.
- Use `react-router-dom` when required by existing projects or compatibility.
- Reuse installed dependencies whenever possible.
- Do not install additional routing libraries unnecessarily.
- Respect the project's existing React Router version and routing mode.

### Routing Conventions

- Prefer `RouteObject[]` and `useRoutes()` for new Declarative Mode projects.
- Select router providers according to the execution environment.
- Preserve existing Data Mode and Framework Mode implementations.

## 4. Reference Routing

For React Router architecture, configuration, or navigation tasks:

1. Read `references/README.md`.
2. Identify the relevant routing concern.
3. Follow the reference index to locate applicable guidelines.
4. Read only the documents required for the task.
5. Combine references when the task spans multiple routing concerns.
6. Avoid loading unrelated references.

## 5. Implementation Workflow

1. Inspect the project's React Router version and routing mode.
2. Review the existing routing structure and conventions.
3. Identify the relevant reference documents.
4. Determine the appropriate routing architecture or implementation.
5. Implement only the requested changes.
6. Preserve existing route paths, layouts, and navigation behavior.
7. Validate routing behavior in the applicable environment.
8. Report validation results and unresolved issues.

## 6. Environment Compatibility

- Support both Web and Electron renderer applications.
- Do not assume the same router provider is appropriate for every environment.
- Consider deployment and URL handling requirements.
- Preserve compatibility between development and production environments.
- Respect Electron security boundaries.
- Do not migrate existing routing modes without authorization.

## 7. Cross-Skill Coordination

- This skill owns routing architecture, route configuration,
  navigation, and route-layout composition.
- When implementing or modifying the visual structure of React
  layout components, also apply the `react-ui-style` skill
  if available.
- Delegate component styling, Tailwind conventions,
  responsive design, and UI interactions to `react-ui-style`.
- Do not load UI styling references for routing-only changes.
- Avoid duplicating UI styling rules in this skill.
- Preserve existing project conventions when coordinating skills.

## 8. Restrictions

- Do not modify unrelated application code.
- Do not restructure routing architecture without a clear requirement.
- Do not change existing route paths without authorization.
- Do not replace established router providers unnecessarily.
- Do not introduce global navigation mechanisms without justification.
- Do not remove existing loaders, actions, or route error handling.
- Do not duplicate detailed reference guidelines in this file.
- Keep reference documents focused and preferably under 200 lines.
