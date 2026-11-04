## 검토 결론

workspace-unit-manager는 Workspace Unit별 문서의 소유권, 관계, 식별자, 현재 작업 탐색을 관리하는 Skill로 설계하는 편이 좋다. 모든 문서를 직접 쓰거나 모든 세션에서 전체 문서를 읽는 역할까지 맡기면 기존 Skill과 겹치고 관리 비용이 커진다.

현재 저장소는 apps/*, packages/*가 있는 모노레포가 아니라 Codex 구성요소를 관리하는 소스 워크스페이스다. 아래 디렉터리는 향후 대상 프로젝트에 적용할 제안이다. 기존 전역 지침은 이미 Workspace Unit, REQ 추적, 작은 변경의 문서 과잉 생성 방지를 원칙으로 정한다. 새 Skill은 이를 복사하기보다 실행 기준을 구체화하면 된다. 근거: `~/.agents/AGENTS.md` §4 (/home/rice/.agents/AGENTS.md#L38-L51), 저장소 `README.md` (/home/rice/projects/codex-workspace/README.md).

## Skill 책임과 연계

| 담당                   | 맡을 일                                                                                                            | 맡지 않을 일                                                                      |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| workspace-unit-manager | 해당 Unit 식별, 기능 소유권 판단, REQ 발급·참조 안정성, 문서별 책임·생성 조건, Phase 연결, 작업에 필요한 문서 탐색 | 제품 요구사항 임의 결정, 모든 문서의 문장·서식 규칙, 코드 설계의 기술적 정답 결정 |
| skill-router           | 작업에 필요한 Skill을 최소 집합으로 선택                                                                           | REQ 체계나 문서 수명주기 정의                                                     |
| agent-doc-writer       | │ 실제 Markdown 작성·수정 시 구조, 링크, 인덱스, AGENTS.md와 README의 역할 점검                                    | REQ의 의미나 Phase 완료 기준 결정                                                 |
| skill-spec-designer    | 이 새 Skill 자체를 나중에 TBD/ 명세로 작성할 때 적용                                                               | 앱·패키지 기능의 SPEC 작성                                                        |
| my-skill-creator       | 승인 뒤 이 Skill을 구현·검증할 때 적용                                                                             | Workspace Unit의 제품 문서 운영                                                   |

이 경계는 현재 `skill-router` 지도 (/home/rice/.agents/skills/skill-router/skill-map.md), `agent-doc-writer` 역할 (/home/rice/.agents/skills/agent-doc-writer/SKILL.md), `skill-spec-designer` 역할 (/home/rice/.agents/skills/skill-spec-designer/SKILL.md)과 맞는다. 확인한 기존 Skill 가운데 제품 기능의 REQUIREMENTS·SPEC 체계를 전담하는 Skill은 없다.

호출은 연쇄 실행보다 작업별 조합이 적절하다. 예를 들어 신규 대형 기능은 router가 manager와, 문서를 실제 작성할 때 doc-writer를 선택한다. 코드만 고치는 작은 작업은 문서 체계 변경이 필요하지 않으면 manager를 호출하지 않는다. React·Electron 구조 Skill은 해당 기술 구조를 실제로 설계하거나 바꿀 때만 추가한다. 새 Skill이 사용 가능해지는 시점에는 router의 Skill 지도도 갱신해야 한다.

## 권장 문서 모델

| 문서         | 단일 책임                                            | 다른 문서와의 경계                                 |
| ------------ | ---------------------------------------------------- | -------------------------------------------------- |
| REQUIREMENTS | 사용자 문제, 범위, 제약, 검증 가능한 수용 조건       | 구현 방식·일정은 적지 않음                         |
| SPEC         | REQ를 기능·동작 단위로 구체화하고 각 조건과 연결     | 구조적 선택의 이유는 ARCHITECTURE로                |
| ARCHITECTURE | 기존 구조와 설계 변경, 선택 이유, 영향받는 경계      | 기능별 동작 명세나 일정의 복사본이 아님            |
| ROADMAP      | REQ의 Phase 순서·의존성·진행 상태                    | 상세 완료 조건은 GOAL에 둘 수 있음                 |
| GOAL         | 해당 Phase의 산출물·완료 조건                        | ROADMAP이 짧고 명확하면 별도 파일 생략             |
| REVIEW       | 완료 조건 대비 실제 검증 근거, 결과, 문제, 다음 작업 | 계획이나 요구사항을 사후에 조용히 바꾸는 곳이 아님 |

특히 ROADMAP과 GOAL은 무조건 분리하지 않는 편이 낫다. Phase가 하나이고 완료 조건이 짧으면 ROADMAP에 함께 둔다. 여러 Phase에서 완료 조건이 커질 때 GOAL을 분리한다. REVIEW도 실제 검증이나 인수 판단이 있을 때 작성한다. 장점은 여섯 종류의 책임을 유지하면서 빈 파일과 반복 서술을 줄이는 것. 단점은 프로젝트마다 파일 수가 달라지므로, Skill에 분리 조건을 명시해야 한다.

ARCHITECTURE는 두 범위로 구분한다. Unit 전체의 오래 유지되는 구조는 docs/architecture.md 같은 현재 구조 설명이 소유한다. REQ001의 구조 변경안과 결정 이유는 docs/architecture/REQ001-feature.md가 소유한다. 기능을 완료한 뒤 현재 구조 설명에서 실제로 바뀐 부분만 반영한다. 장점은 새 기능마다 Unit 전체 문서를 다시 쓰지 않는 것. 단점은 변경안과 현재 구조가 어긋날 수 있으므로 완료 REVIEW에서 반영 여부를 확인해야 한다.

## 디렉터리와 식별자 제안

예시 구조를 필수 템플릿이 아닌 확장 가능한 경로 규칙으로 사용한다.

```
apps/<unit>/docs/
├── README.md # 관련 REQ와 현재 작업으로 가는 진입점
├── architecture.md # 필요할 때: Unit의 현재 구조
├── requirements/REQ001-feature.md
├── spec/REQ001-01-feature.md
├── architecture/REQ001-feature.md # 필요할 때: 이 REQ의 구조 변경
├── roadmap/REQ001.md # 필요할 때: Phase 순서와 상태
├── goal/REQ001-P01.md # 분리가 필요할 때
└── review/REQ001-P01.md # 검증이 발생했을 때
```

처음부터 여섯 디렉터리와 각 README.md를 만들지 않는다. docs/README.md가 적은 문서를 직접 안내하다가, 한 범주에 문서가 늘어 선택에 도움이 될 때만 범주 README를 둔다. 이는 기존 `agent-doc-writer` 탐색 규칙 (/home/rice/.agents/skills/agent-doc-writer/references/navigation.md)과도 맞는다. 장점은 작은 Unit에 가볍다. 단점은 Unit 간 디렉터리가 완전히 같지는 않다.

식별 관계는 다음처럼 단순하게 시작한다.

• REQ001: 해당 Unit 안에서 고유하고 재사용하지 않는 기능 식별자. 다른 Unit을 참조할 때는 apps/<unit>:REQ001처럼 Unit까지 표기한다.
• REQ001-01: REQ에 속한 SPEC 단위. 파일명 설명 부분이 바뀌어도 식별자는 유지한다.
• REQ001-P01: 그 REQ의 실행 Phase. SPEC과 Phase는 일대일로 묶지 않는다. Phase 문서가 구현할 SPEC 식별자를 명시한다.
• 각 SPEC은 상위 REQ와 대응하는 수용 조건을 가리킨다. 각 GOAL 또는 ROADMAP Phase는 대상 SPEC을 가리킨다. REVIEW는 Phase의 완료 조건과 검증 결과를 가리킨다.
• 별도 추적표에 모든 내용을 복제하지 않는다. 링크와 식별자를 원본 문서에 두고 docs/README.md에는 현재 작업으로 가는 짧은 링크만 둔다. 식별자 충돌 확인은 새 REQ를 발급할 때 해당 Unit 범위에서 한다.
• REQ가 갈라지거나 폐기돼도 옛 번호를 다른 기능에 재사용하지 않는다. 기존 문서에 대체 관계를 남기고 영향받는 참조만 갱신한다.

## 새 세션의 탐색 흐름

1. 사용자 작업에서 Unit과 REQ가 지정됐는지 확인한다. 불명확하면 코드 경로와 가까운 진입 문서로 후보를 좁힌다. 여러 Unit이 실제로 가능할 때만 소유권을 확인한다.
2. 적용되는 AGENTS.md를 읽어 규칙을 확인하고, Unit의 README.md 또는 docs/README.md에서 관련 REQ·현재 Phase 링크를 찾는다. README 설명은 강제 규칙이 아니다. 역할 기준 (/home/rice/.agents/skills/agent-doc-writer/references/agents.md).
3. 작업에 맞춰 선택적으로 읽는다. 요구 변경이면 REQUIREMENTS→관련 SPEC, 구현이면 현재 Phase→대상 SPEC→필요한 ARCHITECTURE, 검증이면 GOAL·해당 SPEC→이전 REVIEW 순서다.
4. 문서가 가리킨 의존 Unit이나 미해결 문제만 추가로 읽는다. 링크가 없거나 오래됐으면 관련 범위에서 탐색하고 현재 상태를 확인하지 못했다고 표시한다. 전체 모노레포 스캔을 기본 동작으로 삼지 않는다.
5. 작업 뒤 바뀐 문서의 직접 참조와 진입 인덱스만 점검한다.

docs/README.md가 “현재 Phase”를 보여줄 수는 있지만, 진행 상태의 원본은 ROADMAP 한곳에 두고 README는 그 위치를 안내하는 편이 안전하다. 같은 상태를 두 파일에서 따로 갱신하면 세션 복원에 오히려 오류가 생긴다.

## 이름과 남은 결정

workspace-unit-manager라는 이름은 Unit의 기능 문서 수명주기를 관리한다는 범위를 명시하면 사용 가능하다. 다만 코드·배포·의존성까지 관리하는 Skill로 오해될 만큼 넓다. 범위를 이름에도 드러내려면 workspace-unit-doc-manager가 더 정확하다. 권장은 현재 이름을 유지하되 설명과 활성화 조건에서 “REQ 기반 문서·컨텍스트 관리”로 한정하는 것. Unit 구조 자체의 코드 배치는 기존 프로젝트 구조 Skill에 남긴다.

승인 전에 결정할 핵심은 두 가지다. Phase를 기본적으로 REQ 내부에서만 번호 매길지, 여러 REQ가 함께 움직이는 출시 계획도 다룰지; 현재 Phase 상태의 원본을 ROADMAP으로 둘지다. 위 제안은 각각 REQ 내부 Phase, ROADMAP을 상태 원본으로 가정한다. 여러 REQ의 공동 일정이 실제로 생기면 별도 상위 계획을 추가하는 편이 기존 REQ 문서를 다시 짜는 것보다 작다.

이번에는 기존 Skill과 지침만 읽어 설계 방향을 검토했다. Skill 파일과 프로젝트 문서는 생성·수정하지 않았다.
