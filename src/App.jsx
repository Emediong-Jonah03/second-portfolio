import { useState, useEffect } from "react";
import SEO from "./components/SEO.jsx"
import Services from "./components/services.jsx"
import useScrollAnimation from "./hooks/scrollAnimation.jsx";

import Navigation from "./components/navigation.jsx"
import Hero from "./components/hero.jsx";
import About from "./components/about.jsx"
import Skills from "./components/skills.jsx";
import Projects from "./components/projects.jsx";
import { Testimonials, GitHubProfile } from "./components/testimonial.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/footer.jsx";

const App = () => {
  useScrollAnimation()

  const myData = [
    {
      linkedin:
        "https://www.linkedin.com/in/emediong-jonah-68a093329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      GitHubProfile: "https://t.co/OBbI1f1oVK",
      Xprofile: "https://twitter.com/EmediongJ15081",
      gmail: "mailto: jonahemediong9@gmail.com",
      whatsapp: "https://wa.me/message/JIBWQ6FWKT6CI1",
    },
  ];

  const gitHub = myData.map((data) => data.GitHubProfile);
  const linkedin = myData.map((data) => data.linkedin);
  const twitter = myData.map((data) => data.Xprofile);
  const gmail = myData.map((data) => data.gmail);
  const whatsapp = myData.map((data) => data.whatsapp);

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 min-h-screen">
      <SEO
        title="Emediong Jonah - Full Stack  Developer Portfolio"
        description="Full Stack Developer specializing in React.js, JavaScript, Tailwind CSS, Python ,  WordPress. View my e-commerce projects, AI web apps, and let's work together."
        image="/src/assets/profile.png"
      />

      <Navigation />
      <div className="space-y-7">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Testimonials />
        <GitHubProfile gitHub={gitHub} />
        <Contact
          linkedin={linkedin}
          gmail={gmail}
          twitter={twitter}
          gitHub={gitHub}
          whatsapp={whatsapp}
        />
        <Footer
          linkedin={linkedin}
          gmail={gmail}
          twitter={twitter}
          gitHub={gitHub}
          whatsapp={whatsapp}
        />
      </div>
    </div>
  );
};

export default App;
