export default function PageHeader({ title, accent, description }) {
  return (
    <header className="relative isolate overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 px-6 py-12 sm:px-10 sm:py-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-60 [background-image:linear-gradient(to_right,rgb(51_65_85/0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgb(51_65_85/0.35)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-24 -z-10 h-72 w-72 animate-float rounded-full bg-indigo-600/25 blur-3xl" />
      <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl xl:text-7xl">
        {title}
        {accent && <span className="block text-slate-500">{accent}</span>}
      </h1>
      {description && <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">{description}</p>}
    </header>
  )
}
