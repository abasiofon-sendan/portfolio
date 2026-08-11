// Content loader: globs MDX files in content/work and content/apis,
// parses frontmatter (exposed as `frontmatter` export via remark-mdx-frontmatter),
// and exposes typed helper functions. Works in the browser via import.meta.glob (eager).
import { site } from '@/data/site.js'

const workModules = import.meta.glob('./work/*.mdx', { eager: true })
const apiModules = import.meta.glob('./apis/*.mdx', { eager: true })

export const PROJECT_TYPES = {
  'case-study': 'case-study',
  api: 'api',
}

const REQUIRED_FIELDS = {
  [PROJECT_TYPES['case-study']]: ['title', 'type', 'outcome', 'role', 'stack', 'featured', 'order'],
  [PROJECT_TYPES.api]: ['title', 'type', 'oneLiner', 'stack', 'featured', 'order', 'docsUrl'],
}

function isArrayOfStrings(value) {
  return Array.isArray(value) && value.every((item) => typeof item === 'string')
}

function ensureValidProject({ slug, type, frontmatter }) {
  const required = REQUIRED_FIELDS[type]
  if (!required) {
    throw new Error(`[content] ${slug}: unknown project type "${type}" (${slug})`)
  }
  for (const field of required) {
    if (frontmatter[field] === undefined || frontmatter[field] === null || frontmatter[field] === '') {
      throw new Error(`[content] ${slug}: missing required field "${field}"`)
    }
  }
  if (frontmatter.featured !== true && frontmatter.featured !== false) {
    throw new Error(`[content] ${slug}: "featured" must be a boolean`)
  }
  if (typeof frontmatter.order !== 'number') {
    throw new Error(`[content] ${slug}: "order" must be a number`)
  }
  if (!isArrayOfStrings(frontmatter.stack) || frontmatter.stack.length === 0) {
    throw new Error(`[content] ${slug}: "stack" must be a non-empty array of strings`)
  }
  if (type === PROJECT_TYPES.api && frontmatter.docsUrl && !/^https?:\/\//.test(frontmatter.docsUrl)) {
    throw new Error(`[content] ${slug}: "docsUrl" must be an absolute http(s) URL`)
  }
  if (type === PROJECT_TYPES.api && Array.isArray(frontmatter.endpoints) && frontmatter.endpoints.length > 3) {
    throw new Error(`[content] ${slug}: "endpoints" must have at most 3 signature endpoints`)
  }
}

function toEntry(pathname, module) {
  const slug = pathname.split('/').pop().replace(/\.mdx$/, '')
  const frontmatter = module.frontmatter || {}
  return { slug, frontmatter, Content: module.default }
}

function loadEntries() {
  const work = Object.entries(workModules).map(([pathname, mod]) => toEntry(pathname, mod))
  const apis = Object.entries(apiModules).map(([pathname, mod]) => toEntry(pathname, mod))
  return [...work, ...apis]
}

export function validateContent() {
  const entries = loadEntries()
  for (const entry of entries) {
    ensureValidProject({
      slug: entry.slug,
      type: entry.frontmatter.type,
      frontmatter: entry.frontmatter,
    })
  }
  return entries.length
}

export function getAllEntries() {
  validateContent()
  return loadEntries().sort((a, b) => a.frontmatter.order - b.frontmatter.order)
}

export function getWorkEntries() {
  return getAllEntries().filter((entry) => entry.frontmatter.type === PROJECT_TYPES['case-study'])
}

export function getApiEntries() {
  return getAllEntries().filter((entry) => entry.frontmatter.type === PROJECT_TYPES.api)
}

export function getFeaturedEntries() {
  return getAllEntries().filter((entry) => entry.frontmatter.featured === true)
}

export function getWorkSlugs() {
  return getWorkEntries().map((entry) => entry.slug)
}

export function getApiSlugs() {
  return getApiEntries().map((entry) => entry.slug)
}

export function getWorkEntry(slug) {
  const entry = getWorkEntries().find((item) => item.slug === slug)
  if (!entry) throw new Error(`[content] No case study found for slug "${slug}"`)
  return entry
}

export function getApiEntry(slug) {
  const entry = getApiEntries().find((item) => item.slug === slug)
  if (!entry) throw new Error(`[content] No API project found for slug "${slug}"`)
  return entry
}

export function getCanonicalUrl(pathname = '/') {
  return `${site.url}${pathname === '/' ? '' : pathname}`
}
