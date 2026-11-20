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
    <footer className="relative border-t border-slate-800 bg-slate-950">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />
      <div className="mx-auto flex max-w-[2800px] flex-col items-center gap-5 px-4 py-6 sm:px-6 lg:flex-row lg:justify-between lg:px-16">
        <Link to="/" className="inline-flex items-center gap-3 font-display font-bold text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-xs">GG</span>
          {profile.name}
        </Link>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {pages.map(({ to, label }) => (
              <li key={to}><Link to={to} className="text-slate-400 transition hover:text-white">{label}</Link></li>
            ))}
          </ul>
        </nav>

        <ul className="flex items-center gap-2">
          {socials.map(({ label, href, Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                aria-label={external ? `${label} (opens in a new tab)` : label}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 ring-1 ring-slate-800 transition hover:bg-slate-900 hover:text-indigo-300 hover:ring-indigo-500/50"
              >
                <Icon width={18} height={18} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-slate-800/80">
        <div className="mx-auto flex max-w-[2800px] items-center justify-between gap-4 px-4 py-3 text-xs text-slate-500 sm:px-6 lg:px-16">
          <p>&copy; {new Date().getFullYear()} {profile.name}. Built with React and Tailwind CSS.</p>
          <a href="#content" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="inline-flex shrink-0 items-center gap-1.5 transition hover:text-white">
            Back to top <ArrowUp width={14} height={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
