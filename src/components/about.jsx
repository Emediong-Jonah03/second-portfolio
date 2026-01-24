import { useState } from "react";
import { FaRegUser } from "react-icons/fa";


const About = () => {
  const quickFacts = {
    Skills: ["React", "JavaScript", "TypeScript", "Tailwind CSS",],
    Tools: ["Git", "Vite", "GitHub",],
  };

  return (
    <section
      id="about"
      className="py-5 bg-[var(--background)] animate-fade-in" 
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[var(--foreground)] mb-12 animate-slide-up">
          About Me
        </h2>
        <div className="items-center">
          <div className="animate-slide-in-left">
            <p className="text-[var(--foreground)] opacity-90 text-lg mb-6">
              I'm a developer with a passion for creating
              beautiful, functional web applications.I love tackling complex
              problems and turning ideas into digital reality.
            </p>
            <div className="bg-[var(--foreground)] p-6 rounded-lg border-2 border-[var(--primary)]/20 shadow-md">
              <pre className="text-sm overflow-x-auto">
                <code className="text-[var(--surface)] opacity-90 leading-relaxed" >{JSON.stringify(quickFacts, null, 2)}</code>
              </pre>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
export default About;