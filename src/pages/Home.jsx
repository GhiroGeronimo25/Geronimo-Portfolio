import { Link } from 'react-router-dom'
import PageTitle from '../components/PageTitle.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import Reveal from '../components/Reveal.jsx'
import useTypewriter from '../components/useTypewriter.js'
import { profile } from '../data/profile.js'
import { skills } from '../data/skills.js'
import { projects } from '../data/projects.js'

const words = ['web apps.', 'REST APIs.', 'responsive interfaces.', 'full stack projects.']
const tech = skills.flatMap((g) => g.items)

export default function Home() {
  const typed = useTypewriter(words)

  return (
    <>
      <PageTitle />
      <section className="relative grid min-h-[75vh] items-center gap-12 py-8 lg:grid-cols-2">
        <div aria-hidden="true" className="pointer-events-none absolute -top-10 right-0 h-72 w-72 animate-float rounded-full bg-indigo-600/30 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-60 w-60 animate-float rounded-full bg-fuchsia-600/20 blur-3xl [animation-delay:-4s]" />
        <div className="relative">
          <p className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-indigo-300 ring-1 ring-indigo-500/30">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" aria-hidden="true" />
            {profile.role}
          </p>
          <h1 className="mt-6 text-[clamp(2.5rem,5.5vw,5rem)] font-bold leading-tight tracking-tight text-white">
            Hi, I&apos;m <br className="sm:hidden" />
            <span className="animate-gradient bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-indigo-400 bg-[length:200%_auto] bg-clip-text text-transparent">{profile.name}</span>
          </h1>
          <p className="sr-only">I build web apps, REST APIs and responsive interfaces.</p>
          <p aria-hidden="true" className="mt-5 min-h-[2.5rem] font-display text-2xl text-slate-300 sm:text-3xl">
            I build <span className="text-white">{typed}</span><span className="ml-0.5 inline-block h-6 w-0.5 translate-y-1 animate-blink bg-indigo-400" />
          </p>
          <p className="mt-6 max-w-2xl text-lg text-slate-400">
            A student developer who loves turning ideas into working products that look good and are easy for everyone to use.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/projects" className="btn btn-primary">See my projects</Link>
            <Link to="/contact" className="btn btn-secondary">Get in touch</Link>
          </div>
        </div>
        <div aria-hidden="true" className="relative hidden animate-float md:block">
          <div className="rounded-2xl border border-slate-700 bg-slate-900/80 shadow-2xl shadow-indigo-900/30 backdrop-blur">
            <div className="flex gap-2 border-b border-slate-800 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            </div>
            <div className="space-y-2 p-6 font-mono text-sm sm:text-base">
              <p><span className="text-fuchsia-400">const</span> <span className="text-indigo-300">developer</span> = {'{'}</p>
              <p className="pl-6">name: <span className="text-emerald-300">&quot;{profile.name}&quot;</span>,</p>
              <p className="pl-6">role: <span className="text-emerald-300">&quot;{profile.role}&quot;</span>,</p>
              <p className="pl-6">stack: <span className="text-emerald-300">[&quot;React&quot;, &quot;Node.js&quot;, &quot;PostgreSQL&quot;]</span>,</p>
              <p>{'}'}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-slate-800 py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <ul className="flex w-max animate-marquee hover:[animation-play-state:paused]" aria-label="Technologies I use">
          {[...tech, ...tech].map((t, i) => (
            <li key={i} aria-hidden={i >= tech.length} className="mr-3 rounded-md border border-slate-700 bg-slate-900 px-4 py-1.5 font-display text-sm font-medium text-slate-300">{t}</li>
          ))}
        </ul>
      </div>

      <section className="mt-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Featured projects</h2>
            <Link to="/projects" className="font-medium text-indigo-400 underline hover:text-indigo-300">View all projects</Link>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.slice(0, 2).map((project, i) => (
            <Reveal key={project.title} delay={i * 120}><ProjectCard {...project} /></Reveal>
          ))}
        </div>
      </section>

      <Reveal className="mt-20">
        <section className="rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-600/20 to-fuchsia-600/10 p-8 text-center sm:p-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Let&apos;s build something together</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">Have an idea, a project or an opportunity? I&apos;d love to hear about it.</p>
          <a href={`mailto:${profile.email}`} className="btn btn-primary mt-6">Email me</a>
        </section>
      </Reveal>
    </>
  )
}
