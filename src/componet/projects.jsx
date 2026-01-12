import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import cosmec from "/src/assets/cosmec.png";
import AIChef from "../assets/AI-web-app.png";
import hotelImg from "../assets/hotel.png";
import seafood from "../assets/v0-e-commerce-website-design-bay-six.vercel.app_.png";

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
      title: "Hotel Booking Platform",
      image: hotelImg,
      alt: "Hotel booking website",
      description: "Responsive hotel reservation system with room gallery",
      problem: "Need for mobile-first booking experience",
      process: "Built responsive layouts using CSS grid",
      result: "50% increase in mobile bookings",
      tech: ["HTML", "CSS", "JavaScript"],
      liveDemo: "https://havenhotel.netlify.app/",
      github: "https://github.com/Emediong-Jonah03/Hotel-website",
    },
    {
      title: "Seafood E-Commerce",
      image: seafood,
      alt: "Seafood e-commerce website",
      description: "Modern seafood shopping platform",
      problem: "Complex state management for cart operations",
      process: "Implemented React Context API with localStorage persistence",
      result: "Smooth UX with real-time cart updates",
      tech: ["React", "Tailwind CSS", "Context API"],
      liveDemo: "https://v0-e-commerce-website-design-bay-six.vercel.app/",
      github: "", // No repo, button will hide
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