# REQUEST06 — Brief Next and Remaining Work from Existing Documents

- **Requested:** 2026-11-23
- **Status:** Implemented and validated
- **Target:** [Workspace Unit Doc Manager](../../../skills/workspace-unit-doc-manager/SKILL.md), coordinated with [Skill Router](../../../skills/skill-router/SKILL.md)
- **Implementation owner:** `my-skill-creator`

## Purpose and Context

Recognize requests to explain upcoming or remaining project work as requests for a document-grounded briefing, including in a new session without prior conversation context.

The user reports that “다음 작업 진행해줘” still starts document discovery and implementation, while “다음 작업 브리핑” can receive “다음 작업 브리핑을 보내주세요.” instead of a briefing. Recent routing and activation changes emphasize implementation and allow read-only requests to proceed directly. These are suspected contributing factors, not a proven cause of that response.

## Confirmed Requirements

- [x] Recognize the intent to explain next or remaining work without requiring exact keywords, a REQ ID, or document filenames. Illustrative requests include “다음 작업 브리핑”, “남은 작업 브리핑”, “남은 작업 알려줘”, and “이제 뭘 하면 돼?”.
- [x] Route these requests through `skill-router` to the document discovery guidance in `workspace-unit-doc-manager`, including when they are the first request in a new session.
- [x] Identify the owning project or Workspace Unit and its existing documentation entrypoints. Read its relevant index, ROADMAP, and applicable GOAL; follow links to requirements, Phase plans, or REVIEW when needed to explain scope, dependencies, or verified completion. Preserve existing document locations and avoid reading all historical documents by default.
- [x] Explain remaining work, the recommended next work and its rationale, and relevant prerequisites or blockers. Cite the source documents and distinguish documented status from inference, missing evidence, or conflicting records. Do not present completed or cancelled work as pending.
- [x] Search the available documents before asking for information. Do not ask the user to supply the briefing they requested. Ask a focused question only when a missing fact or unresolved ownership prevents a reliable answer; report what can already be established.
- [x] Treat a briefing-only request as read-only. Do not begin implementation, create planning records, or change completion states solely because a briefing was requested.
- [x] Clarify that the read-only exception in [REQUEST04](./REQUEST04.md) waives implementation-planning writes, not the existing-document reads needed to answer. Preserve the working implementation flow for requests such as “다음 작업 진행해줘” and the submission intake rules in [REQUEST03](./REQUEST03.md) and [REQUEST05](./REQUEST05.md).

## Proposed Implementation

- Restore explicit next/remaining-work discovery intent in the router's selection criteria and the manager's description and activation guidance.
- Add a focused briefing branch to the existing session discovery reference, with task-relevant reference routing. Keep detailed reading and reporting behavior owned by the manager rather than duplicating it in the router.
- Narrow the wording of the read-only exception so it cannot reasonably imply skipping evidence gathering.

## Validation Required Before Completion

- [x] In a fresh-session scenario with existing documents, verify the illustrative briefing requests select the discovery flow and produce a source-grounded answer without asking the user to provide a briefing.
- [x] Use documents containing completed, pending, blocked, and cancelled items; verify the reported remaining work and next recommendation respect evidence and dependencies.
- [x] Verify missing or conflicting documents produce explicit uncertainty and only necessary clarification, without invented work or completion claims.
- [x] Verify a briefing-only scenario makes no implementation or document-state changes, while “다음 작업 진행해줘” still follows the existing implementation and planning workflow.
- [x] Validate affected Skill metadata, links, and routing consistency; record scenario evidence before marking this request complete.

## Validation Evidence

**2026-11-23.** Reviewed the four illustrative Korean requests as fresh-session intents through the updated router row, Skill activation, and briefing workflow. A temporary documentation fixture contained a completed Phase with REVIEW evidence, a dependent pending Phase and GOAL, a blocked Phase, and a cancelled Phase. The workflow selected the pending Phase as next, retained the blocked Phase as remaining with its missing decision, and excluded completed and cancelled Phases from pending work. File hashes before and after the read-only walkthrough were identical. Missing ownership and conflicting-record cases followed the explicit uncertainty and focused-question rule. The existing implementation branch still routes through ROADMAP and GOAL planning, and the `docs/user/` intake references remain unchanged. `quick_validate.py` passed for `workspace-unit-doc-manager` and `skill-router`; 15 affected Markdown files passed non-example local-link checks; LF formatting and `git diff --check` passed.

## Scope and Open Decisions

This request records the briefing enhancement only. No product decision remains open.
