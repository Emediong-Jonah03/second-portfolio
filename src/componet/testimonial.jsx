import { GoBriefcase, } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";
import { LuBrain } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

import { useEffect, useState } from "react";

const Testimonials = () => {
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
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[var(--foreground)] mb-4">
          Emediong Jonah
        </h2>
        <p className="text-center text-[var(--foreground)] opacity-70 mb-12 max-w-2xl mx-auto">
          Building digital excellence with passion and precision
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {qualities.map((quality, index) => (
            <div
              key={index}
              className="text-center bg-[var(--accent)] p-8 rounded-xl border border-[var(--primary)]/10 shadow-lg hover:border-[var(--primary)]/30 transition-all"
            >
              <div className="text-[var(--primary)] mb-4 flex justify-center">
                {quality.icon}
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                {quality.title}
              </h3>
              <p className="text-[var(--foreground)] opacity-70">{quality.description}</p>
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
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[var(--foreground)] mb-12">
          GitHub Activity
        </h2>
        <div className="bg-[var(--accent)] rounded-xl p-8 border border-[var(--primary)]/20 shadow-xl">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="flex items-center gap-6 justify-center md:justify-start">
              {myGithubProfile.avatar_url && (
                <img 
                  src={myGithubProfile.avatar_url} 
                  alt="Avatar" 
                  className="w-24 h-24 rounded-full border-4 border-[var(--primary)] shadow-lg" 
                />
              )}
              <div className="text-left">
                <h3 className="text-2xl font-bold text-[var(--foreground)]">{myGithubProfile.name || "Emediong Jonah"}</h3>
                <p className="text-[var(--foreground)] opacity-60">@{myGithubProfile.login}</p>
              </div>
            </div>
            <div className="flex justify-around text-center border-l border-[var(--primary)]/10">
              <div>
                <div className="text-4xl font-bold text-[var(--primary)] mb-1">{myGithubProfile.public_repos}</div>
                <p className="text-[var(--foreground)] opacity-60 text-sm uppercase tracking-wider">Repositories</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[var(--primary)] mb-1">{myGithubProfile.followers}</div>
                <p className="text-[var(--foreground)] opacity-60 text-sm uppercase tracking-wider">Followers</p>
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <a
              href={gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 bg-[var(--primary)] text-white font-semibold rounded-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
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
