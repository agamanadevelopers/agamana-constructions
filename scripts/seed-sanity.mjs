/**
 * Agamana Constructions – Sanity Seed Script
 * ============================================================
 * Seeds ALL static site content into Sanity so it becomes
 * editable from the Studio.
 *
 * Usage:
 *   1. Get a write token from https://sanity.io/manage
 *      → Project ntom9s8p → API → Tokens → Add API token (Editor)
 *   2. Run:
 *        SANITY_WRITE_TOKEN=your_token node scripts/seed-sanity.mjs
 * ============================================================
 */

import { createClient } from '@sanity/client';

const TOKEN = process.env.SANITY_WRITE_TOKEN;
if (!TOKEN) {
  console.error('❌  Set SANITY_WRITE_TOKEN env var first.\n   Get one at https://sanity.io/manage → Project ntom9s8p → API → Tokens');
  process.exit(1);
}

const client = createClient({
  projectId: 'ntom9s8p',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: TOKEN,
  useCdn: false,
});

// ── Image helpers ─────────────────────────────────────────────────────────────
const u = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

async function uploadImageFromUrl(url, filename) {
  try {
    console.log(`  ↑ uploading ${filename}…`);
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    const asset = await client.assets.upload('image', buffer, {
      filename,
      contentType: res.headers.get('content-type') ?? 'image/jpeg',
    });
    return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
  } catch (err) {
    console.warn(`  ⚠ Could not upload ${filename}: ${err.message}`);
    return null;
  }
}

// ── Document helpers ──────────────────────────────────────────────────────────
async function createOrReplace(doc) {
  return client.createOrReplace(doc);
}

// =============================================================================
// SEED FUNCTIONS
// =============================================================================

async function seedSiteConfig() {
  console.log('\n📋  Site Configuration…');
  await createOrReplace({
    _type: 'siteConfig',
    _id: 'siteConfig',
    brand: 'Agamana Constructions',
    tagline: 'Construction  |  Civil Works  |  Turnkey Projects',
    siteUrl: 'https://agamanaconstructions.com',
    locations: ['Bengaluru', 'Shimoga', 'Sagara'],
    phoneDisplay: '+91 7090 644 644',
    phoneHref: '+917090644644',
    whatsappNumber: '917090644644',
    email: 'sales@agamana.com',
    addressLabel: 'Head Office',
    address: 'No.57, Wodeyar Building, 1st Floor, Near Old Private Bus Stand, Opp Court, B.H. Road, Sagara – 577401',
    groupName: 'Agamana Group',
    groupUrl: 'https://agamana.com',
    navLinks: [
      { _type: 'navLink', _key: 'home', label: 'Home', href: '/#home' },
      { _type: 'navLink', _key: 'whatWeBuild', label: 'What We Build', href: '/#what-we-build' },
      { _type: 'navLink', _key: 'about', label: 'About', href: '/#about' },
      { _type: 'navLink', _key: 'packages', label: 'Packages', href: '/#packages' },
      { _type: 'navLink', _key: 'process', label: 'Process', href: '/#process' },
      { _type: 'navLink', _key: 'team', label: 'Team', href: '/#team' },
      { _type: 'navLink', _key: 'faq', label: 'FAQ', href: '/#faq' },
    ],
    whatsappMessageGeneral: "Hi Agamana Constructions, I'm interested in building and would like to know more about your construction packages.",
    whatsappMessageHome: "Hi Agamana Constructions, I'm interested in building a home and would like to know more about your construction packages.",
    whatsappMessagePackage: "Hi Agamana Constructions, I'm interested in the {packageName} construction package. I'd like to know more about the specifications and process.",
    seoTitle: 'Agamana Constructions | House Construction in Bengaluru, Shimoga & Sagara',
    seoTitleTemplate: '%s · Agamana Constructions',
    seoDescription: 'Agamana Constructions builds homes, villas, farmhouses, commercial and hospitality spaces in Bengaluru, Shimoga and Sagara. Construction packages from ₹1,879 per sq.ft.',
    seoKeywords: [
      'house construction Bangalore',
      'house construction company in Bangalore',
      'home construction Bangalore',
      'house construction packages Bangalore',
      'construction company Bangalore',
      'home builders Bangalore',
      'house construction Sagara',
      'house construction Shivamogga',
      'turnkey construction Bangalore',
      'villa construction Bangalore',
      'farmhouse construction Karnataka',
    ],
    ogTitle: "Agamana Constructions | Let's Build Your Space.",
    ogDescription: 'Construction for homes, villas, farmhouses, commercial and hospitality spaces across Bengaluru, Shimoga and Sagara.',
  });
  console.log('  ✓ Site Configuration');
}

async function seedHero() {
  console.log('\n🦸  Hero Section…');
  const heroImage = await uploadImageFromUrl(u('photo-1600585154340-be6161a56a0c', 1400), 'hero.jpg');
  await createOrReplace({
    _type: 'hero',
    _id: 'hero',
    eyebrow: 'Construction  |  Civil Works  |  Turnkey Projects',
    headlineLine1: "Let's Build",
    headlineLine2: 'Your Space.',
    body: 'From homes and farmhouses to commercial and hospitality spaces, we take care of the construction from start to finish.',
    trustPoints: ['Clear Pricing', 'Quality Execution', 'One Point of Contact'],
    ctaPrimary: 'Get a Construction Estimate',
    ctaSecondary: 'View Packages',
    ...(heroImage ? { heroImage } : { heroImageUrl: u('photo-1600585154340-be6161a56a0c', 1400) }),
    badgeLabel: 'Agamana Constructions',
    badgeText: 'From foundation to a brighter tomorrow.',
  });
  console.log('  ✓ Hero');
}

async function seedProjectTypeSelector() {
  console.log('\n🏗️   Project Type Selector…');
  const images = {
    typeHome: await uploadImageFromUrl(u('photo-1600607687939-ce8a6c25118c'), 'type-home.jpg'),
    typeVilla: await uploadImageFromUrl(u('photo-1613977257363-707ba9348227'), 'type-villa.jpg'),
    typeCommercial: await uploadImageFromUrl(u('photo-1486406146926-c627a92ad1ab'), 'type-commercial.jpg'),
    typeHospitality: await uploadImageFromUrl(u('photo-1571896349842-33c89424de2d'), 'type-hospitality.jpg'),
    typeRenovation: await uploadImageFromUrl(u('photo-1503174971373-b1f69850bded'), 'type-renovation.jpg'),
  };
  await createOrReplace({
    _type: 'projectTypeSelector',
    _id: 'projectTypeSelector',
    sectionTitle: 'What are you looking to build?',
    sectionSubtitle: 'Every project has a different purpose. Tell us what you are looking to build and we'll help you with the right approach.',
    ctaText: 'Tell us about your project',
    types: [
      { _type: 'projectType', _key: 'home', title: 'My Home', desc: 'Individual homes built around the way you live.', ...(images.typeHome ? { image: images.typeHome } : { imageUrl: u('photo-1600607687939-ce8a6c25118c') }), estimateType: 'Home' },
      { _type: 'projectType', _key: 'villa', title: 'Villa / Farmhouse', desc: 'Spaces that bring you closer to nature.', ...(images.typeVilla ? { image: images.typeVilla } : { imageUrl: u('photo-1613977257363-707ba9348227') }), estimateType: 'Villa' },
      { _type: 'projectType', _key: 'commercial', title: 'Commercial', desc: 'Functional spaces for your business.', ...(images.typeCommercial ? { image: images.typeCommercial } : { imageUrl: u('photo-1486406146926-c627a92ad1ab') }), estimateType: 'Commercial' },
      { _type: 'projectType', _key: 'hospitality', title: 'Hospitality', desc: 'Resorts, farm stays and guest facilities.', ...(images.typeHospitality ? { image: images.typeHospitality } : { imageUrl: u('photo-1571896349842-33c89424de2d') }), estimateType: 'Hospitality' },
      { _type: 'projectType', _key: 'renovation', title: 'Renovation', desc: 'Thoughtful upgrades with modern specifications.', ...(images.typeRenovation ? { image: images.typeRenovation } : { imageUrl: u('photo-1503174971373-b1f69850bded') }), estimateType: 'Renovation' },
    ],
  });
  console.log('  ✓ Project Type Selector');
}

async function seedGroupEcosystemSection() {
  console.log('\n🌐  Group Ecosystem Section…');
  const featureImage = await uploadImageFromUrl(u('photo-1600566753086-00f18fb6b3ea'), 'group-feature.jpg');
  await createOrReplace({
    _type: 'groupEcosystemSection',
    _id: 'groupEcosystemSection',
    eyebrow: 'The Agamana Group',
    sectionTitle: 'More Than Construction.',
    sectionSubtitle: 'Agamana Constructions is part of the broader Agamana Group, bringing together complementary capabilities across the real estate, development, design and construction ecosystem.',
    ctaText: 'Explore the Agamana Group',
    tagline: 'Different capabilities. One integrated ecosystem.',
    ...(featureImage ? { featureImage } : { featureImageUrl: u('photo-1600566753086-00f18fb6b3ea') }),
  });
  console.log('  ✓ Group Ecosystem Section');
}

async function seedGroupEcosystemItems() {
  console.log('\n🏢  Group Ecosystem Items…');
  const items = [
    { key: 'developers', name: 'Agamana Developers', desc: 'Land Development & Real Estate', imgId: 'photo-1500382017468-9049fed747ef' },
    { key: 'constructions', name: 'Agamana Constructions', desc: 'Construction & Civil Execution', imgId: 'photo-1541888946425-d81bb19240f5' },
    { key: 'interior', name: 'Agamana Interior World', desc: 'Interior Design & Execution', imgId: 'photo-1618221195710-dd6b41faaea6' },
    { key: 'projects', name: 'Agamana Projects', desc: 'Project Development & Marketing', imgId: 'photo-1487958449943-2429e8be8625' },
  ];
  for (const item of items) {
    const image = await uploadImageFromUrl(u(item.imgId), `eco-${item.key}.jpg`);
    await createOrReplace({
      _type: 'groupEcosystemItem',
      _id: `groupEcosystemItem-${item.key}`,
      name: item.name,
      description: item.desc,
      ...(image ? { image } : { imageUrl: u(item.imgId) }),
      order: items.indexOf(item) + 1,
    });
    console.log(`  ✓ ${item.name}`);
  }
}

async function seedWhatWeBuildSection() {
  console.log('\n🏘️   What We Build Section…');
  await createOrReplace({
    _type: 'whatWeBuildSection',
    _id: 'whatWeBuildSection',
    sectionTitle: 'What Can We Build For You?',
    linkText: 'View all services',
  });
  console.log('  ✓ What We Build Section');
}

async function seedWhatWeBuildCategories() {
  console.log('\n🏠  What We Build Categories…');
  const cats = [
    { key: 'residential', title: 'Residential', items: ['Individual Homes', 'Villas', 'Farmhouses', 'Luxury Residences', 'Renovations'], imgId: 'photo-1600585154340-be6161a56a0c' },
    { key: 'commercial', title: 'Commercial', items: ['Office Spaces', 'Retail Buildings', 'Commercial Developments'], imgId: 'photo-1497366216548-37526070297c' },
    { key: 'hospitality', title: 'Hospitality', items: ['Resorts', 'Farm Stays', 'Guest Facilities', 'Community Spaces'], imgId: 'photo-1520250497591-112f2f40a3f4' },
    { key: 'institutional', title: 'Institutional', items: ['Educational', 'Corporate Facilities', 'Community & Institutional Buildings'], imgId: 'photo-1592280771190-3e2e4d571952' },
    { key: 'civil', title: 'Civil & Site Development', items: ['Roads & Pathways', 'Drainage', 'Compound Walls', 'Earthwork', 'External Development'], imgId: 'photo-1590274853856-f22d5ee3d228' },
  ];
  for (const cat of cats) {
    const image = await uploadImageFromUrl(u(cat.imgId), `build-${cat.key}.jpg`);
    await createOrReplace({
      _type: 'whatWeBuildCategory',
      _id: `whatWeBuildCategory-${cat.key}`,
      title: cat.title,
      items: cat.items,
      alt: cat.title,
      ...(image ? { image } : {}),
      order: cats.indexOf(cat) + 1,
    });
    console.log(`  ✓ ${cat.title}`);
  }
}

async function seedPackageSection() {
  console.log('\n📦  Package Section Config…');
  await createOrReplace({
    _type: 'packageSection',
    _id: 'packageSection',
    sectionTitle: 'Choose Your Construction Package',
    sectionSubtitle: 'Three specification levels, built to the same standards. Pick the finish that fits your budget.',
    compareLinkText: 'Compare all specifications',
    footerNote: 'Indicative per-sq.ft rates. Final estimate depends on design, site and specifications.',
  });
  console.log('  ✓ Package Section');
}

async function seedPackages() {
  console.log('\n📦  Packages…');

  const packages = [
    {
      _id: 'package-basic',
      slug: 'basic',
      name: 'Basic',
      price: 1879,
      priceLabel: '₹1,879',
      tagline: 'Essential specifications for practical, well-planned construction.',
      description: 'A solid, well-planned build with FE-500 TMT steel, a 10 ft ceiling, waterproofing and anti-termite treatment as standard.',
      featured: false,
      highlights: ['Floor plans, structure & 3D elevation', 'FE-500 TMT steel · 10 ft ceiling', 'Waterproofing & anti-termite treatment', 'Asian / Berger / Dulux painting'],
      order: 1,
      categories: [
        { _key: 'design', key: 'design', label: 'Design & Drawings', items: ['Floor Plans, Structural Design and 3D Elevation', 'A maximum of 3 drawing revisions'] },
        { _key: 'structure', key: 'structure', label: 'Structure', items: ['Steel – up to 16mm dia, FE-500 TMT', 'Aggregates – 20mm & 40mm', 'Blocks – Standard Solid Concrete Blocks, 6" & 4"', 'RCC Design Mix – as per structural specification', 'Ceiling Height – 10 ft, finish floor to finish floor', 'Cement – Priya, Maha, JSW or equivalent (43 & 53 grade)', 'Waterproofing compound – Dr. Fixit / FOSROC for external walls', 'Cement-based waterproofing; terrace waterproofing to avoid leakage', 'Anti-termite treatment'] },
        { _key: 'kitchen', key: 'kitchen', label: 'Kitchen', items: ['Counter – 30mm Granite up to ₹100/sft', 'Wall Tile – 2 ft height Ceramic tile up to ₹40/sft', 'Sink – SS Sink, 1 no., up to ₹3,000', 'Sink Mixer – ISI mark, up to ₹1,500'] },
        { _key: 'bathrooms', key: 'bathrooms', label: 'Bathrooms', items: ['Wall – Ceramic Wall Tiles up to 7 ft height, up to ₹40/sft', 'Floor – Anti-skid Floor Tiles up to ₹40/sft', 'CP & Sanitary fittings – up to ₹30,000 per 1,000 sq.ft', 'PVC bathroom door', 'Geyser point provision'] },
        { _key: 'doorsWindows', key: 'doorsWindows', label: 'Doors & Windows', items: ['Inclusive of all fixtures and fittings', 'Main door budget – ₹30,000 per door (frame + shutter)', 'Internal door budget – ₹8,000 per door (frame + shutter)', 'Bathroom door budget – ₹5,000 per door (frame + shutter)', 'Door hardware – Ozone & Europa', 'Windows – UPVC with MS Grill'] },
        { _key: 'flooring', key: 'flooring', label: 'Flooring', items: ['Living, dining, kitchen and rooms – tiles up to ₹80/sq.ft', 'Balcony, utility and parking – anti-skid tiles up to ₹40/sq.ft', 'Maximum tile size 2 ft × 2 ft', 'Staircase – Granite up to ₹80/sft'] },
        { _key: 'painting', key: 'painting', label: 'Painting', items: ['Internal wall & ceiling – 2 coat wall putty + 1 coat primer + 2 coat Tractor emulsion paint', 'External walls – 1 coat primer + 2 coat Ace weatherproof paint', 'Brand – Asian / Berger / Dulux'] },
        { _key: 'electrical', key: 'electrical', label: 'Electrical Work', items: ['Wires – fireproof wires by Finolex or equivalent', 'Switches – Anchor Roma or equivalent'] },
        { _key: 'plumbing', key: 'plumbing', label: 'Plumbing', items: ['CPVC Pipes – Astral, Prince or equivalent', 'PVC Overhead Tank – Ganga or equivalent (basic price ₹6.5/litre, 1,500 litres)'] },
        { _key: 'miscellaneous', key: 'miscellaneous', label: 'Miscellaneous', items: ['Balcony Railing – Basic MS Railing', 'Sump – 5,000 litres', 'Overhead Tank – triple layer, 2,000 litres'] },
      ],
    },
    {
      _id: 'package-classic',
      slug: 'classic',
      name: 'Classic',
      price: 2099,
      priceLabel: '₹2,099',
      tagline: 'Enhanced materials, finishes and fittings for a more refined build.',
      description: 'Better materials and fittings, with design covering plumbing and electrical, a Burma teak main door, UPVC windows and Jaquar / Hindware bathroom fixtures.',
      featured: true,
      highlights: ['Design incl. plumbing & electrical', 'ACC / Birla cement · branded TMT steel', 'Burma teak main door · UPVC windows', 'Jaquar / Hindware bathrooms'],
      order: 2,
      categories: [
        { _key: 'design', key: 'design', label: 'Design & Drawings', items: ['Floor Plans, Structural Design, 3D Elevation, Plumbing and Electrical', 'Maximum of 3 revisions'] },
        { _key: 'structure', key: 'structure', label: 'Structure', items: ['Steel – up to 16mm dia, FE-500 TMT – Kamadhenu, Meenakshi or equivalent', 'Aggregates – 20mm & 40mm', 'Blocks – Standard Solid Concrete Blocks, 6" & 4"; Bricks', 'RCC Design Mix – as per structural specification', 'Ceiling Height – 10 ft, finish floor to finish floor', 'Cement – ACC, Birla or equivalent (43 & 53 grade)', 'Waterproofing compound – Dr. Fixit / FOSROC for external walls', 'Cement-based waterproofing; terrace waterproofing to avoid leakage', 'Anti-termite treatment'] },
        { _key: 'kitchen', key: 'kitchen', label: 'Kitchen', items: ['Counter – 30mm Granite up to ₹100/sft', 'Wall Tile – 2 ft height Ceramic tile up to ₹70/sft', 'Sink – SS Sink, 1 no., up to ₹5,000', 'Sink Mixer – Jaquar or equivalent, up to ₹2,000'] },
        { _key: 'bathrooms', key: 'bathrooms', label: 'Bathrooms', items: ['Wall – Ceramic Wall Tiles up to ceiling height, up to ₹60/sft', 'Floor – Anti-skid Floor Tiles up to ₹60/sft', 'Wall Mixer & Shower – Jaquar or equivalent, up to ₹6,000', 'EWC – Hindware, up to ₹7,000', 'Wash Basin – Hindware, up to ₹2,000'] },
        { _key: 'doorsWindows', key: 'doorsWindows', label: 'Doors & Windows', items: ['Main Door / Pooja Door – Burma Teak Wood Frame 5/3", worth ₹30,000 (including fixtures)', 'Internal Doors – Sal Wood Frame 4/2.5" & Flush Doors with SS Hardware', 'Toilet Doors – WPC Frame with Shutter & SS Hardware', 'Windows – 2.5 track UPVC Windows with MS Grill'] },
        { _key: 'flooring', key: 'flooring', label: 'Flooring', items: ['Living & Dining – Granite / Vitrified Tiles up to ₹130/sft', 'Bedrooms – Granite / Vitrified Tiles up to ₹130/sft', 'Balcony and Parking – Anti-skid Tiles up to ₹70/sft', 'Staircase – Granite up to ₹100/sft'] },
        { _key: 'painting', key: 'painting', label: 'Painting', items: ['Interior – Birla Wall Care Putty + Premium Emulsion or equivalent', 'Exterior – Asian Primer + Apex Exterior Emulsion Paint or equivalent', 'Brand – Asian, Birla, Berger'] },
        { _key: 'electrical', key: 'electrical', label: 'Electrical Work', items: ['Wires – fireproof wires by Finolex or equivalent', 'Switches – Anchor Roma or equivalent'] },
        { _key: 'plumbing', key: 'plumbing', label: 'Plumbing', items: ['CPVC Pipes – Astral, Prince or equivalent', 'PVC Overhead Tank – Ganga or equivalent (basic price ₹6.5/litre, 1,500 litres)'] },
        { _key: 'miscellaneous', key: 'miscellaneous', label: 'Miscellaneous', items: ['Overhead Tank – triple layer, 2,000 litres', 'Balcony Railing – Basic SS Railings', 'Sump – 6,000 litres'] },
      ],
    },
    {
      _id: 'package-luxury',
      slug: 'luxury',
      name: 'Luxury',
      price: 2550,
      priceLabel: '₹2,550',
      tagline: 'Premium specifications and enhanced finishes for a refined, long-lasting build.',
      description: 'Premium specifications throughout: an 11 ft ceiling, JSW / SAIL / TATA steel, flooring up to ₹350/sft, Havells wiring and Legrand switches.',
      featured: false,
      highlights: ['11 ft ceiling height', 'JSW / SAIL / TATA steel · premium cement', 'Premium flooring up to ₹350/sft', 'Havells wiring · Legrand switches'],
      order: 3,
      categories: [
        { _key: 'design', key: 'design', label: 'Design & Drawings', items: ['Floor Plans, Structural Design, 3D Elevation, Plumbing and Electrical'] },
        { _key: 'structure', key: 'structure', label: 'Structure', items: ['Steel – up to 16mm dia, FE-500 TMT – JSW / SAIL / TATA', 'Aggregates – 20mm & 40mm', 'Blocks – Standard Bricks, Solid Concrete Blocks, 6" & 4"', 'RCC Design Mix – as per structural specification', 'Ceiling Height – 11 ft, finish floor to finish floor', 'Cement – ACC, Ultratech, Birla or equivalent (43 & 53 grade)', 'Waterproofing compound – Dr. Fixit / FOSROC for external walls', 'Cement-based waterproofing; terrace waterproofing to avoid leakage', 'Anti-termite treatment'] },
        { _key: 'kitchen', key: 'kitchen', label: 'Kitchen', items: ['Counter top – 30mm Granite up to ₹165/sft', 'Wall Tile – 2 ft height Ceramic tile up to ₹75/sft', 'Sink and Accessories – SS / Granite / Carysil, ₹20,000 per kitchen'] },
        { _key: 'bathrooms', key: 'bathrooms', label: 'Bathrooms', items: ['Toilet Floor – Anti-skid tiles, ₹75/sft', 'Toilet Wall Dado (full height) – Light & highlighting tiles, ₹75/sft', 'CP & Sanitary fixtures (Wash Basin, WC, taps and accessories such as bottle trap, gratings) – Jaquar / Hindware, ₹40,000 per attached bathroom/toilet'] },
        { _key: 'doorsWindows', key: 'doorsWindows', label: 'Doors & Windows', items: ['Main Door / Pooja Door – Teak Wood Frame 5/3", worth ₹60,000 (including fixtures)', 'Internal Doors – Sal Wood Frame & Flush Doors with SS Hardware, ₹12,000', 'Toilet Doors – WPC Frame with Shutter & SS Hardware, ₹10,000', 'Windows – UPVC with MS Grill, ₹770/sft; or Wooden windows – Sal wood Frame (5"×3") & Honne Shutter (1.5" thickness) with clear glass and grill rods'] },
        { _key: 'flooring', key: 'flooring', label: 'Flooring', items: ['Living & Dining – Granite / Vitrified Tiles up to ₹350/sft', 'Bedrooms – Granite / Vitrified Tiles up to ₹130/sft', 'Balcony and Parking – Anti-skid Tiles up to ₹70/sft', 'Staircase – Granite up to ₹100/sft'] },
        { _key: 'painting', key: 'painting', label: 'Painting', items: ['Internal wall & ceiling – 2 coat wall putty + 2 coat primer + 2–3 coat Premium Emulsion paint', 'External walls – 1 coat primer + 2 coat Apex weatherproof paint', 'Brand – Asian / Berger / Dulux'] },
        { _key: 'electrical', key: 'electrical', label: 'Electrical Work', items: ['Wires – fire-retardant wires by Havells or equivalent', 'Switches – Legrand or equivalent'] },
        { _key: 'plumbing', key: 'plumbing', label: 'Plumbing', items: ['CPVC Pipes – Astral, Prince or equivalent', 'PVC Overhead Tank – Ganga or equivalent (basic price ₹6.5/litre, 1,500 litres)'] },
        { _key: 'miscellaneous', key: 'miscellaneous', label: 'Miscellaneous', items: ['Balcony Railing – Basic SS Railing', 'Sump – 6,000 litres with RCC', 'Overhead Tank – triple layer, 2,000 litres'] },
      ],
    },
  ];

  for (const pkg of packages) {
    await createOrReplace({ _type: 'package', ...pkg, slug: { _type: 'slug', current: pkg.slug } });
    console.log(`  ✓ ${pkg.name} Package`);
  }
}

async function seedProcessTimelineSection() {
  console.log('\n⏱️   Process Timeline Section…');
  await createOrReplace({
    _type: 'processTimelineSection',
    _id: 'processTimelineSection',
    sectionTitle: 'From Your First Conversation to Handover',
    sectionSubtitle: 'A structured approach to make your construction journey smoother and more predictable.',
  });
  console.log('  ✓ Process Timeline Section');
}

async function seedProcessSteps() {
  console.log('\n⏱️   Process Steps…');
  const steps = [
    { _id: 'processStep-01', n: '01', title: 'Discover', desc: 'Understand your requirements, site conditions, expectations and budget.', order: 1 },
    { _id: 'processStep-02', n: '02', title: 'Plan', desc: 'Design, engineering approach, scope and project plan.', order: 2 },
    { _id: 'processStep-03', n: '03', title: 'Estimate', desc: 'BOQ, specifications, quantities and project costing.', order: 3 },
    { _id: 'processStep-04', n: '04', title: 'Build', desc: 'Construction execution with coordinated teams.', order: 4 },
    { _id: 'processStep-05', n: '05', title: 'Monitor', desc: 'Progress, quality, materials and milestones.', order: 5 },
    { _id: 'processStep-06', n: '06', title: 'Handover', desc: 'Final checks, documentation and handover.', order: 6 },
  ];
  for (const step of steps) {
    await createOrReplace({ _type: 'processStep', stepNumber: step.n, ...step });
    console.log(`  ✓ ${step.n} ${step.title}`);
  }
}

async function seedProjectVisibility() {
  console.log('\n👁️   Project Visibility…');
  const sideImage = await uploadImageFromUrl(u('photo-1504328345606-18bbc8c9d7d1', 1000), 'site-engineer.jpg');
  await createOrReplace({
    _type: 'projectVisibility',
    _id: 'projectVisibility',
    sectionTitle: 'Your Project. Your Visibility.',
    sectionSubtitle: "Construction shouldn't feel like a black box. We keep you informed at every stage.",
    ...(sideImage ? { sideImage } : { sideImageUrl: u('photo-1504328345606-18bbc8c9d7d1', 1000) }),
    features: [
      { _type: 'visibilityFeature', _key: 'progress', title: 'Progress', desc: 'Regular updates on milestones.', iconKey: 'progress' },
      { _type: 'visibilityFeature', _key: 'quality', title: 'Quality', desc: 'Stage-wise inspections.', iconKey: 'quality' },
      { _type: 'visibilityFeature', _key: 'materials', title: 'Materials', desc: 'Planned procurement and tracking.', iconKey: 'materials' },
      { _type: 'visibilityFeature', _key: 'costs', title: 'Costs', desc: 'Clear scope and BOQ.', iconKey: 'costs' },
      { _type: 'visibilityFeature', _key: 'communication', title: 'Communication', desc: 'A defined channel for updates.', iconKey: 'communication' },
      { _type: 'visibilityFeature', _key: 'documentation', title: 'Documentation', desc: 'Project records throughout execution.', iconKey: 'documentation' },
    ],
  });
  console.log('  ✓ Project Visibility');
}

async function seedTeamSection() {
  console.log('\n👥  Team Section…');
  await createOrReplace({
    _type: 'teamSection',
    _id: 'teamSection',
    eyebrow: 'The People Behind the Work',
    sectionTitle: 'Built by a Team That Cares.',
    sectionSubtitle: 'Our team brings together engineering depth, project development expertise and operational rigour.',
  });
  console.log('  ✓ Team Section');
}

async function seedTeamMembers() {
  console.log('\n👥  Team Members…');
  const members = [
    { _id: 'team-ashwath', name: 'Ashwath H.N.', role: 'Construction Lead · Civil Engineer', bio: '8+ years of construction experience across residential, commercial and retail projects, including high-rise developments. Expertise spans site execution, BOQ and quantity management, quality inspections, scheduling, procurement, contractor coordination, BBS and project completion & handover. He holds a Bachelor of Engineering and a Diploma in Civil Engineering.', emphasis: true, order: 1, imgId: 'photo-1519085360753-af0119f7cbe7' },
    { _id: 'team-sudarshan', name: 'Sudarshan Bhat Talagini', role: 'Co-Founder · Project Development', bio: 'Sudarshan brings an entrepreneurial and project-development perspective to Agamana, with a focus on identifying opportunities, developing projects and building long-term value through real estate and land development.', emphasis: false, order: 2, imgId: 'photo-1500648767791-00dcc994a43e' },
    { _id: 'team-vinay', name: 'Vinay Hegde', role: 'Co-Founder · Business & Operations', bio: 'Vinay brings experience across business operations, technology, design and project coordination, with a focus on building systems, managing operations and developing businesses.', emphasis: false, order: 3, imgId: 'photo-1507003211169-0a1dd7228f2d' },
  ];
  for (const m of members) {
    const photo = await uploadImageFromUrl(u(m.imgId, 600), `team-${m._id.replace('team-', '')}.jpg`);
    await createOrReplace({
      _type: 'teamMember',
      _id: m._id,
      name: m.name,
      role: m.role,
      bio: m.bio,
      emphasis: m.emphasis,
      order: m.order,
      ...(photo ? { photo } : {}),
    });
    console.log(`  ✓ ${m.name}`);
  }
}

async function seedFaqSection() {
  console.log('\n❓  FAQ Section…');
  await createOrReplace({
    _type: 'faqSection',
    _id: 'faqSection',
    eyebrow: 'Common Questions',
    sectionTitle: 'Frequently Asked Questions',
    sectionSubtitle: 'Answers to the questions we hear most often.',
  });
  console.log('  ✓ FAQ Section');
}

async function seedFaqs() {
  console.log('\n❓  FAQs…');
  const faqs = [
    { _id: 'faq-01', question: 'How is the construction cost calculated?', answer: 'Cost is based on your built-up area and the package you choose. The per-sq.ft rate covers the specifications listed for that package. We share a clear estimate once we understand your plot, requirements and preferred specification level.', order: 1 },
    { _id: 'faq-02', question: 'What is included in your packages?', answer: 'Each package covers design and drawings, structure, and finishing across kitchen, bathrooms, doors and windows, flooring, painting, electrical, plumbing and more. You can view the full specification for each package on this site.', order: 2 },
    { _id: 'faq-03', question: 'Can I customise a package?', answer: 'Yes. Packages are a starting point. We can adjust specifications, materials and inclusions to suit your requirements and budget, and share a revised estimate.', order: 3 },
    { _id: 'faq-04', question: 'Do you provide architectural drawings?', answer: 'Yes. Architectural and structural drawings are part of our process, so your home is planned properly before construction begins.', order: 4 },
    { _id: 'faq-05', question: 'How do I track project progress?', answer: 'We keep you informed at every stage with regular updates on milestones, quality checks and materials, through a defined channel of communication.', order: 5 },
    { _id: 'faq-06', question: 'Do you undertake renovation projects?', answer: 'Yes. Alongside new construction we take up renovations and upgrades. Share your requirements and we will advise on the right approach.', order: 6 },
    { _id: 'faq-07', question: 'Do you handle interiors?', answer: 'Interiors are handled through Agamana Interior World, part of the Agamana Group, so design and execution can be coordinated end-to-end.', order: 7 },
    { _id: 'faq-08', question: 'What areas do you serve?', answer: 'We primarily serve Bengaluru, Sagara and Shivamogga. If your site is elsewhere in the region, get in touch and we will let you know how we can help.', order: 8 },
  ];
  for (const faq of faqs) {
    await createOrReplace({ _type: 'faqItem', ...faq });
    console.log(`  ✓ ${faq.question.slice(0, 50)}…`);
  }
}

async function seedFinalCta() {
  console.log('\n📣  Final CTA…');
  const bgImage = await uploadImageFromUrl(u('photo-1512917774080-9991f1c4c750', 1600), 'cta-background.jpg');
  await createOrReplace({
    _type: 'finalCta',
    _id: 'finalCta',
    eyebrow: 'Ready to Start?',
    headline: "Have a Plot? Let's Talk About What You Want to Build.",
    body: "Tell us about your project and we'll walk you through the next steps, from design to construction.",
    primaryCta: 'Get a Construction Estimate',
    secondaryCta: 'Call Us',
    ...(bgImage ? { backgroundImage: bgImage } : { backgroundImageUrl: u('photo-1512917774080-9991f1c4c750', 1600) }),
  });
  console.log('  ✓ Final CTA');
}

// =============================================================================
// MAIN
// =============================================================================

async function main() {
  console.log('🚀  Seeding Agamana Constructions Sanity dataset…');
  console.log(`    Project: ntom9s8p  |  Dataset: production\n`);

  await seedSiteConfig();
  await seedHero();
  await seedProjectTypeSelector();
  await seedGroupEcosystemSection();
  await seedGroupEcosystemItems();
  await seedWhatWeBuildSection();
  await seedWhatWeBuildCategories();
  await seedPackageSection();
  await seedPackages();
  await seedProcessTimelineSection();
  await seedProcessSteps();
  await seedProjectVisibility();
  await seedTeamSection();
  await seedTeamMembers();
  await seedFaqSection();
  await seedFaqs();
  await seedFinalCta();

  console.log('\n✅  All content seeded successfully!');
  console.log('    Open https://agamana-constructions.sanity.studio/ to see and edit everything.');
}

main().catch((err) => {
  console.error('\n❌  Seed failed:', err.message);
  process.exit(1);
});
