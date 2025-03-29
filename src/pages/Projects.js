import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";

function Projects() {
  const location = useLocation();
  const isProjectPage = location.pathname === "/projects";

  const projectsList = [
    {
      title: "Full-stack Job Finder React app",
      links: [
        { url: "https://jobdoc-de92b.web.app", label: "Live" },
        { url: "https://github.com/L0rd-AK/JobDoc_Frontend", label: "Repo" },
      ],
      technologies: "React JS, Express JS, MongoDB, Node JS, Firebase",
      description: `User can sign in using Email or Google account. Once Logged in user can   
      search for job, apply for a job or post a job. For authentication I used Firebase. For      
      backend I used Express JS and for storing data I used MongoDB.`,
    },
    {
      title: "Full-stack Medical clinic React-app",
      links: [
        { url: "https://medlab-3e261.web.app", label: "Live" },
        { url: "https://github.com/L0rd-AK/MedLab_Frontend", label: "Repo" },
      ],
      technologies: "React JS, Express JS, MongoDB, Node JS, Firebase",
      description: `User can sign in using Email or Google account. Once Logged in, the user can 
      search for a doctor and test. To book a test, the user must pay a fee. I have implemented 
      a Payment-gateway using Stripe. This site contains an Admin role system. When an admin 
      logs in, they can access their Admin-Dashboard. Through this dashboard, the admin can 
      delete or update any test information, block any user, and blocked users cannot access 
      the site anymore. For the backend, I used Express JS, and for storing data, I used MongoDB.`,
    },
    {
      title: "Front-end wedding React-project",
      links: [
        { url: "https://love-and-wedding-demo-site.vercel.app", label: "Live" },
        {
          url: "https://github.com/L0rd-AK/Love-and-Wedding_Demo-site",
          label: "Repo",
        },
      ],
      technologies: "React JS, Tailwind CSS, DaisyUI, Firebase",
    },
    {
      title: "Cursor-Controlled Snake Game",
      technologies: "React JS, Tailwind CSS, DaisyUI",
      description:"Just built this fun mouse-controlled Snake Game in 5 minutes using prompt engineering with DeepSeek R1! 🚀 The game is made with React.js and leverages useState, useEffect, and requestAnimationFrame for smooth movement and interactions. It features a countdown timer, food mechanics, collision detection, and a simple scoring system. This showcases the power of AI-assisted development in rapid prototyping.",
      links: [
        { url: "https://cursor-snake.vercel.app", label: "Live" },
        { url: "https://youtu.be/OFGOr5Sm55w?si=366ft1vYQrikrKkA", label: "Video" },
        { url: "https://github.com/L0rd-AK/Cursor_snake", label: "Repo" },
      ],
    },
    {
      title: "Auto Attendance System Using Face-Recognition in Python",
      links: [
        {
          url: "https://youtu.be/hEhCqYvJyNw?si=Q_1lpFz1cL3zt3RN",
          label: "Video",
        },
        {
          url: "https://github.com/L0rd-AK/Auto-Attendance-System-using-Face-Recognition",
          label: "Repo",
        },
      ],
      technologies: "Python, OpenCV, SQLite",
      description: `This project is an automated attendance system using face recognition.`,
    },
    {
      title: "Simple Server-Client Chat Application in Java",
      links: [
        {
          url: "https://github.com/L0rd-AK/Simple_chat_App_using_java",
          label: "Repo",
        },
      ],
      technologies: "Java",
      description: `This project is a simple chat application using Java. The server and client can chat with each other.`,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Amit Kumar Ghosh - Projects</title>
        <meta
          name="description"
          content="This page highlights Amit Kumar Ghosh's Projects. It actively showcases his projects, including Full-stack Job Finder React app, Full-stack Medical clinic React-app, Front-end wedding React-project, Auto Attendance System Using Face-Recognition in Python, and Simple Server-Client Chat Application in Java. The page is designed with a responsive layout, ensuring a clean and interactive user experience."
        />
        <meta
          property="og:title"
          content="Amit Kumar Ghosh | Projects"
        />
        <meta
          property="og:description"
          content="This page highlights Amit Kumar Ghosh's Projects. It actively showcases his projects, including Full-stack Job Finder React app, Full-stack Medical clinic React-app, Front-end wedding React-project, Auto Attendance System Using Face-Recognition in Python, and Simple Server-Client Chat Application in Java. The page is designed with a responsive layout, ensuring a clean and interactive user experience."
        />
        <link rel="canonical" href="https://amitkumarghosh.vercel.app/projects"/>
      </Helmet>
      <div className="p-4 sm:p-8   bg-gray-50 shadow-sm rounded-lg">
        <h1 className="text-xl font-bold uppercase mb-4 text-blue-700 border-b border-gray-300 pb-2">
          Projects
          <span className="text-sm text-gray-600">
            <Link to="/projects" className="text-blue-600">
              (
              <span className="text-red-600 text-sm lowercase font-medium">
                details
              </span>
              )
            </Link>
          </span>
        </h1>
        <ul className="space-y-2">
          {projectsList.map((project, index) => (
            <li
              key={index}
              className={`p-2 hover:bg-blue-50 rounded-md transition-colors flex ${
                project.links.length > 0
                  ? "flex-col sm:flex-row items-start sm:items-center gap-10"
                  : "items-center"
              }${isProjectPage ? " border border-gray-300 p-4" : ""}
            `}
            >
              <div
                className={`${
                  project.links.length > 0 ? "items-left w-full" : ""
                }`}
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-800 font-medium">
                    {project.title}
                  </span>
                </div>
                {/* Show extra information if on /project path */}
                {isProjectPage && (
                  <div className="mt-2">
                    <p className="text-gray-700 text-sm">
                      <strong>Technologies:</strong> {project.technologies}
                    </p>
                    {project.description && (
                      <div className="text-gray-700 text-sm mt-1 text-justify">
                        <strong className="inline">Description: </strong>
                        <p className="text-gray-600 text-sm mt-1 inline">
                          {project.description}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="flex">
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
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Projects;
