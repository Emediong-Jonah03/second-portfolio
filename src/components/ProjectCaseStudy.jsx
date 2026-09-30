import { Link, useParams } from "react-router-dom";
import SEO from "./SEO.jsx";
import projects from "../data/projects.js";

const sectionLabels = [
  ["overview", "Overview"],
  ["problem", "Problem"],
  ["role", "My role"],
  ["architecture", "Architecture"],
  ["decisions", "Engineering decisions"],
  ["security", "Security"],
  ["dataFlow", "Data flow"],
  ["challenges", "Challenges"],
  ["outcome", "Outcome"]
];

const emptySectionCopy = {
  security: "Project-specific security details have not been published.",
  dataFlow: "A detailed data-flow walkthrough has not been published.",
  challenges: "A project-specific challenge narrative has not been published.",
  outcome: "No verified business or performance outcome is published."
};

function ProjectCaseStudy() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <main className="not-found">
        <SEO title="Project not found | Emediong Jonah" description="This project case study could not be found." />
        <span className="eyebrow">404 · NOT FOUND</span>
        <h1>This project is not here.</h1>
        <Link className="button" to="/#work">Back to selected work <span aria-hidden="true">→</span></Link>
      </main>
    );
  }

  const values = {
    overview: project.description,
    problem: project.caseStudy?.problem,
    role: project.role,
    architecture: project.caseStudy?.architecture,
    decisions: project.caseStudy?.decisions,
    security: project.caseStudy?.security,
    dataFlow: project.caseStudy?.dataFlow,
    challenges: project.caseStudy?.challenges,
    outcome: project.caseStudy?.outcome
  };

  return (
    <div className="case-study-page">
      <SEO
        title={`${project.name} | Case Study | Emediong Jonah`}
        description={`${project.description} Case study by Emediong Jonah, backend-focused full-stack engineer.`}
        image={project.image}
      />
      <header className="case-study-header">
        <Link className="wordmark" to="/" aria-label="Emediong Jonah, home">
          EMEDIONG JONAH <b>ENGINEER</b>
        </Link>
        <nav aria-label="Case study navigation">
          <Link to="/#work">Selected work</Link>
          <Link to="/#contact">Contact</Link>
        </nav>
      </header>

      <main className="case-study-main">
        <Link className="back-link" to="/#work">← All selected work</Link>
        <div className="case-study-heading">
          <div>
            <span className="eyebrow">{project.type} · Case study</span>
            <h1>{project.name}</h1>
          </div>
          <p>{project.description}</p>
        </div>

        <figure className="case-study-image">
          <img src={project.image} alt={project.alt} />
          <figcaption>{project.name} · Project interface</figcaption>
        </figure>

        <div className="case-study-meta">
          <div><span>MY ROLE</span><strong>{project.role}</strong></div>
          <div className="case-study-tech"><span>TECHNOLOGY</span><strong>{project.technologies.join(" · ")}</strong></div>
          <div className="case-study-links" aria-label="Optional project links">
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live website ↗</a>}
            {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
            {!project.liveUrl && !project.githubUrl && <span>Project access available on request</span>}
          </div>
        </div>

        <div className="case-study-grid">
          {sectionLabels.map(([key, label], index) => {
            const value = values[key] || emptySectionCopy[key] || "Project-specific details are being prepared.";
            return (
              <section className="case-study-block" key={key}>
                <span className="case-study-number">{String(index + 1).padStart(2, "0")} / {label.toUpperCase()}</span>
                <h2>{label}</h2>
                <p>{value}</p>
              </section>
            );
          })}
          <section className="case-study-block">
            <span className="case-study-number">10 / TECHNOLOGY</span>
            <h2>Technology</h2>
            <div className="project-tech">
              {project.technologies.map((technology) => <span className="tech-chip" key={technology}>{technology}</span>)}
            </div>
          </section>
        </div>

        <div className="case-study-end">
          <p>Want a deeper walkthrough or private project access?</p>
          <Link className="button" to="/#contact">Start a conversation <span aria-hidden="true">→</span></Link>
        </div>
      </main>
      <footer className="site-footer">
        <div className="footer-inner">
          <div><div className="footer-name">EMEDIONG JONAH</div><div className="footer-sub">Backend-focused full-stack engineer · EmeDev</div></div>
          <div className="footer-links"><Link to="/">Portfolio home</Link><Link to="/#contact">Contact</Link><a href="mailto:jonahemediong9@gmail.com">Email</a></div>
          <span className="footer-copy">© {new Date().getFullYear()} · Built with care</span>
        </div>
      </footer>
    </div>
  );
}

export default ProjectCaseStudy;