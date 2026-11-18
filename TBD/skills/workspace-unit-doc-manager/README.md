# Workspace Unit Doc Manager — REQ별 문서 구조 개정안

**상태:** [Skill](../../../skills/workspace-unit-doc-manager/SKILL.md) 구현·검증 완료. 이번 요청에서 대상 프로젝트 문서는 변경하지 않았다.

이 문서는 [이전 검토안](./README.v1.md)을 보존한 뒤, 사용자가 제시한 `apps/electron/docs` 운영 방식을 기준으로 새 기능의 문서를 찾고 연결하는 규칙을 정의한다. 이 구조는 `maple_repo`의 Electron 문서에서 관찰한 형식을 일반화한 **개정 제안**이며, 기존 문서의 즉시 이동을 요구하지 않는다.

## 목표와 적용 범위

- Workspace Unit의 기존 `ARCHITECTURE.md`, `ROADMAP.md`, `REVIEW.md`, `SPEC/`, `ROADMAP/`, `GOAL/`, `REVIEW/`, `REQUESTS/` 구조를 유지한다.
- 새 기능을 요청받으면 `REQUIREMENTS/`에 사용자 요구와 수용 조건을 REQ 단위로 정리한다.
- 해당 기능의 SPEC, ROADMAP, GOAL, REVIEW 및 관련 REQUESTS를 같은 REQ 식별자로 묶어 경로만 보고 소유 기능을 알 수 있게 한다.
- 큰 기능의 요구·계획·진행·검증 문서 수명주기를 관리한다. 작은 독립 수정은 기존 `REQUESTS/` 흐름을 사용할 수 있다.
- 일반 Markdown 작성·링크는 `agent-doc-writer`, Skill 명세 작성은 `skill-spec-designer`, 구현·검증은 `my-skill-creator`가 담당한다. 이 Skill은 문서의 소유권, 위치, 식별자, 연결 규칙을 담당한다.

## 제안하는 경로 규칙

아래에서 `REQ02`는 새 기능의 예시 ID이며 `Phase01`은 **그 REQ 내부**의 단계다. 사용자 예시의 두 선택지 중, 같은 유형의 문서가 여러 개로 늘어도 구분하기 쉬운 `문서유형/REQ02/` 폴더 방식을 이번 명세의 기본안으로 채택한다. 폴더가 기능을 구분하므로 하위 파일명에 `REQ02-`를 다시 붙이지 않는다.

```text
apps/electron/docs/
├── ARCHITECTURE.md            # Unit에 실제로 구현된 현재 구조
├── REQUIREMENTS/
│   ├── README.md              # REQ ID, 기능명, 요구사항 파일 링크
│   └── REQ02.md               # 새 기능에 대한 사용자 요구와 수용 조건
├── REQUESTS/
│   ├── README.md              # 기존 독립 요청과 REQ별 요청으로 가는 목차
│   └── REQ02/
│       └── <topic>.md         # REQ02에 속하는 개별 요청·변경 이력; 필요할 때만
├── SPEC/
│   ├── README.md              # 기존 SPEC과 REQ별 SPEC으로 가는 목차
│   └── REQ02/
│       └── <feature-area>.md  # 동작·기능 상세; 책임별로 필요한 파일만
├── ROADMAP.md                 # 모든 REQ의 단계 링크와 상태 원본
├── ROADMAP/
│   └── REQ02/
│       └── Phase01.md         # REQ02 Phase01의 범위·순서·의존성
├── GOAL/
│   ├── README.md              # 현재 작업과 REQ별 GOAL로 가는 목차
│   └── REQ02/
│       └── Phase01.md         # 해당 Phase의 산출물·완료 조건
├── REVIEW.md                  # 검증 기록으로 가는 목차·요약
└── REVIEW/
    └── REQ02/
        └── Phase01.md         # 해당 Phase의 검증 결과·증거·남은 일
```

이 트리는 위치 설명용 예시다. 새 REQ를 만들 때 모든 하위 폴더와 파일을 미리 생성하지 않는다. `ROADMAP/REQ02/Phase01.md`는 계획이 단계별로 상세해질 때, GOAL은 완료 조건을 별도 문서로 읽는 편이 명확할 때, REVIEW는 실제 검증 기록이 생길 때 만든다. 한 파일만 있는 분류에도 사용자가 요구한 REQ 소유권을 드러내기 위해 `REQ02/`를 유지한다.

## 문서별 책임

| 위치 | 소유 정보 | 연결 규칙 |
| --- | --- | --- |
| `REQUIREMENTS/REQ02.md` | 사용자의 문제·요구, 범위, 제약, 검증 가능한 수용 조건 | REQ02의 기준 문서. 관련 원본 REQUESTS를 링크 |
| `REQUESTS/REQ02/<topic>.md` | REQ02와 관련된 개별 요청, 질문, 변경 입력과 처리 기록 | 부모 REQUIREMENTS와 영향받는 SPEC을 링크 |
| `SPEC/REQ02/<feature-area>.md` | 해당 요구를 구현할 때 필요한 동작·화면·데이터 규칙 | 부모 REQUIREMENTS의 수용 조건을 가리킴 |
| `ROADMAP.md` | 모든 REQ의 Phase ID, 순서, 현재 상태와 상세 링크 | **Phase 상태의 단일 원본**. 기존 Phase도 이 문서에서 계속 안내 |
| `ROADMAP/REQ02/Phase01.md` | 한 Phase의 범위, 선행 조건, 목표 SPEC, 작업 순서 | ROADMAP.md의 해당 항목과 부모 REQ를 링크 |
| `GOAL/REQ02/Phase01.md` | 실행 전에 정한 산출물·완료 조건 | 해당 ROADMAP Phase와 SPEC을 링크; 항목은 체크박스로 추적 |
| `REVIEW/REQ02/Phase01.md` | GOAL 완료 조건별 실제 검증, 결과, 미해결 문제 | 해당 GOAL과 검증 증거를 링크; 검증 항목은 체크박스로 추적 |
| `ARCHITECTURE.md` | Unit에 현재 구현된 구조 | REQ 제안이나 계획을 구현 전의 현재 상태로 쓰지 않음 |

`REQUIREMENTS`는 기능 단위의 **정리된 요구와 수용 기준**을 소유한다. `REQUESTS`는 그 기능에 들어온 개별 요청의 원문·변경 맥락을 보존한다. 기존처럼 독립적인 작은 요청은 `REQUESTS/<topic>.md`에 둘 수 있으며, 새 REQ를 불필요하게 만들지 않는다. REQ가 없는 기존 SPEC·ROADMAP·GOAL·REVIEW도 유효한 이력으로 남긴다.

## ID, 제목, 탐색 규칙

1. 새 기능에 Unit 내부에서 고유한 `REQ02` 형태의 ID를 발급한다. 이미 사용된 번호와 폐기된 번호를 재사용하지 않는다. 자릿수가 늘어나도 기존 ID를 다시 매기지 않는다.
2. Phase의 정식 식별자는 `REQ02-Phase01`로 적는다. `Phase01`만으로 서로 다른 REQ의 단계를 식별하지 않는다. 파일 경로는 `ROADMAP/REQ02/Phase01.md`, `GOAL/REQ02/Phase01.md`, `REVIEW/REQ02/Phase01.md`처럼 맞춘다.
3. SPEC과 REQUESTS의 파일명에는 해당 책임을 알 수 있는 짧은 주제명을 쓴다. `01.md`처럼 번호만 있는 새 파일은 피한다. 본문 제목과 README 목차에도 REQ ID와 기능명을 표시한다.
4. `REQUIREMENTS/README.md`에서 ID → 기능명 → 요구사항 문서로 찾는다. 기존 `SPEC/README.md`, `GOAL/README.md`, `REQUESTS/README.md`, `ROADMAP.md`, `REVIEW.md`에서 새 REQ 문서로 연결한다. README에 원문이나 상태를 중복해서 복사하지 않는다.
5. 새 작업을 시작할 때 REQ를 먼저 찾고, 작업 유형에 맞는 해당 REQ의 SPEC·현재 Phase·GOAL·REVIEW만 읽는다. 여러 Unit 후보가 있으면 소유 Unit을 먼저 확인한다.
6. REQ 이름이 바뀌어도 ID와 문서 간 참조는 유지한다. 범위가 분할·대체·폐기되면 원본 REQUIREMENTS에 관계를 기록하고 관련 링크만 갱신한다.

## 작성·진행·검증 흐름

1. 새 기능 요청이 작은 독립 수정인지 판단한다. 지속적인 범위·수용 조건·여러 단계의 조율이 필요하면 REQUIREMENTS의 새 REQ로 정리한다. 사용자 요구가 확정되지 않은 부분은 결정된 것처럼 쓰지 않는다.
2. 관련 REQUESTS를 연결하고, 필요할 때만 `SPEC/REQ02/`에 기능별 상세 문서를 만든다. 구조 변경이 있다면 제안과 현재 `ARCHITECTURE.md`의 실제 상태를 구분한다.
3. `ROADMAP.md`에 `REQ02-Phase01`의 상태와 상세 경로를 등록한다. 단계별 계획이 길면 `ROADMAP/REQ02/Phase01.md`로 분리한다.
4. `GOAL/REQ02/Phase01.md`의 산출물·완료 조건을 시작 전에 `- [ ]`로 작성한다. 진행 중 실제 완료와 확인 근거에 따라 `- [x]`로 바꾼다.
5. 검증을 시작할 때 REVIEW 항목을 체크박스로 준비하고, 실행 결과·증거를 기록한 항목만 체크한다. 미검증·실패는 미완료로 남긴다. Phase 완료 판단 뒤 `ROADMAP.md`의 상태를 갱신한다.
6. 문서 변경 뒤 직접 링크, 범주 목차, REQ ID와 Phase ID의 일치를 확인한다. 검증된 구현이 현재 구조를 바꿨을 때만 `ARCHITECTURE.md`를 갱신한다.

## 기존 문서와의 전환

- 현재 `apps/electron/docs`의 `ROADMAP/Phase00.md`~`Phase07.md`, `GOAL/Phase02.md`~`Phase06.md`, `REVIEW/Phase*.md`, `SPEC/01-*.md` 및 독립 `REQUESTS/*.md`는 기존 체계의 이력으로 유지한다. 새 규칙을 도입한다는 이유만으로 이동·이름 변경·REQ 재배정을 하지 않는다.
- 새 REQ 문서부터 REQ별 경로를 사용한다. 기존 기능을 새 REQ에 편입할 필요가 생기면 원래 문서의 링크·앵커·상태를 조사하고 명시적으로 이전 계획을 세운다.
- `ROADMAP.md`, `REVIEW.md`, 범주 README의 기존 링크를 보존하면서 새 REQ 항목을 추가한다. 기존 Phase 완료 상태를 새 REQ의 검증 근거로 자동 승계하지 않는다.
- 대상 프로젝트의 `AGENTS.md`가 새 경로보다 기존 탐색 순서를 강제하면, 실제 대상 프로젝트에 규칙을 적용할 때 그 지침도 함께 검토·수정한다. 이 TBD 작성만으로 대상 프로젝트의 지침이나 문서를 바꾸지 않는다.

## 구현 시 완료 기준

- [x] `workspace-unit-doc-manager`의 진입점과 관련 참조가 REQ별 폴더 구조, REQUIREMENTS·REQUESTS 경계, 문서 생성 조건을 안내한다.
- [x] 실제 `apps/electron/docs`형 구조에서 `REQ02`를 넣었을 때 요구 → SPEC → Phase 계획 → GOAL → REVIEW를 경로와 직접 링크로 추적할 수 있다.
- [x] 기존 문서의 링크·앵커·상태를 임의로 이전하지 않으며, `ROADMAP.md`가 Phase 상태의 단일 원본으로 남는다.
- [x] GOAL·REVIEW의 진행 항목은 작성 시 미완료 체크박스로 시작하고 검증 근거가 생겼을 때만 체크한다.
- [x] Skill 구조·링크·사용 흐름을 검증하고, 적용 대상 프로젝트의 기존 `AGENTS.md`와 충돌하는 지점을 확인한다.

**구현 선택:** 새 REQ 문서는 `문서유형/REQ ID/` 경로를 기본으로 한다. `REQUESTS/REQ ID/`는 보존할 개별 요청 기록이 있을 때만 만든다.

**검증 근거 (2026-11-18):** `maple_repo/apps/electron/docs`의 실제 기존 구조를 임시 복사해 `REQ999` 시나리오의 REQUIREMENTS → SPEC → ROADMAP Phase → GOAL → REVIEW 직접 링크, 미완료 체크박스, 기존 파일 보존을 확인했다. 대상 프로젝트 파일은 수정하지 않았다. `quick_validate.py skills/workspace-unit-doc-manager`, 네 Skill의 링크·LF·진입점 확인, `git diff --check`가 통과했다.

**대상 프로젝트 적용 제한:** `maple_repo/apps/electron/AGENTS.md`는 완료 후 `GOAL/README.md`의 상태 갱신을 지시하고, 실제 GOAL 목차에도 상태 열이 있다. 이 Skill의 `ROADMAP.md` 단일 상태 원본 규칙과 충돌한다. Skill의 충돌 처리 지침에 따라, 대상 프로젝트에 이 규칙을 적용할 때는 먼저 해당 지침과 상태 목차의 정합성을 결정해야 한다.
