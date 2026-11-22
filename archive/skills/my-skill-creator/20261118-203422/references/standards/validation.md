# Skill Validation Standard

## Scope

Validate newly created Skills before handing them off. For a modified Skill, validate the changed behavior and every affected route or document. For an existing Skill under review, assess it without editing unless the user requests a correction. Use the target task and environment when judging applicability; a Skill can be usable for one task and irrelevant or limited for another.

## Validation Areas

| Area | Verify |
| --- | --- |
| Structure | Required `SKILL.md`, supported directories and metadata, valid frontmatter, and directory-name alignment. Run the available Skill validator; inspect what it does not cover. |
| References | Every routed reference exists, indexes reflect actual documents, relative links resolve from their source files, and routed targets contain usable content. |
| Documentation | Required Skill instructions remain independently actionable, `SKILL.md` and references respect their content boundaries, and general Markdown checks from `agent-doc-writer` pass. |
| Compatibility | Instructions, metadata, scripts, dependencies, and environment assumptions match the supported Codex Skill format and the intended runtime. Mark unverified requirements explicitly. |
| Cross-Skill Coordination | Related Skills have clear ownership; routing does not duplicate or contradict another Skill's technical guidance. |
| Usability | Activation conditions identify intended tasks, routing leads to actionable guidance, and any required script or workflow works for a representative task and relevant failure case. |

Structural validation alone does not establish usability. Verify behavior through the surface the Skill actually instructs agents to use when practical; report what was not exercised.

## Applicability Status

Assess the Skill against the current task after checking its activation conditions and required environment.

| Status | Meaning | Action |
| --- | --- | --- |
| Applicable | Skill is relevant and usable | Apply normally |
| Not Applicable | Skill is unrelated to the task | Skip without modification |
| Degraded | Skill is partially usable | Apply supported parts and report limitations |
| Blocked | Required conditions are not satisfied | Stop Skill-dependent operations and report the cause |

Do not treat a missing optional resource as a blocker. Identify the specific required condition before assigning Blocked; unrelated work may continue when safe.

## Improvement Policy

- Distinguish a reusable Skill defect from a limitation of the current project, toolchain, or environment. Record evidence and scope before proposing a change.
- Do not modify a Skill solely because it is Not Applicable or because an environment-specific requirement is unavailable.
- Preserve existing behavior, public guidance, and invocation policy when correcting a defect; change only what the correction requires.
- Revalidate affected documents, routes, and behavior after a modification.
- Do not automatically modify, install, synchronize, or deploy Skills without authorization for that action.

Report the applicable status, checks performed and their outcomes, remaining limitations, and any defect that needs a separate decision or correction.
