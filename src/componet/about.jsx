import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import image from "/src/assets/profile.png"

const About = () => {
  const quickFacts = {
    Skills: ["React", "JavaScript", "Tailwind CSS", "Html5"],
    Tools: ["Git", "Vite", "Figma", "npm"],
    Interests: ["AI/ML", "Cloud Computing", "Open Source"],
  };

  return (
    <section
      id="about"
      className="py-20 bg-[var(--background)]" 
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[var(--foreground)] mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[var(--foreground)] opacity-90 text-lg mb-6">
              I'm a dedicated front-end developer with a passion for creating
              beautiful, functional web applications. Currently expanding my
              skills to become a full-stack engineer, I love tackling complex
              problems and turning ideas into digital reality.
            </p>
            <p className="text-[var(--foreground)] opacity-80 text-lg mb-8">
              With expertise in React, JavaScript, and modern CSS frameworks, I
              build responsive, user-friendly interfaces that deliver
              exceptional user experiences.
            </p>
            <div className="bg-[var(--accent)] p-6 rounded-lg border-2 border-[var(--primary)]/20">
              <pre className="text-sm overflow-x-auto">
                <code className="text-[var(--foreground)] opacity-90 leading-relaxed" >{JSON.stringify(quickFacts, null, 2)}</code>
              </pre>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-[var(--primary)] to-blue-600 rounded-full flex items-center justify-center p-1 shadow-xl">
             <img src={image} className="rounded-full w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;