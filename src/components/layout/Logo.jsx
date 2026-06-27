import { Link } from 'react-router-dom'
import './Logo.css'

/**
 * Logo — the real Praimo Innovations mark, shown straight (no tilt).
 * Acts as the home button. `variant` picks the full lockup or the mark only.
 */
export default function Logo({ variant = 'full', className = '', onClick }) {
  const base = import.meta.env.BASE_URL
  const src = `${base}${variant === 'mark' ? 'praimo-mark.png' : 'praimo-logo.png'}`
  return (
    <Link to="/" className={`logo logo--${variant} ${className}`.trim()} onClick={onClick} aria-label="Praimo Innovations — home">
      <img src={src} alt="Praimo Innovations" className="logo__img" draggable="false" />
    </Link>
  )
}
