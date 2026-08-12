import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

// Terminal mockup: monochrome window frame with traffic dots and mono content lines.
// With `typed`, the first line types itself and the rest fade in after.

const MotionDiv = motion.div

function TypedLines({ lines }) {
  const reduce = useReducedMotion()
  const firstText = useRef(lines[0]?.text || '').current
  const rest = lines.slice(1)
  const [chars, setChars] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (reduce) {
      setChars(firstText.length)
      setDone(true)
      return
    }
    let c = 0
    const timer = setInterval(() => {
      c += 1
      setChars(c)
      if (c >= firstText.length) {
        clearInterval(timer)
        setTimeout(() => setDone(true), 300)
      }
    }, 28)
    return () => clearInterval(timer)
  }, [firstText, reduce])

  return (
    <>
      <div className="whitespace-pre-wrap">
        <span className="text-ink-text-2">$ </span>
        {firstText.slice(0, chars)}
        {!done ? <span className="animate-pulse text-ink-text-2">▋</span> : null}
      </div>
      {done
        ? rest.map((line, index) => (
            <MotionDiv
              key={index}
              className={line.className || ''}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 * index, duration: 0.2 }}
            >
              {line.prompt ? <span className="text-ink-text-2">$ </span> : null}
              {line.text}
            </MotionDiv>
          ))
        : null}
    </>
  )
}

export default function Terminal({ title = 'terminal', lines = [], className = '', typed = false }) {
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
          {typed && lines.length > 0 ? (
            <TypedLines lines={lines} />
          ) : (
            lines.map((line, index) => (
              <div key={index} className={line.className || ''}>
                {line.prompt ? <span className="text-ink-text-2">$ </span> : null}
                {line.text}
              </div>
            ))
          )}
        </code>
      </pre>
    </div>
  )
}