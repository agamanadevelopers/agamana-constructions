import { defineType, defineField } from 'sanity';

export const faqSection = defineType({
  name: 'faqSection',
  title: 'FAQ Section',
  type: 'document',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow Text', type: 'string' }),
    defineField({ name: 'sectionTitle', title: 'Section Title', type: 'string' }),
    defineField({ name: 'sectionSubtitle', title: 'Section Subtitle', type: 'text', rows: 2 }),
  ],
  preview: { select: { title: 'sectionTitle' } },
});
