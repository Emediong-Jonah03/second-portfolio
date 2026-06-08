import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";
import logo from "../assets/emedev_logo.svg"

const navLinks = [
  { label: "About", target: "about" },
  { label: "Work", target: "projects" },
  { label: "Services", target: "services" },
  { label: "Contact", target: "contact" },
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
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled
      ? "py-3 bg-white dark:bg-[#0A0F1E] shadow-xl text-white"
      : "py-5 bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="sm:w-16 w-8 h-auto">
            <img src={logo} alt="EmeDev" srcSet={logo} className="rounded-full h-full w-full" />
          </button>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 border-r border-[var(--primary)]/10 pr-8">
              {navLinks.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.target)}
                  className="text-sm font-bold uppercase tracking-widest opacity-70 hover:opacity-100 hover:text-[var(--primary)] transition-all"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="px-5 py-2.5 bg-[var(--primary)] text-[var(--background)] font-bold rounded-xl text-sm hover:brightness-110 transition-all"
              >
                Book a Call
              </button>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all"
              >
                {isDarkMode ? <GoSun size={18} /> : <FaMoon size={18} />}
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="text-[var(--foreground)] p-2">
              {isDarkMode ? <GoSun size={22} /> : <FaMoon size={22} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--primary)] p-2">
              {isOpen ? <MdClose size={30} /> : <FiMenu size={30} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-5 invisible"
        } bg-white text-[#001433] dark:bg-[#001433] dark:text-white border-b border-[var(--primary)]/10 p-6 shadow-2xl`}>
        <div className="flex flex-col gap-4 text-center">
          {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.target)}
              className="text-lg font-bold bg-white text-[#001433] dark:bg-[#001433] dark:text-white py-3 border-b border-[var(--primary)]/5 active:bg-[var(--primary)]/10 rounded-lg"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="mt-2 py-3 bg-[var(--primary)] text-[var(--background)] font-bold rounded-xl text-base"
          >
            Book a Call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
