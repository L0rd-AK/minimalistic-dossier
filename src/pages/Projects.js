import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";

function Projects() {
  const location = useLocation();
  const isProjectPage = location.pathname === "/projects";

  const projectsList = [
    {
      title: "IELTS Pro – IELTS Practice Web App",
      links: [
        { url: "https://ielts-pro.vercel.app", label: "Live" },
        { url: "https://github.com/L0rd-AK/IELTS_Pro", label: "Repo" },
      ],
      technologies:
        "Next.js, React, TypeScript, Tailwind CSS, Firebase, Node.js",
      description: `IELTS Pro is a full-featured IELTS practice platform. Users can sign up, take simulated IELTS speaking, writing, reading, and listening tests, and receive instant AI-powered feedback. The app uses Firebase for authentication and data storage, and integrates with AI services for test evaluation. The UI is built with Next.js and Tailwind CSS for a modern, responsive experience.`,
    },
    {
      title: "Full-stack Wellness Tracker Next.js-app",
      links: [
        { url: "https://vital-track-eight.vercel.app", label: "Live" },
        { url: "https://github.com/L0rd-AK/Vital-Track", label: "Repo" },
      ],
      technologies: "Next.js, React, TypeScript, MongoDB, Firebase Auth, Tailwind CSS",
      description: `User can sign in using Email or Google account via Firebase Auth. Once logged in, 
      the user gets a personal wellness dashboard tracking posture, back pain, sleep, mood, and 
      daily sitting duration, with charts visualizing trends over time. The app includes a posture 
      checker, exercise plans and reminders, a gym finder with reviews, doctor appointment 
      scheduling, and a community feed where users can post and like. Every record is scoped to the 
      logged-in user — the backend uses Next.js API routes with Firebase Admin to verify each 
      request's ID token, and MongoDB (Mongoose) for data storage.`,
    },
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
      title: "AstroImpact Simulator — NASA Asteroid Impact Web-app",
      links: [
        { url: "https://astroimpact.vercel.app", label: "Live" },
        { url: "https://github.com/L0rd-AK/AstroImpact", label: "Repo" },
      ],
      technologies: "React JS, Express JS, MongoDB, Node JS, Socket.io, Leaflet.js, Chart.js, JWT",
      description: `A full-stack MERN app for the 2025 NASA Space Apps "Meteor Madness"
      challenge. Users register and log in (JWT auth) to browse live asteroid data pulled
      from NASA's NeoWs API. They pick an asteroid, choose any impact point on an interactive
      Leaflet map, set parameters like impact angle and deflection strategy, then run a
      simulation that computes crater size, blast damage, seismic magnitude, tsunami effects
      and economic impact using USGS scaling laws. Results visualize with Chart.js. A community
      layer lets users share simulations publicly, vote on mitigation strategies, and comment,
      with live updates over Socket.io. Backend is Express + MongoDB (Mongoose); frontend is
      React with React Router and Bootstrap.`,
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
      description:
        "Just built this fun mouse-controlled Snake Game in 5 minutes using prompt engineering with DeepSeek R1! 🚀 The game is made with React.js and leverages useState, useEffect, and requestAnimationFrame for smooth movement and interactions. It features a countdown timer, food mechanics, collision detection, and a simple scoring system. This showcases the power of AI-assisted development in rapid prototyping.",
      links: [
        { url: "https://cursor-snake.vercel.app", label: "Live" },
        {
          url: "https://youtu.be/OFGOr5Sm55w?si=366ft1vYQrikrKkA",
          label: "Video",
        },
        { url: "https://github.com/L0rd-AK/Cursor_snake", label: "Repo" },
      ],
    },
    {
      title: "CSE-332 Compiler Design Project",
      technologies:
        "C, Yacc, Lex, Bison, Flex, Lexical Analyzer, Parser Generator (Yacc)",
      description: `This project is a comprehensive implementation of a compiler for a custom programming language, I developed it as part of the CSE-332 Compiler Design course. It covers essential compiler design stages such as lexical analysis, syntax analysis, and intermediate code generation. The project is written in C and utilizes Yacc for syntax parsing and Lex for lexical analysis. It demonstrates a strong understanding of compiler construction principles and practical skills in low-level programming and parser generation.`,
      links: [
        {
          url: "https://github.com/L0rd-AK/CSE-332_Compiler_Design",
          label: "Repo",
        },
      ],
    },
    {
      title: "IoT Smart Home Automation System (ESP8266 + Firebase)",
      links: [
        { url: "https://l0rd-ak.github.io/Home-Automation-Project", label: "Live" },
        { url: "https://github.com/L0rd-AK/Home-Automation-Project", label: "Repo" },
      ],
      technologies: "ESP8266 (Arduino/C++), Firebase Realtime Database, Firebase Auth, HTML, CSS, JavaScript, DHT11 / PIR / LDR sensors, L298N Motor Driver",
      description: `An end-to-end IoT smart home system that monitors and controls a physical
      environment in real time. An ESP8266 (NodeMCU) reads a PIR motion sensor, an LDR light
      sensor, and a DHT11 temperature/humidity sensor, then drives actuators — two LEDs and a
      DC motor via an L298N driver with PWM speed and direction control. All sensor readings,
      control states, and event notifications sync live to Firebase Realtime Database, so the
      hardware and a web dashboard stay in constant two-way sync. The user signs in through
      Firebase Auth (email/password) and gets a dashboard to monitor temperature, humidity,
      light level, and motion, plus toggle lights and motor remotely. The firmware runs
      autonomous logic — auto-lighting when ambient light drops, auto-motor when temperature
      crosses a threshold, and instant motion alerts — while physical override switches and
      dashboard commands take priority over automation. Engineered for reliability with
      non-blocking millis() timers, hysteresis to stop relay oscillation, rate-limited
      notifications, switch debouncing, PWM capped at 80% for motor safety, and automatic
      WiFi reconnection.`,
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
