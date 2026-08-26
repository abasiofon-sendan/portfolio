import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MenuIcon, CloseIcon } from './Icons'
import { site } from '@/data/site.js'

const NAV_LINKS = [
  { label: 'Work', to: '/work', hash: null },
  { label: 'Experience', to: '/#experience', hash: 'experience' },
  { label: 'Education', to: '/#education', hash: 'education' },
  { label: 'Contact', to: '/#contact', hash: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b border-ink-border bg-ink-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6" aria-label="Main navigation">
        <Link to="/" className="font-display text-lg font-bold tracking-tight text-ink-text-1">
          AS<span className="text-ink-text-2">.</span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center text-ink-text-1 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <CloseIcon size={18} /> : <MenuIcon size={18} />}
        </button>

        <ul
          className={`absolute left-0 top-full w-full flex-col gap-2 border-b border-ink-border bg-ink-bg px-4 pb-5 pt-2 text-sm transition-all duration-300 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:px-0 md:pb-0 md:pt-0 ${
            open ? 'flex' : 'hidden'
          }`}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              {link.hash && pathname === '/' ? (
                <a
                  href={`#${link.hash}`}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-medium text-ink-text-2 transition-colors hover:text-ink-text-1 md:py-0"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-medium text-ink-text-2 transition-colors hover:text-ink-text-1 md:py-0"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
          <li className="md:hidden">
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-md bg-white px-4 py-2 font-medium text-black transition-opacity hover:opacity-90"
            >
              Request CV
            </a>
          </li>
        </ul>

        <a
          href={site.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90 md:inline-flex"
        >
          Request CV
        </a>
      </nav>
    </header>
  )
}
