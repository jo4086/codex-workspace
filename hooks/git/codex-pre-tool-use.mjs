#!/usr/bin/env node

import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

function updateGitCommitCommand(event) {
  const eventName = event?.hook_event_name ?? event?.hookEventName;
  const toolName = event?.tool_name ?? event?.toolName;
  if (!['PreToolUse', 'pre_tool_use'].includes(eventName)) return null;
  if (!['Bash', 'run_terminal_command'].includes(toolName)) return null;

  const input = event.tool_input ?? event.toolInput;
  if (typeof input?.command !== 'string') return null;

  const match = /^(\s*)git commit(?=\s|$)/.exec(input.command);
  if (!match) return null;

  const command = input.command.replace(
    /^(\s*)git commit(?=\s|$)/,
    '$1git -c core.hooksPath="$HOME/.agents/hooks/git" commit',
  );

  return {
    hookSpecificOutput: {
      hookEventName: 'PreToolUse',
      permissionDecision: 'allow',
      updatedInput: { ...input, command },
    },
  };
}

async function main() {
  let input = '';
  for await (const chunk of process.stdin) input += chunk;

  let event;
  try {
    event = JSON.parse(input);
  } catch {
    process.stderr.write('codex-pre-tool-use: invalid JSON input\n');
    process.exitCode = 1;
    return;
  }

  const output = updateGitCommitCommand(event);
  if (output) process.stdout.write(`${JSON.stringify(output)}\n`);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) await main();

export { updateGitCommitCommand };
