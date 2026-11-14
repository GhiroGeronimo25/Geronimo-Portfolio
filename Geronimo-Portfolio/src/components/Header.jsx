import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { profile } from '../data/profile.js'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

const linkClass = ({ isActive }) =>
  `block rounded-md px-3 py-2 text-base font-medium transition-colors ${
    isActive ? 'bg-brand-100 text-brand-800' : 'text-slate-700 hover:bg-slate-100'
  }`

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" onClick={close} className="text-lg font-bold text-brand-700">
          {profile.name}
        </Link>

        <button
          type="button"
          className="rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>

        <nav id="main-nav" aria-label="Main" className={`${open ? 'block' : 'hidden'} absolute left-0 top-full w-full border-b border-slate-200 bg-white px-4 pb-3 md:static md:block md:w-auto md:border-0 md:bg-transparent md:p-0`}>
          <ul className="flex flex-col gap-1 md:flex-row md:gap-2">
            {links.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink to={to} end={end} onClick={close} className={linkClass}>{label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
