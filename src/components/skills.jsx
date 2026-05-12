import { useState } from "react";
import { FaPython, FaHtml5, FaGitSquare, FaNode, FaAws } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import {
  SiDjango,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiFastapi,
  SiTypescript,
  SiDocker,
  SiNextdotjs,
} from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: <IoLogoReact className="text-4xl" style={{ color: '#61DAFB' }} /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-4xl" style={{ color: '#000000' }} /> },
        { name: "TypeScript", icon: <SiTypescript className="text-4xl" style={{ color: '#3178C6' }} /> },
        { name: "JS", icon: <FaJsSquare className="text-4xl" style={{ color: '#F7DF1E' }} /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-4xl" style={{ color: '#06B6D4' }} /> },
        { name: "HTML5", icon: <FaHtml5 className="text-4xl" style={{ color: '#E34F26' }} /> },
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Python", icon: <FaPython className="text-4xl" style={{ color: '#3776AB' }} /> },
        { name: "FastAPI", icon: <SiFastapi className="text-4xl" style={{ color: '#05998B' }} /> },
        { name: "Django", icon: <SiDjango className="text-4xl" style={{ color: '#092E20' }} /> },
        { name: "Node.js", icon: <FaNode className="text-4xl" style={{ color: '#47A248' }} /> },
        { name: "Express", icon: <SiExpress className="text-4xl" style={{ color: '#000000' }} /> },
        { name: "PostgreSQL", icon: <BiLogoPostgresql className="text-4xl" style={{ color: '#4169E1' }} /> },
        { name: "MongoDB", icon: <SiMongodb className="text-4xl" style={{ color: '#47A248' }} /> },
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", icon: <SiDocker className="text-4xl" style={{ color: '#2496ED' }} /> },
        { name: "Git", icon: <FaGitSquare className="text-4xl" style={{ color: '#F05032' }} /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-4 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[var(--foreground)] mb-16">
          Skills & Expertise
        </h2>

        <div className="space-y-5">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-4 opacity-90 border-l-4 border-[var(--primary)] pl-4">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center justify-center py-4 bg-[var(--surface)] rounded-2xl border border-[var(--primary)]/10 hover:border-[var(--primary)]/40 transition-all duration-300 shadow-sm group hover:-translate-y-1"
                  >
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-[var(--foreground)] font-medium text-sm opacity-80 group-hover:opacity-100">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;