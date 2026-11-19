export default function PageHeader({ eyebrow, title, accent, description }) {
  return (
    <header className="relative">
      <div aria-hidden="true" className="pointer-events-none absolute -top-10 right-0 h-56 w-56 animate-float rounded-full bg-indigo-600/20 blur-3xl" />
      <p className="relative text-sm font-semibold uppercase tracking-widest text-indigo-400">{eyebrow}</p>
      <h1 className="relative mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl xl:text-6xl">
        {title}{' '}
        <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">{accent}</span>
      </h1>
      {description && <p className="relative mt-4 max-w-2xl text-lg text-slate-400">{description}</p>}
    </header>
  )
}
