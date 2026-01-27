import { FaCode, FaTools, FaBrain } from "react-icons/fa";

const About = () => {
  const expertise = [
    {
      title: "Full-Stack Development",
      icon: <FaCode className="text-[var(--primary)]" />,
      skills: ["React", "JavaScript", "TypeScript", "Python", "Django", "Node.js"]
    },
    {
      title: "AI & Database",
      icon: <FaBrain className="text-[var(--primary)]" />,
      skills: ["AI Integration", "OpenAI API", "MongoDB", "Express.js"]
    },
    {
      title: "Workflow & Tools",
      icon: <FaTools className="text-[var(--primary)]" />,
      skills: ["Git", "GitHub", "Vite", "Tailwind CSS", "REST APIs"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-[var(--background)] animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[var(--foreground)] mb-16 animate-slide-up">
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-4 text-[var(--primary)]">
              The Intersection of Logic and Creativity
            </h3>
            <p className="text-[var(--foreground)] opacity-90 text-lg mb-6 leading-relaxed">
              I am a **Software Developer** with a deep-seated passion for building robust, scalable systems that solve real-world problems. My journey into tech began with a curiosity for how the web works, which quickly evolved into a career focused on **Full-Stack Development** and **AI Integration**.
            </p>
            <p className="text-[var(--foreground)] opacity-90 text-lg mb-8 leading-relaxed">
              I don’t just write code; I architect solutions. Whether it’s developing an e-commerce platform with a seamless user journey or engineering AI-driven tools that automate complex tasks, my goal is always the same: **to deliver high-performance software that provides tangible value.**
            </p>
            
            <a href="#contact" className="inline-block px-6 py-3 bg-[var(--primary)] text-[var(--background)] font-bold rounded-lg hover:opacity-90 transition-all">
              Work With Me
            </a>
          </div>

          {/* Expertise Grid */}
          <div className="grid gap-6 animate-slide-in-right">
            {expertise.map((item, index) => (
              <div key={index} className="p-6 bg-[var(--surface)] rounded-xl border border-[var(--primary)]/10 shadow-sm hover:border-[var(--primary)]/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  {item.icon}
                  <h4 className="text-xl font-bold text-[var(--foreground)]">{item.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-[var(--background)] text-[var(--foreground)] text-sm rounded-full border border-[var(--primary)]/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;