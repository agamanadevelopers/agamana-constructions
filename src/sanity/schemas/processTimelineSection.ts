import { defineType, defineField } from 'sanity';

export const processTimelineSection = defineType({
  name: 'processTimelineSection',
  title: 'Process Timeline — Section',
  type: 'document',
  fields: [
    defineField({ name: 'sectionTitle', title: 'Section Title', type: 'string' }),
    defineField({ name: 'sectionSubtitle', title: 'Section Subtitle', type: 'text', rows: 2 }),
  ],
  preview: { select: { title: 'sectionTitle' } },
});
