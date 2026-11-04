---
name: workspace-unit-doc-manager
description: Manage substantial workspace-unit work through REQ-owned requirements, specifications, phased plans, goals, reviews, architecture transitions, traceability, and focused context discovery.
---

# Workspace Unit Doc Manager

## Purpose

Manage the document lifecycle for substantial work owned by one workspace unit. Keep requirements, implementation detail, phased status, completion criteria, verification, and current architecture traceable without forcing one repository layout or migrating valid history.

Apply this Skill when work needs durable REQ ownership, acceptance criteria, multiple phases or document types, Phase status changes, architecture transitions, legacy document integration, or focused discovery of unit context. Do not require a REQ for a small independent correction when the unit's existing REQUESTS flow is sufficient.

## Core Principles

- Follow applicable root-to-target instructions and established unit conventions before applying default paths.
- Use stable unit-local REQ IDs and REQ-local Phase IDs.
- Group new REQ-owned documents by document type and then REQ ID.
- Keep `ROADMAP.md` as the sole source of Phase status.
- Create optional SPEC, REQUESTS, detailed ROADMAP, GOAL, and REVIEW documents only when their content exists or separate ownership improves clarity.
- Keep current implemented architecture separate from proposals.
- Check completion or verification items only when supporting evidence exists.
- Preserve legacy paths, links, anchors, IDs, status, and evidence unless migration is explicitly authorized.
- Preserve unresolved non-blocking choices as choices. Do not convert uncertainty into requirements.

## Reference Routing

Start at [references/README.md](./references/README.md), then load only the guidance required for the task.

- Read [REQ Document Lifecycle](./references/document-lifecycle.md) for placement, document ownership, creation triggers, identifiers, status, evidence, links, and legacy preservation.
- Read [Session Workflows](./references/session-workflows.md) for selective discovery, new-work classification, Phase tracing and completion, target-instruction conflicts, and final checks.

## Workflow

1. Read applicable `AGENTS.md` files and identify the owning workspace unit and its documentation root.
2. Discover the relevant REQ through its index, then load only documents required by the task.
3. Classify new work as a substantial REQ or a small independent request without inventing scope.
4. Apply the lifecycle rules for IDs, document triggers, links, evidence, and status ownership.
5. Preserve open choices and stop on consequential instruction, scope, ownership, permission, or compatibility conflicts.
6. Verify direct links, affected indexes, ID consistency, checklist evidence, Phase status, architecture truth, and legacy preservation.
7. Report changed documents, checks, unresolved choices, conflicts, and unverified conditions.

## Cross-Skill Coordination

- `skill-router` owns Skill selection and coordination; this Skill owns workspace-unit REQ lifecycle and focused context discovery.
- `agent-doc-writer` owns general Markdown structure, revision, checklists, and navigation; this Skill owns document meaning, REQ placement, traceability, Phase status, and lifecycle triggers.
- `skill-spec-designer` owns Skill specifications under `TBD/`; it does not own workspace-unit feature SPEC documents.
- `my-skill-creator` owns implementing and validating Skills; this Skill governs target workspace-unit documents, not Skill construction.
- Project-structure and technical domain Skills own implementation architecture guidance. This Skill records current architecture and proposals without deciding their technical content.

Apply multiple Skills only when the task spans their responsibilities. Keep detailed rules in their owning Skill rather than copying them.

## Restrictions

- Do not force an `apps/electron/docs/` layout; adapt the lifecycle to the owning unit's established documentation root.
- Do not create every possible REQ document or a REQUESTS folder without individual request records.
- Do not duplicate Phase status outside `ROADMAP.md`.
- Do not mark planned, partial, failed, blocked, or unverified work complete.
- Do not rewrite current architecture to match an unimplemented proposal.
- Do not migrate legacy documents or alter target instructions without explicit authorization.
- Do not infer permission to edit a target project, install or activate this Skill, or modify active agent environments.
