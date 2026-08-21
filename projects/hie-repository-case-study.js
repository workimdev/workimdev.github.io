const translations = {
  ko: {
    "nav.back":"← 프로젝트",
    "hero.kicker":"TECHNICAL CASE STUDY",
    "hero.title":"진료정보교류 거점 문서저장소 이관 대응",
    "hero.lead":"통합 거점의 의뢰·회송 수신을 기존 HIS 업무 흐름에 재연결한 이관 대응 프로젝트",
    "hero.disclosure":"보안과 기밀 유지를 위해 기관·시스템 식별 정보, 연동 설정, 데이터 구조, 실제 진료 문서·첨부파일 및 환자 정보는 공개하지 않습니다.",
    "meta.organization.label":"ORGANIZATION", "meta.organization.value":"이지케어텍 · 분당서울대학교병원",
    "meta.period.label":"PERIOD", "meta.period.value":"2024",
    "meta.role.label":"ROLE", "meta.role.value":".NET developer", "meta.stack.label":"STACK",
    "context.heading":"배경과 제약", "context.copy":"진료정보교류 거점 문서저장소의 통합 이관에 맞춰, 외부 알림을 수신한 뒤 기존 HIS의 의뢰·회송 업무 흐름 안에서 처리할 수 있도록 연동을 정비했습니다. 외래와 응급 업무 화면에서 수신 문서를 계속 확인할 수 있어야 했고, 외부 환자 식별 정보와 내부 등록 정보의 연결, 문서 메타데이터와 첨부파일 처리, 기존 화면 흐름의 유지가 함께 필요했습니다.",
    "flow.heading":"시스템 흐름", "flow.notification":"통합 거점 알림 API", "flow.mapping":"알림 응답 매핑", "flow.patient":"환자 식별 연계", "flow.document":"문서 메타데이터·첨부파일 처리", "flow.layers":"업무·데이터 계층", "flow.ui":"외래·응급 의뢰/회송 화면", "flow.note":"알림을 수신하는 데서 끝내지 않고, 내부 업무에 필요한 형태로 연결·저장한 뒤 기존 목록을 갱신하도록 구성했습니다.",
    "decisions.heading":"구현 판단", "decision.endpoint.title":"환경별 연동 경계", "decision.endpoint.copy":"연동 대상의 환경별 설정을 코드의 업무 로직과 분리해 관리했습니다. 통합 거점 전환에 따른 연결 지점의 변경이 화면과 저장 로직에 넓게 번지지 않도록 하기 위해서였습니다.", "decision.identity.title":"환자 식별 연계 단계 분리", "decision.identity.copy":"외부에서 받은 환자 식별 정보를 내부 환자 등록 정보와 연결하는 단계를 수신 흐름 안에 분리했습니다. 수신 문서가 기존 진료 업무에서 올바른 대상과 함께 조회될 수 있도록 하기 위한 판단이었습니다.", "decision.document.title":"문서와 첨부파일의 처리 흐름", "decision.document.copy":"의뢰·회송 문서의 메타데이터와 첨부파일 정보를 내부 업무·데이터 계층으로 전달하는 흐름을 정리했습니다. 외부 알림의 정보를 기존 업무 화면에서 활용할 수 있는 형태로 연결하기 위해서였습니다.", "decision.workflow.title":"운영 흐름을 고려한 수신", "decision.workflow.copy":"외래·응급 업무에서 수동 및 주기적 조회 흐름을 제공하고, 조회 기간을 제한했습니다. 저장 뒤에는 기존 의뢰·회송 목록을 다시 조회해 현업이 익숙한 화면 흐름에서 수신 결과를 확인하도록 했습니다.",
    "contribution.heading":"담당 범위", "contribution.one":"통합 거점 알림 API client와 환경별 연동 설정 처리 구현", "contribution.two":"외래·응급 수신 조회, 주기 조회, 조회 기간 검증 흐름 구현", "contribution.three":"외부 환자 식별 정보와 내부 환자 등록 정보의 연계, 의뢰·회송 메타데이터 저장 흐름 구현", "contribution.four":"문서 첨부파일 처리와 기존 의뢰·회송 목록 갱신을 업무·데이터 계층과 연계",
    "outcome.heading":"검증과 결과", "outcome.copy":"알림 수신, 환자 식별 연계, 문서 메타데이터·첨부파일 처리, 내부 저장과 기존 목록 갱신까지의 흐름을 검증했습니다. 통합 거점 문서저장소 이관 이후에도 현업이 기존 외래·응급 의뢰·회송 화면 안에서 수신 문서를 처리할 수 있도록 연결했습니다."
  },
  en: {
    "nav.back":"← Projects",
    "hero.kicker":"TECHNICAL CASE STUDY",
    "hero.title":"HIS Referral Workflow for an HIE Repository Migration",
    "hero.lead":"Reconnecting document intake from a consolidated HIE repository to existing HIS referral workflows",
    "hero.disclosure":"Institution and system identifiers, integration settings, data structures, and real clinical documents, attachments, and patient information are omitted for security and confidentiality.",
    "meta.organization.label":"ORGANIZATION", "meta.organization.value":"ezCaretech · Bundang Seoul National University Hospital",
    "meta.period.label":"PERIOD", "meta.period.value":"2024",
    "meta.role.label":"ROLE", "meta.role.value":".NET developer", "meta.stack.label":"STACK",
    "context.heading":"Context & Constraints", "context.copy":"As the healthcare information exchange repository moved to a consolidated hub, I updated the integration so that external notifications could continue to be handled within the HIS referral workflow. Outpatient and emergency users needed to keep reviewing received documents, while external patient identification had to be connected to internal registration data and document metadata and attachments had to fit the existing screen flow.",
    "flow.heading":"System Flow", "flow.notification":"Consolidated HIE notification API", "flow.mapping":"Notification response mapping", "flow.patient":"Patient identity matching", "flow.document":"Document metadata & attachment handling", "flow.layers":"Business & data layers", "flow.ui":"Outpatient & emergency referral UI", "flow.note":"The integration did more than receive notifications: it connected and persisted them in a form the existing workflow could use, then refreshed the established lists.",
    "decisions.heading":"Engineering Decisions", "decision.endpoint.title":"Environment-specific integration boundary", "decision.endpoint.copy":"I kept environment-specific integration settings separate from workflow logic so changes at the consolidated hub's connection point would not spread across the UI and persistence flow.", "decision.identity.title":"Dedicated patient identity matching", "decision.identity.copy":"I separated the step that connects externally received patient identity information to internal patient registration data within the intake flow. This let received documents be retrieved with the correct patient in the existing clinical workflow.", "decision.document.title":"Document and attachment processing flow", "decision.document.copy":"I organized the flow that passes referral-document metadata and attachment information into the internal business and data layers, making externally received notifications usable from the established workflow screens.", "decision.workflow.title":"Intake designed for operations", "decision.workflow.copy":"I provided manual and periodic intake flows for outpatient and emergency work and limited the query window. After saving, the existing referral lists were reloaded so staff could review received results in a familiar screen flow.",
    "contribution.heading":"My Contribution", "contribution.one":"Implemented the consolidated HIE notification API client and environment-specific integration settings", "contribution.two":"Implemented outpatient and emergency intake, periodic retrieval, and query-window validation", "contribution.three":"Implemented external-to-internal patient identity matching and referral metadata persistence", "contribution.four":"Connected document-attachment handling and established referral-list refreshes to the business and data layers",
    "outcome.heading":"Validation & Outcome", "outcome.copy":"I validated the path from notification intake and patient identity matching through document metadata and attachment handling, internal persistence, and established-list refreshes. After the repository migration, the integration connected received documents back to the existing outpatient and emergency referral workflows."
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
