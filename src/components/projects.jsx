import { useState, useRef, useEffect, useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import cosmec from "/src/assets/cosmec.png";
import AIChef from "../assets/AI-web-app.png";
import resumeAnalyser from "../assets/resume-analyser.png";
import medic from "../assets/medical.png";
import mebaspr from "../assets/mebaspr.png";
import interviewer from "../assets/interviewer.png";

const projects = [
  {
    title: "MEBASPR",
    index: "01",
    image: mebaspr,
    alt: "mebaspr",
    tag: "Consultancy Platform",
    description:
      "A public relations consultancy and opportunity hub dedicated to advancing PR careers and delivering strategic communications services.",
    problem: null,
    process: null,
    result: null,
    tech: ["TypeScript", "Sanity", "React", "Tailwind CSS"],
    liveDemo: "https://mebaspr.vercel.app/",
    github: "",
  },
  {
    title: "Resume Architect",
    index: "02",
    image: resumeAnalyser,
    alt: "AI Resume Analyser",
    tag: "AI-Powered Tool",
    description:
      "An intelligent career tool that utilizes LLMs to bridge the gap between job seekers and recruitment algorithms.",
    problem: "Candidates struggling to bypass ATS filters and align with specific job descriptions.",
    process:
      "Engineered a custom Node.js backend to process PDF data and integrated OpenAI's API for semantic analysis.",
    result: "Provides actionable insights that statistically improve interview callback rates.",
    tech: ["Node.js", "OpenAI API", "React", "Tailwind CSS"],
    liveDemo: "https://resume-analyzer-job-matcher-alpha.vercel.app/",
    github: "",
  },
  {
    title: "Interview Ace",
    index: "03",
    image: interviewer,
    alt: "Interview Ace",
    tag: "AI-Powered Tool",
    description:
      "An intelligent chat that simulates real-time job interviews and provides feedback on responses.",
    problem: "Solve unpreparedness of candidates for job interviews, lack of confidence, and poor communication skills.",
    process:
      "Engineered a custom Node.js, TypeScript backend and integrated Grok's API for fast responses and interview feedback.",
    result: "Better Interview Preparation and Confidence Building.",
    tech: ["Node.js", "TypeScript", "Grok API", "React", "Tailwind CSS", "PostgreSQL"],
    liveDemo: "https://ai-interveiwer.vercel.app/",
    github: "",
  },
  {
    title: "Chef Intelligence",
    index: "04",
    image: AIChef,
    alt: "AI Chef web app",
    tag: "AI Web App",
    description:
      "A smart culinary assistant that eliminates decision fatigue by generating recipes from available ingredients.",
    problem: "User indecision and food waste due to a lack of recipe inspiration.",
    process:
      "Integrated real-time AI prompt engineering with a responsive React frontend for instant recipe generation.",
    result: "Streamlined meal planning, reducing user decision time by over 50%.",
    tech: ["React", "AI Integration", "Prompt Engineering", "Vite"],
    liveDemo: "https://my-ai-chep.netlify.app/",
    github: "https://github.com/Emediong-Jonah03/AI-Chef",
  },
  {
    title: "Cosmec Commerce",
    index: "04",
    image: cosmec,
    alt: "Cosmetic e-commerce website",
    tag: "E-Commerce",
    description:
      "A high-performance boutique shopping experience focused on conversion and smooth user flow.",
    problem: "Maintaining seamless state management across complex product filtering and cart operations.",
    process: "Developed a robust architecture using React Context API with persistent local storage sync.",
    result: "Achieved a fluid, zero-latency shopping experience for end-users.",
    tech: ["React", "Context API", "Tailwind CSS", "Data Persistence"],
    liveDemo: "https://cosmetic-commerce.netlify.app/",
    github: "https://github.com/Emediong-Jonah03/cosmec-ecommerce.git",
  },
  {
    title: "MediLink",
    index: "05",
    image: medic,
    alt: "medical website",
    tag: "Healthcare Platform",
    description:
      "A centralized digital ecosystem designed to streamline communication between healthcare providers.",
    problem: "Fragmented communication channels between different hospital departments.",
    process: "Architected a unified interface to centralize hospital data views and facility access.",
    result: "Improved information accessibility and UI responsiveness for medical staff.",
    tech: ["React", "Enterprise UI", "Tailwind CSS",],
    liveDemo: "https://medilink-project.netlify.app/",
    github: "",
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const getCardWidth = useCallback(() => {
    if (!trackRef.current) return 0;
    const card = trackRef.current.querySelector(".flex-shrink-0");
    return card ? card.offsetWidth + 24 : 0;
  }, []);

  const scrollToIndex = useCallback(
    (index) => {
      const clamped = Math.max(0, Math.min(index, projects.length - 1));
      setActiveIndex(clamped);
      trackRef.current?.scrollTo({ left: clamped * getCardWidth(), behavior: "smooth" });
    },
    [getCardWidth]
  );

  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = "grabbing";
  };
  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft = scrollLeft.current - (x - startX.current);
  };
  const onMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
    scrollToIndex(Math.round(trackRef.current.scrollLeft / getCardWidth()));
  };

  const onScroll = useCallback(() => {
    if (isDragging.current || !trackRef.current) return;
    setActiveIndex(
      Math.max(0, Math.min(Math.round(trackRef.current.scrollLeft / getCardWidth()), projects.length - 1))
    );
  }, [getCardWidth]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight") scrollToIndex(activeIndex + 1);
      if (e.key === "ArrowLeft") scrollToIndex(activeIndex - 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeIndex, scrollToIndex]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        .projects-track::-webkit-scrollbar { display: none; }
      `}</style>

      <section id="projects" style={{ background: "var(--background)", paddingTop: "5rem", paddingBottom: "4rem", overflow: "hidden", marginTop: "2rem", marginLeft: "1rem", marginRight: "1rem" }}>
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 mb-10 flex items-end justify-between" style={{ gap: "1rem" }}>
          <div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--primary)", marginBottom: "8px" }}>
              Selected Work
            </p>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--foreground)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
              Featured Engineering<br />Projects
            </h2>
          </div>

          <div className="flex gap-3 shrink-0">
            {[{ fn: () => scrollToIndex(activeIndex - 1), icon: <FaArrowLeft size={10} />, disabled: activeIndex === 0 },
            { fn: () => scrollToIndex(activeIndex + 1), icon: <FaArrowRight size={10} />, disabled: activeIndex === projects.length - 1 }
            ].map(({ fn, icon, disabled }, i) => (
              <button
                key={i}
                onClick={fn}
                disabled={disabled}
                style={{
                  width: 44, height: 44, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  border: `1px solid ${disabled ? "var(--primary)" : "var(--primary)"}`,
                  color: "var(--primary)",
                  cursor: disabled ? "not-allowed" : "pointer",
                  transition: "all 0.2s",
                }}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={trackRef}
          className="projects-track"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          style={{
            display: "flex", gap: "24px",
            paddingLeft: "clamp(1.5rem, 4vw, 4rem)",
            paddingRight: "clamp(1.5rem, 4vw, 4rem)",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            cursor: "grab",
            height: "520px",
            alignItems: "stretch",
          }}
        >
          {projects.map((project, i) => (
            <div key={i} style={{ scrollSnapAlign: "start", height: "100%" }}>
              <ProjectCard project={project} isActive={i === activeIndex} />
            </div>
          ))}
        </div>

        {/* Progress bar + dots + counter */}
        <div className="max-w-7xl mx-auto px-6 mt-8 flex items-center gap-6">
          <div className="flex gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                style={{
                  width: i === activeIndex ? 24 : 6, height: 6,
                  borderRadius: 999,
                  background: i === activeIndex ? "var(--primary)" : "rgba(255,255,255,0.15)",
                  border: "none", cursor: "pointer",
                  transition: "width 0.3s ease, background 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>

          <div style={{ flex: 1, height: "2px", background: "rgba(255,255,255,0.07)", borderRadius: 999, overflow: "hidden" }}>
            <div style={{
              height: "100%",
              width: `${((activeIndex + 1) / projects.length) * 100}%`,
              background: "var(--primary)",
              borderRadius: 999,
              transition: "width 0.4s ease",
            }} />
          </div>

          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", flexShrink: 0 }}>
            {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
        </div>
      </section>
    </>
  );
};

export default Projects;