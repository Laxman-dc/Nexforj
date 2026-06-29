import { ArrowRight, Target, Layers, Eye, Globe, Factory, Cog, PenTool, Ruler, Compass, Monitor, MousePointer2, Cpu, Wrench } from 'lucide-react'
import { motion } from 'framer-motion'
import PageHeader from '../components/common/PageHeader.jsx'
import Media from '../components/common/Media.jsx'
import Reveal, { Stagger, StaggerItem } from '../components/common/Reveal.jsx'
import Button from '../components/common/Button.jsx'
import { about } from '../data/content.js'
import { siteImages } from '../data/images.js'
import './AboutPage.css'


const principleIcons = [Target, Layers, Eye, Globe]

const PencilHighlight = ({ children }) => (
  <span className="brand-highlight">
    {children}
    <svg className="highlight-circle" viewBox="0 0 100 40" preserveAspectRatio="none">
      <motion.path 
        d="M 5,20 Q 20,2 50,5 T 95,20 Q 80,38 50,35 T 5,20" 
        fill="none" 
        stroke="var(--accent)" 
        strokeWidth="2.5" 
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        style={{ filter: 'url(#about-sketch-filter)' }}
      />
    </svg>
  </span>
)

export default function AboutPage() {
  return (
    <div className="about">
      <svg style={{ width: 0, height: 0, position: 'absolute' }}>
        <filter id="about-sketch-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* Scattered Doodles for About Page */}
      <div className="about__doodles">
        <Compass className="about-doodle ad-1" strokeWidth={0.75} />
        <Cog className="about-doodle ad-2" strokeWidth={1} />
        <PenTool className="about-doodle ad-3" strokeWidth={1.5} />
        <Ruler className="about-doodle ad-4" strokeWidth={1} />
        <Factory className="about-doodle ad-5" strokeWidth={1} />
        <Monitor className="about-doodle ad-6" strokeWidth={1} />
        <MousePointer2 className="about-doodle ad-7" strokeWidth={1.5} />
        <Cpu className="about-doodle ad-8" strokeWidth={0.75} />
        <Wrench className="about-doodle ad-9" strokeWidth={1} />
      </div>

      <PageHeader
        crumb="About"
        eyebrow={about.eyebrow}
        title={about.title}
        lead={
          <>
            <PencilHighlight>Nexforj</PencilHighlight> connects designers and engineers to a full-service manufacturing floor through a single, calm interface. The complexity of routing a part across machines, materials and finishes stays with us — you simply describe what you need.
          </>
        }
        aside={<Media src={siteImages.about} alt="Nexforj shop floor" ratio="4/3" parallax={26} />}
      />

      <section className="section">
        <div className="container about__body">
          <div className="about__story">
            <Reveal as="p" className="about__para" delay={0.05}>
              We built the platform around real work, not stock-photo gloss. The processes you see are the exact processes we run, and the materials you browse are the raw stock we cut, turn, and form every single day. At Nexforj, understanding the intricate geometry of a part is the very first step to <PencilHighlight>making it flawless</PencilHighlight>.
            </Reveal>
            <Reveal as="p" className="about__para" delay={0.1}>
              Every design file you upload undergoes a rigorous DFM (Design for Manufacturability) review. We don't just hit print; our engineers evaluate the physics, the tooling paths, and the finish requirements to guarantee <PencilHighlight>unmatched quality</PencilHighlight> upon delivery.
            </Reveal>
            <Reveal as="p" className="about__para" delay={0.15}>
              From a rapid prototype engineered overnight to a high-volume continuous production run, our promise remains absolute: precise tolerances, <PencilHighlight>transparent pricing</PencilHighlight>, and a dedicated mechanical expert on the other end of every quote.
            </Reveal>
          </div>

        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Media src={siteImages.aboutWide} alt="Manufacturing floor" ratio="21/8" parallax={30} />
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <Reveal as="h2" className="about__princ-head">What we hold to</Reveal>
          <Stagger className="about__princ" gap={0.07}>
            {about.principles.map((p, i) => {
              const Icon = principleIcons[i] || Target
              return (
                <StaggerItem className="princ" key={p.title}>
                  <Icon className="princ__watermark" strokeWidth={1} />
                  <div className="princ__header">
                    <span className="princ__num">{String(i + 1).padStart(2, '0')}</span>
                    <Icon className="princ__icon" size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="princ__title">{p.title}</h3>
                  <p className="princ__body">{p.body}</p>
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </section>


    </div>
  )
}
