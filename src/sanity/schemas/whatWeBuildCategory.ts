import { defineType, defineField } from 'sanity';

export const whatWeBuildCategory = defineType({
  name: 'whatWeBuildCategory',
  title: 'What We Build – Category',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Category Title (e.g. Residential)', type: 'string' }),
    defineField({
      name: 'items',
      title: 'Sub-items',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'image',
      title: 'Category Image',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt Text', type: 'string' })],
    }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', media: 'image' } },
});
