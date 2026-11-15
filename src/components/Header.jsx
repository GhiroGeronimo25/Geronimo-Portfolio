import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { profile } from '../data/profile.js'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

const desktopClass = ({ isActive }) =>
  `relative block rounded-full px-4 py-2 text-sm font-medium transition-colors after:absolute after:inset-x-4 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-indigo-400 after:transition-transform hover:after:scale-x-100 ${
    isActive ? 'bg-indigo-500/20 text-white' : 'text-slate-300 hover:text-white'
  }`

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.body.style.overflow = open ? 'hidden' : ''
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-6">
      <div className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-2 backdrop-blur-xl transition-all duration-300 ${scrolled ? 'border-slate-700 bg-slate-900/90 shadow-xl shadow-black/30' : 'border-slate-800/60 bg-slate-900/50'}`}>
        <Link to="/" className="group flex items-center gap-3 font-display text-lg font-bold text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-sm transition-transform duration-300 group-hover:rotate-12">GG</span>
          <span className="hidden sm:inline">{profile.name}</span>
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map(({ to, label, end }) => (
              <li key={to}><NavLink to={to} end={end} className={desktopClass}>{label}</NavLink></li>
            ))}
          </ul>
        </nav>

        <button type="button" className="relative z-50 rounded-lg p-2 text-slate-200 hover:bg-slate-800 md:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((o) => !o)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="fixed inset-0 -z-10 flex flex-col justify-center bg-slate-950/95 px-8 backdrop-blur-xl md:hidden">
          <ul className="space-y-2">
            {links.map(({ to, label, end }, i) => (
              <li key={to} className="animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                <NavLink to={to} end={end} className={({ isActive }) => `block py-3 font-display text-4xl font-bold ${isActive ? 'text-indigo-400' : 'text-white'}`}>{label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
