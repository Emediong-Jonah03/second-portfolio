import { GoBriefcase } from "react-icons/go";
import { FaCheckCircle, FaGithub, FaCodeBranch, FaUsers } from "react-icons/fa";
import { LuBrain } from "react-icons/lu";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const qualities = [
    {
      title: "Clean Code Architecture",
      icon: <GoBriefcase className="w-8 h-8" />,
      description: "Focusing on maintainable, scalable, and well-documented software solutions.",
    },
    {
      title: "Reliable Delivery",
      icon: <FaCheckCircle className="w-8 h-8" />,
      description: "Proven track record of meeting deadlines and maintaining clear communication.",
    },
    {
      title: "AI-First Problem Solving",
      icon: <LuBrain className="w-8 h-8" />,
      description: "Leveraging modern AI models to solve complex logical and business challenges.",
    },
  ];

  return (
    <section className="py-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4">
            Professional Values
          </h2>
          <p className="text-[var(--foreground)] opacity-60 max-w-xl mx-auto">
            My commitment to quality ensures that every project I touch is built for long-term success.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {qualities.map((quality, index) => (
            <div
              key={index}
              className="group text-center bg-[var(--surface)] p-10 rounded-2xl border border-[var(--primary)]/10 shadow-xl hover:border-[var(--primary)]/40 transition-all duration-300"
            >
              <div className="text-[var(--primary)] mb-6 flex justify-center group-hover:scale-110 transition-transform">
                {quality.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">
                {quality.title}
              </h3>
              <p className="text-[var(--foreground)] opacity-70 leading-relaxed">{quality.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// GitHub Stats Section
function GitHubProfile({ gitHub }) {
  const [myGithubProfile, setGitHubProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/Emediong-Jonah03")
      .then((res) => res.json())
      .then((data) => {
        setGitHubProfile(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching GitHub data:", err));
  }, []);

  if (loading) return <div className="py-20 text-center text-[var(--primary)]">Loading Stats...</div>;

  return (
    <section className="py-24 bg-[var(--background)] border-t border-[var(--primary)]/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[var(--surface)] rounded-3xl p-8 md:p-12 border border-[var(--primary)]/10 shadow-2xl relative overflow-hidden">
          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 p-10 opacity-5">
             <FaGithub size={200} />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="relative">
                <img 
                  src={myGithubProfile.avatar_url} 
                  alt="Avatar" 
                  className="w-32 h-32 rounded-2xl border-2 border-[var(--primary)] shadow-2xl rotate-3 group-hover:rotate-0 transition-transform" 
                />
                <div className="absolute -bottom-2 -right-2 bg-[var(--primary)] p-2 rounded-lg text-[var(--background)]">
                  <FaGithub />
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-extrabold text-[var(--foreground)]">Code Activity</h3>
                <p className="text-[var(--foreground)] opacity-60 text-lg">
                  Monitoring live contributions for <span className="text-[var(--primary)]">@{myGithubProfile.login}</span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-[var(--background)] p-6 rounded-2xl border border-[var(--primary)]/5">
                <div className="flex items-center gap-3 text-[var(--primary)] mb-2">
                   <FaCodeBranch />
                   <span className="text-xs uppercase font-bold tracking-widest">Repositories</span>
                </div>
                <div className="text-4xl font-black text-[var(--foreground)]">{myGithubProfile.public_repos}</div>
              </div>

              <div className="bg-[var(--background)] p-6 rounded-2xl border border-[var(--primary)]/5">
                <div className="flex items-center gap-3 text-[var(--primary)] mb-2">
                   <FaUsers />
                   <span className="text-xs uppercase font-bold tracking-widest">Followers</span>
                </div>
                <div className="text-4xl font-black text-[var(--foreground)]">{myGithubProfile.followers}</div>
              </div>

              <div className="hidden md:block bg-[var(--background)] p-6 rounded-2xl border border-[var(--primary)]/5">
                <div className="flex items-center gap-3 text-[var(--primary)] mb-2">
                   <FaGithub />
                   <span className="text-xs uppercase font-bold tracking-widest">Public Gists</span>
                </div>
                <div className="text-4xl font-black text-[var(--foreground)]">{myGithubProfile.public_gists}</div>
              </div>
            </div>

            <div className="mt-12 flex flex-col md:flex-row items-center gap-6 justify-between border-t border-[var(--primary)]/10 pt-8">
               <p className="text-sm text-[var(--foreground)] opacity-50 text-center md:text-left">
                 My open-source work is a reflection of my commitment to continuous learning and community contribution.
               </p>
               <a
                href={gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-[var(--primary)] text-[var(--background)] font-bold rounded-xl hover:scale-105 transition-all shadow-lg whitespace-nowrap"
              >
                Explore My GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Testimonials, GitHubProfile };