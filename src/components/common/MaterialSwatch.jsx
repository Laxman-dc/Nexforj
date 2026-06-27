import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import './MaterialSwatch.css'

/* Turn a material's finish descriptor into layered CSS so the swatch reads as
   the real material: metals get a brushed specular sheen, translucent plastics
   look glassy, carbon shows a weave, matte materials stay flat. */
function swatchStyle(model = {}) {
  const base = model.color || '#9aa3ad'
  const metalness = model.metalness ?? 0
  const transmission = model.transmission ?? 0
  const weave = model.weave
  const layers = []

  // specular streak — stronger for metals
  const spec = 0.12 + metalness * 0.5
  layers.push(
    `linear-gradient(135deg, rgba(255,255,255,${spec}) 0%, rgba(255,255,255,0) 38%, rgba(0,0,0,${0.05 + metalness * 0.2}) 100%)`
  )
  // brushed lines for metals
  if (metalness > 0.55) {
    layers.push(
      'repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 4px)'
    )
  }
  // carbon weave
  if (weave) {
    layers.push(
      'repeating-linear-gradient(45deg, rgba(0,0,0,0.32) 0 5px, rgba(255,255,255,0.06) 5px 10px)',
      'repeating-linear-gradient(-45deg, rgba(0,0,0,0.28) 0 5px, rgba(255,255,255,0.05) 5px 10px)'
    )
  }
  // glassy translucency
  if (transmission > 0.2) {
    layers.push(`linear-gradient(135deg, rgba(255,255,255,0.35), rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.2))`)
  }
  layers.push(`linear-gradient(${base}, ${base})`)

  return {
    backgroundImage: layers.join(', '),
    opacity: transmission > 0.4 ? 0.92 : 1,
  }
}

export default function MaterialSwatch({ material, groupName }) {
  return (
    <Link to={`/materials/${material.id}`} className="swatch">
      <div className="swatch__chip" style={swatchStyle(material.model)}>
        <span className="swatch__sheen" aria-hidden="true" />
        {material.grades?.length > 0 && (
          <span className="swatch__grades">{material.grades.length} grades</span>
        )}
      </div>
      <div className="swatch__body">
        <div>
          <h3 className="swatch__name">{material.name}</h3>
          <p className="swatch__sub">{material.blurb}</p>
        </div>
        <span className="swatch__go" aria-hidden="true">
          <ArrowUpRight size={16} />
        </span>
      </div>
    </Link>
  )
}
