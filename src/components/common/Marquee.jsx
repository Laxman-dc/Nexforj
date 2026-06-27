import './Marquee.css'

/**
 * Marquee — seamless infinite scroller. Pass an array of strings.
 * Pauses on hover and respects reduced-motion (via CSS).
 */
export default function Marquee({ items = [], speed = 38, reverse = false }) {
  const row = [...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div
        className={`marquee__track ${reverse ? 'marquee__track--rev' : ''}`}
        style={{ '--marquee-speed': `${speed}s` }}
      >
        {row.map((item, i) => (
          <span className="marquee__item" key={i}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
