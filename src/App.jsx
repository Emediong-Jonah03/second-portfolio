import { BrowserRouter, Routes, Route } from "react-router-dom";
import SEO from "./components/SEO.jsx"
import Services from "./components/services.jsx"
import useScrollAnimation from "./hooks/scrollAnimation.jsx";

import Navigation from "./components/navigation.jsx"
import Hero from "./components/hero.jsx";
import About from "./components/about.jsx"
import Projects from "./components/projects.jsx";
import DryCatchCard from "./components/testimonial.jsx";
import FAQ from "./components/faq.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/footer.jsx";

const MainSite = () => {
  useScrollAnimation();

  const myData = {
    linkedin: "https://www.linkedin.com/in/emediong-jonah-68a093329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    gmail: "jonahemediong9@gmail.com",
    whatsapp: "https://wa.me/message/JIBWQ6FWKT6CI1",
    tip: "https://selar.com/showlove/emediong-emedev",
  };

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 min-h-screen">
      <SEO
        title="EmeDev — Full-Stack Development for Founders | Emediong Jonah"
        description="Backend-first full-stack development for non-technical founders. FastAPI, React, PostgreSQL, Paystack. Projects from $300. Book a free call."
        image="/src/assets/profile.png"
      />

      <Navigation />
      <div className="space-y-7">
        <Hero />
        <About />
        <Projects />
        <Services />
        <DryCatchCard />
        <FAQ />
        <Contact
          linkedin={myData.linkedin}
          gmail={myData.gmail}
          whatsapp={myData.whatsapp}
          tip={myData.tip}
        />
        <Footer
          linkedin={myData.linkedin}
          gmail={myData.gmail}
        />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSite />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
