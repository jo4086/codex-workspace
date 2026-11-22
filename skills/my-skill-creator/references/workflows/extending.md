# Extend or Review an Existing Skill

## Purpose

Change an existing Skill while preserving its established architecture and unrelated content.

## Extension Workflow

1. When implementing a numbered TBD change request, read the component README and the selected request. Before editing, apply [Resolve conflicting requests](#resolve-conflicting-requests) to other requests governing the same behavior.
2. Enter through `SKILL.md` and follow its routing to the affected references.
3. Inspect callers, indexes, related Skills, and applicable instructions before moving or removing content.
4. Update only the references that own the requested behavior.
5. Add a category or reorganize references only when distinct responsibilities or document size justify it.
6. Update every dependent index and relative link.
7. Compare the result against each selected request requirement and apply the [Skill validation standard](../standards/validation.md) to the changed Skill and affected behavior.
8. Only after full implementation and validation, mark the selected dated entry in its TBD README `- [x]` and record or link the checks performed. Leave partial or unverified requests unchecked; update each request checklist item only after its condition is verified.
9. Review all work for that Skill listed in its TBD README. Check its `TBD/skills/README.md` entry only when the original plan and every applicable request are implemented and validated. Otherwise leave the entry unchecked and link the remaining work. A `SKILL.md` alone does not prove that all TBD work is complete.

The TBD request retains its original date and wording as the requirement source. Request creation and indexing belong to `skill-spec-designer`; Hook implementation needs its own owner.

## Resolve conflicting requests

Use the component index to find related requests. Carry compatible requirements forward. Resolve a conflict when satisfying one requirement would violate another under the same conditions.

- If the user clearly withdrew a requirement or adopted a replacement, apply that decision directly. Request order, dates, and tentative suggestions alone do not establish a choice.
- If intent is unclear, name the conflicting request IDs, explain what each would change, and ask which behavior to keep. Preserve both statuses and defer the affected implementation until the user answers. Either request may survive.
- Preserve request files, IDs, and validation history. For a fully withdrawn request, mark its status cancelled and move its dated link under `### Cancelled` in the component README with `- [c]`, the reason for the decision, and a link to the surviving request when applicable. For partial withdrawal, mark only the affected item `[c]` and record the reason beside it. Keep independent requirements active.
- Implement and validate the surviving scope. Exclude cancelled items from outstanding work when updating the component and parent Skill indexes.

## Review Workflow

Apply the [Skill validation standard](../standards/validation.md) to the existing Skill and report findings without restructuring unless the user requests changes.

## Preservation Rules

Preserve existing invocation policy, optional frontmatter, user choices, and established conventions unless the request requires a change. Never regenerate a resource when doing so would erase unrelated fields or policy.
