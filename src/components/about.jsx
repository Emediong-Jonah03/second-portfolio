const About = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-20 bg-[var(--background)] animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[var(--foreground)] mb-16 animate-slide-up">
          About
        </h2>

        <div className="max-w-3xl mx-auto text-center animate-slide-up">
          <p className="text-[var(--foreground)] opacity-90 text-xl leading-relaxed mb-6">
            I'm Emediong Jonah, a full-stack developer who builds backend-first products for early-stage founders — the kind that handle real users, real payments, and real scale from day one. My flagship project, DryCatch, is a production e-commerce platform with Paystack payments, role-based access control, and a full admin panel — built end-to-end by me. You're not choosing between quality and speed; with a focused scope and a clear brief, you get both. The difference between me and a cheaper option is that you won't be rebuilding in six months.
          </p>

          <div className="mb-10 inline-block px-5 py-2.5 bg-[var(--surface)] border border-[var(--primary)]/20 rounded-full text-sm text-[var(--foreground)] opacity-70 font-mono tracking-wide">
            Stack: FastAPI · React · PostgreSQL · Redis · Paystack · TypeScript
          </div>

          <div>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-block px-8 py-4 bg-[var(--primary)] text-[var(--background)] font-bold rounded-xl hover:brightness-110 transition-all text-base"
            >
              Let's talk about your project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
