import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import image from "/src/assets/profile.png"

const About = ({ darkMode }) => {
  const quickFacts = {
    Skills: ["React", "JavaScript", "Tailwind CSS", "Html5"],
    Tools: ["Git", "Vite", "Figma", "npm"],
    Interests: ["AI/ML", "Cloud Computing", "Open Source"],
  };


  return (
    <section
      id="about"
      className="py-20 bg-gray-800" 
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 text-lg mb-6">
              I'm a dedicated front-end developer with a passion for creating
              beautiful, functional web applications. Currently expanding my
              skills to become a full-stack engineer, I love tackling complex
              problems and turning ideas into digital reality.
            </p>
            <p className="text-gray-300 text-lg mb-8">
              With expertise in React, JavaScript, and modern CSS frameworks, I
              build responsive, user-friendly interfaces that deliver
              exceptional user experiences.
            </p>
            <div className="bg-black/50 p-6 rounded-lg border border-yellow-500/20">
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code className="text-yellow-300" >{JSON.stringify(quickFacts, null, 2)}</code>
              </pre>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
             <img src={image} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;