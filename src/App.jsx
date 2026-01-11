import { useState, useEffect } from "react";
import SEO from "./componet/SEO.jsx";
import Services from "./componet/services.jsx";

import Navigation from "./componet/navigation";
import Hero from "./componet/hero";
import About from "./componet/about";
import Skills from "./componet/skills";
import Projects from "./componet/projects";
import Achievements from "./componet/achievement";
import { Testimonials, GitHubProfile } from "./componet/testimonial";
import Contact from "./componet/contact";
import Footer from "./componet/footer";

const App = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          // Optional: remove class to re-trigger animation when scrolling back up
          // entry.target.classList.remove("is-visible");
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
      ".animate-fade-in, .animate-slide-up, .animate-slide-in-left"
    );
    animatedElements.forEach((el) => {
      el.classList.add("reveal-hidden");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
        <Achievements />
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
