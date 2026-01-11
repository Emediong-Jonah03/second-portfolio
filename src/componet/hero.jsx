import { FaFileDownload } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { PiHandWavingBold } from "react-icons/pi";
import resume from "../assets/resume.pdf";

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[var(--background)] relative overflow-hidden pt-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-[var(--foreground)] mb-4">
          Hi, I'm <span className="text-[var(--primary)]">Emediong Jonah</span>
          <div className="mt-4">
            <PiHandWavingBold className="w-8 animate-wiggle r h-8 inline text-[var(--primary)]" />
          </div>
        </h1>
        <div className="text-xl md:text-2xl text-[var(--foreground)] mb-8 h-8 opacity-90">
          Full-Stack Developer | Python & MongoDB Specialist
        </div>
        <p className="py-4 px-5 leading-normal rounded-4xl mb-10 max-w-2xl mx-auto bg-[var(--accent)] text-[var(--foreground)] shadow-[var(--primary)]/10 shadow-lg">
          Building scalable full-stack applications with{" "}
          <strong>Python backend</strong>, <strong>MongoDB databases</strong>,{" "}
          <strong>React frontend</strong>, and{" "}
          <strong>WordPress solutions</strong>. End-to-end development from
          concept to deployment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 bg-[var(--primary)] text-white font-semibold rounded-lg hover:opacity-90 transform animate-pulse hover:scale-105 transition-all"
          >
            Hire Me
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 border-2 border-[var(--primary)] text-[var(--primary)] font-semibold rounded-lg hover:bg-[var(--primary)] hover:text-white transform hover:scale-105 transition-all"
          >
            View My Work
          </button>
          <button className="px-8 py-3 bg-[var(--primary)] text-white font-semibold rounded-lg hover:opacity-90 transform hover:scale-105 transition-all flex items-center gap-2">
            <FaFileDownload className="w-5 h-5 animate-bounce" />
            <a href={resume}>Download Resume</a>
          </button>
        </div>
        <div className="mt-20 animate-bounce">
          <FaChevronDown className="w-8 h-8 text-[var(--primary)] mx-auto" />
        </div>
      </div>
    </section>
  );
};

// Typing Effect Component
/*function TypingEffect ({ texts, speed = 100, pause = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, pause]);

  return <span className="text-yellow-400">{displayText}<span className="animate-pulse">|</span></span>;
};
*/
export default Hero;
