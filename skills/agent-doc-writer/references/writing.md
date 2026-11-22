# Document Writing and Revision

## Responsibility

Apply these common checks when creating, revising, or splitting project or Skill Markdown. A document's domain owner and applicable project instructions determine its required content and format.

## Before Editing

1. Identify the requested change, intended readers, applicable `AGENTS.md`, existing document tree, and any document-specific rules.
2. Read the affected document and the entry points or links that lead to it. Locate confirmed requirements before moving or shortening content.
3. Give each piece of content one owning document. Use a link where another document needs to refer to it rather than repeating the full rule or explanation.

## Length and Splitting

- Prefer fewer than 200 lines per Markdown file as a review threshold. Do not delete important content or compress it until it becomes unclear merely to meet the threshold.
- Split when distinct responsibilities can stand on their own and separate documents make reading or maintenance easier. Move content without dropping requirements; provide an entry point and update links.
- Keep a longer cohesive document when splitting would break comprehension, duplicate necessary context, conflict with a required format, or work against an established project convention. Record the reason in the document or change report and keep the document navigable.
- Do not create a new directory or index just to make files shorter. Preserve the project's established structure unless the requested change requires a better one.

## Progress Checklists

- In GOAL, REQUEST, REVIEW, and similar documents that track work, decisions, acceptance, or verification over time, write each actionable or verifiable item as a Markdown task list item (`- [ ]`) by default. Apply the same rule to Phase completion conditions kept in a ROADMAP. Use a plain bullet or paragraph for context, rationale, evidence, and other text that has no meaningful completion state.
- Draft the checklist before the work or review begins when the items are known. Follow any document-specific format.

| Marker | State | Use |
| --- | --- | --- |
| `- [ ]` | Unchecked | Ordinary pending work. |
| `- [!]` | Important | Pending priority work or a mandatory check. |
| `- [x]` | Checked | Work that meets its completion condition and has been verified. |
| `- [c]` | Cancelled | Work explicitly removed from scope by a decision. |

- Move a pending item to checked only after verifying its completion condition. Record or link evidence near the item, especially for acceptance and REVIEW findings. Keep blocked, partial, or unverified work pending unless a decision cancels it. Record or link the decision for cancelled work and exclude cancelled items from completed work.
- GitHub Markdown displays `[!]` and `[c]` as literal text in list items.
- Preserve existing checked states when revising a document unless the underlying evidence changes. A checklist tracks its own items; it does not replace an authoritative status field or a domain Skill's rules for when a document is created.

## Review

Compare the result with the original document and user request. Check that confirmed information and instruction meaning survived, each document has a clear responsibility, repeated guidance has an owner, and any length exception has a reason. Then check affected links and indexes using [Navigation and Links](./navigation.md).
