import { Link } from 'react-router-dom'
import Terminal from './Terminal'
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

function Stack({ stack }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {stack.map((item) => (
        <li key={item} className="rounded border border-ink-border px-2 py-0.5 font-mono text-xs text-ink-text-2">
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function ProjectCard({ entry }) {
  const { frontmatter, slug } = entry
  const isApi = frontmatter.type === 'api'

  return (
    <article className="flex flex-col gap-6 rounded-md border border-ink-border bg-ink-panel p-6 transition-colors hover:border-ink-text-2">
      {isApi ? (
        <Terminal
          title={slug}
          lines={[
            { prompt: true, text: `curl ${frontmatter.docsUrl?.replace(/^https?:\/\//, '') || slug}` },
            { text: '> 200 OK' },
            ...(frontmatter.endpoints?.[0]
              ? [
                  { text: `> ${frontmatter.endpoints[0].method} ${frontmatter.endpoints[0].path}` },
                  { text: `> ${frontmatter.endpoints[0].summary?.slice(0, 60) || ''}...` },
                ]
              : []),
          ]}
          className="w-full"
        />
      ) : null}

      <div className="flex flex-col gap-2">
        <h3 className="font-display text-lg font-semibold text-ink-text-1">{frontmatter.title}</h3>
        <p className="text-sm leading-relaxed text-ink-text-2">
          {isApi ? frontmatter.oneLiner : frontmatter.outcome}
        </p>
      </div>

      <Stack stack={frontmatter.stack} />

      <div className="mt-auto flex flex-wrap items-center gap-4">
        {isApi ? (
          <>
            <InternalLink to={`/apis/${slug}`}>Read the build story</InternalLink>
            {frontmatter.docsUrl ? (
              <ExternalLink href={frontmatter.docsUrl}>Swagger docs</ExternalLink>
            ) : null}
          </>
        ) : (
          <InternalLink to={`/work/${slug}`}>Read the build story</InternalLink>
        )}
      </div>
    </article>
  )
}
