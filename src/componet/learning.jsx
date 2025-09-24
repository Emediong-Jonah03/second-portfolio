// Learning Journey Section

import { LuDatabase } from "react-icons/lu";
import { BsCloudUpload } from "react-icons/bs";
import { LuBrain } from "react-icons/lu";
import { FaCode } from "react-icons/fa";
import { FaTerminal } from "react-icons/fa6";

const LearningJourney = () => {
  const roadmap = [
    {
      title: "Node.js",
      status: "in-progress",
      progress: 20,
      icon: <FaTerminal className="w-6 h-6" />,
    },
    
    {
      title: "REST APIs",
      status: "in-progress",
      progress: 10,
      icon: <LuDatabase className="w-6 h-6" />,
    },
    {
      title: "Cloud (AWS)",
      status: "planned",
      progress: 0,
      icon: <BsCloudUpload className="w-6 h-6" />,
    },
    {
      title: "AI/ML Basics",
      status: "planned",
      progress: 0,
      icon: <LuBrain className="w-6 h-6" />,
    },
  ];

  return (
    <section
      id="learning"
      className={`py-20 bg-gray-800`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
          What I'm Learning Now
        </h2>
        <div className="space-y-6">
          {roadmap.map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="text-yellow-400">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      item.status === "in-progress"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-gray-700 text-gray-400"
                    }`}
                  >
                    {item.status === "in-progress" ? "In Progress" : "Planned"}
                  </span>
                </div>
                <span className="text-gray-400">{item.progress}%</span>
              </div>
              <div className="w-full bg-gray-500 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default LearningJourney;