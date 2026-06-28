export default function Skills() {
  return (
    <div>
      <h1 className="font-[paperozi] text-[2rem] md:text-[2.5rem] font-[800] mb-[20px] break-keep">Skills</h1>

      {/* --- Languages --- */}
      <h2 className="font-[paperozi] text-[1.3rem] md:text-[1.5rem] font-[700] mb-[15px] leading-[1.4] text-[#0099cc]">Languages</h2>
      {/* 하나의 container에 모든 언어를 넣습니다 */}
      <div className="flex flex-wrap gap-[20px] mb-[40px]">
        <div className="w-full md:w-[calc((100%-40px)/3)] mb-[10px]">
          <h4 className="font-[paperozi] text-[1rem] md:text-[1.3rem] font-[700] mb-[5px]">Java</h4>
        </div>
        <div className="w-full md:w-[calc((100%-40px)/3)] mb-[10px]">
          <h4 className="font-[paperozi] text-[1rem] md:text-[1.3rem] font-[700] mb-[5px]">Kotlin</h4>
        </div>
        <div className="w-full md:w-[calc((100%-40px)/3)] mb-[10px]">
          <h4 className="font-[paperozi] text-[1rem] md:text-[1.3rem] font-[700] mb-[5px]">Swift</h4>
        </div>
        <div className="w-full md:w-[calc((100%-40px)/3)] mb-[10px]">
          <h4 className="font-[paperozi] text-[1rem] md:text-[1.3rem] font-[700] mb-[5px]">Dart</h4>
        </div>
        <div className="w-full md:w-[calc((100%-40px)/3)] mb-[10px]">
          <h4 className="font-[paperozi] text-[1rem] md:text-[1.3rem] font-[700] mb-[5px]">JavaScript & TypeScript</h4>
        </div>
      </div>

      {/* --- Frameworks & Libraries --- */}
      <h2 className="font-[paperozi] text-[1.3rem] md:text-[1.5rem] font-[700] mb-[15px] leading-[1.4] text-[#0099cc]">Frameworks & Libraries</h2>
      <div className="flex flex-wrap gap-[20px] mb-[40px]">
        <div className="w-full md:w-[calc((100%-40px)/3)] mb-[10px]">
          <h4 className="font-[paperozi] text-[1rem] md:text-[1.3rem] font-[700] mb-[5px]">Flutter</h4>
        </div>
        <div className="w-full md:w-[calc((100%-40px)/3)] mb-[10px]">
          <h4 className="font-[paperozi] text-[1rem] md:text-[1.3rem] font-[700] mb-[5px]">React Native</h4>
        </div>
        <div className="w-full md:w-[calc((100%-40px)/3)] mb-[10px]">
          <h4 className="font-[paperozi] text-[1rem] md:text-[1.3rem] font-[700] mb-[5px]">Next.js</h4>
        </div>
        <div className="w-full md:w-[calc((100%-40px)/3)] mb-[10px]">
          <h4 className="font-[paperozi] text-[1rem] md:text-[1.3rem] font-[700] mb-[5px]">Spring Boot</h4>
        </div>
        <div className="w-full md:w-[calc((100%-40px)/3)] mb-[10px]">
          <h4 className="font-[paperozi] text-[1rem] md:text-[1.3rem] font-[700] mb-[5px]">Bootstrap</h4>
        </div>
      </div>

      {/* --- Databases --- */}
      <h2 className="font-[paperozi] text-[1.3rem] md:text-[1.5rem] font-[700] mb-[15px] leading-[1.4] text-[#0099cc]">Databases</h2>
      <div className="flex flex-wrap gap-[20px] mb-[40px]">
        <div className="w-full md:w-[calc((100%-40px)/3)] mb-[10px]">
          <h4 className="font-[paperozi] text-[1rem] md:text-[1.3rem] font-[700] mb-[5px]">MySQL</h4>
        </div>
        <div className="w-full md:w-[calc((100%-40px)/3)] mb-[10px]">
          <h4 className="font-[paperozi] text-[1rem] md:text-[1.3rem] font-[700] mb-[5px]">SQLite</h4>
        </div>
      </div>

      {/* --- Tools & Platforms --- */}
      <h2 className="font-[paperozi] text-[1.3rem] md:text-[1.5rem] font-[700] mb-[15px] leading-[1.4] text-[#0099cc]">Tools & Platforms</h2>
      <div className="flex flex-wrap gap-[20px] mb-[40px]">
        <div className="w-full md:w-[calc((100%-40px)/3)] mb-[10px]">
          <h4 className="font-[paperozi] text-[1rem] md:text-[1.3rem] font-[700] mb-[5px]">Git & GitHub</h4>
        </div>
      </div>
    </div>
  );
}