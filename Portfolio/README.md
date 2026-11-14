# Ghiro A. Geronimo | Portfolio

Responsive portfolio built with React, React Router and Tailwind CSS (Vite).

## Run locally
```bash
npm install
npm run dev
```

## Pages
`/` Home, `/about` About, `/projects` Projects, `/contact` Contact, any other URL shows the 404 page.

## Add a project
Add an object to `src/data/projects.js` and put its screenshot in `public/images/`.

## Deploy (Render)
1. Push the project to GitHub (main branch).
2. On render.com choose New > Static Site and connect the repo.
3. Build command: `npm install && npm run build`. Publish directory: `dist`.
4. Under Redirects/Rewrites add a rule: source `/*`, destination `/index.html`, action **Rewrite**.
   (`render.yaml` already contains this rule if you deploy with a Blueprint.)

The rewrite rule is what makes opening or refreshing `/about` work instead of showing a 404.
