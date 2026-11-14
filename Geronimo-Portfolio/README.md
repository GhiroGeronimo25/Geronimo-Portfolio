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

## Deploy (Vercel)
Import the GitHub repo on vercel.com. Vite settings are detected automatically.
`vercel.json` rewrites every URL to `index.html`, so refreshing `/about` works.
(On Netlify, `public/_redirects` does the same job.)
