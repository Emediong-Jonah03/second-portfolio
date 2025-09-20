import { GoBriefcase, } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";
import { LuBrain } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

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
    <section className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-900"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-4">
          Emediong Jonah
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Building digital excellence with passion and precision
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {qualities.map((quality, index) => (
            <div
              key={index}
              className="text-center bg-black/50 p-8 rounded-xl border border-yellow-500/20"
            >
              <div className="text-yellow-400 mb-4 flex justify-center">
                {quality.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {quality.title}
              </h3>
              <p className="text-gray-400">{quality.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// GitHub Stats Section
function GitHubProfile({gitHub}) {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
          GitHub Activity
        </h2>
        <div className="bg-gray-800 rounded-xl p-8 border border-yellow-500/20">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                150+
              </div>
              <p className="text-gray-400">Contributions This Year</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">20+</div>
              <p className="text-gray-400">Repositories</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">30+</div>
              <p className="text-gray-400">Pull Requests</p>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <a
              href={gitHub}
              alt="Github"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
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