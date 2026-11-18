# Skill Spec Designer — Creation Specification

## 1. Overview

- **Name:** `skill-spec-designer`
- **Status:** Planned (TBD)
- **Type:** Meta Skill
- **Target:** `TBD/skills/<skill-name>/README.md` in `codex-workspace`

Turn the user's notes about a Skill they want to create into `TBD/skills/<skill-name>/README.md`. The user may provide a list of capabilities, rules, examples, and constraints without organizing them as a specification. This Skill structures that information into an actionable plan for later implementation.

## 2. Purpose and Activation

Use this Skill when the user lists information about a Skill they want to create and asks the agent to turn it into a TBD specification. Also use it when the user provides more information for an existing TBD specification. The primary output is `TBD/skills/<skill-name>/README.md`, unless the user names another destination.

Do not activate it merely because the user asks to implement, validate, or maintain an existing Skill. Those tasks belong to `my-skill-creator`.

## 3. Specification Principles

- Treat the user's listed information as the primary source. Preserve every substantive requirement, constraint, example, and unresolved question.
- Inspect `TBD/README.md`, related TBD specifications, existing Skills, and relevant conventions before drafting.
- Reuse a related specification's structure when it fits the new Skill; there is no single required heading template for every TBD document.
- Organize fragmented notes into coherent sections without changing their meaning or silently adding requirements.
- Separate confirmed user requirements, design proposals inferred from repository conventions, and unresolved decisions.
- Ask the user about choices that depend on their intent. Do not present an agent's guess or a sub-agent's suggestion as the user's decision.
- When a consequential choice depends on user intent, or the notes are too sparse to draft without substantial invention, use sub-agents to examine interpretations and missing requirements before discussing the choice with the user.
- State the Skill's distinct responsibility and its boundary with related Skills.
- Keep the specification sufficient for implementation without prescribing unnecessary files, categories, or examples.
- Prefer English Markdown unless the user requests another language.
- Keep the document focused and preferably under 200 lines; use linked, focused documents when the subject needs more detail.

## 4. Required Specification Content

Every new specification must make the following discoverable, using headings suited to its scope:

1. **Identity and status:** Proposed Skill name, purpose, and explicit planned or draft status.
2. **Outcome and scope:** What the Skill should help accomplish, tasks it covers, and meaningful exclusions.
3. **Activation:** Requests or conditions that should cause the Skill to be used.
4. **Ownership:** Related Skills, responsibility boundaries, and when coordination is needed.
5. **Expected workflow:** The main steps the implemented Skill should guide, including inputs and outputs where relevant.
6. **Implementation requirements:** Required guidance, behavior, constraints, and any known compatibility assumptions.
7. **Validation and completion:** Evidence that the future Skill meets the specification, including checks for its actual workflow.
8. **Open decisions:** Questions that materially affect implementation, with their impact on proceeding, or an explicit statement that none remain.

Capture exact paths, filenames, structure, or templates only when the user requires them or they materially constrain implementation. Mark illustrative examples as examples. If requirements need several documents, make the README an index with a read order and links to each required local document, as in `TBD/skills/project-structures/`.

## 5. Authoring Workflow

1. Extract the Skill name, intended result, capabilities, usage conditions, constraints, examples, and open questions from the user's notes, regardless of their order or format.
2. Review related TBD documents and implemented Skills for reusable patterns and ownership overlap.
3. Use the inspected sources to resolve supported facts. Identify remaining decisions that depend on the user's intent and gaps that would require substantial invented content. Use the clarification process below before settling those decisions.
4. Organize the confirmed information into a coherent specification. Resolve routine presentation choices from repository conventions; label substantive inferences as proposals.
5. Draft `TBD/skills/<skill-name>/README.md` with the required content above. Add supporting documents only when a single README would obscure separate responsibilities.
6. Compare the draft against the user's notes and clarification answers item by item so no substantive detail is lost, contradicted, or promoted from example to requirement.
7. Check that requirements are specific enough for `my-skill-creator` to implement and verify, while preserving unresolved decisions.
8. Verify status, paths, relative links, terminology, document length, and consistency with related Skills. If `TBD/README.md` already lists the specification, update its entry when the name or path changes; add an entry only when its current indexing practice calls for one.
9. Report the created or revised specification and any unresolved decisions.

For an existing specification, preserve confirmed requirements and unrelated material. Update only the requested or affected sections and their links. When a consequential confirmed requirement is revised or withdrawn, briefly record the reason in the affected section if the new text alone would obscure why it changed; do not require a separate change log.

## 6. Clarification and Sub-Agent Discussion

Check existing documents and stated requirements before asking questions. Ask the user directly when a simple answer resolves a minor missing detail.

When a choice that materially affects the Skill's purpose, scope, activation, behavior, restrictions, or output still depends on user intent after those checks, or the supplied information is so sparse that drafting would require substantial invention, start sub-agents to independently examine the goal, related Skills, plausible interpretations, and missing decisions. Compare their findings and identify disagreements. Then explain the consequential choice to the user, offer concrete options when useful, and continue the discussion until enough intent is known to write that part accurately. Sub-agent consensus is supporting analysis, not authorization to decide the user's intent; silence is not approval. Continue independent research and drafting of confirmed sections while awaiting answers.

Use this process only for consequential uncertainty. Routine wording, section order, and directly supported conventions do not require sub-agents or user questions. If sub-agents are unavailable, perform the same analysis directly and report that limitation when it affects the result.

## 7. Coordination with `my-skill-creator`

`skill-spec-designer` owns the planning document in `TBD/`. `my-skill-creator` owns conversion of that document into an implemented Skill under `skills/`, including reference structure, `SKILL.md`, and implementation validation. The specification should express required outcomes and constraints; the implementer may choose the smallest compatible structure unless the specification requires named files.

Do not automatically implement, install, synchronize, or activate a Skill while writing its specification. Do not edit an implemented Skill solely to make a draft match it.

## 8. Proposed Skill Structure

```text
skill-spec-designer/
├── SKILL.md
└── references/
    ├── README.md
    └── tbd-specifications.md
```

The reference should own detailed guidance for analyzing requests, running clarification and sub-agent discussion, drafting a TBD specification, and reviewing an existing one. Keep the structure provisional; split the reference only if distinct workflows need separate guidance.

## 9. Completion Criteria

The future Skill is complete when:

- Its activation conditions and responsibility boundary are clear in `SKILL.md`.
- Its reference guidance can produce a specification with all required content while adapting to different Skill scopes.
- A representative unordered list of Skill requirements produces a usable `TBD/skills/<skill-name>/README.md` that preserves every substantive item without implementing the Skill.
- A sparse request or a consequential intent-dependent choice triggers sub-agent discussion and focused user clarification before affected requirements are finalized.
- A revision preserves existing confirmed requirements and makes the requested change.
- Metadata, reference links, Markdown structure, and workflow behavior pass the repository's Skill validation checks.

**Original specification status:** Historical plan; the [Skill](../../../skills/skill-spec-designer/SKILL.md) is implemented. The change request below is tracked separately.

## Change Requests

- [x] **2026-11-08:** [REQUEST01 — Incremental requests for existing components](./REQUEST01.md). Implemented and validated; checks are recorded in the request.
- [x] **2026-11-18:** [REQUEST02 — Maintain the TBD Skill status index](./REQUEST02.md). Implemented and validated; checks are recorded in the request.
