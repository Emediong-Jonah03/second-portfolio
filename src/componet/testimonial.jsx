import { GoBriefcase, } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";
import { LuBrain } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

import { useEffect, useState } from "react";

const Testimonials = ({ darkMode }) => {
  const qualities = [
    {
      title: "Professional",
      icon: <GoBriefcase className="w-8 h-8" />,
      description: "Delivering high-quality code on time",
    },
    {
      title: "Reliable",
      icon: <FaCheckCircle className="w-8 h-8" />,
      description: "Consistent performance and communication",
    },
    {
      title: "Problem Solver",
      icon: <LuBrain className="w-8 h-8" />,
      description: "Finding creative solutions to complex challenges",
    },
  ];

  return (
    <section className={`py-20 ${darkMode ? "bg-gray-800" : "bg-[#E5F0FF]"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[#001433] mb-4">
          Emediong Jonah
        </h2>
        <p className="text-center text-[#000E24] mb-12 max-w-2xl mx-auto">
          Building digital excellence with passion and precision
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {qualities.map((quality, index) => (
            <div
              key={index}
              className="text-center bg-[#0066FF] p-8 rounded-xl border border-black/10"
            >
              <div className="text-[#E5E7EB] mb-4 flex justify-center">
                {quality.icon}
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">
                {quality.title}
              </h3>
              <p className="text-white">{quality.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// GitHub Stats Section
function GitHubProfile({gitHub}) {

  const [myGithubProfile, setGitHubProfile] = useState([]);

   useEffect(()=>{
   fetch("https://api.github.com/users/Emediong-Jonah03")
  .then(res => res.json())
  .then(data => setGitHubProfile(data))
  

},[])

  return (
    <section className="py-20 bg-[#99C2FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[#001433] mb-12">
          GitHub Activity
        </h2>
        <div className="bg-[#d0dff7] rounded-xl p-8 border border-yellow-500/20">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">
               {myGithubProfile.avatar_url && <img src={myGithubProfile.avatar_url} alt="Avatar" className="w-16 h-16 rounded-full mx-auto" />}
              </div>
              <p className="text-black">Github Avatar</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">{myGithubProfile.public_repos}</div>
              <p className="text-black">Repositories</p>
            </div>
            
          </div>
          <div className="mt-8 flex justify-center">
            <a
              href={gitHub}
              alt="Github"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#0066FF] text-white font-semibold rounded-lg hover:text-black duration-200 transition-colors"
            >
              <FaGithub className="w-5 h-5" />
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export {Testimonials, GitHubProfile};
