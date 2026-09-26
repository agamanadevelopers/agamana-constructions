import { defineType, defineField } from 'sanity';

export const hero = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow Text', type: 'string' }),
    defineField({ name: 'headlineLine1', title: 'Headline Line 1', type: 'string' }),
    defineField({ name: 'headlineLine2', title: 'Headline Line 2 (accent colour)', type: 'string' }),
    defineField({ name: 'body', title: 'Body Text', type: 'text', rows: 3 }),
    defineField({
      name: 'trustPoints',
      title: 'Trust Points (checkmark list)',
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
  ],
  preview: { select: { title: 'headlineLine1' } },
});
