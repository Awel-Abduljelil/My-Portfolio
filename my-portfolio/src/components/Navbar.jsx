import { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/ctf-journey", label: "CTF Journey" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block font-mono text-sm px-3.5 py-2 rounded-lg transition-colors duration-200 ${
      isActive
        ? "bg-accent/10 text-accent"
        : "text-text-secondary hover:bg-accent/10 hover:text-accent"
    }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-bg-deep/85 border-b border-border-soft">
      <div className="flex items-center justify-between px-5 sm:px-8 py-3 gap-3">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/image/logo.png"
            alt="Awel Abduljelil logo"
            className="w-11 h-11 rounded-full border-2 border-border-soft object-cover"
          />
          <span className="font-mono font-bold text-text-primary hidden sm:inline">
            Awel<span className="text-accent">.</span>sec
          </span>
        </NavLink>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden flex flex-col justify-center gap-1.5 p-2"
          >
            <span
              className={`block w-6 h-0.5 bg-text-primary rounded transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-text-primary rounded transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-text-primary rounded transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* nav links */}
      <nav
        className={`md:flex md:justify-center border-t border-border-soft md:border-t-0 overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-96" : "max-h-0 md:max-h-none"
        }`}
      >
        <ul className="flex flex-col md:flex-row md:gap-1 px-5 py-3 md:py-2 gap-1">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
