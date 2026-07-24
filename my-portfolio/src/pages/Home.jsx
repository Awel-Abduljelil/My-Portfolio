import { Link } from "react-router-dom";
import Terminal from "../components/Terminal.jsx";
import PageWrapper from "../components/PageWrapper.jsx";
import useTypingEffect from "../hooks/useTypingEffect.js";

const phrases = [
  "Penetration Tester",
  "Software Engineer",
  "Bug Bounty Hunter",
  "CTF Player",
  "Web Security Researcher",
];

export default function Home() {
  const typed = useTypingEffect(phrases);

  return (
    <PageWrapper className="flex items-center justify-center">
      <section className="relative w-full max-w-5xl rounded-2xl border border-border-soft bg-gradient-to-br from-bg-panel to-bg-panel-2 p-8 sm:p-11 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.06) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
            maskImage:
              "radial-gradient(circle at 30% 30%, black, transparent 75%)",
          }}
        />

        <div className="relative z-10 flex flex-wrap items-center gap-11">
          <div className="flex-1 min-w-[260px]">
            <p className="inline-flex items-center gap-2 font-mono text-xs text-green bg-green/10 border border-green/30 px-3 py-1.5 rounded-full mb-4">
              <span className="status-dot" /> Available for security work
            </p>
            <p className="text-text-secondary font-medium mb-1.5">Hey there, I'm</p>
            <h1 className="font-mono font-extrabold text-3xl sm:text-4xl leading-tight text-text-primary">
              <span className="text-accent">Awel</span> Abduljelil
            </h1>
            <hr className="border-t-[3px] border-accent rounded w-16 my-4 shadow-[0_0_10px_rgba(34,211,238,0.4)]" />
            <p className="font-mono text-accent/90 text-lg mb-7 min-h-[28px]">
              {typed}
              <span className="cursor-blink">|</span>
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/projects" className="btn-primary">
                View Projects
              </Link>
              <Link to="/contact" className="btn-outline">
                Contact Me
              </Link>
            </div>
          </div>

          <Terminal />
        </div>
      </section>
    </PageWrapper>
  );
}
