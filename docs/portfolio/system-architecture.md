# System Architecture

## Repository map

```text
codex-workspace/
├── AGENTS.md             project rules and environment boundary
├── skills/               implemented user-authored Skills and references
│   ├── skill-router/     task-to-Skill selection
│   ├── agent-doc-writer/ shared Markdown guidance
│   └── ...               domain-specific Skills
├── hooks/                Hook registry, adapter, native Git Hook, tests
├── TBD/                  specifications and incremental change requests
├── archive/              retained earlier material
└── docs/portfolio/       this analysis
```

The tree is organized by component lifecycle and responsibility. [`skills/AGENTS.md`](../../skills/AGENTS.md) distinguishes user-authored Skills from bundled `.system` material. [`hooks/AGENTS.md`](../../hooks/AGENTS.md) defines the source and test expectations for Hook work. [`TBD/README.md`](../../TBD/README.md) explicitly keeps early plans separate from maintained implementations.

## Instruction routing

The [router](../../skills/skill-router/SKILL.md) asks the agent to classify a task by responsibility, consult its [map](../../skills/skill-router/skill-map.md), verify availability, and read only the selected Skills and relevant references. Each specialized Skill owns its domain: for example, React UI styling, React routing, Electron process placement, or Skill authoring. The [documentation Skill](../../skills/agent-doc-writer/SKILL.md) owns general Markdown structure and navigation while domain Skills retain their specialized rules.

This creates a layered path from a broad task to a small set of instructions:

```text
user request → repository instructions → skill-router → selected SKILL.md
                                                → targeted references
```

The routing mechanism is written guidance for an agent to follow. It is not a runtime dispatcher that automatically proves the correct Skill was loaded for every request. Its benefit is an explicit selection procedure and a documented ownership map; its reliability still depends on the agent following that procedure.

## Automation boundary

The Hook path connects a tool call to Git's own commit validation:

```text
direct `git commit` tool command
  → PreToolUse adapter rewrites the command with `core.hooksPath`
  → Git invokes `commit-msg`
  → subject accepted, rejected, or accepted with a length warning
```

The [registry](../../hooks/hooks.json) registers a Bash `PreToolUse` command. The [adapter](../../hooks/git/codex-pre-tool-use.mjs) supports the input field names documented for Codex and Distill and only rewrites a command beginning with `git commit`. The [native Hook](../../hooks/git/commit-msg) reads Git's message file and checks the subject. Installation and trust are separate from the repository implementation; the [deployment guide](../../hooks/README.md) describes those steps.

## Lifecycle and ownership decisions

| Decision | Reason visible in the project | Tradeoff |
| --- | --- | --- |
| Keep `TBD/` alongside implemented components | Preserve original specifications and incremental requests without presenting drafts as active behavior | Readers must check whether a linked request is open or implemented |
| Use small Skill entrypoints plus references | Make task-specific guidance discoverable without loading every detail | More links and indexes must remain correct |
| Keep Hook source separate from active files | Avoid changing the user's live agent setup during source work | Deployment requires copying or linking and later resynchronization |
| Use Git's `commit-msg` protocol for final validation | Check the actual message file at commit time | The adapter only covers supported direct tool commands |

These boundaries show an emphasis on traceability and controlled activation. See [Engineering case studies](./engineering-case-studies.md) for the corresponding implementation, and [Quality and limitations](./quality-and-limitations.md) for what has been verified.
