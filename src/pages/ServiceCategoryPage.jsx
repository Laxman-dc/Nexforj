import { useParams, Navigate, Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft, Check } from 'lucide-react'
import Media from '../components/common/Media.jsx'
import Reveal, { Stagger, StaggerItem } from '../components/common/Reveal.jsx'
import Button from '../components/common/Button.jsx'
import ServiceCard from '../components/common/ServiceCard.jsx'
import { getService, services } from '../data/services.js'
import { serviceImage } from '../data/images.js'
import './DetailPage.css'

export default function ServiceCategoryPage() {
  const { id } = useParams()
  const service = getService(id)
  if (!service) return <Navigate to="/services" replace />

  const idx = services.findIndex((s) => s.id === id)
  const related = [services[(idx + 1) % services.length], services[(idx + 2) % services.length]]

  return (
    <div className="detail">
      {/* image banner header */}
      <header className="detail__banner">
        <img src={serviceImage(id)} alt={service.name} className="detail__banner-img" />
        <span className="detail__banner-scrim" aria-hidden="true" />
        <div className="container detail__banner-inner">
          <Reveal as={Link} to="/services" className="detail__back detail__back--light" y={12}>
            <ArrowLeft size={16} /> All services
          </Reveal>
          <Reveal as="p" className="detail__banner-eyebrow" delay={0.05} y={14}>Manufacturing service</Reveal>
          <Reveal as="h1" className="detail__banner-title" delay={0.08} y={20}>{service.name}</Reveal>
          <Reveal as="p" className="detail__banner-tagline" delay={0.12} y={18}>{service.tagline}</Reveal>
        </div>
      </header>

      <section className="section">
        <div className="container detail__intro">
          <Reveal as="p" className="detail__desc lead">{service.description}</Reveal>
          <Reveal className="detail__intro-actions" delay={0.05}>
            <Button to="/order">Start a project <ArrowRight size={16} /></Button>
          </Reveal>
        </div>

        <div className="container detail__body">
          <div className="detail__main">
            <h2 className="detail__section-title">Operations</h2>
            <p className="detail__section-lead">The full set of operations available within {service.name.toLowerCase()}.</p>
            <div className="detail__groups">
              {service.groups.map((g) => (
                <Reveal className="opgroup" key={g.title}>
                  <h3 className="opgroup__title">{g.title}</h3>
                  <Stagger className="opgroup__list" gap={0.03}>
                    {g.items.map((item) => (
                      <StaggerItem className="opitem" key={item}>
                        <Check size={15} className="opitem__check" /> {item}
                      </StaggerItem>
                    ))}
                  </Stagger>
                </Reveal>
              ))}
            </div>
          </div>

          <aside className="detail__aside">
            <Reveal className="specbox">
              <h3 className="specbox__title">At a glance</h3>
              <dl className="specbox__list">
                {Object.entries(service.specs).map(([k, v]) => (
                  <div className="specbox__row" key={k}><dt>{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
            </Reveal>
            <Reveal className="quotebox" delay={0.08}>
              <p>Quotes are emailed after our engineers review your file — never published on the site.</p>
              <Button to="/order" variant="soft">Get a quote by email <ArrowRight size={15} /></Button>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* related services */}
      <section className="section section--tint">
        <div className="container">
          <h2 className="detail__related-head">Related services</h2>
          <div className="detail__related">
            {related.map((r) => (
              <ServiceCard key={r.id} to={`/services/${r.id}`} image={serviceImage(r.id)} title={r.name} subtitle={r.tagline} tag="Service" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
