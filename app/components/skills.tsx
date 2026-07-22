import { FaJava, FaReact, FaGitAlt, FaGithub, FaDocker } from "react-icons/fa";
import { FaSwift } from "react-icons/fa6";
import { SiKotlin, SiDart, SiJavascript, SiTypescript, SiFlutter, SiNextdotjs, SiSpringboot, SiMysql, SiSqlite, SiNestjs, SiPostgresql, SiFastapi } from "react-icons/si";

export default function Skills() {
  const cardClass = "flex min-h-36 flex-col items-start justify-between rounded-2xl border border-[var(--pf-border-subtle)] bg-[var(--pf-bg-surface)] p-5 transition-[transform,border-color] duration-150 hover:-translate-y-0.5 hover:border-[var(--pf-border-strong)]";
  const iconClass = "mb-6 text-[2.5rem]";
  const titleClass = "text-[0.95rem] font-bold text-left";

  return (
    <div>
      <h2 className="pf-subsection-title">Skills</h2>

      {/* --- Languages --- */}
      <h3 className="pf-group-title">Languages</h3>
      <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
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
          </div>
          <h4 className={titleClass}>JavaScript</h4>
        </div>
        <div className={cardClass}>
            <SiTypescript className="text-[3rem] text-[#3178c6]" />
          <h4 className={titleClass}>TypeScript</h4>
        </div>
      </div>

      {/* --- Frameworks & Libraries --- */}
      <h3 className="pf-group-title">Frameworks & Libraries</h3>
      <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
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
        <div className={cardClass}>
          <SiFastapi className={`${iconClass} text-[#039384]`} />
          <h4 className={titleClass}>FastAPI</h4>
        </div>
      </div>

      {/* --- Databases --- */}
      <h3 className="pf-group-title">Databases</h3>
      <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
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
      <h3 className="pf-group-title">Tools & Platforms</h3>
      <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        <div className={cardClass}>
          <div className="flex gap-2 mb-3">
            <FaGitAlt className="text-[3rem] text-[#f34f29]" />
            <FaGithub className="text-[3rem] text-black dark:text-white" />
          </div>
          <h4 className={titleClass}>Git & GitHub</h4>
        </div>
        <div className={cardClass}>
          <FaDocker className={`${iconClass} text-[#2560ff]`} />
          <h4 className={titleClass}>Docker</h4>
        </div>
      </div>
    </div>
  );
}
