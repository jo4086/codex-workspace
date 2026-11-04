---
name: git-commit
description: Draft or review Git commit messages using the repository's type, optional scope, Korean subject, and breaking-change convention. Use when preparing a commit message or checking its wording.
---

# Git Commit Convention

## Activation

Use this Skill when drafting, revising, or reviewing a Git commit message. It guides message text; it does not grant permission to create a commit.

## Format

```text
<type>(<scope>): <한국어 설명>

<본문 - 선택>
```

The scope and body are optional. Use `type!: 설명` or `type(scope)!: 설명` for a breaking change. A body may contain a `BREAKING CHANGE:` footer.

Examples:

```text
feat: 신규 직업 데이터 등록 기능 추가
feat(equipment): 무기 공격속도 데이터 추가
```

## Types

| Type | Use |
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

## Writing Rules

- Use only the lowercase types above. An optional scope contains only lowercase English letters, digits, and hyphens.
- Write the subject description mainly in Korean. English technical identifiers and proper names are allowed.
- Aim for at most 72 characters in the subject, and do not end it with a period.
- Add a body only when it helps explain the change. Separate it from the subject with one blank line.
- Mark a breaking change with `!` before `:` and explain its impact with `BREAKING CHANGE:` when a body is useful.

## Validation Boundary

The repository [commit-msg hook](../../hooks/git/commit-msg) reads Git's message file path and blocks invalid types, scopes, separators, empty descriptions, and final periods. It warns on subjects over 72 Unicode characters. It does not check whether the description contains Korean and does not validate the body. Do not install or activate the hook unless the user requests that separately.
