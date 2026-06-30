import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Logo from '../Logo.jsx'
import { services } from '../../../data/services.js'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <Logo variant="mark" />
          <p className="footer__tag">
            Precision manufacturing on demand — drawings to finished, inspected parts, shipped worldwide.
          </p>
          <Link to="/order" className="footer__cta">
            Start a project <ArrowRight size={16} />
          </Link>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <h3 className="footer__head">Services</h3>
            <ul>
              {services.map((s) => (
                <li key={s.id}>
                  <Link to={`/services/${s.id}`}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>



          <div className="footer__col">
            <h3 className="footer__head">Company</h3>
            <ul>
              <li><Link to="/services">All services</Link></li>

              <li><Link to="/process">How it works</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/order">Start a project</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {year} Nexforj by <a href="https://www.praimoinnovations.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontWeight: 600 }}>Praimo Innovations LLP</a>. All rights reserved.</p>
      </div>
    </footer>
  )
}
