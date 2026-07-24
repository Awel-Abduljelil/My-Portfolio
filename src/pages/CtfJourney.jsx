import PageWrapper from "../components/PageWrapper.jsx";

const milestones = [
  {
    icon: "fa-solid fa-trophy",
    title: "PicoCTF",
    desc: "Solved 100+ challenges covering cryptography, web exploitation, reverse engineering, and forensics. PicoCTF is where I really started to understand how security concepts connect.",
  },
  {
    icon: "fa-solid fa-house-lock",
    title: "TryHackMe",
    desc: "Completed many rooms across different paths — Linux fundamentals, web hacking, networking, and more. TryHackMe's guided approach helped me build a solid practical base.",
  },
  {
    icon: "fa-solid fa-flag",
    title: "CSEC_ASTU ENTRANCE CTF",
    desc: "Participated in the CSEC_ASTU ENTRANCE CTF competition. Competing under time pressure with real challenge categories pushed me to think faster and work smarter.",
  },
  {
    icon: "fa-solid fa-graduation-cap",
    title: "UNIVERSITY CTF",
    desc: "Took part in UNIVERSITY CTF and other university-level cybersecurity challenges — a great way to learn alongside peers and see how others approach the same problems.",
  },
];

const stats = [
  { number: "120", plus: "+", label: "PicoCTF Challenges" },
  { number: "10", plus: "+", label: "TryHackMe Rooms" },
  { number: "3", plus: "+", label: "CTF Competitions" },
];

export default function CtfJourney() {
  return (
    <PageWrapper>
      <p className="eyebrow text-center mb-1">// track record</p>
      <h2 className="section-title text-center mb-2 mx-auto">
        Cybersecurity Journey
      </h2>
      <p className="section-subtitle text-center mb-10">
        How I've been building my security skills, step by step.
      </p>

      <div className="grid gap-5 sm:grid-cols-2 max-w-5xl mx-auto mb-10">
        {milestones.map((m) => (
          <div key={m.title} className="card">
            <i className={`${m.icon} text-accent text-2xl mb-3 block`} />
            <h3 className="font-mono text-base text-text-primary mb-1.5">
              {m.title}
            </h3>
            <p className="text-sm text-text-secondary">{m.desc}</p>
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto rounded-2xl border border-border-soft bg-gradient-to-br from-bg-panel to-bg-panel-2 p-7 flex flex-wrap justify-center gap-10">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <span className="font-mono font-extrabold text-4xl text-accent">
              {s.number}
              <span className="text-amber text-2xl">{s.plus}</span>
            </span>
            <p className="text-sm text-text-secondary font-medium mt-1">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
