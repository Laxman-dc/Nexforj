import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown, Check, ShieldCheck, Plane, Car, Bot, HeartPulse, Factory, Cpu } from 'lucide-react'
import Media from '../components/common/Media.jsx'
import ServiceCard from '../components/common/ServiceCard.jsx'

import SectionHeading from '../components/common/SectionHeading.jsx'
import Button from '../components/common/Button.jsx'
import Marquee from '../components/common/Marquee.jsx'
import Faq from '../components/common/Faq.jsx'
import Services from '../components/sections/Services/Services.jsx'
import AnimatedProcess from '../components/sections/AnimatedProcess/AnimatedProcess.jsx'
import IndustriesCarousel from '../components/sections/IndustriesCarousel/IndustriesCarousel.jsx'
import {
  hero, trustStrip, valueProps, capabilities, industries, faqs, certifications,
} from '../data/content.js'
import { services } from '../data/services.js'
import { workflow } from '../data/process.js'
import { siteImages, serviceImage } from '../data/images.js'
import './HomePage.css'





export default function HomePage() {
  return (
    <div className="home">
      {/* ============================ HERO ============================ */}
      <section className="hero">

        <div className="container hero__inner">
          <motion.p
            className="hero__eyebrow"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {hero.eyebrow}
          </motion.p>
          <h1 className="hero__title">
            {hero.title.map((line, i) => (
              <motion.span
                key={i}
                className="hero__title-line"
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.12 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="hero__lead"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.36 }}
          >
            {hero.lead}
          </motion.p>
          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.48 }}
          >
            <Button to={hero.primary.path} size="lg">{hero.primary.label} <ArrowRight size={18} /></Button>
            <Button to={hero.secondary.path} variant="ghost" size="lg">{hero.secondary.label}</Button>
          </motion.div>
          <motion.div
            className="hero__scrolldown"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          >
            <ArrowDown size={16} /> Scroll to explore
          </motion.div>
        </div>
      </section>

      {/* trust strip */}
      <section className="home__trust">
        <div className="container home__trust-inner">
          <span className="home__trust-label">Built on engineering trusted by</span>
          <Marquee items={trustStrip} speed={40} />
        </div>
      </section>


      {/* ============================ SERVICES ============================ */}
      <section className="section section--tint" id="services">
        <div className="container">
          <div className="home__head">
            <SectionHeading
              eyebrow="Manufacturing services"
              title="Nine process families, one floor"
              lead="Witness the reality of our shop floor. Dive into any of our core capabilities below to explore the exact operations we run, the materials we master, and the uncompromising tolerances we hold."
            />
            <Button to="/services" variant="soft" className="home__head-cta">All services <ArrowRight size={16} /></Button>
          </div>
          <Services limit={6} />
        </div>
      </section>



      {/* ============================ PROCESS ============================ */}
      <section className="section section--tint">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="From upload to doorstep"
            title="A clear path for every job"
            lead="You only ever upload a file once. From there, we handle routing, making, finishing, inspection and shipping."
          />
          <AnimatedProcess />
        </div>
      </section>

      {/* ============================ INDUSTRIES ============================ */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow={industries.eyebrow} title={industries.title} />
          <IndustriesCarousel items={industries.items} />
        </div>
      </section>


      {/* ============================ FAQ ============================ */}
      <section className="section">
        <div className="container home__faq">
          <SectionHeading eyebrow="Questions" title="Good to know" />
          <Faq items={faqs} />
        </div>
      </section>


    </div>
  )
}
