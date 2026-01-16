import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import cosmec from "/src/assets/cosmec.png";
import AIChef from "../assets/AI-web-app.png";
import resumeAnalyser from "../assets/resume-analyser.png"
import medic from "../assets/medical.png"

const Projects = () => {
  const projects = [
    {
      title: "Cosmetic E-Commerce",
      image: cosmec,
      alt: "Cosmetic e-commerce website",
      description: "Modern shopping cart with product filtering and checkout flow",
      problem: "Complex state management for cart operations",
      process: "Implemented React Context API with localStorage persistence",
      result: "Smooth UX with real-time cart updates",
      tech: ["React", "Tailwind CSS", "Context API"],
      liveDemo: "https://cosmetic-commerce.netlify.app/",
      github: "https://github.com/Emediong-Jonah03/cosmec-ecommerce.git",
    },
    {
      title: "AI Powered Resume Analyser",
      image: resumeAnalyser,
      alt: "resume analyser",
      description: "A resume analyser that scans your resume and job description and gives analysis result",
      problem: "Built for job seekers to optimise their resume",
      process: "Built AI integretion and backend technology",
      result: "10% increase in landing job",
      tech: ["React","JavaScript", "LLM Nodejs"],
      liveDemo: "https://resume-analyzer-job-matcher-alpha.vercel.app/",
      github: "",
    },
    {
      title: "Medical website",
      image: medic,
      alt: "medical website",
      description: "A website for the medic that connects hospitals",
      problem: "Connects hospitals",
      process: "Implemented React Context API",
      result: "Smooth UX and UI",
      tech: ["React", "Tailwind CSS", "Context API"],
      liveDemo: "https://medilink-project.netlify.app/",
      github: "", 
    },
    {
      title: "AI Chef",
      image: AIChef,
      alt: "AI Chef web app",
      description: "AI-powered web app that creates recipes from ingredients",
      problem: "Confusion in decision-making",
      process: "Integrated AI API with custom React components",
      result: "50% time saving",
      tech: ["React", "API Integration", "Tailwind CSS"],
      liveDemo: "https://my-ai-chep.netlify.app/",
      github: "https://github.com/Emediong-Jonah03/AI-Chef",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[var(--foreground)] mb-12 animate-slide-up">
          Featured Projects
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[var(--surface)] rounded-xl overflow-hidden border border-[var(--primary)]/10 hover:border-[var(--primary)]/40 transition-all shadow-md animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image with consistent aspect ratio */}
              <div className="w-full aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-3">
                  {project.title}
                </h3>
                <p className="text-[var(--foreground)] opacity-80 mb-4">
                  {project.description}
                </p>

                {/* Problem / Process / Result */}
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--primary)] font-semibold min-w-[70px]">
                      Problem:
                    </span>
                    <span className="text-[var(--foreground)] opacity-80">{project.problem}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--primary)] font-semibold min-w-[70px]">
                      Process:
                    </span>
                    <span className="text-[var(--foreground)] opacity-80">{project.process}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--primary)] font-semibold min-w-[70px]">
                      Result:
                    </span>
                    <span className="text-[var(--foreground)] opacity-80">{project.result}</span>
                  </div>
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[var(--surface)] text-[var(--foreground)] text-xs rounded-full border border-[var(--primary)]/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 flex-wrap">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[var(--primary)] hover:underline font-medium"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[var(--foreground)] opacity-60 hover:opacity-100 transition-opacity font-medium"
                    >
                      <FaGithub className="w-4 h-4" />
                      GitHub
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