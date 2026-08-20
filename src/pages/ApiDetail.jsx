import { useParams, Link } from 'react-router-dom'
import Seo from '@/components/Seo'
import Prose from '@/components/Prose'
import Terminal from '@/components/Terminal'
import StackChips from '@/components/StackChips'
import NotFound from './NotFound'
import { site } from '@/data/site.js'
import { getApiEntries } from '@/content/index.js'
import { ArrowLeftIcon, ArrowUpRightIcon } from '@/components/Icons'

export default function ApiDetail() {
  const { slug } = useParams()
  const entry = getApiEntries().find((item) => item.slug === slug)

  if (!entry) {
    return <NotFound />
  }

  const { frontmatter, Content } = entry
  const { title, oneLiner, outcome, role, stack, docsUrl, liveUrl, repoUrl, endpoints = [], heroImage, heroImageAlt } = frontmatter

  const firstEndpoint = endpoints[0]
  const terminalLines = [
    { prompt: true, text: `curl -X ${firstEndpoint?.method || 'GET'} ${docsUrl?.replace(/^https?:\/\//, '') || slug}` },
    { text: `> ${firstEndpoint?.method || 'GET'} ${firstEndpoint?.path || '/'} — 200 OK` },
    ...(firstEndpoint?.summary ? [{ text: `> ${firstEndpoint.summary}` }] : []),
  ]

  return (
    <>
      <Seo
        title={`${title} — ${site.name}`}
        description={oneLiner}
        pathname={`/apis/${slug}`}
        image={heroImage}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: title,
          description: oneLiner,
          applicationCategory: 'DeveloperApplication',
        }}
      />

      <article className="mx-auto max-w-3xl px-4 pt-16 md:px-6">
        <Link to="/work" className="inline-flex items-center gap-1.5 text-sm text-ink-text-2 transition-colors hover:text-ink-text-1">
          <ArrowLeftIcon size={14} />
          All projects
        </Link>

        <header className="mt-6">
          <h1 className="font-display text-3xl font-semibold text-ink-text-1 sm:text-4xl">{title}</h1>
          <p className="mt-3 text-lg text-ink-text-2">{outcome || oneLiner}</p>
          <dl className="mt-6 flex flex-wrap gap-6 border-t border-ink-border pt-6 text-sm">
            {role ? (
              <div>
                <dt className="font-mono text-xs text-ink-text-2">Role</dt>
                <dd className="mt-1 text-ink-text-1">{role}</dd>
              </div>
            ) : null}
            {stack?.length ? (
              <div>
                <dt className="font-mono text-xs text-ink-text-2">Stack</dt>
                <dd className="mt-1 text-ink-text-1">{stack.join(', ')}</dd>
              </div>
            ) : null}
          </dl>
        </header>

        <div className="mt-8">
          <Terminal title={slug} lines={terminalLines} typed />
        </div>

        {heroImage ? (
          <img src={heroImage} alt={heroImageAlt || title} className="mt-8 w-full rounded-md border border-ink-border" />
        ) : null}

        {endpoints.length > 0 ? (
          <section className="mt-10" aria-labelledby="endpoints-heading">
            <h2 id="endpoints-heading" className="font-display text-xl font-semibold text-ink-text-1">
              Signature endpoints
            </h2>
            <ul className="mt-4 divide-y divide-ink-border rounded-md border border-ink-border bg-ink-panel">
              {endpoints.map((endpoint) => (
                <li key={`${endpoint.method}-${endpoint.path}`} className="flex flex-col gap-1 px-4 py-4 sm:flex-row sm:items-center sm:gap-4">
                  <span
                    className={`w-14 shrink-0 rounded px-1.5 py-0.5 text-center font-mono text-xs font-medium ${
                      endpoint.method === 'GET' ? 'bg-ink-border text-ink-text-1' : 'bg-white text-black'
                    }`}
                  >
                    {endpoint.method}
                  </span>
                  <code className="font-mono text-sm text-ink-text-1">{endpoint.path}</code>
                  {endpoint.summary ? <span className="text-sm text-ink-text-2 sm:ml-auto">{endpoint.summary}</span> : null}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <div className="mt-10 flex flex-wrap items-center gap-4">
          {docsUrl ? (
            <a
              href={docsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
            >
              View API docs
              <ArrowUpRightIcon size={15} />
            </a>
          ) : null}
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-ink-text-2 px-5 py-3 text-sm font-medium text-ink-text-1 transition-colors hover:border-ink-text-1"
            >
              Live app
              <ArrowUpRightIcon size={15} />
            </a>
          ) : null}
          {repoUrl ? (
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-text-2 transition-colors hover:text-ink-text-1"
            >
              Source code
              <ArrowUpRightIcon size={14} />
            </a>
          ) : null}
        </div>

        <div className="mt-12">
          <h2 className="font-display text-xl font-semibold text-ink-text-1">Build story</h2>
          <div className="mt-4">
            <Prose>
              <Content />
            </Prose>
          </div>
        </div>

        <div className="mt-10">
          <StackChips stack={stack} />
        </div>
      </article>
    </>
  )
}