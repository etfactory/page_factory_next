import Image from "next/image";
import styles from "./start.module.css";

export default function StartSection({ locale = "ko" }: { locale?: "ko" | "en" }) {
  return (
    <section id="main_section" className={styles.hero}>
      <div className={`pf-container ${styles.stage}`}>
        <div className={styles.blueprint} aria-hidden="true">
          <span className={styles.guideHorizontal} />
          <span className={styles.guideVertical} />
          <span className={styles.measurement}>01 / INTRO</span>
        </div>
        <div className={styles.copy}>
          <p className={`pf-eyebrow ${styles.eyebrow}`}>Mobile Application Developer · Portfolio</p>
          <div className={styles.headlineWrap}>
            <span className={styles.textFrame} aria-hidden="true" />
            <h1 className={styles.headline}>
              {locale === "ko" ? <>
                <span className={styles.headlineLine}>안녕하세요.</span>{" "}
                <span className={styles.headlineLine}>모바일 앱의 흐름을 설계하고</span>{" "}
                <span className={styles.headlineLine}>구현하는 개발자 오은택입니다.</span>
              </> : <>
                <span className={styles.headlineLine}>Hello, I’m Euntaek Oh.</span>{" "}
                <span className={styles.headlineLine}>I design and build</span>{" "}
                <span className={styles.headlineLine}>mobile app experiences.</span>
              </>}
            </h1>
          </div>
          <div className={styles.disciplines}>
            <span className={styles.signal} aria-hidden="true" />
            Android · iOS · Cross-platform
          </div>
        </div>
        <div className={styles.logoColumn}>
          <div className={styles.logoCard}>
            <span className={styles.logoFrame} aria-hidden="true" />
            <span className={styles.logoCross} aria-hidden="true" />
            <Image
              src="/logo/2FD.svg"
              alt="etfactory logo"
              width={281}
              height={281}
              sizes="(min-width: 768px) 176px, 96px"
              className={`theme-logo h-24 w-24 md:h-44 md:w-44 ${styles.logoImage}`}
            />
          </div>
        </div>
        <div className={styles.cursors} aria-hidden="true">
          <span className={`${styles.cursor} ${styles.cursorOne}`}><CursorIcon /><span>layout</span></span>
          <span className={`${styles.cursor} ${styles.cursorTwo}`}><CursorIcon /><span>create</span></span>
          <span className={`${styles.cursor} ${styles.cursorThree}`}><CursorIcon /><span>type</span></span>
          <span className={`${styles.cursor} ${styles.cursorFour}`}><CursorIcon /><span>align</span></span>
          <span className={`${styles.cursor} ${styles.cursorFive}`}><CursorIcon /><span>detail</span></span>
        </div>
      </div>
    </section>
  );
}

function CursorIcon() {
  return (
    <svg viewBox="0 0 20 24" width="20" height="24" fill="none" aria-hidden="true">
      <path d="M2 2.1v16.5l4.6-4.3 3.4 7.4 3-1.4-3.4-7.3 6.2-.7L2 2.1Z" fill="currentColor" stroke="var(--pf-bg-canvas)" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
