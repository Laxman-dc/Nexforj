import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import PageHeader from '../components/common/PageHeader.jsx'
import Media from '../components/common/Media.jsx'
import Button from '../components/common/Button.jsx'
import { services } from '../data/services.js'
import { siteImages, serviceImagesNoBg } from '../data/images.js'
import './ListingPage.css'

function ImmersiveService({ service, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Parallax effects for the floating, aesthetic look
  const y = useTransform(scrollYProgress, [0, 1], ["25%", "-25%"])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.05, 0.85])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const isEven = index % 2 === 0
  const imageSrc = serviceImagesNoBg[service.id] || siteImages.hero

  return (
    <div className={`immersive-service ${isEven ? 'immersive-service--even' : 'immersive-service--odd'}`} ref={ref}>
      <div className="container immersive-service__container">

        <div className="immersive-service__content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="immersive-service__title">{service.name}</h2>
            <p className="immersive-service__tagline">{service.tagline}</p>
            <p className="immersive-service__desc">{service.description}</p>

            <ul className="immersive-service__specs">
              {Object.entries(service.specs).map(([k, v]) => (
                <li key={k}><span>{k}</span> <strong>{v}</strong></li>
              ))}
            </ul>

            <Button to={`/services/${service.id}`} variant="soft" className="immersive-service__cta">
              Explore capabilities <ArrowRight size={16} />
            </Button>
          </motion.div>
        </div>

        <div className="immersive-service__visual">
          <motion.div 
            className={`immersive-service__image-wrapper ${service.id === 'precision-grinding' ? 'immersive-service__image-wrapper--dual' : ''}`}
            style={{ y, scale, opacity }}
          >
            <img src={imageSrc} alt={service.name} className="immersive-service__image" />
            {service.id === 'precision-grinding' && (
              <img 
                src="/images/precission_grinding_img2.png" 
                alt="Precision Grinding Secondary" 
                className="immersive-service__image immersive-service__image--secondary" 
              />
            )}
          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <div className="listing">
      <header className="services-wide-hero">
        <img src={siteImages.heroWide} alt="" className="services-wide-hero__img" />
        <div className="services-wide-hero__overlay"></div>
        <div className="container services-wide-hero__inner">
          <div className="services-wide-hero__copy">
            <p className="eyebrow">Manufacturing services</p>
            <h1 className="pagehead__title">Every process, under one roof</h1>
            <p className="pagehead__lead lead">
              Nine in-house process families take a part from raw stock to finished, inspected and packed. Open any category to see the full list of operations and the tolerances we hold.
            </p>
          </div>
        </div>
      </header>

      <div className="immersive-services-wrapper">
        {services.map((svc, i) => (
          <ImmersiveService key={svc.id} service={svc} index={i} />
        ))}
      </div>

    </div>
  )
}
