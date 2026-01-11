// Skills Section
import { FaPython, FaHtml5, FaGitSquare, FaGithub } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import {
  SiDjango,
  SiMongodb,
  SiTailwindcss,
  SiMysql,
  SiNetlify,
} from "react-icons/si";
import { IoLogoReact, IoLogoVercel } from "react-icons/io5";

const Skills = () => {
  const allSkills = [
    { name: "Python", icon: <FaPython className="w-12 h-12" style={{ color: '#3776AB' }} /> },
    { name: "Django", icon: <SiDjango className="w-12 h-12" style={{ color: '#092E20' }} /> },
    { name: "MongoDB", icon: <SiMongodb className="w-12 h-12" style={{ color: '#47A248' }} /> },
    { name: "React", icon: <IoLogoReact className="w-12 h-12" style={{ color: '#61DAFB' }} /> },
    { name: "JS", icon: <FaJsSquare className="w-12 h-12" style={{ color: '#F7DF1E' }} /> },
    { name: "Tailwind", icon: <SiTailwindcss className="w-12 h-12" style={{ color: '#06B6D4' }} /> },
    { name: "HTML5", icon: <FaHtml5 className="w-12 h-12" style={{ color: '#E34F26' }} /> },
    { name: "MySQL", icon: <SiMysql className="w-12 h-12" style={{ color: '#4479A1' }} /> },
    { name: "Git", icon: <FaGitSquare className="w-12 h-12" style={{ color: '#F05032' }} /> },
    { name: "GitHub", icon: <FaGithub className="w-12 h-12" style={{ color: 'var(--foreground)' }} /> },
    { name: "Vercel", icon: <IoLogoVercel className="w-12 h-12" style={{ color: 'var(--foreground)' }} /> },
    { name: "Netlify", icon: <SiNetlify className="w-12 h-12" style={{ color: '#00C7B7' }} /> },
  ];

  // Double the array for seamless looping
  const carouselSkills = [...allSkills, ...allSkills];

  return (
    <section id="skills" className="py-20 bg-[var(--background)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-4xl font-bold text-center text-[var(--foreground)]">
          Skills & Expertise
        </h2>
      </div>

      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10"></div>

        <div className="flex animate-scroll hover:[animation-play-state:paused] w-max">
          {carouselSkills.map((skill, index) => (
            <div
              key={index}
              className="flex-none w-40 h-40 mx-4 flex flex-col items-center justify-center bg-[var(--accent)] rounded-2xl border border-[var(--primary)]/10 hover:border-[var(--primary)]/40 transition-all duration-300 shadow-sm group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <span className="text-[var(--foreground)] font-medium opacity-80 group-hover:opacity-100">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Skills;
