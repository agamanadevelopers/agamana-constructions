import { defineType, defineField } from 'sanity';

const categoryKeys = [
  { value: 'design', title: 'Design & Drawings' },
  { value: 'structure', title: 'Structure' },
  { value: 'kitchen', title: 'Kitchen' },
  { value: 'bathrooms', title: 'Bathrooms' },
  { value: 'doorsWindows', title: 'Doors & Windows' },
  { value: 'flooring', title: 'Flooring' },
  { value: 'painting', title: 'Painting' },
  { value: 'electrical', title: 'Electrical Work' },
  { value: 'plumbing', title: 'Plumbing' },
  { value: 'miscellaneous', title: 'Miscellaneous' },
];

export const packageSchema = defineType({
  name: 'package',
  title: 'Construction Package',
  type: 'document',
  fields: [
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } }),
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'price', title: 'Price (₹/sq.ft)', type: 'number' }),
    defineField({ name: 'priceLabel', title: 'Price Label (e.g. ₹2,099)', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'featured', title: 'Featured (Most Popular badge)', type: 'boolean' }),
    defineField({
      name: 'highlights',
      title: 'Highlights (4 bullets)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'categories',
      title: 'Spec Categories',
      type: 'array',
      of: [
        defineField({
          name: 'specCategory',
          title: 'Category',
          type: 'object',
          fields: [
            defineField({
              name: 'key',
              title: 'Category',
              type: 'string',
              options: { list: categoryKeys },
            }),
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'items', title: 'Items', type: 'array', of: [{ type: 'string' }] }),
          ],
          preview: {
            select: { title: 'key' },
            prepare({ title }) {
              return { title: categoryKeys.find((c) => c.value === title)?.title ?? title };
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: '1 = first (Basic), 2 = Classic, 3 = Luxury',
    }),
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'name', subtitle: 'priceLabel' } },
});
