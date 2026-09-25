/**
 * Construction package data - Sagara region.
 * =========================================================================
 * Source: Agamana Constructions official package specification sheet
 * ("Construction Packages – Sagar Region"). Prices and specifications are
 * transcribed from that document; obvious spelling typos have been corrected
 * for readability, values / brands / allowances are unchanged.
 * =========================================================================
 */

export type PackageSlug = 'basic' | 'classic' | 'luxury';

export interface PackageCategory {
  key: string;
  label: string;
  items: string[];
}

export interface ConstructionPackage {
  slug: PackageSlug;
  name: string;
  price: number; // ₹ per sq.ft
  priceLabel: string;
  tagline: string;
  description: string;
  highlights: string[];
  featured?: boolean;
  categories: PackageCategory[];
}

const CATEGORY_ORDER: { key: string; label: string }[] = [
  { key: 'design', label: 'Design & Drawings' },
  { key: 'structure', label: 'Structure' },
  { key: 'kitchen', label: 'Kitchen' },
  { key: 'bathrooms', label: 'Bathrooms' },
  { key: 'doorsWindows', label: 'Doors & Windows' },
  { key: 'flooring', label: 'Flooring' },
  { key: 'painting', label: 'Painting' },
  { key: 'electrical', label: 'Electrical Work' },
  { key: 'plumbing', label: 'Plumbing' },
  { key: 'miscellaneous', label: 'Miscellaneous' },
];

type SpecMap = Record<string, string[]>;

function buildCategories(specs: SpecMap): PackageCategory[] {
  return CATEGORY_ORDER.map(({ key, label }) => ({
    key,
    label,
    items: specs[key] ?? [],
  }));
}

// ---- BASIC - ₹1,879/sq.ft (sheet column B) --------------------------------
const basicSpecs: SpecMap = {
  design: [
    'Floor Plans, Structural Design and 3D Elevation',
    'A maximum of 3 drawing revisions',
  ],
  structure: [
    'Steel – up to 16mm dia, FE-500 TMT',
    'Aggregates – 20mm & 40mm',
    'Blocks – Standard Solid Concrete Blocks, 6" & 4"',
    'RCC Design Mix – as per structural specification',
    'Ceiling Height – 10 ft, finish floor to finish floor',
    'Cement – Priya, Maha, JSW or equivalent (43 & 53 grade)',
    'Waterproofing compound – Dr. Fixit / FOSROC for external walls',
    'Cement-based waterproofing; terrace waterproofing to avoid leakage',
    'Anti-termite treatment',
  ],
  kitchen: [
    'Counter – 30mm Granite up to ₹100/sft',
    "Wall Tile – 2 ft height Ceramic tile up to ₹40/sft",
    'Sink – SS Sink, 1 no., up to ₹3,000',
    'Sink Mixer – ISI mark, up to ₹1,500',
  ],
  bathrooms: [
    'Wall – Ceramic Wall Tiles up to 7 ft height, up to ₹40/sft',
    'Floor – Anti-skid Floor Tiles up to ₹40/sft',
    'CP & Sanitary fittings – up to ₹30,000 per 1,000 sq.ft',
    'PVC bathroom door',
    'Geyser point provision',
  ],
  doorsWindows: [
    'Inclusive of all fixtures and fittings',
    'Main door budget – ₹30,000 per door (frame + shutter)',
    'Internal door budget – ₹8,000 per door (frame + shutter)',
    'Bathroom door budget – ₹5,000 per door (frame + shutter)',
    'Door hardware – Ozone & Europa',
    'Windows – UPVC with MS Grill',
  ],
  flooring: [
    'Living, dining, kitchen and rooms – tiles up to ₹80/sq.ft',
    'Balcony, utility and parking – anti-skid tiles up to ₹40/sq.ft',
    "Maximum tile size 2 ft × 2 ft",
    'Staircase – Granite up to ₹80/sft',
  ],
  painting: [
    'Internal wall & ceiling – 2 coat wall putty + 1 coat primer + 2 coat Tractor emulsion paint',
    'External walls – 1 coat primer + 2 coat Ace weatherproof paint',
    'Brand – Asian / Berger / Dulux',
  ],
  electrical: [
    'Wires – fireproof wires by Finolex or equivalent',
    'Switches – Anchor Roma or equivalent',
  ],
  plumbing: [
    'CPVC Pipes – Astral, Prince or equivalent',
    'PVC Overhead Tank – Ganga or equivalent (basic price ₹6.5/litre, 1,500 litres)',
  ],
  miscellaneous: [
    'Balcony Railing – Basic MS Railing',
    'Sump – 5,000 litres',
    'Overhead Tank – triple layer, 2,000 litres',
  ],
};

// ---- CLASSIC - ₹2,099/sq.ft (sheet column D) ------------------------------
const classicSpecs: SpecMap = {
  design: [
    'Floor Plans, Structural Design, 3D Elevation, Plumbing and Electrical',
    'Maximum of 3 revisions',
  ],
  structure: [
    'Steel – up to 16mm dia, FE-500 TMT – Kamadhenu, Meenakshi or equivalent',
    'Aggregates – 20mm & 40mm',
    'Blocks – Standard Solid Concrete Blocks, 6" & 4"; Bricks',
    'RCC Design Mix – as per structural specification',
    'Ceiling Height – 10 ft, finish floor to finish floor',
    'Cement – ACC, Birla or equivalent (43 & 53 grade)',
    'Waterproofing compound – Dr. Fixit / FOSROC for external walls',
    'Cement-based waterproofing; terrace waterproofing to avoid leakage',
    'Anti-termite treatment',
  ],
  kitchen: [
    'Counter – 30mm Granite up to ₹100/sft',
    "Wall Tile – 2 ft height Ceramic tile up to ₹70/sft",
    'Sink – SS Sink, 1 no., up to ₹5,000',
    'Sink Mixer – Jaquar or equivalent, up to ₹2,000',
  ],
  bathrooms: [
    'Wall – Ceramic Wall Tiles up to ceiling height, up to ₹60/sft',
    'Floor – Anti-skid Floor Tiles up to ₹60/sft',
    'Wall Mixer & Shower – Jaquar or equivalent, up to ₹6,000',
    'EWC – Hindware, up to ₹7,000',
    'Wash Basin – Hindware, up to ₹2,000',
  ],
  doorsWindows: [
    'Main Door / Pooja Door – Burma Teak Wood Frame 5/3", worth ₹30,000 (including fixtures)',
    'Internal Doors – Sal Wood Frame 4/2.5" & Flush Doors with SS Hardware',
    'Toilet Doors – WPC Frame with Shutter & SS Hardware',
    'Windows – 2.5 track UPVC Windows with MS Grill',
  ],
  flooring: [
    'Living & Dining – Granite / Vitrified Tiles up to ₹130/sft',
    'Bedrooms – Granite / Vitrified Tiles up to ₹130/sft',
    'Balcony and Parking – Anti-skid Tiles up to ₹70/sft',
    'Staircase – Granite up to ₹100/sft',
  ],
  painting: [
    'Interior – Birla Wall Care Putty + Premium Emulsion or equivalent',
    'Exterior – Asian Primer + Apex Exterior Emulsion Paint or equivalent',
    'Brand – Asian, Birla, Berger',
  ],
  electrical: [
    'Wires – fireproof wires by Finolex or equivalent',
    'Switches – Anchor Roma or equivalent',
  ],
  plumbing: [
    'CPVC Pipes – Astral, Prince or equivalent',
    'PVC Overhead Tank – Ganga or equivalent (basic price ₹6.5/litre, 1,500 litres)',
  ],
  miscellaneous: [
    'Overhead Tank – triple layer, 2,000 litres',
    'Balcony Railing – Basic SS Railings',
    'Sump – 6,000 litres',
  ],
};

// ---- LUXURY - ₹2,550/sq.ft (sheet column C) -------------------------------
const luxurySpecs: SpecMap = {
  design: [
    'Floor Plans, Structural Design, 3D Elevation, Plumbing and Electrical',
  ],
  structure: [
    'Steel – up to 16mm dia, FE-500 TMT – JSW / SAIL / TATA',
    'Aggregates – 20mm & 40mm',
    'Blocks – Standard Bricks, Solid Concrete Blocks, 6" & 4"',
    'RCC Design Mix – as per structural specification',
    'Ceiling Height – 11 ft, finish floor to finish floor',
    'Cement – ACC, Ultratech, Birla or equivalent (43 & 53 grade)',
    'Waterproofing compound – Dr. Fixit / FOSROC for external walls',
    'Cement-based waterproofing; terrace waterproofing to avoid leakage',
    'Anti-termite treatment',
  ],
  kitchen: [
    'Counter top – 30mm Granite up to ₹165/sft',
    "Wall Tile – 2 ft height Ceramic tile up to ₹75/sft",
    'Sink and Accessories – SS / Granite / Carysil, ₹20,000 per kitchen',
  ],
  bathrooms: [
    'Toilet Floor – Anti-skid tiles, ₹75/sft',
    'Toilet Wall Dado (full height) – Light & highlighting tiles, ₹75/sft',
    'CP & Sanitary fixtures (Wash Basin, WC, taps and accessories such as bottle trap, gratings) – Jaquar / Hindware, ₹40,000 per attached bathroom/toilet',
  ],
  doorsWindows: [
    'Main Door / Pooja Door – Teak Wood Frame 5/3", worth ₹60,000 (including fixtures)',
    'Internal Doors – Sal Wood Frame & Flush Doors with SS Hardware, ₹12,000',
    'Toilet Doors – WPC Frame with Shutter & SS Hardware, ₹10,000',
    'Windows – UPVC with MS Grill, ₹770/sft; or Wooden windows – Sal wood Frame (5"×3") & Honne Shutter (1.5" thickness) with clear glass and grill rods',
  ],
  flooring: [
    'Living & Dining – Granite / Vitrified Tiles up to ₹350/sft',
    'Bedrooms – Granite / Vitrified Tiles up to ₹130/sft',
    'Balcony and Parking – Anti-skid Tiles up to ₹70/sft',
    'Staircase – Granite up to ₹100/sft',
  ],
  painting: [
    'Internal wall & ceiling – 2 coat wall putty + 2 coat primer + 2–3 coat Premium Emulsion paint',
    'External walls – 1 coat primer + 2 coat Apex weatherproof paint',
    'Brand – Asian / Berger / Dulux',
  ],
  electrical: [
    'Wires – fire-retardant wires by Havells or equivalent',
    'Switches – Legrand or equivalent',
  ],
  plumbing: [
    'CPVC Pipes – Astral, Prince or equivalent',
    'PVC Overhead Tank – Ganga or equivalent (basic price ₹6.5/litre, 1,500 litres)',
  ],
  miscellaneous: [
    'Balcony Railing – Basic SS Railing',
    'Sump – 6,000 litres with RCC',
    'Overhead Tank – triple layer, 2,000 litres',
  ],
};

export const packages: ConstructionPackage[] = [
  {
    slug: 'basic',
    name: 'Basic',
    price: 1879,
    priceLabel: '₹1,879',
    tagline: 'Essential specifications for practical, well-planned construction.',
    description:
      'A solid, well-planned build with FE-500 TMT steel, a 10 ft ceiling, waterproofing and anti-termite treatment as standard.',
    highlights: [
      'Floor plans, structure & 3D elevation',
      'FE-500 TMT steel · 10 ft ceiling',
      'Waterproofing & anti-termite treatment',
      'Asian / Berger / Dulux painting',
    ],
    categories: buildCategories(basicSpecs),
  },
  {
    slug: 'classic',
    name: 'Classic',
    price: 2099,
    priceLabel: '₹2,099',
    tagline: 'Enhanced materials, finishes and fittings for a more refined build.',
    description:
      'Better materials and fittings, with design covering plumbing and electrical, a Burma teak main door, UPVC windows and Jaquar / Hindware bathroom fixtures.',
    highlights: [
      'Design incl. plumbing & electrical',
      'ACC / Birla cement · branded TMT steel',
      'Burma teak main door · UPVC windows',
      'Jaquar / Hindware bathrooms',
    ],
    featured: true,
    categories: buildCategories(classicSpecs),
  },
  {
    slug: 'luxury',
    name: 'Luxury',
    price: 2550,
    priceLabel: '₹2,550',
    tagline:
      'Premium specifications and enhanced finishes for a refined, long-lasting build.',
    description:
      'Premium specifications throughout: an 11 ft ceiling, JSW / SAIL / TATA steel, flooring up to ₹350/sft, Havells wiring and Legrand switches.',
    highlights: [
      '11 ft ceiling height',
      'JSW / SAIL / TATA steel · premium cement',
      'Premium flooring up to ₹350/sft',
      'Havells wiring · Legrand switches',
    ],
    categories: buildCategories(luxurySpecs),
  },
];

export const packageCategories = CATEGORY_ORDER;

export function getPackage(slug: string): ConstructionPackage | undefined {
  return packages.find((p) => p.slug === slug);
}
