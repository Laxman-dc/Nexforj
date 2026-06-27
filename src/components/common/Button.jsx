import { Link } from 'react-router-dom'
import './Button.css'

/**
 * Button — renders an internal Link, an anchor, or a plain button depending
 * on the props given. Variants: primary | ghost | soft.
 */
export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  ...rest
}) {
  const cls = `btn btn--${variant} btn--${size} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        <span>{children}</span>
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        <span>{children}</span>
      </a>
    )
  }
  return (
    <button className={cls} {...rest}>
      <span>{children}</span>
    </button>
  )
}
