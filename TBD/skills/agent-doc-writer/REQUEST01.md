# REQUEST01 — Add Important and Cancelled Checklist States

- **Requested** 2026-11-22
- **Status** Implemented and validated
- **Target** [Agent Doc Writer](../../../skills/agent-doc-writer/SKILL.md)
- **Implementation owner** `my-skill-creator`

## Purpose

Extend the shared Markdown progress checklist convention so readers can identify pending work that needs priority or mandatory review and items that have been dropped by decision.

## Confirmed Requirements

| Marker | Meaning | Use |
| --- | --- | --- |
| `- [ ]` | Unchecked | Ordinary work that remains to be done. |
| `- [!]` | Important | Pending work to prioritize or a check that must be performed. |
| `- [x]` | Checked | Work whose completion condition has been met and verified. |
| `- [c]` | Cancelled | Work that has been explicitly dropped from the scope. |

- [x] Apply these markers to actionable items in progress-tracking Markdown such as GOAL, REQUEST, REVIEW, and Phase completion lists in ROADMAP, subject to any document-specific format.
- [x] Count `- [!]` as pending until its completion is verified or a decision cancels the item. Preserve the distinction between completed and cancelled work when reviewing progress. A blocked or unverified item remains pending unless a decision removes it from scope.
- [x] Retain existing `- [ ]` and `- [x]` semantics, including the requirement for evidence of completion.

## Implementation and Validation

- [x] Add the shared marker definitions to [Progress Checklists](../../../skills/agent-doc-writer/references/writing.md#progress-checklists). Refer to that rule from affected domain guidance where needed. Keep Phase status and evidence rules in `workspace-unit-doc-manager` and use each specialized index's prescribed format.
- [x] Verify a representative checklist with all four markers, including an important verification that stays pending until evidence exists and a cancelled item that does not count as completed work.
- [x] Check Skill metadata, links, and Markdown formatting. Record evidence before marking this request complete.

## Rendering

`[!]` and `[c]` are literal markers in this documentation convention. GitHub Flavored Markdown renders them as text in list items because its task list syntax accepts whitespace or `x`/`X` inside the brackets. [GFM task list syntax](https://github.github.com/gfm/#task-list-items-extension)

## Validation Evidence

**2026-11-22.** A temporary checklist exercised all four markers. The important check started pending and moved to checked after verification. The cancelled check remained excluded from the completed count. Skill metadata validation, relative links and heading anchors, LF formatting, and `git diff --check` passed.
