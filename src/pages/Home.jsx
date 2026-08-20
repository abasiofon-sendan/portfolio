import Seo from '@/components/Seo'
import Reveal from '@/components/Reveal'
import ProjectCard from '@/components/ProjectCard'
import StackChips from '@/components/StackChips'
import { site } from '@/data/site.js'
import { getFeaturedEntries } from '@/content/index.js'
import { ArrowRightIcon, DownloadIcon, CalendarIcon, MailIcon, CheckIcon } from '@/components/Icons'
import { IconServer, IconDatabase, IconLock, IconBolt } from '@tabler/icons-react'
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/BrandIcons'


const SOCIAL_PILLS = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  X: XIcon,
}

function HeroIllustration() {
  return (
    <svg viewBox="0 0 440 400" fill="none" aria-hidden="true" className="w-full max-w-md mx-auto text-ink-text-2">
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="node-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.08" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {/* faint grid lines */}
      <g stroke="currentColor" strokeWidth="0.4" opacity="0.06">
        {[80, 140, 200, 260, 320].map((y) => (
          <line key={`h${y}`} x1="40" y1={y} x2="400" y2={y} />
        ))}
        {[80, 140, 200, 260, 320].map((x) => (
          <line key={`v${x}`} x1={x} y1="40" x2={x} y2="360" />
        ))}
      </g>

      {/* connection edges */}
      <g stroke="currentColor" strokeWidth="0.8" opacity="0.18">
        <line x1="220" y1="200" x2="120" y2="110" />
        <line x1="220" y1="200" x2="330" y2="100" />
        <line x1="220" y1="200" x2="100" y2="290" />
        <line x1="220" y1="200" x2="340" y2="300" />
        <line x1="120" y1="110" x2="330" y2="100" />
        <line x1="100" y1="290" x2="340" y2="300" />
        <line x1="120" y1="110" x2="100" y2="290" />
        <line x1="330" y1="100" x2="340" y2="300" />
      </g>

      {/* secondary edges — dashed */}
      <g stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 6" opacity="0.1">
        <line x1="120" y1="110" x2="340" y2="300" />
        <line x1="330" y1="100" x2="100" y2="290" />
      </g>

      {/* center node — API gateway (hexagonal) */}
      <g filter="url(#glow)">
        <polygon
          points="220,165 260,182 260,218 220,235 180,218 180,182"
          fill="url(#node-fill)"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.6"
        />
        <foreignObject x="206" y="187" width="28" height="28">
          <div className="flex items-center justify-center opacity-60">
            <IconBolt size={20} stroke={1.5} />
          </div>
        </foreignObject>
      </g>

      {/* top-left node — server (hexagonal) */}
      <g filter="url(#glow)">
        <polygon
          points="120,85 150,100 150,120 120,135 90,120 90,100"
          fill="url(#node-fill)"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
        />
        <foreignObject x="106" y="95" width="28" height="28">
          <div className="flex items-center justify-center opacity-55">
            <IconServer size={20} stroke={1.5} />
          </div>
        </foreignObject>
      </g>

      {/* top-right node — database (hexagonal) */}
      <g filter="url(#glow)">
        <polygon
          points="330,75 360,90 360,110 330,125 300,110 300,90"
          fill="url(#node-fill)"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.45"
        />
        <foreignObject x="316" y="85" width="28" height="28">
          <div className="flex items-center justify-center opacity-55">
            <IconDatabase size={20} stroke={1.5} />
          </div>
        </foreignObject>
      </g>

      {/* bottom-left node — auth/lock (circle) */}
      <g filter="url(#glow)">
        <circle cx="100" cy="290" r="22" fill="url(#node-fill)" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <foreignObject x="86" y="276" width="28" height="28">
          <div className="flex items-center justify-center opacity-55">
            <IconLock size={20} stroke={1.5} />
          </div>
        </foreignObject>
      </g>

      {/* bottom-right node — cache/redis (circle) */}
      <g filter="url(#glow)">
        <circle cx="340" cy="300" r="18" fill="url(#node-fill)" stroke="currentColor" strokeWidth="1" opacity="0.35" />
        <foreignObject x="328" y="288" width="24" height="24">
          <div className="flex items-center justify-center opacity-50">
            <IconBolt size={16} stroke={1.5} />
          </div>
        </foreignObject>
      </g>

      {/* vertex dots */}
      <g fill="currentColor">
        <circle cx="120" cy="110" r="2.5" opacity="0.5" />
        <circle cx="330" cy="100" r="2.5" opacity="0.45" />
        <circle cx="220" cy="200" r="3" opacity="0.6" />
        <circle cx="100" cy="290" r="2" opacity="0.35" />
        <circle cx="340" cy="300" r="2" opacity="0.3" />
      </g>

      {/* ambient glow behind center */}
      <circle cx="220" cy="200" r="50" fill="currentColor" opacity="0.025" filter="url(#glow)" />
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
        className="hero-pattern relative overflow-hidden border-b border-ink-border"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-20 md:grid-cols-2 md:py-28 md:px-6">
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
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10 md:px-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Identity cell */}
          <Reveal className="rounded-md border border-ink-border bg-ink-panel p-6">
            <p className="font-mono text-xs text-ink-text-2">$ whoami</p>
            <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-ink-border px-3 py-1 text-xs text-ink-text-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink-text-1 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ink-text-1" />
              </span>
              {site.status}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink-text-1 sm:text-4xl">{site.name}</h2>
            <p className="mt-2 text-base text-ink-text-2 sm:text-lg">{site.role}</p>
            <div className="mt-5 flex flex-col gap-2">
              <a
                href={site.resumeUrl}
                className="inline-flex w-fit items-center justify-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90"
              >
                <DownloadIcon size={16} />
                Request CV
              </a>
              <a
                href={site.calUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center justify-center gap-2 rounded-md border border-ink-text-2 px-4 py-2.5 text-sm font-medium text-ink-text-1 transition-colors hover:border-ink-text-1"
              >
                <CalendarIcon size={16} />
                Book a call
              </a>
            </div>
          </Reveal>

          {/* Avatar cell */}
          <Reveal delay={0.1}>
            <div className="relative h-72 min-h-72 overflow-hidden rounded-md border border-ink-border sm:h-80 md:h-full md:min-h-80">
              <img
                src="/profile.jpg"
                alt={`Portrait of ${site.name}`}
                width={964}
                height={1280}
                fetchpriority="high"
                loading="eager"
                className="absolute inset-0 h-full w-full object-cover object-center scale-110"
              />
            </div>
          </Reveal>
        </div>

        {/* Tech stack row */}
        <Reveal delay={0.2} className="mt-4 rounded-md border border-ink-border bg-ink-panel px-5 py-4">
          <p className="mb-3 font-mono text-xs text-ink-text-2">$ stack</p>
          <StackChips stack={site.stack} />
        </Reveal>
      </section>

      {/* ─── Featured projects ─── */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6" aria-labelledby="featured-heading">
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
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6" aria-labelledby="history-heading">
        <p className="font-mono text-xs text-ink-text-2">$ ls history</p>
        <h2 id="history-heading" className="mt-2 font-display text-2xl font-semibold text-ink-text-1">
          Experience & Education
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Reveal>
            <div id="experience" className="h-full scroll-mt-24 lg:rounded-md lg:border lg:border-ink-border lg:bg-ink-panel lg:p-6">
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
            <div id="education" className="h-full scroll-mt-24 lg:rounded-md lg:border lg:border-ink-border lg:bg-ink-panel lg:p-6">
              <h3 className="font-display text-lg font-semibold text-ink-text-1">Education</h3>
              <ol className="mt-6 space-y-4">
                {site.education.map((item, index) => (
                  <li
                    key={`${item.degree}-${index}`}
                    className=""
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
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6" aria-labelledby="certs-heading">
        <p className="font-mono text-xs text-ink-text-2">$ ls certs</p>
        <h2 id="certs-heading" className="mt-2 font-display text-2xl font-semibold text-ink-text-1">
          Certifications
        </h2>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {site.certifications.map((cert, index) => (
              <li key={`${cert.name}-${index}`} className="flex items-start justify-between gap-4 rounded-md border border-ink-border bg-ink-panel p-5">
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
          ))}
        </ul>
      </section>

      {/* ─── Contact ─── */}
      <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 md:px-6">
        <Reveal className="sm:rounded-md sm:border sm:border-ink-border sm:bg-ink-panel sm:px-10 sm:py-14 text-center">
          <p className="font-mono text-xs text-ink-text-2">$ ping me</p>
          <h2 className="mx-auto mt-4 max-w-xl font-display text-2xl font-semibold text-ink-text-1 sm:text-4xl">
            Let's build something that holds up.
          </h2>
          <p className="mt-4 text-sm text-ink-text-2">{site.bannerHeight}.</p>
          <a
            href={`mailto:${site.email}`}
            className="mx-auto mt-6 inline-flex max-w-full items-center justify-center gap-2 break-all font-mono text-base text-ink-text-1 underline decoration-ink-text-2 underline-offset-8 transition-colors hover:decoration-ink-text-1 sm:mt-8 sm:text-2xl"
          >
            <MailIcon size={20} className="shrink-0" />
            <span className="min-w-0 break-all">{site.email}</span>
          </a>
          <div className="mt-10 flex justify-center">
            <a
              href={site.calUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90 sm:py-3"
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
