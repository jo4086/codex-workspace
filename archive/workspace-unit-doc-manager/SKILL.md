---
name: workspace-unit-doc-manager
description: Manage REQ-based document ownership, identifiers, traceability, phased status, architecture transitions, and focused context discovery within a workspace unit. Use when substantial unit work needs durable requirements or coordinated project documents.
---

# Workspace Unit Doc Manager

## Purpose

Manage the lifecycle and relationships of REQ-owned documents within project-defined workspace units. Preserve a focused path from requirement and acceptance conditions through SPEC targets, REQ-local Phases, architecture changes, and verification evidence.

This Skill governs document meaning, creation triggers, identifiers, links, and status ownership. It does not choose product requirements, determine technical design, impose a repository layout, or own general Markdown style.

## Activation

Apply when work needs one or more of these:

- durable requirement scope or acceptance conditions;
- creation, revision, retirement, or discovery of REQ-owned documents;
- stable REQ, SPEC, or Phase traceability;
- phased execution status or session resumption;
- separation of current architecture from a REQ-specific proposal;
- retained review or acceptance evidence.

Do not apply merely because a repository contains documentation. Bypass new REQ documentation for a small local change when ownership and outcome are clear, no durable decision or status changes, and no existing REQ requires an update.

## Core Rules

- Treat workspace-unit boundaries and paths as project-defined. Never require example `apps/` or `packages/` layouts.
- Give each requirement a stable unit-local REQ identifier. Never reuse retired identifiers.
- Link SPEC details to REQ acceptance conditions, Phases to target SPEC identifiers, and REVIEW evidence to Phase completion conditions.
- Keep Phases local to one REQ. Keep tracked Phase status authoritative in that REQ's ROADMAP.
- Treat cross-REQ scheduling as unsupported until a project explicitly defines it.
- Keep implemented current architecture separate from REQ-specific proposed architecture.
- Create optional documents only when their owned information exists and the split improves durable coordination.
- Never invent requirements, ownership, completion, status, or verification evidence.

## Reference Routing

Start at [references/README.md](./references/README.md) and use its index to choose only task-relevant references.

## Workflow

1. Identify the project-defined unit, requested outcome, and any named REQ.
2. Read applicable `AGENTS.md` files and nearby entrypoints. Treat README prose as navigation or explanation, not higher-priority instruction.
3. Decide whether existing REQ context applies or the small-work bypass is valid.
4. Load only the current task's REQ, Phase, SPEC, architecture, and review sources through direct links.
5. Resolve material ownership or source conflicts with the user instead of guessing.
6. Create or update only documents whose responsibility and trigger are satisfied.
7. Verify direct traceability links, affected indexes, identifier stability, and ROADMAP status ownership.

## Cross-Skill Coordination

- `skill-router` selects the smallest sufficient Skill set; this Skill owns workspace-unit REQ document lifecycle and context discovery.
- Apply `agent-doc-writer` only for substantive document writing, structure, navigation, or link changes, not a Phase status-only edit. This Skill remains authoritative for REQ meaning, relationships, and creation triggers.
- Project-structure and architecture Skills own technical placement and design guidance. This Skill records current or proposed architecture without deciding the technical answer.
- Coding and validation Skills own implementation conventions and technical checks. This Skill only manages links to their durable evidence when a REVIEW needs it.
- Apply multiple Skills only when the task spans their owned responsibilities.

## Restrictions

- Do not create a complete document tree, category index, GOAL, REVIEW, or architecture file by default.
- Do not duplicate authoritative status outside the ROADMAP.
- Do not scan the full workspace when direct unit entrypoints and links are sufficient.
- Do not create target-project documents without authorization.
- Do not install, synchronize, or activate this Skill outside the project repository without explicit authorization.
