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
    id: 'cnc-machining', name: 'CNC Machining', model: 'machinedBlock',
    tagline: '3 & 5-axis milling, turning and everything between',
    description: 'Milled and turned parts from solid stock on vertical (VMC) and horizontal (HMC) machining centres and live-tooling lathes — housings, brackets, shafts and precision fits.',
    specs: { Tolerance: '±0.025 mm', 'Mill envelope': '1200 × 600 × 500 mm', 'Turn dia': 'Ø 400 mm' },
    groups: [
      { title: 'CNC Machining Service', items: ['CNC Milling', 'CNC Turning'] },
    ],
  },
  {
    id: '3d-printing', name: '3D Printing', model: 'printedLattice',
    tagline: 'Rapid prototypes and end-use parts, layer by layer',
    description: 'Additive manufacturing across plastics and resins — fast iteration, complex geometry and short-run production without tooling.',
    specs: { 'Layer height': '0.05–0.3 mm', 'Build volume': '400 × 400 × 450 mm', Lead: 'Same-day options' },
    groups: [
      { title: 'Technologies', items: ['Fused Deposition Modeling (FDM)', 'Stereolithography (SLA)', 'Selective Laser Sintering (SLS)', 'Multi Jet Fusion (MJF)'] },
    ],
  },
  {
    id: 'sheet-metal', name: 'Sheet Metal Fabrication', model: 'weldFrame',
    tagline: 'Sheet, plate, tube and pipe — clean and fast',
    description: 'High-power laser, waterjet and plasma systems cut metals, plastics and composites with crisp, repeatable edges straight from your drawing. Followed by bending, rolling, and full assembly.',
    specs: { Tolerance: '±0.76 mm / ±1°', 'Max sheet': '44" × 30"', 'Max thickness': '0.500" (12.7 mm)' },
    groups: [
      { title: 'Processes', items: ['Bending & Rolling', 'Welding and Assembly'] },
    ],
  },
  {
    id: 'laser-cutting', name: 'Laser Cutting', model: 'cutPlate',
    tagline: 'High speed, high precision profiling',
    description: 'Fiber and CO2 laser systems for rapidly cutting complex 2D profiles from sheet metal and plastics with exceptional edge quality.',
    specs: { Tolerance: '±0.127 mm', 'Max sheet': '44" × 30"', 'Max thickness': '0.750" (19 mm)' },
    groups: [
      { title: 'Processes', items: ['Fiber Laser', 'CO2 Laser', 'Tube Laser Cutting', 'Plasma Cutting'] },
    ],
  },
  {
    id: 'waterjet-cutting', name: 'Waterjet Cutting', model: 'cutPlate',
    tagline: 'Cold cutting for thick and sensitive materials',
    description: 'Abrasive and pure waterjet cutting to slice through thick metals, composites, and stone without heat-affected zones.',
    specs: { Tolerance: '±0.38 mm', 'Max sheet': '44" × 30"', 'Max thickness': '0.500" (12.7 mm)' },
    groups: [
      { title: 'Processes', items: ['Abrasive Waterjet', 'Pure Waterjet'] },
    ],
  },
  {
    id: 'surface-finishing', name: 'Surface Finishing', model: 'coatedPart',
    tagline: 'Protect, harden and beautify every surface',
    description: 'A complete finishing line — coating, plating, blasting and polishing — to protect parts, improve wear and deliver the look you want.',
    specs: { Colours: '40+ powder', Plating: 'Zinc / Ni / Cr', Finish: 'Matte to mirror' },
    groups: [
      { title: 'Processes', items: ['Anodizing', 'Powder Coating', 'Plating', 'Sand Blasting'] },
    ],
  },
  {
    id: 'gear-manufacturing', name: 'Gear Manufacturing', model: 'gear',
    tagline: 'Every gear geometry, cut and ground to grade',
    description: 'Hobbed, shaped and ground gears across the full geometry range — from simple spur gears to spiral bevel, worm and planetary sets.',
    specs: { Quality: 'up to DIN 5', Module: '0.5–12', Types: '14 geometries' },
    groups: [
      { title: 'Processes', items: ['Gear Hobbing', 'Gear Shaping', 'Gear Grinding'] },
    ],
  },
  {
    id: 'precision-grinding', name: 'Precision Grinding', model: 'turnedShaft',
    tagline: 'Mirror finishes and micron-level accuracy',
    description: 'Precision grinding brings ground surfaces to tight size and roughness targets — ideal for shafts, dies, tooling and mating faces.',
    specs: { Tolerance: '±0.002 mm', Finish: 'Ra 0.1–0.4 µm', Hardness: 'works hardened steel' },
    groups: [
      { title: 'Processes', items: ['Surface Grinding', 'Cylindrical Grinding', 'Centerless Grinding'] },
    ],
  },
  {
    id: 'heat-treatment', name: 'Heat Treatment', model: 'castBracket',
    tagline: 'Hardness, toughness and stability on demand',
    description: 'Controlled heating and cooling cycles tune the hardness, strength and internal stress of metal parts so they perform and last.',
    specs: { Hardness: 'up to 64 HRC', Furnace: 'Sealed quench & vacuum', Certs: 'On request' },
    groups: [
      { title: 'Processes', items: ['Hardening', 'Annealing', 'Tempering'] },
    ],
  },
]

/* Helpers ----------------------------------------------------------------- */
export const getService = (id) => services.find((s) => s.id === id)
