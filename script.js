// ============================================================
// THEME TOGGLE (dark / light) — persisted with localStorage
// ============================================================
(function themeToggle() {
  const toggleBtn = document.getElementById("themeToggle");
  const root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    if (toggleBtn) {
      toggleBtn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    }
  }

  // initial state already set inline in <head>, just sync button state
  const current = root.getAttribute("data-theme") || "dark";
  if (toggleBtn) toggleBtn.setAttribute("aria-pressed", current === "dark" ? "true" : "false");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
    });
  }
})();

// ============================================================
// MOBILE NAV TOGGLE
// ============================================================
(function navToggle() {
  const navToggleBtn = document.getElementById("navToggle");
  const navbarLinks = document.getElementById("navbarLinks");

  if (!navToggleBtn || !navbarLinks) return;

  navToggleBtn.addEventListener("click", () => {
    const isOpen = navbarLinks.classList.toggle("open");
    navToggleBtn.classList.toggle("active", isOpen);
    navToggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // close menu after clicking a link (mobile UX)
  navbarLinks.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navbarLinks.classList.remove("open");
      navToggleBtn.classList.remove("active");
      navToggleBtn.setAttribute("aria-expanded", "false");
    });
  });
})();

// ============================================================
// ACTIVE NAV LINK ON SCROLL
// ============================================================
(function activeNavOnScroll() {
  const sections = document.querySelectorAll("main section[id], body#home");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!navLinks.length) return;

  const sectionIds = ["home", "About", "skills", "projects", "ctf-journey", "services", "contact"];
  const sectionEls = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sectionEls.forEach((el) => observer.observe(el));
})();

// ============================================================
// TYPING EFFECT (hero tagline)
// ============================================================
(function typingEffect() {
  const el = document.getElementById("typing-text");
  if (!el) return;

  const phrases = [
    "Penetration Tester",
    "Software Engineer",
    "Bug Bounty Hunter",
    "CTF Player",
    "Web Security Researcher",
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = phrases[phraseIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }

    setTimeout(tick, deleting ? 40 : 75);
  }

  tick();
})();

// ============================================================
// SCROLL REVEAL ANIMATIONS
// ============================================================
(function scrollReveal() {
  const revealEls = document.querySelectorAll(".reveal");
  if (!revealEls.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => observer.observe(el));
})();

// ============================================================
// CONTACT FORM VALIDATION
// ============================================================
(function contactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const successMsg = document.getElementById("formSuccess");

  const fields = {
    "first-name": { errorId: "err-first-name", validate: (v) => v.trim().length > 0, message: "Please enter your first name." },
    "last-name": { errorId: "err-last-name", validate: (v) => v.trim().length > 0, message: "Please enter your last name." },
    "email": { errorId: "err-email", validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()), message: "Please enter a valid email address." },
    "message": { errorId: "err-message", validate: (v) => v.trim().length > 0, message: "Please write a short message." },
  };

  function validateField(id) {
    const config = fields[id];
    const input = document.getElementById(id);
    const errorEl = document.getElementById(config.errorId);
    if (!input || !errorEl) return true;

    const valid = config.validate(input.value);
    errorEl.textContent = valid ? "" : config.message;
    return valid;
  }

  Object.keys(fields).forEach((id) => {
    const input = document.getElementById(id);
    if (input) {
      input.addEventListener("blur", () => validateField(id));
      input.addEventListener("input", () => validateField(id));
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let allValid = true;
    Object.keys(fields).forEach((id) => {
      if (!validateField(id)) allValid = false;
    });

    if (allValid) {
      if (successMsg) {
        successMsg.classList.add("visible");
      }
      form.reset();
      setTimeout(() => {
        if (successMsg) successMsg.classList.remove("visible");
      }, 5000);
    }
  });
})();
