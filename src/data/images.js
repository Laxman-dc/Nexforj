/* =========================================================================
   IMAGE LIBRARY
   Real, license-free manufacturing photography (Unsplash — free for
   commercial use, no attribution required). Every image is referenced by a
   single helper so you can swap in your OWN shop photos in one place:
   drop a file in /public/images and replace the URL with e.g. '/images/laser.jpg'.
   ========================================================================= */

const CDN = 'https://images.unsplash.com/'

// build a sized, cropped URL from an Unsplash photo id
const u = (id, w = 1400) =>
  `${CDN}${id}?auto=format&fit=crop&w=${w}&q=80`

/* ---- raw photo ids (real, verified, free) ---- */
const ID = {
  factory: 'photo-1717386255773-1e3037c81788',     // manufacturing floor
  laser: 'photo-1738162837451-2041c1418f54',        // laser/plasma cutting metal
  cncMill: 'photo-1713371398484-cc4e4f6a262a',      // machine cutting metal
  lathe: 'photo-1666618090858-fbcee636bd3e',        // CNC lathe turning a shaft
  weld: 'photo-1508465818649-14a170138405',         // welding sparks
  printer: 'photo-1642969164999-979483e21601',      // 3D printer at work
  gears: 'photo-1567093322102-6bdd32fba67d',        // machined gears
  glow: 'photo-1615286922420-c6b348ffbd62',         // laser light / finishing glow
}

/* ---- hero & page imagery ---- */
export const siteImages = {
  hero: u(ID.factory, 1800),
  heroAlt: u(ID.laser, 1600),
  about: '/images/about_cad.png',
  aboutWide: '/images/about_cnc.png',
  order: u(ID.cncMill, 1400),
  processBanner: u(ID.weld, 1600),
  ctaTexture: u(ID.gears, 1400),
}

/* ---- one photo per service category ---- */
export const serviceImages = {
  cutting: u(ID.laser),
  'cnc-machining': u(ID.cncMill),
  grinding: u(ID.lathe),
  'heat-treatment': u(ID.weld),
  fabrication: u(ID.weld),
  'gear-manufacturing': u(ID.gears),
  '3d-printing': u(ID.printer),
  casting: u(ID.weld),
  'injection-molding': u(ID.printer),
  'surface-finishing': u(ID.glow),
  'quality-inspection': u(ID.lathe),
}

export const serviceImage = (id) => serviceImages[id] || u(ID.factory)

/* ---- a banner photo per material group ---- */
export const groupImages = {
  metals: u(ID.lathe),
  plastics: u(ID.printer),
  composites: u(ID.cncMill),
  rubber: u(ID.glow),
  wood: u(ID.cncMill),
  foam: u(ID.printer),
  other: u(ID.factory),
}
export const groupImage = (id) => groupImages[id] || u(ID.factory)
