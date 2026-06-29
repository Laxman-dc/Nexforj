import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Sun, Moon, ChevronDown, ArrowRight } from 'lucide-react'
import Logo from '../Logo.jsx'
import { useTheme } from '../../../theme/ThemeContext.jsx'
import { navLinks, navCta } from '../../../data/navigation.js'
import { services } from '../../../data/services.js'
import './Navbar.css'

/* Build the two mega-menus straight from the data files. Add a service or a
   material and it appears here automatically — nothing to wire up by hand. */
function ServicesMega({ onPick }) {
  return (
    <div className="mega mega--services">
      <div className="mega__grid">
        {services.map((s) => (
          <Link key={s.id} to={`/services/${s.id}`} className="mega__cell" onClick={onPick}>
            <span className="mega__cell-title">{s.name}</span>
            <span className="mega__cell-sub">{s.tagline}</span>
          </Link>
        ))}
      </div>
      <Link to="/services" className="mega__all" onClick={onPick}>
        All services <ArrowRight size={15} />
      </Link>
    </div>
  )
}


export default function Navbar() {
  const { isDark, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false) // mobile drawer
  const [mega, setMega] = useState(null) // 'services' | 'materials' | null
  const closeTimer = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close menus on route change
  useEffect(() => {
    setOpen(false)
    setMega(null)
  }, [location.pathname, location.hash])

  // lock body scroll for mobile drawer
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const openMega = (key) => {
    clearTimeout(closeTimer.current)
    setMega(key)
  }
  const scheduleClose = () => {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setMega(null), 140)
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Logo />

        {/* desktop links */}
        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((link) =>
            link.mega ? (
              <div
                key={link.label}
                className="nav__item nav__item--mega"
                onMouseEnter={() => openMega(link.mega)}
                onMouseLeave={scheduleClose}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
                >
                  {link.label}
                  <ChevronDown size={15} className={`nav__chev ${mega === link.mega ? 'is-open' : ''}`} />
                </NavLink>
                <AnimatePresence>
                  {mega === link.mega && (
                    <motion.div
                      className="nav__panel"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      onMouseEnter={() => openMega(link.mega)}
                      onMouseLeave={scheduleClose}
                    >
                      <ServicesMega onPick={() => setMega(null)} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="nav__actions">
          <button
            className="nav__theme"
            onClick={toggle}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            title={isDark ? 'Light theme' : 'Dark theme'}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link to={navCta.path} className="nav__cta">
            <span>{navCta.label}</span>
            <ArrowRight size={16} />
          </Link>

          <button
            className="nav__burger"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <nav className="nav__drawer-inner" aria-label="Mobile">
              {navLinks.map((link) => (
                <NavLink key={link.label} to={link.path} className="nav__drawer-link">
                  {link.label}
                </NavLink>
              ))}
              <div className="nav__drawer-divider" />
              <p className="nav__drawer-label">Services</p>
              <div className="nav__drawer-chips">
                {services.map((s) => (
                  <Link key={s.id} to={`/services/${s.id}`} className="nav__chip">
                    {s.name}
                  </Link>
                ))}
              </div>
              <Link to={navCta.path} className="nav__cta nav__cta--block">
                <span>{navCta.label}</span>
                <ArrowRight size={16} />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
