import { useState } from "react";

import Navigation from './componet/navigation'
import Hero from './componet/hero';
import About from './componet/about';
import Skills from './componet/skills';
import Projects from './componet/projects';
import LearningJourney from './componet/learning';
import Achievements from './componet/achievement';
import Blog from './componet/blog';
import { Testimonials, GitHubProfile } from './componet/testimonial';
import Contact from './componet/contact'
import Footer from './componet/footer';


const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

   const myData = [
    {
      linkedin: "www.linkedin.com/in/emediong-jonah-68a093329", 
      GitHubProfile: "https://t.co/OBbI1f1oVK", 
      Xprofile: "https://twitter.com/EmediongJ15081",
      gmail: "mailto: jonahemediong9@gmail.com"
    },
 
  ]

  const gitHub = myData.map(data => data.GitHubProfile)
  const linkedin = myData.map(data => data.linkedin)
  const twitter = myData.map(data => data.Xprofile)
  const gmail= myData.map(data => data.gmail)
  const style = {
      colors : "red",
      backgroundColor : "green"
  }
 
darkMode ? style : ""
  return (
    < >
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About darkMode={darkMode}  />
      <Skills darkMode={darkMode}   />
      <Projects darkMode={darkMode} />
      <LearningJourney darkMode={darkMode}   />
      <Achievements darkMode={darkMode}   />
      <Blog darkMode={darkMode} />
      <Testimonials darkMode={darkMode}   />
      <GitHubProfile darkMode={darkMode}  gitHub={gitHub} />

     <Contact darkMode={darkMode}  linkedin={linkedin}
                                    gmail={gmail}
                                    twitter={twitter}
                                    gitHub={gitHub} />

      <Footer darkMode={darkMode}  linkedin={linkedin}
                                    gmail={gmail}
                                    twitter={twitter}
                                    gitHub={gitHub} />
    </>
  );
};

export default App;
