/** Scene Tracker 공개 계정 삭제 요청 페이지 */
import type { Metadata } from "next";
import Link from "next/link";

import sceneStyles from "../scene-tracker.module.css";
import AccountDeletionForm from "./account-deletion-form";
import styles from "./account-deletion.module.css";

export const metadata: Metadata = {
  title: "계정 삭제 요청 | Scene Tracker",
  description:
    "Scene Tracker 앱에 접근할 수 없는 회원을 위한 계정과 연결 데이터 삭제 요청 페이지입니다.",
};

/** 끝 슬래시 제거 운영 API 주소 */
const apiBaseUrl =
  process.env.NEXT_PUBLIC_SCENE_TRACKER_API_BASE_URL?.trim().replace(
    /\/+$/,
    "",
  ) || null;

export default function SceneTrackerAccountDeletionPage() {
  return (
    <div className={`${sceneStyles.page} ${styles.page}`}>
      <header className={styles.header}>
        <Link
          href="/about/scene-tracker"
          className={styles.brand}
          aria-label="Scene Tracker 프로젝트 페이지로"
        >
          <img src="/logo/page factory black.svg" alt="pageFactory" />
          <span aria-hidden="true" />
          <b>SCENE TRACKER</b>
        </Link>
        <Link
          href="/about/scene-tracker/privacy-policy"
          className={styles.policyLink}
        >
          개인정보 처리방침 <span aria-hidden="true">↗</span>
        </Link>
      </header>

      <main>
        <section className={styles.hero} aria-labelledby="deletion-title">
          <p>ACCOUNT &amp; DATA DELETION</p>
          <h1 id="deletion-title">계정 삭제 요청</h1>
          <span>
            앱을 삭제했거나 로그인할 수 없는 경우에도 이 페이지에서 Scene
            Tracker 계정과 연결 데이터 삭제를 요청할 수 있습니다.
          </span>
        </section>

        <div className={styles.shell}>
          <section className={styles.guide} aria-labelledby="deletion-guide">
            <p>BEFORE YOU CONTINUE</p>
            <h2 id="deletion-guide">삭제되는 정보</h2>
            <ul>
              <li>이메일·비밀번호 해시·인증 세션·동의 이력</li>
              <li>서버에 저장된 방문 기록과 선택 메모</li>
              <li>촬영지 제보 원본·근거 URL·계정 연결 검수 이력</li>
            </ul>
            <h2>처리 시점</h2>
            <p>
              계정 접근은 요청 즉시 차단되고 이메일과 인증정보는 즉시
              삭제·비식별 처리됩니다. 삭제 대기 데이터는 일반 조회에서 즉시
              제외되며 30일 이내 영구 삭제됩니다.
            </p>
            <h2>별도 삭제가 필요한 기기 정보</h2>
            <p>
              저장 장소, 관심 작품, 여행 코스, 여행 조건과 기기 전용 자동 방문
              기록은 서버 계정에 저장되지 않습니다. 해당 기기에서 앱 데이터 또는
              앱을 직접 삭제해야 합니다.
            </p>
          </section>

          <section
            className={styles.formCard}
            aria-labelledby="deletion-form-title"
          >
            <p>IDENTITY CONFIRMATION</p>
            <h2 id="deletion-form-title">등록 정보 확인</h2>
            <span>
              타인의 계정 삭제를 막기 위해 가입 이메일과 현재 비밀번호를 다시
              확인합니다.
            </span>
            <AccountDeletionForm apiBaseUrl={apiBaseUrl} />
            <div className={styles.support}>
              <b>비밀번호를 잊었거나 요청이 처리되지 않나요?</b>
              <a href="mailto:factory@etfactory.dev?subject=%5BScene%20Tracker%5D%20계정%20삭제%20문의">
                factory@etfactory.dev로 문의하기
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>SCENE TRACKER · ACCOUNT DELETION</span>
        <Link href="/about/scene-tracker">프로젝트 페이지로 돌아가기</Link>
      </footer>
    </div>
  );
}
