import ReactDOM from "react-dom"
import { FaTimes, FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { useEffect } from "react"

const ProjectModal = ({ project, onClose }) => {
    const getTagStyles = (tag) => {
        const t = tag.toLowerCase();
        if (t.includes("ai") || t.includes("intelligence")) return { bg: "var(--tag-purple)", text: "var(--tag-purple-text)", ghost: "rgba(107, 33, 168, 0.1)" };
        if (t.includes("commerce") || t.includes("platform")) return { bg: "var(--tag-blue)", text: "var(--tag-blue-text)", ghost: "rgba(30, 64, 175, 0.1)" };
        if (t.includes("healthcare") || t.includes("medical")) return { bg: "var(--tag-green)", text: "var(--tag-green-text)", ghost: "rgba(22, 101, 52, 0.1)" };
        return { bg: "var(--tag-orange)", text: "var(--tag-orange-text)", ghost: "rgba(154, 52, 18, 0.1)" };
    };

    const tagStyles = getTagStyles(project.tag);

    // Prevent scrolling when modal is open
    useEffect(() => {
        document.body.style.overflow = "hidden"
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose()
        }
        window.addEventListener("keydown", handleEsc)
        return () => {
            document.body.style.overflow = "unset"
            window.removeEventListener("keydown", handleEsc)
        }
    }, [onClose])

    const content = (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

            {/* Modal Container */}
            <div
                className="relative bg-[var(--surface)] w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl animate-pop-in flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center bg-black/20 hover:bg-black/40 text-white rounded-full transition-all border border-white/10"
                >
                    <FaTimes />
                </button>

                {/* Hero / Image Section */}
                <div className="relative w-full h-48 md:h-64 shrink-0">
                    <img
                        src={project.image}
                        alt={project.alt}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-(--surface) via-transparent to-transparent" />

                    <div className="absolute bottom-6 left-8 right-8">
                        <div className="flex items-center gap-3 mb-2">
                            <span
                                style={{ color: tagStyles.text }}
                                className="font-bold tracking-widest text-sm uppercase font-mono"
                            >
                                Project {project.index}
                            </span>
                            <span
                                style={{ background: tagStyles.bg, color: tagStyles.text, borderColor: `${tagStyles.text}20` }}
                                className="px-3 py-1 text-[10px] font-bold rounded-full border font-mono uppercase"
                            >
                                {project.tag}
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-(--foreground) font-syne tracking-tight">
                            {project.title}
                        </h2>
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 overflow-y-auto p-8 md:px-12 md:pb-12">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Left Details */}
                        <div className="lg:col-span-2 space-y-8">
                            <section>
                                <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--primary)] mb-4 font-bold">
                                    Overview
                                </h3>
                                <p className="text-lg leading-relaxed text-[var(--foreground)] opacity-90 font-dm-sans">
                                    {project.description}
                                </p>
                            </section>

                            <div className="grid gap-6">
                                {[
                                    { label: "The Challenge", value: project.problem, color: "#ff6b6b", bg: "var(--tag-orange)" },
                                    { label: "The Solution", value: project.process, color: "#10b981", bg: "var(--tag-green)" },
                                    { label: "The Outcome", value: project.result, color: "var(--primary)", bg: "var(--tag-blue)" }
                                ].filter(i => i.value).map((item) => (
                                    <div key={item.label}
                                        style={{ background: item.bg, borderColor: `${item.color}15` }}
                                        className="p-8 rounded-3xl border shadow-xs"
                                    >
                                        <h4 style={{ color: item.color }} className="text-[10px] font-mono uppercase tracking-widest font-bold mb-4">
                                            {item.label}
                                        </h4>
                                        <p className="text-base leading-relaxed text-(--foreground) opacity-90 font-dm-sans">
                                            {item.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="space-y-8">
                            <section>
                                <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--primary)] mb-4 font-bold">
                                    Technologies
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="px-3 py-1.5 bg-(--accent) text-(--primary) text-[11px] font-mono rounded-lg border border-(--primary)/10 font-bold">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </section>

                            <section className="pt-4 space-y-3">
                                {project.liveDemo && (
                                    <a
                                        href={project.liveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-3 w-full py-4 bg-[var(--primary)] text-white rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all"
                                    >
                                        <FaExternalLinkAlt size={14} /> View Live Project
                                    </a>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-3 w-full py-4 bg-white/5 border border-(--foreground)/10 text-(--foreground) rounded-xl font-bold hover:bg-white/10 transition-all"
                                    >
                                        <FaGithub size={16} /> Source Code
                                    </a>
                                )}
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    return ReactDOM.createPortal(content, document.body)
}

export default ProjectModal
