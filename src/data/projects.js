import drycatch from "../assets/drycatch.webp";
import dlcf from "../assets/dlcf-futia.webp";
import mebaspr from "../assets/mebaspr.webp";
import resumeAnalyser from "../assets/resume-analyser.webp";
import chef from "../assets/AI-web-app.webp";
import medilink from "../assets/medical.webp";

// Project links are intentionally private until a destination is explicitly added here.
const projects = [
  {
    id: "drycatch",
    name: "DryCatch",
    type: "Commerce platform",
    image: drycatch,
    alt: "DryCatch seafood storefront interface",
    description: "An online seafood store bringing product discovery, payments, inventory and order management into one experience.",
    role: "Full-stack project build",
    technologies: ["FastAPI", "React", "PostgreSQL", "Redis", "Paystack"],
    liveUrl: "",
    githubUrl: "",
    caseStudy: {
      problem: "A seafood vendor needed an online store for product discovery, payments, inventory, and order management.",
      architecture: "React storefront and admin experience connected to a FastAPI API, PostgreSQL, and Redis. Paystack handles payment processing; Cloudinary supports media handling, with background jobs and external integrations around the core flow.",
      decisions: "Payment events are handled through webhooks with idempotency. Caching and background jobs support work that should not be coupled to every request.",
      security: "Authentication, secure sessions, role-based access control, and rate limiting are part of the system.",
      dataFlow: "A customer browses the storefront, the API reads product data, and checkout moves through Paystack. Verified webhook events update payment/order state safely; administrators use protected workflows for orders and inventory.",
      challenges: "",
      outcome: "A connected commerce experience covering storefront, payment processing, and administration. No measured business or performance outcomes are published."
    }
  },
  {
    id: "dlcf",
    name: "DLCF-IKOTABASI",
    type: "Community website",
    image: dlcf,
    alt: "DLCF-IKOTABASI website homepage",
    description: "A central online home for a campus fellowship, with information about its community, events and activities.",
    role: "Full-stack project build",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    liveUrl: "",
    githubUrl: "",
    caseStudy: {
      problem: "A campus fellowship needed a central online place for community information, events, and activities.",
      architecture: "A React and TypeScript frontend connects to a Node.js and MongoDB backend. The project description includes content that administrators can update.",
      decisions: "The site uses a mobile-first presentation and keeps key community information easy to find.",
      security: "",
      dataFlow: "",
      challenges: "",
      outcome: "A responsive website for fellowship information and activities. No measured outcomes are published."
    }
  },
  {
    id: "mebaspr",
    name: "MEBASPR",
    type: "Consultancy platform",
    image: mebaspr,
    alt: "MEBASPR consultancy website",
    description: "A digital presence for a PR consultancy, bringing its services, work and opportunity listings together.",
    role: "Full-stack project build",
    technologies: ["React", "TypeScript", "Express", "PostgreSQL"],
    liveUrl: "",
    githubUrl: "",
    caseStudy: {
      problem: "A PR consultancy needed a digital presence for its services, work, and opportunity listings.",
      architecture: "A React and TypeScript frontend with an Express backend and PostgreSQL data layer.",
      decisions: "The experience brings service information, editorial content, opportunity listings, and contact into one platform.",
      security: "",
      dataFlow: "",
      challenges: "",
      outcome: "A consultancy platform covering services, content, opportunities, and contact. No measured outcomes are published."
    }
  },
  {
    id: "resume-architect",
    name: "Resume Architect",
    type: "AI-enabled career tool",
    image: resumeAnalyser,
    alt: "Resume Architect resume analysis interface",
    description: "A resume analysis tool that compares a candidate's CV with a target job description and suggests areas to improve.",
    role: "Full-stack project build",
    technologies: ["Node.js", "OpenAI API", "React"],
    liveUrl: "",
    githubUrl: "",
    caseStudy: {
      problem: "Job seekers need a way to review how a resume aligns with a target job description.",
      architecture: "A React interface connects to a Node.js service and OpenAI API for an AI-assisted resume review flow.",
      decisions: "The analysis is framed around a specific target role rather than treating a resume as a standalone document.",
      security: "",
      dataFlow: "Resume content and a target job description enter the review flow, which returns AI-assisted feedback. Detailed processing and retention notes are not published.",
      challenges: "",
      outcome: "An AI-assisted resume analysis workflow. No measured job-search outcomes are published."
    }
  },
  {
    id: "chef-intelligence",
    name: "Chef Intelligence",
    type: "AI-powered web app",
    image: chef,
    alt: "Chef Intelligence ingredient-based recipe interface",
    description: "A lightweight cooking assistant that turns ingredients on hand into a recipe starting point.",
    role: "Full-stack project build",
    technologies: ["React", "AI integration", "Vite"],
    liveUrl: "",
    githubUrl: "",
    caseStudy: {
      problem: "People want a practical starting point for cooking with ingredients they already have.",
      architecture: "A React and Vite web app with an AI-powered recipe-generation flow.",
      decisions: "The product starts from available ingredients so the AI capability is tied to a specific cooking task.",
      security: "",
      dataFlow: "",
      challenges: "",
      outcome: "An ingredient-led recipe-generation experience. No measured outcomes are published."
    }
  },
  {
    id: "medilink",
    name: "MediLink",
    type: "Healthcare concept",
    image: medilink,
    alt: "MediLink healthcare platform concept pages",
    description: "A healthcare platform concept focused on connecting information and workflows across hospital departments.",
    role: "Frontend project build",
    technologies: ["React", "Responsive UI", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "",
    caseStudy: {
      problem: "The concept explores how hospital departments could access related information and workflows in one place.",
      architecture: "A React and Tailwind CSS interface concept focused on responsive department-facing views.",
      decisions: "The work centers on bringing related information into a consistent interface; backend and data architecture details are not published.",
      security: "",
      dataFlow: "",
      challenges: "",
      outcome: "A healthcare platform interface concept. No hospital deployment or operational outcomes are claimed."
    }
  }
];

export default projects;