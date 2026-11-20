export default function PageHeader({ title, description }) {
  return (
    <header className="relative isolate overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 px-6 py-10 sm:px-10 sm:py-12">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-60 [background-image:linear-gradient(to_right,rgb(51_65_85/0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgb(51_65_85/0.35)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-24 -z-10 h-72 w-72 animate-float rounded-full bg-indigo-600/25 blur-3xl" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-indigo-500/60 via-fuchsia-500/30 to-transparent" />
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-12">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl xl:text-6xl">{title}</h1>
        {description && <p className="max-w-md text-lg leading-relaxed text-slate-400 md:text-right">{description}</p>}
      </div>
    </header>
  )
}
