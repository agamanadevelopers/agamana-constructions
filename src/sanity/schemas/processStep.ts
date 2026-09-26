import { defineType, defineField } from 'sanity';

export const processStep = defineType({
  name: 'processStep',
  title: 'Process Step',
  type: 'document',
  fields: [
    defineField({ name: 'stepNumber', title: 'Step Number (e.g. 01)', type: 'string' }),
    defineField({ name: 'title', title: 'Step Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'stepNumber' } },
});
