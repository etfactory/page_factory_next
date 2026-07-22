import FadeInSection from "./scrollfadein";

export default function StartSection() {
  return (
    <FadeInSection id="main_section" delay={200} minHeight="100vh">
      <div className="pf-container grid min-h-screen items-center gap-12 pb-20 pt-28 md:grid-cols-[minmax(0,1fr)_280px] md:gap-20 md:pb-24 md:pt-32 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="order-2 md:order-1">
          <p className="pf-eyebrow">Mobile Application Developer · Portfolio</p>
          <h1 className="m-0 max-w-[850px] text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.08] tracking-[-0.035em] break-keep">
            안녕하세요.<br />
            모바일 앱의 흐름을 설계하고<br />
            구현하는 개발자 오은택입니다.
          </h1>
          <div className="mt-10 flex items-center gap-4 border-t border-[var(--pf-border-subtle)] pt-5 text-sm font-bold text-[var(--pf-text-secondary)]">
            <span className="h-2.5 w-2.5 bg-[var(--pf-signal)]" aria-hidden="true" />
            Android · iOS · Cross-platform
          </div>
        </div>
        <div className="order-1 flex justify-start md:order-2 md:justify-end">
          <div className="flex aspect-square w-36 items-center justify-center border border-[var(--pf-border-subtle)] bg-[var(--pf-bg-subtle)] md:w-full">
            <img src="/logo/2FD.svg" alt="etfactory logo" className="theme-logo h-24 w-24 md:h-44 md:w-44" />
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
