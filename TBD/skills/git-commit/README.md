# git-commit Skill Specification

**Status:** Implementation source specification

## Purpose and Activation

Create a `git-commit` Skill that guides agents when they draft, review, or revise Git commit messages. The Skill produces a Korean-centered subject using the convention below. It does not authorize creating a commit or changing Git configuration.

## Message Format

```text
<type>(<scope>): <한국어 설명>

<본문 - 선택>
```

The scope and body are optional. The subject may also use `!` immediately before `:` to mark a breaking change, with or without scope. A breaking change may be described with a `BREAKING CHANGE:` footer in the body.

Examples:

```text
feat: 신규 직업 데이터 등록 기능 추가
feat(equipment): 무기 공격속도 데이터 추가
```

## Allowed Types

| Type | Purpose |
| --- | --- |
| `feat` | 기능 추가 |
| `fix` | 버그 수정 |
| `refactor` | 기능 변화 없는 구조 개선 |
| `perf` | 성능 개선 |
| `docs` | 문서 추가 및 수정 |
| `style` | 코드 포맷팅 |
| `test` | 테스트 추가 및 수정 |
| `build` | 빌드 시스템 및 의존성 변경 |
| `ci` | CI/CD 설정 변경 |
| `chore` | 기타 유지보수 |
| `revert` | 이전 커밋 되돌리기 |

## Authoring Rules

- Use only the listed lowercase English types.
- Scope is optional. When present, use lowercase English letters, digits, and hyphens only.
- Write the description mainly in Korean; English technical identifiers and proper names are allowed.
- Keep the subject at 72 characters or fewer when practical; this is a recommendation.
- Do not end the subject with a period.
- Write a body only when needed, separated from the subject by one blank line.
- Support breaking changes with `!` in the subject and `BREAKING CHANGE:` in the body.

## Hook Boundary

The companion [Git commit-msg Hook plan](../../hooks/git/commit-msg.md) validates the subject from the message file path supplied by Git. It blocks unknown types, invalid scopes, a missing `: ` separator, an empty description, and a final period. It warns but does not block subjects longer than 72 characters. It does not check for Korean. The Skill should describe the hook without installing or activating it.

## Completion Criteria

- [x] The Skill states the message shape, all 11 types, optional scope and body, language guidance, length recommendation, period rule, and breaking change forms.
- [x] The Skill distinguishes authoring guidance from the hook's enforceable checks.
- [x] The repository hook accepts Git's message file path and is tested against the specified pass, block, and warning cases.
- [x] Skill metadata, links, and repository routing are validated.

No open decisions remain for this repository implementation. Activation of the repository hook is a separate operation.
