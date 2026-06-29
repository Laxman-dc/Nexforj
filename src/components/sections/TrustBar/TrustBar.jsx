import './TrustBar.css'

const items = [
  'CNC Machining', ' Laser Cutting', ' 3D Printing',
  ' Gear Manufacturing', ' Heat Treatment', ' Surface Finishing',
  ' Waterjet Cutting', ' Sheet Metal Fab', ' Grinding & Lapping',
  ' Pan-India Delivery', ' 24hr Lead Time', ' DFM Review Included',
]

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="trust-bar__track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="trust-bar__item">{item}</span>
        ))}
      </div>
    </div>
  )
}
