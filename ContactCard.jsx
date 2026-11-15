export default function ContactCard({ label, value, href, external = true, children }) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-indigo-500/50"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-300 ring-1 ring-indigo-500/20 transition group-hover:bg-indigo-500/20">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
      </span>
      <span className="mt-5 text-sm font-semibold uppercase tracking-widest text-slate-400">{label}</span>
      <span className="mt-1 break-words font-display text-lg font-semibold text-white">{value}</span>
      <span className="mt-4 text-sm font-medium text-indigo-400 transition group-hover:translate-x-1">
        {external ? 'Open' : 'Send a message'} &rarr;
        {external && <span className="sr-only"> {label} (opens in a new tab)</span>}
      </span>
    </a>
  )
}
