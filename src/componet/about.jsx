import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import image from "/src/assets/profile.png"

const About = () => {
  const quickFacts = {
    Skills: ["React", "JavaScript", "Tailwind CSS", "Html5"],
    Tools: ["Git", "Vite", "Figma", "npm"],
  };

  return (
    <section
      id="about"
      className="py-20 bg-[var(--background)] animate-fade-in" 
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[var(--foreground)] mb-12 animate-slide-up">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <p className="text-[var(--foreground)] opacity-90 text-lg mb-6">
              I'm a developer with a passion for creating
              beautiful, functional web applications.I love tackling complex
              problems and turning ideas into digital reality.
            </p>
            <div className="bg-[var(--accent)] p-6 rounded-lg border-2 border-[var(--primary)]/20 shadow-md">
              <pre className="text-sm overflow-x-auto">
                <code className="text-[var(--foreground)] opacity-90 leading-relaxed" >{JSON.stringify(quickFacts, null, 2)}</code>
              </pre>
            </div>
          </div>
          <div className="flex justify-center animate-fade-in delay-200">
            <div className="w-64 h-64 bg-gradient-to-br from-[var(--primary)] to-blue-600 rounded-full flex items-center justify-center p-1 shadow-xl hover:scale-105 transition-transform duration-500">
             <img src={image} className="rounded-full w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;