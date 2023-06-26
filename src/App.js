import TabsExample from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import Certification from "./Components/Certification/Certification";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";


function App() {
  return (
    <>
      <TabsExample/>
      <About id="#about"/> 
      <Education id="education"/>
      <Experience id="experience"/>
      <Certification id="certification"/>
      <Projects id="projects"/>
      <Skills id="skilld"/>
      <Contact id="contact"/>
    </>
  );
}

export default App;
