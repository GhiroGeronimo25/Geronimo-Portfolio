import { Link } from 'react-router-dom'
import { profile } from '../data/profile.js'
import { MailIcon, GithubIcon, FacebookIcon, InstagramIcon, ArrowUp } from './icons.jsx'

const pages = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

const socials = [
  { label: 'Email', href: `mailto:${profile.email}`, Icon: MailIcon, external: false },
  { label: 'GitHub', href: profile.github, Icon: GithubIcon, external: true },
  { label: 'Facebook', href: profile.facebook, Icon: FacebookIcon, external: true },
  { label: 'Instagram', href: profile.instagram, Icon: InstagramIcon, external: true },
]

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-slate-800 bg-slate-950">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />
      <div className="mx-auto grid max-w-[2800px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr] lg:px-16">
        <div>
          <Link to="/" className="inline-flex items-center gap-3 font-display text-lg font-bold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-sm">GG</span>
            {profile.name}
          </Link>
          <p className="mt-4 max-w-sm text-slate-400">
            {profile.role} in training. I build responsive, accessible web apps with React and Node.js.
          </p>
          <a href={`mailto:${profile.email}`} className="mt-5 inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-indigo-400 hover:text-white">
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            Get in touch
          </a>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-base font-semibold text-white">Pages</h2>
          <ul className="mt-4 space-y-2.5">
            {pages.map(({ to, label }) => (
              <li key={to}><Link to={to} className="text-slate-400 transition hover:text-white">{label}</Link></li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-base font-semibold text-white">Find me on</h2>
          <ul className="mt-4 space-y-2.5">
            {socials.map(({ label, href, Icon, external }) => (
              <li key={label}>
                <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="group inline-flex items-center gap-3 text-slate-400 transition hover:text-white">
                  <Icon width={18} height={18} className="text-slate-500 transition group-hover:text-indigo-400" />
                  {label}
                  {external && <span className="sr-only"> (opens in a new tab)</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800/80">
        <div className="mx-auto flex max-w-[2800px] flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-slate-500 sm:flex-row sm:px-6 lg:px-16">
          <p>&copy; {new Date().getFullYear()} {profile.name}. Built with React and Tailwind CSS.</p>
          <a href="#content" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="inline-flex items-center gap-2 transition hover:text-white">
            Back to top <ArrowUp width={16} height={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
