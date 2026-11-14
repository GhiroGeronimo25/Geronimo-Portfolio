// Add new projects here. Each one needs a title, description, image (in /public/images),
// an imageAlt, and optional tags, repoUrl and liveUrl. ProjectCard renders them all.
export const projects = [
  {
    title: 'FindIT',
    description:
      'A web-based lost and found platform for Gordon College where students and faculty browse and report lost and found items, with real-time updates and email notifications.',
    image: '/images/findit.png',
    imageAlt: 'Screenshot of the FindIT item reports page showing lost and found item cards such as a camera, a wallet, a phone and an umbrella, each with a status and a Request Claim button',
    tags: ['PostgreSQL', 'JavaScript', 'HTML', 'CSS', 'Brevo', 'Real-Time', 'Render'],
    repoUrl: 'https://github.com/GhiroGeronimo25/findit-project',
  },
  {
    title: 'Personal Portfolio',
    description:
      'A responsive multi-page portfolio built with React, React Router and Tailwind CSS, with a mobile navigation menu, a custom 404 page and keyboard-friendly, accessible markup.',
    image: '/images/portfolio.png',
    imageAlt: 'Screenshot of the portfolio home page showing the name Ghiro A. Geronimo and the title Full Stack Developer',
    tags: ['React', 'React Router', 'Tailwind CSS', 'Vite'],
    repoUrl: 'https://github.com/GhiroGeronimo25/Geronimo-Portfolio',
  },
]
