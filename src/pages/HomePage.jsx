import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown, Check, ShieldCheck } from 'lucide-react'
import Media from '../components/common/Media.jsx'
import ServiceCard from '../components/common/ServiceCard.jsx'
import MaterialSwatch from '../components/common/MaterialSwatch.jsx'
import Reveal, { Stagger, StaggerItem } from '../components/common/Reveal.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import Button from '../components/common/Button.jsx'
import Marquee from '../components/common/Marquee.jsx'
import Faq from '../components/common/Faq.jsx'
import { useCountUp } from '../hooks/useCountUp.js'
import {
  hero, stats, trustStrip, valueProps, capabilities, industries, faqs, certifications,
} from '../data/content.js'
import { services } from '../data/services.js'
import { materials, materialGroups } from '../data/materials.js'
import { workflow } from '../data/process.js'
import { siteImages, serviceImage } from '../data/images.js'
import './HomePage.css'

const featuredMaterials = ['stainless-steel', 'aluminium', 'brass', 'titanium', 'acrylic', 'carbon-fiber']

function Stat({ value, label }) {
  const [ref, display] = useCountUp(value)
  return (
    <StaggerItem className="stat">
      <span className="stat__value" ref={ref}>{display}</span>
      <span className="stat__label">{label}</span>
    </StaggerItem>
  )
}

export default function HomePage() {
  return (
    <div className="home">
      {/* ============================ HERO ============================ */}
      <section className="hero">
        <div className="hero__media">
          <img src={siteImages.hero} alt="Praimo manufacturing floor" className="hero__img" />
          <span className="hero__scrim" aria-hidden="true" />
        </div>
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
          <span className="home__trust-label">Trusted for parts across</span>
          <Marquee items={trustStrip} speed={40} />
        </div>
      </section>

      {/* ============================ INTRO ============================ */}
      <section className="section">
        <div className="container home__intro">
          <div className="home__intro-copy">
            <Reveal as="p" className="eyebrow">How it works</Reveal>
            <Reveal as="h2" className="home__intro-title" delay={0.05}>
              Describe the part. We make it, inspect it, and ship it.
            </Reveal>
            <Reveal as="p" className="lead" delay={0.1}>
              Praimo is a single front door to a complete shop floor. You don't juggle vendors or chase
              quotes — you upload a file once, and an engineer takes it from there.
            </Reveal>
            <Stagger className="home__intro-list" gap={0.06}>
              {[
                'Upload your CAD or drawing — STEP, DXF, DWG, STL or PDF',
                'Pick a material and process, or let us route it for you',
                'Get a clear, itemised quote back by email',
                'We manufacture, inspect, and ship worldwide',
              ].map((t) => (
                <StaggerItem className="home__intro-item" key={t}>
                  <Check size={18} /> {t}
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.1}>
              <Button to="/process" variant="soft">See the full workflow <ArrowRight size={16} /></Button>
            </Reveal>
          </div>
          <Reveal className="home__intro-media" delay={0.1}>
            <Media src={siteImages.heroAlt} alt="Laser cutting a metal sheet" ratio="4/5" parallax={40} />
          </Reveal>
        </div>
      </section>

      {/* ============================ SERVICES ============================ */}
      <section className="section section--tint" id="services">
        <div className="container">
          <div className="home__head">
            <SectionHeading
              eyebrow="Manufacturing services"
              title="Eleven process families, one floor"
              lead="Real photographs of the work we do every day. Open any service for the full list of operations and the tolerances we hold."
            />
            <Button to="/services" variant="soft" className="home__head-cta">All services <ArrowRight size={16} /></Button>
          </div>
          <Stagger className="home__grid home__grid--3" gap={0.05}>
            {services.map((s) => (
              <StaggerItem key={s.id}>
                <ServiceCard to={`/services/${s.id}`} image={serviceImage(s.id)} title={s.name} subtitle={s.tagline} tag="Service" />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============================ STATS ============================ */}
      <section className="section home__statband">
        <div className="container">
          <Stagger className="home__stats" gap={0.08}>
            {stats.map((s) => <Stat key={s.label} value={s.value} label={s.label} />)}
          </Stagger>
        </div>
      </section>

      {/* ============================ MATERIALS ============================ */}
      <section className="section" id="materials">
        <div className="container">
          <div className="home__head">
            <SectionHeading
              eyebrow="Material library"
              title="Fifty-plus families, in their real finish"
              lead="Every material is shown in its true colour and surface — brushed metals, glassy acrylics, woven carbon. Browse by group or open a family for grades and specs."
            />
            <Button to="/materials" variant="soft" className="home__head-cta">All materials <ArrowRight size={16} /></Button>
          </div>
          <Stagger className="home__grid home__grid--3" gap={0.05}>
            {featuredMaterials.map((id) => {
              const m = materials.find((x) => x.id === id)
              if (!m) return null
              return (
                <StaggerItem key={id}>
                  <MaterialSwatch material={m} />
                </StaggerItem>
              )
            })}
          </Stagger>
          <Reveal className="home__groups" delay={0.05}>
            {materialGroups.map((g) => (
              <Link key={g.id} to={`/materials#${g.id}`} className="home__group-chip">{g.name}</Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============================ CAPABILITIES ============================ */}
      <section className="section section--deep">
        <div className="container">
          <SectionHeading eyebrow={capabilities.eyebrow} title={capabilities.title} lead={capabilities.lead} dark />
          <Stagger className="home__caps" gap={0.08}>
            {capabilities.groups.map((g) => (
              <StaggerItem className="cap" key={g.title}>
                <h3 className="cap__title">{g.title}</h3>
                <ul className="cap__list">
                  {g.items.map((it) => (
                    <li key={it}><Check size={15} /> {it}</li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </Stagger>
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
          <Stagger className="home__steps" gap={0.05}>
            {workflow.slice(0, 8).map((w) => (
              <StaggerItem className="hstep" key={w.id}>
                <span className="hstep__num">{w.step}</span>
                <h3 className="hstep__title">{w.title}</h3>
                <p className="hstep__body">{w.blurb}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============================ INDUSTRIES ============================ */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow={industries.eyebrow} title={industries.title} />
          <Stagger className="home__inds" gap={0.06}>
            {industries.items.map((ind) => (
              <StaggerItem className="ind" key={ind.title}>
                <h3 className="ind__title">{ind.title}</h3>
                <p className="ind__body">{ind.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============================ WHY US ============================ */}
      <section className="section section--tint">
        <div className="container">
          <SectionHeading align="center" eyebrow="Why Praimo" title="A partner built around the part" />
          <Stagger className="home__props" gap={0.08}>
            {valueProps.map((v, i) => (
              <StaggerItem className="prop" key={v.title}>
                <span className="prop__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="prop__title">{v.title}</h3>
                <p className="prop__body">{v.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="home__certs" delay={0.05}>
            <ShieldCheck size={18} />
            {certifications.map((c) => <span key={c}>{c}</span>)}
          </Reveal>
        </div>
      </section>

      {/* ============================ FAQ ============================ */}
      <section className="section">
        <div className="container home__faq">
          <SectionHeading eyebrow="Questions" title="Good to know" />
          <Faq items={faqs} />
        </div>
      </section>

      {/* ============================ CTA ============================ */}
      <section className="section">
        <div className="container">
          <Reveal className="cta">
            <img src={siteImages.ctaTexture} alt="" className="cta__bg" aria-hidden="true" />
            <span className="cta__scrim" aria-hidden="true" />
            <div className="cta__copy">
              <h2 className="cta__title">Have a drawing ready?</h2>
              <p className="cta__lead">
                Upload your file and we'll review it, suggest improvements where it helps, and email you a clear quote — usually within a day.
              </p>
              <Button to="/order" size="lg">Start a project <ArrowRight size={18} /></Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
