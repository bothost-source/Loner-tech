# LONER TECH — Portfolio (React)

## Run it locally
```bash
npm install
npm run dev
```
Opens at `http://localhost:5173`.

## Build for deployment
```bash
npm run build
```
This creates a `dist/` folder with the final static site — that's what gets deployed.

## Deploy to Render
1. Push this folder to a GitHub repo (can be a new repo, or a `portfolio` folder inside your existing `vortyx-pulse` repo).
2. Render → New → Static Site → connect the repo.
3. If it's in a subfolder, set **Root Directory** to that folder (e.g. `portfolio`).
4. **Build Command**: `npm install && npm run build`
5. **Publish Directory**: `dist`
6. Create — Render builds and deploys it automatically, and rebuilds on every push.

## Project structure
```
src/
├── main.jsx          entry point
├── App.jsx            assembles all sections
├── index.css           global tokens (colors, fonts, resets)
├── useReveal.js        scroll-reveal animation hook
└── components/
    ├── Header.jsx / .css
    ├── Hero.jsx / .css       ← the 3D hero image lives here
    ├── Skills.jsx / .css
    ├── Services.jsx / .css
    ├── About.jsx / .css
    ├── Contact.jsx / .css
    └── Footer.jsx / .css
```

Each component has its own CSS file, imported directly in that component.

## Changing the hero image
Open `src/components/Hero.jsx` and swap the `src` URL. The current image is
hotlinked from Unsplash (free to use, no attribution required) — for a more
reliable production setup, download it and place it in a `public/` folder
instead, then reference it as `/your-image.jpg`.

## Editing content
Skills: `src/components/Skills.jsx` — the `SKILLS` array.
Services: `src/components/Services.jsx` — the `SERVICES` array.
Contact info: `src/components/Contact.jsx`.
