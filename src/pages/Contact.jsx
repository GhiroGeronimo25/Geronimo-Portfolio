import PageTitle from '../components/PageTitle.jsx'
import PageHeader from '../components/PageHeader.jsx'
import ContactCard from '../components/ContactCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { profile } from '../data/profile.js'

export default function Contact() {
  return (
    <section>
      <PageTitle title="Contact" />
      <PageHeader eyebrow="Contact" title="Let's" accent="talk" description="Want to work together or just say hello? Reach out through any of these." />
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <li><Reveal className="h-full"><ContactCard label="Email" value={profile.email} href={`mailto:${profile.email}`} external={false}>
          <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
        </ContactCard></Reveal></li>
        <li><Reveal delay={100} className="h-full"><ContactCard label="GitHub" value={profile.githubLabel} href={profile.github}>
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" /><path d="M9 18c-4.51 2-5-2-7-2" />
        </ContactCard></Reveal></li>
        <li><Reveal delay={200} className="h-full"><ContactCard label="Facebook" value={profile.facebookLabel} href={profile.facebook}>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </ContactCard></Reveal></li>
        <li><Reveal delay={300} className="h-full"><ContactCard label="Instagram" value={profile.instagramLabel} href={profile.instagram}>
          <rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><path d="M17.5 6.5h.01" />
        </ContactCard></Reveal></li>
      </ul>
    </section>
  )
}
