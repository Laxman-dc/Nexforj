import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import './Services.css'

const servicesData = [
  { id: 'cnc-machining', title: 'CNC Machining', tag: 'Most Popular', tagColor: '#10b981', image: '/images/svc-cnc-nobg.png', techniques: ['CNC Machining Service', 'CNC Milling', 'CNC Turning'] },
  { id: '3d-printing', title: '3D Printing', tag: 'Fast Turnaround', tagColor: '#f59e0b', image: '/images/svc-print-nobg.png', techniques: ['Fused Deposition Modeling (FDM)', 'Stereolithography (SLA)', 'Selective Laser Sintering (SLS)', 'Multi Jet Fusion (MJF)'] },
  { id: 'sheet-metal', title: 'Sheet Metal', tag: 'Enclosures & Parts', tagColor: '#3b82f6', image: '/images/svc-sheet-nobg.png', techniques: ['Bending & Rolling', 'Welding and Assembly'] },
  { id: 'laser-cutting', title: 'Laser Cutting', tag: 'High Precision', tagColor: '#8b5cf6', image: '/images/lasercutted_update.png', techniques: ['Fiber Laser', 'CO2 Laser', 'Tube Laser Cutting', 'Plasma Cutting'] },
  { id: 'waterjet-cutting', title: 'Waterjet Cutting', tag: 'No Heat Zone', tagColor: '#06b6d4', image: '/images/waterjett_updated1.png', techniques: ['Abrasive Waterjet', 'Pure Waterjet'] },
  { id: 'surface-finishing', title: 'Surface Finishing', tag: 'Cosmetics', tagColor: '#ec4899', image: '/images/svc-finish-nobg.png', techniques: ['Anodizing', 'Powder Coating', 'Plating'] },
  { id: 'gear-manufacturing', title: 'Gear Manufacturing', tag: 'Power Transmission', tagColor: '#eab308', image: '/images/svc-gear-nobg.png', techniques: ['Gear Hobbing', 'Gear Shaping', 'Gear Grinding'] },
  { id: 'precision-grinding', title: 'Precision Grinding', tag: 'Tight Tolerances', tagColor: '#6366f1', image: '/images/svc-grind-nobg.png', techniques: ['Surface Grinding', 'Cylindrical Grinding', 'Centerless Grinding'] },
  { id: 'heat-treatment', title: 'Heat Treatment', tag: 'Material Strength', tagColor: '#ef4444', image: '/images/svc-heat-nobg.png', techniques: ['Hardening', 'Annealing', 'Tempering'] },
]

export default function Services({ vertical = false, limit }) {
  const displayData = limit ? servicesData.slice(0, limit) : servicesData;
  return (
    <div className={`svc-accordion ${vertical ? 'svc-accordion--vertical' : ''}`}>
      {displayData.map((svc, i) => (
        <Link to={`/services/${svc.id}`} className="svc-accordion__item" key={svc.id}>
          <img src={svc.image} alt={svc.title} className="svc-accordion__img" />
          <div className="svc-accordion__overlay">
            <div className="svc-accordion__copy">
              <h3 className="svc-accordion__title">{svc.title}</h3>
              <div className="svc-accordion__arrow">
                <ArrowRight size={16} />
              </div>
            </div>
            <ul className="svc-accordion__techniques">
              {svc.techniques.map((t, idx) => (
                <li key={idx}>{t}</li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  )
}
