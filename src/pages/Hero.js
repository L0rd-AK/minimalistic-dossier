import { useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import img from "../assates/pasport.jpg";
import "loaders.css/src/animations/pacman.scss";
import "loaders.css/loaders.min.css";
import { Helmet } from "react-helmet-async";

function Hero() {
  const [letterClass] = useState("text-animate-hover");
  const [fact, setFact] = useState("");
  const [showFact, setShowFact] = useState(false);
  const [loadingFact, setLoadingFact] = useState(false);

  const fetchFact = async () => {
    setShowFact(true);
    setLoadingFact(true);
    try {
      const res = await fetch("https://api.api-ninjas.com/v1/facts", {
        headers: { "X-Api-Key": process.env.REACT_APP_FACTS_API_KEY },
      });
      const data = await res.json();
      setFact(data?.[0]?.fact || "No fact found.");
    } catch (err) {
      setFact("Couldn't fetch a fact right now.");
    } finally {
      setLoadingFact(false);
    }
  };

  const nameArray = [
    "A",
    "M",
    "I",
    "T",
    " ",
    "K",
    "U",
    "M",
    "A",
    "R",
    " ",
    "G",
    "H",
    "O",
    "S",
    "H",
  ];
  const github = ["G", "i", "t", "H", "u", "b"];
  const linkedin = ["L", "i", "n", "k", "e", "d", "I", "n"];
  const scholar = ["G","o","o","g","l","e"," ","S","c","h","o","l","a","r"]

  return (
    <>
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
      <div className="p-4 sm:p-8   bg-gray-50 shadow-sm rounded-lg">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 mb-6">
          <div className="flex justify-center md:justify-start">
            <div
              className="relative"
              onMouseEnter={fetchFact}
              onMouseLeave={() => setShowFact(false)}
            >
              <img
                src={img}
                alt="Profile pic of Amit Kumar Ghosh"
                className="w-32 h-32 sm:w-36 sm:h-36 object-cover object-top rounded-full border-2 border-blue-500 shadow-md transition-transform hover:scale-105"
              />
              {showFact && (
                <div className="absolute left-1/2 top-full z-20 mt-3 w-56 -translate-x-1/2 rounded-lg bg-gray-900 px-3 py-2 text-xs text-white shadow-lg">
                  <span className="font-bold text-blue-300">Did you know? </span>
                  {loadingFact ? "Loading fact..." : fact}
                  <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-gray-900" />
                </div>
              )}
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-2xl font-bold text-blue-700">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={nameArray.length}
              />
            </h2>

            <p className="text-gray-600">Ashulia, Dhaka</p>
            <p className="text-gray-600">amitkumar89155@gmail.com</p>
            <p className="text-gray-600">+8801788133927</p>
            <p className="text-gray-600 mt-2">
              [
              <a
                href="https://github.com/L0rd-AK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={github}
                  idx={github.length}
                />
              </a>
              ] [
              <a
                href="https://www.linkedin.com/in/amit-kumar-ghosh-41a602215"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={linkedin}
                  idx={linkedin.length}
                />
              </a>
              ] [
              <a
                href="https://scholar.google.com/citations?hl=en&user=uWTBIJwAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={scholar}
                  idx={scholar.length}
                />
              </a>
              ]
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold uppercase mb-2 text-blue-700 border-b border-gray-300 pb-1">
            Summary
          </h3>
          <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
          "Full-stack developer" is just a fancy way of saying "I can argue with both front-end and back-end until neither works, then fix them while muttering darkly."
          I've mastered the art of translating caffeine into code, churning out "dynamic web applications" that users pretend to love until the next shiny thing comes along. My toolkit? HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB—because why settle for one language when you can juggle seven? I build "scalable and efficient solutions," which is corporate-speak for "I can make your tech stack slightly less of a disaster."
          </p>
          <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base mt-4">
          Passionate about leveraging "cutting-edge" technologies (read: whatever just got a Medium blog post) to solve "real-world problems" (read: make someone's app slightly less slow). I thrive in "collaborative environments" where "innovation" means three-hour meetings to decide a button's color.
          Committed to "continuous learning," mainly because half my tools become obsolete every six months. Actively seeking a "forward-thinking organization" where I can contribute groundbreaking code (read: debug ancient legacy systems) and occasionally see sunlight.
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
