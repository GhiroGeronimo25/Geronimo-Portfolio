import { useEffect, useState } from 'react'
import { profile } from '../data/profile.js'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Intro() {
  const [phase, setPhase] = useState(prefersReducedMotion() ? 'done' : 'show')

  useEffect(() => {
    if (phase === 'done') return undefined
    const leave = setTimeout(() => setPhase('leaving'), 2400)
    const finish = setTimeout(() => setPhase('done'), 3100)
    return () => { clearTimeout(leave); clearTimeout(finish) }
  }, [])

  useEffect(() => {
    document.body.style.overflow = phase === 'done' ? '' : 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [phase])

  if (phase === 'done') return null

  return (
    <div
      role="status"
      aria-label={`Loading ${profile.name}'s portfolio`}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 px-6 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.18,1)] ${phase === 'leaving' ? '-translate-y-full' : ''}`}
    >
      <div aria-hidden="true" className="absolute h-72 w-72 animate-pulse rounded-full bg-indigo-600/30 blur-3xl" />
      <div aria-hidden="true" className="relative flex h-20 w-20 animate-pop items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 font-display text-3xl font-bold text-white shadow-2xl shadow-indigo-500/40">
        GG
      </div>
      <p aria-hidden="true" className="relative mt-8 text-center font-display text-2xl font-bold text-white sm:text-5xl">
        {profile.name.split('').map((char, i) => (
          <span key={i} className="inline-block animate-fade-up" style={{ animationDelay: `${500 + i * 55}ms` }}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </p>
      <p aria-hidden="true" className="relative mt-3 animate-fade-up text-sm font-semibold uppercase tracking-widest text-indigo-300" style={{ animationDelay: '1500ms' }}>
        {profile.role}
      </p>
      <div aria-hidden="true" className="relative mt-10 h-1 w-48 overflow-hidden rounded-full bg-slate-800">
        <div className="h-full animate-load rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
      </div>
    </div>
  )
}
