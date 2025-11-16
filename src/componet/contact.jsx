import { useState, useRef } from "react"
import emailjs from '@emailjs/browser';

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { LuMessageCircle } from "react-icons/lu";
import { MdClose } from "react-icons/md";

const Contact = ({ linkedin, twitter, gitHub, gmail }) => {

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
      className={`py-20 bg-gray-800`}
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
                href={gmail}
                className="flex items-center gap-3 text-gray-300 hover:text-yellow-400"
              >
                <IoMdMail className="w-5 h-5" />
                jonahemediong9@gmail.com
              </a>
              <a
                href={twitter}
                className="flex items-center gap-3 text-gray-300 hover:text-yellow-400"
              >
                <FaSquareXTwitter className="w-5 h-5" />
                @EmediongJ15081
              </a>
              <a
                href={gitHub}
                className="flex items-center gap-3 text-gray-300 hover:text-yellow-400"
              >
                <FaGithub className="w-5 h-5" />
                GitHub
              </a>
              <a
                href={linkedin}
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
            <form onSubmit={handleSubmit} className="space-y-4" ref={form}>
              <input
                type="text"
                placeholder="Enter Name"
                value={formData.name}
                name="user_name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-black/50 border border-yellow-500/20 rounded-lg text-white placeholder-gray-500 focus:border-yellow-400  focus:outline-none"
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
                className="w-full px-4 py-3 bg-black/50 border border-yellow-500/20 rounded-lg text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none"
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