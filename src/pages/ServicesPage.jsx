import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/common/PageHeader.jsx'
import Media from '../components/common/Media.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import { Stagger, StaggerItem } from '../components/common/Reveal.jsx'
import Services from '../components/sections/Services/Services.jsx'
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
        lead="Nine in-house process families take a part from raw stock to finished, inspected and packed. Open any category to see the full list of operations and the tolerances we hold."
        aside={<Media src={siteImages.heroAlt} alt="Manufacturing services" ratio="4/3" parallax={26} />}
      />

      <section className="section">
        <div className="container">
          <Services />
        </div>
      </section>



    </div>
  )
}
