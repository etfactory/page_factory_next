import FadeInSection from "./scrollfadein";

export default function StartSection() {
  return (
    <FadeInSection id="main_section" delay={200} minHeight="100vh">
      <div className="w-[92vw] md:w-[80vw] lg:w-[85vw] max-w-[1200px] mx-auto px-[10px] md:px-[20px mt-[20px] flex flex-col md:flex-row items-center justify-center">
        {/* 로고 영역 */}
        <div className="flex flex-col items-center justify-center mb-8 md:mb-0">
          <img src="/logo/2FD.svg" alt="etfactory logo" className="theme-logo h-40 md:h-64" />
        </div>
        {/* 텍스트 영역 */}
        <div className="md:ml-[40px] flex flex-col items-center md:items-start justify-center text-center md:text-left">
          <h1 className="font-[paperozi] text-[1.5rem] sm:text-[2rem] md:text-[2rem] lg:text-[3rem] font-[800] mb-[15px] md:mb-[20px] leading-[1.3] break-keep">안녕하세요!</h1>
          <h1 className="font-[paperozi] text-[1.5rem] sm:text-[2rem] md:text-[2rem] lg:text-[2.8rem] font-[800] mb-[15px] md:mb-[20px] leading-[1.3] break-keep">
            손가락으로 모두 해결할 수 있는 세상을 추구하는
          </h1>
          <h1 className="font-[paperozi] text-[1.5rem] sm:text-[2rem] md:text-[2rem] lg:text-[2.8rem] font-[800] mb-[15px] md:mb-[20px] leading-[1.3] break-keep">
            모바일 어플리케이션 개발자 오은택입니다.
          </h1>
        </div>
      </div>
    </FadeInSection>
  );
}
