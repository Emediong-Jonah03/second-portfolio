import { FaServer, FaCode, FaCog, FaCheckCircle } from "react-icons/fa";

const tiers = [
  {
    icon: <FaServer className="w-8 h-8 text-[var(--primary)]" />,
    title: "MVP Backend",
    price: "from $300",
    description: "FastAPI or Express backend, database setup, user auth, and deployment. You get a working API your frontend — or your team — can build on immediately.",
    features: [
      "REST API with FastAPI or Express",
      "Database design & setup",
      "Auth (JWT / session-based)",
    ],
    timeline: "Delivered in 2–3 weeks",
  },
  {
    icon: <FaCode className="w-8 h-8 text-[var(--primary)]" />,
    title: "Full-Stack Web App",
    price: "from $600",
    description: "Frontend and backend built together — with payments, an admin panel, and role-based access. Everything a launch-ready product needs.",
    features: [
      "React frontend + FastAPI backend",
      "Paystack payment integration",
      "Admin panel & RBAC",
    ],
    timeline: "Delivered in 4–6 weeks",
    featured: true,
  },
  {
    icon: <FaCog className="w-8 h-8 text-[var(--primary)]" />,
    title: "Custom Build",
    price: "from $1,000",
    description: "For complex systems that don't fit a template — AI integrations, multi-role platforms, or anything that needs a scoped technical plan first.",
    features: [
      "AI & LLM integrations",
      "Multi-role platform architecture",
      "Custom scope & timeline",
    ],
    timeline: "Timeline scoped per project",
  },
];

const Services = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4 animate-slide-up">
            What I Build
          </h2>
          <p className="text-[var(--foreground)] opacity-60 max-w-xl mx-auto">
            Fixed-scope, fixed-price engagements. You know exactly what you're getting before we start.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`group flex flex-col bg-[var(--surface)] p-8 rounded-2xl border transition-all duration-300 animate-slide-up ${
                tier.featured
                  ? "border-[var(--primary)]/60 shadow-xl shadow-[var(--primary)]/10 relative"
                  : "border-[var(--primary)]/10 hover:border-[var(--primary)]/40 hover:shadow-xl"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--primary)] text-[var(--background)] text-xs font-bold rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-5 bg-[var(--background)] w-fit p-4 rounded-xl">
                {tier.icon}
              </div>

              <div className="mb-4">
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-1">
                  {tier.title}
                </h3>
                <p className="text-[var(--primary)] font-black text-2xl">
                  {tier.price}
                </p>
              </div>

              <p className="text-[var(--foreground)] opacity-70 mb-6 leading-relaxed text-sm">
                {tier.description}
              </p>

              <ul className="space-y-3 mb-6 flex-1">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[var(--foreground)] opacity-90">
                    <FaCheckCircle className="text-[var(--primary)] flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="text-xs text-[var(--foreground)] opacity-40 font-mono mb-6 uppercase tracking-widest">
                {tier.timeline}
              </p>

              <button
                onClick={() => scrollToSection("contact")}
                className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all ${
                  tier.featured
                    ? "bg-[var(--primary)] text-[var(--background)] hover:brightness-110"
                    : "border border-[var(--primary)]/30 text-[var(--foreground)] hover:bg-[var(--primary)]/10 hover:border-[var(--primary)]"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
