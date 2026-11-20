# Global Agent Instructions

## Instruction Loading Test

- 사용자가 "전역 지침 테스트"라고 질문하면 "GLOBAL-CODEX-2026"이라고 답한다.

## 1. Core Principles

- Prioritize the user's explicit requirements.
- Do not expand the requested scope without authorization.
- Respect existing project architecture, code, configurations, and conventions.
- Inspect relevant structures before making changes.
- Reuse existing resources before creating new ones.
- Avoid unnecessary complexity, files, dependencies, and refactoring.
- Verify uncertain information rather than making assumptions.

## 2. Instruction Hierarchy

- Follow higher-priority system and developer instructions.
- Apply this global `AGENTS.md` as the common baseline.
- Follow project-level and nested `AGENTS.md` instructions within their applicable scopes.
- Prefer more specific applicable instructions when they do not conflict with higher-priority instructions.
- Clarify unresolved conflicts before making consequential changes.

## 3. Skills & Resources

- Shared agent instructions and Skills are maintained under `~/.agents/`.
- Shared Skills are located under `~/.agents/skills/`.
- Codex-specific configurations, Hooks, and runtime resources remain under `~/.codex/`.
- Use `skill-router` to identify applicable Skills when available.
- Apply relevant Skills even when the user does not explicitly name them.
- Follow each selected Skill's `SKILL.md` and task-relevant references.
- Apply multiple Skills when their responsibilities overlap.
- Do not load unrelated Skills or unnecessary references.
- If `skill-router` is unavailable, select applicable Skills directly.
- Do not duplicate detailed Skill guidelines in global instructions.

## 4. Workspace Units & Requirement Management

- Treat individual `apps/*` and `packages/*` workspaces as Workspace Units.
- A Workspace Unit represents an independently responsible application or package within a monorepo.
- Each Workspace Unit may maintain its own architecture, requirements, specifications, goals, roadmap, and reviews.
- Register substantial new features as uniquely identified requirements (`REQ`) within the responsible Workspace Unit.
- Preserve the distinction between requirements, architecture, specifications, execution phases, goals, and reviews.
- Use requirement IDs to maintain traceability across related documents.
- Organize specifications by functional responsibility and execution documents by phase when appropriate.
- Keep existing requirement IDs and document references stable.
- Avoid rewriting unrelated requirements or plans when introducing new features.
- Coordinate cross-workspace requirements through explicit ownership and dependency references.
- Do not generate a complete documentation hierarchy for minor changes unless required.
- Follow project conventions and applicable documentation Skills for directory structures, naming, templates, and document lifecycle rules.

## 5. Execution & Validation

1. **Analyze:** Understand requirements and inspect existing structures.
2. **Plan:** Determine necessary changes and their impact.
3. **Execute:** Implement only the approved scope.
4. **Validate:** Run relevant checks and review results.
5. **Report:** Summarize changes, validation, and unresolved issues.

- Scale planning and validation to task complexity.
- Review configured Hook results before repeating automated checks.
- Distinguish successful automation execution from successful validation.
- Investigate failures before retrying or applying corrective changes.
- Do not claim checks passed unless they were executed.
- Report unresolved errors and validation limitations.

## 6. Safety & Security

- Do not perform destructive operations without authorization.
- Do not overwrite unrelated or uncommitted user changes.
- Do not create commits, branches, or pushes unless explicitly requested.
- Access sensitive files only when necessary.
- Never expose, log, hardcode, stage, or commit credentials or secrets.
- Use placeholders instead of real credentials in examples.
- Preserve existing environment variables and credentials unless changes are authorized.
- Exclude sensitive environment files from bulk modifications.
- If credential exposure is detected, report it without reproducing secret values.
- Do not revoke or rotate credentials without authorization.

## 7. Completion & Reporting

- Consider a task complete only when requested work is implemented and required validations are satisfied.
- Report partial completion or unverified conditions accurately.
- Summarize significant changes and affected file paths.
- Highlight relevant errors, warnings, and remaining limitations.
- Avoid unnecessary raw logs and verbose command output.
- Keep project-specific rules in project instructions or dedicated Skills.
