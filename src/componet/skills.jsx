// Skills Section
import { FaServer, FaTools } from "react-icons/fa"
import { FaDatabase } from "react-icons/fa6";
import { MdMonitor } from "react-icons/md";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <FaServer className="w-8 h-8" />,
      skills: ["Python", "Flask/Django", "REST APIs", "MongoDB"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Frontend Development",
      icon: <MdMonitor className="w-8 h-8" />,
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Database & CMS",
      icon: <FaDatabase className="w-8 h-8" />,
      skills: ["MongoDB", "WordPress", "MySQL", "Database Design"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "DevOps & Tools",
      icon: <FaTools className="w-8 h-8" />,
      skills: ["Git", "Docker", "AWS", "Vercel", "Netlify"],
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section
      id="skills"
      className="py-20 bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`}
              ></div>
              <div className="relative z-10">
                <div className="text-yellow-400 mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-black/50 px-3 py-1 rounded-full text-sm text-gray-300 inline-block mr-2 mb-2"
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