const translations = {
  ko: {
    "nav.back":"← 프로젝트",
    "hero.kicker":"TECHNICAL CASE STUDY",
    "hero.title":"ezMemo PC 정식 출시",
    "hero.lead":"기존 사용자 데이터를 유지한 채 Local-First 구조로 전환하고 정식 출시한 Windows 메모 애플리케이션",
    "hero.disclosure":"보안과 기밀 유지를 위해 내부 시스템 식별 정보, 운영 데이터, 미출시 구현 상세는 공개하지 않습니다.",
    "meta.organization.label":"ORGANIZATION", "meta.organization.value":"인라이플 · 모비소프트 개발팀",
    "meta.period.label":"PERIOD", "meta.period.value":"2025.09 — 현재",
    "meta.role.label":"ROLE", "meta.role.value":".NET developer", "meta.stack.label":"STACK",
    "context.heading":"배경과 제약", "context.copy":"ezMemo는 기존 사용자의 데이터와 사용 경험을 유지하면서 데스크톱 구조를 발전시켜야 했습니다. 네트워크 상태가 바뀌어도 메모 작성과 조회가 안정적으로 이어져야 했고, 업데이트를 통해 새로운 저장 구조를 도입하더라도 사용자가 초기화나 수동 이전을 하지 않도록 해야 했습니다.",
    "flow.heading":"시스템 흐름", "flow.input":"사용자 입력", "flow.local":"로컬 SQLite 저장", "flow.state":"변경 상태 관리", "flow.sync":"비동기 서버 동기화", "flow.recovery":"결과 반영·재시도", "flow.ui":"데스크톱 UI", "flow.note":"사용자가 작업하는 기준은 로컬 저장소로 두고, 서버 반영은 비동기로 처리했습니다. 일시적인 네트워크 문제로 메모 작성과 조회 경험이 끊기지 않도록 하기 위해서였습니다.",
    "decisions.heading":"구현 판단", "decision.localFirst.title":"Local-First 데이터 흐름", "decision.localFirst.copy":"사용자의 작성·수정 결과를 먼저 로컬 저장소에 반영하고, 서버 동기화는 별도로 처리하도록 구성했습니다. 네트워크 상태가 일시적으로 바뀌어도 메모 작성과 조회 경험이 끊기지 않도록 하기 위해서였습니다.", "decision.migration.title":"단계적 데이터 마이그레이션", "decision.migration.copy":"기존 데이터와 새로운 저장 구조가 공존하는 전환 과정에서 버전별 마이그레이션 순서와 의존성을 관리했습니다. 중간 실패가 데이터 손실로 이어지지 않도록 트랜잭션과 재실행 가능성을 고려했습니다.", "decision.syncState.title":"동기화 상태와 복구 경로", "decision.syncState.copy":"로컬 변경 여부와 서버 반영 상태를 구분하고, 연결이 회복되면 미전송 데이터를 다시 처리하도록 흐름을 정리했습니다. 데이터 유형 간의 참조 관계를 고려해 동기화 중 정합성이 깨지지 않도록 했습니다.", "decision.continuity.title":"업데이트 후의 사용자 경험", "decision.continuity.copy":"저장 위치, 설정, 알람처럼 기존 사용 경험에 영향을 주는 요소가 업데이트 이후에도 자연스럽게 이어지도록 데이터 전환과 앱 업데이트 흐름을 함께 점검했습니다.",
    "automation.heading":"AI 협업 개발 하네스와 CI/CD 자동화", "automation.copy":"ezMemo에 AI 협업 개발 하네스를 처음 적용해, 프로젝트 지식·격리된 구현·자동 검증·사람 승인·배포가 이어지는 개발 흐름을 설계·구축했습니다.", "automation.flow.skill":"프로젝트 지식 구조화", "automation.flow.plan":"계획·사람 승인", "automation.flow.worktree":"독립 worktree 구현", "automation.flow.ci":"자동 빌드·보안·AI 리뷰", "automation.flow.review":"사용자 QA·릴리스", "automation.flow.learning":"지식 환류", "automation.one":"동기화·마이그레이션 등 고위험 변경 영역의 지식과 과거 이슈를 프로젝트 스킬과 검증 기준으로 구조화", "automation.two":"plan-first 승인 흐름과 feature 브랜치·독립 worktree를 활용해 AI 병렬 작업을 격리", "automation.three":"Jenkins·GitHub Actions로 PR 빌드, 시크릿 검사, AI 코드 리뷰와 상태 반환을 자동화", "automation.four":"코드 반영부터 릴리스·배포까지 연결하되 실제 앱 QA와 최종 판단은 사람이 수행하고, 결과와 incident를 프로젝트 지식으로 환류", "automation.result":"AI 작업을 독립된 변경 단위로 수행하고 자동 검증과 사람의 최종 판단을 거쳐 배포되도록 구성했습니다.",
    "contribution.heading":"담당 범위", "contribution.one":"기존 데이터 구조를 분석하고 단계적 리팩터링·마이그레이션 범위 설계", "contribution.two":"SQLite 기반 로컬 저장소와 버전별 데이터 마이그레이션 구현", "contribution.three":"Local-First 저장, 동기화 상태 관리, 비동기 서버 동기화 흐름 설계·개선", "contribution.four":"기존 사용자 데이터 전환과 설치·자동 업데이트를 포함한 정식 출시 과정 구현·검증", "contribution.five":"프로젝트 스킬·plan-first 흐름과 Jenkins·GitHub Actions 기반 AI 협업·CI/CD 인프라 설계·구축",
    "outcome.heading":"검증과 결과", "outcome.copy":"기존 사용자 데이터를 유지한 채 Local-First 구조로 전환하고, 데이터 마이그레이션과 설치·자동 업데이트 흐름까지 구현·검증해 ezMemo PC를 정식 출시했습니다. 네트워크 상태가 변해도 메모 작성과 조회가 이어지고, 업데이트 후에도 기존 데이터와 설정을 그대로 사용할 수 있도록 했습니다."
  },
  en: {
    "nav.back":"← Projects",
    "hero.kicker":"TECHNICAL CASE STUDY",
    "hero.title":"ezMemo PC Official Launch",
    "hero.lead":"A Windows memo app officially launched after a local-first transition that preserved existing user data",
    "hero.disclosure":"Internal system identifiers, operational data, and unreleased implementation details are omitted for security and confidentiality.",
    "meta.organization.label":"ORGANIZATION", "meta.organization.value":"ENLIPLE · Mobsoft Development Team",
    "meta.period.label":"PERIOD", "meta.period.value":"Sep. 2025 — Present",
    "meta.role.label":"ROLE", "meta.role.value":".NET developer", "meta.stack.label":"STACK",
    "context.heading":"Context & Constraints", "context.copy":"ezMemo needed to evolve its desktop architecture while preserving the data and usage patterns of existing users. The work had to make memo creation and retrieval reliable across changing network conditions, introduce new storage structures through updates, and avoid asking users to reset or manually migrate data.",
    "flow.heading":"System Flow", "flow.input":"User input", "flow.local":"Local SQLite persistence", "flow.state":"Change-state management", "flow.sync":"Asynchronous server sync", "flow.recovery":"Result recovery & retry", "flow.ui":"Desktop UI", "flow.note":"The local store remains the user's working state, while server synchronization happens asynchronously so temporary network failures do not interrupt creating or reading memos.",
    "decisions.heading":"Engineering Decisions", "decision.localFirst.title":"Local-first data flow", "decision.localFirst.copy":"I persisted each create and edit operation to local storage first, then handled server synchronization separately. This kept memo creation and retrieval available during temporary network changes.", "decision.migration.title":"Versioned data migration", "decision.migration.copy":"During the transition in which legacy data and new storage structures coexisted, I managed the order and dependencies of versioned migration steps. Transactions and repeatability were considered so an interrupted update would not lead to data loss.", "decision.syncState.title":"Sync state & recovery path", "decision.syncState.copy":"I separated local-change status from server-acknowledgement status and organized the flow to process unsent data after connectivity recovered. Data relationships were considered to keep synchronization consistent across data types.", "decision.continuity.title":"Continuity across updates", "decision.continuity.copy":"I reviewed data transitions and app-update flows so that settings, alarms, storage locations, and other parts of the existing experience could continue naturally after an update.",
    "automation.heading":"AI-Assisted Engineering Harness and CI/CD Automation", "automation.copy":"I introduced an AI-assisted engineering harness in ezMemo, connecting project knowledge, isolated implementation, automated validation, human approval, and deployment in one development workflow.", "automation.flow.skill":"Structured project knowledge", "automation.flow.plan":"Plan & human approval", "automation.flow.worktree":"Isolated worktree implementation", "automation.flow.ci":"Automated build, security & AI review", "automation.flow.review":"User QA & release", "automation.flow.learning":"Knowledge feedback", "automation.one":"Structured knowledge, validation criteria, and past incidents for high-risk areas such as synchronization and migration as reusable project skills", "automation.two":"Used a plan-first approval flow and isolated feature branches and worktrees for parallel AI-assisted implementation", "automation.three":"Automated PR builds, secret scanning, AI code review, and status reporting through Jenkins and GitHub Actions", "automation.four":"Connected integration through release and deployment while retaining human QA and final approval, then fed outcomes and incidents back into project knowledge", "automation.result":"AI-assisted changes are isolated, automatically validated, and deployed only after human review and final approval.",
    "contribution.heading":"My Contribution", "contribution.one":"Analyzed existing data structures and defined the scope for phased refactoring and migration", "contribution.two":"Implemented SQLite-based local storage and versioned data migration", "contribution.three":"Designed and improved local-first saving, sync-state management, and asynchronous server synchronization", "contribution.four":"Implemented and validated the official release process, including existing-user data migration, installation, and automatic updates", "contribution.five":"Designed and built the project-skill and plan-first workflow plus Jenkins- and GitHub-Actions-based AI collaboration and CI/CD infrastructure",
    "outcome.heading":"Validation & Outcome", "outcome.copy":"I completed the local-first transition and shipped the official ezMemo PC release while preserving existing user data. I implemented and validated data migration, offline continuity, synchronization recovery, installation, and automatic updates through the production launch."
  }
};

const applyLanguage = (language) => {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translations[language][element.dataset.i18n];
  });
  document.getElementById("language-toggle").textContent = language === "ko" ? "EN" : "KO";
  localStorage.setItem("portfolio-language", language);
};

const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  document.getElementById("theme-toggle").textContent = theme === "dark" ? "☀" : "◐";
  localStorage.setItem("portfolio-theme", theme);
};

applyLanguage(localStorage.getItem("portfolio-language") || "ko");
applyTheme(localStorage.getItem("portfolio-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
document.getElementById("language-toggle").addEventListener("click", () => applyLanguage(document.documentElement.lang === "ko" ? "en" : "ko"));
document.getElementById("theme-toggle").addEventListener("click", () => applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
