import React, { useState, useEffect, useRef } from 'react';
import './InteractiveTerminal.css';

const InteractiveTerminal = () => {
  const [history, setHistory] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  // Portfolio data for terminal commands
  const portfolioData = {
    about: {
      name: "Amit Kumar Ghosh",
      location: "Ashulia, Dhaka",
      email: "amitkumar89155@gmail.com",
      phone: "+8801788133927",
      github: "https://github.com/L0rd-AK",
      linkedin: "https://www.linkedin.com/in/amit-kumar-ghosh-41a602215",
      summary: "Full-stack developer who can argue with both front-end and back-end until neither works, then fix them while muttering darkly."
    },
    skills: {
      languages: ["JavaScript", "Python", "C++", "Java", "C"],
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "HTML", "CSS"],
      tools: ["VS Code", "PyCharm", "Eclipse", "Adobe Photoshop", "Figma"],
      frameworks: ["React Native", "Django", "Tailwind CSS"]
    },
    projects: [
      {
        name: "Job Finder App",
        tech: "MERN Stack",
        description: "Full-stack job search platform with user authentication"
      },
      {
        name: "Medical Clinic System",
        tech: "React, Node.js, MongoDB",
        description: "Comprehensive medical clinic management system"
      },
      {
        name: "Face Recognition Attendance",
        tech: "Python, OpenCV",
        description: "Automated attendance system using facial recognition"
      },
      {
        name: "Wedding Planning Site",
        tech: "React, CSS3",
        description: "Elegant wedding planning website with modern UI"
      }
    ],
    education: [
      {
        degree: "B.Sc. Computer Science & Engineering",
        institution: "Daffodil International University",
        period: "2021-2025",
        cgpa: "3.85/4.00"
      }
    ],
    experience: [
      {
        role: "Full Stack Developer",
        company: "Freelance",
        period: "2023-Present",
        description: "Developing web applications using MERN stack"
      },
      {
        role: "Competitive Programmer",
        company: "Various Platforms",
        period: "2021-Present",
        description: "Solved 1500+ problems across multiple online judges"
      }
    ]
  };

  const commands = {
    help: () => ({
      output: [
        "Available commands:",
        "",
        "  whoami           - Display user information",
        "  ls [directory]   - List contents (skills, projects, education, experience)",
        "  cat <file>       - Display file contents",
        "  grep <term>      - Search for term in portfolio",
        "  clear            - Clear terminal",
        "  pwd              - Show current directory",
        "  date             - Show current date",
        "  contact          - Show contact information",
        "  exit             - Close terminal",
        "",
        "Examples:",
        "  ls skills/",
        "  cat experience.txt",
        "  grep -i react",
        ""
      ]
    }),

    whoami: () => ({
      output: [
        `${portfolioData.about.name}`,
        `Location: ${portfolioData.about.location}`,
        `Role: Full Stack Developer`,
        "",
        portfolioData.about.summary
      ]
    }),

    pwd: () => ({
      output: ["/home/amit-portfolio"]
    }),

    date: () => ({
      output: [new Date().toString()]
    }),

    contact: () => ({
      output: [
        "Contact Information:",
        "",
        `📧 Email: ${portfolioData.about.email}`,
        `📱 Phone: ${portfolioData.about.phone}`,
        `🔗 GitHub: ${portfolioData.about.github}`,
        `💼 LinkedIn: ${portfolioData.about.linkedin}`,
        ""
      ]
    }),

    ls: (args) => {
      const dir = args[0] || "";
      switch (dir) {
        case "skills/":
        case "skills":
          return {
            output: [
              "languages/     technologies/     tools/     frameworks/",
              "",
              "Use 'cat skills/<category>' to view details"
            ]
          };
        case "projects/":
        case "projects":
          return {
            output: [
              ...portfolioData.projects.map((p, i) => `${i + 1}. ${p.name}`),
              "",
              "Use 'cat projects/<number>' for details"
            ]
          };
        case "education/":
        case "education":
          return {
            output: ["degree.txt", "certifications.txt"]
          };
        case "experience/":
        case "experience":
          return {
            output: ["work-history.txt", "achievements.txt"]
          };
        case "":
          return {
            output: [
              "skills/     projects/     education/     experience/",
              "about.txt   contact.txt   resume.pdf",
              "",
              "Use 'ls <directory>/' to explore folders"
            ]
          };
        default:
          return {
            output: [`ls: cannot access '${dir}': No such file or directory`]
          };
      }
    },

    cat: (args) => {
      if (!args[0]) {
        return { output: ["cat: missing file operand"] };
      }

      const file = args[0];
      
      if (file.startsWith("skills/")) {
        const category = file.split("/")[1];
        const skillData = portfolioData.skills[category];
        if (skillData) {
          return {
            output: [
              `=== ${category.toUpperCase()} ===`,
              "",
              ...skillData.map(skill => `• ${skill}`)
            ]
          };
        }
      }

      if (file.startsWith("projects/")) {
        const projectNum = parseInt(file.split("/")[1]) - 1;
        const project = portfolioData.projects[projectNum];
        if (project) {
          return {
            output: [
              `=== ${project.name.toUpperCase()} ===`,
              "",
              `Technologies: ${project.tech}`,
              `Description: ${project.description}`,
              ""
            ]
          };
        }
      }

      switch (file) {
        case "about.txt":
          return {
            output: [
              portfolioData.about.name,
              portfolioData.about.location,
              "",
              portfolioData.about.summary
            ]
          };
        case "experience.txt":
          return {
            output: [
              "=== WORK EXPERIENCE ===",
              "",
              ...portfolioData.experience.map(exp => [
                `${exp.role} | ${exp.company}`,
                `Period: ${exp.period}`,
                `${exp.description}`,
                ""
              ]).flat()
            ]
          };
        case "education.txt":
          return {
            output: [
              "=== EDUCATION ===",
              "",
              ...portfolioData.education.map(edu => [
                edu.degree,
                edu.institution,
                `Period: ${edu.period}`,
                `CGPA: ${edu.cgpa}`,
                ""
              ]).flat()
            ]
          };
        case "contact.txt":
          return commands.contact();
        default:
          return {
            output: [`cat: ${file}: No such file or directory`]
          };
      }
    },

    grep: (args) => {
      if (!args[0]) {
        return { output: ["grep: missing search pattern"] };
      }

      const pattern = args[0].toLowerCase();
      const results = [];
      
      // Search in skills
      Object.entries(portfolioData.skills).forEach(([category, items]) => {
        items.forEach(item => {
          if (item.toLowerCase().includes(pattern)) {
            results.push(`skills/${category}: ${item}`);
          }
        });
      });

      // Search in projects
      portfolioData.projects.forEach((project, i) => {
        if (project.name.toLowerCase().includes(pattern) || 
            project.tech.toLowerCase().includes(pattern) ||
            project.description.toLowerCase().includes(pattern)) {
          results.push(`projects/${i + 1}: ${project.name} (${project.tech})`);
        }
      });

      return {
        output: results.length > 0 ? results : [`No matches found for '${pattern}'`]
      };
    },

    clear: () => {
      setHistory([]);
      return { output: [] };
    },

    exit: () => {
      setIsVisible(false);
      return { output: ["Goodbye! Thanks for exploring my portfolio!"] };
    }
  };

  const executeCommand = (input) => {
    const [command, ...args] = input.trim().split(' ');
    
    const historyEntry = {
      command: input,
      output: []
    };

    if (command === '') {
      historyEntry.output = [''];
    } else if (commands[command]) {
      const result = commands[command](args);
      if (result.output) {
        historyEntry.output = result.output;
      }
    } else {
      historyEntry.output = [`Command not found: ${command}. Type 'help' for available commands.`];
    }

    setHistory(prev => [...prev, historyEntry]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentInput.trim()) {
      executeCommand(currentInput);
      setCurrentInput('');
    }
  };

  const toggleTerminal = () => {
    setIsVisible(!isVisible);
    if (!isVisible) {
      // Welcome message when opening terminal
      setTimeout(() => {
        setHistory([{
          command: '',
          output: [
            "Welcome to Amit's Interactive Portfolio Terminal!",
            "",
            "Type 'help' to see available commands.",
            "Try: whoami, ls, cat about.txt, grep react",
            ""
          ]
        }]);
      }, 100);
    }
  };

  useEffect(() => {
    if (isVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isVisible]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <>
      {/* Terminal Toggle Button */}
      <div className="terminal-toggle" onClick={toggleTerminal}>
        <span className="terminal-toggle-icon">💻</span>
      </div>

      {/* Terminal Window */}
      {isVisible && (
        <div className="terminal-overlay">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="terminal-button close" onClick={() => setIsVisible(false)}></span>
                <span className="terminal-button minimize"></span>
                <span className="terminal-button maximize"></span>
              </div>
              <div className="terminal-title">amit@portfolio:~</div>
            </div>
            
            <div className="terminal-body" ref={terminalRef}>
              {history.map((entry, index) => (
                <div key={index} className="terminal-entry">
                  {entry.command && (
                    <div className="terminal-command">
                      <span className="terminal-prompt">amit@portfolio:~$ </span>
                      <span className="terminal-input">{entry.command}</span>
                    </div>
                  )}
                  <div className="terminal-output">
                    {entry.output.map((line, lineIndex) => (
                      <div key={lineIndex} className="terminal-line">{line}</div>
                    ))}
                  </div>
                </div>
              ))}
              
              <form onSubmit={handleSubmit} className="terminal-input-form">
                <span className="terminal-prompt">amit@portfolio:~$ </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  className="terminal-input-field"
                  placeholder="Type a command..."
                  autoComplete="off"
                  spellCheck="false"
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InteractiveTerminal;
