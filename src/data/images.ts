/**
 * Centralised image references.
 * -------------------------------------------------------------------------
 * These are tasteful architectural PLACEHOLDERS (Unsplash). Swap each URL for
 * Agamana's own photography before launch. Keeping them here means the UI
 * components never hard-code an image.
 * -------------------------------------------------------------------------
 */

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: u('photo-1600585154340-be6161a56a0c', 1400),

  // Project-type selector
  typeHome: u('photo-1600607687939-ce8a6c25118c'),
  typeVilla: u('photo-1613977257363-707ba9348227'),
  typeCommercial: u('photo-1486406146926-c627a92ad1ab'),
  typeHospitality: u('photo-1571896349842-33c89424de2d'),
  typeInstitutional: u('photo-1562774053-701939374585'),
  typeCivil: u('photo-1503387762-592deb58ef4e'),
  typeRenovation: u('photo-1503174971373-b1f69850bded'),

  // Group ecosystem
  groupFeature: u('photo-1600566753086-00f18fb6b3ea'),
  ecoDevelopers: u('photo-1500382017468-9049fed747ef'),
  ecoConstructions: u('photo-1541888946425-d81bb19240f5'),
  ecoInterior: u('photo-1618221195710-dd6b41faaea6'),
  ecoProjects: u('photo-1487958449943-2429e8be8625'),

  // What we build
  buildResidential: u('photo-1600585154340-be6161a56a0c'),
  buildCommercial: u('photo-1497366216548-37526070297c'),
  buildHospitality: u('photo-1520250497591-112f2f40a3f4'),
  buildInstitutional: u('photo-1592280771190-3e2e4d571952'),
  buildCivil: u('photo-1590274853856-f22d5ee3d228'),

  // Project visibility site image
  siteEngineer: u('photo-1504328345606-18bbc8c9d7d1', 1000),

  // Final CTA background
  ctaBackground: u('photo-1512917774080-9991f1c4c750', 1600),

  // Team (portrait placeholders)
  teamVinay: u('photo-1507003211169-0a1dd7228f2d', 600),
  teamSudarshan: u('photo-1500648767791-00dcc994a43e', 600),
  teamAshwath: u('photo-1519085360753-af0119f7cbe7', 600),
} as const;
