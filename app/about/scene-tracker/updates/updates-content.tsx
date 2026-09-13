import Image from "next/image";
import Link from "next/link";
import sceneStyles from "../scene-tracker.module.css";
import { releaseNotes } from "./release-notes";
import styles from "./updates.module.css";

export function UpdatesContent({ language }: { language: "ko" | "en" }) {
  const en = language === "en";
  const base = "/about/scene-tracker/updates";

  return (
    <main className={`${sceneStyles.page} ${styles.page}`} lang={language}>
      <header className={styles.header}>
        <Link href="/about/scene-tracker" className={styles.brand}>
          <Image src="/logo/page factory black.svg" alt="pageFactory" width={1064} height={159} sizes="120px" />
          <span aria-hidden="true" /> SCENE TRACKER
        </Link>
        <div className={styles.actions}>
          <nav className={styles.language} aria-label={en ? "Choose language" : "언어 선택"}>
            {en ? <Link href={base} hrefLang="ko">한국어</Link> : <span className={styles.active} aria-current="page">한국어</span>}
            {en ? <span className={styles.active} aria-current="page">English</span> : <Link href={`${base}/en`} hrefLang="en">English</Link>}
          </nav>
          <Link href="/about/scene-tracker" className={styles.back}>
            {en ? "Back to project ↗" : "프로젝트로 돌아가기 ↗"}
          </Link>
        </div>
      </header>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>SCENE TRACKER · RELEASE NOTES</p>
        <h1>{en ? "What’s new" : "업데이트 내역"}</h1>
        <p>{en ? "Follow how Scene Tracker has grown, from its first release to the latest improvements." : "첫 출시부터 최신 개선까지, Scene Tracker의 변화를 확인하세요."}</p>
      </section>

      <section className={styles.content} aria-labelledby="releases-heading">
        <div className={styles.intro}>
          <h2 id="releases-heading">{en ? "Version history" : "버전별 변경사항"}</h2>
          <span>1.0 — 1.0.3</span>
        </div>
        <div className={styles.list}>
          {releaseNotes.map((release) => {
            const copy = release[language];
            return (
              <article className={styles.release} key={release.version}>
                <div>
                  <span className={styles.version}>v{release.version}</span>
                  {release.date && <time className={styles.date} dateTime={release.date}>{release.date}</time>}
                </div>
                <div>
                  <h3>{copy.title}</h3>
                  <p>{copy.summary}</p>
                  <ul>{copy.changes.map((change) => <li key={change}>{change}</li>)}</ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <footer className={styles.footer}>
        <Link href="/about/scene-tracker">{en ? "Explore Scene Tracker ↗" : "Scene Tracker 살펴보기 ↗"}</Link>
      </footer>
    </main>
  );
}
