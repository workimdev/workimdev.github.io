const translations = {
  ko: {
    "nav.back":"← 프로젝트",
    "hero.kicker":"TECHNICAL CASE STUDY",
    "hero.title":"역할·문서 서식 기반 임상 문서 승인 워크플로우",
    "hero.lead":"2024년 비상진료 대응 환경에서 전담간호사 작성 문서와 담당의 코사인의 역할·승인 경계를 명확히 한 HIS 업무 개선",
    "hero.disclosure":"보안과 기밀 유지를 위해 내부 역할 정의, 승인 정책, 문서 서식, 데이터 구조 및 실제 진료 문서·환자 정보는 공개하지 않습니다.",
    "meta.organization.label":"ORGANIZATION", "meta.organization.value":"이지케어텍 · 분당서울대학교병원",
    "meta.period.label":"PERIOD", "meta.period.value":"2024",
    "meta.role.label":"ROLE", "meta.role.value":".NET developer", "meta.stack.label":"STACK",
    "context.heading":"배경과 제약", "context.copy":"2024년 비상진료 대응 환경에서 전담간호사가 작성한 임상 문서를 담당의가 검토·코사인할 수 있도록, 작성 역할과 최종 승인 역할을 HIS 업무 흐름 안에서 구분할 필요가 있었습니다. 또한 수술·수술후·퇴원기록을 포함한 기존 진료기록 화면에서 승인 진행 상태를 확인하고 처리할 수 있어야 했습니다.", "context.sourceLink":"보건복지부 비상진료 관련 공식 안내 ↗",
    "flow.heading":"시스템 흐름", "flow.draft":"전담간호사 초안 작성", "flow.physician":"담당의 지정", "flow.pending":"코사인 대기 문서 조회·연결", "flow.cosign":"담당의 검토·코사인", "flow.validation":"역할·문서 서식별 승인 검증", "flow.status":"문서 상태·서명 정보 갱신", "flow.note":"초안 작성부터 담당의 지정, 대기 문서 연결, 코사인, 승인 검증과 상태 갱신까지를 하나의 업무 흐름으로 구성했습니다.",
    "decisions.heading":"구현 판단", "decision.boundary.title":"작성과 승인 책임 분리", "decision.boundary.copy":"전담간호사가 문서를 초안으로 작성하는 흐름과 담당의가 코사인으로 확인하는 흐름을 구분했습니다. 각 단계의 역할을 문서 상태에 반영해 작성과 승인 과정을 혼동하지 않도록 하기 위해서였습니다.", "decision.form.title":"역할·문서 서식별 승인 검증", "decision.form.copy":"모든 문서에 동일한 조건을 적용하지 않고, 역할과 문서 서식에 따라 필요한 승인 조건을 확인하도록 구성했습니다. 기존 임상 문서 흐름을 유지하면서 필요한 경우에만 코사인 단계를 연결하기 위한 판단이었습니다.", "decision.pending.title":"코사인 대기 문서의 가시성", "decision.pending.copy":"기존 코사인 의뢰 여부를 조회하고, 대기 문서를 의사 검토 흐름으로 연결하도록 구성했습니다. 담당의 지정과 승인 진행 상태가 현업 화면에서 확인되도록 하기 위해서였습니다.", "decision.clinical.title":"기존 임상 기록과의 연계", "decision.clinical.copy":"수술·수술후·퇴원기록의 진단과 서명 정보를 승인 흐름과 연결했습니다. 별도의 승인 화면을 늘리기보다 기존 진료기록 업무 안에서 필요한 단계가 이어지도록 하기 위해서였습니다.", "decision.layers.title":"업무 규칙의 계층 연결", "decision.layers.copy":"WPF 화면의 선택·제어 결과가 DTO를 거쳐 업무·데이터 계층의 승인 규칙과 상태 처리로 이어지도록 구성했습니다. 화면 조건과 저장 결과가 서로 다르게 동작하지 않도록 하기 위한 구조였습니다.",
    "contribution.heading":"담당 범위", "contribution.one":"전담간호사 작성 문서의 담당의 지정·코사인 UI 흐름 구현", "contribution.two":"역할·문서 서식별 승인 조건과 문서·서명 상태 갱신 규칙 구현", "contribution.three":"코사인 대기 문서 조회·연결과 수술·수술후·퇴원기록의 진단·서명 연계 고도화", "contribution.four":"WPF 화면부터 DTO, 업무서비스, 데이터 계층까지 승인 워크플로우 연계",
    "outcome.heading":"검증과 결과", "outcome.copy":"전담간호사 초안 작성, 담당의 지정, 코사인 대기 문서 연결, 담당의 검토·코사인, 역할·문서 서식별 승인 검증과 문서·서명 상태 갱신까지의 흐름을 구현했습니다. 비상진료 대응 환경에서 작성과 최종 승인 역할을 기존 HIS 진료기록 업무 안에서 구분하고 처리할 수 있도록 했습니다."
  },
  en: {
    "nav.back":"← Projects",
    "hero.kicker":"TECHNICAL CASE STUDY",
    "hero.title":"Role- and Document-Type-Based Clinical Document Approval Workflow",
    "hero.lead":"Clarifying authorship and attending-physician co-sign boundaries in the 2024 emergency-care response environment",
    "hero.disclosure":"Internal role definitions, approval policies, document forms, data structures, and real clinical documents and patient information are omitted for security and confidentiality.",
    "meta.organization.label":"ORGANIZATION", "meta.organization.value":"ezCaretech · Bundang Seoul National University Hospital",
    "meta.period.label":"PERIOD", "meta.period.value":"2024",
    "meta.role.label":"ROLE", "meta.role.value":".NET developer", "meta.stack.label":"STACK",
    "context.heading":"Context & Constraints", "context.copy":"In the 2024 emergency-care response environment, the HIS needed to distinguish document authorship from final approval so clinical documents drafted by designated nursing staff could be reviewed and co-signed by the attending physician. Staff also needed to track and process approval status within existing clinical-record screens, including surgical, postoperative, and discharge documentation.", "context.sourceLink":"Official Ministry of Health and Welfare notice on emergency medical care ↗",
    "flow.heading":"System Flow", "flow.draft":"Draft by designated nursing staff", "flow.physician":"Attending physician assignment", "flow.pending":"Pending co-sign retrieval & routing", "flow.cosign":"Physician review & co-sign", "flow.validation":"Role- & document-type validation", "flow.status":"Document status & signature update", "flow.note":"I connected drafting, attending-physician assignment, pending-document routing, co-signing, validation, and status updates as one workflow.",
    "decisions.heading":"Engineering Decisions", "decision.boundary.title":"Separate authoring and approval responsibility", "decision.boundary.copy":"I separated the flow in which designated nursing staff draft a document from the flow in which an attending physician confirms it through co-signing. Each role was reflected in the document status to keep authoring and approval stages distinct.", "decision.form.title":"Role- and document-type-based approval validation", "decision.form.copy":"Rather than applying one condition to every document, I checked the approval conditions required for each role and document type. This connected co-signing only where needed while retaining existing clinical-document workflows.", "decision.pending.title":"Visibility for pending co-signs", "decision.pending.copy":"I checked existing co-sign requests and routed pending documents to the physician-review flow, keeping attending-physician assignment and approval progress visible in the workflow UI.", "decision.clinical.title":"Integration with existing clinical records", "decision.clinical.copy":"I connected diagnosis and signature information from surgery, postoperative, and discharge records to the approval flow. The goal was to continue the required steps within familiar clinical-record work rather than add a separate approval screen.", "decision.layers.title":"Workflow rules across layers", "decision.layers.copy":"I connected WPF selection and control results through DTOs to approval rules and status handling in the business and data layers. This kept UI conditions and persisted outcomes aligned.",
    "contribution.heading":"My Contribution", "contribution.one":"Implemented attending-physician assignment and co-sign UI flows for documents drafted by designated nursing staff", "contribution.two":"Implemented role- and document-type-specific approval conditions and document and signature status update rules", "contribution.three":"Enhanced pending co-sign retrieval and routing, plus diagnosis and signature integration for surgery, postoperative, and discharge records", "contribution.four":"Connected the approval workflow from WPF UI through DTOs, business services, and data layers",
    "outcome.heading":"Validation & Outcome", "outcome.copy":"I implemented the workflow from drafts by designated nursing staff and attending-physician assignment through pending co-sign routing, physician review and co-signing, role- and document-type-specific validation, and document and signature status updates. This distinguished document authorship from final approval within the existing HIS clinical-record workflow."
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
