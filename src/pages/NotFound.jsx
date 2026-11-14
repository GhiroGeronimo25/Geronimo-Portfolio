import { Link } from 'react-router-dom'
import PageTitle from '../components/PageTitle.jsx'

export default function NotFound() {
  return (
    <section className="py-10 text-center">
      <PageTitle title="Page not found" />
      <p className="text-6xl font-bold text-indigo-400">404</p>
      <h1 className="mt-4 text-3xl font-bold text-white">Page not found</h1>
      <p className="mt-3 text-lg text-slate-400">Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
      <Link to="/" className="btn btn-primary mt-8">Back to home</Link>
    </section>
  )
}
