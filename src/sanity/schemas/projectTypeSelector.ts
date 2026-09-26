import { defineType, defineField } from 'sanity';

export const projectTypeSelector = defineType({
  name: 'projectTypeSelector',
  title: 'What Are You Building?',
  type: 'document',
  fields: [
    defineField({ name: 'sectionTitle', title: 'Section Title', type: 'string' }),
    defineField({ name: 'sectionSubtitle', title: 'Section Subtitle', type: 'text', rows: 2 }),
    defineField({ name: 'ctaText', title: 'CTA Link Text (desktop)', type: 'string' }),
    defineField({
      name: 'types',
      title: 'Project Types',
      type: 'array',
      of: [{
        type: 'object',
        name: 'projectType',
        fields: [
          defineField({ name: 'title', title: 'Title', type: 'string' }),
          defineField({ name: 'desc', title: 'Description', type: 'string' }),
          defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
          }),
          defineField({ name: 'imageUrl', title: 'Image URL (external fallback)', type: 'url' }),
          defineField({
            name: 'estimateType',
            title: 'Estimate Type Key',
            type: 'string',
            description: 'Used to pre-fill the estimate form: Home, Villa, Commercial, Hospitality, Renovation',
          }),
        ],
        preview: { select: { title: 'title', subtitle: 'desc' } },
      }],
    }),
  ],
  preview: { select: { title: 'sectionTitle' } },
});
