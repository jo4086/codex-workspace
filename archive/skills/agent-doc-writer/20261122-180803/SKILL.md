---
name: agent-doc-writer
description: Write, revise, split, and connect project or Skill Markdown with clear ownership and navigation. Use for substantive AGENTS.md, README.md, docs, references, or other documentation work.
---

# Agent Doc Writer

## Purpose

Guide the structure and navigation of Markdown documents that agents create or change in projects and Skills. This Skill owns common documentation practice; the user, project, and domain Skills own the content and required format of each document.

## Activation

Apply when a task materially involves authoring, revising, splitting, or linking documentation such as `AGENTS.md`, `README.md`, `GOAL.md`, `SPEC.md`, `ROADMAP.md`, `ARCHITECTURE.md`, `SKILL.md`, or files in `docs/` and `references/`. Do not apply to a code-only task merely because the project contains documentation.

## Core Principles

- Inspect applicable instructions, existing documents, links, and project conventions before editing.
- Preserve confirmed requirements and assign each piece of guidance to one owning document.
- Keep documents focused and navigable. Treat the 200-line preference as a review threshold, with justified exceptions rather than content loss.
- Follow document-specific and project-specific requirements where they prescribe a structure or index.
- Use checklists by default for actionable items in progress-tracking documents such as GOAL, REQUEST, and REVIEW; follow [writing and revision](./references/writing.md) for completion rules.
- Use valid relative links for local navigation; prefix current-directory and child-directory targets with `./`. Update affected links and indexes when documents change.

## Reference Routing

Start at [references/README.md](./references/README.md). Read only the guidance relevant to the task: common [writing and revision](./references/writing.md), [`AGENTS.md` boundaries](./references/agents.md), [README roles](./references/readmes.md), or [navigation and links](./references/navigation.md).

## Workflow

1. Identify the readers, requested change, applicable instructions, and existing document structure.
2. Choose the owning document and load only the relevant references and domain guidance.
3. Write or revise while preserving confirmed content and respecting specialized requirements.
4. Check document roles, links, affected indexes, length exceptions, and access to relevant material; report any limitation.

## Cross-Skill Coordination

- `skill-spec-designer` owns Skill requirement analysis and TBD specification content. Apply this Skill to its Markdown structure and links when needed.
- `my-skill-creator` owns managed Skill structure, required reference indexes, and Skill validation. Apply its specific rules first when writing Skill documents; use this Skill for general document decisions those rules leave open.
- Apply `workspace-unit-doc-manager` when work touches REQ-owned requirements, SPEC, architecture, ROADMAP, GOAL, or REVIEW meaning or Phase status.
- `skill-router` owns Skill selection. Domain Skills retain their own document-specific requirements.

## Restrictions

- Do not decide domain requirements or create documents solely to satisfy a generic layout.
- Do not treat README explanations as agent instructions or override applicable `AGENTS.md`.
- Do not replace a specialized Skill's required index with a shorter generic navigation route.
