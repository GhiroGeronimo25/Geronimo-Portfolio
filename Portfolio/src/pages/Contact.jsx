import PageTitle from '../components/PageTitle.jsx'
import { profile } from '../data/profile.js'

export default function Contact() {
  return (
    <section>
      <PageTitle title="Contact" />
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Contact</h1>
      <p className="mt-3 max-w-2xl text-lg text-slate-600">
        Want to work together or just say hello? Reach out through any of these.
      </p>
      <ul className="mt-8 max-w-xl space-y-4">
        <li className="rounded-xl border border-slate-200 p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-600">Email</h2>
          <a href={`mailto:${profile.email}`} className="mt-1 block break-all text-lg font-medium text-brand-700 underline hover:text-brand-800">{profile.email}</a>
        </li>
        <li className="rounded-xl border border-slate-200 p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-600">GitHub</h2>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="mt-1 block break-all text-lg font-medium text-brand-700 underline hover:text-brand-800">
            {profile.githubLabel}<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
      </ul>
    </section>
  )
}
