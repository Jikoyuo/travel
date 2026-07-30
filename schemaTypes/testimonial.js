export default {
  name: 'testimonial',
  title: 'Testimonials / Reviews',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Customer Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Customer Role & Country (e.g. Travel Blogger, USA)',
      type: 'string',
    },
    {
      name: 'quote',
      title: 'Review / Quote',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Rating (1 - 5)',
      type: 'number',
      initialValue: 5,
    },
    {
      name: 'tripCount',
      title: 'Tours Taken Count',
      type: 'number',
    },
    {
      name: 'avatar',
      title: 'Customer Avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
