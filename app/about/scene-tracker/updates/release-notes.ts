export const releaseNotes = [
  {
    version: "1.0.3",
    date: "2026-09-12",
    ko: {
      title: "찾고, 기록하고, 다시 떠나는 여행",
      summary: "작품 검색과 여행 기록을 더 편리하게 다듬었습니다.",
      changes: [
        "저장된 작품을 더 빠르게 찾을 수 있도록 검색 자동완성을 추가했습니다.",
        "방문 기록에 따라 여행 스탬프를 모을 수 있도록 했습니다.",
        "작품 정보와 촬영지를 찾는 검색 과정을 개선했습니다.",
        "화면 표시와 사용 흐름에서 발견된 여러 버그를 수정했습니다.",
        "개발자의 카페인이 부족해 충전이 필요합니다.",
      ],
    },
    en: {
      title: "Find scenes. Keep memories. Travel again.",
      summary: "A smoother way to search titles and keep track of your travels.",
      changes: [
        "Added search autocomplete to help you find saved titles faster.",
        "You can now collect travel stamps as your visit history grows.",
        "Improved how the app searches for title details and filming locations.",
        "Fixed various bugs affecting screen display and navigation.",
        "The developer is running low on caffeine and needs a refill.",
      ],
    },
  },
  {
    version: "1.0.2",
    date: "2026-08-26",
    ko: {
      title: "출시 화면과 기기 사용성 정돈",
      summary: "첫 공개를 준비하며 실제 기기에서 보이는 화면을 안정화했습니다.",
      changes: [
        "iPhone의 상단 안전 영역과 하단 탭 주변 배치를 개선했습니다.",
        "Liquid Glass 탭 아래 콘텐츠까지 스크롤할 수 있도록 여백을 조정했습니다.",
        "시작 화면과 앱 아이콘에 Scene Tracker 브랜드를 적용했습니다.",
      ],
    },
    en: {
      title: "A more polished launch experience",
      summary: "Refined the app on real devices ahead of its first release.",
      changes: [
        "Improved safe-area spacing and bottom-tab layouts on iPhone.",
        "Adjusted scrolling so content remains reachable beneath Liquid Glass tabs.",
        "Applied Scene Tracker branding to the launch screen and app icon.",
      ],
    },
  },
  {
    version: "1.0.1",
    date: null,
    ko: {
      title: "첫 출시 준비를 위한 안정화",
      summary: "초기 버전의 화면·계정·여행 흐름을 점검하고 다듬었습니다.",
      changes: [
        "여러 화면의 스크롤과 안전 영역을 조정했습니다.",
        "앱 실행과 화면 전환 과정의 표시 문제를 개선했습니다.",
      ],
    },
    en: {
      title: "Stability improvements for launch",
      summary: "Refined the initial app experience before release.",
      changes: [
        "Adjusted scrolling and safe-area handling across screens.",
        "Improved presentation during launch and screen transitions.",
      ],
    },
  },
  {
    version: "1.0",
    date: null,
    ko: {
      title: "Scene Tracker의 시작",
      summary: "좋아하는 작품의 촬영지를 실제 여행으로 연결하는 첫 버전입니다.",
      changes: [
        "드라마·영화 작품과 촬영지, 주변 관광정보를 탐색합니다.",
        "장소를 저장하고 나만의 여행 코스를 만듭니다.",
        "방문 기록과 여행 조건을 관리합니다.",
        "회원 계정과 촬영지 제보 기능을 제공합니다.",
      ],
    },
    en: {
      title: "Introducing Scene Tracker",
      summary: "The first step from favorite on-screen scenes to real journeys.",
      changes: [
        "Explore film and drama locations alongside nearby tourism information.",
        "Save places and create personal travel courses.",
        "Manage visit history and travel preferences.",
        "Use an account and submit filming-location suggestions.",
      ],
    },
  },
] as const;
