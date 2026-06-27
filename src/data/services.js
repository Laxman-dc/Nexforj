/* =========================================================================
   SERVICES — complete capability tree (nothing omitted)

   Each category carries:
     - model    : key for the 3D viewer (real rotating component)
     - groups   : sub-process groups; captures the full nested tree
                  (e.g. VMC → Milling → Face/Slot/Pocket…)
     - specs    : quick capability facts

   model ∈ cutPlate | machinedBlock | turnedShaft | weldFrame | gear |
           printedLattice | castBracket | moldedPart | coatedPart | gaugePart
   Add / remove a category or process by editing this file only.
   ========================================================================= */

export const services = [
  {
    id: 'cutting', name: 'Cutting', model: 'cutPlate',
    tagline: 'Sheet, plate, tube and pipe — clean and fast',
    description:
      'High-power laser, waterjet and plasma systems cut metals, plastics and composites with crisp, repeatable edges straight from your drawing.',
    specs: { Tolerance: '±0.1 mm', 'Max sheet': '3000 × 1500 mm', 'Max thickness': 'up to 200 mm' },
    groups: [
      { title: 'Processes', items: [
        'Laser Cutting', 'Acrylic Cutting', 'Waterjet Cutting', 'Plasma Cutting',
        'Flame Cutting', 'CNC Routing', 'Tube Cutting', 'Pipe Cutting',
      ] },
    ],
  },
  {
    id: 'cnc-machining', name: 'CNC Machining', model: 'machinedBlock',
    tagline: '3 & 5-axis milling, turning and everything between',
    description:
      'Milled and turned parts from solid stock on vertical (VMC) and horizontal (HMC) machining centres and live-tooling lathes — housings, brackets, shafts and precision fits.',
    specs: { Tolerance: '±0.025 mm', 'Mill envelope': '1200 × 600 × 500 mm', 'Turn dia': 'Ø 400 mm' },
    groups: [
      { title: 'VMC — Milling', items: ['Face Milling', 'Slot Milling', 'Pocket Milling', 'Profile Milling', 'Thread Milling'] },
      { title: 'VMC — Drilling', items: ['Through Hole', 'Blind Hole', 'Deep Hole', 'Peck Drilling'] },
      { title: 'VMC — Tapping', items: ['Internal Thread', 'Blind Hole', 'Through Hole'] },
      { title: 'VMC — Boring', items: ['Precision Boring', 'Line Boring', 'Fine Boring'] },
      { title: 'VMC — Finishing', items: ['Reaming', 'Counterboring', 'Countersinking', 'Chamfering', 'Engraving'] },
      { title: 'HMC Machining', items: ['Horizontal Machining Centre', 'High-volume production', 'Multi-face setups'] },
      { title: 'CNC Turning', items: ['Facing', 'Turning', 'Grooving', 'Thread Cutting', 'Parting', 'Knurling'] },
    ],
  },
  {
    id: 'grinding', name: 'Grinding', model: 'turnedShaft',
    tagline: 'Mirror finishes and micron-level accuracy',
    description:
      'Precision grinding brings ground surfaces to tight size and roughness targets — ideal for shafts, dies, tooling and mating faces.',
    specs: { Tolerance: '±0.002 mm', Finish: 'Ra 0.1–0.4 µm', Hardness: 'works hardened steel' },
    groups: [
      { title: 'Processes', items: ['Surface Grinding', 'Cylindrical Grinding', 'Centerless Grinding', 'Tool Grinding', 'Jig Grinding'] },
    ],
  },
  {
    id: 'heat-treatment', name: 'Heat Treatment', model: 'castBracket',
    tagline: 'Hardness, toughness and stability on demand',
    description:
      'Controlled heating and cooling cycles tune the hardness, strength and internal stress of metal parts so they perform and last.',
    specs: { Hardness: 'up to 64 HRC', Furnace: 'Sealed quench & vacuum', Certs: 'On request' },
    groups: [
      { title: 'Processes', items: ['Hardening', 'Case Hardening', 'Annealing', 'Tempering', 'Normalizing', 'Stress Relieving'] },
    ],
  },
  {
    id: 'fabrication', name: 'Fabrication', model: 'weldFrame',
    tagline: 'Welding, forming and assembly into finished structures',
    description:
      'Sheet-metal, structural and pipe fabrication with a full range of welding, bending, rolling and assembly to turn parts into complete weldments.',
    specs: { Welding: 'TIG / MIG / Arc', 'Brake length': 'up to 3 m', Assembly: 'Full build' },
    groups: [
      { title: 'Fabrication', items: ['Sheet Metal Fabrication', 'Structural Fabrication', 'Pipe Fabrication'] },
      { title: 'Welding', items: ['Gas Welding', 'TIG Welding', 'MIG Welding', 'Arc Welding', 'Spot Welding', 'Resistance Welding', 'Plasma Welding', 'Brazing', 'Soldering'] },
      { title: 'Forming & Build', items: ['Bending', 'Rolling', 'Assembly'] },
    ],
  },
  {
    id: 'gear-manufacturing', name: 'Gear Manufacturing', model: 'gear',
    tagline: 'Every gear geometry, cut and ground to grade',
    description:
      'Hobbed, shaped and ground gears across the full geometry range — from simple spur gears to spiral bevel, worm and planetary sets.',
    specs: { Quality: 'up to DIN 5', Module: '0.5–12', Types: '14 geometries' },
    groups: [
      { title: 'Parallel-axis', items: ['Spur Gear', 'Helical Gear', 'Double Helical Gear', 'Herringbone Gear', 'Internal Gear', 'Rack & Pinion'] },
      { title: 'Intersecting-axis', items: ['Bevel Gear', 'Spiral Bevel Gear', 'Miter Gear', 'Crown Gear'] },
      { title: 'Skew & special', items: ['Worm Gear', 'Hypoid Gear', 'Planetary Gear', 'Custom Gear'] },
    ],
  },
  {
    id: '3d-printing', name: '3D Printing', model: 'printedLattice',
    tagline: 'Rapid prototypes and end-use parts, layer by layer',
    description:
      'Additive manufacturing across plastics and resins — fast iteration, complex geometry and short-run production without tooling.',
    specs: { 'Layer height': '0.05–0.3 mm', 'Build volume': '400 × 400 × 450 mm', Lead: 'Same-day options' },
    groups: [
      { title: 'Technologies', items: ['FDM', 'SLA', 'SLS', 'MJF', 'Resin Printing', 'PLA'] },
    ],
  },
  {
    id: 'casting', name: 'Casting', model: 'castBracket',
    tagline: 'Net-shape metal parts in volume',
    description:
      'Sand, die, investment and gravity casting deliver complex metal shapes efficiently — from one-offs to production runs.',
    specs: { Weight: '10 g – 200 kg', Tolerance: '±0.3 mm', Volume: 'Proto to mass' },
    groups: [
      { title: 'Processes', items: ['Sand Casting', 'Die Casting', 'Investment Casting', 'Gravity Casting'] },
    ],
  },
  {
    id: 'injection-molding', name: 'Injection Molding', model: 'moldedPart',
    tagline: 'High-volume plastic parts, repeatably',
    description:
      'Tooling and moulding for plastic components at scale — consistent quality and fine detail at production volumes.',
    specs: { 'Shot size': 'up to 1200 g', Cavities: 'Multi-cavity', Volume: '1k – 1M+' },
    groups: [
      { title: 'Capabilities', items: ['Tool Design & Build', 'Prototype Tooling', 'Production Moulding', 'Over-moulding', 'Insert Moulding'] },
    ],
  },
  {
    id: 'surface-finishing', name: 'Surface Finishing', model: 'coatedPart',
    tagline: 'Protect, harden and beautify every surface',
    description:
      'A complete finishing line — coating, plating, blasting and polishing — to protect parts, improve wear and deliver the look you want.',
    specs: { Colours: '40+ powder', Plating: 'Zinc / Ni / Cr', Finish: 'Matte to mirror' },
    groups: [
      { title: 'Coating', items: ['Powder Coating', 'Painting', 'Anodizing'] },
      { title: 'Plating', items: ['Zinc Plating', 'Nickel Plating', 'Chrome Plating', 'Electroplating', 'Black Oxide', 'Passivation'] },
      { title: 'Mechanical', items: ['Sand Blasting', 'Bead Blasting', 'Polishing', 'Buffing', 'Deburring', 'Tumbling'] },
    ],
  },
  {
    id: 'quality-inspection', name: 'Quality & Inspection', model: 'gaugePart',
    tagline: 'Measured, certified and documented',
    description:
      'In-house metrology and certification — CMM inspection, material and hardness testing, and full ISO documentation with every order on request.',
    specs: { CMM: '±0.002 mm', Reports: 'Full dimensional', Docs: 'ISO on request' },
    groups: [
      { title: 'Inspection & testing', items: ['CMM Inspection', 'Material Test Certificate', 'Hardness Testing', 'Surface Roughness Testing', 'Dimensional Inspection', 'ISO Documentation'] },
    ],
  },
]

/* Helpers ----------------------------------------------------------------- */
export const getService = (id) => services.find((s) => s.id === id)
