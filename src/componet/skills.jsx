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
        <FaPython className="w-6 h-6 inline-block" />,
        <SiDjango className="w-6 h-6 inline-block" />,
        <SiMongodb className="w-6 h-6 inline-block" />,
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Frontend Development",
      icon: <MdMonitor className="w-8 h-8" />,
      skills: [
        <IoLogoReact className="w-6 h-6 inline-block" />,
        <FaSquareJs className="w-6 h-6 inline-block" />,
        <SiTailwindcss className="w-6 h-6 inline-block" />,
        <FaHtml5 className="w-6 h-6 inline-block" />,
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Database",
      icon: <FaDatabase className="w-8 h-8" />,
      skills: [
        <SiMongodb className="w-6 h-6 inline-block" />,
        <SiMysql className="w-6 h-6 inline-block" />,
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "DevOps & Tools",
      icon: <FaTools className="w-8 h-8" />,
      skills: [
        <FaGitSquare className="w-6 h-6 inline-block" />,
        <FaGithub className="w-6 h-6 inline-block" />,
        <IoLogoVercel className="w-6 h-6 inline-block" />,
        <SiNetlify className="w-6 h-6 inline-block" />,
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#E5F0FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[#003D99] mb-12">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-[#0066FF] rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`}
              ></div>
              <div className="relative z-10">
                <div className="text-[#E5E7EB] mb-4 py-3">{category.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-white px-3 py-1 rounded-full text-sm text-[#000E24] inline-block mr-2 mb-2"
                    >
                      {skill}
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
