import PageTitle from '../components/PageTitle.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import { skills } from '../data/skills.js'

const focus = [
  { title: 'Build', text: 'Responsive interfaces with React and Tailwind CSS that feel good on every screen.' },
  { title: 'Connect', text: 'Servers, REST APIs and databases that power the apps behind the interface.' },
  { title: 'Care', text: 'Accessible details like alt text, readable colors and full keyboard support.' },
]

export default function About() {
  return (
    <section>
      <PageTitle title="About" />
      <PageHeader eyebrow="About" title="A bit about" accent="me" />

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="space-y-4 text-lg text-slate-400">
            <p>
              I&apos;m Ghiro, a student learning full stack web development. I started with HTML, CSS
              and JavaScript, and now build multi-page apps with React and Node.js, using Git and
              GitHub to track my work.
            </p>
            <p>
              I care about websites that work on every screen size and for every user, so I build
              mobile-first with Tailwind CSS and follow accessibility basics such as meaningful alt
              text, readable colors and full keyboard support.
            </p>
          </div>
        </Reveal>
        <div className="space-y-4">
          {focus.map(({ title, text }, i) => (
            <Reveal key={title} delay={i * 120}>
              <div className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-indigo-500/50">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 font-display font-bold text-indigo-300 ring-1 ring-indigo-500/20">0{i + 1}</span>
                <div>
                  <h2 className="text-lg font-semibold text-white">{title}</h2>
                  <p className="mt-1 text-slate-400">{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mt-16">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Skills</h2>
      </Reveal>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {skills.map(({ group, items }, i) => (
          <Reveal key={group} delay={i * 100}>
            <div className="h-full rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-indigo-500/50">
              <h3 className="font-display font-semibold text-white">{group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <li key={item} className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-300 ring-1 ring-indigo-500/20">{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
