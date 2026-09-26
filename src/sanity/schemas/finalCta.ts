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
      options: { hotspot: true },
    }),
    defineField({ name: 'backgroundImageUrl', title: 'Background Image URL (external fallback)', type: 'url' }),
  ],
  preview: { select: { title: 'headline' } },
});
