/* =========================================================================
   SITE CONTENT
   Written copy used across the site. No pricing anywhere — quotes are sent by
   email after a real engineer reviews the job.
   ========================================================================= */

export const hero = {
  eyebrow: 'Precision manufacturing, on demand',
  title: ['From your drawing', 'to a finished part'],
  lead:
    'Nexforj is a full-service digital manufacturing partner. Upload a file, choose a process, and our shop floor turns it into a real, inspected part — shipped anywhere in the world.',
  primary: { label: 'Start a project', path: '/order' },
  secondary: { label: 'Explore services', path: '/services' },
}

export const stats = [
  { value: '3', label: 'Core manufacturing processes' },
  { value: '72 hrs', label: 'Typical prototype turnaround' },
  { value: 'Global', label: 'Shipping & support' },
]

export const trustStrip = [
  'Rieter', 'Hitachi', 'Halliburton', 'ITC', 'Indian Railways',
  'India Forge', 'Bharat Forge', 'Larsen & Toubro', 'Tata Motors',
]

export const valueProps = [
  {
    title: 'One partner, every process',
    body:
      'Cutting, machining, fabrication, gears, casting, moulding, finishing and inspection live under one roof — so a multi-step part never needs a second vendor or a second shipment.',
  },

  {
    title: 'Engineered, not just made',
    body:
      'Every file gets a manufacturability review. We flag issues early and suggest improvements, so the first part is right and the thousandth is identical.',
  },
  {
    title: 'Quoted by a person, by email',
    body:
      'No surprise pricing and no public rate card. Our engineers review your drawing and send a clear, itemised quote straight to your inbox — usually within a day.',
  },
]

export const capabilities = {
  eyebrow: 'Capabilities',
  title: 'A shop floor that covers the whole part',
  lead:
    'Most parts touch more than one machine. Because every step happens in-house, we route work between processes without handoffs, delays or finger-pointing.',
  groups: [
    {
      title: 'CNC Machining',
      items: ['CNC Machining Service', 'CNC Milling', 'CNC Turning'],
    },
    {
      title: '3D Printing',
      items: ['Fused Deposition Modeling (FDM)', 'Stereolithography (SLA)', 'Selective Laser Sintering (SLS)', 'Multi Jet Fusion (MJF)'],
    },
    {
      title: 'Sheet Metal Fabrication',
      items: ['Laser Cutting', 'Tube Laser Cutting', 'Waterjet Cutting', 'Plasma Cutting', 'Bending & Rolling', 'Welding and Assembly'],
    },
  ],
}

export const industries = {
  eyebrow: 'Who we build for',
  title: 'Parts for teams that cannot afford an ordinary one',
  items: [
    { title: 'Aerospace & defense', body: 'Flight-critical brackets, housings and fittings held to tight tolerance with full material traceability.' },
    { title: 'Automotive & EV', body: 'Prototype to production runs — chassis hardware, powertrain components and battery enclosures.' },
    { title: 'Robotics & automation', body: 'Structural frames, custom gears and precision shafts for machines that run all day.' },
    { title: 'Medical devices', body: 'Clean, passivated stainless and biocompatible plastics machined to spec with documentation.' },
    { title: 'Energy & industrial', body: 'Heavy fabrications, cast brackets and wear parts built to survive demanding environments.' },
    { title: 'Electronics & consumer', body: 'Enclosures, heat sinks and finished housings with the surface quality a product deserves.' },
  ],
}

export const faqs = [
  {
    q: 'How do I get a price?',
    a: 'Upload your CAD or drawing on the Start a project page. Our engineers review it for manufacturability and email you a clear, itemised quote — usually within one business day. We deliberately keep pricing off the public site so every quote reflects your real part, quantity and finish.',
  },
  {
    q: 'What files do you accept?',
    a: 'STEP, IGES, DXF, DWG, STL and PDF cover almost everything. Send a single part or a full assembly, along with quantity, material and any notes on tolerances or finishes.',
  },
  {
    q: 'Can you handle both prototypes and production?',
    a: 'Yes. The same shop floor runs one-off prototypes and repeat production batches. We plan tooling and routing around your volume so the economics and lead time make sense at any quantity.',
  },
  {
    q: 'Do you offer finishing and inspection too?',
    a: 'Every finishing process — anodising, powder coating, plating, passivation, polishing — and full inspection, including CMM and material certificates, are available in-house. Your part leaves ready to use.',
  },
  {
    q: 'Where do you ship?',
    a: 'Worldwide. Parts are protectively packed and dispatched with documentation and tracking so they arrive ready to install.',
  },
]

export const certifications = ['ISO 9001 Quality', 'Material Traceability', 'CMM Inspection', 'RoHS / REACH', 'NDA on request']

export const about = {
  eyebrow: 'Who we are',
  title: 'A modern shop floor, wired to your screen',
  paragraphs: [
    'Nexforj connects designers and engineers to a full-service manufacturing floor through a single, calm interface. The complexity of routing a part across machines, materials and finishes stays with us — you simply describe what you need.',
    'We built the platform around real work, not stock-photo gloss. The processes you see are the processes we run, and the materials you browse are the stock we cut, turn and form every day. Understanding the part is the first step to making it well.',
    'From a single prototype to a repeating production run, our promise is the same: precise parts, honest timelines, and an engineer on the other end of every quote.',
  ],
  principles: [
    { title: 'Precision', body: 'Tight tolerances held and verified, with inspection built into the workflow rather than bolted on at the end.' },
    { title: 'Breadth', body: 'A genuinely complete catalogue of materials and processes, so almost any part has a home here.' },
    { title: 'Clarity', body: 'Clear communication, clear quotes by email, and a clear view of where your job stands.' },
    { title: 'Reach', body: 'Built to serve makers and manufacturers globally, with worldwide shipping and support.' },
  ],
}
