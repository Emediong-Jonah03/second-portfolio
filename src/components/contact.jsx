import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { SlCalender } from "react-icons/sl";

const Contact = ({ linkedin, twitter, gitHub, gmail, whatsapp }) => {
  const form = useRef();
  const [status, setStatus] = useState("Send Message");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
          setFormData({ name: "", email: "", message: "" });
          // Reset status back to default after 3 seconds
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4 animate-slide-up">
            Let’s Build Something Great
          </h2>
          <p className="text-[var(--foreground)] opacity-60 max-w-xl mx-auto">
            Ready to bring your project to life? Whether you have a question or a full proposal, 
            I'm just a message away.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="bg-[var(--surface)] p-10 rounded-2xl border border-[var(--primary)]/10 shadow-xl animate-slide-in-left">
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6 mb-10">
              <a href={`mailto:${gmail}`} className="flex items-center gap-5 text-[var(--foreground)] opacity-80 hover:text-[var(--primary)] transition-all group">
                <div className="p-4 bg-[var(--background)] rounded-xl group-hover:scale-110 transition-transform">
                  <IoMdMail className="w-6 h-6 text-[var(--primary)]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest opacity-50 font-bold">Email Me</p>
                  <span className="text-lg">jonahemediong9@gmail.com</span>
                </div>
              </a>

              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 text-[var(--foreground)] opacity-80 hover:text-[var(--primary)] transition-all group">
                <div className="p-4 bg-[var(--background)] rounded-xl group-hover:scale-110 transition-transform">
                  <FaLinkedin className="w-6 h-6 text-[var(--primary)]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest opacity-50 font-bold">Connect</p>
                  <span className="text-lg">LinkedIn Profile</span>
                </div>
              </a>
            </div>

            <div className="border-t border-[var(--primary)]/10 pt-8">
              <p className="text-[var(--foreground)] opacity-70 mb-6 italic">
                "Currently accepting new projects and full-stack opportunities."
              </p>
              <button className="w-full sm:w-auto px-8 py-4 bg-[var(--primary)] text-[var(--background)] font-bold rounded-xl hover:shadow-lg hover:shadow-[var(--primary)]/20 transition-all flex items-center justify-center gap-3">
                <SlCalender className="w-5 h-5" />
                Schedule a Consultation
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[var(--surface)] p-10 rounded-2xl border border-[var(--primary)]/10 shadow-xl animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-5" ref={form}>
              <div>
                <label className="block text-sm font-bold text-[var(--foreground)] opacity-60 mb-2 ml-1">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  name="user_name"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 bg-[var(--background)] border border-[var(--primary)]/10 rounded-xl text-[var(--foreground)] focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)] focus:outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[var(--foreground)] opacity-60 mb-2 ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  name="user_email"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 bg-[var(--background)] border border-[var(--primary)]/10 rounded-xl text-[var(--foreground)] focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)] focus:outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[var(--foreground)] opacity-60 mb-2 ml-1">Project Details</label>
                <textarea
                  placeholder="Tell me about your project or inquiry..."
                  value={formData.message}
                  name="user_message"
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="4"
                  className="w-full px-5 py-4 bg-[var(--background)] border border-[var(--primary)]/10 rounded-xl text-[var(--foreground)] focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)] focus:outline-none transition-all resize-none"
                  required
                ></textarea>
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
        </div>

        {/* Social Bar (Twitter/Github) */}
        <div className="mt-12 flex justify-center gap-8 opacity-60">
           <a href={gitHub} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors"><FaGithub size={28}/></a>
           <a href={twitter} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors"><FaSquareXTwitter size={28}/></a>
        </div>

        {/* WhatsApp Floating Button */}
        <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="group">
          <div className="fixed bottom-10 right-10 z-50 flex items-center gap-3">
             <span className="bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">Chat with me</span>
             <FaWhatsapp className="w-14 h-14 text-green-500 bg-white rounded-full p-2 shadow-2xl hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;