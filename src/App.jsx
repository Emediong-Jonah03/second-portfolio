import { useState } from "react";
import SEO from "./componet/SEO.jsx";
import Services from "./componet/services.jsx";

import Navigation from "./componet/navigation";
import Hero from "./componet/hero";
import About from "./componet/about";
import Skills from "./componet/skills";
import Projects from "./componet/projects";
import LearningJourney from "./componet/learning";
import Achievements from "./componet/achievement";
import Blog from "./componet/blog";
import { Testimonials, GitHubProfile } from "./componet/testimonial";
import Contact from "./componet/contact";
import Footer from "./componet/footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

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
  const style = {
    colors: "red",
    backgroundColor: "green",
  };

  darkMode ? style : "";
  return (
    <main className="bg-white space-y-7">
      <SEO
        title="Emediong Jonah - Full Stack  Developer Portfolio"
        description="Full Stack Developer specializing in React.js, JavaScript, Tailwind CSS, Python ,  WordPress. View my e-commerce projects, AI web apps, and let's work together."
        image="/src/assets/profile.png"
      />

      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Services darkMode={darkMode} />
      <Achievements darkMode={darkMode} />
      <Testimonials darkMode={darkMode} />
      <GitHubProfile darkMode={darkMode} gitHub={gitHub} />
      <Contact
        darkMode={darkMode}
        linkedin={linkedin}
        gmail={gmail}
        twitter={twitter}
        gitHub={gitHub}
        whatsapp={whatsapp}
      />

      <Footer
        darkMode={darkMode}
        linkedin={linkedin}
        gmail={gmail}
        twitter={twitter}
        gitHub={gitHub}
        whatsapp={whatsapp}
      />
    </main>
  );
};

export default App;
