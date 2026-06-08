import { FaChevronDown, FaCalendarAlt } from "react-icons/fa";
import image from "/src/assets/Emediong.jpeg";

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-[var(--background)] pt-24 pb-12 flex items-center overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[var(--primary)] opacity-5 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center relative z-10">

        <div className="text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--foreground)] mb-6 leading-tight animate-slide-up">
            I build the backend your startup needs to{" "}
            <span className="text-[var(--primary)]">launch</span>{" "}
            — fast, secure, and investor-ready.
          </h1>

          <p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl leading-relaxed mb-8 text-[var(--foreground)] opacity-80 animate-fade-in">
            For non-technical founders who need a working product — not a tech lecture. You describe what you want to build; I build it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in mb-5">
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto px-8 py-4 bg-[var(--primary)] text-[var(--background)] font-bold rounded-xl hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2 text-lg"
            >
              <FaCalendarAlt /> Book a Free Call
            </button>
          </div>

          <p className="text-sm text-[var(--foreground)] opacity-50 text-center lg:text-left animate-fade-in">
            3 products shipped &nbsp;·&nbsp; Projects from $300
          </p>
        </div>

        <div className="flex justify-center order-1 lg:order-2 animate-fade-in">
          <div className="relative group">
            <div className="absolute inset-0 rounded-full border-2 border-[var(--primary)] opacity-20 group-hover:scale-110 transition-transform duration-700"></div>
            <div className="w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 flex items-center justify-center p-2">
              <img
                src={image}
                alt="Emediong Jonah - Full-Stack Developer"
                className="rounded-full w-full h-full object-fill shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>

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
