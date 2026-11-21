import PageTitle from '../components/PageTitle.jsx'
import PageHeader from '../components/PageHeader.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { ArrowUpRight, GithubIcon } from '../components/icons.jsx'
import { projects } from '../data/projects.js'
import { profile } from '../data/profile.js'

export default function Projects() {
  const [first, ...rest] = projects
  return (
    <section>
      <PageTitle title="Projects" />
      <PageHeader eyebrow="Projects" title="Things I've" accent="built" description="Things I've made while learning full stack development. Open the live site or the code for each one." />

      <div className="mt-10 space-y-6">
        {first && <Reveal><ProjectCard {...first} featured /></Reveal>}
        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.title} delay={i * 120} className="h-full"><ProjectCard {...project} /></Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mt-14">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-wrap items-center justify-between gap-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-indigo-500/50 sm:p-8"
        >
          <div aria-hidden="true" className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-indigo-600/20 blur-3xl transition group-hover:bg-indigo-600/30" />
          <div className="relative flex items-center gap-5">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-white ring-1 ring-slate-700"><GithubIcon width={28} height={28} /></span>
            <div>
              <p className="font-display text-xl font-semibold text-white">More code on GitHub</p>
              <p className="mt-1 text-slate-400">Smaller experiments and coursework live at {profile.githubLabel}.</p>
            </div>
          </div>
          <span className="relative inline-flex items-center gap-2 font-medium text-indigo-300 transition group-hover:text-white">
            Visit GitHub <ArrowUpRight width={18} height={18} />
            <span className="sr-only"> (opens in a new tab)</span>
          </span>
        </a>
      </Reveal>
    </section>
  )
}
