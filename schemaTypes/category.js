export default {
  name: 'category',
  title: 'Kategori Tur',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nama Kategori',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'nameEn',
      title: 'Sub-judul Kategori (Inggris)',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Deskripsi Kategori',
      type: 'text',
    },
    {
      name: 'icon',
      title: 'Icon (temple, culture, nature, village, food, camera)',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Gambar Kategori',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'imageUrl',
      title: 'Link Gambar (Image URL)',
      type: 'url',
    },
    {
      name: 'count',
      title: 'Jumlah Tur Ditemukan',
      type: 'number',
    },
  ],
};
