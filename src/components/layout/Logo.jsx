import { Link } from 'react-router-dom'
import './Logo.css'

/**
 * Logo — the real Nexforj mark, shown straight (no tilt).
 * Acts as the home button. `variant` picks the full lockup or the mark only.
 */
export default function Logo({ variant = 'full', className = '', onClick }) {
  const base = import.meta.env.BASE_URL
  const src = `${base}images/Nexforj_logo.png`
  return (
    <Link to="/" className={`logo logo--${variant} ${className}`.trim()} onClick={onClick} aria-label="Nexforj — home">
      <img src={src} alt="Nexforj" className="logo__img" draggable="false" />
    </Link>
  )
}
