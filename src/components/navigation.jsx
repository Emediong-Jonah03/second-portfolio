import { useState, useEffect } from "react";
import { GoSun, GoProject,  } from "react-icons/go";
import { FaMoon} from "react-icons/fa";
import { BiHome } from "react-icons/bi";
import { GiPriceTag, GiPhone } from "react-icons/gi";
import emedevlogo from "/src/assets/emedev-logo.svg";

const navLinks = [
 { label: "Work", icon: <GoProject size={20} />, target: "projects" },
  { label: "Pricing", icon: <GiPriceTag size={20} />, target: "services" },
  { label: "Contact", icon: <GiPhone size={20} />, target: "contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[var(--background)] dark:bg-[var(--foreground)] shadow-xl text-(--background) dark:text-(var(--foreground))"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-lg font-bold tracking-tight text-[var(--foreground)] dark:text-[var(--background)] hover:text-[var(--primary)] transition-colors"
          >
            <img src={emedevlogo} alt="EmeDev Logo" className="h-8 w-8" />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 border-r border-[var(--primary)]/10 pr-8">
              {navLinks.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.target)}
                  className="flex items-center gap-2 text-sm font-bold hover:text-[var(--primary)] transition-colors"
                >
                  <span className="text-[var(--primary)]">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="px-5 py-2.5 bg-[var(--primary)] text-[var(--background)] font-bold rounded-xl text-sm hover:brightness-110 transition-all"
              >
                <GiPhone className="inline mr-2" /> Book a Call
              </button>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all"
              >
                {isDarkMode ? <GoSun size={18} /> : <FaMoon size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]"
            >
              {isDarkMode ? <GoSun size={20} /> : <FaMoon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex flex-col gap-1.5 items-center justify-center w-10 h-10"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-5 invisible"
        } bg-[var(--background)] border-b border-[var(--primary)]/10 p-6 shadow-2xl`}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.target)}
              className="flex items-center gap-3 text-base font-bold text-[var(--foreground)] py-3 px-4 border-b border-[var(--primary)]/5 active:bg-[var(--primary)]/10 rounded-lg text-left"
            >
              <span className="text-[var(--primary)]">{item.icon}</span>
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="mt-3 py-3 bg-[var(--primary)] text-[var(--background)] font-bold rounded-xl text-base flex items-center justify-center gap-2"
          >
            <GiPhone />
            Book a Call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;