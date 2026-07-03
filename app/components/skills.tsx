import { FaJava, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { FaSwift } from "react-icons/fa6";
import { SiKotlin, SiDart, SiJavascript, SiTypescript, SiFlutter, SiNextdotjs, SiSpringboot, SiMysql, SiSqlite, SiNestjs, SiPostgresql } from "react-icons/si";

export default function Skills() {
  const cardClass = "flex flex-col items-center justify-center p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-[#0099cc]/30 dark:hover:border-[#0099cc]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300";
  const iconClass = "text-[3rem] mb-3";
  const titleClass = "font-[paperozi] text-[1rem] md:text-[1.1rem] font-[700] text-center";

  return (
    <div>
      <h1 className="font-[paperozi] text-[2rem] md:text-[2.5rem] font-[800] mb-[30px] break-keep">Skills</h1>

      {/* --- Languages --- */}
      <h2 className="font-[paperozi] text-[1.3rem] md:text-[1.5rem] font-[700] mb-[15px] leading-[1.4] text-[#0099cc]">Languages</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-[40px]">
        <div className={cardClass}>
          <FaJava className={`${iconClass} text-[#f89820]`} />
          <h4 className={titleClass}>Java</h4>
        </div>
        <div className={cardClass}>
          <SiKotlin className={`${iconClass} text-[#7f52ff]`} />
          <h4 className={titleClass}>Kotlin</h4>
        </div>
        <div className={cardClass}>
          <FaSwift className={`${iconClass} text-[#f05138]`} />
          <h4 className={titleClass}>Swift</h4>
        </div>
        <div className={cardClass}>
          <SiDart className={`${iconClass} text-[#0175c2]`} />
          <h4 className={titleClass}>Dart</h4>
        </div>
        <div className={cardClass}>
          <div className="flex gap-2 mb-3">
            <SiJavascript className="text-[3rem] text-[#f7df1e]" />
            <SiTypescript className="text-[3rem] text-[#3178c6]" />
          </div>
          <h4 className={titleClass}>JS & TS</h4>
        </div>
      </div>

      {/* --- Frameworks & Libraries --- */}
      <h2 className="font-[paperozi] text-[1.3rem] md:text-[1.5rem] font-[700] mb-[15px] leading-[1.4] text-[#0099cc]">Frameworks & Libraries</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-[40px]">
        <div className={cardClass}>
          <SiFlutter className={`${iconClass} text-[#02569b]`} />
          <h4 className={titleClass}>Flutter</h4>
        </div>
        <div className={cardClass}>
          <FaReact className={`${iconClass} text-[#61dafb]`} />
          <h4 className={titleClass}>React Native</h4>
        </div>
        <div className={cardClass}>
          <SiNextdotjs className={`${iconClass} text-black dark:text-white`} />
          <h4 className={titleClass}>Next.js</h4>
        </div>
        <div className={cardClass}>
          <SiSpringboot className={`${iconClass} text-[#6db33f]`} />
          <h4 className={titleClass}>Spring Boot</h4>
        </div>
        <div className={cardClass}>
          <SiNestjs className={`${iconClass} text-[#ea2845]`} />
          <h4 className={titleClass}>NestJS</h4>
        </div>
      </div>

      {/* --- Databases --- */}
      <h2 className="font-[paperozi] text-[1.3rem] md:text-[1.5rem] font-[700] mb-[15px] leading-[1.4] text-[#0099cc]">Databases</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-[40px]">
        <div className={cardClass}>
          <SiMysql className={`${iconClass} text-[#4479a1]`} />
          <h4 className={titleClass}>MySQL</h4>
        </div>
        <div className={cardClass}>
          <SiSqlite className={`${iconClass} text-[#003b57]`} />
          <h4 className={titleClass}>SQLite</h4>
        </div>
        <div className={cardClass}>
          <SiPostgresql className={`${iconClass} text-[#336791]`} />
          <h4 className={titleClass}>PostgreSQL</h4>
        </div>
      </div>

      {/* --- Tools & Platforms --- */}
      <h2 className="font-[paperozi] text-[1.3rem] md:text-[1.5rem] font-[700] mb-[15px] leading-[1.4] text-[#0099cc]">Tools & Platforms</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-[40px]">
        <div className={cardClass}>
          <div className="flex gap-2 mb-3">
            <FaGitAlt className="text-[3rem] text-[#f34f29]" />
            <FaGithub className="text-[3rem] text-black dark:text-white" />
          </div>
          <h4 className={titleClass}>Git & GitHub</h4>
        </div>
      </div>
    </div>
  );
}