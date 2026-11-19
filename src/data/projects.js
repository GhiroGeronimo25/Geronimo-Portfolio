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
    liveUrl: 'https://findit-project-7plm.onrender.com/',
  },
  {
    title: 'Personal Portfolio',
    description:
      'A responsive multi-page portfolio built with React, React Router and Tailwind CSS, with a mobile navigation menu, a custom 404 page and keyboard-friendly, accessible markup.',
    image: '/images/portfolio.png',
    imageAlt: 'Screenshot of the portfolio home page showing the name Ghiro A. Geronimo and the title Full Stack Developer',
    tags: ['React', 'React Router', 'Tailwind CSS', 'Vite'],
    repoUrl: 'https://github.com/GhiroGeronimo25/Geronimo-Portfolio',
    liveUrl: 'https://portfolio-uiiq.onrender.com/',
  },
  {
    title: 'Type Sprint',
    description:
      'A competitive typing app where players join shared rooms and race in real time, with keystroke progress calculated on the backend and broadcast live to the leaderboard.',
    image: '/images/typesprint.png',
    imageAlt: 'Screenshot of the Type Sprint home page showing race type and passage difficulty options, Quick match, Create room and Join room buttons, and a list of open rooms',
    tags: ['Node.js', 'Express.js', 'JavaScript', 'HTML', 'CSS', 'Socket.IO', 'Supabase', 'REST API', 'Render'],
    repoUrl: 'https://github.com/GhiroGeronimo25/Geronimo-Portfolio',
    liveUrl: 'https://type-sprint-53ke.onrender.com',
  },
]
