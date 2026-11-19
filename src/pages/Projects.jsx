import PageTitle from '../components/PageTitle.jsx'
import PageHeader from '../components/PageHeader.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { projects } from '../data/projects.js'
import { profile } from '../data/profile.js'

export default function Projects() {
  return (
    <section>
      <PageTitle title="Projects" />
      <PageHeader eyebrow="Projects" title="Things I've" accent="built" description="Things I've made while learning full stack development. Open the live site or the code for each one." />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 120} className="h-full"><ProjectCard {...project} /></Reveal>
        ))}
      </div>
      <Reveal className="mt-14">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-600/20 to-fuchsia-600/10 p-6 sm:p-8">
          <p className="max-w-xl text-lg text-slate-300">Want to see more? More of my code lives on GitHub.</p>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Visit my GitHub<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </Reveal>
    </section>
  )
}
