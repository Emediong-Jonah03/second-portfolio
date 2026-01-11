// Navigation Component
import { useState, useEffect } from "react";

import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 transition-all backdrop-blur-sm border-b border-[#003D99]/10 top-0 bg-[#E5F0FF]/80 dark:bg-[#000E24]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-[#003D99] dark:text-[#E5F0FF]">EmeDev</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {["About", "Skills", "Projects", "Achievements", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-[#003D99] dark:text-[#E5F0FF] hover:text-[#001433] dark:hover:text-[#CCE0FF] font-semibold transition-colors cursor-pointer"
                >
                  {item}
                </button>
              )
            )}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-[#CCE0FF] dark:bg-[#001433] text-[#003D99] dark:text-[#E5F0FF] transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <GoSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-[#CCE0FF] dark:bg-[#001433] text-[#003D99] dark:text-[#E5F0FF] transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <GoSun size={20} /> : <FaMoon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#003D99] dark:text-[#E5F0FF]"
            >
              {isOpen ? (
                <MdClose className="font-bold w-7 h-7 cursor-pointer" />
              ) : (
                <FiMenu className="font-bold w-7 h-7 cursor-pointer" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#CCE0FF] dark:bg-[#001433] border-t border-[#003D99]/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {["About", "Skills", "Projects", "Achievements", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-[#003D99] dark:text-[#E5F0FF] hover:text-[#001433] dark:hover:text-[#CCE0FF] transition-colors w-full text-left"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navigation;
