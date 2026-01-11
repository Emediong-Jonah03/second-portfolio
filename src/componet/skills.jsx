// Skills Section
import { FaServer, FaTools, FaGitSquare, FaGithub } from "react-icons/fa";
import { FaDatabase, FaPython, FaSquareJs, FaHtml5 } from "react-icons/fa6";
import { MdMonitor } from "react-icons/md";
import {
  SiDjango,
  SiMongodb,
  SiTailwindcss,
  SiMysql,
  SiNetlify,
} from "react-icons/si";

import { IoLogoReact, IoLogoVercel } from "react-icons/io5";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <FaServer className="w-8 h-8" />,
      skills: [
        { name: "Python", icon: <FaPython className="w-6 h-6 inline-block" /> },
        { name: "Django", icon: <SiDjango className="w-6 h-6 inline-block" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 inline-block" /> },
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Frontend Development",
      icon: <MdMonitor className="w-8 h-8" />,
      skills: [
        { name: "React", icon: <IoLogoReact className="w-6 h-6 inline-block" /> },
        { name: "JS", icon: <FaSquareJs className="w-6 h-6 inline-block" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="w-6 h-6 inline-block" /> },
        { name: "HTML5", icon: <FaHtml5 className="w-6 h-6 inline-block" /> },
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Database",
      icon: <FaDatabase className="w-8 h-8" />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 inline-block" /> },
        { name: "MySQL", icon: <SiMysql className="w-6 h-6 inline-block" /> },
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "DevOps & Tools",
      icon: <FaTools className="w-8 h-8" />,
      skills: [
        { name: "Git", icon: <FaGitSquare className="w-6 h-6 inline-block" /> },
        { name: "GitHub", icon: <FaGithub className="w-6 h-6 inline-block" /> },
        { name: "Vercel", icon: <IoLogoVercel className="w-6 h-6 inline-block" /> },
        { name: "Netlify", icon: <SiNetlify className="w-6 h-6 inline-block" /> },
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[var(--foreground)] mb-12">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-[var(--accent)] rounded-xl p-6 border border-[var(--primary)]/10 hover:border-[var(--primary)]/40 transition-all duration-300"
            >
              <div className="relative z-10">
                <div className="text-[var(--primary)] mb-4 py-3">{category.icon}</div>
                <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-[var(--background)] px-3 py-1 rounded-full text-sm text-[var(--foreground)] border border-[var(--primary)]/5"
                    >
                      {skill.icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
