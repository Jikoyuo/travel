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

function deduplicateDrafts(items) {
  if (!items || !Array.isArray(items)) return [];
  const map = new Map();
  items.forEach(item => {
    const cleanId = item._id.replace(/^drafts\./, '');
    const isDraft = item._id.startsWith('drafts.');
    if (!map.has(cleanId) || isDraft) {
      map.set(cleanId, item);
    }
  });
  return Array.from(map.values());
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
    const rawData = await sanityClient.fetch(query);
    const data = deduplicateDrafts(rawData);
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
    console.error('Sanity tours fetch error:', error);
    return [];
  }
}

export async function getCategoriesFromSanity() {
  try {
    const query = `*[_type == "category"] {
      _id,
      name,
      nameEn,
      description,
      icon,
      count,
      "image": select(
        defined(image.asset) => image.asset->url,
        defined(imageUrl) => imageUrl,
        null
      )
    }`;
    const rawData = await sanityClient.fetch(query);
    const data = deduplicateDrafts(rawData);
    if (data.length === 0) return null;
    return data.map((item, index) => ({
      id: item._id || index + 1,
      name: item.name,
      nameEn: item.nameEn || '',
      description: item.description || '',
      icon: item.icon || 'temple',
      count: item.count || 0,
      image: item.image || 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fm=webp&fit=crop&w=600&q=70',
    }));
  } catch (error) {
    console.error('Sanity categories fetch error:', error);
    return null;
  }
}

export async function getTestimonialsFromSanity() {
  try {
    const query = `*[_type == "testimonial"] {
      _id,
      name,
      role,
      avatar,
      quote,
      rating
    }`;
    const rawData = await sanityClient.fetch(query);
    const data = deduplicateDrafts(rawData);
    return data.map((item, index) => ({
      id: item._id || index + 1,
      name: item.name,
      role: item.role || 'Traveler',
      avatar: item.avatar || `https://i.pravatar.cc/150?img=${index + 10}`,
      quote: item.quote,
      rating: item.rating || 5,
    }));
  } catch (error) {
    console.error('Sanity testimonials fetch error:', error);
    return [];
  }
}
