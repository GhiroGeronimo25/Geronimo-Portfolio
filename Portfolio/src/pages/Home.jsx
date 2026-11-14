import { Link } from 'react-router-dom'
import PageTitle from '../components/PageTitle.jsx'
import { profile } from '../data/profile.js'

export default function Home() {
  return (
    <section className="py-6 sm:py-12">
      <PageTitle />
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">{profile.role}</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        Hi, I&apos;m {profile.name}
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-slate-600">
        I build clean, responsive and accessible websites with React and Tailwind CSS.
        I&apos;m a student developer who loves turning ideas into working interfaces that
        look good and are easy for everyone to use.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/projects" className="btn btn-primary">See my projects</Link>
        <Link to="/contact" className="btn btn-secondary">Get in touch</Link>
      </div>
    </section>
  )
}
