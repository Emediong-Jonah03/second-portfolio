import { useState } from "react"

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { LuMessageCircle } from "react-icons/lu";
import { MdClose } from "react-icons/md";

const Contact = ({ darkMode }) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-900"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Let's Work Together
            </h3>
            <div className="space-y-4 mb-8">
              <a
                href="mailto:jonahemediong9@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-yellow-400"
              >
                <IoMdMail className="w-5 h-5" />
                jonahemediong9@gmail.com
              </a>
              <a
                href="https://twitter.com/EmediongJ15081"
                className="flex items-center gap-3 text-gray-300 hover:text-yellow-400"
              >
                <FaSquareXTwitter className="w-5 h-5" />
                @EmediongJ15081
              </a>
              <a
                href="https://github.com"
                className="flex items-center gap-3 text-gray-300 hover:text-yellow-400"
              >
                <FaGithub className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                className="flex items-center gap-3 text-gray-300 hover:text-yellow-400"
              >
                <FaLinkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
            <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors">
              <SlCalender className="inline-block w-5 h-5 mr-2" />
              Schedule a Call
            </button>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-black/50 border border-yellow-500/20 rounded-lg text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-black/50 border border-yellow-500/20 rounded-lg text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none"
                required
              />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows="5"
                className="w-full px-4 py-3 bg-black/50 border border-yellow-500/20 rounded-lg text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default Contact