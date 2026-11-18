---
name: skill-spec-designer
description: Draft a new Codex Skill specification or record a numbered change request for an existing Skill or Hook in TBD. Use when the user asks to plan a component before implementation.
---

# Skill Spec Designer

## Purpose

Turn the user's listed capabilities, rules, examples, and constraints into a new Skill specification or a numbered change request for an existing Skill or Hook in `TBD/`.

## Activation

Apply when the user asks to create or revise a TBD specification for a proposed Skill, or to plan a change to an existing Skill or Hook in TBD. Skill implementation and validation belong to `my-skill-creator`; Hook implementation needs its own owner.

## Core Principles

- Treat the user's information as the primary source; preserve substantive requirements and unresolved questions.
- Inspect repository instructions, relevant TBD documents, and related Skills before drafting.
- Distinguish confirmed requirements, agent proposals, examples, and pending decisions.
- Ask the user to settle consequential choices that depend on their intent. Use sub-agents for independent analysis when those choices remain after checking available sources or the request is too sparse to draft without substantial invention.
- Keep the specification sufficient for implementation without inventing requirements or unnecessary structure.

## Reference Routing

Start at [references/README.md](./references/README.md), then read [TBD Skill Specifications](./references/tbd-specifications.md) for the authoring, clarification, revision, and handoff procedure.

## Workflow

1. Extract and organize the user's notes; inspect related documents and ownership boundaries.
2. Resolve supported details and use the reference's clarification process for remaining consequential choices.
3. Write or revise the new Skill specification, or record an existing component change in its next numbered request file and index it from the component README.
4. Compare the result with the user's input, apply shared Markdown checks, and report remaining decisions.

## Cross-Skill Coordination

This Skill owns planning and request indexing in `TBD/`. `agent-doc-writer` owns generic Markdown preservation, length, splitting, and link rules; apply it without relaxing TBD source, status, decision, handoff, or validation requirements. `my-skill-creator` owns implementing and validating Skills under `skills/` and closes validated Skill request entries. Apply both planning and implementation Skills only when the user explicitly requests both, while keeping their outputs and validations separate.

## Restrictions

- Do not present an agent's or sub-agent's guess as the user's decision.
- Do not implement, install, synchronize, or activate a Skill while only writing its specification.
- Do not modify an implemented Skill solely to make a TBD draft match it.
