import { defineType, defineField } from 'sanity';

export const groupEcosystemSection = defineType({
  name: 'groupEcosystemSection',
  title: 'Group Ecosystem — Section',
  type: 'document',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow Text', type: 'string' }),
    defineField({ name: 'sectionTitle', title: 'Section Title', type: 'string' }),
    defineField({ name: 'sectionSubtitle', title: 'Section Subtitle', type: 'text', rows: 3 }),
    defineField({ name: 'ctaText', title: 'CTA Button Text', type: 'string' }),
    defineField({ name: 'tagline', title: 'Bottom Tagline', type: 'string', description: 'E.g. "Different capabilities. One integrated ecosystem."' }),
    defineField({
      name: 'featureImage',
      title: 'Feature Image (right side)',
      type: 'image',
      description: 'Recommended: 1120 × 896 px (5:4 ratio). Shows on the right half of the section. Use a wide construction or group photo.',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt Text', type: 'string' })],
    }),
    defineField({ name: 'featureImageUrl', title: 'Feature Image URL (external fallback)', type: 'url' }),
  ],
  preview: { select: { title: 'sectionTitle' } },
});
