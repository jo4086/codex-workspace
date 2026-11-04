# Hook Source Rules

This directory contains repository hook sources. `hooks.json` is the shared Codex and Distill lifecycle hook registration file; Git's `commit-msg` file is a native Git hook, invoked by Git with the message file path.

When adding or changing a lifecycle hook, update `hooks.json` in the same change with its event, matcher, command, and any required settings. When a new native Git hook needs agent integration, add an adapter for both Codex and Distill input and register it in `hooks.json`; keep Git's own input protocol in the native hook. Update the relevant tests and run `node --test hooks/hooks.json.test.mjs hooks/git/*.test.mjs`; the registry test must fail if a new `codex-*.mjs` handler lacks an entry.

Keep repository hook sources separate from active agent configuration. Shared deployment uses `~/.agents/hooks.json` and `~/.agents/hooks/`, with Codex and Distill pointing to the shared JSON. Do not install hooks, alter `.git` settings, or change active configuration unless explicitly requested.
