import FadeInSection from "./scrollfadein";
import Skills from "./skills";
import LinkButton from "./linkbutton";
import SectionAssembly from "./section-assembly";

export default function ProfileSection({ locale = "ko" }: { locale?: "ko" | "en" }) {
  return (
    <FadeInSection id="profile_section" delay={200}>
      <div className="pf-container pf-content-container pf-section">
        {/* --- About Me --- */}
        <p lang="en" className="pf-eyebrow">01 · Profile</p>
        <h2 lang="en" className="pf-subsection-title">About Me</h2>
        <SectionAssembly label="type" accent="purple">
        <div className="mb-16 max-w-[720px] border-l-2 border-[var(--pf-signal)] pl-5 text-left md:pl-8">
          <p className="mb-5 text-[1.125rem] leading-[1.7]">
            {locale === "ko" ? "안녕하세요! 모바일 어플리케이션 개발자 오은택입니다." : "Hello! I’m Euntaek Oh, a mobile application developer."}
          </p>
          <p className="mb-5 text-[1.125rem] leading-[1.7]">
            {locale === "ko" ? <>Android와 iOS 네이티브 앱 개발 경험이 있으며, <br className="hidden md:block" />
            React Native와 Flutter를 활용한 크로스 플랫폼 앱 개발에도 능숙합니다.</> : <>I have experience building native Android and iOS apps, as well as cross-platform apps with React Native and Flutter.</>}
          </p>
        </div>

        </SectionAssembly>

        {/* --- Education --- */}
        <h2 lang="en" className="pf-subsection-title">Education</h2>
        <SectionAssembly label="education" accent="cyan">
        <div className="mb-16 max-w-[720px] border-l-2 border-[var(--pf-signal)] pl-5 text-left md:pl-8">
          <ul className="mb-16 list-none p-0 text-[var(--pf-text-primary)]">
            <li>
              <span className="block text-[1.2rem] font-bold">{locale === "ko" ? "국립공주대학교" : "Kongju National University"}</span>
              <span className="mt-1.5 block text-[1rem] text-[var(--pf-text-secondary)]">{locale === "ko" ? "컴퓨터공학부 소프트웨어전공" : "Division of Computer Engineering, Major in Software"}</span>
            </li>
          </ul>
        </div>

        </SectionAssembly>

        {locale === "en" && (
          <>
            <h2 lang="en" className="pf-subsection-title">Military Service</h2>
            <SectionAssembly label="service" accent="cyan">
              <div className="mb-16 max-w-[720px] border-l-2 border-[var(--pf-signal)] pl-5 text-left md:pl-8">
                <p className="block text-[1.2rem] font-bold">Republic of Korea Army, SGT (E-5)</p>
                <p className="mt-1.5 block text-[1rem] text-[var(--pf-text-secondary)]">Non-Commissioned Officer Academy Assist Drill Sergent for Personal Weapon</p>
              </div>
            </SectionAssembly>
          </>
        )}

        {/* --- Links --- */}
        <h2 lang="en" className="pf-subsection-title">Links</h2>
        <SectionAssembly label="links" accent="coral">
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

        </SectionAssembly>

        {/* --- Skills --- */}
        <SectionAssembly label="components" accent="cyan">
          <Skills />
        </SectionAssembly>
      </div>
    </FadeInSection>
  );
}
