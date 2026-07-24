import PageWrapper from "../components/PageWrapper.jsx";

const categories = [
  {
    icon: "fa-solid fa-code",
    title: "Frontend",
    count: 5,
    highlight: false,
    tags: [
      ["fa-brands fa-html5", "HTML"],
      ["fa-brands fa-css3-alt", "CSS"],
      ["fa-brands fa-js", "JavaScript"],
      ["fa-brands fa-react", "React"],
      ["fa-solid fa-mobile-screen", "Responsive Design"],
    ],
  },
  {
    icon: "fa-solid fa-terminal",
    title: "Programming",
    count: 5,
    highlight: false,
    tags: [
      ["fa-brands fa-python", "Python"],
      ["fa-solid fa-c", "C++"],
      ["fa-solid fa-java", "Java (OOP)"],
      ["fa-solid fa-database", "MySQL"],
      ["fa-brands fa-node-js", "Node.js"],
    ],
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Cybersecurity",
    count: 5,
    highlight: true,
    tags: [
      ["fa-brands fa-linux", "Linux"],
      ["fa-solid fa-globe", "Web Security"],
      ["fa-solid fa-flag", "CTF Solving"],
      ["fa-solid fa-network-wired", "Networking"],
      ["fa-solid fa-user-secret", "Pentesting"],
    ],
  },
  {
    icon: "fa-solid fa-screwdriver-wrench",
    title: "Tools",
    count: 4,
    highlight: false,
    tags: [
      ["fa-brands fa-git-alt", "Git"],
      ["fa-brands fa-github", "GitHub"],
      ["fa-solid fa-laptop-code", "VS Code"],
      ["fa-solid fa-terminal", "Linux Terminal"],
    ],
  },
  {
    icon: "fa-solid fa-star",
    title: "Hobbies",
    count: 5,
    highlight: false,
    tags: [
      ["fa-solid fa-book", "Reading books"],
      ["fa-solid fa-futbol", "Football"],
      ["fa-solid fa-user-secret", "Ethical hacking"],
      ["fa-solid fa-lightbulb", "Learning new tech"],
      ["fa-solid fa-flag", "Solving challenges"],
    ],
  },
];

export default function Skills() {
  return (
    <PageWrapper>
      <p className="eyebrow text-center mb-1">// arsenal</p>
      <h2 className="section-title text-center mb-9 mx-auto">Skills &amp; Tools</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className={`card ${cat.highlight ? "border-accent shadow-[0_0_0_1px_rgba(34,211,238,0.25),0_0_24px_rgba(34,211,238,0.12)]" : ""}`}
          >
            <div className="flex items-center gap-3 mb-[18px]">
              <div className="w-[42px] h-[42px] rounded-[11px] bg-accent/10 text-accent flex items-center justify-center text-lg shrink-0">
                <i className={cat.icon} />
              </div>
              <h3 className="font-mono text-base text-text-primary flex-1">
                {cat.title}
              </h3>
              <span
                className={`font-mono text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                  cat.highlight
                    ? "text-accent bg-accent/10 border-accent/30"
                    : "text-text-muted bg-bg-panel border-border-soft"
                }`}
              >
                {cat.count}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.tags.map(([icon, label]) => (
                <span key={label} className="skill-tag">
                  <i className={`${icon} text-accent`} />
                  {label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
