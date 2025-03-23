import Hero from "./Hero";
import Education from "./Education";
import Courses from "./Courses";
import Contests from "./Contests";
import Skills from "./Skills";
import Activities from "./Activities";
import Projects from "./Projects";
import References from "./References";
import Update from "./Update";

function Home() {
    return (
      <>
          <Hero />
          <Update />
          <Education />
          <Courses />
          <Contests />
          <Skills />
          <Activities />
          <Projects />
          <References />
      </>
    );
  }
  
  export default Home;