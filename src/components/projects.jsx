import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";
import cosmec from "/src/assets/cosmec.png";
import AIChef from "../assets/AI-web-app.png";
import resumeAnalyser from "../assets/resume-analyser.png";
import medic from "../assets/medical.png";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Resume Architect",
      image: resumeAnalyser,
      alt: "AI Resume Analyser",
      description: "An intelligent career tool that utilizes LLMs to bridge the gap between job seekers and recruitment algorithms.",
      problem: "Candidates struggling to bypass ATS filters and align with specific job descriptions.",
      process: "Engineered a custom Node.js backend to process PDF data and integrated OpenAI's API for semantic analysis.",
      result: "Provides actionable insights that statistically improve interview callback rates.",
      tech: ["Node.js", "OpenAI API", "React", "Tailwind CSS"],
      liveDemo: "https://resume-analyzer-job-matcher-alpha.vercel.app/",
      github: "",
    },
    {
      title: "Chef Intelligence Web App",
      image: AIChef,
      alt: "AI Chef web app",
      description: "A smart culinary assistant that eliminates decision fatigue by generating recipes from available ingredients.",
      problem: "User indecision and food waste due to a lack of recipe inspiration.",
      process: "Integrated real-time AI prompt engineering with a responsive React frontend for instant recipe generation.",
      result: "Streamlined meal planning, reducing user decision time by over 50%.",
      tech: ["React", "AI Integration", "Prompt Engineering", "Vite"],
      liveDemo: "https://my-ai-chep.netlify.app/",
      github: "https://github.com/Emediong-Jonah03/AI-Chef",
    },
    {
      title: "Cosmetic E-Commerce Suite",
      image: cosmec,
      alt: "Cosmetic e-commerce website",
      description: "A high-performance boutique shopping experience focused on conversion and smooth user flow.",
      problem: "Maintaining seamless state management across complex product filtering and cart operations.",
      process: "Developed a robust architecture using React Context API with persistent local storage sync.",
      result: "Achieved a fluid, zero-latency shopping experience for end-users.",
      tech: ["React", "Context API", "Tailwind CSS", "Data Persistence"],
      liveDemo: "https://cosmetic-commerce.netlify.app/",
      github: "https://github.com/Emediong-Jonah03/cosmec-ecommerce.git",
    },
    {
      title: "MediLink Connectivity Platform",
      image: medic,
      alt: "medical website",
      description: "A centralized digital ecosystem designed to streamline communication between healthcare providers.",
      problem: "Fragmented communication channels between different hospital departments.",
      process: "Architected a unified interface to centralize hospital data views and facility access.",
      result: "Improved information accessibility and UI responsiveness for medical staff.",
      tech: ["React", "Enterprise UI", "Tailwind CSS", "PostgreSQL"],
      liveDemo: "https://medilink-project.netlify.app/",
      github: "", 
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4 animate-slide-up">
            Featured Engineering Projects
          </h2>
          <p className="text-[var(--foreground)] opacity-60 max-w-2xl mx-auto">
            A selection of full-stack applications focusing on AI integration, 
            scalability, and solving complex user problems.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[var(--surface)] rounded-2xl overflow-hidden border border-[var(--primary)]/10 hover:border-[var(--primary)]/40 transition-all duration-300 shadow-xl flex flex-col"
            >
              {/* Image with Overlay */}
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] to-transparent opacity-60"></div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4 group-hover:text-[var(--primary)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--foreground)] opacity-80 mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Technical Breakdown */}
                <div className="space-y-3 mb-8 bg-[var(--background)]/50 p-4 rounded-xl border border-[var(--primary)]/5">
                  <div className="flex gap-3">
                    <FaCheckCircle className="text-[var(--primary)] mt-1 flex-shrink-0" />
                    <p className="text-sm"><span className="font-bold text-[var(--primary)]">Challenge:</span> {project.problem}</p>
                  </div>
                  <div className="flex gap-3">
                    <FaCheckCircle className="text-[var(--primary)] mt-1 flex-shrink-0" />
                    <p className="text-sm"><span className="font-bold text-[var(--primary)]">Solution:</span> {project.process}</p>
                  </div>
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] text-[10px] uppercase tracking-wider font-bold rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-6">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold bg-[var(--primary)] text-[var(--background)] px-4 py-2 rounded-lg hover:brightness-110 transition-all"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold opacity-70 hover:opacity-100 transition-all text-[var(--foreground)]"
                    >
                      <FaGithub className="text-xl" /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;