import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/common/PageHeader.jsx'
import Media from '../components/common/Media.jsx'
import ServiceCard from '../components/common/ServiceCard.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import { Stagger, StaggerItem } from '../components/common/Reveal.jsx'
import Button from '../components/common/Button.jsx'
import Faq from '../components/common/Faq.jsx'
import { services } from '../data/services.js'
import { capabilities, faqs } from '../data/content.js'
import { serviceImage, siteImages } from '../data/images.js'
import { Check } from 'lucide-react'
import './ListingPage.css'

export default function ServicesPage() {
  return (
    <div className="listing">
      <PageHeader
        crumb="Services"
        eyebrow="Manufacturing services"
        title="Every process, under one roof"
        lead="Eleven in-house process families take a part from raw stock to finished, inspected and packed. Open any category to see the full list of operations and the tolerances we hold."
        aside={<Media src={siteImages.heroAlt} alt="Manufacturing services" ratio="4/3" parallax={26} />}
      />

      <section className="section">
        <div className="container">
          <Stagger className="listing__grid" gap={0.05}>
            {services.map((s) => (
              <StaggerItem key={s.id}>
                <ServiceCard to={`/services/${s.id}`} image={serviceImage(s.id)} title={s.name} subtitle={s.tagline} tag="Service" />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section section--deep listing__caps">
        <div className="container">
          <SectionHeading eyebrow={capabilities.eyebrow} title={capabilities.title} lead={capabilities.lead} dark />
          <Stagger className="listing__caps-grid" gap={0.08}>
            {capabilities.groups.map((g) => (
              <StaggerItem className="lcap" key={g.title}>
                <h3 className="lcap__title">{g.title}</h3>
                <ul className="lcap__list">
                  {g.items.map((it) => <li key={it}><Check size={15} /> {it}</li>)}
                </ul>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section">
        <div className="container listing__faq">
          <SectionHeading eyebrow="Questions" title="Good to know" />
          <Faq items={faqs} />
          <div className="listing__foot">
            <p>Not sure which process fits? Upload your drawing and we'll route it for you.</p>
            <Button to="/order">Start a project <ArrowRight size={16} /></Button>
          </div>
        </div>
      </section>
    </div>
  )
}
