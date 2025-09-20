import React, { useState, useEffect, useRef } from 'react';

import { FaFileDownload } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";


const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden pt-4">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Hi, I'm <span className="text-yellow-400">EmeDev</span> <div className="mt-4 animate-wiggle">👋</div>
        </h1>
        <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
          <BiDotsHorizontalRounded
            texts={[
              "Front-End Developer",
              "Aspiring Full-Stack Engineer",
              "Problem Solver",
            ]}
          />
        </div>
        <p className="text-zinc-100 mb-10 max-w-2xl mx-auto">
          Crafting exceptional digital experiences with modern web technologies.
          Passionate about clean code, responsive design, and continuous
          learning.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transform animate-pulse hover:scale-105 transition-all"
          >
            Hire Me
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transform hover:scale-105 transition-all"
          >
            View My Work
          </button>
          <button className="px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transform hover:scale-105 transition-all flex items-center gap-2">
            <FaFileDownload className="w-5 h-5 animate-bounce" />
            Download Resume
          </button>
        </div>
        <div className="mt-20 animate-bounce">
          <FaChevronDown className="w-8 h-8 text-yellow-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};

// Typing Effect Component
/*function TypingEffect ({ texts, speed = 100, pause = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, pause]);

  return <span className="text-yellow-400">{displayText}<span className="animate-pulse">|</span></span>;
};
*/
export default  Hero

