import { motion, useReducedMotion } from 'framer-motion'

// Subtle reveal-on-scroll wrapper. Respects prefers-reduced-motion.
const MotionDiv = motion.div

export default function Reveal({ children, className = '', delay = 0, y = 12 }) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <MotionDiv
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
    >
      {children}
    </MotionDiv>
  )
}
