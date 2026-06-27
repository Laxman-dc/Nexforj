import { useParams, Navigate, Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import Reveal, { Stagger, StaggerItem } from '../components/common/Reveal.jsx'
import Button from '../components/common/Button.jsx'
import MaterialSwatch from '../components/common/MaterialSwatch.jsx'
import { getMaterial, materialsByGroup, materialGroups } from '../data/materials.js'
import './DetailPage.css'

/* big finish panel that renders the material in its true surface */
function FinishPanel({ model = {} }) {
  const base = model.color || '#9aa3ad'
  const metalness = model.metalness ?? 0
  const transmission = model.transmission ?? 0
  const weave = model.weave
  const layers = [`linear-gradient(135deg, rgba(255,255,255,${0.14 + metalness * 0.5}) 0%, rgba(255,255,255,0) 40%, rgba(0,0,0,${0.06 + metalness * 0.22}) 100%)`]
  if (metalness > 0.55) layers.push('repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 5px)')
  if (weave) layers.push('repeating-linear-gradient(45deg, rgba(0,0,0,0.32) 0 6px, rgba(255,255,255,0.06) 6px 12px)', 'repeating-linear-gradient(-45deg, rgba(0,0,0,0.28) 0 6px, rgba(255,255,255,0.05) 6px 12px)')
  if (transmission > 0.2) layers.push('linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.25))')
  layers.push(`linear-gradient(${base}, ${base})`)
  return (
    <div className="finishpanel" style={{ backgroundImage: layers.join(', ') }}>
      <span className="finishpanel__sheen" aria-hidden="true" />
    </div>
  )
}

export default function MaterialFamilyPage() {
  const { id } = useParams()
  const material = getMaterial(id)
  if (!material) return <Navigate to="/materials" replace />

  const group = materialGroups.find((g) => g.id === material.group)
  const siblings = materialsByGroup(material.group).filter((m) => m.id !== material.id).slice(0, 4)

  return (
    <div className="detail">
      <header className="detail__hero">
        <div className="detail__hero-glow glow" aria-hidden="true" />
        <div className="container detail__hero-inner">
          <div className="detail__hero-copy">
            <Reveal as={Link} to={`/materials#${material.group}`} className="detail__back" y={12}>
              <ArrowLeft size={16} /> {group?.name || 'Materials'}
            </Reveal>
            <Reveal as="p" className="eyebrow" delay={0.05} y={14}>Material family</Reveal>
            <Reveal as="h1" className="detail__title" delay={0.08} y={20}>{material.name}</Reveal>
            <Reveal as="p" className="detail__desc lead" delay={0.14} y={18}>{material.blurb}</Reveal>
            <Reveal className="detail__actions" delay={0.2}>
              <Button to="/order">Start a project <ArrowRight size={16} /></Button>
              <Button to="/services" variant="ghost">Browse services</Button>
            </Reveal>
          </div>
          <Reveal className="detail__hero-finish" delay={0.1}>
            <FinishPanel model={material.model} />
          </Reveal>
        </div>
      </header>

      <section className="section">
        <div className="container detail__body">
          <div className="detail__main">
            <h2 className="detail__section-title">Grades & types</h2>
            <p className="detail__section-lead">Common grades we stock and machine in this family.</p>
            <Stagger className="grades" gap={0.03}>
              {material.grades.map((grade) => (
                <StaggerItem as="span" className="grade-chip" key={grade}>{grade}</StaggerItem>
              ))}
            </Stagger>

            <h2 className="detail__section-title" style={{ marginTop: '2.4rem' }}>Typical processes</h2>
            <p className="detail__section-lead">How this material is most often cut, formed and finished.</p>
            <div className="grades">
              {material.processes.map((p) => (
                <Link to="/services" className="proc-chip" key={p}>{p}</Link>
              ))}
            </div>
          </div>

          <aside className="detail__aside">
            <Reveal className="specbox">
              <h3 className="specbox__title">Properties</h3>
              <dl className="specbox__list">
                {Object.entries(material.specs).map(([k, v]) => (
                  <div className="specbox__row" key={k}><dt>{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
            </Reveal>
            <Reveal className="quotebox" delay={0.08}>
              <p>Need certificates or a specific temper? Note it on your request and we'll confirm by email.</p>
              <Button to="/order" variant="soft">Get a quote by email <ArrowRight size={15} /></Button>
            </Reveal>
          </aside>
        </div>
      </section>

      {siblings.length > 0 && (
        <section className="section section--tint">
          <div className="container">
            <h2 className="detail__related-head">More {group?.name?.toLowerCase()}</h2>
            <div className="listing__grid listing__grid--4">
              {siblings.map((m) => <MaterialSwatch material={m} key={m.id} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
