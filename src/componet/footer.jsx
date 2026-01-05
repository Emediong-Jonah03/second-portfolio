// Footer Component
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaWhatsapp } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = ({ gitHub, linkedin, gmail, twitter, whatsapp }) => {
  return (
    <footer className="bg-[#E5F0FF] py-2 px-9 fixed bottom-3 rounded-3xl w-9/10 left-1/2 transform -translate-x-1/2 z-20 border-2 border-[#000E24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#000E24] mb-4 md:mb-0">
            © {new Date().getFullYear()} EmeDev. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a
              href={whatsapp}
              className="hover:opacity-75 text-[#003D99] transition-colors"
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>
            <a
              href={gitHub}
              className="hover:opacity-75 text-[#003D99] transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href={linkedin}
              className="hover:opacity-75 text-[#003D99] transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href={twitter}
              className="hover:opacity-75 text-[#003D99] transition-colors"
            >
              <FaSquareXTwitter className="w-6 h-6" />
            </a>
            <a
              href={gmail}
              className="hover:opacity-75 text-[#003D99] transition-colors"
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
