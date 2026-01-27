import { FaServer, FaCode, FaRobot, FaCheckCircle } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Enterprise Backend Systems",
      description:
        "Developing high-performance server-side logic and database architectures that serve as the backbone of your business.",
      icon: <FaServer className="w-10 h-10 text-[var(--primary)]" />,
      features: ["Secure REST & GraphQL APIs", "Optimized Database Architectures", "Scalable Cloud Logic"],
    },
    {
      title: "Full-Stack Web Engineering",
      description:
        "Building seamless, end-to-end digital products from conceptual UI design to complex backend deployment.",
      icon: <FaCode className="w-10 h-10 text-[var(--primary)]" />,
      features: ["Dynamic React Interfaces", "User-Centric UX Design", "Responsive & Fast Performance"],
    },
    {
      title: "AI & Intelligent Automation",
      description:
        "Transforming standard applications into 'Smart' platforms by integrating cutting-edge LLMs and machine learning models.",
      icon: <FaRobot className="w-10 h-10 text-[var(--primary)]" />,
      features: [
        "Custom OpenAI/LLM Integration",
        "Automated Content Generation",
        "Semantic Search & Analysis",
        "Predictive User Workflows",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4 animate-slide-up">
            Expertise & Solutions
          </h2>
          <p className="text-[var(--foreground)] opacity-60 max-w-2xl mx-auto">
            Providing high-end software development services tailored to modern business needs and AI-driven growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[var(--surface)] p-8 rounded-2xl border border-[var(--primary)]/10 hover:border-[var(--primary)]/40 hover:shadow-2xl hover:shadow-[var(--primary)]/5 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 bg-[var(--background)] w-fit p-4 rounded-xl group-hover:bg-[var(--primary)]/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4 group-hover:text-[var(--primary)] transition-colors">
                {service.title}
              </h3>
              <p className="text-[var(--foreground)] opacity-70 mb-8 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-[var(--foreground)] opacity-90 text-sm font-semibold flex items-center gap-3"
                  >
                    <FaCheckCircle className="text-[var(--primary)] flex-shrink-0" />
                    {feature}
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