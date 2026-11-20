import { useState } from 'react'
import PageTitle from '../components/PageTitle.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import { MailIcon, GithubIcon, FacebookIcon, InstagramIcon, ArrowUpRight, CopyIcon, CheckIcon } from '../components/icons.jsx'
import { profile } from '../data/profile.js'

const socials = [
  { label: 'GitHub', value: profile.githubLabel, href: profile.github, Icon: GithubIcon },
  { label: 'Facebook', value: profile.facebookLabel, href: profile.facebook, Icon: FacebookIcon },
  { label: 'Instagram', value: profile.instagramLabel, href: profile.instagram, Icon: InstagramIcon },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch { /* clipboard blocked: the Send email link still works */ }
  }

  return (
    <section>
      <PageTitle title="Contact" />
      <PageHeader title="Contact" accent="me." description="Want to work together or just say hello? Email is the fastest way to reach me." />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="h-full">
          <div className="relative h-full overflow-hidden rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-600/25 via-slate-900 to-slate-900 p-6 sm:p-10">
            <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full bg-fuchsia-600/20 blur-3xl" />
            <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-200 ring-1 ring-indigo-400/30"><MailIcon width={24} height={24} /></span>
            <h2 className="relative mt-6 text-2xl font-bold text-white sm:text-3xl">Send me an email</h2>
            <p className="relative mt-2 max-w-md text-slate-300">Tell me about your project or opportunity.</p>
            <p className="relative mt-8 break-all font-mono text-lg text-white sm:text-xl">{profile.email}</p>
            <div className="relative mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="btn btn-primary gap-2">Send email <ArrowUpRight width={16} height={16} /></a>
              <button type="button" onClick={copyEmail} className="btn btn-secondary gap-2">
                {copied ? <CheckIcon width={16} height={16} className="text-emerald-400" /> : <CopyIcon width={16} height={16} />}
                {copied ? 'Copied' : 'Copy address'}
              </button>
              <span role="status" className="sr-only">{copied ? 'Email address copied' : ''}</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="h-full">
          <div className="h-full rounded-2xl border border-slate-800 bg-slate-900 p-2">
            <h2 className="px-4 pb-1 pt-4 font-display text-lg font-semibold text-white">Find me online</h2>
            <ul>
              {socials.map(({ label, value, href, Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-xl p-4 transition hover:bg-slate-800/70">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-slate-300 ring-1 ring-slate-700 transition group-hover:bg-indigo-500/15 group-hover:text-indigo-300 group-hover:ring-indigo-500/30"><Icon /></span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold text-white">{label}</span>
                      <span className="block truncate text-sm text-slate-400">{value}</span>
                    </span>
                    <ArrowUpRight className="shrink-0 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-300" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
