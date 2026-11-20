import PageTitle from '../components/PageTitle.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import { LayersIcon, PlugIcon, EyeIcon, MailIcon, GithubIcon } from '../components/icons.jsx'
import { skills } from '../data/skills.js'
import { projects } from '../data/projects.js'
import { profile } from '../data/profile.js'

const focus = [
  { title: 'Build', Icon: LayersIcon, text: 'Responsive interfaces with React and Tailwind CSS that feel good on every screen.' },
  { title: 'Connect', Icon: PlugIcon, text: 'Servers, REST APIs and databases that power the apps behind the interface.' },
  { title: 'Care', Icon: EyeIcon, text: 'Accessible details like alt text, readable colors and full keyboard support.' },
]

export default function About() {
  return (
    <section>
      <PageTitle title="About" />
      <PageHeader title="About" accent="me." description="A student who enjoys turning ideas into working, accessible web apps." />

      <div className="mt-10 grid items-start gap-8 lg:grid-cols-[360px_1fr] xl:gap-12">
        <Reveal className="lg:sticky lg:top-28">
          <aside className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
            <div className="relative flex h-32 items-end bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-5">
              <div aria-hidden="true" className="absolute inset-0 opacity-30 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px]" />
              <span className="relative -mb-12 flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-slate-900 bg-slate-950 font-display text-2xl font-bold text-white">GG</span>
            </div>
            <div className="p-6 pt-14">
              <h2 className="text-2xl font-bold text-white">{profile.name}</h2>
              <p className="mt-1 text-slate-400">{profile.role} student</p>
              <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-800 pt-6">
                <div><dt className="text-sm text-slate-500">Projects</dt><dd className="mt-1 font-display text-2xl font-bold text-white">{projects.length}</dd></div>
                <div><dt className="text-sm text-slate-500">Technologies</dt><dd className="mt-1 font-display text-2xl font-bold text-white">{skills.reduce((n, g) => n + g.items.length, 0)}</dd></div>
              </dl>
              <div className="mt-6 flex gap-3">
                <a href={`mailto:${profile.email}`} className="btn btn-primary flex-1 gap-2"><MailIcon width={16} height={16} />Email me</a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" className="btn btn-secondary px-3"><GithubIcon width={18} height={18} /></a>
              </div>
            </div>
          </aside>
        </Reveal>

        <div className="min-w-0">
          <Reveal>
            <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-slate-400">
              <p className="text-xl text-slate-200 sm:text-2xl sm:leading-snug">
                I&apos;m Ghiro, a student learning full stack web development.
              </p>
              <p>
                I started with HTML, CSS and JavaScript, and now build multi-page apps with React and
                Node.js, using Git and GitHub to track my work.
              </p>
              <p>
                I care about websites that work on every screen size and for every user, so I build
                mobile-first with Tailwind CSS and follow accessibility basics such as meaningful alt
                text, readable colors and full keyboard support.
              </p>
            </div>
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {focus.map(({ title, text, Icon }, i) => (
              <li key={title}>
                <Reveal delay={i * 120} className="h-full">
                  <div className="h-full rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-indigo-500/50">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-300 ring-1 ring-indigo-500/20"><Icon /></span>
                    <h2 className="mt-4 text-lg font-semibold text-white">{title}</h2>
                    <p className="mt-1.5 text-slate-400">{text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal className="mt-14">
            <h2 className="text-3xl font-bold text-white">Skills</h2>
            <div className="mt-6 divide-y divide-slate-800 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
              {skills.map(({ group, items }) => (
                <div key={group} className="grid gap-3 p-5 sm:grid-cols-[200px_1fr] sm:items-center sm:gap-6 sm:p-6">
                  <h3 className="font-display font-semibold text-white">{group}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <li key={item} className="rounded-md border border-slate-700/80 bg-slate-950/60 px-3 py-1 font-mono text-sm text-slate-300">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
