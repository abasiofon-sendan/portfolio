import { useEffect } from 'react'
import { site } from '@/data/site.js'

// Client-side head manager: keeps title, meta, canonical, and JSON-LD in sync
// with the current route. Runs on mount and when props change.

function upsertMeta(attr, name, content) {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export default function Seo({ title, description, pathname = '/', image = null, jsonLd = null }) {
  const canonical = `${site.url}${pathname === '/' ? '' : pathname}`

  useEffect(() => {
    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('name', 'twitter:card', 'summary')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    if (image) upsertMeta('property', 'og:image', image)

    let link = document.head.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', canonical)

    let script = document.getElementById('seo-jsonld')
    if (!script) {
      script = document.createElement('script')
      script.id = 'seo-jsonld'
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = jsonLd ? JSON.stringify(jsonLd) : ''
  }, [title, description, canonical, image, jsonLd])

  return null
}
