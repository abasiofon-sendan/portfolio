// Terminal mockup: monochrome window frame with traffic dots and mono content lines.

export default function Terminal({ title = 'terminal', lines = [], className = '' }) {
  return (
    <div className={`overflow-hidden rounded-md border border-ink-border bg-ink-panel ${className}`}>
      <div className="flex items-center gap-2 border-b border-ink-border px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-border" />
        <span className="ml-3 font-mono text-xs text-ink-text-2">{title}</span>
      </div>
      <pre className="overflow-x-auto px-4 py-4 font-mono text-[13px] leading-relaxed text-ink-text-1">
        <code>
          {lines.map((line, index) => (
            <div key={index} className={line.className || ''}>
              {line.prompt ? <span className="text-ink-text-2">$ </span> : null}
              {line.text}
            </div>
          ))}
        </code>
      </pre>
    </div>
  )
}
