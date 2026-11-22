---
name: react-ui-style
description: Guidelines for creating and modifying React UI using consistent styling, layout, components, and interaction patterns.
---

# React UI Style

## 1. Purpose

Provide consistent design and implementation guidelines for React user interfaces.

Apply this skill when creating, modifying, or reviewing React UI components, layouts, styles, or interactions.

## 2. Technology Preferences

Preferred technologies:

- UI Framework: React
- Language: TypeScript
- Styling: Tailwind CSS
- Icons: Lucide React

### Technology Selection

1. Respect the project's existing technology stack.
2. Reuse installed libraries and shared components.
3. Prefer Tailwind CSS for styling when no established styling solution exists.
4. Prefer Lucide React when no icon library is established.
5. Do not introduce new dependencies without a clear requirement.
6. Do not migrate existing styling systems unless explicitly requested.

## 3. Design Principles

- Prioritize existing project architecture, components, and design conventions over default skill preferences.
- Maintain consistent visual hierarchy and spacing.
- Prefer reusable components and existing design tokens.
- Support responsive layouts and accessibility.
- Prevent unnecessary layout shifts.
- Preserve existing behavior and functionality.
- Avoid unnecessary decoration and complexity.

## 4. Reference Routing

For React UI design, styling, or interaction tasks:

1. Read `references/README.md`.
2. Identify the relevant reference category.
3. Follow the category index to locate applicable guidelines.
4. Read only the documents required for the task.
5. Avoid loading unrelated references.

When content images need enlargement or browsing as a gallery, use the Interactions index to read [Image Lightbox Gallery](./references/interactions/image-lightbox-gallery.md). Skip it for unrelated images and UI work.

## 5. Implementation Workflow

1. Inspect the existing project structure and conventions.
2. Identify the relevant reference documents.
3. Reuse existing components, tokens, and dependencies.
4. Implement only the requested UI changes.
5. Verify responsive behavior, accessibility, and layout stability.
6. Run relevant project checks when available.

## 6. Cross-Skill Coordination

- This skill owns React UI design, styling, and interactions.
- When a UI task requires creating or modifying routes,
  route-aware layouts, or navigation architecture,
  also apply the `react-router` skill if available.
- Do not load routing references for styling-only changes.
- Avoid duplicating routing architecture rules in this skill.

## 7. Restrictions

- Do not introduce unnecessary dependencies.
- Do not replace existing design systems without authorization.
- Do not modify unrelated components or business logic.
- Do not duplicate rules already defined in reference documents.
- Keep reference documents focused and preferably under 200 lines.
