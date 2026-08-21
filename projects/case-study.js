const translations = {
  ko: {
    "nav.back":"← 프로젝트",
    "hero.kicker":"TECHNICAL CASE STUDY",
    "hero.title":"카카오 파스타 혈당 데이터 연동",
    "hero.lead":"외부 헬스케어 앱의 혈당 데이터를 병원 정보시스템(HIS)과 연결해, 의료진이 기존 진료기록에서 활용할 수 있도록 한 연동 프로젝트",
    "hero.disclosure":"보안과 기밀 유지를 위해 내부 시스템 식별 정보, API 세부 사양, 환자 데이터는 공개하지 않습니다. 외부 서비스의 환자 본인인증, 계정 매핑, 동의, 원천 데이터 수집은 본 HIS 연동의 담당 범위에 포함하지 않습니다.",
    "meta.organization.label":"ORGANIZATION", "meta.organization.value":"이지케어텍 · 분당서울대학교병원",
    "meta.period.label":"PERIOD", "meta.period.value":"2024",
    "meta.role.label":"ROLE", "meta.role.value":".NET developer", "meta.stack.label":"STACK",
    "context.heading":"배경과 제약", "context.copy":"외부 헬스케어 앱의 혈당 데이터를 병원 진료기록 안에서 활용하려면, 중계 서버 기반 통신·인증과 REST API·JSON 처리, 기존 EMR 환자·수진 컨텍스트를 활용한 환자 연결이 필요했습니다. 이후 AGP 리포트와 사전 적재된 혈당 가공 지표를 각각 기존 기록 작성 흐름과 진료서식에서 소비하도록 연결했습니다.",
    "flow.heading":"시스템 흐름", "flow.foundation.label":"외부 데이터 연동 기반 흐름", "flow.foundation.external":"외부 헬스케어 서비스", "flow.foundation.relay":"중계 서버 기반 통신·인증", "flow.foundation.api":"REST API·JSON 수신/변환", "flow.foundation.patient":"EMR 환자·수진 컨텍스트를 활용한 환자 연결", "flow.reportPath.label":"AGP 리포트 소비 경로", "flow.report.record":"외래 초진/경과기록", "flow.report.eligibility":"사용자·진료과·서식 조건 확인", "flow.report.request":"AGP 리포트 조회", "flow.report.image":"리포트 이미지 조회·수신", "flow.report.insert":"현재 진료기록 본문 삽입", "flow.report.saveSign":"기존 저장·서명 절차", "flow.metricsPath.label":"혈당 가공 지표 소비 경로", "flow.metrics.identifier":"환자 연결된 혈당 가공 데이터", "flow.metrics.query":"Oracle DB 조회·PL/SQL 업무 처리", "flow.metrics.data":"혈당 지표·그래프 데이터", "flow.metrics.form":"진료서식 활용", "flow.note":"상단은 외부 데이터를 HIS에 연결하는 기반 흐름이고, 아래 두 경로는 연결된 데이터를 소비하는 흐름입니다. AGP 리포트는 이미지로 현재 기록 본문에 반영하고, 혈당 가공 지표는 Oracle 기반 조회를 거쳐 진료서식에서 활용합니다.",
    "decisions.heading":"구현 판단", "decision.integration.title":"HIS 연동 경계", "decision.integration.copy":"외부 서비스와의 중계 서버 기반 통신·인증 흐름을 HIS 측 REST API·JSON 처리로 수용하고, 기존 EMR 환자·수진 컨텍스트를 활용해 환자를 연결했습니다.", "decision.availability.title":"조건 기반 기능 노출", "decision.availability.copy":"공통 진료기록 헤더의 AGP 기능은 외래 여부, 기록 유형, 사용자, 진료과 조건을 확인한 뒤에만 노출되도록 구성했습니다.", "decision.core.title":"공통 진료기록 인터페이스로의 확장", "decision.core.copy":"외부 혈당 데이터를 한 병원의 일회성 화면 기능으로 만들기보다, 기존 HIS의 공통 진료기록 인터페이스 안에 통합했습니다. AGP 조회·리포트 반영 기능은 공통 헤더에서 제공하고, 병원별 적용 대상은 사용자·진료과·기록 서식 조건으로 조정하도록 구성했습니다. 이를 통해 업무 정책은 조건 설정으로 조정하면서도 핵심 연동 흐름은 공통 구조로 유지해, 다른 병원 환경에도 포팅·확장할 수 있도록 고려했습니다.", "decision.paths.title":"두 소비 경로 분리", "decision.paths.copy":"AGP 경로는 리포트 이미지를 조회해 현재 기록에 반영하고, 지표 경로는 Oracle·PL/SQL 기반 업무 처리를 거쳐 사전 적재 데이터를 진료서식에 매핑합니다.", "decision.workflow.title":"기존 저장·서명 흐름과 오류 안내", "decision.workflow.copy":"AGP 리포트는 이미지 조회·본문 삽입까지만 담당하고, 이후에는 기존 기록 저장·서명 절차가 이어지도록 했습니다. 호출 실패 또는 리포트 미작성 상태는 확인 가능한 안내로 처리했습니다.",
    "contribution.heading":"담당 범위", "contribution.one":"중계 서버 기반 외부 연동 흐름에 맞춘 HIS 측 REST API·JSON 수신·변환 구현", "contribution.two":"기존 EMR 환자·수진 컨텍스트를 이용한 환자 연결 및 공통 헤더의 조건 기반 AGP 기능 노출 구성", "contribution.three":"AGP 리포트 이미지 조회·현재 EMR 진료기록 본문 반영과 오류·미작성 안내 구현", "contribution.four":"Oracle DB 조회와 PL/SQL 기반 업무 처리를 통한 혈당 가공 지표·그래프 데이터의 진료서식 매핑", "contribution.five":"리포트 반영 후 기존 기록 저장·서명 절차가 유지되도록 업무 흐름 연결",
    "outcome.heading":"검증과 결과", "outcome.copy":"외부 헬스케어 앱의 혈당 데이터를 환자별 진료기록 업무 흐름에서 활용할 수 있도록 했습니다. AGP 리포트 이미지는 현재 기록 본문에서 확인·반영하고, 혈당 가공 지표는 Oracle·PL/SQL 기반 조회를 거쳐 진료서식에서 활용하도록 연결했습니다."
  },
  en: {
    "nav.back":"← Projects",
    "hero.kicker":"TECHNICAL CASE STUDY",
    "hero.title":"Kakao Pasta Blood Glucose Data Integration",
    "hero.lead":"An integration that brought blood glucose data from an external healthcare app into a hospital information system (HIS) for use within existing clinical records",
    "hero.disclosure":"Internal system identifiers, API specifications, and patient data are omitted for security and confidentiality. Patient identity verification, account mapping, consent, and source-data collection by the external service were outside the scope of this HIS integration.",
    "meta.organization.label":"ORGANIZATION", "meta.organization.value":"ezCaretech · Bundang Seoul National University Hospital",
    "meta.period.label":"PERIOD", "meta.period.value":"2024",
    "meta.role.label":"ROLE", "meta.role.value":".NET developer", "meta.stack.label":"STACK",
    "context.heading":"Context & Constraints", "context.copy":"Making blood glucose data from an external healthcare app usable in hospital clinical records required relay-server-based communication and authentication, REST API and JSON processing, and patient association through the existing EMR patient and encounter context. AGP reports and preloaded processed glucose metrics were then connected to the established documentation flow and clinical forms respectively.",
    "flow.heading":"System Flow", "flow.foundation.label":"External data integration foundation", "flow.foundation.external":"External healthcare service", "flow.foundation.relay":"Relay-server communication & authentication", "flow.foundation.api":"REST API & JSON receipt/transformation", "flow.foundation.patient":"Patient association through EMR patient & encounter context", "flow.reportPath.label":"AGP report consumption path", "flow.report.record":"Outpatient initial/follow-up record", "flow.report.eligibility":"User, department & form eligibility check", "flow.report.request":"AGP report request", "flow.report.image":"Report image retrieval", "flow.report.insert":"Inserted in active record body", "flow.report.saveSign":"Existing save & signature flow", "flow.metricsPath.label":"Processed glucose metric consumption path", "flow.metrics.identifier":"Patient-associated processed glucose data", "flow.metrics.query":"Oracle DB query & PL/SQL processing", "flow.metrics.data":"Glucose metrics & graph data", "flow.metrics.form":"Clinical-form use", "flow.note":"The top row is the foundation that connects external data to HIS; the two paths below consume the connected data. AGP reports are reflected as images in the active record body, while processed glucose metrics are retrieved through Oracle-based processing for use in clinical forms.",
    "decisions.heading":"Engineering Decisions", "decision.integration.title":"HIS integration boundary", "decision.integration.copy":"I accommodated the relay-server communication and authentication flow from the external service through HIS-side REST API and JSON processing, then associated patients using the existing EMR patient and encounter context.", "decision.availability.title":"Condition-based function visibility", "decision.availability.copy":"The AGP function in the shared clinical-record header was shown only after checking visit type, record type, user, and department conditions.", "decision.core.title":"Extending a common clinical-record interface", "decision.core.copy":"Rather than creating a one-off screen for a single hospital, I integrated the feature into the core clinical-record interface. The shared header provides AGP lookup and report insertion, while the target scope can be adjusted by user, department, and form conditions for each hospital. This keeps hospital-specific workflow policies configurable while preserving a common integration flow that can be ported or extended for other hospital environments.", "decision.paths.title":"Separating the two consumption paths", "decision.paths.copy":"The AGP path retrieves report images for the active record, while the metric path maps preloaded data to clinical forms through Oracle and PL/SQL-based processing.", "decision.workflow.title":"Save/signature continuity and error guidance", "decision.workflow.copy":"AGP handling is limited to image retrieval and insertion into the record body; the existing record save and signature procedure then continues. Clear guidance is shown when a request fails or a report has not been created.",
    "contribution.heading":"My Contribution", "contribution.one":"Implemented HIS-side REST API and JSON receipt/transformation for the relay-server-based integration flow", "contribution.two":"Configured patient association through existing EMR patient and encounter context, plus condition-based AGP visibility in the shared record header", "contribution.three":"Implemented AGP report-image retrieval and insertion into the active EMR record body, including guidance for failed or unavailable reports", "contribution.four":"Mapped processed glucose metrics and graph data to clinical forms through Oracle DB queries and PL/SQL-based processing", "contribution.five":"Connected report handling to preserve the existing record save and signature workflow",
    "outcome.heading":"Validation & Outcome", "outcome.copy":"Made blood glucose data from an external healthcare app available within patient-specific clinical-record workflows. AGP report images can be reviewed and reflected in the active record body, while processed glucose metrics are retrieved through Oracle and PL/SQL-based processing for use in clinical forms."
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
