import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/common/PageHeader.jsx'
import Media from '../components/common/Media.jsx'
import Reveal, { Stagger, StaggerItem } from '../components/common/Reveal.jsx'
import MaterialSwatch from '../components/common/MaterialSwatch.jsx'
import Button from '../components/common/Button.jsx'
import { materialGroups, materialsByGroup, getMaterial } from '../data/materials.js'
import { siteImages, groupImage } from '../data/images.js'
import './ListingPage.css'

export default function MaterialsPage() {
  return (
    <div className="listing">
      <PageHeader
        crumb="Materials"
        eyebrow="Material library"
        title="Fifty-plus families, nothing skipped"
        lead="Metals, plastics, composites, rubber, wood, foam and specialty stock — each shown in its true finish. Jump to a group below, or open any family for grades, properties and typical processes."
        aside={<Media src={siteImages.about} alt="Material stock" ratio="4/3" parallax={26} />}
      />

      {/* quick group nav */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <Reveal className="matnav">
            {materialGroups.map((g) => (
              <Link key={g.id} to={`/materials#${g.id}`} className="matnav__chip">
                {g.name} <span>{materialsByGroup(g.id).length}</span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {materialGroups.map((g, gi) => {
        const items = materialsByGroup(g.id)
        return (
          <section className="section" key={g.id} style={{ paddingTop: '3rem' }}>
            <div className="container">
              <div className="group" id={g.id}>
                <div className="group__banner">
                  <Media src={groupImage(g.id)} alt={g.name} ratio={gi % 2 ? '21/6' : '21/6'} overlay>
                    <div className="group__banner-copy">
                      <h2 className="group__banner-name">{g.name}</h2>
                      <p className="group__banner-blurb">{g.blurb}</p>
                    </div>
                  </Media>
                  <span className="group__count">{items.length} materials</span>
                </div>

                <Stagger className="listing__grid listing__grid--4" gap={0.04}>
                  {items.map((m) => (
                    <StaggerItem key={m.id}>
                      <MaterialSwatch material={m} groupName={g.name} />
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </div>
          </section>
        )
      })}

      <section className="section">
        <div className="container">
          <div className="listing__foot">
            <p>Working with something exotic, or supplying your own stock? We handle custom material too.</p>
            <Button to="/order">Start a project <ArrowRight size={16} /></Button>
          </div>
        </div>
      </section>
    </div>
  )
}
