import { useState, useRef, useEffect, useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import cosmec from "/src/assets/cosmec.png";
import AIChef from "../assets/AI-web-app.png";
import resumeAnalyser from "../assets/resume-analyser.png";
import medic from "../assets/medical.png";
import mebaspr from "../assets/mebaspr.png";
import drycatch from "../assets/drycatch.png";
import dlcf from "../assets/dlcf-futia.png";

const projects = [
  {
    title: "DryCatch",
    index: "01",
    image: drycatch,
    alt: "DryCatch e-commerce platform",
    tag: "E-Commerce Platform",
    description:
      "A seafood vendor needed a full online store with payments, inventory, and order management — built to scale.",
    problem: "A seafood vendor needed a full online store with payments, inventory, and order management — built to scale.",
    process:
      "Built a complete e-commerce backend with FastAPI and PostgreSQL, featuring role-based access, Paystack payments, admin dashboard, and real-time order tracking.",
    result: "Full RBAC with USER / ADMIN / SUPER_ADMIN roles, Paystack payment integration with webhook handling, and an admin panel with order and inventory management.",
    tech: ["FastAPI", "React", "PostgreSQL", "Paystack", "RBAC"],
    liveDemo: "",
    github: "",
    outcomes: [
      "Full RBAC with USER / ADMIN / SUPER_ADMIN roles",
      "Paystack payment integration with webhook handling",
      "Admin panel with order and inventory management",
    ],
  },
  {
    title: "DLCF-IKOTABASI",
    index: "02",
    image: dlcf,
    alt: "dlcf website",
    tag: "Church Website",
    description:
      "A congregation needed a central hub for announcements, events, and contact — accessible to non-technical administrators.",
    problem: "No online presence — events and announcements were managed informally with no searchable record.",
    process:
      "Built a content-managed church website with a clean React frontend and a Node/MongoDB backend, letting admins update content without touching code.",
    result: "Delivered a fast, mobile-first site with dynamic content management and SEO-optimised pages.",
    tech: ["TypeScript", "React", "Tailwind CSS", "MongoDB", "Node.js"],
    liveDemo: "https://dlcf-futia-hub.vercel.app",
    github: "",
    outcomes: [
      "Mobile-first responsive design",
      "Admin-editable content sections",
      "Live on Vercel with custom domain",
    ],
  },
  {
    title: "MEBASPR",
    index: "03",
    image: mebaspr,
    alt: "mebaspr consultancy platform",
    tag: "Consultancy Platform",
    description:
      "A PR consultancy needed a professional web presence to attract clients and post job opportunities.",
    problem: "The firm had no website — losing credibility and leads to competitors with an online presence.",
    process:
      "Built a Sanity-powered React site with a blog, opportunity listings, and a contact pipeline — content fully managed by the client.",
    result: "A polished, brand-consistent platform the client updates independently without developer involvement.",
    tech: ["TypeScript", "Express", "React", "Tailwind CSS", 'PostgreSQL',],
    liveDemo: "https://mebaspr.vercel.app",
    github: "",
    outcomes: [
      "CMS-driven content, no developer needed for updates",
      "Service pages with integrated contact flow",
      "Live on Vercel, fully client-managed",
    ],
  },
  {
    title: "Resume Architect",
    index: "04",
    image: resumeAnalyser,
    alt: "AI Resume Analyser",
    tag: "AI-Powered Tool",
    description:
      "Job seekers were getting filtered out by ATS systems before a human ever read their CV.",
    problem: "Candidates struggling to bypass ATS filters and align CVs with specific job descriptions.",
    process:
      "Built a Node.js backend that processes PDF resumes and runs them through OpenAI's API for semantic gap analysis against a target job description.",
    result: "Users receive specific, actionable rewrites — not generic tips — that improve callback rates.",
    tech: ["Node.js", "OpenAI API", "React", "Tailwind CSS"],
    liveDemo: "https://resume-analyzer-job-matcher-alpha.vercel.app/",
    github: "",
    outcomes: [
      "PDF parsing with semantic job-match scoring",
      "OpenAI-powered rewrite suggestions",
      "Improved interview callback rates for users",
    ],
  },
  {
    title: "Chef Intelligence",
    index: "05",
    image: AIChef,
    alt: "AI Chef web app",
    tag: "AI Web App",
    description:
      "Users wasted food and time deciding what to cook with the ingredients they already had.",
    problem: "User indecision and food waste from lack of recipe inspiration at the ingredient level.",
    process:
      "Integrated real-time AI prompt engineering with a React frontend — users input what's in their fridge and get a full recipe in seconds.",
    result: "Practical AI utility that cuts meal-planning time and reduces household food waste.",
    tech: ["React", "AI Integration", "Prompt Engineering", "Vite"],
    liveDemo: "https://my-ai-chep.netlify.app/",
    github: "https://github.com/Emediong-Jonah03/AI-Chef",
    outcomes: [
      "Ingredient-to-recipe generation in under 5 seconds",
      "Zero-friction mobile-first UI",
      "Reduces household food waste",
    ],
  },
  {
    title: "MediLink",
    index: "06",
    image: medic,
    alt: "medical platform",
    tag: "Healthcare Platform",
    description:
      "Hospital departments were managing patient data and facility access through disconnected, fragmented channels.",
    problem: "Fragmented communication between hospital departments slowed down care and caused information gaps.",
    process:
      "Architected a unified React dashboard centralising data views, department access, and staff-facing workflows in one interface.",
    result: "Reduced information silos and improved UI responsiveness for medical staff.",
    tech: ["React", "Enterprise UI", "Tailwind CSS"],
    liveDemo: "https://medilink-project.netlify.app/",
    github: "",
    outcomes: [
      "Centralised cross-department data views",
      "Responsive interface for medical staff",
      "Reduced information retrieval time",
    ],
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
        <div className="max-w-7xl mx-auto px-6 mb-10 flex items-end justify-between" style={{ gap: "1rem" }}>
          <div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--primary)", marginBottom: "8px" }}>
              Case Studies
            </p>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--foreground)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
              Work I've Shipped
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
