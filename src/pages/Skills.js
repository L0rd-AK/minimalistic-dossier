function Skills() {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-gray-50 shadow-sm rounded-lg">
      <h2 className="text-xl font-bold uppercase mb-4 text-blue-700 border-b border-gray-300 pb-2">Skills & Proficiencies</h2>
      <div className="space-y-4">
        <div className="p-1 hover:bg-blue-50 rounded-md transition-colors">
          <h3 className="font-bold text-blue-600">Tools</h3>
          <p className="text-gray-700 ml-2 list-item">Adobe Photoshop, Illustrator, Figma, MS Office (Excel, Word)</p>
        </div>
        <div className="p-1 hover:bg-blue-50 rounded-md transition-colors">
          <h3 className="font-bold text-blue-600">Pro Skills</h3>
          <p className="text-gray-700 ml-2 list-item">Front-End Developer, Web Developer, Mern-Stack Developer</p>
        </div>
        <div className="p-1 hover:bg-blue-50 rounded-md transition-colors">
          <h3 className="font-bold text-blue-600">Web Technologies</h3>
          <p className="text-gray-700 ml-2 list-item">HTML, CSS, JS, React, Node JS, MongoDB</p>
        </div>
        <div className="p-1 hover:bg-blue-50 rounded-md transition-colors">
          <h3 className="font-bold text-blue-600">Languages</h3>
          <p className="text-gray-700 ml-2 list-item">Python, C, C++, Java, JavaScript</p>
        </div>
        <div className="p-1 hover:bg-blue-50 rounded-md transition-colors">
          <h3 className="font-bold text-blue-600">IDE</h3>
          <p className="text-gray-700 ml-2 list-item">VS-Code, PyCharm, Eclipse</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;