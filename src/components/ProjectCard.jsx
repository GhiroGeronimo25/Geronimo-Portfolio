import { ArrowUpRight } from './icons.jsx'

export default function ProjectCard({ title, description, image, imageAlt, tags = [], repoUrl, liveUrl, featured = false }) {
  return (
    <article className={`group relative flex h-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition duration-300 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-900/20 ${featured ? 'flex-col lg:flex-row' : 'flex-col'}`}>
      <div className={`relative flex items-center overflow-hidden bg-slate-950 ${featured ? 'p-4 sm:p-6 lg:w-[58%]' : 'border-b border-slate-800'}`}>
        <img src={image} alt={imageAlt} loading="lazy" className={`w-full transition duration-700 group-hover:scale-[1.02] ${featured ? 'rounded-xl border border-slate-700 object-cover object-top shadow-2xl shadow-black/50' : 'aspect-video object-cover object-top'}`} />
      </div>
      <div className={`flex flex-1 flex-col p-6 ${featured ? 'lg:justify-center lg:p-10' : ''}`}>
        {featured && <p className="mb-3 text-sm font-medium text-indigo-300">Featured project</p>}
        <h2 className={`font-bold text-white ${featured ? 'text-3xl sm:text-4xl' : 'text-xl'}`}>{title}</h2>
        <p className={`mt-3 leading-relaxed text-slate-400 ${featured ? 'text-lg' : ''}`}>{description}</p>
        {tags.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Technologies used in ${title}`}>
            {tags.map((tag) => (
              <li key={tag} className="rounded-md border border-slate-700/80 bg-slate-950/60 px-2.5 py-1 font-mono text-xs text-slate-300">{tag}</li>
            ))}
          </ul>
        )}
        {(repoUrl || liveUrl) && (
          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary gap-2">
                Live site <ArrowUpRight width={16} height={16} />
                <span className="sr-only"> for {title} (opens in a new tab)</span>
              </a>
            )}
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary gap-2">
                Source code <ArrowUpRight width={16} height={16} />
                <span className="sr-only"> for {title} (opens in a new tab)</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
