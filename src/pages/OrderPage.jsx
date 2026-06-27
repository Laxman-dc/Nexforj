import { useState, useRef } from 'react'
import { UploadCloud, FileCheck2, ArrowRight, Mail, Check } from 'lucide-react'
import Reveal from '../components/common/Reveal.jsx'
import Media from '../components/common/Media.jsx'
import { siteImages } from '../data/images.js'
import { services } from '../data/services.js'
import { materialGroups, materialsByGroup } from '../data/materials.js'
import './OrderPage.css'

const FINISHES = [
  'As machined', 'Anodising', 'Powder Coating', 'Painting', 'Zinc Plating',
  'Nickel Plating', 'Chrome Plating', 'Black Oxide', 'Polishing', 'Passivation', 'Other / not sure',
]
const QUALITY = ['Standard inspection', 'Dimensional report', 'CMM inspection', 'Material certificate', 'ISO documentation']

const ORDER_EMAIL = 'quotes@praimo-innovations.com'

export default function OrderPage() {
  const [files, setFiles] = useState([])
  const [drag, setDrag] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', company: '', qty: '1',
    material: '', process: '', finish: 'As machined', quality: 'Standard inspection',
    notes: '',
  })
  const inputRef = useRef(null)

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const addFiles = (list) => {
    const incoming = Array.from(list).map((f) => f.name)
    setFiles((prev) => Array.from(new Set([...prev, ...incoming])))
  }
  const onDrop = (e) => {
    e.preventDefault()
    setDrag(false)
    if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files)
  }

  const buildMailto = () => {
    const lines = [
      'Hello Praimo Innovations team,',
      '',
      'I would like a quote for the following:',
      '',
      `Name:     ${form.name || '—'}`,
      `Company:  ${form.company || '—'}`,
      `Email:    ${form.email || '—'}`,
      `Quantity: ${form.qty || '—'}`,
      `Material: ${form.material || 'To be advised'}`,
      `Process:  ${form.process || 'To be advised'}`,
      `Finish:   ${form.finish}`,
      `Quality:  ${form.quality}`,
      '',
      `Files to attach: ${files.length ? files.join(', ') : '(please remember to attach your CAD / drawing)'}`,
      '',
      'Notes:',
      form.notes || '—',
      '',
      'Thank you.',
    ]
    const subject = `Quote request${form.company ? ` — ${form.company}` : ''}`
    return `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`
  }

  return (
    <div className="order">
      <header className="order__hero">
        <div className="order__hero-glow glow" aria-hidden="true" />
        <div className="container order__hero-inner">
          <div className="order__hero-copy">
            <Reveal as="p" className="eyebrow" y={14}>Start a project</Reveal>
            <Reveal as="h1" className="order__title" delay={0.05} y={20}>Upload your drawing, get a quote by email</Reveal>
            <Reveal as="p" className="order__lead lead" delay={0.1} y={18}>
              This is the one place you share a file. Tell us a little about the part, attach your CAD or drawing,
              and our engineers will review it and reply with a clear quote — never published on the site.
            </Reveal>
            <Reveal className="order__assure" delay={0.15}>
              <span><Check size={15} /> Reviewed by a real engineer</span>
              <span><Check size={15} /> Quote sent to your inbox</span>
              <span><Check size={15} /> No public pricing</span>
            </Reveal>
          </div>
          <Reveal className="order__hero-stage" delay={0.1}>
            <Media src={siteImages.order} alt="Precision machined part" ratio="4/3" parallax={22} />
          </Reveal>
        </div>
      </header>

      <section className="section">
        <div className="container order__grid">
          {/* upload + form */}
          <div className="order__form">
            {/* dropzone */}
            <div
              className={`dropzone ${drag ? 'is-drag' : ''}`}
              onDragOver={(e) => { e.preventDefault(); setDrag(true) }}
              onDragLeave={() => setDrag(false)}
              onDrop={onDrop}
              onClick={() => inputRef.current?.click()}
              role="button"
              tabIndex={0}
            >
              <input
                ref={inputRef}
                type="file"
                multiple
                hidden
                accept=".step,.stp,.iges,.igs,.dxf,.dwg,.pdf,.stl,.sldprt,.x_t,.zip"
                onChange={(e) => e.target.files && addFiles(e.target.files)}
              />
              <UploadCloud size={34} className="dropzone__icon" />
              <p className="dropzone__title">Drop your CAD or drawing here</p>
              <p className="dropzone__sub">STEP · IGES · DXF · DWG · PDF · STL — or click to browse</p>
            </div>

            {files.length > 0 && (
              <ul className="filelist">
                {files.map((name) => (
                  <li className="filelist__item" key={name}>
                    <FileCheck2 size={16} /> {name}
                    <button className="filelist__remove" onClick={() => setFiles((p) => p.filter((n) => n !== name))} aria-label={`Remove ${name}`}>×</button>
                  </li>
                ))}
              </ul>
            )}

            {/* fields */}
            <div className="field-grid">
              <label className="field">
                <span>Your name</span>
                <input type="text" value={form.name} onChange={set('name')} placeholder="Jane Maker" />
              </label>
              <label className="field">
                <span>Email</span>
                <input type="email" value={form.email} onChange={set('email')} placeholder="jane@company.com" />
              </label>
              <label className="field">
                <span>Company (optional)</span>
                <input type="text" value={form.company} onChange={set('company')} placeholder="Company Ltd" />
              </label>
              <label className="field">
                <span>Quantity</span>
                <input type="number" min="1" value={form.qty} onChange={set('qty')} />
              </label>

              <label className="field">
                <span>Material</span>
                <select value={form.material} onChange={set('material')}>
                  <option value="">Select or decide later</option>
                  {materialGroups.map((g) => (
                    <optgroup label={g.name} key={g.id}>
                      {materialsByGroup(g.id).map((m) => (
                        <option key={m.id} value={m.name}>{m.name}</option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </label>
              <label className="field">
                <span>Process</span>
                <select value={form.process} onChange={set('process')}>
                  <option value="">Select or let us route it</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.name}>{s.name}</option>
                  ))}
                </select>
              </label>
              <label className="field">
                <span>Surface finish</span>
                <select value={form.finish} onChange={set('finish')}>
                  {FINISHES.map((f) => <option key={f} value={f}>{f}</option>)}
                </select>
              </label>
              <label className="field">
                <span>Quality / inspection</span>
                <select value={form.quality} onChange={set('quality')}>
                  {QUALITY.map((q) => <option key={q} value={q}>{q}</option>)}
                </select>
              </label>

              <label className="field field--full">
                <span>Notes</span>
                <textarea rows={4} value={form.notes} onChange={set('notes')} placeholder="Tolerances, materials, deadlines, anything else we should know…" />
              </label>
            </div>

            <a className="order__submit" href={buildMailto()}>
              <Mail size={18} /> Send quote request <ArrowRight size={18} />
            </a>
            <p className="order__submit-note">
              This opens an email to our team with your details filled in. Attach the file(s) above before sending —
              we'll review and reply with a quote.
            </p>
          </div>

          {/* side summary */}
          <aside className="order__side">
            <div className="order__summary">
              <h3 className="order__summary-title">What happens next</h3>
              <ol className="order__summary-steps">
                <li><strong>We review</strong> your file for manufacturability.</li>
                <li><strong>We quote</strong> by email, with options and lead times.</li>
                <li><strong>We make, inspect and ship</strong> once you confirm.</li>
              </ol>
              <div className="order__summary-divider" />
              <p className="order__summary-help">
                Prefer to email directly? Reach us at{' '}
                <a href={`mailto:${ORDER_EMAIL}`}>{ORDER_EMAIL}</a>.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
