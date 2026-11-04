# Extend or Review an Existing Skill

## Purpose

Change an existing Skill while preserving its established architecture and unrelated content.

## Extension Workflow

1. Enter through `SKILL.md` and follow its routing to the affected references.
2. Inspect callers, indexes, related Skills, and applicable instructions before moving or removing content.
3. Update only the references that own the requested behavior.
4. Add a category or reorganize references only when distinct responsibilities or document size justify it.
5. Update every dependent index and relative link.
6. Apply the [Skill validation standard](../standards/validation.md) to the changed Skill and affected behavior.

## Review Workflow

Apply the [Skill validation standard](../standards/validation.md) to the existing Skill and report findings without restructuring unless the user requests changes.

## Preservation Rules

Preserve existing invocation policy, optional frontmatter, user choices, and established conventions unless the request requires a change. Never regenerate a resource when doing so would erase unrelated fields or policy.
