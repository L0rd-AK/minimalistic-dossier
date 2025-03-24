import { Helmet } from "react-helmet-async";

function Skills() {
  return (
    <>
      <Helmet>
        <title>Amit Kumar Ghosh - Skills</title>
        <meta
          name="description"
          content="This page highlights Amit Kumar Ghosh's Skills, including his proficiency in Tools like Adobe Photoshop, Illustrator, Figma, MS Office (Excel, Word), Pro Skills like Front-End Developer, Web Developer, Mern-Stack Developer, Web Technologies like HTML, CSS, JS, React JS, Express JS, Node JS, MongoDB, Languages like Python, C, C++, Java, JavaScript, and IDE like VS-Code, PyCharm, Eclipse. The page is designed with a responsive layout, ensuring a clean and interactive user experience."
        />
        <meta
          property="og:title"
          content="Amit Kumar Ghosh | Skills"
        />
        <meta
          property="og:description"
          content="This page highlights Amit Kumar Ghosh's Skills, including his proficiency in Tools like Adobe Photoshop, Illustrator, Figma, MS Office (Excel, Word), Pro Skills like Front-End Developer, Web Developer, Mern-Stack Developer, Web Technologies like HTML, CSS, JS, React JS, Express JS, Node JS, MongoDB, Languages like Python, C, C++, Java, JavaScript, and IDE like VS-Code, PyCharm, Eclipse. The page is designed with a responsive layout, ensuring a clean and interactive user experience."
        />
        <link rel="canonical" href="https://amitkumarghosh.vercel.app/skills" />
      </Helmet>
      <div className="p-4 sm:p-8 max-w-4xl mx-auto bg-gray-50 shadow-sm rounded-lg">
        <h2 className="text-xl font-bold uppercase mb-4 text-blue-700 border-b border-gray-300 pb-2">
          Skills & Proficiencies
        </h2>
        <div className="space-y-4">
          <div className="p-1 hover:bg-blue-50 rounded-md transition-colors">
            <h3 className="font-bold text-blue-600">Tools</h3>
            <p className="text-gray-700 ml-2 list-item text-sm sm:text-base">
              Adobe Photoshop, Illustrator, Figma, MS Office (Excel, Word)
            </p>
          </div>
          <div className="p-1 hover:bg-blue-50 rounded-md transition-colors">
            <h3 className="font-bold text-blue-600">Pro Skills</h3>
            <p className="text-gray-700 ml-2 list-item text-sm sm:text-base">
              Front-End Developer, Web Developer, Mern-Stack Developer
            </p>
          </div>
          <div className="p-1 hover:bg-blue-50 rounded-md transition-colors">
            <h3 className="font-bold text-blue-600">Web Technologies</h3>
            <p className="text-gray-700 ml-2 list-item text-sm sm:text-base">
              HTML, CSS, JS, React JS, Express JS, Node JS, MongoDB
            </p>
          </div>
          <div className="p-1 hover:bg-blue-50 rounded-md transition-colors">
            <h3 className="font-bold text-blue-600">Languages</h3>
            <p className="text-gray-700 ml-2 list-item text-sm sm:text-base">
              Python, C, C++, Java, JavaScript
            </p>
          </div>
          <div className="p-1 hover:bg-blue-50 rounded-md transition-colors">
            <h3 className="font-bold text-blue-600">IDE</h3>
            <p className="text-gray-700 ml-2 list-item text-sm sm:text-base">
              VS-Code, PyCharm, Eclipse
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
