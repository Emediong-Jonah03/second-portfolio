import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = ({ linkedin, gmail, whatsapp }) => {
  const form = useRef();
  const [status, setStatus] = useState("Send Message");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    budget: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm('service_b908und', 'template_j2x0eod', form.current, {
        publicKey: 'dib_XBkJ32JntiIp6',
      })
      .then(
        () => {
          setStatus("Message Sent!");
          setFormData({ name: "", email: "", project: "", budget: "" });
          setTimeout(() => setStatus("Send Message"), 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus("Error! Try Again");
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-[var(--background)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4 animate-slide-up">
            Ready to build? Let's talk.
          </h2>
          <p className="text-[var(--foreground)] opacity-60 max-w-lg mx-auto">
            Tell me what you're building and I'll get back to you within 24 hours with a clear next step.
          </p>
        </div>

        <div className="bg-[var(--surface)] p-8 md:p-10 rounded-2xl border border-[var(--primary)]/10 shadow-xl animate-slide-up mb-10">
          <form onSubmit={handleSubmit} className="space-y-5" ref={form}>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold text-[var(--foreground)] opacity-60 mb-2 ml-1">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  name="user_name"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 bg-[var(--background)] border border-[var(--primary)]/10 rounded-xl text-[var(--foreground)] focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)] focus:outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[var(--foreground)] opacity-60 mb-2 ml-1">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  name="user_email"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 bg-[var(--background)] border border-[var(--primary)]/10 rounded-xl text-[var(--foreground)] focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)] focus:outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-[var(--foreground)] opacity-60 mb-2 ml-1">What are you building?</label>
              <textarea
                placeholder="Describe your product idea in plain language — no technical knowledge needed."
                value={formData.project}
                name="user_message"
                onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                rows="4"
                className="w-full px-5 py-4 bg-[var(--background)] border border-[var(--primary)]/10 rounded-xl text-[var(--foreground)] focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)] focus:outline-none transition-all resize-none"
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-bold text-[var(--foreground)] opacity-60 mb-2 ml-1">Budget range</label>
              <select
                value={formData.budget}
                name="user_budget"
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-5 py-4 bg-[var(--background)] border border-[var(--primary)]/10 rounded-xl text-[var(--foreground)] focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)] focus:outline-none transition-all"
                required
              >
                <option value="" disabled>Select your budget</option>
                <option value="$200–$500">$200–$500</option>
                <option value="$500–$1000">$500–$1,000</option>
                <option value="$1000+">$1,000+</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={status === "Sending..."}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all shadow-lg ${
                status === "Message Sent!"
                  ? "bg-green-500 text-white"
                  : "bg-[var(--primary)] text-[var(--background)] hover:brightness-110"
              }`}
            >
              {status}
            </button>
          </form>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-[var(--foreground)] opacity-60 hover:opacity-100 hover:text-[var(--primary)] transition-all"
          >
            <FaLinkedin size={22} /> LinkedIn
          </a>
          <a
            href={`mailto:${gmail}`}
            className="flex items-center gap-3 text-[var(--foreground)] opacity-60 hover:opacity-100 hover:text-[var(--primary)] transition-all"
          >
            <IoMdMail size={22} /> Email
          </a>
        </div>

        <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="group">
          <div className="fixed bottom-10 right-10 z-50 flex items-center gap-3">
            <span className="bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">Chat with me</span>
            <FaWhatsapp className="w-14 h-14 text-white bg-green-600 rounded-full p-2 shadow-2xl hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
