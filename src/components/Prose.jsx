import { MDXProvider } from '@mdx-js/react'

const components = {
  h2: (props) => <h2 className="mt-12 mb-4 font-display text-xl font-semibold text-ink-text-1" {...props} />,
  p: (props) => <p className="mb-4 leading-relaxed text-ink-text-2" {...props} />,
  ul: (props) => <ul className="mb-4 list-disc space-y-2 pl-6 text-ink-text-2" {...props} />,
  ol: (props) => <ol className="mb-4 list-decimal space-y-2 pl-6 text-ink-text-2" {...props} />,
  li: (props) => <li className="leading-relaxed" {...props} />,
  code: (props) => (
    <code className="rounded border border-ink-border bg-ink-panel px-1.5 py-0.5 font-mono text-[13px] text-ink-text-1" {...props} />
  ),
  pre: (props) => (
    <pre className="mb-4 overflow-x-auto rounded-md border border-ink-border bg-ink-panel px-4 py-4 font-mono text-[13px] leading-relaxed text-ink-text-1" {...props} />
  ),
  a: (props) => (
    <a
      className="inline-flex items-center gap-1 text-ink-text-1 underline decoration-ink-text-2 underline-offset-4 transition-colors hover:decoration-ink-text-1"
      {...props}
    />
  ),
  strong: (props) => <strong className="font-semibold text-ink-text-1" {...props} />,
  blockquote: (props) => (
    <blockquote className="mb-4 border-l-2 border-ink-text-2 pl-4 italic text-ink-text-2" {...props} />
  ),
}

export default function Prose({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>
}
