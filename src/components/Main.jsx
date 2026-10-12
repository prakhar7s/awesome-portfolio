import Nav from "./Nav";
import Hero from "./Hero";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Resume from "./Resume";
import Contact from "./Contact";
import "../styles/main.css";

const Main = () => {
  return (
    <div className="portfolio">
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
    </div>
  );
};

export default Main;
