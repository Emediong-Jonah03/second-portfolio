import { FaFileDownload, FaChevronDown } from "react-icons/fa";
import resume from "../assets/resume.pdf";

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[var(--background)] relative overflow-hidden pt-20">
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        
        {/* Identity */}
        <h1 className="text-4xl md:text-6xl font-bold text-[var(--foreground)] mb-4">
          Software Developer
        </h1>

        {/* Name */}
        <p className="text-lg text-[var(--foreground-muted)] mb-6">
          Hi, I’m <span className="text-[var(--primary)] font-medium">Emediong</span>
        </p>

        {/* Value statement */}
        <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-10 text-[var(--foreground)]">
          I build clear, maintainable web applications with a focus on usability,
          performance, and long-term reliability.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 border-2 border-[var(--primary)] text-[var(--primary)] font-medium rounded-lg hover:bg-[var(--primary)] hover:text-white transition"
          >
            View Projects
          </button>

          <a
            href={resume}
            download
            className="px-8 py-3 bg-[var(--primary)] text-white font-medium rounded-lg hover:opacity-90 transition flex items-center gap-2"
          >
            <FaFileDownload className="w-4 h-4" />
            Resume (PDF)
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16">
          <FaChevronDown className="w-6 h-6 text-[var(--primary)] mx-auto opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;