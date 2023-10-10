import TabsExample from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import Certification from "./Components/Certification/Certification";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Copyright from "./Components/Copyright/Copyright";

function App() {
  return (
    <>
      <TabsExample />
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Experience id="experience" />
      <Certification id="certification" />
      <Education id="education" />
      <Contact id="contact" />
      <Copyright />
    </>
  );
}

export default App;
