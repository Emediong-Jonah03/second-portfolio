import { useState, useRef } from "react"
import emailjs from '@emailjs/browser';


import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaWhatsapp } from "react-icons/fa6";
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
   setStatus("Sending...");
    e.preventDefault();
    
    setFormData({ name: "", email: "", message: "" });

    emailjs
      .sendForm('service_b908und', 'template_j2x0eod', form.current, {
        publicKey: 'dib_XBkJ32JntiIp6',
      })
      .then(
        () => {
         setStatus("Sent!")
         form.current.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-[var(--background)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[var(--foreground)] mb-12">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-[var(--accent)] p-8 rounded-xl border border-[var(--primary)]/10 shadow-lg">
            <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-6">
              Let's Work Together
            </h3>
            <div className="space-y-6 mb-8">
              <a
                href={gmail}
                className="flex items-center gap-4 text-[var(--foreground)] opacity-80 hover:text-[var(--primary)] transition-colors group"
              >
                <div className="p-3 bg-[var(--background)] rounded-full group-hover:bg-[var(--primary)]/10">
                  <IoMdMail className="w-6 h-6 text-[var(--primary)]" />
                </div>
                <span>jonahemediong9@gmail.com</span>
              </a>
              <a
                href={twitter}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 text-[var(--foreground)] opacity-80 hover:text-[var(--primary)] transition-colors group"
              >
                <div className="p-3 bg-[var(--background)] rounded-full group-hover:bg-[var(--primary)]/10">
                  <FaSquareXTwitter className="w-6 h-6 text-[var(--primary)]" />
                </div>
                <span>@EmediongJ15081</span>
              </a>
              <a
                href={gitHub}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 text-[var(--foreground)] opacity-80 hover:text-[var(--primary)] transition-colors group"
              >
                <div className="p-3 bg-[var(--background)] rounded-full group-hover:bg-[var(--primary)]/10">
                  <FaGithub className="w-6 h-6 text-[var(--primary)]" />
                </div>
                <span>GitHub</span>
              </a>
              <a
                href={linkedin}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 text-[var(--foreground)] opacity-80 hover:text-[var(--primary)] transition-colors group"
              >
                <div className="p-3 bg-[var(--background)] rounded-full group-hover:bg-[var(--primary)]/10">
                  <FaLinkedin className="w-6 h-6 text-[var(--primary)]" />
                </div>
                <span>LinkedIn</span>
              </a>
            </div>
            <button className="px-6 py-3 bg-[var(--primary)] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 shadow-md">
              <SlCalender className="w-5 h-5" />
              Schedule a Call
            </button>
          </div>
          <div className="bg-[var(--accent)] p-8 rounded-xl border border-[var(--primary)]/10 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4" ref={form}>
              <input
                type="text"
                placeholder="Enter Name"
                value={formData.name}
                name="user_name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--primary)]/10 rounded-lg text-[var(--foreground)] placeholder-[var(--foreground)]/40 focus:border-[var(--primary)] focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                name="user_email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--primary)]/10 rounded-lg text-[var(--foreground)] placeholder-[var(--foreground)]/40 focus:border-[var(--primary)] focus:outline-none"
                required
              />
              <textarea
                placeholder="Type your message here"
                value={formData.message}
                name="user_message"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows="5"
                className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--primary)]/10 rounded-lg text-[var(--foreground)] placeholder-[var(--foreground)]/40 focus:border-[var(--primary)] focus:outline-none resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[var(--primary)] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-md"
              >
                {status}
              </button>
            </form>
          </div>
        </div>
        <a href={whatsapp} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="fixed bottom-20 right-7 shadow-md w-12 h-12 text-green-500 cursor-pointer z-50" />
        </a>
      </div>
    </section>
  );
};

export default Contact
