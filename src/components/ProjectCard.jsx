import { useState } from "react"
import { FaGithub, FaExternalLinkAlt, FaExpandAlt } from "react-icons/fa"
import ProjectModal from "./ProjectModal"

const ProjectCard = ({ project, isActive }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getTagStyles = (tag) => {
        const t = tag.toLowerCase();
        if (t.includes("ai") || t.includes("intelligence")) return { bg: "var(--tag-purple)", text: "var(--tag-purple-text)" };
        if (t.includes("commerce") || t.includes("platform")) return { bg: "var(--tag-blue)", text: "var(--tag-blue-text)" };
        if (t.includes("healthcare") || t.includes("medical")) return { bg: "var(--tag-green)", text: "var(--tag-green-text)" };
        return { bg: "var(--tag-orange)", text: "var(--tag-orange-text)" };
    };

    const tagStyles = getTagStyles(project.tag);

    return (
        <>
            <div
                className="relative shrink-0 w-[85vw] max-w-[900px] h-full rounded-2xl overflow-hidden flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]"
                style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    transform: isActive ? "scale(1)" : "scale(0.97)",
                    transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease",
                }}
            >
                {/* Image panel */}
                <div className="relative w-full h-1/2 overflow-hidden group">
                    <img
                        src={project.image}
                        alt={project.alt}
                        className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                        style={{
                            filter: isActive ? "brightness(0.75) saturate(0.9)" : "brightness(0.4) saturate(0.5)",
                            transition: "filter 0.5s ease, transform 0.7s ease-out",
                        }}
                    />
                    {/* Shine sweep effect */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full -skew-x-25 group-hover:animate-shine" />
                    </div>

                    <div
                        className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                    />

                    {/* Index + tag */}
                    <div className="absolute top-5 left-6 flex items-center gap-3">
                        <span
                            style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: "14px",
                                color: "var(--primary)",
                                fontWeight: "bold",
                                letterSpacing: "0.15em",
                            }}
                        >
                            {project.index}
                        </span>
                        <span
                            style={{
                                fontSize: "10px",
                                fontFamily: "'JetBrains Mono', monospace",
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: tagStyles.text,
                                background: tagStyles.bg,
                                border: `1px solid ${tagStyles.text}15`,
                                padding: "4px 12px",
                                borderRadius: "999px",
                                fontWeight: "bold"
                            }}
                        >
                            {project.tag}
                        </span>
                    </div>

                    <div className="absolute bottom-4 left-6 right-6 transition-transform duration-500 group-hover:-translate-y-2">
                        <h3
                            style={{
                                fontFamily: "'Syne', sans-serif",
                                fontWeight: 800,
                                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                                color: "var(--foreground)",
                                lineHeight: 1.1,
                                letterSpacing: "-0.02em",
                                textShadow: "0 2px 10px rgba(0,0,0,0.3)"
                            }}
                        >
                            {project.title}
                        </h3>
                    </div>
                </div>

                <div className="flex flex-col grow p-8 gap-6">
                    <p
                        className="text-base leading-relaxed opacity-70 line-clamp-3"
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            color: "var(--foreground)"
                        }}
                    >
                        {project.description}
                    </p>

                    {/* Tech + links */}
                    <div className="flex items-end justify-between mt-auto flex-wrap gap-4">
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    style={{
                                        fontFamily: "'JetBrains Mono', monospace",
                                        fontSize: "9px",
                                        letterSpacing: "0.12em",
                                        textTransform: "uppercase",
                                        color: "var(--primary)",
                                        background: tagStyles.bg,
                                        border: `1px solid ${tagStyles.text}20`,
                                        padding: "4px 10px",
                                        borderRadius: "4px",
                                        fontWeight: "600"
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4 mb-2 items-center">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="flex items-center gap-2 group/btn shadow-[0_4px_15px_var(--primary-glow)] hover:shadow-[0_8px_25px_var(--primary-glow)]"
                                style={{
                                    fontSize: "0.75rem",
                                    fontWeight: 700,
                                    fontFamily: "'DM Sans', sans-serif",
                                    color: "#FFFFFF",
                                    background: "var(--primary)",
                                    padding: "12px 24px",
                                    borderRadius: "12px",
                                    border: "none",
                                    cursor: "pointer",
                                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                                }}
                            >
                                <FaExpandAlt size={11} className="transition-transform group-hover/btn:scale-110" />
                                Case Study
                            </button>

                            <div className="flex gap-4 h-10 items-center pl-4 border-l border-(--border)">
                                {project.liveDemo && (
                                    <a
                                        href={project.liveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-(--primary) hover:scale-110 transition-transform opacity-80 hover:opacity-100"
                                        title="Live Demo"
                                    >
                                        <FaExternalLinkAlt size={16} />
                                    </a>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-(--foreground) opacity-40 hover:opacity-100 hover:scale-110 transition-all font-bold"
                                        title="View Source"
                                    >
                                        <FaGithub size={18} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <ProjectModal
                    project={project}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </>
    );
}; export default ProjectCard