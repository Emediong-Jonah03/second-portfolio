import { FaFileDownload, FaChevronDown } from "react-icons/fa";
import resume from "../assets/resume.pdf";
import image from "/src/assets/profile-pic.jpeg";

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-[var(--background)] pt-20 flex items-center">
      <div className="max-w-6xl mx-auto px-4 grid gap-12 lg:grid-cols-2 items-center">

        {/* Text content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--foreground)] mb-4 animate-slide-up is-visible">
            Software Developer
          </h1>

          <p className="text-lg text-[var(--foreground)] mb-6 animate-fade-in is-visible">
            Hi, I’m{" "}
            <span className="text-[var(--primary)] font-medium">
              Emediong
            </span>
          </p>

          <p className="max-w-2xl mx-auto lg:mx-0 text-base md:text-lg leading-relaxed mb-10 text-[var(--foreground)] animate-slide-up is-visible">
            I build clear, maintainable web applications with a focus on
            usability, performance, and long-term reliability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in is-visible">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 border-2 border-[var(--primary)] text-[var(--primary)] font-medium rounded-lg hover:bg-[var(--primary)] hover:text-white transition"
            >
              View Projects
            </button>

            <a
              href={resume}
              download
              className="px-8 py-3 bg-[var(--primary)] text-white font-medium rounded-lg hover:opacity-90 transition flex items-center gap-2 button"
            >
              <FaFileDownload className="w-4 h-4" />
              Resume (PDF)
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center animate-fade-in is-visible">
          <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-[var(--primary)] to-blue-600 rounded-full flex items-center justify-center p-1 shadow-xl hover:scale-105 transition-transform duration-500">
            <img
              src={image}
              alt="Portrait of Emediong"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="lg:col-span-2 mt-6 animate-fade-in is-visible">
          <div
            onClick={() => scrollToSection("about")}
            className="cursor-pointer"
          >
            <FaChevronDown className="w-6 h-6 text-[var(--primary)] mx-auto opacity-70" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
