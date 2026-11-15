import PageTitle from '../components/PageTitle.jsx'
import { skills } from '../data/skills.js'

export default function About() {
  return (
    <section>
      <PageTitle title="About" />
      <h1 className="text-3xl font-bold text-white sm:text-4xl">About me</h1>
      <div className="mt-5 max-w-3xl space-y-4 text-lg text-slate-400">
        <p>
          I&apos;m Ghiro, a student learning full stack web development. I started with HTML, CSS
          and JavaScript, and now build multi-page apps with React and Node.js, using Git and GitHub to
          track my work.
        </p>
        <p>
          I care about websites that work on every screen size and for every user, so I build
          mobile-first with Tailwind CSS and follow accessibility basics such as meaningful alt
          text, readable colors and full keyboard support.
        </p>
      </div>

      <h2 className="mt-12 text-2xl font-semibold text-white">Skills</h2>
      <div className="mt-5 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {skills.map(({ group, items }) => (
          <div key={group} className="rounded-xl border border-slate-800 p-5">
            <h3 className="font-semibold text-white">{group}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {items.map((item) => (
                <li key={item} className="rounded-full bg-indigo-500/10 ring-1 ring-indigo-500/20 px-3 py-1 text-sm font-medium text-indigo-300">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
