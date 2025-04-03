import Hero from "./Hero";
import Education from "./Education";
import Courses from "./Courses";
import Contests from "./Contests";
import Skills from "./Skills";
import Activities from "./Activities";
import Projects from "./Projects";
import References from "./References";
import Update from "./Update";
import { Helmet } from "react-helmet-async";

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
      {/* <References /> */}
      <Helmet>
        <title>Amit Kumar Ghosh</title>
        <meta
          name="description"
          content="Hello, I am Amit Kumar Ghosh. I am a Full Stack Web Developer. I have completed my B.Sc. in Computer Science and Engineering from Daffodil International University. I am passionate about learning new technologies and building web applications. I have experience in developing web applications using React, Node.js, Express.js, and MongoDB. I am also familiar with Python, Django, and MySQL. I am currently working as a Full Stack Web Developer at Daffodil International University. I am always eager to learn new things and improve my skills. I am looking for opportunities to work on challenging projects and contribute to the tech community."
        />
        <meta
          property="og:title"
          content="Amit Kumar Ghosh"
        />
        <meta
          property="og:description"
          content="Hello, I am Amit Kumar Ghosh. I am a Full Stack Web Developer. I have completed my B.Sc. in Computer Science and Engineering from Daffodil International University. I am passionate about learning new technologies and building web applications. I have experience in developing web applications using React, Node.js, Express.js, and MongoDB. I am also familiar with Python, Django, and MySQL. I am currently working as a Full Stack Web Developer at Daffodil International University. I am always eager to learn new things and improve my skills. I am looking for opportunities to work on challenging projects and contribute to the tech community."
        />
       <link rel="canonical" href="https://amitkumarghosh.vercel.app/" />
      </Helmet>
    </>
  );
}

export default Home;
