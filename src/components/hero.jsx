import { FaFileDownload, FaChevronDown, FaRocket } from "react-icons/fa";
import resume from "../assets/resume.pdf";
import image from "/src/assets/profile.png";

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-[var(--background)] pt-24 pb-12 flex items-center overflow-hidden">
      {/* Subtle Background Glow for that 2026 AI feel */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[var(--primary)] opacity-5 blur-[100px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center relative z-10">

        {/* Text content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--foreground)] mb-6 leading-tight animate-slide-up">
           Building <span className="text-[var(--primary)]">Intelligent</span> Web Applications That Drive Growth.
          </h1>

          <p className="max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl leading-relaxed mb-10 text-[var(--foreground)] opacity-90 animate-fade-in">
           Hi, I’m <span className="font-bold text-[var(--foreground)]">Emediong Jonah</span>. I’m a Software Developer specializing in Full-Stack AI Integration. I bridge the gap between complex backend logic and intuitive user experiences.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start items-center animate-fade-in">
            {/* Primary Action */}
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-[var(--primary)] text-[var(--background)] font-bold rounded-xl hover:scale-105 transition-all shadow-lg flex items-center gap-2"
            >
              <FaRocket /> Let's Build Something
            </button>

            {/* Secondary Action */}
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 border-2 border-[var(--primary)]/30 text-[var(--foreground)] font-bold rounded-xl hover:bg-[var(--primary)]/10 transition-all"
            >
              View My Work
            </button>

            {/* Resume Link */}
            <a
              href={resume}
              download
              className="w-full sm:w-auto mt-4 sm:mt-0 flex items-center justify-center gap-2 text-[var(--foreground)] opacity-60 hover:opacity-100 transition-opacity font-medium"
            >
              <FaFileDownload className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Image - Styled with a modern border-radius or shape */}
        <div className="flex justify-center order-1 lg:order-2 animate-fade-in">
          <div className="relative group">
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-[var(--primary)] opacity-20 group-hover:scale-110 transition-transform duration-700"></div>
            
            <div className="w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 flex items-center justify-center p-2">
              <img
                src={image}
                alt="Emediong Jonah - Software Developer"
                className="rounded-full w-full h-full object-fill shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:block lg:col-span-2 absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            aria-label="Scroll down"
            className="p-2 rounded-full border border-[var(--primary)]/20 text-[var(--primary)]"
          >
            <FaChevronDown />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;