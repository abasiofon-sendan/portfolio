import Seo from '@/components/Seo'
import Reveal from '@/components/Reveal'
import ProjectCard from '@/components/ProjectCard'
import { getWorkEntries, getApiEntries } from '@/content/index.js'

export default function WorkIndex() {
  const caseStudies = getWorkEntries()
  const apis = getApiEntries()

  return (
    <>
      <Seo title="Work — Abasiofon Sendan" description="Case studies and API projects built by Abasiofon Sendan." pathname="/work" />

      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <p className="font-mono text-xs text-ink-text-2">$ ls work</p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink-text-1">All projects</h1>
      </section>

      {caseStudies.length > 0 ? (
        <section className="mx-auto max-w-6xl px-6 py-10" aria-labelledby="case-studies-heading">
          <h2 id="case-studies-heading" className="font-display text-xl font-semibold text-ink-text-1">
            Case studies
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {caseStudies.map((entry, index) => (
              <Reveal key={entry.slug} delay={index * 0.05}>
                <ProjectCard entry={entry} />
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      {apis.length > 0 ? (
        <section className="mx-auto max-w-6xl px-6 py-10" aria-labelledby="apis-heading">
          <h2 id="apis-heading" className="font-display text-xl font-semibold text-ink-text-1">
            API projects
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {apis.map((entry, index) => (
              <Reveal key={entry.slug} delay={index * 0.05}>
                <ProjectCard entry={entry} />
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}
    </>
  )
}
