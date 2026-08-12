// Tech brand logos as inline SVGs (via simple-icons). A generic code glyph
// covers any skill without a mapped logo so no chip renders text-only.

import {
  siPython,
  siDjango,
  siFastapi,
  siPostgresql,
  siSqlite,
  siSupabase,
  siRedis,
  siDocker,
} from 'simple-icons'

const ICONS = {
  Python: siPython,
  Django: siDjango,
  FastAPI: siFastapi,
  PostgreSQL: siPostgresql,
  SQLite: siSqlite,
  Supabase: siSupabase,
  Redis: siRedis,
  Docker: siDocker,
}

const CODE_PATH =
  'M8.5 4.5 3 12l5.5 7.5M15.5 4.5 21 12l-5.5 7.5M12 3.5l-1.5 17'

export default function TechIcon({ name, size = 15, className = '' }) {
  const icon = ICONS[name]
  const d = icon?.path || CODE_PATH
  const strokeTitle = d === CODE_PATH ? name : null

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={d === CODE_PATH ? 'none' : 'currentColor'}
      stroke={d === CODE_PATH ? 'currentColor' : 'none'}
      strokeWidth={d === CODE_PATH ? 1.8 : 0}
      strokeLinecap={d === CODE_PATH ? 'round' : undefined}
      strokeLinejoin={d === CODE_PATH ? 'round' : undefined}
      aria-hidden="true"
      className={className}
      role={strokeTitle ? 'img' : undefined}
      title={strokeTitle || undefined}
    >
      <path d={d} />
    </svg>
  )
}