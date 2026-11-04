# Shared Hook Deployment

The repository files in this directory are the source for a shared Codex and Distill hook setup. The active copy lives at `~/.agents/hooks.json`, with scripts under `~/.agents/hooks/`.

## Discovery

- Codex reads `~/.codex/hooks.json`. Link that path to `~/.agents/hooks.json` so edits to the shared JSON reach Codex without a second copy.
- Distill reads direct JSON files under its home `hooks/` directory and absolute paths listed in its `hooks-paths` file. Add the absolute path of `~/.agents/hooks.json` to `~/.distill/hooks-paths` instead of copying the JSON. If `DISTILL_HOME` or `GROK_HOME` changes Distill's home, use that home's `hooks-paths` file.
- Copy `git/commit-msg` and `git/codex-pre-tool-use.mjs` to `~/.agents/hooks/git/`. The JSON command uses this shared script path.

From the repository root, copy the source files into the shared location:

```sh
mkdir -p "$HOME/.agents/hooks/git"
cp hooks/hooks.json "$HOME/.agents/hooks.json"
cp hooks/git/commit-msg hooks/git/codex-pre-tool-use.mjs "$HOME/.agents/hooks/git/"
chmod +x "$HOME/.agents/hooks/git/commit-msg"
```

Then point `~/.codex/hooks.json` at the shared JSON. Preserve and merge any existing hook registrations before replacing that file. Add one line containing the absolute path to `~/.agents/hooks.json` to `~/.distill/hooks-paths`; preserve existing lines. Distill's `hooks-paths` entries must be absolute paths. Recopy changed scripts or JSON from this repository when updating the active shared installation.

## Behavior

The adapter handles Codex and Distill `PreToolUse` Bash inputs. For direct `git commit` commands, it sets `core.hooksPath` to the shared Git hook directory for that command. Git then invokes `commit-msg` with its message file path. This rewrite does not cover commands that invoke `git commit` indirectly, and it supersedes any other Git hook directory for the rewritten command.

After deployment, use Codex `/hooks` to review and trust the hook. Use Distill `/hooks-list` or `/hooks` to check discovery; global Distill hooks do not require project trust. Run `node --test hooks/hooks.json.test.mjs hooks/git/*.test.mjs` from the repository before synchronizing a change.
