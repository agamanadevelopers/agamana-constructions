import { defineType, defineField } from 'sanity';

export const whatWeBuildSection = defineType({
  name: 'whatWeBuildSection',
  title: 'What We Build — Section',
  type: 'document',
  fields: [
    defineField({ name: 'sectionTitle', title: 'Section Title', type: 'string' }),
    defineField({ name: 'linkText', title: 'View All Link Text', type: 'string' }),
  ],
  preview: { select: { title: 'sectionTitle' } },
});
