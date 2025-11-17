const Services = () => {
  const services = [
    {
      title: "Backend Development",
      description: "Python APIs with Flask/Django, MongoDB database design, RESTful services",
      icon: "🔧",
      features: ["REST API Development", "Database Design", "Authentication Systems"]
    },
    {
      title: "Full-Stack Applications",
      description: "End-to-end web applications with React frontend and Python backend",
      icon: "🚀",
      features: ["React Frontend", "Python Backend", "MongoDB Database"]
    },
    {
      title: "WordPress Solutions",
      description: "Custom WordPress themes, plugins, and headless CMS implementations",
      icon: "💻",
      features: ["Custom Themes", "Plugin Development", "Headless WordPress"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
          Development Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg border border-yellow-500/20">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-yellow-400 text-sm">✓ {feature}</li>
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