const translations = {
  ko: {
    "nav.about":"소개", "nav.education":"학력", "nav.experience":"경력", "nav.projects":"프로젝트", "nav.skills":"기술",
    "cv.link":"CV ↗", "cv.url":"https://drive.google.com/file/d/14H9H5G6KJ4sI8g3kpr24WYvoGW2EyF3m/view?usp=drive_link",
    "company.enliple":"인라이플", "company.ezcaretech":"이지케어텍",
    "section.education":"학력", "heading.education":"학력", "education.school":"삼육보건대학교", "education.degree":"의료정보공학과", "education.date":"2017.02 — 2022.02",
    "hero.summary":"저는 Windows 데스크톱 애플리케이션과 의료정보시스템을 개발하는 .NET 개발자입니다.",
    "hero.experience":"이지케어텍에서 분당서울대학교병원 HIS의 진료기록 업무를 담당하며 Oracle 기반 데이터 처리와 외부 의료·헬스케어 API 연동을 구현했습니다. 현재는 인라이플에서 ezMemo의 Local-First 동기화 구조, 데이터 마이그레이션, 설치·자동 업데이트 환경을 개발하고 있습니다.",
    "hero.ai":"최근에는 AI를 레거시 코드 분석, 작업 계획 수립, 회귀 시나리오 정리와 검증 과정에 반영하고 있습니다. 특히 컨텍스트, 도구 사용, 검증 절차를 함께 설계하는 하네스 엔지니어링에 관심이 있습니다.",
    "section.experience":"경력", "heading.experience":"경력", "section.projects":"주요 프로젝트", "heading.projects":"주요 프로젝트", "section.skills":"기술 및 학력", "heading.about":"사용자와 데이터를 이해하는 개발자",
    "role.developer":"· 소프트웨어 개발자", "role.it":"· 의료정보팀",
    "experience.inlife":"ezMemo Windows 데스크톱 애플리케이션의 기능 개발, Local-First 동기화 구조, 데이터 마이그레이션과 릴리스 품질을 담당하고 있습니다.",
    "experience.inlife.role":".NET developer · 모비소프트 개발팀 · 서울, 대한민국",
    "experience.inlife.date":"2025.09 — 현재",
    "experience.ezcare":"병원정보시스템(HIS)의 개발·유지보수와 진료정보 연동, Oracle 기반 데이터 처리 업무를 수행했습니다.",
    "experience.ezcare.role":".NET developer · 분당서울대학교병원 · 성남, 대한민국",
    "experience.ezcare.date":"2022.08 — 2025.05",
    "experience.snu":"치과병원 의료정보시스템의 운영 지원과 사용자 요청 기능 개발을 담당했습니다.",
    "experience.snu.company":"서울대학교치과병원", "experience.snu.role":"인턴 · 의료정보팀 · 서울, 대한민국", "experience.snu.date":"2020.12 — 2021.06",
    "project.ezmemo.meta":"2025 — 2026 · 인라이플", "project.ezcare.meta":"2024 · 이지케어텍", "project.ezmemo.title":"ezMemo PC 정식 출시", "project.pasta.title":"카카오 파스타 혈당 데이터 연동", "project.exchange.title":"진료정보교류 거점 문서저장소 이관 대응", "project.approval.title":"역할·문서 서식 기반 임상 문서 승인 워크플로우", "project.ezmemo.lead":"모바일 버전과 데이터를 공유·동기화하도록 Local-First 구조로 전환해 정식 출시한 Windows 메모 애플리케이션", "project.ezmemo.copy":"공통 데이터 모델과 동기화 규칙, 기존 사용자 데이터 마이그레이션, 오프라인 사용·재동기화, 설치·자동 업데이트를 구현했습니다. 정식 출시 후 일평균 다운로드는 베타 운영 대비 약 80% 증가했고, 최고 일 다운로드는 베타 평균 대비 약 4배를 기록했습니다.",
    "project.productLink":"제품 페이지 ↗", "project.caseStudyLink":"구현 사례 ↗", "project.ezmemo.productUrl":"https://ezlab.im/ko/tool/ezmemo",
    "project.pasta.lead":"외부 헬스케어 앱의 혈당 데이터를 병원 진료기록에서 바로 활용하도록 만든 HIS 연동", "project.pasta.copy":"병원 HIS 측 연동 범위에서 통신·인증, REST API·JSON 처리, 환자·진료 컨텍스트 연결, 혈당 리포트와 가공 지표의 진료기록 활용 흐름을 구현했습니다.",
    "project.exchange.lead":"통합 거점 알림 API를 HIS 의뢰·회송 업무에 연결", "project.exchange.copy":"환자 식별 연계와 문서 메타데이터·첨부파일 처리, 기존 화면 목록 갱신까지 이관 흐름을 구현했습니다.",
    "project.approval.lead":"2024 비상진료 대응 환경에서 전담간호사 초안과 담당의 코사인을 연결한 EMR 승인 흐름", "project.approval.copy":"담당의 지정과 코사인 대기 문서 연결, 역할·문서 서식별 승인 검증, 문서·서명 상태 갱신 흐름을 구현했습니다.",
    "about.ko":"복잡하고 민감한 의료 도메인에서 요구사항을 화면·데이터·업무 흐름의 관점으로 이해하고 안정적인 소프트웨어로 구현해 왔습니다. 유지보수, 기능 확장, 배포와 운영까지 제품의 긴 생애주기를 고려합니다.", "about.en":"신뢰할 수 있는 시스템을 만드는 세부 요소—정확한 데이터 흐름, 실용적인 사용자 경험, 견고한 연동, 유지보수 가능한 코드—를 중요하게 생각합니다.", "details.focus":"데스크톱 애플리케이션 · 시스템 연동 · 신뢰할 수 있는 데이터", "details.education":"삼육보건대학교 의료정보공학과<br />Medical Information Engineering, Sahmyook Health University"
  },
  en: {
    "nav.about":"About", "nav.education":"Education", "nav.experience":"Work Experience", "nav.projects":"Projects", "nav.skills":"Skills",
    "cv.link":"CV ↗", "cv.url":"https://drive.google.com/file/d/1K8zyKO_pUwWhq0M52xrvm42RUpgrI4y0/view?usp=drive_link",
    "company.enliple":"ENLIPLE", "company.ezcaretech":"ezCaretech",
    "section.education":"Education", "heading.education":"Education", "education.school":"Sahmyook Health University", "education.degree":"Medical Information Engineering", "education.date":"Feb. 2017 — Feb. 2022",
    "hero.summary":"I am a .NET developer building Windows desktop applications and healthcare information systems.",
    "hero.experience":"At ezCaretech, I worked on clinical-record workflows for the Bundang Seoul National University Hospital HIS, implementing Oracle-based data processing and integrations with external medical and healthcare APIs. I now develop ezMemo at ENLIPLE, focusing on its local-first synchronization architecture, data migration, installation, and automatic updates.",
    "hero.ai":"I actively incorporate AI into legacy-code analysis, planning, regression-scenario organization, and validation. I am particularly interested in harness engineering: designing context, tool use, and verification procedures together.",
    "section.experience":"Work Experience", "heading.experience":"Work Experience", "section.projects":"Selected Projects", "heading.projects":"Projects", "section.skills":"Skills & Education", "heading.about":"A developer who understands users and data",
    "role.developer":"· Software Developer", "role.it":"· IT Team",
    "experience.inlife":"Developing ezMemo, a Windows desktop memo application, with a focus on local-first synchronization, data migration, and release quality.",
    "experience.inlife.role":".NET developer · Mobsoft Development Team · Seoul, Korea",
    "experience.inlife.date":"Sep. 2025 — Present",
    "experience.ezcare":"Built and maintained hospital information systems, clinical integrations, and Oracle-based data workflows.",
    "experience.ezcare.role":".NET developer · Bundang Seoul National University Hospital · Seongnam, Korea",
    "experience.ezcare.date":"Aug. 2022 — May 2025",
    "experience.snu":"Supported the operation and feature development of dental hospital information systems.",
    "experience.snu.company":"Seoul National University Dental Hospital", "experience.snu.role":"Intern · Medical Information Team · Seoul, Korea", "experience.snu.date":"Dec. 2020 — Jun. 2021",
    "project.ezmemo.meta":"2025 — 2026 · ENLIPLE", "project.ezcare.meta":"2024 · ezCaretech", "project.ezmemo.title":"ezMemo PC Official Launch", "project.pasta.title":"Kakao Pasta Blood Glucose Data Integration", "project.exchange.title":"HIS Referral Workflow for an HIE Repository Migration", "project.approval.title":"Role- and Document-Type-Based Clinical Document Approval Workflow", "project.ezmemo.lead":"A Windows memo app re-architected for cross-device synchronization with its mobile version and officially launched", "project.ezmemo.copy":"Implemented a shared data model and synchronization rules, existing-user data migration, offline continuity and resynchronization, installation, and automatic updates. After launch, average daily downloads increased by about 80% over the beta period, while the peak daily figure reached roughly four times the beta average.",
    "project.productLink":"Product page ↗", "project.caseStudyLink":"Technical case study ↗", "project.ezmemo.productUrl":"https://ezlab.im/en/tool/ezmemo",
    "project.pasta.lead":"A HIS integration that makes blood glucose data from an external healthcare app available directly in hospital clinical records", "project.pasta.copy":"Within the hospital HIS integration boundary, implemented communication and authentication, REST API/JSON processing, patient and encounter context association, and clinical use of glucose reports and processed metrics.",
    "project.exchange.lead":"Connecting a hub notification API to established HIS referral workflows", "project.exchange.copy":"Implemented the migration flow from patient-identity linkage through document metadata and attachment handling to refreshing the existing worklist UI.",
    "project.approval.lead":"An EMR approval flow connecting drafts by designated nursing staff with attending-physician co-signatures in the 2024 emergency-care response environment", "project.approval.copy":"Implemented attending-physician assignment, pending co-sign routing, role- and document-type-specific approval validation, and document and signature status updates.",
    "about.ko":"In complex, data-sensitive healthcare environments, I translate requirements into dependable software by understanding interfaces, data, and operational workflows together.", "about.en":"I care about the details that make systems trustworthy: sound data flows, practical user experiences, resilient integration, and maintainable code.", "details.focus":"Desktop Applications · System Integration · Reliable Data", "details.education":"Medical Information Engineering<br />Sahmyook Health University"
  }
};

const applyLanguage = (language) => {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.innerHTML = translations[language][element.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-href]").forEach((element) => {
    element.href = translations[language][element.dataset.i18nHref];
  });
  document.getElementById("language-toggle").textContent = language === "ko" ? "EN" : "KO";
  localStorage.setItem("portfolio-language", language);
};

const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  document.getElementById("theme-toggle").textContent = theme === "dark" ? "☀" : "◐";
  localStorage.setItem("portfolio-theme", theme);
};

const savedLanguage = localStorage.getItem("portfolio-language") || "ko";
const savedTheme = localStorage.getItem("portfolio-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
applyLanguage(savedLanguage);
applyTheme(savedTheme);
document.getElementById("language-toggle").addEventListener("click", () => applyLanguage(document.documentElement.lang === "ko" ? "en" : "ko"));
document.getElementById("theme-toggle").addEventListener("click", () => applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
