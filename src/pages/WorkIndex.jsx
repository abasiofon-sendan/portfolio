import Seo from '@/components/Seo'
import Reveal from '@/components/Reveal'
import ProjectCard from '@/components/ProjectCard'
import { getAllEntries } from '@/content/index.js'

export default function WorkIndex() {
  const projects = getAllEntries()

  return (
    <>
      <Seo title="Work — Abasiofon Sendan" description="Case studies and API projects built by Abasiofon Sendan." pathname="/work" />

      <section className="mx-auto max-w-6xl px-4 pt-16 pb-10 md:px-6">
        <p className="font-mono text-xs text-ink-text-2">$ ls work</p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink-text-1">All projects</h1>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6" aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="sr-only">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((entry, index) => (
            <Reveal key={entry.slug} delay={index * 0.05}>
              <ProjectCard entry={entry} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
