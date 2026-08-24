import type { Metadata } from "next";
import Link from "next/link";
import sceneStyles from "../scene-tracker.module.css";
import styles from "./privacy-policy.module.css";

export const metadata: Metadata = {
  title: "개인정보 처리방침 | Scene Tracker",
  description:
    "Scene Tracker가 처리하는 개인정보의 항목, 목적, 보유기간과 이용자 권리를 안내합니다.",
};

const sections = [
  ["overview", "1. 처리방침 안내"],
  ["collection", "2. 처리 목적·항목·기간"],
  ["location", "3. 여행정보와 위치정보"],
  ["children", "4. 만 14세 미만 아동"],
  ["third-party", "5. 제3자 제공"],
  ["outsourcing", "6. 처리위탁과 국외 이전"],
  ["deletion", "7. 파기"],
  ["security", "8. 안전성 확보조치"],
  ["rights", "9. 정보주체의 권리"],
  ["contact", "10. 개인정보 보호 담당"],
  ["changes", "11. 처리방침 변경"],
] as const;

const processingRows = [
  [
    "회원 계정",
    "이메일, 비밀번호 해시",
    "회원 식별·로그인",
    "회원 탈퇴 시까지",
  ],
  [
    "동의 증적",
    "약관·개인정보 버전, 동의 시각, 만 14세 이상 확인",
    "동의 확인",
    "회원 탈퇴 시까지",
  ],
  [
    "인증 세션",
    "리프레시 토큰 해시, 만료·폐기·MFA 확인 시각",
    "로그인 유지·보안",
    "로그아웃·탈퇴 또는 최대 30일",
  ],
  [
    "인증 작업",
    "이메일 확인·재설정 코드 HMAC, 목적, 실패 횟수, 만료·사용 시각",
    "이메일 소유 확인·계정 복구",
    "만료 후 최대 1시간 이내",
  ],
  [
    "관리자 추가 인증",
    "암호화 TOTP 비밀, 복구 코드 HMAC, 사용 카운터",
    "관리자 계정 보호",
    "탈퇴·재등록 시까지",
  ],
  [
    "보안 처리",
    "요청 식별자 HMAC와 횟수",
    "공격·과도한 요청 완화",
    "시간창 종료 후 최대 1시간 이내",
  ],
  [
    "서버 방문 기록",
    "직접 입력한 장소·방문일·선택 메모",
    "여행 이력 제공",
    "회원 또는 기록 삭제 시까지",
  ],
  [
    "촬영지 제보",
    "작품·장소·지역·장면 설명·공개 근거 URL",
    "제보 검수·발행",
    "제보 철회 또는 회원 탈퇴 시까지",
  ],
  [
    "기기 전용 위치 처리",
    "앱 사용 중 위도·경도·정확도와 자동 방문 판정",
    "코스 장소 접근 확인",
    "현재 기기에서만 처리",
  ],
  [
    "비식별 서비스 집계",
    "집계일, 사건 유형, 횟수, 정규 작품 식별자",
    "기능 이용 현황 확인",
    "생성일로부터 180일",
  ],
  [
    "선택형 개선 공유",
    "임의 기기 ID의 HMAC 가명값과 일별 사건 횟수",
    "활성 기기·재방문 분석",
    "철회 또는 생성일로부터 180일",
  ],
] as const;

export default function SceneTrackerPrivacyPolicyPage() {
  return (
    <div className={`${sceneStyles.page} ${styles.policyPage}`}>
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
        <Link href="/about/scene-tracker" className={styles.backLink}>
          프로젝트로 돌아가기 <span aria-hidden="true">↗</span>
        </Link>
      </header>

      <section className={styles.hero} aria-labelledby="policy-title">
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>
            PRIVACY POLICY · VERSION 2026-08-24.2
          </p>
          <h1 id="policy-title">개인정보 처리방침</h1>
          <p className={styles.heroCopy}>
            Scene Tracker가 어떤 정보를 왜 처리하는지, 얼마나 보관하는지,
            이용자가 어떻게 자신의 권리를 행사할 수 있는지 안내합니다.
          </p>
          <dl className={styles.policyMeta}>
            <div>
              <dt>운영자</dt>
              <dd>etfactory.dev · 개인 무료 운영</dd>
            </div>
            <div>
              <dt>공고일</dt>
              <dd>2026년 8월 24일</dd>
            </div>
            <div>
              <dt>시행일</dt>
              <dd>2026년 8월 24일</dd>
            </div>
          </dl>
        </div>
      </section>

      <div className={styles.policyShell}>
        <aside className={styles.sidebar} aria-label="개인정보 처리방침 목차">
          <p>CONTENTS</p>
          <nav>
            {sections.map(([id, title]) => (
              <a key={id} href={`#${id}`}>
                {title}
              </a>
            ))}
          </nav>
        </aside>

        <article className={styles.document}>
          <div className={styles.reviewNotice} role="note">
            <span>출시 전 확인</span>
            <p>
              이 문서는 현재 서비스 구현을 기준으로 작성한 법률 검토용
              초안입니다. 운영 서버·DB 수탁자와 이메일 실발송 구성을 확정하고
              전문가 검토를 마친 뒤 게시본으로 전환합니다.
            </p>
          </div>

          <div
            className={styles.principles}
            aria-label="개인정보 처리 핵심 원칙"
          >
            <div>
              <span>01</span>
              <b>필요한 정보만 수집</b>
              <p>회원가입에는 이메일과 인증에 필요한 최소 정보만 사용합니다.</p>
            </div>
            <div>
              <span>02</span>
              <b>현재 위치는 기기에서 처리</b>
              <p>
                현재 좌표와 자동 방문 판정은 운영자 서버로 전송하지 않습니다.
              </p>
            </div>
            <div>
              <span>03</span>
              <b>개선 데이터 공유는 선택</b>
              <p>
                선택형 분석은 기본적으로 꺼져 있고 언제든 철회할 수 있습니다.
              </p>
            </div>
          </div>

          <section id="overview" className={styles.policySection}>
            <h2>1. 처리방침 안내</h2>
            <p>
              Scene Tracker 운영자는 개인정보 보호법에 따라 개인정보의 처리
              목적·항목·기간과 정보주체의 권리를 안내합니다.
            </p>
            <p>
              서비스는 사업자등록을 하지 않은 개인 개발자가{" "}
              <strong>etfactory.dev</strong>라는 운영 표시명으로 무료·비상업
              운영합니다. 개인정보 관련 문의는{" "}
              <a href="mailto:factory@etfactory.dev">factory@etfactory.dev</a>{" "}
              또는 <a href="https://etfactory.dev">etfactory.dev</a>를 통해
              접수합니다. etfactory.dev는 현재 등록 상호나 법인명이 아닙니다.
            </p>
          </section>

          <section id="collection" className={styles.policySection}>
            <h2>2. 개인정보 처리 목적·항목·기간</h2>
            <div className={styles.tableWrap} tabIndex={0}>
              <table>
                <caption className={styles.srOnly}>
                  개인정보 처리 목적, 항목과 보유기간
                </caption>
                <thead>
                  <tr>
                    <th scope="col">구분</th>
                    <th scope="col">처리 항목</th>
                    <th scope="col">목적</th>
                    <th scope="col">보유기간</th>
                  </tr>
                </thead>
                <tbody>
                  {processingRows.map(
                    ([category, items, purpose, retention]) => (
                      <tr key={category}>
                        <th scope="row">{category}</th>
                        <td>{items}</td>
                        <td>{purpose}</td>
                        <td>{retention}</td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
            <p>
              서비스는 회원가입을 위해 실명, 전화번호, 정확한 생년월일,
              주민등록번호, 성별, 주소, 결제정보 또는 건강정보를 수집하지
              않습니다.
            </p>
            <p>
              회원가입 단계에서는 수집·이용 목적, 수집 항목, 보유·이용 기간,
              동의 거부권과 거부 시 이메일 계정 이용 제한을 별도로 고지하고 필수
              동의를 받습니다.
            </p>
          </section>

          <section id="location" className={styles.policySection}>
            <h2>3. 여행정보와 위치정보 처리</h2>
            <h3>기기에만 저장되는 정보</h3>
            <p>
              저장 장소, 관심 작품, 사용자가 만든 여행 코스와 여행 선호 설정은
              현재 기기에만 저장하며 회원 계정 DB에 결합하지 않습니다. 로그인
              회원이 직접 입력한 수동 방문 기록만 기기 간 복원을 위해 회원 계정
              DB에 저장합니다. 로그인 전 수동 방문 기록은 현재 기기에 임시
              저장하며, 로그인하면 회원 계정으로 병합됩니다.
            </p>
            <h3>현재 위치와 자동 방문 기록</h3>
            <p>
              사용자가 자동 방문 기록을 허용하면 앱이 활성화된 동안 현재
              위도·경도와 정확도를 확인합니다. 기기 안에서 저장 코스 장소와의
              거리를 계산하고, 정확도 100m 이내에서 장소 반경 100m 안으로 확인된
              경우 기기 전용 방문 기록을 생성합니다.
            </p>
            <p>
              현재 위치 좌표, 정확도, 이동 경로와 위치로 판정한 자동 방문 기록은
              운영자 서버로 전송하지 않으며 로그인, 백업 또는 계정 동기화 대상에
              포함하지 않습니다. 위치 사용은 선택 사항이며, 동의하지 않거나
              철회해도 장소 탐색, 코스와 수동 방문 기록을 이용할 수 있습니다.
              앱이 비활성화되면 위치 확인을 중단하고 백그라운드 위치 권한은
              요청하지 않습니다.
            </p>
            <h3>외부 정보 조회와 서비스 분석</h3>
            <p>
              주변 관광지·날씨 조회에는 콘텐츠에 저장된 촬영지 또는 관광지
              좌표만 사용합니다. 단말기의 현재 좌표를 운영자 서버나 콘텐츠 제공
              API 요청에 포함하지 않습니다. 작품명 검색어와 여행 조건은
              검색·추천 응답 생성에 필요한 동안만 처리하며, 이메일, 회원 ID와
              인증 토큰은 Gemini, 한국관광공사, 기상청 등 콘텐츠 제공 API에
              전달하지 않습니다.
            </p>
            <p>
              앱 실행, 작품 검색 성공, 장소 저장과 코스 생성은 개인과 연결되지
              않는 일별 합계로 집계할 수 있습니다. 작품 검색 성공 시 검색 원문
              대신 서버에 저장된 정규 작품 식별자만 사용하며 여행지 검색어, 저장
              장소명과 코스명은 분석 테이블에 저장하지 않습니다.
            </p>
            <p>
              서비스 개선 데이터 공유는 기본적으로 꺼져 있습니다. 사용자가
              공유를 켜면 기기에서 계정과 무관한 임의 ID를 생성하고 서버가 목적
              분리 HMAC으로 변환하여 활성 기기와 재방문을 계산합니다. 현재 위치,
              이메일과 회원 ID는 이 값에 연결하지 않습니다. 공유를 끄면 해당
              기기의 가명 집계 삭제를 요청합니다.
            </p>
            <h3>촬영지 제보</h3>
            <p>
              회원이 촬영지를 제보하면 제보 내용과 공개 확인용 근거 URL을 계정과
              연결하여 검수합니다. 주거지로 표시된 제보는 초안 저장 시점에 상세
              주소와 좌표를 서버에 저장하지 않고 방문 가능 장소로 공개하지
              않습니다. 근거 URL에는 본인이나 타인의 비공개 개인정보를 포함하지
              않아야 합니다.
            </p>
          </section>

          <section id="children" className={styles.policySection}>
            <h2>4. 만 14세 미만 아동</h2>
            <p>
              현재 법정대리인 동의와 확인 절차를 제공하지 않으므로 만 14세 미만
              아동의 회원가입을 받지 않습니다. 연령 확인을 위해 생년월일을
              수집하지 않고 만 14세 이상 여부만 확인합니다.
            </p>
          </section>

          <section id="third-party" className={styles.policySection}>
            <h2>5. 제3자 제공</h2>
            <p>
              운영자는 원칙적으로 개인정보를 제3자에게 제공하지 않습니다. 제공이
              필요한 경우 법적 근거를 확인하고 제공받는 자, 제공 목적, 제공
              항목, 보유기간과 거부권을 별도로 안내합니다.
            </p>
          </section>

          <section id="outsourcing" className={styles.policySection}>
            <h2>6. 처리위탁과 국외 이전</h2>
            <p>
              서비스는 회원가입 이메일 확인, 비밀번호 재설정과 계정 보안 알림
              발송을 위해 다음 업무를 위탁합니다.
            </p>
            <div className={styles.tableWrap} tabIndex={0}>
              <table>
                <caption className={styles.srOnly}>
                  개인정보 처리위탁 현황
                </caption>
                <thead>
                  <tr>
                    <th scope="col">수탁자</th>
                    <th scope="col">위탁업무</th>
                    <th scope="col">처리 항목</th>
                    <th scope="col">보유기간</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Plus Five Five, Inc. (Resend)</th>
                    <td>계정용 트랜잭션 이메일 발송·전달</td>
                    <td>이메일 주소, 이메일 메타데이터·본문·전달 로그</td>
                    <td>
                      계약 기간과 계약 종료 후 고객 데이터 삭제까지 최대 90일
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Amazon Web Services, Inc.</th>
                    <td>Resend의 호스팅·이메일 발송 재위탁</td>
                    <td>호스팅·발송에 필요한 정보</td>
                    <td>Resend의 재위탁 계약과 관계 법령에 따른 기간</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Resend는 공개된 하위처리자를 이용할 수 있습니다. 최신 목록은{" "}
              <a href="https://resend.com/legal/subprocessors">
                Resend 하위처리자 안내
              </a>
              에서 확인할 수 있습니다. 운영자는 변경 통지를 확인하고 개인정보
              보호에 중대한 영향이 있으면 이 처리방침을 변경합니다.
            </p>

            <div className={styles.transferCard}>
              <h3>국외 이전 상세</h3>
              <dl>
                <div>
                  <dt>이전받는 자</dt>
                  <dd>Plus Five Five, Inc. (Resend) · privacy@resend.com</dd>
                </div>
                <div>
                  <dt>이전 국가</dt>
                  <dd>미국, 일본</dd>
                </div>
                <div>
                  <dt>이전 항목</dt>
                  <dd>
                    수신 이메일 주소, 발신·수신·제목·발송시각·전달상태 등의
                    메타데이터, 이메일 확인·비밀번호 재설정 코드와 계정 보안
                    안내 본문
                  </dd>
                </div>
                <div>
                  <dt>이전 목적</dt>
                  <dd>
                    이메일 소유 확인, 비밀번호 재설정, 계정 보안 알림의 발송과
                    전달 상태 확인
                  </dd>
                </div>
                <div>
                  <dt>시기·방법</dt>
                  <dd>
                    사용자가 이메일 확인·재설정을 요청하거나 보안 알림이 생성될
                    때마다 암호화된 SMTP STARTTLS 통신으로 전송
                  </dd>
                </div>
                <div>
                  <dt>처리 위치</dt>
                  <dd>
                    일본 Tokyo(ap-northeast-1) 리전에서 이메일 라우팅·발송,
                    미국에서 이메일 메타데이터·로그·API 기록 보관
                  </dd>
                </div>
                <div>
                  <dt>보유·이용 기간</dt>
                  <dd>
                    Resend 계약 기간과 계약 종료 후 고객 데이터 삭제까지 최대
                    90일. 법령상 별도 보존 의무가 있으면 해당 기간
                  </dd>
                </div>
                <div>
                  <dt>이전 근거</dt>
                  <dd>
                    개인정보 보호법 제28조의8 제1항 제3호에 따른 회원계약
                    체결·이행에 필요한 국외 처리위탁·보관과 처리방침 공개
                  </dd>
                </div>
                <div>
                  <dt>거부 방법과 효과</dt>
                  <dd>
                    회원가입·이메일 기반 계정 복구를 진행하지 않거나 개인정보
                    보호 담당자에게 처리정지·회원탈퇴를 요청할 수 있습니다.
                    거부하면 이메일 계정 기능은 이용할 수 없지만 로그인 없이
                    제공되는 공개 탐색 기능은 이용할 수 있습니다.
                  </dd>
                </div>
              </dl>
            </div>
            <p>
              서비스는 계정 보안 이메일에 Resend의 열람·클릭 추적 기능을
              사용하지 않으며, 첨부파일, 회원 ID, 여행 조건, 현재 위치, 저장
              장소와 코스 정보를 이메일 본문에 포함하지 않습니다.
            </p>
            <p>
              Gemini에는 작품명과 촬영지 조사 요청만 전달하며 이메일, 토큰, 회원
              ID를 전달하지 않습니다. 현재 구조에서는 Gemini 조사가 회원
              개인정보의 국외 이전에 해당하지 않도록 분리합니다.
            </p>
          </section>

          <section id="deletion" className={styles.policySection}>
            <h2>7. 개인정보 파기</h2>
            <p>
              보유기간이 끝나거나 처리 목적을 달성하면 복구하기 어려운 방법으로
              전자적 정보를 삭제합니다. 회원 탈퇴 시 이메일과 비밀번호 해시는
              복구할 수 없는 무작위 값으로 치환하고 인증 세션과 동의 이력은
              삭제하며 방문 기록은 논리 삭제 상태로 전환합니다.
            </p>
            <p>
              데이터 관계 무결성과 동일 이메일의 재가입 허용을 위해 비식별 내부
              식별자, 탈퇴 상태와 탈퇴 시각만 유지합니다. 이 정보만으로 탈퇴
              회원을 다시 식별하거나 계정을 복구할 수 없습니다. 관계 법령에 따라
              보존 의무가 발생한 정보는 다른 개인정보와 분리하여 법정기간 보관한
              뒤 파기합니다.
            </p>
            <p>
              개별 방문 기록은 삭제 즉시 화면과 일반 조회에서 제외하고 30일 복구
              유예 후 영구 파기합니다. 서비스 개선 일별 집계는 생성 후 180일이
              지나면 자동 삭제하며 선택형 공유를 철회하면 해당 기기의 HMAC
              집계를 보유기간 전이라도 삭제합니다.
            </p>
          </section>

          <section id="security" className={styles.policySection}>
            <h2>8. 안전성 확보조치</h2>
            <ul className={styles.checkList}>
              <li>scrypt 기반 비밀번호 단방향 해시</li>
              <li>짧은 수명의 서명 액세스 토큰과 회전형 리프레시 토큰</li>
              <li>모바일 SecureStore 토큰 저장과 로그아웃 시 서버 세션 폐기</li>
              <li>관리자 API 역할 기반 접근 제한과 TOTP 추가 인증</li>
              <li>운영환경 HTTPS, 별도 비밀키와 요청 횟수 제한</li>
              <li>단일 사용·단기 만료 이메일 인증 코드 HMAC 저장</li>
              <li>서비스 개선 기기 식별자의 목적 분리 HMAC 처리</li>
              <li>촬영지 제보 초안의 관리자 조회 차단</li>
              <li>주거지 제보의 상세 주소·좌표 비저장</li>
            </ul>
          </section>

          <section id="rights" className={styles.policySection}>
            <h2>9. 정보주체의 권리와 행사방법</h2>
            <p>
              회원은 계정 관리에서 자신의 계정 정보를 확인하고 로그아웃하거나
              탈퇴할 수 있으며, 방문 기록 화면에서 방문일과 메모를 수정하거나
              기록을 삭제할 수 있습니다.
            </p>
            <p>
              열람, 정정, 삭제, 처리정지, 동의 철회와 이의제기는 아래 개인정보
              보호 담당 연락처로 요청할 수 있으며 가입 절차보다 어렵지 않게
              처리합니다. 서비스 개선 데이터 공유는 앱 설정에서 언제든 켜거나 끌
              수 있고, 공유를 끄면 해당 기기의 가명 집계 삭제를 요청합니다.
            </p>
          </section>

          <section id="contact" className={styles.policySection}>
            <h2>10. 개인정보 보호 담당</h2>
            <dl className={styles.contactList}>
              <div>
                <dt>운영 형태</dt>
                <dd>사업자 미등록 개인의 무료·비상업 운영</dd>
              </div>
              <div>
                <dt>운영 표시명</dt>
                <dd>etfactory.dev</dd>
              </div>
              <div>
                <dt>개인정보 보호책임자</dt>
                <dd>개인 운영자 본인</dd>
              </div>
              <div>
                <dt>개인정보 문의</dt>
                <dd>
                  <a href="mailto:factory@etfactory.dev">
                    factory@etfactory.dev
                  </a>
                </dd>
              </div>
              <div>
                <dt>웹사이트</dt>
                <dd>
                  <a href="https://etfactory.dev">https://etfactory.dev</a>
                </dd>
              </div>
            </dl>
            <p>
              현재 사업자 상호·등록번호·사업장 주소는 존재하지 않으므로 표시하지
              않습니다. 향후 수익 기능 도입과 사업자등록이 이루어지면 실제
              사업자 정보를 반영하고 변경 내용을 적용 전에 안내합니다.
            </p>
          </section>

          <section id="changes" className={styles.policySection}>
            <h2>11. 처리방침 변경</h2>
            <p>
              이 처리방침은 2026년 8월 24일부터 적용될 예정입니다. 중요한 변경은
              적용 전에 앱 공지 등을 통해 안내하고 이전 버전과 변경 이력을
              확인할 수 있도록 관리합니다.
            </p>
            <h3>변경 이력</h3>
            <ul className={styles.historyList}>
              <li>
                <time dateTime="2026-08-24">2026.08.24</time>
                <span>
                  Resend 이메일 처리위탁과 미국·일본 국외 이전의 항목, 목적,
                  시기, 방법, 보유기간과 거부 효과를 명시했습니다. 사업자 미등록
                  개인의 무료·비상업 운영 상태와 수익화 전 사업자 정보 반영
                  원칙도 함께 공개했습니다.
                </span>
              </li>
              <li>
                <time dateTime="2026-08-13">2026.08.13</time>
                <span>
                  촬영지 제보, 인증 보안, 비식별 기능 집계와 선택형 개선 공유의
                  처리·파기 기준을 명시했습니다.
                </span>
              </li>
              <li>
                <time dateTime="2026-08-08">2026.08.08</time>
                <span>
                  현재 위치와 자동 방문 기록의 기기 전용 처리 및 서버 전송
                  금지를 명시했습니다.
                </span>
              </li>
            </ul>
          </section>

          <section className={`${styles.policySection} ${styles.references}`}>
            <h2>참고 기준</h2>
            <ul>
              <li>
                <a href="https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%EB%B3%B4%ED%98%B8%EB%B2%95">
                  개인정보 보호법
                </a>
              </li>
              <li>
                <a href="https://www.law.go.kr/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1029334953">
                  개인정보 보호법 제28조의8 개인정보의 국외 이전
                </a>
              </li>
              <li>
                <a href="https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%9C%84%EC%B9%98%EC%A0%95%EB%B3%B4%EC%9D%98%EB%B3%B4%ED%98%B8%EB%B0%8F%EC%9D%B4%EC%9A%A9%EB%93%B1%EC%97%90%EA%B4%80%ED%95%9C%EB%B2%95%EB%A5%A0">
                  위치정보의 보호 및 이용 등에 관한 법률
                </a>
              </li>
              <li>
                <a href="https://www.pipc.go.kr/np/cop/bbs/selectBoardList.do?bbsId=BS217&mCode=D010030000">
                  개인정보보호위원회 개인정보 안내서
                </a>
              </li>
              <li>
                <a href="https://resend.com/legal/dpa">
                  Resend Data Processing Addendum
                </a>
              </li>
              <li>
                <a href="https://resend.com/docs/dashboard/domains/regions">
                  Resend 데이터 리전 안내
                </a>
              </li>
            </ul>
            <p className={styles.legalFootnote}>
              실제 배포 구조와 개인정보 흐름을 기준으로 개인정보·IT 서비스
              전문가의 최종 검토가 필요합니다. 위치정보 관련 신고·약관 대상
              여부는 실제 운영 구조를 기준으로 관계기관에 최종 확인합니다.
            </p>
          </section>
        </article>
      </div>

      <footer className={styles.policyFooter}>
        <div>
          <p>SCENE TRACKER · PRIVACY POLICY</p>
          <span>문의 factory@etfactory.dev</span>
        </div>
        <Link href="/about/scene-tracker">프로젝트 페이지 보기</Link>
      </footer>
    </div>
  );
}
