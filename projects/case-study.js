const translations = {
  ko: {
    "nav.back":"← 프로젝트",
    "hero.kicker":"TECHNICAL CASE STUDY",
    "hero.title":"카카오 파스타 혈당 데이터 연동",
    "hero.lead":"외부 헬스케어 데이터를 병원 HIS의 진료기록 업무 흐름에 연결한 연동 프로젝트",
    "hero.disclosure":"보안과 기밀 유지를 위해 내부 시스템 식별 정보, API 세부 사양, 환자 데이터는 공개하지 않습니다.",
    "meta.organization.label":"ORGANIZATION", "meta.organization.value":"이지케어텍 · 분당서울대학교병원",
    "meta.period.label":"PERIOD", "meta.period.value":"2024.06 — 2024.07",
    "meta.role.label":"ROLE", "meta.role.value":".NET developer", "meta.stack.label":"STACK",
    "context.heading":"배경과 제약", "context.copy":"카카오헬스케어 파스타의 혈당 데이터를 병원 HIS로 안전하게 수신하고, 의료진이 진료기록에서 바로 활용할 수 있도록 연동해야 했습니다. 외부망과 내부망이 분리된 환경에서 중계 서버를 경유한 통신·인증 흐름을 구성해야 했고, 수신 데이터는 환자 정보와 연결해 내부 DB와 진료기록 화면에서 활용할 수 있는 형태로 가공해야 했습니다.",
    "flow.heading":"시스템 흐름", "flow.external":"외부 헬스케어 API", "flow.relay":"중계 서버 경유 인증·통신", "flow.patient":"환자 확인 및 JSON 처리", "flow.storage":"Oracle / PL·SQL 저장", "flow.report":"이미지 리포트 생성·저장", "flow.ui":"진료기록 화면", "flow.note":"외부 응답을 그대로 화면에 전달하지 않고, HIS가 사용하는 데이터 흐름 안에서 변환·저장·조회되도록 구성했습니다.",
    "decisions.heading":"구현 판단", "decision.boundary.title":"연동 경계 분리", "decision.boundary.copy":"외부 API 응답과 진료기록 화면 사이에 데이터 변환과 저장 단계를 분리했습니다. 외부 서비스의 응답 형식이 바뀌더라도 사용자 화면과 업무 로직에 미치는 영향을 제한하기 위해서였습니다.", "decision.report.title":"리포트 중심의 정보 제공", "decision.report.copy":"수신 데이터를 내부 DB에 저장하는 데서 끝내지 않고, 진료기록 화면에서 바로 활용할 수 있는 이미지 형태의 리포트를 생성·저장하도록 구성했습니다. 의료진이 원본 응답 구조를 해석하지 않고 필요한 정보를 확인할 수 있도록 하기 위해서였습니다.", "decision.workflow.title":"업무 흐름 중심 UI", "decision.workflow.copy":"별도의 신규 화면보다 기존 진료기록 화면에서 혈당 데이터를 조회할 수 있도록 구성했습니다. 의료진이 익숙한 업무 흐름 안에서 정보를 확인하도록 하기 위한 판단이었습니다.", "decision.failure.title":"실패 상황 처리", "decision.failure.copy":"인증 실패, 환자 정보 불일치, 데이터 누락 등 주요 실패 상황을 구분하고, 확인과 조치가 가능한 사용자 메시지와 예외 처리 흐름을 구현했습니다.",
    "contribution.heading":"담당 범위", "contribution.one":"REST API 기반 외부 앱 혈당 데이터(JSON) 수신 로직 구현", "contribution.two":"중계 서버를 경유하는 외부·내부망 통신 및 인증 처리 시나리오 설계", "contribution.three":"환자 등록 여부 확인, Oracle 저장 및 PL/SQL 기반 업무 처리 로직 개발", "contribution.four":"이미지 리포트 생성·서버 저장, 진료기록 UI 조회 버튼·예외 처리 구현",
    "outcome.heading":"검증과 결과", "outcome.copy":"중계 서버 통신부터 데이터 저장, 이미지 리포트 생성, 진료기록 화면 조회까지의 흐름을 운영 환경에서 검증했습니다. 의료진의 수작업 입력을 줄이고 기존 진료기록 업무 안에서 혈당 이력을 확인할 수 있도록 지원했으며, 향후 외부 헬스케어 데이터 연동을 확장할 수 있는 기반을 마련했습니다."
  },
  en: {
    "nav.back":"← Projects",
    "hero.kicker":"TECHNICAL CASE STUDY",
    "hero.title":"Kakao Pasta Health Data Integration",
    "hero.lead":"Integrating external healthcare data into a hospital HIS clinical-record workflow",
    "hero.disclosure":"Internal system identifiers, API specifications, and patient data are omitted for security and confidentiality.",
    "meta.organization.label":"ORGANIZATION", "meta.organization.value":"ezCaretech · Bundang Seoul National University Hospital",
    "meta.period.label":"PERIOD", "meta.period.value":"Jun. 2024 — Jul. 2024",
    "meta.role.label":"ROLE", "meta.role.value":".NET developer", "meta.stack.label":"STACK",
    "context.heading":"Context & Constraints", "context.copy":"The goal was to securely receive Kakao Healthcare Pasta glucose data in the hospital HIS and make it available in clinical records. The environment separated external and internal networks, requiring a relay-server communication and authentication path. Received data also needed to be matched to patient information and transformed into a form usable by both the internal database and clinical-record UI.",
    "flow.heading":"System Flow", "flow.external":"External healthcare API", "flow.relay":"Relay-server authentication & communication", "flow.patient":"Patient validation & JSON processing", "flow.storage":"Oracle / PL·SQL persistence", "flow.report":"Report generation & storage", "flow.ui":"Clinical-record UI", "flow.note":"External responses were not passed directly to the UI; they were transformed, persisted, and retrieved within the HIS data flow.",
    "decisions.heading":"Engineering Decisions", "decision.boundary.title":"Integration boundary", "decision.boundary.copy":"I separated external API responses from clinical-record UI through dedicated transformation and persistence steps. This limited the impact of external response changes on the user interface and workflow logic.", "decision.report.title":"Report-oriented presentation", "decision.report.copy":"Rather than stopping at internal persistence, the integration generated and stored image-based reports that could be used directly from clinical records. This let clinicians review the required information without interpreting the original response structure.", "decision.workflow.title":"Workflow-first UI", "decision.workflow.copy":"Instead of introducing a separate screen, glucose data was made available from the existing clinical-record screen so that clinicians could review it within a familiar workflow.", "decision.failure.title":"Failure handling", "decision.failure.copy":"I distinguished key failure cases such as authentication failure, patient mismatches, and missing data, then implemented actionable user messaging and exception-handling flows.",
    "contribution.heading":"My Contribution", "contribution.one":"Implemented REST API-based receipt of external app glucose data in JSON", "contribution.two":"Designed relay-server communication and authentication scenarios across separated external and internal networks", "contribution.three":"Built patient registration checks, Oracle persistence, and PL/SQL-based processing", "contribution.four":"Implemented image-report generation/storage plus clinical-record UI retrieval controls and exception handling",
    "outcome.heading":"Validation & Outcome", "outcome.copy":"The end-to-end flow—from relay-server communication and persistence through image-report generation and clinical-record retrieval—was validated in the operating environment. It reduced manual entry for clinicians, supported glucose-history review within the existing workflow, and established a foundation for future healthcare-data integrations."
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
