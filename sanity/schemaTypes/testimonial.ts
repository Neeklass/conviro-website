import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Kundenreferenzen',
  type: 'document',
  fields: [
    defineField({
      name: 'customerName',
      title: 'Name des Kunden',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Firma',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quote',
      title: 'Zitat-Text',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().max(500),
    }),
    defineField({
      name: 'companyLogo',
      title: 'Firmenlogo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'rating',
      title: 'Bewertung',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5).integer(),
      description: 'Bewertung von 1 bis 5 Sternen',
    }),
    defineField({
      name: 'featured',
      title: 'Hervorgehoben',
      type: 'boolean',
      description: 'Auf der Startseite anzeigen',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'customerName',
      subtitle: 'company',
      media: 'companyLogo',
    },
  },
})
