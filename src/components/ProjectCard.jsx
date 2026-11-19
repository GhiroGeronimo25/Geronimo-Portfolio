export default function ProjectCard({ title, description, image, imageAlt, tags = [], repoUrl, liveUrl }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-indigo-500/50">
      <div className="overflow-hidden border-b border-slate-800">
        <img src={image} alt={imageAlt} loading="lazy" className="aspect-video w-full object-cover object-top transition duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="mt-2 text-slate-400">{description}</p>
        {tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Technologies used in ${title}`}>
            {tags.map((tag) => (
              <li key={tag} className="rounded-full bg-indigo-500/10 ring-1 ring-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-300">{tag}</li>
            ))}
          </ul>
        )}
        {(repoUrl || liveUrl) && (
          <div className="mt-auto flex flex-wrap gap-3 pt-5">
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
