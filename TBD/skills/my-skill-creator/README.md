# My Skill Creator

## 1. Overview

**Name:** `my-skill-creator`  
**Status:** Planned (TBD)  
**Type:** Meta Skill  
**Target:** Codex Skills

`my-skill-creator` is a custom Skill for creating, extending, restructuring, and validating Codex Skills according to the conventions established in `codex-workspace`.

Its purpose is to ensure that all managed Skills follow consistent directory structures, reference hierarchies, documentation formats, development workflows, and quality standards.

This document serves as the implementation specification for the future Skill.

## 2. Objectives

- Standardize the creation and maintenance of Codex Skills.
- Enforce a reference-first development workflow.
- Maintain consistent `SKILL.md` and `README.md` structures.
- Organize references by responsibility and complexity.
- Keep documentation concise, modular, and reusable.
- Maintain accurate reference indexes and relative links.
- Identify related Skills and define Cross-Skill coordination.
- Support incremental changes without unnecessary restructuring.
- Preserve existing project conventions and user requirements.

## 3. Supported Workflows

### 3.1. Create from TBD

Convert a planned Skill specification into an implemented Skill.

1. Read the corresponding `TBD/skills/<skill-name>/README.md`.
2. Identify requirements, constraints, and unresolved decisions.
3. Inspect existing Skills and related conventions.
4. Define the Skill's responsibilities and reference hierarchy.
5. Implement references and indexes before `SKILL.md`.
6. Validate the implementation against the original specification.
7. Preserve unresolved requirements rather than inventing decisions.

### 3.2. Create from User Request

Create a new Skill from explicit user instructions.

1. Analyze the requested purpose and responsibilities.
2. Inspect related Skills and existing conventions.
3. Identify potential responsibility overlaps.
4. Design an appropriate reference structure.
5. Implement references from the lowest level upward.
6. Create `SKILL.md` after completing the references.
7. Validate the resulting Skill.

### 3.3. Extend Existing Skill

Modify an existing Skill without unnecessarily changing its architecture.

Supported operations include:

- Adding a new reference document.
- Adding a new reference category.
- Updating existing guidelines.
- Reorganizing references when justified.
- Updating reference indexes and links.
- Introducing or revising Cross-Skill coordination.

Inspect the existing structure before making changes. Preserve unrelated content and established conventions.

### 3.4. Review Existing Skill

Review an existing Skill for:

- Directory and metadata compatibility.
- Documentation consistency.
- Reference responsibility boundaries.
- Missing or outdated index entries.
- Broken relative links.
- Duplicate or conflicting guidelines.
- Document length violations.
- Cross-Skill responsibility overlaps.

Do not automatically restructure a Skill unless requested.

## 4. Target Skill Structure

### 4.1. Basic Structure

```text
skill-name/
├── SKILL.md
└── references/
    ├── README.md
    ├── topic-a.md
    └── topic-b.md
```

### 4.2. Hierarchical Structure

Use subdirectories when references contain distinct responsibility categories.

```text
skill-name/
├── SKILL.md
└── references/
    ├── README.md
    ├── foundations/
    │   ├── README.md
    │   ├── layout.md
    │   └── typography.md
    └── interactions/
        ├── README.md
        ├── navigation.md
        └── overlays.md
```

### 4.3. Structure Rules

- `SKILL.md` is the Skill's primary entry point.
- `references/README.md` is the root reference index.
- Every reference category directory must contain a `README.md` index.
- Create category directories only when justified by distinct responsibilities.
- Keep related guidelines together without creating excessively large documents.
- Do not create unnecessary placeholders or empty reference categories.
- Follow the existing structure when extending an established Skill.

## 5. Development Order

For new Skills, follow this sequence:

1. Inspect existing conventions and related Skills.
2. Define purpose, scope, and responsibility boundaries.
3. Identify potential Cross-Skill relationships.
4. Design the complete reference hierarchy.
5. Write individual reference documents.
6. Write category-level `README.md` indexes.
7. Write the root `references/README.md`.
8. Write `SKILL.md` last.
9. Validate structure, documentation, and compatibility.

For existing Skills, update only the affected references and their dependent indexes.

## 6. Documentation Standards

### 6.1. General Rules

- Use English Markdown unless otherwise requested.
- Prefer a maximum of 200 lines per documentation file.
- Treat the 200-line limit as a default validation requirement.
- Split oversized documents by responsibility instead of removing important content.
- Allow exceptions only when justified and documented.
- Maintain consistent headings, terminology, and formatting.
- Avoid duplicating guidelines across documents.
- Distinguish mandatory rules from recommendations and examples.

### 6.2. SKILL.md

`SKILL.md` should primarily define:

- Required metadata and Skill identity.
- Purpose and activation conditions.
- Core principles.
- Reference routing.
- Implementation workflow.
- Cross-Skill coordination when applicable.
- Restrictions.

Detailed implementation rules belong in reference documents.

### 6.3. Root Reference Index

`references/README.md` should use the following structure:

1. `# Reference Index`
2. `## Purpose`
3. `## Reference Categories` or `## References`
4. `## Usage`

Use a Markdown table containing category names, descriptions, and relative links.

### 6.4. Category Reference Index

Each category-level `README.md` should use:

1. `# <Category> Reference Index`
2. `## Purpose`
3. `## References`
4. `## Usage`

The reference table should contain:

| Column         | Description                         |
| -------------- | ----------------------------------- |
| Reference      | Relative link to the document       |
| Responsibility | Guidelines owned by the document    |
| When to Read   | Conditions for loading the document |

Indexes must reflect actual files and must be updated whenever references are added, renamed, moved, or removed.

### 6.5. Individual References

Each reference should:

- Define a focused responsibility.
- Explain relevant requirements and implementation guidelines.
- Respect existing project conventions.
- Include examples only when they improve clarity.
- Avoid repeating content owned by another reference.
- Remain understandable when read independently.

## 7. Cross-Skill Coordination

When a Skill overlaps with another Skill:

1. Identify the related Skill.
2. Determine which Skill owns each responsibility.
3. Define when both Skills should be applied.
4. Document coordination in `SKILL.md` when necessary.
5. Keep detailed guidelines in their owning Skills.
6. Avoid duplicating rules across Skills.

A Cross-Skill reference is coordination guidance and does not guarantee automatic activation.

## 8. Planned Implementation Structure

```text
my-skill-creator/
├── SKILL.md
└── references/
    ├── README.md
    ├── workflows/
    │   ├── README.md
    │   ├── from-tbd.md
    │   ├── from-request.md
    │   └── extending.md
    ├── standards/
    │   ├── README.md
    │   ├── structure.md
    │   ├── documentation.md
    │   ├── indexes.md
    │   └── cross-skills.md
    └── templates/
        ├── README.md
        ├── skill.md
        ├── reference.md
        └── index.md
```

This structure is the initial implementation plan and may be refined if justified by the final requirements.

## 9. Validation Requirements

Before considering a Skill complete, verify:

- Required metadata and supported Codex structure.
- Correct reference directory organization.
- Presence of required `README.md` indexes.
- Accurate relative links and index entries.
- Consistent documentation templates.
- Compliance with the 200-line documentation limit or documented exceptions.
- Clear responsibility boundaries.
- Absence of unnecessary duplication.
- Appropriate Cross-Skill coordination.
- Consistency with the original TBD specification or user request.

Report unresolved requirements and any checks that could not be performed.

## 10. Restrictions

- Do not invent unsupported Codex features or metadata.
- Do not override explicit user requirements with default templates.
- Do not create unnecessary directories or reference documents.
- Do not restructure unrelated Skills.
- Do not duplicate detailed guidelines across references.
- Do not silently discard TBD requirements.
- Do not automatically install, synchronize, or activate generated Skills.
- Do not modify the active `~/.codex` environment without authorization.

## 11. Completion Criteria

The Skill is considered implemented when:

- All planned reference documents and indexes are created.
- `SKILL.md` correctly routes to the relevant references.
- The supported workflows are documented.
- Documentation templates and structural conventions are defined.
- Structural and documentation validation requirements are satisfied.
- The implementation is consistent with this specification.

**Original specification status:** Historical plan; the [Skill](../../../skills/my-skill-creator/SKILL.md) is implemented. The change request below is tracked separately.

## Change Requests

- [x] **2026-11-08:** [REQUEST01 — Implement and close numbered Skill requests](./REQUEST01.md). Implemented and validated; checks are recorded in the request.
- [x] **2026-11-18:** [REQUEST02 — Reference images for managed Skills](./REQUEST02.md). Implemented and validated; checks are recorded in the request.
- [x] **2026-11-18:** [REQUEST03 — Close the TBD Skill status index entry](./REQUEST03.md). Implemented and validated; checks are recorded in the request. REQUEST02 remains open.
- [x] **2026-11-23:** [REQUEST04 — Resolve conflicting TBD requests before Skill implementation](./REQUEST04.md). Implemented and validated.
