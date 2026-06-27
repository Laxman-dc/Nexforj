import Reveal from './Reveal.jsx'
import './PageHeader.css'

/**
 * PageHeader — the title band at the top of inner pages.
 * Optional `aside` slot holds a 3D stage or any visual.
 */
export default function PageHeader({ eyebrow, title, lead, aside, crumb }) {
  return (
    <header className="pagehead">
      <div className="container pagehead__inner">
        <div className="pagehead__copy">
          {crumb && <Reveal as="p" className="pagehead__crumb" y={12}>{crumb}</Reveal>}
          {eyebrow && <Reveal as="p" className="eyebrow" y={14}>{eyebrow}</Reveal>}
          <Reveal as="h1" className="pagehead__title" delay={0.05} y={22}>
            {title}
          </Reveal>
          {lead && (
            <Reveal as="p" className="pagehead__lead lead" delay={0.1} y={22}>
              {lead}
            </Reveal>
          )}
        </div>
        {aside && <div className="pagehead__aside">{aside}</div>}
      </div>
      <div className="pagehead__glow glow" aria-hidden="true" />
    </header>
  )
}
