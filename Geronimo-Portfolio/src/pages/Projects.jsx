import PageTitle from '../components/PageTitle.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section>
      <PageTitle title="Projects" />
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Projects</h1>
      <p className="mt-3 max-w-2xl text-lg text-slate-600">Things I&apos;ve built while learning frontend development.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
