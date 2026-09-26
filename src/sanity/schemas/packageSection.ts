import { defineType, defineField } from 'sanity';

export const packageSection = defineType({
  name: 'packageSection',
  title: 'Packages Section',
  type: 'document',
  fields: [
    defineField({ name: 'sectionTitle', title: 'Section Title', type: 'string' }),
    defineField({ name: 'sectionSubtitle', title: 'Section Subtitle', type: 'text', rows: 2 }),
    defineField({ name: 'compareLinkText', title: 'Compare Link Text', type: 'string' }),
    defineField({ name: 'footerNote', title: 'Footer Note (small text below cards)', type: 'string' }),
  ],
  preview: { select: { title: 'sectionTitle' } },
});
