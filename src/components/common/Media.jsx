import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './Media.css'

/**
 * Media — a real photograph that reveals as it scrolls in, slow-zooms (Ken
 * Burns) on hover, and can drift with a gentle parallax. Used everywhere a
 * real image appears so motion stays consistent across the site.
 *
 * props:
 *  src       image url (required)
 *  alt       alt text
 *  ratio     aspect-ratio string e.g. '16/10', '4/3', '1/1'
 *  parallax  amount of vertical parallax drift in px (0 = off)
 *  overlay   add a dark gradient (for text on top)
 *  rounded   apply rounded corners (default true)
 *  className extra classes
 *  children  content overlaid on the image (captions, labels)
 */
export default function Media({
  src,
  alt = '',
  ratio = '16/10',
  parallax = 0,
  overlay = false,
  rounded = true,
  eager = false,
  className = '',
  children,
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [parallax, -parallax])

  return (
    <motion.figure
      ref={ref}
      className={`media ${rounded ? 'media--rounded' : ''} ${overlay ? 'media--overlay' : ''} ${className}`.trim()}
      style={{ aspectRatio: ratio }}
      initial={{ opacity: 0, scale: 1.04 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        className="media__img"
        style={parallax ? { y, scale: 1.12 } : undefined}
        draggable="false"
      />
      {overlay && <span className="media__scrim" aria-hidden="true" />}
      {children && <figcaption className="media__cap">{children}</figcaption>}
    </motion.figure>
  )
}
