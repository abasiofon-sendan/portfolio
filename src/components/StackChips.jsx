import TechIcon from './TechIcons'

export default function StackChips({ stack, className = '' }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {stack.map((item) => (
        <li
          key={item}
          className="inline-flex items-center gap-2 rounded-md border border-ink-border bg-ink-bg px-3 py-1.5 text-sm text-ink-text-1"
        >
          <TechIcon name={item} size={15} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}