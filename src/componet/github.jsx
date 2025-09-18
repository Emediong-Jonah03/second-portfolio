import { FaGithub } from "react-icons/fa";

const GitHubStats = ({ darkMode }) => {
  return (
    <section className={`py-20 ${darkMode ? "bg-gray-900" : "bg-black"}`}>
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
              href="https://github.com"
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
} export default GitHubStats