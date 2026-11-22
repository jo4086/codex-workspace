# REQUEST04 — Record ROADMAP and GOAL Before Implementation

- **Requested** 2026-11-22
- **Status** Implemented and validated
- **Target** [Workspace Unit Doc Manager](../../../skills/workspace-unit-doc-manager/SKILL.md)
- **Implementation owner** `my-skill-creator`

## Purpose

Make written planning a prerequisite for implementation in a project or Workspace Unit. The agent prepares or verifies the relevant planning documents before making implementation changes, even when the user omits document names from the request.

## Confirmed Requirements

- [x] Apply the planning prerequisite to implementation requests from chat and from [user-written request documents](./REQUEST03.md), including small corrections. Route to the workflow based on the requested work itself.
- [x] After inspecting the request and affected project context, ensure the owner's `ROADMAP.md` and applicable `GOAL` document cover the requested work before editing implementation files. Record the work's scope and sequence in the ROADMAP and its deliverables and verifiable completion conditions in the GOAL. An internal plan or chat summary alone leaves this prerequisite unmet.
- [x] Reuse applicable planning entries when their scope and completion conditions already cover the requested work. Update them before implementing scope changes. Keep planning proportionate to the task and use brief entries for small changes. Continue the existing rules for when a new REQ, detailed Phase plan, or SPEC is warranted.
- [x] For small, clearly scoped work, proceed with implementation and verification in the same task once the documents are ready. For a broad `docs/user/` submission, prepare the documents and wait for the user's direction to implement, as specified in [REQUEST03](./REQUEST03.md).

## Proposed Implementation

- Add a short routing instruction to the applicable `AGENTS.md` so the workflow is selected before implementation begins. Update the `skill-router` routing criteria to recognize implementation requests that do not name planning documents. Keep planning details in `workspace-unit-doc-manager`.
- In `workspace-unit-doc-manager`, update activation, lifecycle creation triggers, and session order together. Keep Phase status in `ROADMAP.md` and use unchecked completion conditions in the GOAL until verified.
- For a small correction without a REQ, use a short ROADMAP entry linked to a brief GOAL in the owner's existing documentation layout. For REQ-owned work, reuse the applicable Phase and GOAL paths. For work already covered by current documents, verify coverage before taking the next implementation step.
- Apply the prerequisite when the task includes implementation changes. A question, read-only investigation, or request to prepare a plan can be handled directly. Planning documents are the first write when they need to be created or updated for implementation.
- At implementation time, inspect the repository's instruction template and the target's applicable instructions. Changes to deployed agent instructions require authorization for that environment.

## Validation

- [x] Verify that a plain chat request to implement a feature routes to the Skill and has both planning records in place before the first implementation edit.
- [x] Verify that a small correction follows the same order with brief documentation, and that a task covered by an existing plan reuses it.
- [x] Verify that a broad `docs/user/` request leaves the implementation pending after the documentation is prepared.
- [x] Verify that read-only and planning-only requests can be handled directly and that the lifecycle still preserves established IDs, links, and status ownership.
- [x] Validate the updated Skill and routing references and record workflow evidence before marking this request complete.

## Validation Evidence

**2026-11-22.** Reviewed chat routing through the global instruction template, router, and Skill. Temporary feature and correction walkthroughs put ROADMAP and GOAL before the implementation edit. Reviewed plan reuse and read-only and planning-only routing. The broad intake walkthrough left the Phase and GOAL pending and preserved IDs, source links, and ROADMAP status ownership. Skill metadata validation, local links, LF formatting, and `git diff --check` passed.
