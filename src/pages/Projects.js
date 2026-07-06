import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { projectsData } from "../data/projectsData";

function Projects() {
  const location = useLocation();
  const isProjectPage = location.pathname === "/projects";

  const projectsList = projectsData;

  return (
    <>
      <Helmet>
        <title>Amit - Projects</title>
        <meta
          name="description"
          content="This page highlights Amit Kumar Ghosh's Projects. It actively showcases his projects, including Full-stack Job Finder React app, Full-stack Medical clinic React-app, Front-end wedding React-project, Auto Attendance System Using Face-Recognition in Python, and Simple Server-Client Chat Application in Java. The page is designed with a responsive layout, ensuring a clean and interactive user experience."
        />
        <meta property="og:title" content="Amit Kumar Ghosh | Projects" />
        <meta
          property="og:description"
          content="This page highlights Amit Kumar Ghosh's Projects. It actively showcases his projects, including Full-stack Job Finder React app, Full-stack Medical clinic React-app, Front-end wedding React-project, Auto Attendance System Using Face-Recognition in Python, and Simple Server-Client Chat Application in Java. The page is designed with a responsive layout, ensuring a clean and interactive user experience."
        />
        <link
          rel="canonical"
          href="https://amitkumarghosh.vercel.app/projects"
        />
      </Helmet>
      <div className="p-4 sm:p-8   bg-gray-50 shadow-sm rounded-lg">
        <h1 className="text-xl font-bold uppercase mb-4 text-blue-700 border-b border-gray-300 pb-2">
          Projects
          <span className="text-sm text-gray-600">
            <Link to="/projects" className="text-blue-600">
              (
              <span className="text-red-600 text-sm lowercase font-medium">
                {"details - "+projectsList?.length}
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
