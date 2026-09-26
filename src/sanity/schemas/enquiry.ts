import { defineType, defineField } from 'sanity';

export const enquiry = defineType({
  name: 'enquiry',
  title: 'Enquiry',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', readOnly: true }),
    defineField({ name: 'phone', title: 'Phone', type: 'string', readOnly: true }),
    defineField({ name: 'email', title: 'Email', type: 'string', readOnly: true }),
    defineField({ name: 'buildType', title: 'Building Type', type: 'string', readOnly: true }),
    defineField({ name: 'location', title: 'Location', type: 'string', readOnly: true }),
    defineField({ name: 'area', title: 'Approx. Area', type: 'string', readOnly: true }),
    defineField({ name: 'submittedAt', title: 'Submitted At', type: 'datetime', readOnly: true }),
  ],
  orderings: [{ title: 'Newest First', name: 'submittedAtDesc', by: [{ field: 'submittedAt', direction: 'desc' }] }],
  preview: {
    select: { title: 'name', subtitle: 'phone', date: 'submittedAt' },
    prepare({ title, subtitle, date }) {
      return {
        title: title ?? 'Unknown',
        subtitle: `${subtitle ?? ''}${date ? ' · ' + new Date(date).toLocaleDateString('en-IN') : ''}`,
      };
    },
  },
});
