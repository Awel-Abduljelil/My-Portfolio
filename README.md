# Awel Abduljelil — Portfolio (React + Tailwind + React Router)

## Setup
```bash
npm install
npm run dev
```
Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production
```bash
npm run build
```
Output goes to `dist/` — deploy that folder to GitHub Pages, Vercel, or Netlify.

## Add your images
Drop these into `public/image/`:
- `logo.png` — your circular logo (navbar, footer, favicon)
- `profile.jpg` — your About page photo

## Structure
- `src/pages/` — one file per route (Home, About, Skills, Projects, CtfJourney, Services, Contact)
- `src/components/` — Navbar, Footer, ThemeToggle, Terminal, PageWrapper
- `src/context/ThemeContext.jsx` — dark/light mode, persisted in localStorage
- Routing is handled by `react-router-dom` (`BrowserRouter` + `Routes`) in `src/App.jsx` — clicking a nav link swaps the page instantly, no reload.

## Deploying to GitHub Pages
1. `npm install -D gh-pages`
2. Add to `package.json`: `"homepage": "https://<username>.github.io/<repo>"` and a script `"deploy": "gh-pages -d dist"`
3. In `vite.config.js`, set `base: "/<repo-name>/"` inside `defineConfig({...})`
4. `npm run build && npm run deploy`
