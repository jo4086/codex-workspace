import assert from 'node:assert/strict';
import test from 'node:test';
import { updateGitCommitCommand } from './codex-pre-tool-use.mjs';

test('connects a direct Git commit command to the native commit-msg hook', () => {
  const event = {
    hook_event_name: 'PreToolUse',
    tool_name: 'Bash',
    tool_input: { command: 'git commit -m "feat: 기능 추가"', workdir: '/repo/subdir' },
  };
  const output = updateGitCommitCommand(event);

  assert.equal(output.hookSpecificOutput.hookEventName, 'PreToolUse');
  assert.equal(output.hookSpecificOutput.permissionDecision, 'allow');
  assert.equal(
    output.hookSpecificOutput.updatedInput.command,
    'git -c core.hooksPath="$HOME/.agents/hooks/git" commit -m "feat: 기능 추가"',
  );
  assert.equal(output.hookSpecificOutput.updatedInput.workdir, '/repo/subdir');
  assert.equal(event.tool_input.command, 'git commit -m "feat: 기능 추가"');
});

test('accepts Distill event fields and returns a compatible rewrite', () => {
  const event = {
    hookEventName: 'pre_tool_use',
    toolName: 'run_terminal_command',
    toolInput: { command: 'git commit -m "fix: 오류 수정"' },
  };
  const output = updateGitCommitCommand(event);

  assert.equal(output.hookSpecificOutput.hookEventName, 'PreToolUse');
  assert.equal(output.hookSpecificOutput.permissionDecision, 'allow');
  assert.equal(
    output.hookSpecificOutput.updatedInput.command,
    'git -c core.hooksPath="$HOME/.agents/hooks/git" commit -m "fix: 오류 수정"',
  );
});

test('ignores unrelated tools and commands', () => {
  const base = { hook_event_name: 'PreToolUse', tool_name: 'Bash', tool_input: { command: 'git status' } };
  assert.equal(updateGitCommitCommand(base), null);
  assert.equal(updateGitCommitCommand({ ...base, tool_name: 'apply_patch' }), null);
  assert.equal(updateGitCommitCommand({ ...base, hook_event_name: 'PostToolUse' }), null);
  assert.equal(updateGitCommitCommand({ ...base, tool_input: { command: 'echo git commit' } }), null);
});
