import { useTheme } from "../context/ThemeContext.jsx";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      aria-pressed={theme === "dark"}
      title="Toggle theme"
      className="relative w-10 h-10 rounded-full border border-border-soft bg-bg-panel
                 text-accent flex items-center justify-center cursor-pointer
                 transition-all duration-200 hover:-translate-y-0.5
                 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
    >
      <i
        className={`fa-solid fa-sun absolute text-base transition-all duration-300 ${
          theme === "light" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
        }`}
      />
      <i
        className={`fa-solid fa-moon absolute text-base transition-all duration-300 ${
          theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"
        }`}
      />
    </button>
  );
}
