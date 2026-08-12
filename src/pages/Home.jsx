import Seo from '@/components/Seo'
import Reveal from '@/components/Reveal'
import ProjectCard from '@/components/ProjectCard'
import StackChips from '@/components/StackChips'
import { site } from '@/data/site.js'
import { getFeaturedEntries } from '@/content/index.js'
import { ArrowRightIcon, DownloadIcon, CalendarIcon, MailIcon, CheckIcon } from '@/components/Icons'
import avatar from '@/assets/avatar.jpg'

export default function Home() {
  const featured = getFeaturedEntries()

  return (
    <>
      <Seo
        title={`${site.name} — ${site.role}`}
        description={site.description}
        pathname="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: site.name,
          jobTitle: site.role,
          email: `mailto:${site.email}`,
          url: site.url,
          sameAs: site.socials.map((s) => s.url),
        }}
      />

      {/* Bento hero: avatar centered, spanning two rows */}
      <section className="mx-auto max-w-6xl px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Identity cell */}
          <Reveal className="rounded-md border border-ink-border bg-ink-panel p-6 sm:col-span-1">
            <p className="font-mono text-xs text-ink-text-2">$ whoami</p>
            <h1 className="mt-3 font-display text-3xl font-semibold text-ink-text-1 sm:text-4xl">{site.name}</h1>
            <p className="mt-2 text-base text-ink-text-2 sm:text-lg">{site.role}</p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-ink-border px-3 py-1 text-xs text-ink-text-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink-text-1 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ink-text-1" />
              </span>
              {site.status}
            </p>
          </Reveal>

          {/* Avatar cell: fills the whole two-row column */}
          <Reveal delay={0.05} className="sm:row-span-2">
            <div className="relative h-full min-h-72 overflow-hidden rounded-md border border-ink-border sm:min-h-0">
              <img
                src={avatar}
                alt={`Portrait of ${site.name}`}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </Reveal>

          {/* Metrics cell */}
          <Reveal delay={0.1} className="rounded-md border border-ink-border bg-ink-panel p-6">
            <p className="font-mono text-xs text-ink-text-2">$ uptime</p>
            <dl className="mt-3 space-y-3">
              {site.metrics.map((metric) => (
                <div key={metric.label} className="flex items-baseline gap-2">
                  <dt className="sr-only">{metric.label}</dt>
                  <dd className="font-display text-2xl font-semibold text-ink-text-1">{metric.value}</dd>
                  <dd className="text-sm text-ink-text-2">{metric.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Tagline cell */}
          <Reveal delay={0.15} className="rounded-md border border-ink-border bg-ink-panel p-6">
            <p className="font-mono text-xs text-ink-text-2">$ echo bio</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-text-2">{site.description}</p>
          </Reveal>

          {/* Primary actions cell: both CTAs grouped together */}
          <Reveal delay={0.2} className="rounded-md border border-ink-border bg-ink-panel p-6">
            <div className="flex h-full flex-col justify-center gap-3">
              <a
                href={site.resumeUrl}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
              >
                <DownloadIcon size={16} />
                Request CV
              </a>
              <a
                href={site.calUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-ink-text-2 px-4 py-3 text-sm font-medium text-ink-text-1 transition-colors hover:border-ink-text-1"
              >
                <CalendarIcon size={16} />
                Book a call
              </a>
            </div>
          </Reveal>
        </div>

        {/* Stack strip */}
        <Reveal delay={0.25} className="mt-4 rounded-md border border-ink-border bg-ink-panel px-5 py-4">
          <StackChips stack={site.stack} />
        </Reveal>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-6xl px-6 py-16" aria-labelledby="featured-heading">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-xs text-ink-text-2">$ ls projects --featured</p>
            <h2 id="featured-heading" className="mt-2 font-display text-2xl font-semibold text-ink-text-1">
              Selected work
            </h2>
          </div>
          <a
            href="/work"
            className="hidden items-center gap-1.5 text-sm font-medium text-ink-text-2 transition-colors hover:text-ink-text-1 sm:inline-flex"
          >
            View all projects
            <ArrowRightIcon size={14} />
          </a>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {featured.map((entry, index) => (
            <Reveal key={entry.slug} delay={index * 0.05}>
              <ProjectCard entry={entry} />
            </Reveal>
          ))}
        </div>
        <a
          href="/work"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink-text-2 transition-colors hover:text-ink-text-1 sm:hidden"
        >
          View all projects
          <ArrowRightIcon size={14} />
        </a>
      </section>

      {/* Experience & Education, side by side */}
      <section className="mx-auto max-w-6xl px-6 py-16" aria-labelledby="history-heading">
        <p className="font-mono text-xs text-ink-text-2">$ ls history</p>
        <h2 id="history-heading" className="mt-2 font-display text-2xl font-semibold text-ink-text-1">
          Experience & Education
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Reveal>
            <div id="experience" className="h-full scroll-mt-24 rounded-md border border-ink-border bg-ink-panel p-6">
              <h3 className="font-display text-lg font-semibold text-ink-text-1">Experience</h3>
              <ol className="mt-6 space-y-6">
                {site.experience.map((job) => (
                  <li key={`${job.company}-${job.period}`} className="border-l border-ink-border pl-5">
                    <p className="font-display text-base font-semibold text-ink-text-1">{job.role}</p>
                    <p className="mt-0.5 text-sm text-ink-text-2">{job.company}</p>
                    <p className="mt-1 font-mono text-xs text-ink-text-2">{job.period}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-text-2">{job.summary}</p>
                    <ul className="mt-3 space-y-1.5">
                      {job.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-ink-text-2">
                          <CheckIcon size={15} className="mt-0.5 shrink-0 text-ink-text-1" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div id="education" className="h-full scroll-mt-24 rounded-md border border-ink-border bg-ink-panel p-6">
              <h3 className="font-display text-lg font-semibold text-ink-text-1">Education</h3>
              <ol className="mt-6 space-y-4">
                {site.education.map((item, index) => (
                  <li
                    key={`${item.degree}-${index}`}
                    className="rounded-md border border-ink-border bg-ink-bg p-4"
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="font-display text-base font-semibold text-ink-text-1">{item.degree}</p>
                        <p className="mt-0.5 text-sm text-ink-text-2">{item.school}</p>
                      </div>
                      {item.period ? <p className="font-mono text-xs text-ink-text-2">{item.period}</p> : null}
                    </div>
                    {item.courses?.length ? (
                      <div className="mt-4">
                        <p className="font-mono text-xs text-ink-text-2">Core courses</p>
                        <ul className="mt-2 flex flex-wrap gap-2">
                          {item.courses.map((course) => (
                            <li
                              key={course}
                              className="rounded border border-ink-border px-2 py-1 text-xs text-ink-text-2"
                            >
                              {course}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Certifications */}
      <section className="mx-auto max-w-6xl px-6 py-16" aria-labelledby="certs-heading">
        <p className="font-mono text-xs text-ink-text-2">$ ls certs</p>
        <h2 id="certs-heading" className="mt-2 font-display text-2xl font-semibold text-ink-text-1">
          Certifications
        </h2>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {site.certifications.map((cert, index) => (
            <Reveal key={`${cert.name}-${index}`} delay={index * 0.05}>
              <li className="flex items-start justify-between gap-4 rounded-md border border-ink-border bg-ink-panel p-5">
                <div>
                  <p className="flex items-center gap-2 font-display text-base font-semibold text-ink-text-1">
                    <CheckIcon size={16} />
                    {cert.name}
                  </p>
                  <p className="mt-1 text-sm text-ink-text-2">
                    {cert.issuer} · {cert.year}
                  </p>
                  {cert.description ? (
                    <p className="mt-2 text-sm leading-relaxed text-ink-text-2">{cert.description}</p>
                  ) : null}
                  {cert.tags?.length ? (
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {cert.tags.map((tag) => (
                        <li key={tag} className="rounded border border-ink-border px-2 py-0.5 text-xs text-ink-text-2">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
                {cert.url && cert.url !== '#' ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-ink-text-2 transition-colors hover:text-ink-text-1"
                  >
                    Verify
                  </a>
                ) : null}
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Contact: editorial band, unique layout */}
      <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
        <Reveal className="rounded-md border border-ink-border bg-ink-panel px-6 py-14 text-center sm:px-10">
          <p className="font-mono text-xs text-ink-text-2">$ ping me</p>
          <h2 className="mx-auto mt-4 max-w-xl font-display text-3xl font-semibold text-ink-text-1 sm:text-4xl">
            Let's build something that holds up.
          </h2>
          <p className="mt-4 text-sm text-ink-text-2">{site.bannerHeight}.</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-flex items-center gap-2 font-mono text-xl text-ink-text-1 underline decoration-ink-text-2 underline-offset-8 transition-colors hover:decoration-ink-text-1 sm:text-2xl"
          >
            <MailIcon size={22} />
            {site.email}
          </a>
          <div className="mt-10 flex justify-center">
            <a
              href={site.calUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
            >
              <CalendarIcon size={16} />
              Book a call
            </a>
          </div>
        </Reveal>
      </section>
    </>
  )
}