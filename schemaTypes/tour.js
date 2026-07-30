export default {
  name: 'tour',
  title: 'Tour Packages',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Tour Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          'Temple Tours',
          'Cultural Experiences',
          'Nature Adventures',
          'Village Tours',
          'Food & Culinary',
          'Photography Tours',
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price ($)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: 'originalPrice',
      title: 'Original Price ($ - Optional for Sale)',
      type: 'number',
    },
    {
      name: 'rating',
      title: 'Rating (e.g. 4.9)',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5),
    },
    {
      name: 'reviews',
      title: 'Review Count',
      type: 'number',
    },
    {
      name: 'duration',
      title: 'Duration (e.g. 6 hours)',
      type: 'string',
    },
    {
      name: 'badge',
      title: 'Badge (Optional: Best Seller, Hot, Sale, Popular, New)',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Tour Image',
      type: 'image',
      options: {
        hotspot: true, // Enables visual cropping focal point
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
