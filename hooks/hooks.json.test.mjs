import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const hooksDirectory = fileURLToPath(new URL('./', import.meta.url));
const config = JSON.parse(readFileSync(new URL('./hooks.json', import.meta.url), 'utf8'));

function findHandlers(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return findHandlers(path);
    if (entry.name.startsWith('codex-') && entry.name.endsWith('.mjs') && !entry.name.endsWith('.test.mjs')) {
      return [relative(hooksDirectory, path).replaceAll('\\', '/')];
    }
    return [];
  });
}

test('registers every Codex hook handler source', () => {
  const commands = Object.values(config.hooks)
    .flatMap((groups) => groups)
    .flatMap((group) => group.hooks)
    .filter((hook) => hook.type === 'command')
    .map((hook) => hook.command);

  const handlers = findHandlers(hooksDirectory);

  assert.ok(handlers.length > 0);
  for (const handler of handlers) {
    assert.ok(commands.some((command) => command.includes(`/hooks/${handler}`)), handler);
  }
});
