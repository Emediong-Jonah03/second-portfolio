// Navigation Component
import { useState } from "react";

import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { GoSun } from "react-icons/go"
import { FaMoon } from "react-icons/fa";

const Navigation = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all ${darkMode ? 'bg-gray-900/95' : 'bg-black/95'} backdrop-blur-sm border-b border-yellow-500/20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-yellow-400">EmeTech</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Skills', 'Projects', 'Learning', 'Achievements', 'Blog', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                {item}
              </button>
            ))}
            <button onClick={toggleDarkMode} className="text-yellow-400 hover:text-yellow-300">
              {darkMode ? <GoSun className="w-5 h-5" />   : <FaMoon className="w-5 h-5" />}
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300"
          >
            {isOpen ? <MdClose /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-yellow-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['About', 'Skills', 'Projects', 'Learning', 'Achievements', 'Blog', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block px-3 py-2 text-gray-300 hover:text-yellow-400 transition-colors w-full text-left"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navigation; 