import Image from "next/image";
import Link from "next/link";
import styles from "./scene-tracker.module.css";

const features = [
  {
    number: "01",
    title: "작품에서 시작하는 탐색",
    description:
      "드라마·영화·예능 작품명을 검색하고 자동완성으로 저장된 작품을 찾습니다. 공개 근거가 연결된 촬영지 후보를 확인할 수 있습니다.",
    icon: "film",
  },
  {
    number: "02",
    title: "여행에 필요한 맥락",
    description:
      "촬영지 좌표를 기준으로 날씨와 반경 3km의 관광지·문화시설·음식점을 한 번에 살펴봅니다.",
    icon: "compass",
  },
  {
    number: "03",
    title: "내 조건에 맞춘 준비",
    description:
      "동행, 이동수단, 보행 편의, 관심사를 저장해 장소 상세에서 필요한 방문 정보를 안내합니다.",
    icon: "sliders",
  },
  {
    number: "04",
    title: "직접 만드는 여행 코스",
    description:
      "저장한 장소를 골라 방문 순서를 직접 정합니다. 지도에서 장소 위치를 확인하고 외부 지도 앱으로 구간별 길찾기를 연결합니다. 연결선은 실제 이동 경로가 아닙니다.",
    icon: "route",
  },
  {
    number: "05",
    title: "여행이 쌓이는 방문 기록",
    description:
      "방문 기록과 코스 진행률, 방문 장소 수에 따른 스탬프를 확인합니다. 수동 기록은 로그인 시 서버에 동기화하고, 동의한 자동 방문 기록은 앱 사용 중에만 판정해 기기에 보관합니다.",
    icon: "visit",
  },
  {
    number: "06",
    title: "함께 채우는 촬영지",
    description:
      "회원이 촬영지와 근거를 제보하면 운영자가 보완·승인·병합 과정을 거쳐 검수된 장소로 발행합니다.",
    icon: "submission",
  },
];

const steps = [
  ["SCENE", "좋아하는 작품을 검색합니다."],
  ["EVIDENCE", "출처가 연결된 촬영지 후보를 확인합니다."],
  ["PLAN", "장소를 저장하고 방문 순서를 직접 정합니다."],
  ["VISIT", "지도와 구간별 길찾기를 따라 이동합니다."],
  ["RECORD", "방문을 기록하고 코스 진행률을 확인합니다."],
];

const stack = [
  ["Mobile", "React Native · Expo Router · TypeScript"],
  ["API", "NestJS · Zod · TanStack Query"],
  ["Data", "PostgreSQL · PostGIS · TypeORM"],
  [
    "Public data",
    "한국관광공사에서 제공하는 관광정보 · 경기데이터드림 · 기상청",
  ],
  ["Research", "Gemini Grounding · 근거 저장 · 관리자 검수"],
  ["Trust", "이메일 확인 · 관리자 TOTP MFA · 요청 제한"],
  ["Operations", "AWS Lightsail 서울 · PostgreSQL · 최소수집 지표"],
  ["Delivery", "EAS Build · TestFlight 실기기 검증 · 스토어 서명"],
];

function FeatureIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    film: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M7 5v14M17 5v14M3 9h4M17 9h4M3 15h4M17 15h4" />
      </>
    ),
    compass: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9 4.9-2.1Z" />
      </>
    ),
    sliders: (
      <>
        <path d="M4 7h10M18 7h2M4 17h2M10 17h10" />
        <circle cx="16" cy="7" r="2" />
        <circle cx="8" cy="17" r="2" />
      </>
    ),
    route: (
      <>
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="6" r="2" />
        <path d="M8 18h3a3 3 0 0 0 3-3V9a3 3 0 0 1 3-3" />
      </>
    ),
    visit: (
      <>
        <path d="M8 3v3M16 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
        <path d="m9 15 2 2 4-5" />
      </>
    ),
    submission: (
      <>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
        <path d="m14 6 3 3" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

export default function SceneTrackerPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand} aria-label="pageFactory 홈으로">
          <Image
            src="/logo/page factory black.svg"
            alt="pageFactory"
            width={1064}
            height={159}
            sizes="120px"
          />
        </Link>
        <nav aria-label="Scene Tracker 페이지 탐색">
          <a href="#experience">Experience</a>
          <a href="#system">System</a>
          <a href="#status">Status</a>
          <a href="#download">Download</a>
          <Link href="/about/scene-tracker/updates">Updates</Link>
          <Link href="/about/scene-tracker/privacy-policy">Privacy</Link>
        </nav>
        <span className={styles.headerLabel}>PROJECT PAGE</span>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>
            <span /> K-CONTENT TRAVEL COMPANION
          </p>
          <h1>
            장면을 따라,
            <br />
            <em>여행이 시작됩니다.</em>
          </h1>
          <p className={styles.heroDescription}>
            Scene Tracker는 영상 콘텐츠 속 촬영지 후보를 공개 검색 근거와
            연결하고, 주변 관광정보와 날씨, 코스와 방문 기록까지 더해 실제
            여행으로 이어주는 모바일 서비스입니다. 사용자의 촬영지 제보도
            운영자 검수를 거쳐 새로운 여행 정보가 됩니다.
          </p>
          <div className={styles.heroActions}>
            <a href="#experience" className={styles.primaryButton}>
              프로젝트 살펴보기
              <span aria-hidden="true">↘</span>
            </a>
            <span className={styles.heroMeta}>
              REACT NATIVE · NESTJS · POSTGRESQL<br />
              PUBLIC DATA · GEMINI GROUNDING
            </span>
          </div>
        </div>

        <div className={styles.phoneStage} aria-label="Scene Tracker 홈 화면 미리보기">
          <span className={styles.orbitOne} />
          <span className={styles.orbitTwo} />
          <div className={styles.phone}>
            <div className={styles.phoneTop}>
              <div className={styles.phoneStatus}>
                <b>9:41</b>
                <span>● ● ▰</span>
              </div>
              <div className={styles.phoneNav}>
                <b>SCENE TRACKER</b>
                <span>○</span>
              </div>
              <h2>
                여행자님,
                <br />
                어떤 장면을 만나볼까요?
              </h2>
              <div className={styles.travelPrompt}>
                <i>✓</i>
                <span>
                  <b>내 여행 조건이 적용되어 있어요</b>
                  <small>동행과 이동수단에 맞춰 안내해요</small>
                </span>
                <strong>›</strong>
              </div>
            </div>
            <div className={styles.phoneSheet}>
              <div className={styles.search}>⌕　작품명이나 여행지 검색</div>
              <div className={styles.quickMenu}>
                {["촬영지", "여행지", "내 저장", "여행 조건"].map((item, i) => (
                  <span key={item}>
                    <i>{["▣", "⌖", "♡", "☷"][i]}</i>
                    {item}
                  </span>
                ))}
              </div>
              <div className={styles.phoneSectionTitle}>
                <b>작품으로 떠나는 여행</b>
                <small>추천</small>
              </div>
              <div className={styles.journeyCard}>
                <div className={styles.journeyImage}>
                  <span>SCENE ROUTE</span>
                  <b>선재 업고 튀어</b>
                </div>
                <div className={styles.journeyBody}>
                  <small>⌖ 수원 화성</small>
                  <b>장면 속 그곳에서 시작하는 하루</b>
                  <div>
                    <span>촬영지 5곳</span>
                    <span>한국관광공사 제공 3곳</span>
                  </div>
                  <strong>여행 살펴보기　›</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.statement}>
        <p>WHY</p>
        <div>
          <h2>
            촬영지는 흩어져 있고,
            <br />
            여행에는 <span>맥락</span>이 필요합니다.
          </h2>
          <p>
            작품 소개, 블로그, SNS에 흩어진 촬영지 정보는 정확한 위치와 주변 여행정보가 부족합니다.<br />
            Scene Tracker는 장소의 근거를 확인하고 데이터를 결합해 “오늘 실제로 다녀올 수 있는가?”에 답합니다.
          </p>
        </div>
      </section>

      <section id="experience" className={styles.features}>
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>
            <span /> CORE EXPERIENCE
          </p>
          <h2>장면을 발견하는 순간부터<br />길을 나서는 순간까지.</h2>
        </div>
        <div className={styles.featureGrid}>
          {features.map((feature) => (
            <article key={feature.number} className={styles.featureCard}>
              <div className={styles.featureTop}>
                <span>{feature.number}</span>
                <i><FeatureIcon name={feature.icon} /></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.flow}>
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>
            <span /> HOW IT WORKS
          </p>
          <h2>정보를 모으는 앱이 아니라,<br />신뢰를 연결하는 흐름.</h2>
        </div>
        <ol>
          {steps.map(([label, copy], index) => (
            <li key={label}>
              <span>0{index + 1}</span>
              <b>{label}</b>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="system" className={styles.system}>
        <div className={styles.systemCopy}>
          <p className={styles.eyebrow}>
            <span /> RELIABLE BY DESIGN
          </p>
          <h2>AI는 찾고,<br />근거와 경계가 확인합니다.</h2>
          <p>
            미등록 작품은 공개 근거를 바탕으로 촬영지 후보를 조사합니다. 결과는
            확정 사실과 분리해 저장하고, 좌표를 추측하거나 한국관광공사에서
            제공하는 장소 정보에 억지로 연결하지 않습니다. 현장 확인에 쓰는 현재
            위치는 단말기 안에서만 처리합니다.
          </p>
          <ul>
            <li>동일 작품 결과 DB 재사용으로 중복 호출 방지</li>
            <li>원문 URL·게시자·근거 문장·조사 시각 저장</li>
            <li>현재 좌표·정확도·자동 방문 판정의 서버 전송 차단</li>
            <li>이메일·위치·자유 검색어 없는 최소 운영 지표</li>
          </ul>
        </div>
        <div className={styles.dataDiagram}>
          <div className={styles.dataNode}>
            <small>01 / DISCOVER</small>
            <b>작품 검색</b>
            <span>DB 우선 조회</span>
          </div>
          <i>→</i>
          <div className={`${styles.dataNode} ${styles.dataNodeAccent}`}>
            <small>02 / RESEARCH</small>
            <b>근거 기반 조사</b>
            <span>Gemini Grounding</span>
          </div>
          <i>→</i>
          <div className={styles.dataNode}>
            <small>03 / CONNECT</small>
            <b>한국관광공사 제공 관광정보</b>
            <span>반경 3km 실시간 조회</span>
          </div>
          <i>→</i>
          <div className={styles.dataNode}>
            <small>04 / REVIEW</small>
            <b>관리자 검수·발행</b>
            <span>AI 후보 · 회원 제보</span>
          </div>
        </div>
      </section>

      <section id="status" className={styles.status}>
        <div className={styles.statusHeading}>
          <div>
            <p className={styles.eyebrow}>
              <span /> BUILD STATUS
            </p>
            <h2>검색부터 방문 기록까지,<br />출시 후에도 개선하는 여행 앱.</h2>
          </div>
          <p>
            2026.09.15 기준 한국어·영어 주요 화면과 관광정보 전환, 작품 검색
            자동완성, 방문 기록 기반 스탬프를 제공합니다. 1.0.4 업데이트에서는
            관광정보 출처와 서비스 안내를 정리하고 있습니다. 개인화 순위 추천과
            자동 코스 최적화는 향후 검토 범위이며, 설치 가능한 버전은 App Store에서
            확인할 수 있습니다.
          </p>
        </div>
        <div className={styles.statusGrid}>
          <div className={styles.progressCard}>
            <span>IMPLEMENTED</span>
            <strong>KO / EN</strong>
            <p>한국어·영어 주요 화면 지원</p>
            <div><i /></div>
            <small>검색 자동완성 · 코스 · 지도 연결 · 방문 기록 · 스탬프</small>
          </div>
          <div className={styles.progressCard}>
            <span>PLANNED</span>
            <strong>NEXT</strong>
            <p>향후 검토할 기능</p>
            <div><i /></div>
            <small>개인화 순위 추천 · 자동 코스 최적화 · 추가 언어</small>
          </div>
          <div className={styles.stackCard}>
            {stack.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <b>{value}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="download" className={styles.finalCta}>
        <p>FROM SCREEN TO STREET</p>
        <h2>
          좋아했던 장면을,
          <br />
          <span>당신의 여행으로.</span>
        </h2>
        <Link
          href="https://apps.apple.com/kr/app/scene-tracker-filming-location/id6805334478"
          className={styles.appStoreButton}
          target="_blank"
        >
          <Image
            src="/app-store-badge.svg"
            alt="App Store에서 Scene Tracker 다운로드"
            width={130}
            height={40}
            sizes="180px"
          />
        </Link>
        <Link href="/" className={styles.primaryButton}>
          pageFactory로 돌아가기 <span aria-hidden="true">↗</span>
        </Link>
        <div className={styles.footerLinks}>
          <Link
            href="/about/scene-tracker/privacy-policy"
            className={styles.privacyLink}
          >
            개인정보 처리방침
          </Link>
          <span aria-hidden="true">·</span>
          <Link href="/about/scene-tracker/updates" className={styles.privacyLink}>
            업데이트 내역
          </Link>
        </div>
      </section>
    </main>
  );
}
