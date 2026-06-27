import Reveal from './Reveal.jsx'
import './SectionHeading.css'

/**
 * SectionHeading — consistent eyebrow / title / lead block.
 * @param align 'left' | 'center'
 * @param grad  highlight the title with the brand gradient
 * @param dark  light text for use on dark/deep sections
 */
export default function SectionHeading({ eyebrow, title, lead, align = 'left', grad = false, dark = false, className = '' }) {
  return (
    <div className={`shead shead--${align} ${dark ? 'shead--dark' : ''} ${className}`.trim()}>
      {eyebrow && <Reveal as="p" className="eyebrow" y={16}>{eyebrow}</Reveal>}
      {title && (
        <Reveal as="h2" className={`shead__title ${grad ? 'text-grad' : ''}`} delay={0.05} y={20}>
          {title}
        </Reveal>
      )}
      {lead && <Reveal as="p" className="shead__lead lead" delay={0.1} y={20}>{lead}</Reveal>}
    </div>
  )
}
