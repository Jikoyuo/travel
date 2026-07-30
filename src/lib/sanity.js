import { createClient } from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'swt686hz',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source) {
  return builder.image(source);
}

export async function getToursFromSanity() {
  try {
    const query = `*[_type == "tour"] {
      _id,
      name,
      category,
      price,
      originalPrice,
      rating,
      reviews,
      badge,
      duration,
      "image": select(
        defined(image.asset) => image.asset->url,
        defined(imageUrl) => imageUrl,
        null
      ),
      description
    }`;
    const data = await sanityClient.fetch(query);
    if (!data || data.length === 0) return null;
    return data.map((item, index) => ({
      id: item._id || index + 1,
      name: item.name,
      category: item.category,
      price: item.price,
      originalPrice: item.originalPrice || null,
      rating: item.rating || 4.8,
      reviews: item.reviews || 100,
      badge: item.badge || null,
      duration: item.duration || '5 hours',
      image: item.image || 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fm=webp&fit=crop&w=500&q=70',
    }));
  } catch (error) {
    console.warn('Sanity fetch warning (using local fallback data):', error);
    return null;
  }
}
