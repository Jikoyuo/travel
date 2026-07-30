export default {
  name: 'tour',
  title: 'Paket Tur (Tours)',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nama Tur',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Kategori',
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
      title: 'Harga ($ USD)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    },
    {
      name: 'originalPrice',
      title: 'Harga Asli Coret ($ USD)',
      type: 'number',
      description: 'Isi jika sedang diskon',
    },
    {
      name: 'rating',
      title: 'Rating (contoh: 4.9)',
      type: 'number',
      initialValue: 4.8,
    },
    {
      name: 'reviews',
      title: 'Jumlah Ulasan',
      type: 'number',
      initialValue: 100,
    },
    {
      name: 'badge',
      title: 'Badge Label',
      type: 'string',
      options: {
        list: ['Best Seller', 'Popular', 'Hot', 'Sale', 'New'],
      },
    },
    {
      name: 'duration',
      title: 'Durasi (contoh: 5 hours)',
      type: 'string',
      initialValue: '5 hours',
    },
    {
      name: 'image',
      title: 'Foto Utama Tur',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imageUrl',
      title: 'Atau Gunakan Link Gambar (Image URL)',
      type: 'url',
      description: 'Gunakan ini jika belum upload foto langsung ke Sanity',
    },
    {
      name: 'description',
      title: 'Deskripsi Singkat / Detail',
      type: 'text',
    },
  ],
};
