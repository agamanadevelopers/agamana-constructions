import { groq } from 'next-sanity';

export const siteConfigQuery = groq`*[_type == "siteConfig"][0]`;

export const heroQuery = groq`*[_type == "hero"][0]`;

export const packagesQuery = groq`*[_type == "package"] | order(order asc) {
  "slug": slug.current,
  name, price, priceLabel, tagline, description, featured, highlights,
  categories[] { key, items }
}`;

export const packageBySlugQuery = groq`*[_type == "package" && slug.current == $slug][0] {
  "slug": slug.current,
  name, price, priceLabel, tagline, description, featured, highlights,
  categories[] { key, items }
}`;

export const teamQuery = groq`*[_type == "teamMember"] | order(order asc) {
  name, role, bio, emphasis,
  "image": photo.asset->url
}`;

export const faqsQuery = groq`*[_type == "faqItem"] | order(order asc) {
  question, answer
}`;

export const whatWeBuildQuery = groq`*[_type == "whatWeBuildCategory"] | order(order asc) {
  title, items,
  "image": image.asset->url,
  "imageAlt": image.alt
}`;

export const processStepsQuery = groq`*[_type == "processStep"] | order(order asc) {
  "n": stepNumber, title, "desc": description
}`;

export const projectsQuery = groq`*[_type == "project"] | order(order asc) {
  name, location, type, status,
  "image": image.asset->url
}`;

export const groupEcosystemQuery = groq`*[_type == "groupEcosystemItem"] | order(order asc) {
  name, "desc": description,
  "image": image.asset->url
}`;
