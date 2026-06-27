import { useEffect, useRef, useState } from 'react'

/**
 * useCountUp — returns [ref, display]. Attach ref to an element; when it
 * scrolls into view the number counts up from 0 to `end`. Non-numeric values
 * (e.g. "Global", "±0.002") are returned as-is. Respects reduced-motion.
 */
export function useCountUp(value, { duration = 1400 } = {}) {
  const ref = useRef(null)
  const match = String(value).match(/^([^\d]*)([\d.,]+)(.*)$/)
  const numeric = match ? parseFloat(match[2].replace(/,/g, '')) : null
  const prefix = match ? match[1] : ''
  const suffix = match ? match[3] : ''
  const decimals = match && match[2].includes('.') ? match[2].split('.')[1].length : 0

  const [display, setDisplay] = useState(numeric == null ? value : `${prefix}0${suffix}`)

  useEffect(() => {
    if (numeric == null) { setDisplay(value); return }
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setDisplay(value); return }

    let raf, started = false
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true
          const t0 = performance.now()
          const tick = (now) => {
            const p = Math.min((now - t0) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            const n = (numeric * eased).toFixed(decimals)
            setDisplay(`${prefix}${Number(n).toLocaleString(undefined, { minimumFractionDigits: decimals })}${suffix}`)
            if (p < 1) raf = requestAnimationFrame(tick)
          }
          raf = requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [value, numeric, prefix, suffix, decimals, duration])

  return [ref, display]
}
