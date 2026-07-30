

import { getToursFromSanity, getCategoriesFromSanity, getTestimonialsFromSanity } from '../lib/sanity.js';

const defaultCategories = [
  {
    id: 1,
    name: "Temple Tours",
    nameEn: "Ancient Wonders",
    description:
      "Explore UNESCO World Heritage temples including Borobudur and Prambanan",
    icon: "temple",
    image:
      "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fm=webp&fit=crop&w=600&q=70",
    count: 12,
  },
  {
    id: 2,
    name: "Cultural Experiences",
    nameEn: "Living Heritage",
    description:
      "Immerse yourself in Javanese traditions, batik making, and royal palace visits",
    icon: "culture",
    image:
      "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fm=webp&fit=crop&w=600&q=70",
    count: 18,
  },
  {
    id: 3,
    name: "Nature Adventures",
    nameEn: "Wild Explorations",
    description:
      "Trek volcanoes, discover hidden caves, and chase waterfalls across the region",
    icon: "nature",
    image:
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fm=webp&fit=crop&w=600&q=70",
    count: 15,
  },
  {
    id: 4,
    name: "Village Tours",
    nameEn: "Authentic Life",
    description:
      "Experience daily life in traditional Javanese villages and rural communities",
    icon: "village",
    image:
      "https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fm=webp&fit=crop&w=600&q=70",
    count: 9,
  },
  {
    id: 5,
    name: "Food & Culinary",
    nameEn: "Taste of Java",
    description:
      "Savor authentic Yogyakarta street food, traditional cuisine, and cooking classes",
    icon: "food",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fm=webp&fit=crop&w=600&q=70",
    count: 14,
  },
  {
    id: 6,
    name: "Photography Tours",
    nameEn: "Capture Moments",
    description:
      "Guided photography sessions at the most stunning and photogenic locations",
    icon: "camera",
    count: 8,
  },
];

const sanityCategories = await getCategoriesFromSanity();
export const categories = (sanityCategories && sanityCategories.length > 0) ? sanityCategories : defaultCategories;

const defaultTours = [
  {
    id: 1,
    name: "Borobudur Sunrise Experience",
    category: "Temple Tours",
    price: 75,
    originalPrice: 95,
    rating: 4.9,
    reviews: 342,
    badge: "Best Seller",
    duration: "6 hours",
    image:
      "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fm=webp&fit=crop&w=500&q=70",
  },
  {
    id: 2,
    name: "Prambanan Sunset & Ramayana",
    category: "Temple Tours",
    price: 65,
    originalPrice: null,
    rating: 4.8,
    reviews: 218,
    badge: "Popular",
    duration: "5 hours",
    image:
      "https://images.unsplash.com/photo-1609948543911-7280ba96b9b0?auto=format&fm=webp&fit=crop&w=500&q=70",
  },
  {
    id: 3,
    name: "Jomblang Cave Adventure",
    category: "Nature Adventures",
    price: 85,
    originalPrice: 110,
    rating: 4.9,
    reviews: 189,
    badge: "Hot",
    duration: "8 hours",
    image:
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fm=webp&fit=crop&w=500&q=70",
  },
  {
    id: 4,
    name: "Kraton Palace & Taman Sari",
    category: "Cultural Experiences",
    price: 45,
    originalPrice: null,
    rating: 4.7,
    reviews: 156,
    badge: null,
    duration: "4 hours",
    image:
      "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fm=webp&fit=crop&w=500&q=70",
  },
  {
    id: 5,
    name: "Mount Merapi Jeep Tour",
    category: "Nature Adventures",
    price: 55,
    originalPrice: 70,
    rating: 4.8,
    reviews: 267,
    badge: "Best Seller",
    duration: "5 hours",
    image:
      "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fm=webp&fit=crop&w=500&q=70",
  },
  {
    id: 6,
    name: "Yogyakarta Street Food Walk",
    category: "Food & Culinary",
    price: 35,
    originalPrice: null,
    rating: 4.9,
    reviews: 198,
    badge: "New",
    duration: "3 hours",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fm=webp&fit=crop&w=500&q=70",
  },
  {
    id: 7,
    name: "Batik Workshop Experience",
    category: "Cultural Experiences",
    price: 40,
    originalPrice: null,
    rating: 4.6,
    reviews: 124,
    badge: "New",
    duration: "3 hours",
    image:
      "https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fm=webp&fit=crop&w=500&q=70",
  },
  {
    id: 8,
    name: "Timang Beach & Gondola Ride",
    category: "Nature Adventures",
    price: 70,
    originalPrice: 90,
    rating: 4.7,
    reviews: 143,
    badge: "Sale",
    duration: "10 hours",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fm=webp&fit=crop&w=500&q=70",
  },
  {
    id: 9,
    name: "Sunrise at Punthuk Setumbu",
    category: "Photography Tours",
    price: 50,
    originalPrice: null,
    rating: 4.8,
    reviews: 97,
    badge: null,
    duration: "4 hours",
    image:
      "https://images.unsplash.com/photo-1600100397608-e4b1e7e70afa?auto=format&fm=webp&fit=crop&w=500&q=70",
  },
  {
    id: 10,
    name: "Kalibiru & Menoreh Hills",
    category: "Nature Adventures",
    price: 60,
    originalPrice: 75,
    rating: 4.6,
    reviews: 87,
    badge: "Sale",
    duration: "7 hours",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fm=webp&fit=crop&w=500&q=70",
  },
  {
    id: 11,
    name: "Traditional Javanese Cooking",
    category: "Food & Culinary",
    price: 45,
    originalPrice: null,
    rating: 4.7,
    reviews: 112,
    badge: null,
    duration: "4 hours",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fm=webp&fit=crop&w=500&q=70",
  },
  {
    id: 12,
    name: "Rural Village Cycling Tour",
    category: "Village Tours",
    price: 40,
    originalPrice: null,
    rating: 4.8,
    reviews: 76,
    badge: "New",
    duration: "5 hours",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fm=webp&fit=crop&w=500&q=70",
  },
  {
    id: 13,
    name: "Ratu Boko Temple Sunset",
    category: "Temple Tours",
    price: 55,
    originalPrice: null,
    rating: 4.7,
    reviews: 64,
    badge: null,
    duration: "4 hours",
    image:
      "https://images.unsplash.com/photo-1609948543911-7280ba96b9b0?auto=format&fm=webp&fit=crop&w=500&q=70",
  },
  {
    id: 14,
    name: "Full-Day Heritage Trail",
    category: "Cultural Experiences",
    price: 95,
    originalPrice: 120,
    rating: 4.9,
    reviews: 203,
    badge: "Best Seller",
    duration: "10 hours",
    image:
      "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fm=webp&fit=crop&w=500&q=70",
  },
  {
    id: 15,
    name: "Pindul Cave Tubing",
    category: "Nature Adventures",
    price: 45,
    originalPrice: null,
    rating: 4.5,
    reviews: 158,
    badge: null,
    duration: "6 hours",
    image:
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fm=webp&fit=crop&w=500&q=70",
  },
  {
    id: 16,
    name: "Malioboro Night Market Tour",
    category: "Food & Culinary",
    price: 30,
    originalPrice: null,
    rating: 4.6,
    reviews: 89,
    badge: null,
    duration: "3 hours",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fm=webp&fit=crop&w=500&q=70",
  },
  {
    id: 17,
    name: "Parangtritis Beach & Sand Dunes",
    category: "Photography Tours",
    price: 50,
    originalPrice: 65,
    rating: 4.7,
    reviews: 71,
    badge: "Sale",
    duration: "6 hours",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fm=webp&fit=crop&w=500&q=70",
  },
  {
    id: 18,
    name: "Gamelan Music Workshop",
    category: "Cultural Experiences",
    price: 35,
    originalPrice: null,
    rating: 4.5,
    reviews: 48,
    badge: "New",
    duration: "2 hours",
    image:
      "https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fm=webp&fit=crop&w=500&q=70",
  },
];

// 100% PURE REAL-TIME DATA FROM SANITY CMS
export const tours = await getToursFromSanity();

export const features = [
  {
    icon: "shield",
    title: "Licensed & Certified",
    description:
      "All our guides are government-licensed and hold internationally recognized certifications for your safety and peace of mind.",
  },
  {
    icon: "users",
    title: "Small Group Tours",
    description:
      "Maximum 8 guests per group ensures personalized attention, authentic experiences, and meaningful cultural connections.",
  },
  {
    icon: "refresh",
    title: "Free Cancellation",
    description:
      "Plans change — we get it. Cancel up to 24 hours before your tour for a full refund. No questions asked.",
  },
  {
    icon: "headphones",
    title: "24/7 Travel Support",
    description:
      "Our local support team is available around the clock via WhatsApp, phone, or email throughout your entire trip.",
  },
  {
    icon: "medal",
    title: "Best Price Guarantee",
    description:
      "Found a lower price elsewhere? We'll match it and give you an extra 10% off. That's our promise.",
  },
  {
    icon: "compass",
    title: "Local Expertise",
    description:
      "Born and raised in Yogyakarta, our guides share insider knowledge, hidden gems, and stories you won't find in guidebooks.",
  },
];

const defaultTestimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Travel Blogger, United States",
    avatar: "https://i.pravatar.cc/150?img=47",
    quote:
      "Jogja Discovery made my Borobudur sunrise experience absolutely magical. Our guide Adi knew every hidden corner and the perfect spots for photos. This was the highlight of my entire Southeast Asia trip!",
    rating: 5,
    tripCount: 12,
  },
  {
    id: 2,
    name: "Thomas Bergmann",
    role: "Photographer, Germany",
    avatar: "https://i.pravatar.cc/150?img=53",
    quote:
      "As a professional photographer, I'm picky about guided tours. The Jogja Discovery team understood exactly what I needed — golden hour timing, uncrowded locations, and local knowledge that no travel blog could provide.",
    rating: 5,
    tripCount: 8,
  },
  {
    id: 3,
    name: "Yuki Tanaka",
    role: "Solo Traveler, Japan",
    avatar: "https://i.pravatar.cc/150?img=25",
    quote:
      "I traveled solo to Yogyakarta and was nervous, but my guide made me feel completely at ease. The village tour was incredibly authentic — I learned to make batik and enjoyed a home-cooked meal with a local family.",
    rating: 5,
    tripCount: 6,
  },
  {
    id: 4,
    name: "James & Emma Clarke",
    role: "Couple, Australia",
    avatar: "https://i.pravatar.cc/150?img=11",
    quote:
      "We booked the Full-Day Heritage Trail for our honeymoon and it was perfect. From Prambanan to Kraton Palace, every moment was thoughtfully curated. The private car and flexible schedule made all the difference.",
    rating: 5,
    tripCount: 3,
  },
  {
    id: 5,
    name: "Marie Dubois",
    role: "History Teacher, France",
    avatar: "https://i.pravatar.cc/150?img=29",
    quote:
      "The depth of historical knowledge our guide shared at Borobudur was remarkable. As a history teacher, I was genuinely impressed. He brought the 9th-century Buddhist reliefs to life with fascinating stories.",
    rating: 5,
    tripCount: 15,
  },
  {
    id: 6,
    name: "Carlos Rivera",
    role: "Adventure Enthusiast, Spain",
    avatar: "https://i.pravatar.cc/150?img=67",
    quote:
      "The Jomblang Cave adventure was absolutely breathtaking! The moment the sunlight beam hit the underground river, I was speechless. Our guide ensured all safety measures while keeping the experience thrilling.",
    rating: 5,
    tripCount: 22,
  },
  {
    id: 7,
    name: "Lisa van der Berg",
    role: "Food Critic, Netherlands",
    avatar: "https://i.pravatar.cc/150?img=44",
    quote:
      "The street food tour opened my eyes to Yogyakarta's incredible culinary scene. Gudeg, bakpia, wedang ronde — each stop was more delicious than the last. My guide knew the best-kept local secrets.",
    rating: 5,
    tripCount: 9,
  },
  {
    id: 8,
    name: "Kevin Park",
    role: "Digital Nomad, South Korea",
    avatar: "https://i.pravatar.cc/150?img=56",
    quote:
      "I've been living in Jogja for 3 months and still learned so much on the cultural experience tour. The gamelan workshop and shadow puppet show were incredible. Highly recommend even for long-term visitors!",
    rating: 5,
    tripCount: 4,
  },
  {
    id: 9,
    name: "Amara Okonkwo",
    role: "Family Traveler, United Kingdom",
    avatar: "https://i.pravatar.cc/150?img=41",
    quote:
      "Traveling with three kids can be stressful, but Jogja Discovery made it seamless. The Mount Merapi jeep tour was a hit with the whole family. Child-friendly pace, safety gear provided, and so much fun!",
    rating: 5,
    tripCount: 7,
  },
  {
    id: 10,
    name: "Marco Rossi",
    role: "Architecture Student, Italy",
    avatar: "https://i.pravatar.cc/150?img=70",
    quote:
      "Studying the architectural details of Prambanan with our guide was like having a private lecture from a professor. The way they explained Hindu-Javanese temple design transformed my understanding of Southeast Asian architecture.",
    rating: 5,
    tripCount: 5,
  },
];

const sanityTestimonials = await getTestimonialsFromSanity();
export const testimonials = (sanityTestimonials && sanityTestimonials.length > 0) ? sanityTestimonials : defaultTestimonials;

export const companyInfo = {
  name: import.meta.env.PUBLIC_COMPANY_NAME || "Jogja Discovery",
  tagline: "Discover the Soul of Yogyakarta",
  description:
    "Jogja Discovery is a premier tour guide service based in Yogyakarta, Indonesia. Since 2016, we have helped thousands of travelers experience the rich cultural heritage, stunning temples, and natural beauty of the Yogyakarta region.",
  phone: import.meta.env.PUBLIC_COMPANY_PHONE || "+62 896 6447 0000",
  email: import.meta.env.PUBLIC_COMPANY_EMAIL || "hello@jogja-discovery.com",
  whatsapp: import.meta.env.PUBLIC_COMPANY_WHATSAPP || "6289664470000",
  address:
    import.meta.env.PUBLIC_COMPANY_ADDRESS ||
    "Jl. Prawirotaman No. 28, Mergangsan, Yogyakarta 55153",
  coordinates: {
    lat: -7.8099,
    lng: 110.3654,
  },
  socials: {
    instagram:
      import.meta.env.PUBLIC_INSTAGRAM_URL ||
      "https://instagram.com/jogja.discovery",
    facebook:
      import.meta.env.PUBLIC_FACEBOOK_URL ||
      "https://facebook.com/jogja.discovery",
    tiktok:
      import.meta.env.PUBLIC_TIKTOK_URL ||
      "https://tiktok.com/@jogja.discovery",
  },
  officeHours: {
    weekdays: "07:00 – 21:00 WIB",
    weekends: "08:00 – 20:00 WIB",
    holidays: "09:00 – 18:00 WIB",
  },
};
