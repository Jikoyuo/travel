export default {
  name: 'testimonial',
  title: 'Testimoni Wisatawan',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nama Wisatawan',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Profesi / Asal Negara',
      type: 'string',
    },
    {
      name: 'avatar',
      title: 'Foto Profil (Image URL)',
      type: 'string',
    },
    {
      name: 'quote',
      title: 'Ulasan / Testimoni',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Rating Bintang (1 - 5)',
      type: 'number',
      initialValue: 5,
    },
  ],
};
