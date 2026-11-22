---
name: workspace-unit-doc-manager
description: Start project, app, and package documentation under their own docs roots; manage substantial REQ-owned requirements, specifications, phased plans, goals, reviews, and architecture transitions.
---

# Workspace Unit Doc Manager

## Purpose

Manage the document lifecycle for substantial work owned by a project or one workspace unit. Keep requirements, revision feedback, implementation detail, phased status, completion criteria, verification, and current architecture traceable in the owner's documentation root without migrating valid history.

Apply this Skill when starting durable project, app, or package documentation, or when work needs durable REQ ownership, acceptance criteria, multiple phases or document types, Phase status changes, architecture transitions, legacy document integration, or focused discovery of unit context. Do not require a REQ for a small independent correction when the owner's established flow is sufficient.

## Core Principles

- Follow applicable root-to-target instructions and established unit conventions before applying default paths.
- Start durable documentation for a new project in its `docs/`; start each newly documented monorepo application or package in its own `apps/<app>/docs/` or `packages/<package>/docs/`. Continue that owner's lifecycle there; preserve established documentation roots.
- Select the document workflow per unit: preserve an established `REQUESTS` structure, and use `FEEDBACK` for meaningful revisions when establishing a new unit's documentation model. Do not mix the two structures in one unit.
- Use stable unit-local REQ IDs and REQ-local Phase IDs.
- Group new REQ-owned documents by document type and then REQ ID.
- Keep `ROADMAP.md` as the sole source of Phase status.
- Create optional FEEDBACK or legacy REQUESTS records, SPEC, detailed ROADMAP, GOAL, and REVIEW documents only when their content exists or separate ownership improves clarity.
- Keep current implemented architecture separate from proposals.
- Check completion or verification items only when supporting evidence exists.
- Preserve legacy paths, links, anchors, IDs, status, and evidence unless migration is explicitly authorized.
- Preserve unresolved non-blocking choices as choices. Do not convert uncertainty into requirements.

## Reference Routing

Start at [references/README.md](./references/README.md), then load only the guidance required for the task.

- Read [REQ Document Lifecycle](./references/document-lifecycle.md) for document-model selection, placement, ownership, creation triggers, identifiers, status, evidence, links, and legacy preservation.
- Read [Session Workflows](./references/session-workflows.md) for selective discovery, new-work and revision classification, Phase tracing and completion, target-instruction conflicts, and final checks.

## Workflow

1. Read applicable `AGENTS.md` files, identify whether the project or an application or package owns the work, and use its established documentation root or start its own `docs/` root.
2. Discover the relevant REQ through its index, then load only documents required by the task.
3. Classify new features, revisions to an existing REQ, and small independent corrections without inventing scope.
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

- Do not move established documentation into `docs/` without an authorized migration, or treat a project-level document as the lifecycle record for a newly documented app or package.
- Do not create every possible REQ document or a FEEDBACK or REQUESTS folder without a meaningful record.
- Do not introduce `FEEDBACK` into a unit already using the earlier `REQUESTS` model, or migrate its paths without an explicitly authorized migration scope.
- Do not duplicate Phase status outside `ROADMAP.md`.
- Do not mark planned, partial, failed, blocked, or unverified work complete.
- Do not rewrite current architecture to match an unimplemented proposal.
- Do not migrate legacy documents or alter target instructions without explicit authorization.
- Do not infer permission to edit a target project, install or activate this Skill, or modify active agent environments.
