# Extend or Review an Existing Skill

## Purpose

Change an existing Skill while preserving its established architecture and unrelated content.

## Extension Workflow

1. When implementing a numbered TBD change request, read `TBD/skills/<skill-name>/README.md` and the selected `REQUEST*.md` before editing. Keep earlier requests and the original specification available.
2. Enter through `SKILL.md` and follow its routing to the affected references.
3. Inspect callers, indexes, related Skills, and applicable instructions before moving or removing content.
4. Update only the references that own the requested behavior.
5. Add a category or reorganize references only when distinct responsibilities or document size justify it.
6. Update every dependent index and relative link.
7. Compare the result against each selected request requirement and apply the [Skill validation standard](../standards/validation.md) to the changed Skill and affected behavior.
8. Only after full implementation and validation, mark the selected dated entry in its TBD README `- [x]` and record or link the checks performed. Leave partial or unverified requests unchecked; update each request checklist item only after its condition is verified.

The TBD request retains its original date and wording as the requirement source. Request creation and indexing belong to `skill-spec-designer`; Hook implementation needs its own owner.

## Review Workflow

Apply the [Skill validation standard](../standards/validation.md) to the existing Skill and report findings without restructuring unless the user requests changes.

## Preservation Rules

Preserve existing invocation policy, optional frontmatter, user choices, and established conventions unless the request requires a change. Never regenerate a resource when doing so would erase unrelated fields or policy.
