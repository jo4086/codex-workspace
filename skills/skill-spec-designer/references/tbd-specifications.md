# TBD Skill Specifications

## Purpose

Turn the user's unordered notes about a proposed Codex Skill into an actionable `TBD/skills/<skill-name>/README.md`. For a requested change to an existing Skill or Hook, record a numbered request alongside its existing TBD plan. Preserve the user's intent while making requirements and open decisions clear to a later implementer.

## Gather and Interpret Inputs

1. Extract the proposed name, intended outcome, capabilities, activation conditions, boundaries, constraints, examples, and questions from the user's messages. Preserve substantive details even when they appear as fragments.
2. Read applicable repository instructions, `TBD/README.md`, related TBD specifications, and relevant implemented Skills. Use them to learn conventions and spot ownership overlap, not to replace the user's requirements.
3. Distinguish confirmed user requirements from conventions, agent proposals, illustrative examples, and unresolved decisions. Do not turn an example or proposal into a requirement without support.
4. Resolve routine wording, section order, and directly supported conventions without interrupting the user. Ask about a minor factual omission when a short answer is enough.

## Clarification and Sub-Agent Discussion

If a choice that materially affects purpose, scope, activation, behavior, restrictions, or output still depends on the user's intent after inspecting available sources, or the notes are so sparse that a draft would require substantial invention, start sub-agents to independently examine the goal, related Skills, plausible interpretations, and missing decisions. Compare their findings and disagreements. Use the analysis to ask focused questions and offer concrete options when useful.

Sub-agent agreement does not establish the user's intent. Continue discussing consequential choices with the user until the affected requirements can be written accurately; silence is not approval. While awaiting an answer, continue research and draft only confirmed sections. If sub-agents are unavailable, analyze the same questions directly and report the limitation when it affects the result.

Do not use sub-agents for routine formatting choices, facts already settled by the user, or minor omissions resolved by a direct question.

## Draft the Specification

Write the primary output to `TBD/skills/<skill-name>/README.md`, unless the user chooses another destination. Adapt headings to the Skill's scope rather than forcing a fixed template. Make these points discoverable:

1. Proposed name, purpose, and planned or draft status.
2. Intended outcome, included tasks, and meaningful exclusions.
3. Activation conditions.
4. Related Skills and responsibility boundaries, when relevant.
5. Expected inputs, outputs, and workflow.
6. Required behavior, constraints, and known compatibility assumptions.
7. Validation evidence and completion criteria for the future Skill.
8. Open decisions and their impact on implementation, or an explicit statement that none remain.

Keep requirements, proposals, and pending decisions visibly distinct. Specify exact paths, files, or structures only when the user requires them or they materially constrain implementation. Mark examples as examples. Prefer English Markdown unless the user requests another language. Do not add empty sections, speculative resources, or filler to satisfy a checklist.

## Revise an Existing Specification

Read the current document and any documents it requires before editing. Reconcile supplied changes against previously confirmed user requirements and leave unrelated TBD decisions unchanged. If a consequential confirmed requirement is revised or withdrawn, briefly record the reason in the affected section when the new wording alone would obscure the decision; a separate change log is unnecessary.

## Record a Change to an Existing Skill or Hook

1. Read the component's existing TBD README, request files, and implemented entrypoint. For a Skill use `TBD/skills/<name>/`; for a Hook use `TBD/hooks/<name>/`. Preserve the original specification and unrelated requests.
2. Create `REQUEST<next-number>.md` using the next available number in that component directory, unless the user specifies another filename. Do not reuse or overwrite a request file.
3. Record the request date and confirmed requirements. Keep examples, proposed implementation details, and unresolved decisions distinct. State the implementation owner and evidence needed for completion.
4. Add a dated, unchecked `- [ ]` link to the request in that component's README. Keep the index navigable as requests accumulate. The checkbox means implementation **and** validation are complete; recording a plan does not satisfy it.
5. In `TBD/skills/README.md`, add an unchecked entry for a new Skill plan. For an existing Skill request, uncheck its entry in the same change and link the pending request as the reason. Preserve other entries and their states.

`skill-spec-designer` records and indexes the request. `my-skill-creator` checks and closes implemented Skill requests after validation. Identify the responsible implementation workflow before a Hook request is marked complete.

## Review and Handoff

- Compare the draft against the user's notes and clarification answers item by item. Check that no substantive detail was lost, contradicted, or promoted from an example to a requirement.
- Verify that a later implementer can identify requirements, restrictions, completion criteria, and unresolved decisions without guessing. State the impact of each material open decision; do not invent a user choice merely to make the document look complete.
- Apply `agent-doc-writer`'s shared Markdown checks. Also check planned or draft status, exact paths, terminology, LF endings, and consistency with related Skills.
- If `TBD/README.md` already lists the specification, update its entry when the name or path changes. Add an entry only when its current indexing practice calls for one. Keep `TBD/skills/README.md` current for every Skill plan and request; the component README retains detailed state and evidence.
- Report the created or revised file and any decisions that remain open.

`skill-spec-designer` owns TBD planning documents. `my-skill-creator` owns implementation under `skills/`, including Skill structure, `SKILL.md`, and implementation validation. Do not implement, install, synchronize, or activate the proposed Skill as part of specification work.
