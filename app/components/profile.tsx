import FadeInSection from "./scrollfadein";
import Skills from "./skills";
import LinkButton from "./linkbutton";

export default function ProfileSection() {
  return (
    <FadeInSection id="profile_section" delay={200}>
      <div className="pf-container pf-content-container pf-section">
        {/* --- About Me --- */}
        <p className="pf-eyebrow">01 · Profile</p>
        <h2 className="pf-subsection-title">About Me</h2>
        <div className="mb-16 max-w-[720px] border-l-2 border-[var(--pf-signal)] pl-5 text-left md:pl-8">
          <p className="mb-5 text-[1.125rem] leading-[1.7]">
            안녕하세요! 모바일 어플리케이션 개발자 오은택입니다.
          </p>
          <p className="mb-5 text-[1.125rem] leading-[1.7]">
            Android와 iOS 네이티브 앱 개발 경험이 있으며,<br className="hidden md:block" />
            React Native와 Flutter를 활용한 크로스 플랫폼 앱 개발에도 능숙합니다.
          </p>
        </div>

        {/* --- Education --- */}
        <h2 className="pf-subsection-title">Education</h2>
        <ul className="mb-16 list-none p-0 text-[var(--pf-text-primary)]">
          <li>
            <span className="block text-[1.2rem] font-bold">Kongju National University</span>
            <span className="mt-1.5 block text-[1rem] text-[var(--pf-text-secondary)]">Division of Computer Engineering, Major in Software</span>
          </li>
        </ul>

        {/* --- Links --- */}
        <h2 className="pf-subsection-title">Links</h2>
        <div className="mb-16 flex flex-wrap gap-3">
          <LinkButton
            text="GitHub"
            href="https://github.com/etfactory"
            style={{ backgroundColor: "#000000" }}
          />
          <LinkButton
            text="Blog"
            href="https://blog.etfactory.dev"
            style={{ backgroundColor: "#000000" }}
          />
        </div>

        {/* --- Skills --- */}
        <Skills />
      </div>
    </FadeInSection>
  );
}
