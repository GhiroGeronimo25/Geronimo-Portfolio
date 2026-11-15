import { profile } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
      <div className="mx-auto flex max-w-[2800px] flex-col items-center justify-between gap-3 px-4 py-6 text-sm sm:flex-row sm:px-6 lg:px-16">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <ul className="flex gap-4">
          <li><a href={`mailto:${profile.email}`} className="underline hover:text-white">Email</a></li>
          <li><a href={profile.github} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">GitHub<span className="sr-only"> (opens in a new tab)</span></a></li>
                  <li><a href={profile.facebook} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Facebook<span className="sr-only"> (opens in a new tab)</span></a></li>
          <li><a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Instagram<span className="sr-only"> (opens in a new tab)</span></a></li>
        </ul>
      </div>
    </footer>
  )
}
