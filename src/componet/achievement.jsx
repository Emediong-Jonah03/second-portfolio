import { FaRegStar } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { GoBriefcase, } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";


const Achievements = () => {
  const milestones = [
      {
      date: "Oct 2023",
      title: "Started HTML and CSS",
      icon: <FaRegStar className="w-6 h-6" />,
    },
      {
      date: "Sep 2024",
      title: "Buit my first Website",
      icon: <FaRegStar className="w-6 h-6" />,
    },

      {
      date: "Nov 2024",
      title: "Buit two landing pages projects",
      icon: <FaRegStar className="w-6 h-6" />,
    },
    
    {
      date: "Jan 2025",
      title: "Started JavaScript and Python Journey",
      icon: <FaRegStar className="w-6 h-6" />,
    },

    {
      date: "Mar 2025",
      title: "Started learning Github, Vercel, and Netlify",
      icon: <FaRegStar className="w-6 h-6" />,
    },

     {
      date: "Apr 2025",
      title: "Built my first Portfolio website and deployed it to Production",
      icon: <FaRegStar className="w-6 h-6" />,
    },

    {
      date: "Jun 2025",
      title: "Started learning Git",
      icon: <FaRegStar className="w-6 h-6" />,
    },
    {
      date: "Jul 2025",
      title: "Started Tailwind CSS",
      icon: <FaCheckCircle className="w-6 h-6" />,
    },
   
    {
      date: "Aug 2025",
      title: "Started React till date",
      icon: <FaCode className="w-6 h-6" />,
    },
  
  ];

  return (
    <section
      id="achievements"
      className="py-20 bg-[var(--background)] animate-fade-in"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[var(--foreground)] mb-12 animate-slide-up">
          Achievements
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[var(--primary)]/20"></div>
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`flex items-center mb-8 animate-slide-up ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                }`}
              >
                <div className="bg-[var(--accent)] p-4 rounded-lg border border-[var(--primary)]/20 inline-block shadow-md hover:border-[var(--primary)]/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="text-[var(--primary)]">{milestone.icon}</div>
                    <div className={index % 2 === 0 ? "text-right" : "text-left"}>
                      <p className="text-[var(--foreground)] opacity-60 text-xs mb-1">{milestone.date}</p>
                      <h3 className="text-[var(--foreground)] font-semibold">
                        {milestone.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--primary)] rounded-full border-2 border-[var(--background)]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
