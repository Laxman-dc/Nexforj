import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/common/PageHeader.jsx'
import Media from '../components/common/Media.jsx'
import Reveal from '../components/common/Reveal.jsx'
import Button from '../components/common/Button.jsx'
import Faq from '../components/common/Faq.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import { workflow } from '../data/process.js'
import { faqs } from '../data/content.js'
import { siteImages } from '../data/images.js'
import './ProcessPage.css'

export default function ProcessPage() {
  return (
    <div className="process">
      <PageHeader
        crumb="How it works"
        eyebrow="Order workflow"
        title="From drawing to doorstep"
        lead="A clear, predictable path. You upload your file once, our engineers review it and email a quote, then we make, inspect and ship. No public pricing — every quote is reviewed by a person first."
        aside={<Media src={siteImages.processBanner} alt="Manufacturing process" ratio="4/3" parallax={26} />}
      />

      <section className="section">
        <div className="container">
          <ol className="flow">
            {workflow.map((w, i) => (
              <Reveal as="li" className="flow__step" key={w.id} delay={i * 0.03}>
                <div className="flow__marker">
                  <span className="flow__num">{w.step}</span>
                  {i < workflow.length - 1 && <span className="flow__line" aria-hidden="true" />}
                </div>
                <div className="flow__content">
                  <h3 className="flow__title">{w.title}</h3>
                  <p className="flow__blurb">{w.blurb}</p>
                  <ul className="flow__detail">
                    {w.detail.map((d) => <li key={d}>{d}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container process__faq">
          <SectionHeading eyebrow="Questions" title="Good to know" />
          <Faq items={faqs} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="process__cta">
            <div>
              <h2 className="process__cta-title">Ready when you are</h2>
              <p className="process__cta-lead">Upload your drawing and we'll take it from here.</p>
            </div>
            <Button to="/order" size="lg">Start a project <ArrowRight size={18} /></Button>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
