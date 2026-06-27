import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/common/PageHeader.jsx'
import Media from '../components/common/Media.jsx'
import Reveal, { Stagger, StaggerItem } from '../components/common/Reveal.jsx'
import Button from '../components/common/Button.jsx'
import { useCountUp } from '../hooks/useCountUp.js'
import { about, stats } from '../data/content.js'
import { siteImages } from '../data/images.js'
import './AboutPage.css'

function AStat({ value, label }) {
  const [ref, display] = useCountUp(value)
  return (
    <StaggerItem className="about__stat">
      <span className="about__stat-val" ref={ref}>{display}</span>
      <span className="about__stat-lab">{label}</span>
    </StaggerItem>
  )
}

export default function AboutPage() {
  return (
    <div className="about">
      <PageHeader
        crumb="About"
        eyebrow={about.eyebrow}
        title={about.title}
        lead={about.paragraphs[0]}
        aside={<Media src={siteImages.about} alt="Praimo shop floor" ratio="4/3" parallax={26} />}
      />

      <section className="section">
        <div className="container about__body">
          <div className="about__story">
            {about.paragraphs.slice(1).map((p, i) => (
              <Reveal as="p" className="about__para" key={i} delay={i * 0.05}>{p}</Reveal>
            ))}
          </div>
          <Stagger className="about__stats">
            {stats.map((s) => <AStat key={s.label} value={s.value} label={s.label} />)}
          </Stagger>
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
            {about.principles.map((p, i) => (
              <StaggerItem className="princ" key={p.title}>
                <span className="princ__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="princ__title">{p.title}</h3>
                <p className="princ__body">{p.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="about__cta">
            <div>
              <h2 className="about__cta-title">Let's build something</h2>
              <p className="about__cta-lead">Send us a drawing and we'll show you what a calm manufacturing partner feels like.</p>
            </div>
            <Button to="/order" size="lg">Start a project <ArrowRight size={18} /></Button>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
