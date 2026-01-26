import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaWhatsapp } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FiBarChart2 } from "react-icons/fi";

const Footer = ({ gitHub, linkedin, gmail, twitter, whatsapp }) => {
  return (
    <footer className="bg-[var(--accent)] text-[var(--foreground)] py-12 border-t border-[var(--primary)]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-2xl font-bold text-[var(--primary)]">EmeDev</h2>
            <p className="mt-2 opacity-60">Building digital excellence with passion</p>
          </div>
          <div className="flex gap-6 fixed bottom-3 text-white bg-[var(--primary)] px-5 py-1.5 rounded-xl">
            <a
              href={whatsapp}
              className="opacity-60 text-white hover:text-[var(--accent)] hover:opacity-100 transition-all"
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>
            <a
              href={gitHub}
              className="opacity-60 text-white hover:text-[var(--accent)] hover:opacity-100 transition-all"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href={linkedin}
              target="_blank" rel="noopener noreferrer"
              className="opacity-60 text-white hover:text-[var(--accent)] hover:opacity-100 transition-all"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href={twitter}
              target="_blank" rel="noopener noreferrer"
              className="opacity-60 text-white hover:text-[var(--accent)] hover:opacity-100 transition-all"
            >
              <FaSquareXTwitter className="w-6 h-6" />
            </a>
            <a
              href={gmail}
              className="opacity-60 text-white hover:text-[var(--accent)] hover:opacity-100 transition-all"
            >
              <IoMdMail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[var(--primary)]/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="opacity-40 text-sm">© {new Date().getFullYear()} Emediong Jonah. All rights reserved.</p>
          <a
            href="/dashboard"
            className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 text-[var(--primary)] transition-all"
          >
            <FiBarChart2 className="w-4 h-4" />
            <span>Analytics Dashboard</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
