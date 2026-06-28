import FadeInSection from "./scrollfadein";
import Skills from "./skills";
import LinkButton from "./linkbutton";

export default function ProfileSection() {
  return (
    <FadeInSection id="profile_section" delay={200}>
      <div className="w-[92vw] md:w-[80vw] max-w-[1200px] mx-auto px-[10px] md:px-[20px] mt-[80px]">
        {/* --- About Me --- */}
        <h1 className="font-[paperozi] text-[2rem] md:text-[2.5rem] mb-6 md:mb-8 font-bold">About Me</h1>
        <div className="text-left mb-10">
          <p className="text-[1.2rem] leading-[1.8] mb-5">
            안녕하세요! 모바일 어플리케이션 개발자 오은택입니다.
          </p>
          <p className="text-[1.2rem] leading-[1.8] mb-5">
            Android와 iOS 네이티브 앱 개발 경험이 있으며,<br className="hidden md:block" />
            React Native와 Flutter를 활용한 크로스 플랫폼 앱 개발에도 능숙합니다.
          </p>
        </div>

        {/* --- Education --- */}
        <h1 className="font-[paperozi] text-[2rem] md:text-[2.5rem] mb-6 md:mb-8 font-bold">Education</h1>
        <ul className="list-disc pl-5 mb-10 text-[#333]">
          <li>
            <span className="block font-bold text-[1.2rem]">Kongju National University</span>
            <span className="block text-[1rem] text-[#666] mt-1.5">Division of Computer Engineering, Major in Software</span>
          </li>
        </ul>

        {/* --- Links --- */}
        <h1 className="font-[paperozi] text-[2rem] md:text-[2.5rem] mb-6 md:mb-8 font-bold">Links</h1>
        <div className="flex gap-[15px] mb-[60px]">
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