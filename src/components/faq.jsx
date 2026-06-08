import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    q: "How long does it take to build my product?",
    a: "Most projects take 2–6 weeks depending on scope. You'll get a clear timeline before we start.",
  },
  {
    q: "What do you need from me to get started?",
    a: "A clear description of what you want to build, your timeline, and your budget. No technical knowledge needed.",
  },
  {
    q: "What if I need changes after launch?",
    a: "Every project includes one round of revisions. Ongoing support is available at an agreed rate.",
  },
  {
    q: "How much does it cost?",
    a: "Projects start at $300 for a backend MVP. Full-stack apps start at $600. I'll give you a fixed quote upfront — no surprises.",
  },
  {
    q: "Why should I hire you over a cheaper option?",
    a: "Cheap builds break at scale. I build with security, clean architecture, and deployment in mind from day one — so you don't rebuild in 6 months.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-24 bg-[var(--background)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4">
            Common Questions
          </h2>
          <p className="text-[var(--foreground)] opacity-60">
            Everything you need to know before reaching out.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-[var(--surface)] border border-[var(--primary)]/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[var(--primary)]/30"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left gap-4"
              >
                <span className="font-bold text-[var(--foreground)] text-base leading-snug">
                  {faq.q}
                </span>
                <FaChevronDown
                  className={`text-[var(--primary)] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-48 pb-5" : "max-h-0"
                }`}
              >
                <p className="px-6 text-[var(--foreground)] opacity-70 leading-relaxed text-base">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
