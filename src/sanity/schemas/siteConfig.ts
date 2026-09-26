import { defineType, defineField } from 'sanity';

export const siteConfig = defineType({
  name: 'siteConfig',
  title: 'Site Configuration',
  type: 'document',
  fields: [
    defineField({ name: 'brand', title: 'Brand Name', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline (eyebrow text)', type: 'string' }),
    defineField({
      name: 'locations',
      title: 'Locations',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Displayed as bullet points in header and footer',
    }),
    defineField({ name: 'phoneDisplay', title: 'Phone (display)', type: 'string' }),
    defineField({ name: 'phoneHref', title: 'Phone (href, digits only)', type: 'string' }),
    defineField({ name: 'whatsappNumber', title: 'WhatsApp Number (country code + number)', type: 'string' }),
    defineField({ name: 'email', title: 'Email Address', type: 'string' }),
    defineField({ name: 'addressLabel', title: 'Address Label', type: 'string' }),
    defineField({ name: 'address', title: 'Full Address', type: 'text', rows: 3 }),
    defineField({ name: 'groupName', title: 'Group Name', type: 'string' }),
    defineField({ name: 'groupUrl', title: 'Group Website URL', type: 'url' }),
  ],
  preview: { select: { title: 'brand' } },
});
