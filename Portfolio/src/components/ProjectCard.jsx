export default function ProjectCard({ title, description, image, imageAlt, tags = [], repoUrl, liveUrl }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <img src={image} alt={imageAlt} loading="lazy" className="aspect-video w-full border-b border-slate-200 object-cover object-top" />
      <div className="flex flex-1 flex-col p-5">
        <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
        <p className="mt-2 text-slate-600">{description}</p>
        {tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Technologies used in ${title}`}>
            {tags.map((tag) => (
              <li key={tag} className="rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-800">{tag}</li>
            ))}
          </ul>
        )}
        {(repoUrl || liveUrl) && (
          <div className="mt-5 flex flex-wrap gap-3">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Live site<span className="sr-only"> for {title} (opens in a new tab)</span>
              </a>
            )}
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                GitHub repo<span className="sr-only"> for {title} (opens in a new tab)</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
