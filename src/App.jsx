import { useRef, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import SEO from "./components/SEO.jsx";
import ProjectCaseStudy from "./components/ProjectCaseStudy.jsx";
import projects from "./data/projects.js";
import portrait from "./assets/Emediong.jpeg";
import resume from "./assets/resume.pdf";

const linkedinUrl = "https://www.linkedin.com/in/emediong-jonah-68a093329/";
const githubUrl = "https://github.com/Emediong-Jonah03";
const resumeUrl = resume;

const capabilities = [
  ["01", "Backend systems", "APIs, business logic, authentication, authorization and service boundaries designed around the product."],
  ["02", "Data & infrastructure", "Relational data modelling, PostgreSQL, Redis, caching, background jobs and dependable data workflows."],
  ["03", "Payments & integrations", "Payment gateways, webhook handling and external API integrations with careful transaction flows."],
  ["04", "Full-stack products", "React and TypeScript interfaces connected to backend systems, not built in isolation."],
  ["05", "Security & reliability", "RBAC, secure authentication, validation, sessions, rate limits and thoughtful failure handling."],
  ["06", "AI-enabled products", "Useful AI capabilities integrated into existing product workflows when they solve a real problem."]
];

const principles = [
  ["01", "Build for the actual problem.", "Start with the people and workflow a system needs to serve. The architecture should follow the problem, not fashion."],
  ["02", "Design for failure.", "Payments, integrations and jobs can fail in ordinary ways. Make retries, validation and clear system boundaries part of the plan."],
  ["03", "Treat security as architecture.", "Authorization, session handling and input validation belong in the design from the beginning."],
  ["04", "Keep systems understandable.", "A system is easier to maintain when its data flow and responsibilities are clear to the next person who reads it."],
  ["05", "Use AI where it creates real leverage.", "Integrate AI around a useful product task, with deliberate inputs and an experience that remains clear to the user."]
];

const stack = [
  ["Languages", ["JavaScript", "TypeScript", "Python", "SQL"]],
  ["Backend", ["Node.js", "Express", "FastAPI", "SQLAlchemy"]],
  ["Frontend", ["React", "TypeScript", "Tailwind CSS"]],
  ["Data", ["PostgreSQL", "Redis"]],
  ["Infrastructure & tools", ["Git", "GitHub", "Docker", "Cloudinary", "Render"]],
  ["Integrations", ["Paystack", "Google OAuth", "REST APIs"]]
];

const notes = [
  ["Payment webhooks & idempotency", "Payments", "A webhook is an asynchronous message, not a synchronous page response. A resilient handler verifies the event, records what has been processed, and makes repeat delivery safe to handle."],
  ["Authentication is a system boundary", "Security", "Authentication answers who is making a request; authorization answers what that identity may do. Keeping those checks explicit makes access decisions easier to reason about."],
  ["Where caching fits", "Data", "A cache is useful when it has a clear source of truth, invalidation rule and expiry strategy. Redis can reduce repeated work, but it should not quietly become the only place important state exists."],
  ["Background jobs and integrations", "Reliability", "Work that depends on a third party or takes time can be separated from the request path. Job state, retries and a useful failure trail are part of that design."],
  ["Practical AI integration", "Product", "An AI feature should improve a specific task. The surrounding product still needs useful context, input boundaries and a clear way to handle an uncertain response."]
];

function ProjectCard({ project, index }) {
  return (
    <article className="project-card" data-testid={`card-project-${project.id}`}>
      <div className="project-image">
        <img src={project.image} alt={project.alt} loading={index > 1 ? "lazy" : "eager"} />
      </div>
      <div className="project-meta">
        <h3>{project.name}</h3>
        <span className="project-kind">{project.type}</span>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-foot">
        <span className="project-role">Role · {project.role}</span>
        <div className="project-links">
          <Link className="case-toggle" to={`/work/${project.id}`} data-testid={`link-case-study-${project.id}`}>
            View case study <span aria-hidden="true">→</span>
          </Link>
          {project.liveUrl && <a className="case-toggle" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live website ↗</a>}
          {project.githubUrl && <a className="case-toggle" href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
        </div>
      </div>
      <div className="project-tech" aria-label={`${project.name} technologies`}>
        {project.technologies.map((technology) => <span className="tech-chip" key={technology}>{technology}</span>)}
      </div>
    </article>
  );
}

function ContactForm() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    building: "",
    help: "",
    budget: "",
    message: ""
  });
  const update = (field) => (event) => setFormData((current) => ({ ...current, [field]: event.target.value }));
  const combinedMessage = [
    `Company/project: ${formData.company || "Not provided"}`,
    `What they are building: ${formData.building}`,
    `Help needed: ${formData.help}`,
    `Budget context: ${formData.budget || "Not provided"}`,
    `Additional message: ${formData.message}`
  ].join("\n");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (sending) return;
    setSending(true);
    setStatus("");
    emailjs
      .sendForm("service_b908und", "template_j2x0eod", formRef.current, { publicKey: "dib_XBkJ32JntiIp6" })
      .then(() => {
        setStatus("Thanks — your message is on its way. I’ll be in touch.");
        setFormData({ name: "", email: "", company: "", building: "", help: "", budget: "", message: "" });
        formRef.current?.reset();
      })
      .catch(() => setStatus("Your message could not be sent just now. Please try again or email me directly."))
      .finally(() => setSending(false));
  };

  return (
    <form className="contact-form" ref={formRef} onSubmit={handleSubmit} data-testid="form-contact">
      <input type="hidden" name="user_message" value={combinedMessage} />
      <div className="field">
        <label htmlFor="contact-name">Your name</label>
        <input id="contact-name" name="user_name" autoComplete="name" required value={formData.name} onChange={update("name")} placeholder="Name" data-testid="input-contact-name" />
      </div>
      <div className="field">
        <label htmlFor="contact-email">Email address</label>
        <input id="contact-email" name="user_email" type="email" autoComplete="email" required value={formData.email} onChange={update("email")} placeholder="you@company.com" data-testid="input-contact-email" />
      </div>
      <div className="field full">
        <label htmlFor="contact-company">Company or project</label>
        <input id="contact-company" name="company_project" autoComplete="organization" value={formData.company} onChange={update("company")} placeholder="Name, if you have one" data-testid="input-contact-company" />
      </div>
      <div className="field full">
        <label htmlFor="contact-building">What are you building?</label>
        <textarea id="contact-building" name="what_are_you_building" required value={formData.building} onChange={update("building")} placeholder="A little context about the product, team, or problem." data-testid="input-contact-building" />
      </div>
      <div className="field full">
        <label htmlFor="contact-help">What kind of help do you need?</label>
        <textarea id="contact-help" name="what_help_do_you_need" required value={formData.help} onChange={update("help")} placeholder="For example: backend architecture, a payment integration, or a full-stack build." data-testid="input-contact-help" />
      </div>
      <div className="field full">
        <label htmlFor="contact-budget">Budget context <span>(optional)</span></label>
        <select id="contact-budget" name="user_budget" value={formData.budget} onChange={update("budget")} data-testid="input-contact-budget">
          <option value="">Prefer not to say / not decided</option>
          <option value="Under discussion">Under discussion</option>
          <option value="Defined budget">A budget is defined</option>
        </select>
      </div>
      <div className="field full">
        <label htmlFor="contact-message">Anything else I should know?</label>
        <textarea id="contact-message" required value={formData.message} onChange={update("message")} placeholder="Timeline, questions, or a good time to follow up." data-testid="input-contact-message" />
      </div>
      <p className="form-status" role="status" aria-live="polite" data-testid="status-contact">{status}</p>
      <button className="button" type="submit" disabled={sending} data-testid="button-submit-contact">
        {sending ? "Sending…" : "Send a message"} <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}

function PortfolioHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = [
    ["Work", "#work"],
    ["About", "#about"],
    ["Engineering", "#engineering"],
    ["Writing", "#writing"],
    ["Contact", "#contact"]
  ];

  return (
    <>
      <SEO
        title="Emediong Jonah | Backend-focused Full-Stack Engineer"
        description="Emediong Jonah is a backend-focused full-stack engineer building secure, reliable systems behind digital products."
        image={portrait}
      />
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="nav-wrap">
          <a className="wordmark" href="#top" aria-label="Emediong Jonah, home" onClick={() => setMenuOpen(false)}>
            EMEDIONG JONAH <b>ENGINEER</b>
          </a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} data-testid="button-menu-toggle">
            {menuOpen ? "×" : "☰"}
          </button>
          <nav className={`nav-links${menuOpen ? " open" : ""}`} aria-label="Main navigation">
            {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a className="nav-resume" href={resumeUrl} target="_blank" rel="noopener noreferrer">Resume ↗</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-inner">
            <div className="hero-copy reveal">
              <span className="availability">Open to backend / full-stack opportunities</span>
              <p className="eyebrow">Backend-focused full-stack engineer</p>
              <h1>I build the <span>systems</span> behind digital products.</h1>
              <p className="hero-lede">APIs, data, authentication, payments and integrations—built with the product in mind, and the details that keep it working behind the scenes.</p>
              <div className="hero-actions">
                <a className="button" href="#work">View selected work <span aria-hidden="true">↓</span></a>
                <a className="button secondary" href="#contact">Let’s work together <span aria-hidden="true">→</span></a>
              </div>
              <div className="hero-socials" aria-label="Professional links">
                <span>Elsewhere</span>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">Resume ↗</a>
              </div>
            </div>
            <div className="portrait-frame reveal">
              <img src={portrait} alt="Portrait of Emediong Jonah" fetchPriority="high" />
              <span className="portrait-caption">Emediong Jonah · Software engineer</span>
              <div className="system-panel" aria-label="High-level digital product systems diagram">
                <div className="system-top"><span>A product, behind the interface</span><span>Flow / 01</span></div>
                <div className="system-flow">
                  {["Client", "API", "Services", "Data", "Integrations"].map((node, index) => (
                    <span key={node} className={`system-node${index === 1 || index === 2 ? " active" : ""}`}>{node}</span>
                  ))}
                </div>
              </div>
              <span className="hero-index">01 / SYSTEMS THAT SERVE PEOPLE</span>
            </div>
          </div>
        </section>

        <section className="credibility" aria-label="Engineering focus">
          <div className="credibility-inner">
            {["Backend-focused engineering", "Production-oriented architecture", "APIs + databases + integrations", "Security + authentication", "Full-stack delivery", "Practical AI integration"].map((item) => <span key={item}>{item}</span>)}
          </div>
        </section>

        <section className="section capabilities" id="about">
          <div className="section-heading">
            <div><span className="eyebrow">What I build</span><h2>More than the interface.</h2></div>
            <p>I work across the product stack, with a particular interest in the backend systems that make a digital product useful, dependable and ready to grow.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map(([number, title, body]) => (
              <article className="capability" key={number}>
                <span className="cap-number">{number} / CAPABILITY</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="work-intro">
            <div className="section-heading">
              <div><span className="eyebrow">Selected work · 04 projects</span><h2>Proof in the work.</h2></div>
            </div>
            <p>Each project is a chance to solve a real product problem. The visuals show the work; the notes explain the thinking.</p>
          </div>
          <div className="work-list">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </section>

        <section className="section featured" id="drycatch">
          <div className="featured-intro">
            <div><span className="eyebrow">Featured case study · 01</span><h2>DryCatch<br /><em>from request to delivery.</em></h2></div>
            <p>A seafood commerce experience is more than a storefront. Product discovery, orders, payment state and administration all depend on backend systems behaving predictably together.</p>
          </div>
          <div className="drycatch-visual">
            <div className="drycatch-main-image">
              <img src={projects[0].image} alt="DryCatch seafood storefront and commerce experience" loading="lazy" />
              <span className="drycatch-image-caption">DryCatch · Storefront experience</span>
            </div>
            <div className="architecture">
              <h3>System map</h3>
              <p>A compact view of the product responsibilities and the services around them.</p>
              <div className="arch-stack">
                <div className="arch-row"><strong>Web client</strong><span>React storefront + admin</span></div>
                <div className="arch-row"><strong>Application API</strong><span>FastAPI · auth · RBAC</span></div>
                <div className="arch-row"><strong>Product data</strong><span>PostgreSQL · Redis/cache</span></div>
                <div className="arch-row"><strong>Async work</strong><span>Jobs · integrations · rate limits</span></div>
                <div className="arch-row"><strong>External services</strong><span>Paystack · Cloudinary/media</span></div>
              </div>
              <p className="architecture-foot">PAYMENT FLOW · VERIFIED WEBHOOKS · IDEMPOTENT PROCESSING · SECURE SESSIONS</p>
            </div>
          </div>
          <div className="drycatch-details">
            <article className="detail-cell"><h4>Access & trust</h4><p>Authentication, role-based access for users and administrators, and secure session handling shape who can reach each part of the product.</p></article>
            <article className="detail-cell"><h4>Transactions</h4><p>Paystack payments connect to webhook handling and idempotency so payment events can be processed deliberately, including repeat delivery.</p></article>
            <article className="detail-cell"><h4>Useful operations</h4><p>Redis caching, background jobs, rate limiting, external integrations, media handling and admin workflows support the wider commerce experience.</p></article>
          </div>
          <div className="private-note">PROJECT ACCESS AVAILABLE ON REQUEST · No public demo or source links</div>
        </section>

        <section className="section thinking" id="engineering">
          <div className="section-heading">
            <div><span className="eyebrow">Engineering judgment</span><h2>How I think about software.</h2></div>
            <p>Good engineering is not only what gets built. It is the care taken to make the system understandable and the decisions behind it visible.</p>
          </div>
          <div className="principles">
            {principles.map(([number, title, body]) => (
              <article className="principle" key={number}>
                <span className="principle-no">{number}</span><h3>{title}</h3><p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience" aria-labelledby="experience-title">
          <div className="section-heading">
            <div><span className="eyebrow">Experience</span><h2 id="experience-title">Learning by building.</h2></div>
            <p>Early in my engineering career, combining formal study with practical work and a steady focus on the fundamentals.</p>
          </div>
          <article className="experience-card">
            <time className="experience-date" dateTime="2024-09">SEP 2024 — PRESENT</time>
            <div>
              <h3>Front End Developer</h3>
              <p className="experience-org">Deeper Life High School — Akwa Ibom</p>
              <p className="experience-summary">Frontend development alongside my Software Engineering studies. Experience includes responsive website interfaces and features such as event calendars, sermon libraries, donation portals, and contact forms.</p>
              <p className="experience-outcome"><strong>Verified scope</strong> Responsive page work and website maintenance; no measured outcomes are published.</p>
              <div className="experience-tech">
                <span>TECHNOLOGIES</span>
                <strong>React · Tailwind CSS · HTML · CSS · JavaScript · Git</strong>
              </div>
            </div>
          </article>
          <div className="education">
            <div className="education-line">
              <div><h3>BSc, Software Engineering</h3><p>Federal University of Technology — Ikot Abasi</p></div>
              <time dateTime="2024-09">SEP 2024 — PRESENT</time>
            </div>
          </div>
        </section>

        <section className="section stack">
          <div className="section-heading">
            <div><span className="eyebrow">Tools & technologies</span><h2>A stack with purpose.</h2></div>
            <p>Grouped by the work they support—not a wall of logos. The right tool depends on the requirements in front of us.</p>
          </div>
          <div className="stack-grid">
            {stack.map(([category, items]) => (
              <div className="stack-row" key={category}><h3>{category}</h3><div className="stack-items">{items.map((item) => <span key={item}>{item}</span>)}</div></div>
            ))}
          </div>
        </section>

        <section className="section notes" id="writing">
          <div className="section-heading">
            <div><span className="eyebrow">Engineering notes</span><h2>Small ideas, carefully considered.</h2></div>
            <p>Expandable notes on the parts of product engineering I keep coming back to. Each one is a starting point for a good technical conversation.</p>
          </div>
          <div className="notes-list">
            {notes.map(([title, tag, body]) => (
              <details className="note-item" key={title}>
                <summary><span>{title}</span><span className="note-tag">{tag}</span></summary>
                <div className="note-content">{body}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="section services" aria-labelledby="help-title">
          <div className="section-heading">
            <div><span className="eyebrow">Ways I can help</span><h2 id="help-title">Bring me the hard part.</h2></div>
            <p>From a first product build to an integration that needs to work reliably, I’m interested in thoughtful, practical engineering collaboration.</p>
          </div>
          <div className="service-list">
            {[
              ["01", "New product builds", "A clear technical foundation for a focused product."],
              ["02", "Backend systems", "APIs, data models, access control and service logic."],
              ["03", "Product integrations", "Payments, external APIs, webhooks and async workflows."],
              ["04", "Internal tools", "Business workflows made easier to manage."],
              ["05", "AI-enabled products", "Useful AI capabilities built into product experiences."]
            ].map(([number, title, body]) => <article className="service" key={number}><span>{number} /</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-intro">
            <div className="contact-title">
              <span className="eyebrow">Start a conversation</span>
              <h2>Building something that needs a stronger technical foundation?</h2>
              <p>Tell me what you’re building and where you could use help. If you’d like private access to a project, just mention it here.</p>
              <div className="contact-detail">
                <div>EMAIL · <a href="mailto:jonahemediong9@gmail.com">jonahemediong9@gmail.com</a></div>
                <div>LINKEDIN · <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">Connect with me ↗</a></div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div><div className="footer-name">EMEDIONG JONAH</div><div className="footer-sub">Backend-focused full-stack engineer · EmeDev</div></div>
          <div className="footer-links">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">Resume ↗</a>
            <a href="mailto:jonahemediong9@gmail.com">Email</a>
          </div>
          <span className="footer-copy">© {new Date().getFullYear()} · Built with care</span>
        </div>
      </footer>
    </>
  );
}

function NotFound() {
  return (
    <main className="not-found">
      <span className="eyebrow">404 · NOT FOUND</span>
      <h1>This page is not here.</h1>
      <Link className="button" to="/">Back to the portfolio <span aria-hidden="true">→</span></Link>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioHome />} />
        <Route path="/work/:projectId" element={<ProjectCaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;