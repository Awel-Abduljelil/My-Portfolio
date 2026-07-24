export default function Footer() {
  return (
    <footer className="px-4 flex justify-center  gap-7  py-6 bg-bg-panel border-t border-border-soft  items-center text-center">
      
       
        <h4 className="font-mono text-lg text-text-primary">Awel Abduljelil</h4>
      
      
        <p className="font-mono text-sm text-text-muted">
          Software Engineer &amp; Penetration Tester
        </p>
        <div className="flex gap-4 my-2">
          <a
            href="https://www.x.com/Aweljelil49555"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter/X"
            className="text-text-muted hover:text-accent hover:-translate-y-0.5 transition-all"
          >
            <i className="fa-brands fa-x-twitter text-lg" />
          </a>
          <a
            href="https://t.me/Awexaa"
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
            className="text-text-muted hover:text-accent hover:-translate-y-0.5 transition-all"
          >
            <i className="fa-brands fa-telegram text-lg" />
          </a>
          <a
            href="https://www.github.com/awexa-web"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-text-muted hover:text-accent hover:-translate-y-0.5 transition-all"
          >
            <i className="fa-brands fa-github text-lg" />
          </a>
        </div>
        <p className="text-xs text-text-muted">
          &copy; 2026 Awel Abduljelil. All rights reserved.
        </p>
      
    </footer>
  );
}
