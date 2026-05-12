const projects = [
    {
        title: "DLCF FUTIA",
        index: "01",
        image: "/src/assets/dlcf.png",
        alt: "DLCF FUTIA church fellowship app",
        tag: "Full-Stack Web App",
        description:
            "A full-featured church fellowship web app with an admin dashboard, public-facing forms, and 21 REST API endpoints — built for a real organization.",
        problem:
            "The fellowship needed a centralized digital presence to manage members, events, and communications securely while providing a seamless user experience for the congregation.",
        process:
            "Architected a TypeScript/Express/MongoDB backend with HttpOnly cookie JWT auth and XSS protection. Developed the frontend using React and Tailwind CSS, focusing on role-based access for the admin dashboard.",
        result:
            "Successfully launched a production application currently managing membership data and fellowship events with secure, role-based controls.",
        tech: ["TypeScript", "Express.js", "MongoDB", "React", "JWT Auth"],
        liveDemo: "",
        github: "",
    },
    {
        title: "Mebas PR",
        index: "02",
        image: "/src/assets/mebaspr.png",
        alt: "Mebas PR platform",
        tag: "Production-Grade Platform",
        description:
            "A dual-role PR platform featuring robust Role-Based Access Control (RBAC), secure session auth, and a strict four-state post lifecycle.",
        problem:
            "Fragmented PR workflows and inconsistent post approvals created bottlenecks in content distribution and security risks.",
        process:
            "Built a modular 28-file layered architecture using Node.js and TypeScript. Implemented Zod for strict schema validation and a custom RBAC middleware to handle user permissions.",
        result:
            "Delivered a secure, scalable full-stack application that ensures data integrity through every stage of the PR lifecycle.",
        tech: ["TypeScript", "Express.js", "MongoDB", "Zod", "React"],
        liveDemo: "https://mebaspr.netlify.app/",
        github: "",
    },
    {
        title: "Interview Ace",
        index: "03",
        image: "/src/assets/interviewer.png",
        alt: "Interview Ace platform",
        tag: "AI-Powered Platform",
        description:
            "An AI-powered interview practice platform with per-message token tracking, subscription tiers, and AI-generated scoring and feedback.",
        problem:
            "Candidates lacked a realistic, affordable environment to practice technical interviews with real-time, actionable feedback.",
        process:
            "Architected a FastAPI microservice backend to handle LLM processing. Implemented conversation history tracking and a custom threshold warning system for token usage management.",
        result:
            "Provided a subscription-aware practice engine that scores users based on semantic analysis and technical accuracy.",
        tech: ["FastAPI", "MongoDB", "Python", "OpenAI API", "React"],
        liveDemo: "https://ai-interveiwer.vercel.app/",
        github: "",
    },
    {
        title: "Resume Architect",
        index: "04",
        image: "/src/assets/resume-analyser.png",
        alt: "AI Resume Analyser",
        tag: "AI-Powered Tool",
        description:
            "An intelligent career tool that processes PDF resumes and uses LLMs for semantic analysis against specific job descriptions.",
        problem:
            "Job seekers struggle to understand how their resumes perform against Applicant Tracking Systems (ATS) and specific job requirements.",
        process:
            "Engineered a Node.js/PostgreSQL backend to store analysis history. Integrated secure PDF parsing and prompt engineering to extract structured feedback from OpenAI.",
        result:
            "Developed a tool that provides granular ATS scores and actionable tips to improve resume alignment for specific roles.",
        tech: ["Node.js", "PostgreSQL", "OpenAI API", "React", "Tailwind CSS"],
        liveDemo: "https://resume-analyzer-job-matcher-alpha.vercel.app/",
        github: "",
    },
    {
        title: "Chef Intelligence",
        index: "05",
        image: "/src/assets/AI-web-app.png",
        alt: "AI Chef web app",
        tag: "AI Web App",
        description:
            "A smart culinary assistant that eliminates decision fatigue by generating recipes from available ingredients.",
        problem:
            "Daily user indecision regarding meal preparation often leads to food waste and inefficient grocery spending.",
        process:
            "Utilized React for a high-performance frontend and integrated real-time AI prompt engineering to generate creative recipes based on user-inputted inventory.",
        result:
            "Simplified meal planning for users, significantly reducing the time spent on culinary decision-making.",
        tech: ["React", "AI Integration", "Prompt Engineering", "Vite"],
        liveDemo: "https://my-ai-chep.netlify.app/",
        github: "https://github.com/Emediong-Jonah03/AI-Chef",
    },
    {
        title: "Cosmec Commerce",
        index: "06",
        image: "/src/assets/cosmec.png",
        alt: "Cosmetic e-commerce website",
        tag: "E-Commerce",
        description:
            "A high-performance boutique shopping experience focused on conversion and smooth user flow.",
        problem:
            "Legacy e-commerce sites often suffer from high latency and clunky state management when filtering products.",
        process:
            "Developed a robust state management system using React Context API synced with local storage for cart persistence and zero-latency filtering.",
        result:
            "Achieved a fluid, conversion-optimized shopping experience with seamless navigation across product categories.",
        tech: ["React", "Context API", "Tailwind CSS", "Data Persistence"],
        liveDemo: "https://cosmetic-commerce.netlify.app/",
        github: "https://github.com/Emediong-Jonah03/cosmec-ecommerce.git",
    },
    {
        title: "MediLink",
        index: "07",
        image: "/src/assets/medical.png",
        alt: "medical website",
        tag: "Healthcare Platform",
        description:
            "A centralized digital ecosystem designed to streamline communication between healthcare providers.",
        problem:
            "Fragmented hospital departments often lead to data silos and delayed communication between medical staff.",
        process:
            "Architected an enterprise-level UI that centralizes facility data views and manages hospital resource accessibility.",
        result:
            "Enhanced internal coordination for medical teams by centralizing critical healthcare facility data.",
        tech: ["React", "Enterprise UI", "Tailwind CSS"],
        liveDemo: "https://medilink-project.netlify.app/",
        github: "",
    },
];

export default projects;