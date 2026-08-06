import Link from "next/link";
import styles from "./scene-tracker.module.css";

const features = [
  {
    number: "01",
    title: "작품에서 시작하는 탐색",
    description:
      "드라마·영화·예능 작품명으로 촬영지를 찾고, 작품과 장소의 연결 근거를 함께 확인합니다.",
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
    title: "지도까지 이어지는 동선",
    description:
      "마음에 드는 촬영지를 저장하고 네이버지도·카카오맵으로 목적지를 바로 연결합니다.",
    icon: "route",
  },
];

const steps = [
  ["SCENE", "좋아하는 작품을 검색합니다."],
  ["EVIDENCE", "출처가 연결된 촬영지 후보를 확인합니다."],
  ["AROUND", "날씨와 주변 관광정보를 함께 살펴봅니다."],
  ["ROUTE", "저장한 장소를 실제 여행으로 이어갑니다."],
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
          <img src="/logo/page factory black.svg" alt="pageFactory" />
        </Link>
        <nav aria-label="Scene Tracker 페이지 탐색">
          <a href="#experience">Experience</a>
          <a href="#system">System</a>
          <a href="#status">Status</a>
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
            Scene Tracker는 영상 콘텐츠 속 촬영지를 검증 가능한 정보와
            연결하고, 주변 관광지와 날씨까지 더해 실제 방문 가능한 여행으로
            바꾸는 모바일 서비스입니다.
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
        <p>01 — WHY</p>
        <div>
          <h2>
            촬영지는 흩어져 있고,
            <br />
            여행에는 <span>맥락</span>이 필요합니다.
          </h2>
          <p>
            작품 소개, 블로그, SNS에 흩어진 촬영지 정보는 정확한 위치와 주변
            여행정보가 부족합니다. Scene Tracker는 장소의 근거를 확인하고
            공공 관광데이터를 결합해 “오늘 실제로 다녀올 수 있는가?”에
            답합니다.
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
          <h2>AI는 찾고,<br />근거가 확인합니다.</h2>
          <p>
            미등록 작품은 공개 근거를 바탕으로 촬영지 후보를 조사합니다. 결과는
            확정 사실과 분리해 저장하고, 좌표를 추측하거나 한국관광공사에서
            제공하는 장소 정보에 억지로 연결하지 않습니다.
          </p>
          <ul>
            <li>동일 작품 결과 DB 재사용으로 중복 호출 방지</li>
            <li>원문 URL·게시자·근거 문장·조사 시각 저장</li>
            <li>점수와 후보 차이를 기준으로 자동 연결과 검수 분리</li>
            <li>일일 처리량·월 예산·동시 실행 제한</li>
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
            <b>관리자 검수</b>
            <span>승인 · 반려 · 보류</span>
          </div>
        </div>
      </section>

      <section id="status" className={styles.status}>
        <div className={styles.statusHeading}>
          <div>
            <p className={styles.eyebrow}>
              <span /> BUILD STATUS
            </p>
            <h2>실행 가능한 MVP+,<br />확장 중인 여행 경험.</h2>
          </div>
          <p>
            2026.08 기준 모바일과 백엔드의 핵심 흐름을 구현했습니다. 개인화
            추천, 다국어, 자동 코스 최적화는 다음 단계로 이어집니다.
          </p>
        </div>
        <div className={styles.statusGrid}>
          <div className={styles.progressCard}>
            <span>IMPLEMENTED</span>
            <strong>12</strong>
            <p>핵심 기능 영역</p>
            <div><i /></div>
            <small>검색 · 인증 · 날씨 · 주변정보 · 지도 연결</small>
          </div>
          <div className={styles.progressCard}>
            <span>IN PROGRESS</span>
            <strong>05</strong>
            <p>고도화 영역</p>
            <div><i /></div>
            <small>개인화 · 다국어 · 교통 · 코스 · 검수 UI</small>
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

      <section className={styles.finalCta}>
        <p>FROM SCREEN TO STREET</p>
        <h2>
          좋아했던 장면을,
          <br />
          <span>당신의 여행으로.</span>
        </h2>
        <div className={styles.releaseNotice}>
          <i aria-hidden="true" />
          <span>2026년 9월 중순 배포 예정</span>
        </div>
        <Link href="/" className={styles.primaryButton}>
          pageFactory로 돌아가기 <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
