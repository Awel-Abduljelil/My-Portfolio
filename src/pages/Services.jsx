import PageWrapper from "../components/PageWrapper.jsx";

const services = [
  {
    icon: "fa-solid fa-globe",
    title: "Web Development",
    desc: "Clean, responsive websites built with HTML, CSS, and JavaScript. I focus on simple, functional results that actually work on all devices.",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Security Awareness",
    desc: "Basic web security audits, identifying common vulnerabilities, and sharing what I've learned through CTF practice and research.",
  },
  {
    icon: "fa-solid fa-code",
    title: "Python Scripting",
    desc: "Small automation scripts, file processing tools, or utility programs. Nothing too complex, but practical and useful things I can actually build.",
  },
];

export default function Services() {
  return (
    <PageWrapper>
      <p className="eyebrow text-center mb-1">// what I offer</p>
      <h2 className="section-title text-center mb-2 mx-auto">Services</h2>
      <p className="section-subtitle text-center mb-10">
        What I can help with right now as a student developer.
      </p>

      <div className="flex flex-wrap justify-center gap-5 max-w-4xl mx-auto">
        {services.map((s) => (
          <div
            key={s.title}
            className="card text-center flex-1 min-w-[210px] max-w-[290px]"
          >
            <i className={`${s.icon} text-accent text-3xl mb-3.5 block`} />
            <h3 className="font-mono text-base text-text-primary mb-1.5">
              {s.title}
            </h3>
            <p className="text-sm text-text-secondary">{s.desc}</p>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
