function Projects() {
  const projectsList = [
    {
      title: "Full-stack Job Finder React app",
      links: [
        { url: "https://jobdoc-de92b.web.app", label: "Live" },
        { url: "https://github.com/L0rd-AK/JobDoc_Frontend", label: "Repo" }
      ]
    },
    {
      title: "Full-stack Medical clinic React-app",
      links: [
        { url: "https://medlab-3e261.web.app", label: "Live" },
        { url: "https://github.com/L0rd-AK/MedLab_Frontend", label: "Repo" }
      ]
    },
    {
      title: "Front-end wedding React-project",
      links: [
        { url: "https://love-and-wedding-demo-site.vercel.app", label: "Live" },
        { url: "https://github.com/L0rd-AK/Love-and-Wedding_Demo-site", label: "Repo" }
      ]
    },
    {
      title: "Auto Attendance System Using Face-Recognition in Python",
      links: [
        { url: "https://youtu.be/hEhCqYvJyNw?si=Q_1lpFz1cL3zt3RN", label: "Video" },
        { url: "https://github.com/L0rd-AK/Auto-Attendance-System-using-Face-Recognition", label: "Repo" }
      ]
    },
    {
      title: "Simple Server-Client Chat Application in Java",
      links: [
        { url: "https://github.com/L0rd-AK/Simple_chat_App_using_java", label: "Repo" }
      ]
    }
  ];

  return (
    <div className="p-4 sm:p-8 max-w-4xl mx-auto bg-gray-50 shadow-sm rounded-lg">
      <h2 className="text-xl font-bold uppercase mb-4 text-blue-700 border-b border-gray-300 pb-2">
        Projects
      </h2>
      <ul className="space-y-2">
        {projectsList.map((project, index) => (
          <li key={index} className={`p-2 hover:bg-blue-50 rounded-md transition-colors flex ${project.links.length > 0 ? 'flex-col sm:flex-row items-start sm:items-center' : 'items-center'}`}>
            <div className={`${project.links.length > 0 ? 'flex items-center w-full' : ''}`}>
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
              <span className="text-gray-800 font-medium">
                {project.title}
              </span>
            </div>
            
            {project.links.map((link, linkIndex) => (
              <a
                key={linkIndex}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-5 sm:ml-2 mt-1 sm:mt-0 px-2 py-1 font-medium text-red-600 hover:text-red-800 hover:bg-blue-100 rounded transition-colors"
              >
                [{link.label}]
              </a>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;