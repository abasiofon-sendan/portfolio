import Seo from '@/components/Seo'
import Reveal from '@/components/Reveal'
import ProjectCard from '@/components/ProjectCard'
import StackChips from '@/components/StackChips'
import { site } from '@/data/site.js'
import { getFeaturedEntries } from '@/content/index.js'
import { ArrowRightIcon, DownloadIcon, CalendarIcon, MailIcon, CheckIcon } from '@/components/Icons'
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/BrandIcons'
import avatar from '@/assets/avatar.jpg'

const SOCIAL_PILLS = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  X: XIcon,
}

function HeroIllustration() {
  return (
    <svg viewBox="0 0 500 420" fill="none" aria-hidden="true" className="w-full max-w-lg mx-auto text-ink-text-2">
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glow-soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* subtle dot grid */}
      {Array.from({ length: 13 }, (_, row) =>
        Array.from({ length: 16 }, (_, col) => (
          <circle key={`${row}-${col}`} cx={col * 33 + 10} cy={row * 35 + 10} r="0.8" fill="currentColor" opacity="0.12" />
        ))
      )}

      {/* large isometric cube — top left */}
      <g stroke="currentColor" strokeWidth="1" opacity="0.5">
        {/* front face */}
        <path d="M120 140 L180 110 L180 180 L120 210 Z" />
        {/* top face */}
        <path d="M120 140 L180 110 L240 140 L180 170 Z" />
        {/* right face */}
        <path d="M180 180 L240 140 L240 210 L180 210 Z" />
      </g>

      {/* medium isometric cube — center right */}
      <g stroke="currentColor" strokeWidth="1" opacity="0.35">
        <path d="M300 160 L350 135 L350 195 L300 220 Z" />
        <path d="M300 160 L350 135 L400 160 L350 185 Z" />
        <path d="M350 195 L400 160 L400 220 L350 220 Z" />
      </g>

      {/* small isometric cube — bottom left */}
      <g stroke="currentColor" strokeWidth="1" opacity="0.4">
        <path d="M80 270 L120 250 L120 295 L80 315 Z" />
        <path d="M80 270 L120 250 L160 270 L120 290 Z" />
        <path d="M120 295 L160 270 L160 315 L120 315 Z" />
      </g>

      {/* tiny cube — mid right */}
      <g stroke="currentColor" strokeWidth="0.8" opacity="0.25">
        <path d="M380 280 L410 265 L410 300 L380 315 Z" />
        <path d="M380 280 L410 265 L440 280 L410 295 Z" />
        <path d="M410 300 L440 280 L440 315 L410 315 Z" />
      </g>

      {/* connecting lines between cube vertices */}
      <g stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 4" opacity="0.2">
        <line x1="240" y1="140" x2="300" y2="160" />
        <line x1="180" y1="210" x2="300" y2="220" />
        <line x1="160" y1="270" x2="300" y2="220" />
        <line x1="160" y1="315" x2="380" y2="300" />
        <line x1="400" y1="220" x2="380" y2="280" />
        <line x1="240" y1="210" x2="160" y2="270" />
      </g>

      {/* floating horizontal scan lines */}
      <g stroke="currentColor" strokeWidth="0.5" opacity="0.08">
        <line x1="40" y1="100" x2="460" y2="100" />
        <line x1="40" y1="200" x2="460" y2="200" />
        <line x1="40" y1="300" x2="460" y2="300" />
      </g>

      {/* glowing nodes at key vertices */}
      <g filter="url(#glow)" fill="currentColor">
        <circle cx="180" cy="110" r="3" opacity="0.7" />
        <circle cx="240" cy="140" r="2.5" opacity="0.5" />
        <circle cx="350" cy="135" r="3" opacity="0.6" />
        <circle cx="300" cy="220" r="2" opacity="0.4" />
        <circle cx="120" cy="250" r="2.5" opacity="0.5" />
        <circle cx="410" cy="265" r="2" opacity="0.35" />
      </g>

      {/* soft ambient glow orbs */}
      <circle cx="200" cy="180" r="40" fill="currentColor" opacity="0.03" filter="url(#glow-soft)" />
      <circle cx="360" cy="240" r="35" fill="currentColor" opacity="0.025" filter="url(#glow-soft)" />
    </svg>
  )
}

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

      {/* ─── SECTION 1: Hero ─── */}
      <section
        className="relative overflow-hidden border-b border-ink-border"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          {/* Left — copy */}
          <Reveal>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-ink-text-2">backend engineer</p>
            <h1 className="font-display text-4xl font-semibold leading-[1.1] text-ink-text-1 sm:text-5xl">
              APIs, databases &amp; distributed systems
              <span className="text-ink-text-2">.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-text-2 sm:text-lg">
              I'm {site.name}, a backend engineer passionate about designing robust APIs, database
              optimization, and shipping scalable systems that hold up under load.
            </p>

            {/* Social pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {site.socials
                .filter((s) => SOCIAL_PILLS[s.label])
                .map((s) => {
                  const Icon = SOCIAL_PILLS[s.label]
                  return (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-ink-border bg-ink-panel px-5 py-2.5 text-sm font-medium text-ink-text-2 transition-colors hover:border-ink-text-2 hover:text-ink-text-1"
                    >
                      <Icon size={16} />
                    </a>
                  )
                })}
            </div>
          </Reveal>

          {/* Right — geometric illustration */}
          <Reveal delay={0.1}>
            <HeroIllustration />
          </Reveal>
        </div>
      </section>

      {/* ─── SECTION 2: Bento Profile Grid ─── */}
      <section className="mx-auto max-w-6xl px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Identity cell */}
          <Reveal className="rounded-md border border-ink-border bg-ink-panel p-6 sm:col-span-1">
            <p className="font-mono text-xs text-ink-text-2">$ whoami</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink-text-1 sm:text-4xl">{site.name}</h2>
            <p className="mt-2 text-base text-ink-text-2 sm:text-lg">{site.role}</p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-ink-border px-3 py-1 text-xs text-ink-text-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink-text-1 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ink-text-1" />
              </span>
              {site.status}
            </p>
          </Reveal>

          {/* Avatar cell */}
          <Reveal delay={0.05} className="sm:row-span-2">
            <div className="relative h-full min-h-72 overflow-hidden rounded-md border border-ink-border sm:min-h-0">
              <img
                src={avatar}
                alt={`Portrait of ${site.name}`}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </Reveal>

          {/* Bio cell */}
          <Reveal delay={0.15} className="rounded-md border border-ink-border bg-ink-panel p-6">
            <p className="font-mono text-xs text-ink-text-2">$ echo bio</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-text-2">{site.description}</p>
          </Reveal>

          {/* Actions cell */}
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

        {/* Tech stack row */}
        <Reveal delay={0.25} className="mt-4 rounded-md border border-ink-border bg-ink-panel px-5 py-4">
          <StackChips stack={site.stack} />
        </Reveal>
      </section>

      {/* ─── Featured projects ─── */}
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

      {/* ─── Experience & Education ─── */}
      <section className="mx-auto max-w-6xl px-6 py-16" aria-labelledby="history-heading">
        <p className="font-mono text-xs text-ink-text-2">$ ls history</p>
        <h2 id="history-heading" className="mt-2 font-display text-2xl font-semibold text-ink-text-1">
          Experience & Education
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Reveal>
            <div id="experience" className="h-full scroll-mt-24 rounded-md border border-ink-border bg-ink-panel p-6">
              <h3 className="font-display text-lg font-semibold text-ink-text-1">Experience</h3>
              <ol className="mt-6">
                {site.experience.map((job) => (
                  <li key={`${job.company}-${job.period}`} className="relative border-l border-ink-border pb-8 pl-6 last:pb-0">
                    <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-ink-text-1" aria-hidden="true" />
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <div>
                        <p className="font-display text-base font-semibold text-ink-text-1">{job.role}</p>
                        <p className="mt-0.5 text-sm text-ink-text-2">{job.company}</p>
                      </div>
                      <p className="font-mono text-xs text-ink-text-2">{job.period}</p>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-ink-text-2">{job.summary}</p>
                    {job.stack?.length ? (
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {job.stack.map((tech) => (
                          <li
                            key={tech}
                            className="rounded-full border border-ink-border bg-ink-bg px-2.5 py-1 text-xs text-ink-text-2"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    ) : null}
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

      {/* ─── Certifications ─── */}
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

      {/* ─── Contact ─── */}
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
