export default function ProjectCard({ title, description, image }) {
  return (
    <article className="card">
      <img src={image} alt={`${title} placeholder`} />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}
