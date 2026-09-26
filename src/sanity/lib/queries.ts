import { groq } from 'next-sanity';

const CATEGORY_LABEL = `select(
  key == "design" => "Design & Drawings",
  key == "structure" => "Structure",
  key == "kitchen" => "Kitchen",
  key == "bathrooms" => "Bathrooms",
  key == "doorsWindows" => "Doors & Windows",
  key == "flooring" => "Flooring",
  key == "painting" => "Painting",
  key == "electrical" => "Electrical Work",
  key == "plumbing" => "Plumbing",
  key == "miscellaneous" => "Miscellaneous"
)`;

// ── Site Config ───────────────────────────────────────────────────────────────
export const siteConfigQuery = groq`*[_type == "siteConfig"][0]`;

// ── Hero ──────────────────────────────────────────────────────────────────────
export const heroQuery = groq`*[_type == "hero"][0] {
  eyebrow, headlineLine1, headlineLine2, body, trustPoints,
  ctaPrimary, ctaSecondary,
  "heroImage": coalesce(heroImage.asset->url, heroImageUrl),
  "heroImageAlt": heroImage.alt,
  badgeLabel, badgeText
}`;

// ── Project Type Selector ─────────────────────────────────────────────────────
export const projectTypeSelectorQuery = groq`*[_type == "projectTypeSelector"][0] {
  sectionTitle, sectionSubtitle, ctaText,
  types[] {
    title, desc, estimateType,
    "image": coalesce(image.asset->url, imageUrl)
  }
}`;

// ── Group Ecosystem Section ───────────────────────────────────────────────────
export const groupEcosystemSectionQuery = groq`*[_type == "groupEcosystemSection"][0] {
  eyebrow, sectionTitle, sectionSubtitle, ctaText, tagline,
  "featureImage": coalesce(featureImage.asset->url, featureImageUrl)
}`;

// ── Group Ecosystem Items ─────────────────────────────────────────────────────
export const groupEcosystemQuery = groq`*[_type == "groupEcosystemItem"] | order(order asc) {
  name, "desc": description,
  "image": coalesce(image.asset->url, imageUrl)
}`;

// ── What We Build Section ─────────────────────────────────────────────────────
export const whatWeBuildSectionQuery = groq`*[_type == "whatWeBuildSection"][0] {
  sectionTitle, linkText
}`;

// ── What We Build Categories ──────────────────────────────────────────────────
export const whatWeBuildQuery = groq`*[_type == "whatWeBuildCategory"] | order(order asc) {
  title, items,
  "image": coalesce(image.asset->url, imageUrl),
  "imageAlt": coalesce(image.alt, alt)
}`;

// ── Package Section Config ────────────────────────────────────────────────────
export const packageSectionQuery = groq`*[_type == "packageSection"][0] {
  sectionTitle, sectionSubtitle, compareLinkText, footerNote
}`;

// ── Packages ──────────────────────────────────────────────────────────────────
export const packagesQuery = groq`*[_type == "package"] | order(order asc) {
  "slug": slug.current,
  name, price, priceLabel, tagline, description, featured, highlights,
  categories[] { key, "label": ${CATEGORY_LABEL}, items }
}`;

export const packageBySlugQuery = groq`*[_type == "package" && slug.current == $slug][0] {
  "slug": slug.current,
  name, price, priceLabel, tagline, description, featured, highlights,
  categories[] { key, "label": ${CATEGORY_LABEL}, items }
}`;

export const packageSlugsQuery = groq`*[_type == "package"]{ "slug": slug.current }`;

// ── Process Timeline Section ──────────────────────────────────────────────────
export const processTimelineSectionQuery = groq`*[_type == "processTimelineSection"][0] {
  sectionTitle, sectionSubtitle
}`;

// ── Process Steps ─────────────────────────────────────────────────────────────
export const processStepsQuery = groq`*[_type == "processStep"] | order(order asc) {
  "n": stepNumber, title, "desc": description
}`;

// ── Project Visibility ────────────────────────────────────────────────────────
export const projectVisibilityQuery = groq`*[_type == "projectVisibility"][0] {
  sectionTitle, sectionSubtitle,
  "sideImage": coalesce(sideImage.asset->url, sideImageUrl),
  "sideImageAlt": sideImage.alt,
  features[] { title, desc, iconKey }
}`;

// ── Team Section ──────────────────────────────────────────────────────────────
export const teamSectionQuery = groq`*[_type == "teamSection"][0] {
  eyebrow, sectionTitle, sectionSubtitle
}`;

// ── Team Members ──────────────────────────────────────────────────────────────
export const teamQuery = groq`*[_type == "teamMember"] | order(order asc) {
  name, role, bio, emphasis,
  "image": photo.asset->url
}`;

// ── FAQ Section ───────────────────────────────────────────────────────────────
export const faqSectionQuery = groq`*[_type == "faqSection"][0] {
  eyebrow, sectionTitle, sectionSubtitle
}`;

// ── FAQ Items ─────────────────────────────────────────────────────────────────
export const faqsQuery = groq`*[_type == "faqItem"] | order(order asc) {
  question, answer
}`;

// ── Final CTA ─────────────────────────────────────────────────────────────────
export const finalCtaQuery = groq`*[_type == "finalCta"][0] {
  eyebrow, headline, body, primaryCta, secondaryCta,
  "backgroundImage": coalesce(backgroundImage.asset->url, backgroundImageUrl)
}`;

// ── Projects ──────────────────────────────────────────────────────────────────
export const projectsQuery = groq`*[_type == "project"] | order(order asc) {
  name, location, type, status,
  "image": image.asset->url
}`;
