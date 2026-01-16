import { FaServer, FaRocket, FaRobot } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Backend Development",
      description:
        "Python APIs with Flask/Django, MongoDB database design, RESTful services",
      icon: <FaServer className="w-10 h-10 text-[var(--primary)]" />,
      features: ["REST API Development", "Database Design", "Authentication Systems"],
    },
    {
      title: "Full-Stack Applications",
      description:
        "End-to-end web applications with React frontend and Python backend",
      icon: <FaRocket className="w-10 h-10 text-[var(--primary)]" />,
      features: ["React Frontend", "Node.js", "Express.js", "MongoDB Database"],
    },
    {
      title: "AI Integration",
      description:
        "Integrate AI/ML capabilities into web applications to enable smart automation and insights",
      icon: <FaRobot className="w-10 h-10 text-[var(--primary)]" />,
      features: [
        "AI/ML Model Integration",
        "Chatbot & NLP Features",
        "Predictive Analytics",
        "Automation Workflows",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-[var(--background)] animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[var(--foreground)] mb-12 animate-slide-up">
          Development Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--primary)]/10 hover:border-[var(--primary)]/30 transition-all shadow-md animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[var(--primary)] mb-3">
                {service.title}
              </h3>
              <p className="text-[var(--foreground)] opacity-80 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-[var(--primary)] font-medium text-sm flex items-center gap-2"
                  >
                    <span className="text-lg">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
