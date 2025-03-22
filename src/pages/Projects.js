function Projects() {
  return (
    <div className="p-4 sm:p-8 max-w-4xl mx-auto bg-gray-50 shadow-sm rounded-lg">
      <h2 className="text-xl font-bold uppercase mb-4 text-blue-700 border-b border-gray-300 pb-2">
        Projects
      </h2>
      <ul className="space-y-2">
        <li className="p-2 hover:bg-blue-50 rounded-md transition-colors flex flex-col sm:flex-row items-start sm:items-center">
          <div className="flex items-center w-full">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
            <span className="text-gray-800 font-medium">
              Full-stack Job Finder React app
            </span>
          </div>
          <a
            href="https://jobdoc-de92b.web.app"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-5 sm:ml-2 mt-1 sm:mt-0 px-2 py-1 font-medium text-red-600 hover:text-red-800 hover:bg-blue-100 rounded transition-colors"
          >
            [Live]
          </a>
          <a
            href="https://github.com/L0rd-AK/JobDoc_Frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-5 sm:ml-2 mt-1 sm:mt-0 px-2 py-1 font-medium text-red-600 hover:text-red-800 hover:bg-blue-100 rounded transition-colors"
          >
            [Repo]
          </a>
        </li>
        <li className="p-2 hover:bg-blue-50 rounded-md transition-colors flex items-center">
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
          <span className="text-gray-800 font-medium">
            Full-stack Medical clinic React-app
          </span>
        </li>
        <li className="p-2 hover:bg-blue-50 rounded-md transition-colors flex items-center">
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
          <span className="text-gray-800 font-medium">
            Front-end wedding React-project
          </span>
        </li>
        <li className="p-2 hover:bg-blue-50 rounded-md transition-colors flex flex-col sm:flex-row items-start sm:items-center">
          <div className="flex items-center w-full">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
            <span className="text-gray-800 font-medium">
              Auto Attendance System Using Face-Recognition in Python
            </span>
          </div>
          <a
            href="https://github.com/L0rd-AK/Auto-Attendance-System-using-Face-Recognition"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-5 sm:ml-2 mt-1 sm:mt-0 px-2 py-1 font-medium text-red-600 hover:text-red-800 hover:bg-blue-100 rounded transition-colors"
          >
            [Repo]
          </a>
        </li>
        <li className="p-2 hover:bg-blue-50 rounded-md transition-colors flex flex-col sm:flex-row items-start sm:items-center">
          <div className="flex items-center w-full">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
            <span className="text-gray-800 font-medium">
              Simple Server-Client Chat Application in Java
            </span>
          </div>
          <a
            href="https://github.com/L0rd-AK/Simple_chat_App_using_java"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-5 sm:ml-2 mt-1 sm:mt-0 px-2 py-1 font-medium text-red-600 hover:text-red-800 hover:bg-blue-100 rounded transition-colors"
          >
            [Repo]
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Projects;