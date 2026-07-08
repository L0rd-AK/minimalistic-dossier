import React, { useState, useEffect, useRef } from 'react';
import './InteractiveTerminal.css';

const InteractiveTerminal = () => {
  const [history, setHistory] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [cmdHistory, setCmdHistory] = useState([]); // executed commands, for ↑/↓ recall
  const [historyIndex, setHistoryIndex] = useState(-1);
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

  // Short aliases → real command names
  const aliasMap = {
    cls: 'clear',
    quit: 'exit',
    q: 'exit',
    bye: 'exit',
    '?': 'help',
    man: 'help',
    info: 'whoami',
    me: 'whoami'
  };

  const commands = {
    help: () => ({
      output: [
        "Available commands:",
        "",
        "  whoami            - About me",
        "  ls [dir]          - List contents (skills, projects, education, experience)",
        "  cat <file>        - Show file contents",
        "  grep [-i] <term>  - Search the portfolio",
        "  contact           - Contact information",
        "  history           - Show command history",
        "  echo <text>       - Print text",
        "  date              - Current date/time",
        "  pwd               - Current directory",
        "  clear             - Clear the screen",
        "  exit              - Close terminal",
        "",
        "Tips:",
        "  • Commands are case-insensitive  (LS = ls = Ls)",
        "  • Tab autocompletes  ·  ↑/↓ recall history  ·  Esc closes",
        "  • Aliases: cls, quit/q/bye, man/?, me/info",
        "",
        "Examples:",
        "  ls skills    ·    cat about.txt    ·    grep react",
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

    echo: (args) => ({
      output: [args.join(' ')]
    }),

    history: () => ({
      output: cmdHistory.length
        ? cmdHistory.map((c, i) => `  ${String(i + 1).padStart(3, ' ')}  ${c}`)
        : ["No commands in history yet."]
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
      // case-insensitive, tolerate trailing slash: "Skills/" == "skills"
      const dir = (args[0] || "").toLowerCase().replace(/\/+$/, "");
      switch (dir) {
        case "skills":
          return {
            output: [
              "languages/     technologies/     tools/     frameworks/",
              "",
              "Use 'cat skills/<category>' to view details"
            ]
          };
        case "projects":
          return {
            output: [
              ...portfolioData.projects.map((p, i) => `${i + 1}. ${p.name}`),
              "",
              "Use 'cat projects/<number>' for details"
            ]
          };
        case "education":
          return {
            output: ["education.txt"]
          };
        case "experience":
          return {
            output: ["experience.txt"]
          };
        case "":
          return {
            output: [
              "skills/     projects/     education/     experience/",
              "about.txt   contact.txt   resume.pdf",
              "",
              "Use 'ls <directory>' to explore folders"
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

      const file = args[0].toLowerCase().replace(/\/+$/, "");

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
        return { output: [`cat: ${file}: unknown category. Try: cat skills`] };
      }

      if (file.startsWith("projects/")) {
        const projectNum = parseInt(file.split("/")[1], 10) - 1;
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
        return { output: [`cat: ${file}: no such project. Try: ls projects`] };
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
        case "work-history.txt":
        case "achievements.txt":
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
        case "degree.txt":
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
        case "resume.pdf":
          return {
            output: [
              "📄 resume.pdf",
              "",
              "Binary file — can't cat. Grab the details with:",
              "  cat about.txt · cat education.txt · cat experience.txt · contact"
            ]
          };
        default:
          return {
            output: [`cat: ${file}: No such file or directory`]
          };
      }
    },

    grep: (args) => {
      // skip flags like -i (search is already case-insensitive); take first real term
      const term = args.find(a => !a.startsWith('-'));
      if (!term) {
        return { output: ["grep: missing search pattern"] };
      }

      const pattern = term.toLowerCase();
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

      // Search in experience
      portfolioData.experience.forEach(exp => {
        if (exp.role.toLowerCase().includes(pattern) ||
            exp.company.toLowerCase().includes(pattern) ||
            exp.description.toLowerCase().includes(pattern)) {
          results.push(`experience: ${exp.role} @ ${exp.company}`);
        }
      });

      // Search in education
      portfolioData.education.forEach(edu => {
        if (edu.degree.toLowerCase().includes(pattern) ||
            edu.institution.toLowerCase().includes(pattern)) {
          results.push(`education: ${edu.degree} — ${edu.institution}`);
        }
      });

      return {
        output: results.length > 0 ? results : [`No matches found for '${term}'`]
      };
    },

    clear: () => {
      setHistory([]);
      return { output: [] };
    },

    sudo: () => ({
      output: ["🔒 Permission denied: this incident will NOT be reported. Nice try 😄"]
    }),

    exit: () => {
      setIsVisible(false);
      return { output: ["Goodbye! Thanks for exploring my portfolio!"] };
    }
  };

  // Levenshtein distance for "did you mean" suggestions
  const distance = (a, b) => {
    const m = [];
    for (let i = 0; i <= b.length; i++) m[i] = [i];
    for (let j = 0; j <= a.length; j++) m[0][j] = j;
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        m[i][j] = b[i - 1] === a[j - 1]
          ? m[i - 1][j - 1]
          : Math.min(m[i - 1][j - 1], m[i][j - 1], m[i - 1][j]) + 1;
      }
    }
    return m[b.length][a.length];
  };

  const suggestCommand = (name) => {
    const names = [...Object.keys(commands), ...Object.keys(aliasMap)];
    let best = null;
    let bestD = Infinity;
    names.forEach(n => {
      const d = distance(name, n);
      if (d < bestD) { bestD = d; best = n; }
    });
    return bestD <= 2 ? best : null;
  };

  const executeCommand = (input) => {
    const raw = input.trim();
    const parts = raw.split(/\s+/);
    const rawCommand = parts[0] || '';
    const command = rawCommand.toLowerCase(); // case-insensitive
    const args = parts.slice(1);
    const name = aliasMap[command] || command;

    const historyEntry = {
      command: input,
      output: []
    };

    if (command === '') {
      historyEntry.output = [''];
    } else if (commands[name]) {
      const result = commands[name](args);
      if (result.output) {
        historyEntry.output = result.output;
      }
    } else {
      const suggestion = suggestCommand(command);
      historyEntry.output = [
        `Command not found: ${rawCommand}.`,
        ...(suggestion ? [`Did you mean '${suggestion}'?`] : []),
        "Type 'help' for available commands."
      ];
    }

    setHistory(prev => [...prev, historyEntry]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentInput.trim()) {
      executeCommand(currentInput);
      setCmdHistory(prev => [...prev, currentInput.trim()]);
      setHistoryIndex(-1);
      setCurrentInput('');
    }
  };

  const handleKeyDown = (e) => {
    // Recall previous commands
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const idx = historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(idx);
      setCurrentInput(cmdHistory[idx]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const idx = historyIndex + 1;
      if (idx >= cmdHistory.length) {
        setHistoryIndex(-1);
        setCurrentInput('');
      } else {
        setHistoryIndex(idx);
        setCurrentInput(cmdHistory[idx]);
      }
    } else if (e.key === 'Tab') {
      // Autocomplete the command name
      e.preventDefault();
      const typed = currentInput.trim().toLowerCase();
      if (!typed || typed.includes(' ')) return;
      const names = [...Object.keys(commands), ...Object.keys(aliasMap)];
      const matches = names.filter(n => n.startsWith(typed));
      if (matches.length === 1) {
        setCurrentInput(matches[0] + ' ');
      } else if (matches.length > 1) {
        setHistory(prev => [...prev, {
          command: `${typed} (tab)`,
          output: [matches.sort().join('    ')]
        }]);
      }
    } else if (e.key === 'Escape') {
      setIsVisible(false);
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
            "Commands are case-insensitive. Tab autocompletes, ↑/↓ recall history.",
            "Type 'help' to see everything.  Try: whoami · ls · cat about.txt · grep react",
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
      <div
        className="terminal-toggle"
        onClick={toggleTerminal}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleTerminal(); } }}
        role="button"
        tabIndex={0}
        aria-label={isVisible ? "Close interactive terminal" : "Open interactive terminal"}
        aria-pressed={isVisible}
        title="Interactive terminal"
      >
        <span className="terminal-toggle-icon">💻</span>
      </div>

      {/* Terminal Window */}
      {isVisible && (
        <div className="terminal-overlay">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span
                  className="terminal-button close"
                  onClick={() => setIsVisible(false)}
                  role="button"
                  tabIndex={0}
                  aria-label="Close terminal"
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setIsVisible(false); } }}
                ></span>
                <span className="terminal-button minimize"></span>
                <span className="terminal-button maximize"></span>
              </div>
              <div className="terminal-title">amit@portfolio:~</div>
            </div>

            <div className="terminal-body" ref={terminalRef} onClick={() => inputRef.current && inputRef.current.focus()}>
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
                  onKeyDown={handleKeyDown}
                  className="terminal-input-field"
                  placeholder="Type a command...  (try 'help')"
                  autoComplete="off"
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                  aria-label="Terminal command input"
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
