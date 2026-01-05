// Navigation Component
import { useState } from "react";

import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 transition-all backdrop-blur-sm border-b border-[66A3FF]/10 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-[#003D99]">EmeDev</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {["About", "Skills", "Projects", "Achievements", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-[#003D99] hover:text-[#001433] font-semibold transition-colors cursor-pointer"
                >
                  {item}
                </button>
              )
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#003D99]"
          >
            {isOpen ? (
              <MdClose className="font-bold text-[#003D99] w-7 h-7 cursor-pointer" />
            ) : (
              <FiMenu className="font-bold text-[#003D99] w-7 h-7 cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#CCE0FF] border-t border[#CCE0FF]/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {["About", "Skills", "Projects", "Achievements", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-[#003D99] hover:text-[#001433] transition-colors w-full text-left"
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
