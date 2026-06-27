/* =========================================================================
   ORDER WORKFLOW
   The path a job takes from drawing to delivery. Quoting is handled over
   email after our engineers review the file — there is no price on the site.
   Edit this array to add, reorder or remove a step.
   ========================================================================= */

export const workflow = [
  {
    id: 'upload',
    step: '01',
    title: 'Upload CAD / Drawing',
    blurb:
      'Send a STEP, IGES, DXF, DWG or PDF along with your quantity and notes. This is the only place you need to share a file — everywhere else is for exploring.',
    detail: ['STEP · IGES · DXF · DWG · PDF', 'Single part or full assembly', 'Notes, GD&T and revisions welcome'],
  },
  {
    id: 'review',
    step: '02',
    title: 'Engineering review & quote by email',
    blurb:
      'Our team checks manufacturability, suggests improvements where it helps, and sends a clear quote straight to your inbox — never published on the site.',
    detail: ['DFM feedback', 'Lead-time options', 'Quote delivered by email'],
  },
  {
    id: 'material',
    step: '03',
    title: 'Material selection',
    blurb:
      'Choose from our full library of metals, plastics, composites, rubber, wood and foam — or supply your own stock. We confirm grade and certification needs.',
    detail: ['50+ material families', 'Grade & temper guidance', 'Certificates on request'],
  },
  {
    id: 'process',
    step: '04',
    title: 'Manufacturing process selection',
    blurb:
      'Cutting, CNC machining, grinding, fabrication, gears, casting, moulding, 3D printing — we map the right route, or combine several, to hit your spec.',
    detail: ['Single or multi-process routing', 'Prototype to production', 'Tolerance planning'],
  },
  {
    id: 'finish',
    step: '05',
    title: 'Surface finish selection',
    blurb:
      'Anodising, powder coating, plating, passivation, polishing and more — chosen for protection, function and the look you want.',
    detail: ['Protective & decorative', 'Colour & texture options', 'Spec-driven selection'],
  },
  {
    id: 'inspection',
    step: '06',
    title: 'Quality inspection',
    blurb:
      'CMM and dimensional inspection, hardness and roughness testing, material certificates and ISO documentation verify every critical feature.',
    detail: ['CMM & dimensional', 'Material test certificates', 'ISO documentation'],
  },
  {
    id: 'manufacturing',
    step: '07',
    title: 'Manufacturing',
    blurb:
      'Your job runs on the right machines with progress tracked end to end, so timelines stay predictable from first chip to final part.',
    detail: ['Scheduled production', 'In-process checks', 'Status updates'],
  },
  {
    id: 'shipping',
    step: '08',
    title: 'Shipping',
    blurb:
      'Parts are protectively packed and dispatched worldwide, with documentation and tracking so they arrive ready to use.',
    detail: ['Protective packaging', 'Global dispatch', 'Docs & tracking included'],
  },
]
