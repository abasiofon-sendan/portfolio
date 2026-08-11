import { useParams, Link } from 'react-router-dom'
import Seo from '@/components/Seo'
import Prose from '@/components/Prose'
import NotFound from './NotFound'
import { site } from '@/data/site.js'
import { getWorkEntries } from '@/content/index.js'
import { ArrowLeftIcon } from '@/components/Icons'

export default function WorkDetail() {
  const { slug } = useParams()
  const entry = getWorkEntries().find((item) => item.slug === slug)

  if (!entry) {
    return <NotFound />
  }

  const { frontmatter, Content } = entry
  const { title, outcome, role, stack, heroImage, heroImageAlt } = frontmatter

  return (
    <>
      <Seo
        title={`${title} — ${site.name}`}
        description={outcome}
        pathname={`/work/${slug}`}
        image={heroImage}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: title,
          description: outcome,
          author: { '@type': 'Person', name: site.name },
        }}
      />

      <article className="mx-auto max-w-3xl px-6 pt-16">
        <Link to="/work" className="inline-flex items-center gap-1.5 text-sm text-ink-text-2 transition-colors hover:text-ink-text-1">
          <ArrowLeftIcon size={14} />
          All projects
        </Link>

        <header className="mt-6">
          <h1 className="font-display text-3xl font-semibold text-ink-text-1 sm:text-4xl">{title}</h1>
          <p className="mt-3 text-lg text-ink-text-2">{outcome}</p>
          <dl className="mt-6 flex flex-wrap gap-6 border-t border-ink-border pt-6 text-sm">
            <div>
              <dt className="font-mono text-xs text-ink-text-2">Role</dt>
              <dd className="mt-1 text-ink-text-1">{role}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs text-ink-text-2">Stack</dt>
              <dd className="mt-1 text-ink-text-1">{stack.join(', ')}</dd>
            </div>
          </dl>
        </header>

        {heroImage ? (
          <img src={heroImage} alt={heroImageAlt || title} className="mt-8 w-full rounded-md border border-ink-border" />
        ) : null}

        <Prose>
          <Content />
        </Prose>
      </article>
    </>
  )
}
