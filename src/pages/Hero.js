function Hero() {
    return (
      <div className="p-8 max-w-4xl mx-auto bg-gray-50 shadow-sm rounded-lg">
        <div className="flex items-center mb-6">
          <img
            src="https://via.placeholder.com/100" // Replace with actual profile picture URL
            alt="Profile"
            className="w-24 h-24 rounded-full mr-4 border-2 border-blue-500 shadow-md"
          />
          <div>
            <h2 className="text-2xl font-bold text-blue-700">Amit Kumar Ghosh</h2>
            <p className="text-gray-600">Ashulia, Dhaka</p>
            <p className="text-gray-600">amitkumar89155@gmail.com</p>
            <p className="text-gray-600">+8801788133927</p>
            <p className="text-gray-600">
              <a href="https://github.com/L0rd-AK" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                GitHub
              </a>
            </p>
            <p className="text-gray-600">
              <a href="https://www.linkedin.com/in/amit-kumar-ghosh-41a602215" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold uppercase mb-2 text-blue-700 border-b border-gray-300 pb-1">Summary</h3>
          <p className="text-gray-700 leading-relaxed">
            I am a full-stack developer with years of experience in creating and managing websites. My skills include coding in HTML, CSS, and JavaScript, as well as working in React, Node JS, Express JS, and MongoDB. As a full-stack developer with a lot of ambition, I seek a position in a reputable IT company where I can use the most advanced technologies and work on various and complex projects. If I had to define myself in one sentence, I would be a team player, problem solver, and tech obsessed!!
          </p>
        </div>
      </div>
    );
  }
  
  export default Hero;