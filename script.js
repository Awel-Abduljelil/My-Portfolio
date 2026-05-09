const typingEl = document.getElementById("typing-text");
const phrases = [
"Software Engineering Student",
"Web Developer",
"Cybersecurity Learner",
"CTF Player",
"Problem Solver",
];
let phraseIndex = 0,
charIndex = 0,
deleting = false;

function type() {
const current = phrases[phraseIndex];
if (!deleting) {
    typingEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
    deleting = true;
    setTimeout(type, 1600);
    return;
    }
} else {
    typingEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
    deleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    }
}
setTimeout(type, deleting ? 60 : 100);
}
type();

/* ---- Active nav highlight on scroll ---- */
const sections = document.querySelectorAll("section[id], body[id]");
const navLinks = document.querySelectorAll(".nav-link");

function highlightNav() {
let current = "";
sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 100) {
    current = section.getAttribute("id");
    }
});
navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
    link.classList.add("active");
    }
});
}
window.addEventListener("scroll", highlightNav);

/* ---- Scroll reveal ---- */
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
(entries) => {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
    }
    });
},
{ threshold: 0.12 },
);
revealEls.forEach((el) => observer.observe(el));

/* ---- Mobile nav toggle ---- */
const navToggle = document.getElementById("navToggle");
const navbarLinks = document.getElementById("navbarLinks");
navToggle.addEventListener("click", () => {
navbarLinks.classList.toggle("open");
navToggle.classList.toggle("active");
});
// close on link click
navLinks.forEach((link) => {
link.addEventListener("click", () => {
    navbarLinks.classList.remove("open");
    navToggle.classList.remove("active");
});
});

/* ---- Contact form validation ---- */
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("formSuccess");

function showError(id, msg) {
document.getElementById("err-" + id).textContent = msg;
}
function clearErrors() {
document
    .querySelectorAll(".form-error")
    .forEach((el) => (el.textContent = ""));
}

form.addEventListener("submit", (e) => {
e.preventDefault();
clearErrors();
successMsg.style.display = "none";

const firstName = form["first-name"].value.trim();
const lastName = form["last-name"].value.trim();
const email = form["email"].value.trim();
const message = form["message"].value.trim();
let valid = true;

if (!firstName) {
    showError("first-name", "First name is required.");
    valid = false;
}
if (!lastName) {
    showError("last-name", "Last name is required.");
    valid = false;
}
if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError("email", "Please enter a valid email.");
    valid = false;
}
if (!message) {
    showError("message", "Message cannot be empty.");
    valid = false;
}

if (valid) {
    // In a real project: send to backend or FormSpree
    form.reset();
    successMsg.style.display = "block";
}
});
