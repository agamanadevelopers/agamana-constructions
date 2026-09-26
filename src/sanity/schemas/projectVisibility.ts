import { defineType, defineField } from 'sanity';

const ICON_OPTIONS = [
  { title: 'Progress', value: 'progress' },
  { title: 'Quality', value: 'quality' },
  { title: 'Materials', value: 'materials' },
  { title: 'Costs', value: 'costs' },
  { title: 'Communication', value: 'communication' },
  { title: 'Documentation', value: 'documentation' },
];

export const projectVisibility = defineType({
  name: 'projectVisibility',
  title: 'Project Visibility Section',
  type: 'document',
  fields: [
    defineField({ name: 'sectionTitle', title: 'Section Title', type: 'string' }),
    defineField({ name: 'sectionSubtitle', title: 'Section Subtitle', type: 'text', rows: 2 }),
    defineField({
      name: 'sideImage',
      title: 'Side Image',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt Text', type: 'string' })],
    }),
    defineField({ name: 'sideImageUrl', title: 'Side Image URL (external fallback)', type: 'url' }),
    defineField({
      name: 'features',
      title: 'Feature Cards',
      type: 'array',
      of: [{
        type: 'object',
        name: 'visibilityFeature',
        fields: [
          defineField({ name: 'title', title: 'Title', type: 'string' }),
          defineField({ name: 'desc', title: 'Description', type: 'string' }),
          defineField({
            name: 'iconKey',
            title: 'Icon',
            type: 'string',
            options: { list: ICON_OPTIONS },
          }),
        ],
        preview: { select: { title: 'title', subtitle: 'desc' } },
      }],
    }),
  ],
  preview: { select: { title: 'sectionTitle' } },
});
