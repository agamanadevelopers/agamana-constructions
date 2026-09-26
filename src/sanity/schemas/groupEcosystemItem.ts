import { defineType, defineField } from 'sanity';

export const groupEcosystemItem = defineType({
  name: 'groupEcosystemItem',
  title: 'Group Ecosystem Item',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Entity Name', type: 'string' }),
    defineField({ name: 'description', title: 'Short Description', type: 'string' }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Recommended: 600 × 375 px (16:10 ratio). Small card image for each group company.',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt Text', type: 'string' })],
    }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'name', subtitle: 'description', media: 'image' } },
});
