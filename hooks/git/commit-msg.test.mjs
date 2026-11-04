import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';

const require = createRequire(import.meta.url);
const { main, validateSubject } = require('./commit-msg');

test('accepts valid forms, including breaking changes and English descriptions', () => {
  for (const type of ['feat', 'fix', 'refactor', 'perf', 'docs', 'style', 'test', 'build', 'ci', 'chore', 'revert']) {
    assert.deepEqual(validateSubject(`${type}: 설명`), { errors: [], warnings: [] }, type);
  }
  for (const subject of [
    'feat: 신규 직업 데이터 등록 기능 추가',
    'feat(equipment): 무기 공격속도 데이터 추가',
    'feat!: API 변경',
    'fix(api-2)!: correct identifier',
  ]) {
    assert.deepEqual(validateSubject(subject), { errors: [], warnings: [] }, subject);
  }
});

test('blocks invalid type, scope, separator, empty description, and final period', () => {
  for (const subject of [
    'feature: 설명',
    'feat(Bad): 설명',
    'feat(foo_bar): 설명',
    'feat(): 설명',
    'feat 설명',
    'feat:설명',
    'feat: ',
    'feat:    ',
    'feat: 설명.',
  ]) {
    assert.ok(validateSubject(subject).errors.length > 0, subject);
  }
});

test('warns but allows a 73-character subject', () => {
  assert.deepEqual(validateSubject(`feat: ${'가'.repeat(66)}`), { errors: [], warnings: [] });
  assert.deepEqual(validateSubject(`feat: ${'가'.repeat(67)}`), {
    errors: [],
    warnings: ['제목이 72자를 초과했습니다.'],
  });
});

test('reads the Git-supplied message file and leaves the body untouched', () => {
  const directory = mkdtempSync(join(tmpdir(), 'commit-msg-test-'));
  const messagePath = join(directory, 'message');
  const message = 'feat!: API 변경\n\nBREAKING CHANGE: 이전 형식 제거\n';
  writeFileSync(messagePath, message);
  try {
    assert.equal(main(messagePath), 0);
    assert.equal(readFileSync(messagePath, 'utf8'), message);
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});

test('fails when Git supplies no path or an unreadable path', () => {
  const originalWrite = process.stderr.write;
  let diagnostic = '';
  process.stderr.write = (chunk) => { diagnostic += chunk; return true; };
  try {
    assert.equal(main(undefined), 1);
    assert.equal(main('/nonexistent/commit-message'), 1);
    assert.match(diagnostic, /읽을 수 없습니다/);
  } finally {
    process.stderr.write = originalWrite;
  }
});
