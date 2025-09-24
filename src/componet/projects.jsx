import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import cosmec from "/src/assets/cosmec.png"
import AIChef from "../assets/AI-web-app.png"
import hotelImg from "../assets/hotel.png"

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
      liveDemo: "nothing yet",
      github: "https://github.com/Emediong-Jonah03/cosmec",
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
      title: "AI Chef",
      image: AIChef,
      alt: "AI-chef-web-app",
      description: "An AI powered web app that takes inputs of Ingredients and form receipe",
      problem: "Confusion on decision making",
      process: "Integrated AI API with custom React components",
      result: "50% time saving",
      tech: ["React", "API Integration", "Tailwind CSS"],
      liveDemo: "nothing yet",
      github: "https://github.com/Emediong-Jonah03/AI-Chef",
    },
    
  ];

  return (
    <section
      id="projects"
      className={`py-20 bg-gray-800`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black/50 rounded-xl overflow-hidden border border-yellow-500/20 hover:border-yellow-500/40 transition-all"
            >
              <div className="h-48 w-full overflow-hidden">
               {/* <FaCode className="w-16 h-16 text-yellow-400/50" />*/}
               <img src={project.image} alt={project.alt} className="w-auto h-auto object-cover" />
              </div>
              <div className="p-6 bg-gradient-to-bl from-gray-700 to-gray-900">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 font-semibold">Problem:</span>
                    <span className="text-gray-300">{project.problem}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400 font-semibold">
                      Process:
                    </span>
                    <span className="text-gray-300">{project.process}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 font-semibold">
                      Result:
                    </span>
                    <span className="text-gray-300">{project.result}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 text-yellow-400 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                 {project.liveDemo == "nothing yet" ? null : <a
                    href={project.liveDemo}
                    className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    Live Demo
                  </a>}
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-white"
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