import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FiArrowUp } from "react-icons/fi";

const Footer = ({ linkedin, gmail }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--surface)] text-[var(--foreground)] py-12 border-t border-[var(--primary)]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

          <div className="max-w-xs">
            <h2 className="text-2xl font-black tracking-tight text-[var(--primary)]">
              EME<span className="text-[var(--foreground)]">DEV</span>
            </h2>
            <p className="mt-3 text-sm opacity-60 leading-relaxed">
              Backend-first full-stack development for early-stage founders. Projects from $300.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 bg-[var(--background)] border border-[var(--primary)]/10 rounded-xl text-[var(--foreground)] opacity-70 hover:opacity-100 hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all shadow-sm"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href={`mailto:${gmail}`}
              aria-label="Email"
              className="p-3 bg-[var(--background)] border border-[var(--primary)]/10 rounded-xl text-[var(--foreground)] opacity-70 hover:opacity-100 hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all shadow-sm"
            >
              <IoMdMail className="text-xl" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--primary)]/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="opacity-40 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} Emediong Jonah · EmeDev
          </p>

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
