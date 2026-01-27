import { FaCode, FaRocket, FaBrain, FaCheckCircle } from "react-icons/fa";

const Achievements = () => {
  const milestones = [
    {
      date: "Late 2025 - Present",
      title: "AI Integration & Full-Stack Systems",
      description: "Architecting intelligent applications using LLMs and modern web stacks. Successfully deployed AI-driven solutions for resume analysis and automated culinary planning.",
      icon: <FaBrain className="w-6 h-6" />,
    },
    {
      date: "Early 2025",
      title: "Scalable Web Engineering",
      description: "Advanced into React and Python/Django ecosystem. Developed high-performance e-commerce and healthcare connectivity platforms with persistent data management.",
      icon: <FaRocket className="w-6 h-6" />,
    },
    {
      date: "2024",
      title: "Foundation of Software Development",
      description: "Mastered frontend fundamentals and responsive design principles. Transitioned from static landing pages to dynamic, user-centric web interfaces.",
      icon: <FaCode className="w-6 h-6" />,
    },
  ];

  return (
    <section id="milestones" className="py-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4 animate-slide-up">
            Professional Evolution
          </h2>
          <p className="text-[var(--foreground)] opacity-60 max-w-2xl mx-auto">
            A track record of technical growth and the successful delivery of complex software solutions.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-[var(--primary)]/50 to-transparent hidden md:block"></div>

          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center mb-16 animate-slide-up ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content Card */}
              <div className="w-full md:w-5/12">
                <div className="bg-[var(--surface)] p-8 rounded-2xl border border-[var(--primary)]/10 shadow-xl hover:border-[var(--primary)]/40 transition-all group">
                  <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div className="p-3 bg-[var(--primary)]/10 rounded-lg text-[var(--primary)] group-hover:scale-110 transition-transform">
                      {milestone.icon}
                    </div>
                    <span className="text-[var(--primary)] font-bold tracking-widest text-sm uppercase">
                      {milestone.date}
                    </span>
                  </div>
                  <h3 className={`text-xl font-bold text-[var(--foreground)] mb-3 ${index % 2 === 0 ? "md:text-right" : "md:text-left text-left"}`}>
                    {milestone.title}
                  </h3>
                  <p className={`text-[var(--foreground)] opacity-70 leading-relaxed ${index % 2 === 0 ? "md:text-right" : "md:text-left text-left"}`}>
                    {milestone.description}
                  </p>
                </div>
              </div>

              {/* Center Dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 items-center justify-center">
                <div className="w-4 h-4 bg-[var(--primary)] rounded-full ring-4 ring-[var(--background)]"></div>
              </div>

              {/* Spacer for the other side */}
              <div className="hidden md:block w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;