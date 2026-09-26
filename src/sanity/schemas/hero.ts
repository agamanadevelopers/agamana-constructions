import { defineType, defineField } from 'sanity';

export const hero = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow Text (small text above headline)', type: 'string' }),
    defineField({ name: 'headlineLine1', title: 'Headline Line 1 (dark)', type: 'string' }),
    defineField({ name: 'headlineLine2', title: 'Headline Line 2 (green accent)', type: 'string' }),
    defineField({ name: 'body', title: 'Body Text', type: 'text', rows: 3 }),
    defineField({
      name: 'trustPoints',
      title: 'Trust Points (checkmark list below buttons)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'ctaPrimary', title: 'Primary Button Label', type: 'string' }),
    defineField({ name: 'ctaSecondary', title: 'Secondary Button Label', type: 'string' }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt Text', type: 'string' })],
    }),
    defineField({
      name: 'heroImageUrl',
      title: 'Hero Image URL (external, used as fallback)',
      type: 'url',
      description: 'If no image is uploaded above, this URL is used. Leave blank once you upload an image.',
    }),
    defineField({ name: 'badgeLabel', title: 'Image Badge — Label (small text)', type: 'string' }),
    defineField({ name: 'badgeText', title: 'Image Badge — Text (main text)', type: 'string' }),
  ],
  preview: { select: { title: 'headlineLine1' } },
});
