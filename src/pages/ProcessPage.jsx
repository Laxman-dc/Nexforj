import { ArrowRight, ClipboardList, PackageSearch, PenTool, Truck, Settings, PenLine } from 'lucide-react'
import PageHeader from '../components/common/PageHeader.jsx'
import Media from '../components/common/Media.jsx'
import Reveal from '../components/common/Reveal.jsx'
import Button from '../components/common/Button.jsx'
import Faq from '../components/common/Faq.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import { workflow } from '../data/process.js'
import { faqs } from '../data/content.js'
import { siteImages } from '../data/images.js'
import AnimatedProcess from '../components/sections/AnimatedProcess/AnimatedProcess.jsx'
import ProcessHeroSketch from '../components/sections/AnimatedProcess/ProcessHeroSketch.jsx'
import './ProcessPage.css'

export default function ProcessPage() {
  return (
    <div className="process relative-page">
      <svg style={{ width: 0, height: 0, position: 'absolute' }}>
        <filter id="process-sketch-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* Scattered Doodles for Process Page */}
      <div className="process__doodles">
        <ClipboardList className="process-doodle pd-1" strokeWidth={1} />
        <PackageSearch className="process-doodle pd-2" strokeWidth={1.5} />
        <Settings className="process-doodle pd-3" strokeWidth={1} />
        <Truck className="process-doodle pd-4" strokeWidth={1.5} />
        <PenLine className="process-doodle pd-5" strokeWidth={1} />
      </div>

      <PageHeader
        crumb="How it works"
        eyebrow="Order workflow"
        title="From drawing to doorstep"
        lead="A clear, predictable path. You upload your file once, our engineers review it and email a quote, then we make, inspect and ship. No public pricing — every quote is reviewed by a person first."
        aside={<ProcessHeroSketch />}
      />

      <section className="section">
        <div className="container">
          <AnimatedProcess />
        </div>
      </section>

      <section className="section section--tint">
        <div className="container process__faq">
          <SectionHeading eyebrow="Questions" title="Good to know" />
          <Faq items={faqs} />
        </div>
      </section>


    </div>
  )
}
