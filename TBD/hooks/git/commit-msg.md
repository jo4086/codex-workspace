# Git commit-msg Hook Specification

**Status:** Implementation source specification

## Purpose

Validate a commit message subject using the path Git passes as the first argument to a `commit-msg` hook. The repository implementation is [hooks/git/commit-msg](../../../hooks/git/commit-msg). Do not install it into `.git/hooks` or change `core.hooksPath` as part of creating this source component.

The convention is owned by the [git-commit Skill specification](../../skills/git-commit/README.md). The hook enforces only the checks below; the Skill supplies Korean-centered writing guidance and optional body conventions.

## Validation Contract

| Check | Failure behavior |
| --- | --- |
| Type outside `feat`, `fix`, `refactor`, `perf`, `docs`, `style`, `test`, `build`, `ci`, `chore`, `revert` | Block |
| Scope contains anything other than lowercase English letters, digits, or hyphens, or is empty when parentheses are present | Block |
| Missing exact `: ` separator | Block |
| Empty or whitespace-only description | Block |
| Subject ends with a period (`.`) | Block |
| Subject exceeds 72 Unicode characters | Warn, then allow if no blocking error |
| Korean text presence | Do not check |

Accept either `type: description` or `type(scope): description`, with optional `!` immediately before `:`. Read only the first line as the subject. Preserve the message file and do not validate or rewrite the optional body, including a `BREAKING CHANGE:` footer.

## Expected Execution

- Git invokes the executable hook with the commit message file path as argument one.
- The hook exits nonzero for a blocking error and writes a useful diagnostic to stderr.
- A long subject emits a warning to stderr and exits zero if otherwise valid.
- A missing or unreadable message file fails with a diagnostic.
- The source hook remains inactive until separately installed or configured.

## Agent Integration

The repository [shared hook registry](../../../hooks/hooks.json) registers a `PreToolUse` Bash adapter for Codex and Distill. Deploy the JSON at `~/.agents/hooks.json` and scripts under `~/.agents/hooks/git/`. Point Codex's `~/.codex/hooks.json` and Distill's `~/.distill/hooks-paths` to the shared JSON. For direct `git commit` commands, the adapter applies the shared Git hook directory to that command only; Git then passes its own commit message file path to `commit-msg`. The adapter does not edit persistent Git configuration.

## Verification

- [x] Test valid messages with and without scope, `!`, and a body.
- [x] Test every blocking rule and a 73-character warning.
- [x] Test messages without Korean, missing file arguments, and unreadable paths.
- [x] Verify the hook is executable and does not modify the message file.
