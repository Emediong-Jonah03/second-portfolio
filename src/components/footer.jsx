import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FiBarChart2, FiArrowUp } from "react-icons/fi";

const Footer = ({ gitHub, linkedin, gmail, twitter, whatsapp }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--surface)] text-[var(--foreground)] py-16 border-t border-[var(--primary)]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          
          {/* Brand Section */}
          <div className="max-w-xs">
            <h2 className="text-2xl font-black tracking-tight text-[var(--primary)]">
              EMEDIONG<span className="text-[var(--foreground)]">JONAH</span>
            </h2>
            <p className="mt-4 text-sm opacity-60 leading-relaxed">
              Software Developer specializing in Full-Stack Engineering and AI Integration. 
              Turning complex problems into seamless digital solutions.
            </p>
          </div>

          {/* Social Links - Removed the 'fixed' class */}
          <div className="flex flex-wrap gap-4">
            {[
              { icon: <FaWhatsapp />, href: whatsapp, label: "WhatsApp" },
              { icon: <FaGithub />, href: gitHub, label: "GitHub" },
              { icon: <FaLinkedin />, href: linkedin, label: "LinkedIn" },
              { icon: <FaSquareXTwitter />, href: twitter, label: "Twitter" },
              { icon: <IoMdMail />, href: `mailto:${gmail}`, label: "Email" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 bg-[var(--background)] border border-[var(--primary)]/10 rounded-xl text-[var(--foreground)] opacity-70 hover:opacity-100 hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all shadow-sm"
              >
                <span className="text-xl">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[var(--primary)]/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <p className="opacity-40 text-xs tracking-widest uppercase">
              © {new Date().getFullYear()} Emediong Jonah
            </p>
            <a
              href="/dashboard"
              className="flex items-center gap-2 text-xs font-bold opacity-40 hover:opacity-100 text-[var(--primary)] transition-all uppercase tracking-widest"
            >
              <FiBarChart2 className="w-4 h-4" />
              <span>Platform Analytics</span>
            </a>
          </div>

          {/* Back to top */}
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-bold opacity-40 hover:opacity-100 transition-all uppercase tracking-widest"
          >
            Back to Top
            <FiArrowUp className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;