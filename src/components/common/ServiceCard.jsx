import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import './ServiceCard.css'

/**
 * ServiceCard — a real photograph of the process with a content footer.
 * The whole card links to the detail page; image slow-zooms on hover.
 */
export default function ServiceCard({ to, image, title, subtitle, tag, count }) {
  return (
    <Link to={to} className="scard">
      <div className="scard__media">
        <img src={image} alt={title} loading="lazy" className="scard__img" draggable="false" />
        <span className="scard__scrim" aria-hidden="true" />
        {tag && <span className="scard__tag">{tag}</span>}
        {count != null && <span className="scard__count">{count}</span>}
      </div>
      <div className="scard__body">
        <div>
          <h3 className="scard__title">{title}</h3>
          {subtitle && <p className="scard__sub">{subtitle}</p>}
        </div>
        <span className="scard__go" aria-hidden="true">
          <ArrowUpRight size={18} />
        </span>
      </div>
    </Link>
  )
}
