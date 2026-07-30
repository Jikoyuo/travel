import { sanityClient } from 'sanity:client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  if (!source) return null;
  return builder.image(source);
}

export async function getToursFromSanity() {
  try {
    const query = `*[_type == "tour"] | order(_createdAt desc) {
      "id": _id,
      name,
      category,
      price,
      originalPrice,
      rating,
      reviews,
      duration,
      badge,
      image
    }`;
    const tours = await sanityClient.fetch(query);
    if (!tours || tours.length === 0) return null;

    return tours.map((tour) => {
      let imageUrl = tour.image;
      if (typeof tour.image === 'object' && tour.image?.asset) {
        imageUrl = urlFor(tour.image)?.width(600).format('webp').quality(75).url() || '';
      }
      return {
        ...tour,
        image: imageUrl,
      };
    });
  } catch (err) {
    console.warn('Sanity fetch fallback:', err);
    return null;
  }
}
