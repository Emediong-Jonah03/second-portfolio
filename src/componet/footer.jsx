// Footer Component
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = ({ darkMode }) => {
  return (
    <footer className="bg-black border-t border-yellow-500/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-yellow-400 mb-4 md:mb-0">
            © 2025 EmeTech. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/EmediongJ15081"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <FaSquareXTwitter className="w-6 h-6" />
            </a>
            <a
              href="mailto:jonahemediong9@gmail.com"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <IoMdMail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
