/* =========================================================================
   NAVIGATION
   Top-level routes. The Services / Materials mega-menus are generated
   automatically from services.js and materials.js, so they always stay in
   sync — nothing to maintain twice.
   ========================================================================= */

export const navLinks = [
  { label: 'Services', path: '/services', mega: 'services' },
  { label: 'How it works', path: '/process' },
  { label: 'About', path: '/about' },
]

/* Single primary call to action. Quoting happens over email after review —
   there is no pricing or "upload CAD" scattered across the site. */
export const navCta = { label: 'Start a project', path: '/order' }
