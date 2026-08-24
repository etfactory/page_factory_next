"use client";

/** 등록 이메일·비밀번호 재확인 기반 공개 계정 삭제 폼 */
import { FormEvent, useState } from "react";

import styles from "./account-deletion.module.css";

type AccountDeletionFormProps = {
  apiBaseUrl: string | null;
};

export default function AccountDeletionForm({
  apiBaseUrl,
}: AccountDeletionFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [pending, setPending] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /** HTTPS API 계정 삭제 요청 */
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!apiBaseUrl) {
      setError(
        "웹 계정 삭제 연결을 준비하고 있습니다. 아래 문의 이메일을 이용해주세요.",
      );
      return;
    }
    if (!confirmed) {
      setError("삭제 내용을 확인하고 동의해주세요.");
      return;
    }

    setPending(true);
    try {
      const response = await fetch(`${apiBaseUrl}/api/auth/account-deletion`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        cache: "no-store",
        credentials: "omit",
      });

      if (!response.ok) {
        throw new Error("계정 정보가 올바르지 않거나 이미 삭제되었습니다.");
      }

      setPassword("");
      setCompleted(true);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "계정 삭제 요청을 처리하지 못했습니다. 잠시 후 다시 시도해주세요.",
      );
    } finally {
      setPending(false);
    }
  };

  if (completed) {
    return (
      <div className={styles.success} role="status" aria-live="polite">
        <span aria-hidden="true">✓</span>
        <h2>계정 삭제 요청을 완료했습니다</h2>
        <p>
          이메일과 인증정보는 즉시 삭제·비식별 처리되었습니다. 서버 방문 기록과
          촬영지 제보 원본은 일반 조회에서 즉시 제외되며 30일 이내 영구
          삭제됩니다.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="deletion-email">가입 이메일</label>
        <input
          id="deletion-email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          maxLength={254}
          placeholder="가입한 이메일 주소"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="deletion-password">현재 비밀번호</label>
        <input
          id="deletion-password"
          name="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          maxLength={128}
          placeholder="현재 비밀번호"
        />
      </div>

      <label className={styles.confirmation}>
        <input
          type="checkbox"
          checked={confirmed}
          onChange={(event) => setConfirmed(event.target.checked)}
        />
        <span>
          계정은 복구할 수 없으며 기기에만 저장된 장소·코스·여행 설정은 앱을
          직접 삭제하거나 초기화해야 한다는 내용을 확인했습니다.
        </span>
      </label>

      {error ? (
        <p className={styles.error} role="alert">
          {error}
        </p>
      ) : null}

      <button
        className={styles.deleteButton}
        type="submit"
        disabled={pending || !email || !password || !confirmed}
      >
        {pending ? "삭제 처리 중" : "계정 영구 삭제 요청"}
      </button>

      <p className={styles.securityNote}>
        입력한 비밀번호 원문은 저장하지 않습니다. 반드시 주소창의
        <strong> etfactory.dev</strong>와 HTTPS 연결을 확인해주세요.
      </p>
    </form>
  );
}
