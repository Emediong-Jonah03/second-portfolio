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
      className={`py-20 bg-[#E5F0F]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text- mb-12">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text[#001433] mb-6">
              Let's Work Together
            </h3>
            <div className="space-y-4 mb-8">
              <a
                href={gmail}
                className="flex items-center gap-3 text-[#033683] hover:text-[#0066FF]"
              >
                <IoMdMail className="w-5 h-5" />
                jonahemediong9@gmail.com
              </a>
              <a
                href={twitter}
                className="flex items-center gap-3 text-[#033683] hover:text-[#0066FF]"
              >
                <FaSquareXTwitter className="w-5 h-5" />
                @EmediongJ15081
              </a>
              <a
                href={gitHub}
                className="flex items-center gap-3 text-[#033683] hover:text-[#0066FF]"
              >
                <FaGithub className="w-5 h-5" />
                GitHub
              </a>
              <a
                href={linkedin}
                className="flex items-center gap-3 text-[#033683] hover:text-[#0066FF]"
              >
                <FaLinkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a href={whatsapp} className="flex items-center gap-3 text-[#033683] hover:text-[#0066FF]">
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
            <button className="px-6 py-3 bg-[#0066FF] text-white font-semibold rounded-lg hover:text-black transition-colors">
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
                className="w-full px-4 py-3 bg-[#E5F0FF] border border-yellow-500/20 rounded-lg text-black placeholder-[#0066FF] focus:border-[#0066FF]  focus:outline-none"
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
                className="w-full px-4 py-3 bg-[#E5F0FF] border border-yellow-500/20 rounded-lg text-black placeholder-[#0066FF] focus:border-[#0066FF] focus:outline-none"
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
                className="w-full px-4 py-3 bg-[#E5F0FF] border border-yellow-500/20 rounded-lg text-black placeholder-[#0066FF] focus:border-[#0066FF] focus:outline-none resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#0066FF] text-white font-semibold rounded-lg hover:text-black transition-colors"
              >
                Send Message
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