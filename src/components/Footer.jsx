import { site } from '@/data/site.js'
import { GitHubIcon, LinkedInIcon, XIcon, TelegramIcon } from './BrandIcons'
import { ArrowUpRightIcon } from './Icons'

const SOCIAL_ICONS = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  X: XIcon,
  Telegram: TelegramIcon,
}

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ink-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-text-2">© {new Date().getFullYear()} {site.name}. Built with React and Vite.</p>
        <ul className="flex items-center gap-5">
          {site.socials.map((social) => {
            const IconComponent = SOCIAL_ICONS[social.label]
            if (!IconComponent) return null
            return (
              <li key={social.label}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="text-ink-text-2 transition-colors hover:text-ink-text-1"
                >
                  <IconComponent size={18} />
                </a>
              </li>
            )
          })}
        </ul>
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center gap-1.5 text-sm text-ink-text-2 transition-colors hover:text-ink-text-1"
        >
          Email me
          <ArrowUpRightIcon size={14} />
        </a>
      </div>
    </footer>
  )
}
