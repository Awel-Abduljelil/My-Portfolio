import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper.jsx";

export default function About() {
  return (
    <PageWrapper>
      <section className="max-w-4xl mx-auto rounded-2xl border border-border-soft bg-gradient-to-br from-bg-panel to-bg-panel-2 p-8 sm:p-11">
        <div className="flex flex-wrap gap-9 items-center justify-center">
          <div className="relative shrink-0">
            <img
              src="/image/profile.jpg"
              alt="Awel Abduljelil"
              className="w-44 h-44 rounded-full object-cover border-4 border-accent shadow-[0_0_0_1px_rgba(34,211,238,0.25),0_0_24px_rgba(34,211,238,0.12)]"
            />
            <span className="absolute bottom-1.5 right-1.5 w-10 h-10 rounded-full bg-accent text-[#04121a] flex items-center justify-center border-4 border-bg-panel">
              <i className="fa-solid fa-shield-halved" />
            </span>
          </div>

          <div className="flex-1 min-w-[240px]">
            <p className="eyebrow mb-1">// about</p>
            <h2 className="section-title mb-4">About Me</h2>

            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              I'm <span className="text-accent font-bold">Awel Abduljelil</span>, a{" "}
              <span className="text-accent font-bold">Software Engineering</span>{" "}
              student at{" "}
              <abbr title="Adama Science and Technology University" className="no-underline font-semibold">
                ASTU
              </abbr>
              . My primary focus is cybersecurity — specifically vulnerability
              assessment, security testing, and risk analysis. I develop
              full-stack web applications as a foundation to understand system
              architecture and identify security gaps from both attacker and
              defender perspectives.
            </p>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              I actively participate in Capture The Flag competitions and
              conduct security research to deepen my expertise in threat
              modeling, exploitation techniques, and defensive strategies. My
              approach combines hands-on penetration testing with
              comprehensive vulnerability analysis to help organizations
              understand and mitigate security risks.
            </p>

            <div className="flex gap-3.5 mb-6">
              <a
                href="https://www.x.com/Aweljelil49555"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter/X"
                className="text-text-secondary hover:text-accent hover:-translate-y-0.5 transition-all text-xl p-2"
              >
                <i className="fa-brands fa-x-twitter" />
              </a>
              <a
                href="https://t.me/Awexaa"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="text-text-secondary hover:text-accent hover:-translate-y-0.5 transition-all text-xl p-2"
              >
                <i className="fa-brands fa-telegram" />
              </a>
              <a
                href="https://www.github.com/awexa-web"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-text-secondary hover:text-accent hover:-translate-y-0.5 transition-all text-xl p-2"
              >
                <i className="fa-brands fa-github" />
              </a>
            </div>

            <Link to="/contact" className="btn-outline">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
