import { useMemo } from 'react'
import { motion } from 'framer-motion'

/* Resolve a motion-wrapped tag from `as`, which may be a string ('p', 'span')
   or a React component (e.g. react-router's Link). */
function useMotionTag(as) {
  return useMemo(() => (typeof as === 'string' ? motion[as] || motion.div : motion(as)), [as])
}

/**
 * Reveal — fades + lifts children into view when scrolled to.
 * Honours reduced-motion automatically via framer-motion.
 */
export default function Reveal({
  children, delay = 0, y = 28, as = 'div', className = '', once = true, amount = 0.25, ...rest
}) {
  const MotionTag = useMotionTag(as)
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

/** Stagger container — animates its StaggerItem children in sequence. */
export function Stagger({ children, className = '', gap = 0.08, amount = 0.2, ...rest }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '', y = 26, as = 'div', ...rest }) {
  const MotionTag = useMotionTag(as)
  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
