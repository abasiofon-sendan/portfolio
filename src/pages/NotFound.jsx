import { Link } from 'react-router-dom'
import Seo from '@/components/Seo'
import { site } from '@/data/site.js'

export default function NotFound() {
  return (
    <>
      <Seo title={`404 — Page not found — ${site.name}`} description="The page you are looking for does not exist." pathname="/404" />
      <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 text-center md:px-6">
        <p className="font-mono text-sm text-ink-text-2">404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-ink-text-1">Page not found</h1>
        <p className="mt-3 text-ink-text-2">The page you are looking for does not exist or has moved.</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90"
        >
          Back home
        </Link>
      </section>
    </>
  )
}
