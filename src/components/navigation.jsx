import { useState, useEffect } from "react";
import { FiMenu, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";

const Navigation = ({ gitHub, linkedin, gmail }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") return true;
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
      setIsOpen(false); // Closes menu after clicking
    }
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${
      scrolled 
      ? "py-3 bg-white text-black shadow-xl" 
      : "py-5 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Brand */}
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-2xl font-black tracking-tighter text-[var(--primary)]">
            EmeDev
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 border-r border-[var(--primary)]/10 pr-8">
              {["About", "Projects", "Milestones", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-bold uppercase tracking-widest opacity-70 hover:opacity-100 hover:text-[var(--primary)] transition-all"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-5">
              <a href={gitHub} target="_blank" rel="noreferrer" className="opacity-60 hover:text-[var(--primary)] hover:opacity-100 transition-all"><FiGithub size={20}/></a>
              <a href={linkedin} target="_blank" rel="noreferrer" className="opacity-60 hover:text-[var(--primary)] hover:opacity-100 transition-all"><FiLinkedin size={20}/></a>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all"
              >
                {isDarkMode ? <GoSun size={18} /> : <FaMoon size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Toggle - Added 'flex' specifically here */}
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

      {/* Mobile Menu Overlay - Forced background colors for testing */}
      <div className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out ${
        isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-5 invisible"
      } bg-white text-[#001433] dark:bg-[#001433] dark:text-white border-b border-[var(--primary)]/10 p-6 shadow-2xl`}>
          <div className="flex flex-col gap-4 text-center">
            {["About", "Projects", "Milestones", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-lg font-bold bg-white text-[#001433] dark:bg-[#001433] dark:text-white py-3 border-b border-[var(--primary)]/5 active:bg-[var(--primary)]/10 rounded-lg"
              >
                {item}
              </button>
            ))}
            <div className="flex justify-center gap-10 pt-6">
               <a href={gitHub} className="text-black dark:text-white"><FiGithub size={26}/></a>
               <a href={linkedin} className="text-black dark:text-white"><FiLinkedin size={26}/></a>
               <a href={`mailto:${gmail}`} className="text-black dark:text-white"><FiMail size={26}/></a>
            </div>
          </div>
      </div>
    </nav>
  );
};

export default Navigation;