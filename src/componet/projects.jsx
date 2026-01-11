import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import cosmec from "/src/assets/cosmec.png";
import AIChef from "../assets/AI-web-app.png";
import hotelImg from "../assets/hotel.png";
import seafood from "../assets/v0-e-commerce-website-design-bay-six.vercel.app_.png"

const Projects = () => {
  
  const projects = [
    {
      title: "E-Commerce Platform",
      image: cosmec,
      alt: "e-commerce website image",
      description:
        "Modern shopping cart with product filtering and checkout flow",
      problem: "Complex state management for cart operations",
      process: "Implemented React Context API with localStorage persistence",
      result: "Smooth UX with real-time cart updates",
      tech: ["React", "Tailwind CSS", "Context API"],
      liveDemo: "https://cosmetic-commerce.netlify.app/",
      github: "https://github.com/Emediong-Jonah03/cosmec-ecommerce.git",
    },
    {
      title: "Hotel Booking Website",
      image: hotelImg,
      alt: "Hotel website image",
      description: "Responsive hotel reservation system with room gallery",
      problem: "Need for mobile-first booking experience",
      process: "Built responsive layouts  CSS grid system",
      result: "50% increase in mobile bookings",
      tech: ["HTML", "CSS", "JavaScript"],
      liveDemo: "https://havenhotel.netlify.app/",
      github: "https://github.com/Emediong-Jonah03/Hotel-website",
    }, 
     {
      title: "E-Commerce Platform",
      image: seafood,
      alt: "e-commerce website image",
      description:
        "Modern Seafood Website",
      problem: "Complex state management for cart operations",
      process: "Implemented React Context API with localStorage persistence",
      result: "Smooth UX with real-time cart updates",
      tech: ["React", "Tailwind CSS", "Context API"],
      liveDemo: "https://v0-e-commerce-website-design-bay-six.vercel.app/",
      github: "",
    },
    {
      title: "AI Chef",
      image: AIChef,
      alt: "AI-chef-web-app",
      description:
        "An AI powered web app that takes inputs of Ingredients and form receipe",
      problem: "Confusion on decision making",
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
        <h2 className="text-4xl font-bold text-center text-[var(--foreground)] mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[var(--accent)] rounded-xl overflow-hidden border border-[var(--primary)]/10 hover:border-[var(--primary)]/40 transition-all shadow-lg"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-3">
                  {project.title}
                </h3>
                <p className="text-[var(--foreground)] opacity-70 mb-4">{project.description}</p>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--primary)] font-semibold min-w-[70px]">Problem:</span>
                    <span className="text-[var(--foreground)] opacity-80">{project.problem}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--primary)] font-semibold min-w-[70px]">Process:</span>
                    <span className="text-[var(--foreground)] opacity-80">{project.process}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--primary)] font-semibold min-w-[70px]">Result:</span>
                    <span className="text-[var(--foreground)] opacity-80">{project.result}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[var(--background)] text-[var(--foreground)] text-xs rounded-full border border-[var(--primary)]/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.liveDemo !== "nothing yet" && (
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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[var(--foreground)] opacity-60 hover:opacity-100 transition-opacity font-medium"
                  >
                    <FaGithub className="w-4 h-4" />
                    GitHub
                  </a>
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
