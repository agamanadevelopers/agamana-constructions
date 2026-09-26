import { defineType, defineField } from 'sanity';

export const finalCta = defineType({
  name: 'finalCta',
  title: 'Final CTA Section',
  type: 'document',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow Text (small text above headline)', type: 'string' }),
    defineField({ name: 'headline', title: 'Headline', type: 'string' }),
    defineField({ name: 'body', title: 'Body Text', type: 'text', rows: 3 }),
    defineField({ name: 'primaryCta', title: 'Primary Button Label', type: 'string' }),
    defineField({ name: 'secondaryCta', title: 'Secondary Button Label (phone)', type: 'string' }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      description: 'Recommended: 1600 × 600 px (wide landscape). Displayed at 25% opacity behind the dark green CTA banner. Use a construction site aerial or wide-angle photo.',
      options: { hotspot: true },
    }),
    defineField({ name: 'backgroundImageUrl', title: 'Background Image URL (external fallback)', type: 'url' }),
  ],
  preview: { select: { title: 'headline' } },
});
