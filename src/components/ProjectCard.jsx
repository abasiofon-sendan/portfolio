import { Link } from 'react-router-dom'
import StackChips from './StackChips'
import { ArrowRightIcon, ArrowUpRightIcon } from './Icons'

function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-text-1 transition-colors hover:text-ink-text-2"
    >
      {children}
      <ArrowUpRightIcon size={14} />
    </a>
  )
}

function InternalLink({ to, children }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-text-1 transition-colors hover:text-ink-text-2"
    >
      {children}
      <ArrowRightIcon size={14} />
    </Link>
  )
}

export default function ProjectCard({ entry }) {
  const { frontmatter, slug } = entry
  const isApi = frontmatter.type === 'api'
  const detailHref = isApi ? `/apis/${slug}` : `/work/${slug}`
  const secondary = frontmatter.docsUrl
    ? { href: frontmatter.docsUrl, label: 'API docs' }
    : frontmatter.liveUrl
      ? { href: frontmatter.liveUrl, label: 'Live app' }
      : null

  return (
    <article className="flex flex-col gap-4 rounded-md border border-ink-border bg-ink-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink-text-2">
      <div className="flex flex-col gap-2">
        <h3 className="font-display text-lg font-semibold text-ink-text-1">{frontmatter.title}</h3>
        <p className="text-sm leading-relaxed text-ink-text-2">
          {isApi ? frontmatter.oneLiner : frontmatter.outcome}
        </p>
      </div>

      <StackChips stack={frontmatter.stack} />

      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
        <InternalLink to={detailHref}>View project</InternalLink>
        {secondary ? <ExternalLink href={secondary.href}>{secondary.label}</ExternalLink> : null}
      </div>
    </article>
  )
}