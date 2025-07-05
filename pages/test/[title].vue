<script setup>
import HotelCard from '~/components/hotel/Card.vue'
import HotelFilters from '~/components/hotel/Filters.vue'

const route = useRoute()
const title = route.params.title

// Define the hotels data (this should match your index page data)
const hotelsData = ref([
  {
    title: 'Best Hotels in Bangalore',
    description: "Experience the Best Hotels in Bangalore — where the city’s vibrant culture, cutting-edge innovation, and cosmopolitan energy come alive. These handpicked stays combine comfort, charm, and top-tier service to create truly unforgettable experiences. Whether you're in town for business, leisure, or a mix of both, Bangalore’s top hotels deliver excellence at every turn. From iconic luxury like The Oberoi, Bengaluru to contemporary elegance at Renaissance Bengaluru Race Course Hotel, discover 20 of the best hotels in Bangalore that promise more than just a place to stay — they offer a gateway to the city's heart.",
    date: '2025-01-01',
    image: '/images/hotels/hotel1/best-hotels-in-bangalore.jpg',
    hotels: [
      {
        id: 1,
        name: 'The Oberoi, Bengaluru',
        location: ' 37-39, MG Rd, Yellappa Garden',
        image: '/images/hotels/hotel1/best-hotels-in bangalore-1.jpg',
        description: 'The Oberoi, one of the best hotels in Bangalore 2025, is a luxurious garden retreat on MG Road, built around a 100-year-old rain tree. With 160 rooms offering private balconies and lush views,.',
        price: 21258,
        rating: 4.5,
        reviews: 167,
        tags: ['Breakfast Included', 'MMT Luxe', 'Free Cancellation'],
      },
      {
        id: 2,
        name: 'Taj Exotica Resort & Spa',
        location: '99, Residency Rd, Shanthala Nagar, Bengaluru 560025',
        image: '/images/hotels/hotel1/five.webp',
        description: 'The Ritz-Carlton, among the best hotels in Bangalore, offers spacious rooms with intricate latticework, 1,200+ artworks, nine dining options including Riwaz, the rooftop bar Bang, and a 17,000-sqft spa—delivering luxury in the heart of the city.',
        price: 28400,
        rating: 4.7,
        reviews: 210,
        tags: ['Free Cancellation', 'MMT Luxe'],
      },
      {
        id: 3,
        name: 'JW Marriott Hotel Bengaluru',
        location: '24/1, Vittal Mallya Rd, KG Halli, BLR, 560001',
        image: 'https://source.unsplash.com/500x300/?beach,maldives',
        description: 'Overlooking Cubbon Park near UB City, this luxury hotel offers plush rooms, a temperature-controlled outdoor pool, and a soothing spa. Enjoy JW Kitchen\'s Sunday brunch, European cuisine at Alba, and craft brews by the pool at Spice Terrace.',
        price: 33000,
        rating: 4.8,
        reviews: 185,
        tags: ['Breakfast Included', 'Private Beach', 'Luxury'],
      },
      {
        id: 4,
        name: 'The Leela Palace, Bengaluru',
        location: 'Old Airport Road, Bengaluru',
        image: 'https://source.unsplash.com/500x300/?luxury,hotel',
        description: 'A majestic property inspired by the Vijayanagara Empire, set on nine acres with rose-hued domes and lush gardens. Highlights include Royal Club suites with butler service, fine dining at Jamavar, Zen, Le Cirque, and the secret speakeasy ZLB 23.',
        price: 45200,
        rating: 5.0,
        reviews: 198,
        tags: ['Eco-Friendly', 'MMT Luxe', 'Private Pool'],
      },
      {
        id: 5,
        name: 'Taj West End',
        location: 'Race Course Road, Bengaluru',
        image: 'https://source.unsplash.com/500x300/?island,maldives',
        description: 'Taj West End, among the best hotels in Bangalore 2025, is a colonial-style retreat established in 1887. Nestled in lush gardens, it offers heritage charm, the J Wellness Circle, and fine dining at Machan and Blue Ginger for a timeless escape.',
        price: 58000,
        rating: 4.9,
        reviews: 230,
        tags: ['Breakfast Included', 'Private Villas', 'Free Cancellation'],
      },
      {
        id: 6,
        name: 'ITC Gardenia',
        location: '1, Residency Rd, Ashok Nagar, BLR, 560025',
        image: 'https://source.unsplash.com/500x300/?tropical,maldives',
        description: 'ITC Gardenia, a green haven reflecting Bengaluru\'s spirit, blends eco-conscious luxury with artistic interiors and premium hospitality—perfect for those who value sustainability without compromising on style.',
        price: 41000,
        rating: 4.6,
        reviews: 275,
        tags: ['Luxury', 'Water Villas', 'Private Beach'],
      },
      {
        id: 7,
        name: 'Sheraton Grand Bangalore at Brigade Gateway',
        location: ' 26/1, Malleswaram (adjacent to Orion Mall)',
        image: 'https://source.unsplash.com/500x300/?tropical,hotel',
        description: 'Located in Orion Mall and World Trade Centre, this hotel offers 230 rooms, an infinity pool, and diverse dining options—from Italian at Bene to rooftop Middle Eastern cuisine at The Persian Terrace, all paired with stunning views.',
        price: 36900,
        rating: 4.4,
        reviews: 310,
        tags: ['Free Cancellation', 'MMT Luxe', 'Water Villas'],
      },
      {
        id: 8,
        name: 'Renaissance Bengaluru Race Course Hotel',
        location: 'No 17 and 17/1, Race Course Rd, Madhava Nagar, BLR 560001',
        image: '/images/hotels/hotel1/wayanad.jpg',
        description: 'Just 500 meters from Bangalore Turf Club, this stylish hotel features chic rooms, a rooftop pool, and equestrian-inspired R Bar. The open-air dining at Lush and curated city experiences make it a hidden urban gem.',
        price: 50300,
        rating: 4.7,
        reviews: 210,
        tags: ['Underwater Dining', 'Private Pool', 'Breakfast Included'],
      },
      {
        id: 9,
        name: 'Conrad Bengaluru',
        location: '25/3, Kensington Rd, Halasuru, BLR, 560008',
        image: 'https://source.unsplash.com/500x300/?luxury,water-villa',
        description: 'Soaring 24 stories above the Central Business District, Conrad offers elegant rooms with Ulsoor Lake views. Renowned for refined hospitality and upscale dining, it\'s perfect for discerning travelers seeking luxury in the city\'s heart.',
        price: 42000,
        rating: 4.8,
        reviews: 160,
        tags: ['Water Villas', 'Private Beach', 'Luxury'],
      },
      {
        id: 10,
        name: 'Taj MG Road, Bengaluru',
        location: 'MG Road (near Trinity Circle)',
        image: 'https://source.unsplash.com/500x300/?maldives,resort-luxury',
        description: 'Set close to shopping and cultural hotspots, this contemporary Taj hotel blends comfort with elegance. Expect signature hospitality, scenic views, and a host of culinary delights.',
        price: 49000,
        rating: 4.6,
        reviews: 185,
        tags: ['Wellness', 'Private Villas', 'Free Cancellation'],
      },
    ],
  },
  {
    title: 'Best Hotels in Koramangala',
    description: "Experience the Best Hotels in Bangalore — where the city’s vibrant culture, cutting-edge innovation, and cosmopolitan energy come alive. These handpicked stays combine comfort, charm, and top-tier service to create truly unforgettable experiences. Whether you're in town for business, leisure, or a mix of both, Bangalore’s top hotels deliver excellence at every turn. From iconic luxury like The Oberoi, Bengaluru to contemporary elegance at Renaissance Bengaluru Race Course Hotel, discover 20 of the best hotels in Bangalore that promise more than just a place to stay — they offer a gateway to the city's heart.",
    date: '2025-01-01',
    image: '/images/hotels/hotel1/best-hotels-in-bangalore.jpg',
    hotels: [
      {
        id: 1,
        name: 'The Oberoi, Bengaluru',
        location: ' 37-39, MG Rd, Yellappa Garden',
        image: '/images/hotels/hotel1/best-hotels-in bangalore-1.jpg',
        description: 'The Oberoi, one of the best hotels in Bangalore 2025, is a luxurious garden retreat on MG Road, built around a 100-year-old rain tree. With 160 rooms offering private balconies and lush views,.',
        price: 21258,
        rating: 4.5,
        reviews: 167,
        tags: ['Breakfast Included', 'MMT Luxe', 'Free Cancellation'],
      },
      {
        id: 2,
        name: 'Taj Exotica Resort & Spa',
        location: '99, Residency Rd, Shanthala Nagar, Bengaluru 560025',
        image: '/images/hotels/hotel1/five.webp',
        description: 'The Ritz-Carlton, among the best hotels in Bangalore, offers spacious rooms with intricate latticework, 1,200+ artworks, nine dining options including Riwaz, the rooftop bar Bang, and a 17,000-sqft spa—delivering luxury in the heart of the city.',
        price: 28400,
        rating: 4.7,
        reviews: 210,
        tags: ['Free Cancellation', 'MMT Luxe'],
      },
      {
        id: 3,
        name: 'JW Marriott Hotel Bengaluru',
        location: '24/1, Vittal Mallya Rd, KG Halli, BLR, 560001',
        image: 'https://source.unsplash.com/500x300/?beach,maldives',
        description: 'Overlooking Cubbon Park near UB City, this luxury hotel offers plush rooms, a temperature-controlled outdoor pool, and a soothing spa. Enjoy JW Kitchen’s Sunday brunch, European cuisine at Alba, and craft brews by the pool at Spice Terrace.',
        price: 33000,
        rating: 4.8,
        reviews: 185,
        tags: ['Breakfast Included', 'Private Beach', 'Luxury'],
      },
      {
        id: 4,
        name: 'The Leela Palace, Bengaluru',
        location: 'Baa Atoll',
        image: 'https://source.unsplash.com/500x300/?luxury,hotel',
        description: 'A majestic property inspired by the Vijayanagara Empire, set on nine acres with rose-hued domes and lush gardens. Highlights include Royal Club suites with butler service, fine dining at Jamavar, Zen, Le Cirque, and the secret speakeasy ZLB 23.',
        price: 45200,
        rating: 5.0,
        reviews: 198,
        tags: ['Eco-Friendly', 'MMT Luxe', 'Private Pool'],
      },
      {
        id: 5,
        name: 'Taj West End',
        location: 'Dhaalu Atoll',
        image: 'https://source.unsplash.com/500x300/?island,maldives',
        description: 'Taj West End, among the best hotels in Bangalore 2025, is a colonial-style retreat established in 1887. Nestled in lush gardens, it offers heritage charm, the J Wellness Circle, and fine dining at Machan and Blue Ginger for a timeless escape.',
        price: 58000,
        rating: 4.9,
        reviews: 230,
        tags: ['Breakfast Included', 'Private Villas', 'Free Cancellation'],
      },
      {
        id: 6,
        name: 'ITC Gardenia',
        location: '1, Residency Rd, Ashok Nagar, BLR, 560025',
        image: 'https://source.unsplash.com/500x300/?tropical,maldives',
        description: 'ITC Gardenia, a green haven reflecting Bengaluru’s spirit, blends eco-conscious luxury with artistic interiors and premium hospitality—perfect for those who value sustainability without compromising on style.',
        price: 41000,
        rating: 4.6,
        reviews: 275,
        tags: ['Luxury', 'Water Villas', 'Private Beach'],
      },
      {
        id: 7,
        name: 'Sheraton Grand Bangalore at Brigade Gateway',
        location: ' 26/1, Malleswaram (adjacent to Orion Mall)',
        image: 'https://source.unsplash.com/500x300/?tropical,hotel',
        description: 'Located in Orion Mall and World Trade Centre, this hotel offers 230 rooms, an infinity pool, and diverse dining options—from Italian at Bene to rooftop Middle Eastern cuisine at The Persian Terrace, all paired with stunning views.',
        price: 36900,
        rating: 4.4,
        reviews: 310,
        tags: ['Free Cancellation', 'MMT Luxe', 'Water Villas'],
      },
      {
        id: 8,
        name: 'Renaissance Bengaluru Race Course Hotel',
        location: 'No 17 and 17/1, Race Course Rd, Madhava Nagar, BLR 560001',
        image: '/images/hotels/hotel1/wayanad.jpg',
        description: 'Just 500 meters from Bangalore Turf Club, this stylish hotel features chic rooms, a rooftop pool, and equestrian-inspired R Bar. The open-air dining at Lush and curated city experiences make it a hidden urban gem.',
        price: 50300,
        rating: 4.7,
        reviews: 210,
        tags: ['Underwater Dining', 'Private Pool', 'Breakfast Included'],
      },
      {
        id: 9,
        name: 'Conrad Bengaluru',
        location: '25/3, Kensington Rd, Halasuru, BLR, 560008',
        image: 'https://source.unsplash.com/500x300/?luxury,water-villa',
        description: 'Soaring 24 stories above the Central Business District, Conrad offers elegant rooms with Ulsoor Lake views. Renowned for refined hospitality and upscale dining, it’s perfect for discerning travelers seeking luxury in the city’s heart.',
        price: 42000,
        rating: 4.8,
        reviews: 160,
        tags: ['Water Villas', 'Private Beach', 'Luxury'],
      },
      {
        id: 10,
        name: 'Taj MG Road, Bengaluru',
        location: 'MG Road (near Trinity Circle)',
        image: 'https://source.unsplash.com/500x300/?maldives,resort-luxury',
        description: 'Set close to shopping and cultural hotspots, this contemporary Taj hotel blends comfort with elegance. Expect signature hospitality, scenic views, and a host of culinary delights.',
        price: 49000,
        rating: 4.6,
        reviews: 185,
        tags: ['Wellness', 'Private Villas', 'Free Cancellation'],
      },
    ],
  },
  {
    title: 'Best Hotels in HSR Layout',
    description: "Experience the Best Hotels in Bangalore — where the city’s vibrant culture, cutting-edge innovation, and cosmopolitan energy come alive. These handpicked stays combine comfort, charm, and top-tier service to create truly unforgettable experiences. Whether you're in town for business, leisure, or a mix of both, Bangalore’s top hotels deliver excellence at every turn. From iconic luxury like The Oberoi, Bengaluru to contemporary elegance at Renaissance Bengaluru Race Course Hotel, discover 20 of the best hotels in Bangalore that promise more than just a place to stay — they offer a gateway to the city's heart.",
    date: '2025-01-01',
    image: '/images/hotels/hotel1/best-hotels-in-bangalore.jpg',
    hotels: [
      {
        id: 1,
        name: 'The Oberoi, Bengaluru',
        location: ' 37-39, MG Rd, Yellappa Garden',
        image: '/images/hotels/hotel1/best-hotels-in bangalore-1.jpg',
        description: 'The Oberoi, one of the best hotels in Bangalore 2025, is a luxurious garden retreat on MG Road, built around a 100-year-old rain tree. With 160 rooms offering private balconies and lush views,.',
        price: 21258,
        rating: 4.5,
        reviews: 167,
        tags: ['Breakfast Included', 'MMT Luxe', 'Free Cancellation'],
      },
      {
        id: 2,
        name: 'Taj Exotica Resort & Spa',
        location: '99, Residency Rd, Shanthala Nagar, Bengaluru 560025',
        image: '/images/hotels/hotel1/five.webp',
        description: 'The Ritz-Carlton, among the best hotels in Bangalore, offers spacious rooms with intricate latticework, 1,200+ artworks, nine dining options including Riwaz, the rooftop bar Bang, and a 17,000-sqft spa—delivering luxury in the heart of the city.',
        price: 28400,
        rating: 4.7,
        reviews: 210,
        tags: ['Free Cancellation', 'MMT Luxe'],
      },
      {
        id: 3,
        name: 'JW Marriott Hotel Bengaluru',
        location: '24/1, Vittal Mallya Rd, KG Halli, BLR, 560001',
        image: 'https://source.unsplash.com/500x300/?beach,maldives',
        description: 'Overlooking Cubbon Park near UB City, this luxury hotel offers plush rooms, a temperature-controlled outdoor pool, and a soothing spa. Enjoy JW Kitchen’s Sunday brunch, European cuisine at Alba, and craft brews by the pool at Spice Terrace.',
        price: 33000,
        rating: 4.8,
        reviews: 185,
        tags: ['Breakfast Included', 'Private Beach', 'Luxury'],
      },
      {
        id: 4,
        name: 'The Leela Palace, Bengaluru',
        location: 'Baa Atoll',
        image: 'https://source.unsplash.com/500x300/?luxury,hotel',
        description: 'A majestic property inspired by the Vijayanagara Empire, set on nine acres with rose-hued domes and lush gardens. Highlights include Royal Club suites with butler service, fine dining at Jamavar, Zen, Le Cirque, and the secret speakeasy ZLB 23.',
        price: 45200,
        rating: 5.0,
        reviews: 198,
        tags: ['Eco-Friendly', 'MMT Luxe', 'Private Pool'],
      },
      {
        id: 5,
        name: 'Taj West End',
        location: 'Dhaalu Atoll',
        image: 'https://source.unsplash.com/500x300/?island,maldives',
        description: 'Taj West End, among the best hotels in Bangalore 2025, is a colonial-style retreat established in 1887. Nestled in lush gardens, it offers heritage charm, the J Wellness Circle, and fine dining at Machan and Blue Ginger for a timeless escape.',
        price: 58000,
        rating: 4.9,
        reviews: 230,
        tags: ['Breakfast Included', 'Private Villas', 'Free Cancellation'],
      },
      {
        id: 6,
        name: 'ITC Gardenia',
        location: '1, Residency Rd, Ashok Nagar, BLR, 560025',
        image: 'https://source.unsplash.com/500x300/?tropical,maldives',
        description: 'ITC Gardenia, a green haven reflecting Bengaluru’s spirit, blends eco-conscious luxury with artistic interiors and premium hospitality—perfect for those who value sustainability without compromising on style.',
        price: 41000,
        rating: 4.6,
        reviews: 275,
        tags: ['Luxury', 'Water Villas', 'Private Beach'],
      },
      {
        id: 7,
        name: 'Sheraton Grand Bangalore at Brigade Gateway',
        location: ' 26/1, Malleswaram (adjacent to Orion Mall)',
        image: 'https://source.unsplash.com/500x300/?tropical,hotel',
        description: 'Located in Orion Mall and World Trade Centre, this hotel offers 230 rooms, an infinity pool, and diverse dining options—from Italian at Bene to rooftop Middle Eastern cuisine at The Persian Terrace, all paired with stunning views.',
        price: 36900,
        rating: 4.4,
        reviews: 310,
        tags: ['Free Cancellation', 'MMT Luxe', 'Water Villas'],
      },
      {
        id: 8,
        name: 'Renaissance Bengaluru Race Course Hotel',
        location: 'No 17 and 17/1, Race Course Rd, Madhava Nagar, BLR 560001',
        image: '/images/hotels/hotel1/wayanad.jpg',
        description: 'Just 500 meters from Bangalore Turf Club, this stylish hotel features chic rooms, a rooftop pool, and equestrian-inspired R Bar. The open-air dining at Lush and curated city experiences make it a hidden urban gem.',
        price: 50300,
        rating: 4.7,
        reviews: 210,
        tags: ['Underwater Dining', 'Private Pool', 'Breakfast Included'],
      },
      {
        id: 9,
        name: 'Conrad Bengaluru',
        location: '25/3, Kensington Rd, Halasuru, BLR, 560008',
        image: 'https://source.unsplash.com/500x300/?luxury,water-villa',
        description: 'Soaring 24 stories above the Central Business District, Conrad offers elegant rooms with Ulsoor Lake views. Renowned for refined hospitality and upscale dining, it’s perfect for discerning travelers seeking luxury in the city’s heart.',
        price: 42000,
        rating: 4.8,
        reviews: 160,
        tags: ['Water Villas', 'Private Beach', 'Luxury'],
      },
      {
        id: 10,
        name: 'Taj MG Road, Bengaluru',
        location: 'MG Road (near Trinity Circle)',
        image: 'https://source.unsplash.com/500x300/?maldives,resort-luxury',
        description: 'Set close to shopping and cultural hotspots, this contemporary Taj hotel blends comfort with elegance. Expect signature hospitality, scenic views, and a host of culinary delights.',
        price: 49000,
        rating: 4.6,
        reviews: 185,
        tags: ['Wellness', 'Private Villas', 'Free Cancellation'],
      },
    ],
  },
])

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

// Find the current hotel category data
const currentHotelCategory = computed(() => {
  const categoryTitle = title
  return hotelsData.value.find(category => slugify(category.title) === categoryTitle)
})

// Get hotels for the current category
const hotels = computed(() => {
  return currentHotelCategory.value ? currentHotelCategory.value.hotels : []
})

const activeSort = ref('Popular')

const sortedHotels = computed(() => {
  if (!hotels.value || hotels.value.length === 0)
    return []
  return [...hotels.value].sort((a, b) => {
    switch (activeSort.value) {
      case 'PriceLowToHigh':
        return a.price - b.price
      case 'PriceHighToLow':
        return b.price - a.price
      case 'Rating':
        return b.rating - a.rating
      default:
        return 0 // Popular (default order)
    }
  })
})

const locationName = computed(() => {
  return currentHotelCategory.value?.title.replace('Best Hotels in ', '') || 'Unknown Location'
})
</script>

<template>
  <div class="main-container bg-slate-50">
    <div class="max-container">
      <!-- Error handling for when category is not found -->
      <div v-if="!currentHotelCategory" class="text-center py-12">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">
          Hotel Category Not Found
        </h1>
        <p class="text-gray-600 mb-6">
          The hotel category you're looking for doesn't exist.
        </p>
        <NuxtLink to="/hotels" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Back to Hotels
        </NuxtLink>
      </div>

      <!-- Hero Section with Title, Image, Description, and Date -->
      <div v-else>
        <div class="border-b border-white/70 mb-5">
          <h1 class="text-5xl text-black font-semibold mb-2">
            {{ currentHotelCategory.title }}
          </h1>
          <p class="text-gray-600 mb-2 text-sm">
            Published: {{ currentHotelCategory.date }}
          </p>
          <p class="pb-5">
            {{ currentHotelCategory.description }}
          </p>
        </div>

        <!-- Sort & Title -->
        <div class="mb-4 flex flex-col md:flex-row justify-between md:items-center gap-2">
          <h2 class="text-lg font-semibold text-gray-800">
            Showing {{ sortedHotels.length }} Hotels in {{ locationName }}
          </h2>
          <div class="relative w-full md:w-fit text-sm">
            <select v-model="activeSort" class="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 cursor-pointer">
              <option value="Popular">
                Popular
              </option>
              <option value="Rating">
                User Rating
              </option>
              <option value="PriceLowToHigh">
                Price (Low to High)
              </option>
              <option value="PriceHighToLow">
                Price (High to Low)
              </option>
            </select>
          </div>
        </div>

        <!-- Hotels Display -->
        <div class="flex flex-col md:flex-row justify-between gap-6">
          <HotelFilters />
          <div class="space-y-4 ml-auto">
            <div v-if="sortedHotels.length === 0" class="text-center py-8">
              <p class="text-gray-600">
                No hotels found for this category.
              </p>
            </div>
            <HotelCard v-for="hotel in sortedHotels" v-else :key="hotel.id" :hotel="hotel" :url="title" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
