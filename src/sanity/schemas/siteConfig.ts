import { defineType, defineField } from 'sanity';

export const siteConfig = defineType({
  name: 'siteConfig',
  title: 'Site Configuration',
  type: 'document',
  groups: [
    { name: 'brand', title: 'Brand & Contact' },
    { name: 'nav', title: 'Navigation' },
    { name: 'whatsapp', title: 'WhatsApp Messages' },
    { name: 'seo', title: 'SEO & Meta' },
  ],
  fields: [
    // ── Brand & Contact ──────────────────────────────────────────────────────
    defineField({ name: 'brand', title: 'Brand Name', type: 'string', group: 'brand' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string', group: 'brand', description: 'Shown in header and hero eyebrow' }),
    defineField({ name: 'siteUrl', title: 'Site URL', type: 'url', group: 'brand' }),
    defineField({
      name: 'locations',
      title: 'Locations',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'brand',
      description: 'Displayed in header, hero and footer',
    }),
    defineField({ name: 'phoneDisplay', title: 'Phone (display format)', type: 'string', group: 'brand' }),
    defineField({ name: 'phoneHref', title: 'Phone (digits only, for tel: link)', type: 'string', group: 'brand' }),
    defineField({ name: 'whatsappNumber', title: 'WhatsApp Number (country code + number, no spaces)', type: 'string', group: 'brand' }),
    defineField({ name: 'email', title: 'Email Address', type: 'string', group: 'brand' }),
    defineField({ name: 'addressLabel', title: 'Address Label (e.g. Head Office)', type: 'string', group: 'brand' }),
    defineField({ name: 'address', title: 'Full Address', type: 'text', rows: 3, group: 'brand' }),
    defineField({ name: 'groupName', title: 'Group Name', type: 'string', group: 'brand' }),
    defineField({ name: 'groupUrl', title: 'Group Website URL', type: 'url', group: 'brand' }),

    // ── Navigation ───────────────────────────────────────────────────────────
    defineField({
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      group: 'nav',
      of: [{
        type: 'object',
        name: 'navLink',
        fields: [
          defineField({ name: 'label', title: 'Label', type: 'string' }),
          defineField({ name: 'href', title: 'Link / Anchor', type: 'string' }),
        ],
        preview: { select: { title: 'label', subtitle: 'href' } },
      }],
    }),

    // ── WhatsApp Messages ────────────────────────────────────────────────────
    defineField({
      name: 'whatsappMessageGeneral',
      title: 'General WhatsApp Message',
      type: 'text',
      rows: 3,
      group: 'whatsapp',
      description: 'Sent when a visitor clicks WhatsApp from the footer or header',
    }),
    defineField({
      name: 'whatsappMessageHome',
      title: 'Home / Package WhatsApp Message',
      type: 'text',
      rows: 3,
      group: 'whatsapp',
    }),
    defineField({
      name: 'whatsappMessagePackage',
      title: 'Package-Specific Message Template',
      type: 'text',
      rows: 3,
      group: 'whatsapp',
      description: 'Use {packageName} as placeholder, e.g. "I\'m interested in the {packageName} package."',
    }),

    // ── SEO & Meta ───────────────────────────────────────────────────────────
    defineField({ name: 'seoTitle', title: 'Default Site Title', type: 'string', group: 'seo' }),
    defineField({
      name: 'seoTitleTemplate',
      title: 'Page Title Template',
      type: 'string',
      group: 'seo',
      description: 'Use %s for the page name, e.g. "%s · Agamana Constructions"',
    }),
    defineField({ name: 'seoDescription', title: 'Default Meta Description', type: 'text', rows: 3, group: 'seo' }),
    defineField({
      name: 'seoKeywords',
      title: 'SEO Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'seo',
    }),
    defineField({ name: 'ogTitle', title: 'OG / Social Title', type: 'string', group: 'seo' }),
    defineField({ name: 'ogDescription', title: 'OG / Social Description', type: 'text', rows: 2, group: 'seo' }),
    defineField({
      name: 'ogImage',
      title: 'OG / Social Share Image',
      type: 'image',
      description: 'Required: exactly 1200 × 630 px. This image appears when the site is shared on WhatsApp, Facebook, Twitter, etc.',
      options: { hotspot: true },
      group: 'seo',
    }),
  ],
  preview: { select: { title: 'brand' } },
});
