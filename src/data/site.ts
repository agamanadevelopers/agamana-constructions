/**
 * Central site configuration.
 * -------------------------------------------------------------------------
 * EDIT THESE PLACEHOLDERS with Agamana Constructions' real contact details.
 * Nothing here is presented to visitors as verified until you fill it in.
 * -------------------------------------------------------------------------
 */

export const site = {
  brand: 'Agamana Constructions',
  group: 'Agamana Group',
  url: 'https://constructions.agamana.com',
  tagline: 'Construction  |  Civil Works  |  Turnkey Projects',
  locations: ['Bengaluru', 'Shimoga', 'Sagara'],

  // ---- Contact ----
  phoneDisplay: '+91 7090 644 644',
  phoneHref: '+917090644644', // digits only, no spaces, used in tel:
  whatsappNumber: '917090644644', // country code + number, no +, no spaces
  email: 'sales@agamana.com',

  addressLabel: 'Head Office',
  address:
    'No.57, Wodeyar Building, 1st Floor, Near Old Private Bus Stand, Opp Court, B.H. Road, Sagara – 577401',

  groupUrl: 'https://agamana.com',
} as const;

/** Build a wa.me link with a contextual pre-filled message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  general:
    "Hi Agamana Constructions, I'm interested in building and would like to know more about your construction packages.",
  home:
    "Hi Agamana Constructions, I'm interested in building a home and would like to know more about your construction packages.",
  packageContext: (pkg: string) =>
    `Hi Agamana Constructions, I'm interested in the ${pkg} construction package. I'd like to know more about the specifications and process.`,
} as const;

export const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'Packages', href: '/#packages' },
  { label: 'How We Build', href: '/#process' },
  { label: 'Projects', href: '/#projects' },
  { label: 'About', href: '/#about' },
] as const;
