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

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <LearningJourney darkMode={darkMode} />
      <Achievements darkMode={darkMode} />
      <Blog darkMode={darkMode} />
      <Testimonials darkMode={darkMode} />
      <GitHubProfile darkMode={darkMode} />
     <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};
export default App;
