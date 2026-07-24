import PageWrapper from "../components/PageWrapper.jsx";

const projects = [
  {
    icon: "fa-solid fa-user-circle",
    tag: "HTML / CSS / JS",
    title: "Personal Portfolio Website",
    desc: "The site you're looking at right now. Built from scratch, fully responsive, with smooth animations and a clean layout. Kept iterating on it as I learned more.",
    github: "https://github.com/awexa-web",
    demo: "#",
  },
  {
    icon: "fa-solid fa-lock",
    tag: "Python / MySQL",
    title: "Login & Auth System",
    desc: "A simple login system with user registration, hashed passwords, and basic session management. Built with Python and MySQL — helped me understand auth fundamentals properly.",
    github: "https://github.com/awexa-web/Login-Auth-System",
    demo: "https://github.com/awexa-web/Login-Auth-System",
  },
  {
    icon: "fa-solid fa-database",
    tag: "Node.js / MySQL",
    title: "Student Records System",
    desc: "A small CRUD application to manage student data — add, view, update, and delete records. Used Node.js for the backend and MySQL for storage. Good first backend project.",
    github: "https://github.com/awexa-web",
    demo: "#",
  },
  {
    icon: "fa-solid fa-shield-halved",
    tag: "HTML / CSS / JS",
    title: "Cybersecurity Dashboard UI",
    desc: "A concept dashboard UI for visualizing basic security data — open ports, alerts, system status. Frontend only, but it was a good exercise in layout and data presentation.",
    github: "https://github.com/awexa-web",
    demo: "#",
  },
  {
    icon: "fa-solid fa-flag",
    tag: "Python",
    title: "CTF Helper Scripts",
    desc: "Small Python scripts I wrote while doing CTFs — base64 decoders, ROT cipher tools, hex converters. Nothing fancy, but they saved a lot of time during competitions.",
    github: "https://github.com/awexa-web/CTF-helper-scripts",
    demo: "https://github.com/awexa-web/CTF-helper-scripts",
  },
  {
    icon: "fa-solid fa-mobile-screen",
    tag: "HTML / CSS",
    title: "Responsive Landing Pages",
    desc: "A few practice landing pages I built to get better at responsive layouts — flexbox, grid, media queries. Each one was a deliberate attempt to improve something specific.",
    github: "https://github.com/awexa-web",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <PageWrapper>
      <p className="eyebrow text-center mb-1">// builds</p>
      <h2 className="section-title text-center mb-2 mx-auto">Projects</h2>
      <p className="section-subtitle text-center mb-10">
        Things I've built while learning — each one taught me something real.
      </p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((p) => (
          <div key={p.title} className="card flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <i className={`${p.icon} text-accent text-2xl`} />
              <span className="font-mono text-[11px] font-semibold bg-accent/10 text-accent px-2.5 py-1 rounded-full">
                {p.tag}
              </span>
            </div>
            <h3 className="font-mono text-base text-text-primary">{p.title}</h3>
            <p className="text-sm text-text-secondary flex-1">{p.desc}</p>
            <div className="flex gap-2.5 flex-wrap mt-1.5">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="btn-outline !text-xs !px-3.5 !py-1.5"
              >
                <i className="fa-brands fa-github mr-1.5" /> GitHub
              </a>
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="btn-primary !text-xs !px-3.5 !py-1.5"
              >
                <i className="fa-solid fa-arrow-up-right-from-square mr-1.5" /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
