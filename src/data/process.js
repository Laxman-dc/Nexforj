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
    title: 'Upload File',
    blurb:
      'Send a STEP, IGES, DXF, DWG or PDF along with your quantity and notes. This is the only place you need to share a file.',
    detail: ['STEP · IGES · DXF · DWG · PDF', 'Single part or full assembly', 'Notes, GD&T and revisions welcome'],
  },
  {
    id: 'review',
    step: '02',
    title: 'Engineer Review and Quote',
    blurb:
      'Our team checks manufacturability, suggests improvements where it helps, and sends a clear quote straight to your inbox.',
    detail: ['DFM feedback', 'Lead-time options', 'Quote delivered by email'],
  },
  {
    id: 'finalize',
    step: '03',
    title: 'Finalize',
    blurb:
      'Confirm the quote, approve any engineering changes, select final materials and finishes, and lock in the order.',
    detail: ['Order confirmation', 'Material lock', 'Final spec approval'],
  },
  {
    id: 'making',
    step: '04',
    title: 'Making',
    blurb:
      'Your parts hit the shop floor. From CNC to Sheet Metal, your order is routed, processed, and finished entirely in-house.',
    detail: ['Production tracking', 'Quality checks', 'In-house finishing'],
  },
  {
    id: 'doorstep',
    step: '05',
    title: 'Door Step',
    blurb:
      'Inspected, packed securely, and shipped globally. Your parts arrive with full documentation ready to be installed.',
    detail: ['Worldwide shipping', 'Secure packaging', 'CMM & Material Certs included'],
  }
];
