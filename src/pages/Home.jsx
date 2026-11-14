import { Link } from 'react-router-dom'
import PageTitle from '../components/PageTitle.jsx'
import { profile } from '../data/profile.js'

const stack = ['React', 'JavaScript', 'Node.js', 'Tailwind CSS']

export default function Home() {
  return (
    <section className="relative py-8 sm:py-16">
      <PageTitle />
      <div aria-hidden="true" className="pointer-events-none absolute -top-8 right-0 h-72 w-72 rounded-full bg-indigo-600/30 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="relative">
        <p className="inline-block rounded-full bg-indigo-500/10 px-4 py-1.5 text-sm font-semibold text-indigo-300 ring-1 ring-indigo-500/30">
          {profile.role}
        </p>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl">
          I build responsive, accessible web apps from the interface to the server.
          I&apos;m a student developer who loves turning ideas into working products
          that look good and are easy for everyone to use.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Main technologies">
          {stack.map((t) => (
            <li key={t} className="rounded-md border border-slate-700 bg-slate-900 px-3 py-1 text-sm font-medium text-slate-300">{t}</li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/projects" className="btn btn-primary">See my projects</Link>
          <Link to="/contact" className="btn btn-secondary">Get in touch</Link>
        </div>
      </div>
    </section>
  )
}
