import ProjectCard from '../components/ProjectCard.jsx'

const placeholder = 'https://placehold.co/400x240?text=Project'

const projects = [
  { title: 'Project One', description: 'A short one-line description of project one.', image: placeholder },
  { title: 'Project Two', description: 'A short one-line description of project two.', image: placeholder },
  { title: 'Project Three', description: 'A short one-line description of project three.', image: placeholder },
]

export default function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <div className="grid">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  )
}
