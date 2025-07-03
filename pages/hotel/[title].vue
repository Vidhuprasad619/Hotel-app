<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import HotelCard from '~/components/hotel/Card.vue'
import HotelFilters from '~/components/hotel/Filters.vue'

// Get route parameters
const route = useRoute()
const areaSlug = route.params.slug || 'bangalore'

// SEO Meta - Dynamic based on area
const areaData = ref({
  title: 'Best Hotels in Bangalore',
  description: 'Discover luxury and comfort in Bangalore\'s finest hotels, from heritage properties to modern business hotels.',
  longDescription: 'Bangalore, India\'s Silicon Valley, offers an incredible array of accommodations that cater to every traveler\'s needs. From luxurious heritage hotels that showcase the city\'s rich history to contemporary business hotels equipped with cutting-edge amenities, the city provides an unparalleled hospitality experience. Whether you\'re visiting for business meetings in the tech corridors, exploring the vibrant cultural scene, or simply enjoying the pleasant climate, these carefully selected hotels ensure your stay is nothing short of exceptional.',
  hotelCount: 25,
  priceRange: '₹2,500 - ₹15,000',
  avgRating: 4.3,
  airportDistance: '35 km',
  tags: ['Business Hub', 'Shopping', 'Nightlife', 'Tech Corridor'],
  benefits: [
    {
      title: 'Prime Location',
      description: 'Located in the heart of the city with easy access to major attractions and business districts.',
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
    },
    {
      title: 'Modern Amenities',
      description: 'State-of-the-art facilities including high-speed internet, fitness centers, and business lounges.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    },
    {
      title: 'Exceptional Service',
      description: 'World-class hospitality with personalized service and attention to detail.',
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    },
  ],
})

// State management
const activeSort = ref('Popular')
const showMap = ref(false)
const currentPage = ref(1)
const itemsPerPage = ref(10)
const appliedFilters = ref({})

// Hotels data (same as your existing data)
const hotels = ref([
  {
    id: 1,
    name: 'The Oberoi, Bengaluru',
    location: '37-39, MG Rd, Yellappa Garden',
    image: '/images/hotels/hotel1/best-hotels-in-bangalore-1.jpg',
    description: 'The Oberoi, one of the best hotels in Bangalore 2025, is a luxurious garden retreat on MG Road, built around a 100-year-old rain tree. With 160 rooms offering private balconies and lush views.',
    price: 21258,
    rating: 4.5,
    reviews: 167,
    tags: ['Breakfast Included', 'MMT Luxe', 'Free Cancellation'],
    starRating: 5,
    amenities: ['Airport Transfer', 'Meals Included'],
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
    starRating: 5,
    amenities: ['Airport Transfer', 'Water Villas'],
  },
  {
    id: 3,
    name: 'JW Marriott Hotel Bengaluru',
    location: '24/1, Vittal Mallya Rd, KG Halli, BLR, 560001',
    image: 'https://source.unsplash.com/500x300/?hotel,bangalore',
    description: 'Overlooking Cubbon Park near UB City, this luxury hotel offers plush rooms, a temperature-controlled outdoor pool, and a soothing spa. Enjoy JW Kitchen\'s Sunday brunch, European cuisine at Alba, and craft brews by the pool at Spice Terrace.',
    price: 33000,
    rating: 4.8,
    reviews: 185,
    tags: ['Breakfast Included', 'Private Beach', 'Luxury'],
    starRating: 5,
    amenities: ['Meals Included'],
  },
  {
    id: 4,
    name: 'The Leela Palace, Bengaluru',
    location: 'Old Airport Rd, Kodihalli, Bengaluru',
    image: 'https://source.unsplash.com/500x300/?luxury,hotel',
    description: 'A majestic property inspired by the Vijayanagara Empire, set on nine acres with rose-hued domes and lush gardens. Highlights include Royal Club suites with butler service, fine dining at Jamavar, Zen, Le Cirque, and the secret speakeasy ZLB 23.',
    price: 45200,
    rating: 5.0,
    reviews: 198,
    tags: ['Eco-Friendly', 'MMT Luxe', 'Private Pool'],
    starRating: 5,
    amenities: ['Airport Transfer', 'Water Villas'],
  },
  {
    id: 5,
    name: 'Taj West End',
    location: 'Race Course Rd, Bangalore',
    image: 'https://source.unsplash.com/500x300/?heritage,hotel',
    description: 'Taj West End, among the best hotels in Bangalore 2025, is a colonial-style retreat established in 1887. Nestled in lush gardens, it offers heritage charm, the J Wellness Circle, and fine dining at Machan and Blue Ginger for a timeless escape.',
    price: 58000,
    rating: 4.9,
    reviews: 230,
    tags: ['Breakfast Included', 'Private Villas', 'Free Cancellation'],
    starRating: 5,
    amenities: ['Meals Included'],
  },
  {
    id: 6,
    name: 'ITC Gardenia',
    location: '1, Residency Rd, Ashok Nagar, BLR, 560025',
    image: 'https://source.unsplash.com/500x300/?green,hotel',
    description: 'ITC Gardenia, a green haven reflecting Bengaluru\'s spirit, blends eco-conscious luxury with artistic interiors and premium hospitality—perfect for those who value sustainability without compromising on style.',
    price: 41000,
    rating: 4.6,
    reviews: 275,
    tags: ['Luxury', 'Water Villas', 'Private Beach'],
    starRating: 5,
    amenities: ['Airport Transfer', 'Water Villas'],
  },
  {
    id: 7,
    name: 'Sheraton Grand Bangalore at Brigade Gateway',
    location: '26/1, Malleswaram (adjacent to Orion Mall)',
    image: 'https://source.unsplash.com/500x300/?modern,hotel',
    description: 'Located in Orion Mall and World Trade Centre, this hotel offers 230 rooms, an infinity pool, and diverse dining options—from Italian at Bene to rooftop Middle Eastern cuisine at The Persian Terrace, all paired with stunning views.',
    price: 36900,
    rating: 4.4,
    reviews: 310,
    tags: ['Free Cancellation', 'MMT Luxe', 'Water Villas'],
    starRating: 4,
    amenities: ['Airport Transfer', 'Meals Included'],
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
    starRating: 4,
    amenities: ['Water Villas'],
  },
])

// Computed properties
const filteredHotels = computed(() => {
  let filtered = [...hotels.value]

  // Apply filters
  if (appliedFilters.value.freeCancellation) {
    filtered = filtered.filter(hotel => hotel.tags.includes('Free Cancellation'))
  }
  if (appliedFilters.value.payAtHotel) {
    filtered = filtered.filter(hotel => hotel.tags.includes('Pay @ Hotel'))
  }
  if (appliedFilters.value.airportTransfer) {
    filtered = filtered.filter(hotel => hotel.amenities?.includes('Airport Transfer'))
  }
  if (appliedFilters.value.mealsIncluded) {
    filtered = filtered.filter(hotel => hotel.amenities?.includes('Meals Included'))
  }
  if (appliedFilters.value.waterVillas) {
    filtered = filtered.filter(hotel => hotel.amenities?.includes('Water Villas'))
  }
  if (appliedFilters.value.starRating) {
    filtered = filtered.filter(hotel => hotel.starRating === appliedFilters.value.starRating)
  }

  // Apply sorting
  return filtered.sort((a, b) => {
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

const totalPages = computed(() => Math.ceil(filteredHotels.value.length / itemsPerPage.value))

const paginatedHotels = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredHotels.value.slice(start, end)
})

const visiblePages = computed(() => {
  const pages = []
  const total = totalPages.value
  const current = currentPage.value

  if (total <= 7) {
    for (let i = 1; i <= total; i++) {
      pages.push(i)
    }
  }
  else {
    if (current <= 4) {
      for (let i = 1; i <= 5; i++) {
        pages.push(i)
      }
      pages.push('...', total)
    }
    else if (current >= total - 3) {
      pages.push(1, '...')
      for (let i = total - 4; i <= total; i++) {
        pages.push(i)
      }
    }
    else {
      pages.push(1, '...')
      for (let i = current - 1; i <= current + 1; i++) {
        pages.push(i)
      }
      pages.push('...', total)
    }
  }

  return pages.filter(page => page !== '...' || pages.indexOf(page) === pages.lastIndexOf(page))
})

// Methods
function handleFiltersChanged(filters) {
  appliedFilters.value = filters
  currentPage.value = 1 // Reset to first page when filters change
}

// Dynamic area data based on route
function setAreaData() {
  const areaConfigs = {
    'bangalore': {
      title: 'Best Hotels in Bangalore',
      description: 'Discover luxury and comfort in Bangalore\'s finest hotels, from heritage properties to modern business hotels.',
      longDescription: 'Bangalore, India\'s Silicon Valley, offers an incredible array of accommodations that cater to every traveler\'s needs. From luxurious heritage hotels that showcase the city\'s rich history to contemporary business hotels equipped with cutting-edge amenities, the city provides an unparalleled hospitality experience.',
      tags: ['Business Hub', 'Shopping', 'Nightlife', 'Tech Corridor'],
    },
    'koramangala': {
      title: 'Best Hotels in Koramangala',
      description: 'Stay in the heart of Bangalore\'s startup ecosystem with premium hotels and boutique stays in Koramangala.',
      longDescription: 'Koramangala, known as the startup capital of India, offers a vibrant mix of modern accommodations perfect for business travelers and tech entrepreneurs. This bustling neighborhood combines the energy of innovation with comfort and luxury.',
      tags: ['Startup Hub', 'Restaurants', 'Tech Companies', 'Modern'],
    },
    'hsr-layout': {
      title: 'Best Hotels in HSR Layout',
      description: 'Experience modern comfort in HSR Layout with contemporary hotels perfect for business and leisure travelers.',
      longDescription: 'HSR Layout represents the perfect blend of residential comfort and business convenience. This well-planned locality offers premium accommodations with easy access to IT corridors and family-friendly amenities.',
      tags: ['Residential', 'IT Corridor', 'Family Friendly', 'Modern'],
    },
  }

  const config = areaConfigs[areaSlug] || areaConfigs.bangalore
  areaData.value = { ...areaData.value, ...config }
}

// SEO Meta setup
useHead({
  title: computed(() => `${areaData.value.title} - Bangalore Today`),
  meta: [
    {
      name: 'description',
      content: computed(() => areaData.value.description),
    },
    {
      name: 'keywords',
      content: computed(() => `${areaData.value.title}, Hotels, Bangalore, Accommodation, ${areaData.value.tags.join(', ')}`),
    },
    {
      property: 'og:title',
      content: computed(() => areaData.value.title),
    },
    {
      property: 'og:description',
      content: computed(() => areaData.value.description),
    },
  ],
})

// Lifecycle
onMounted(() => {
  setAreaData()
})
</script>

<template>
  <div class="main-container bg-slate-50">
    <div class="max-container">
      <!-- Hero Section -->
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mb-8">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            {{ areaData.title }}
          </h1>
          <p class="text-lg md:text-xl mb-4 opacity-90">
            {{ areaData.description }}
          </p>
          <div class="flex flex-wrap justify-center gap-4 text-sm">
            <span class="bg-white/20 px-3 py-1 rounded-full">
              {{ areaData.hotelCount }} Hotels Available
            </span>
            <span class="bg-white/20 px-3 py-1 rounded-full">
              Price Range: {{ areaData.priceRange }}
            </span>
          </div>
        </div>
      </div>

      <!-- Breadcrumb -->
      <nav class="text-sm text-gray-600 mb-6">
        <router-link to="/" class="hover:text-blue-600">
          Home
        </router-link>
        <span class="mx-2">/</span>
        <router-link to="/hotels" class="hover:text-blue-600">
          Hotels
        </router-link>
        <span class="mx-2">/</span>
        <span class="text-gray-800">{{ areaData.title }}</span>
      </nav>

      <!-- Area Info Section -->
      <div class="bg-white rounded-xl p-6 mb-8 shadow-sm">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="md:col-span-2">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
              About {{ areaData.title.replace('Best Hotels in ', '') }}
            </h2>
            <p class="text-gray-600 leading-relaxed mb-4">
              {{ areaData.longDescription }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in areaData.tags"
                :key="tag"
                class="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
              >
                {{ tag }}
              </span>
            </div>
          </div>
          <div class="space-y-4">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h3 class="font-semibold text-gray-800 mb-2">
                Quick Facts
              </h3>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• {{ areaData.hotelCount }} Hotels Available</li>
                <li>• Price Range: {{ areaData.priceRange }}</li>
                <li>• Average Rating: {{ areaData.avgRating }}/5</li>
                <li>• Distance from Airport: {{ areaData.airportDistance }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Sort & Filter Section -->
      <div class="mb-6 flex flex-col md:flex-row justify-between md:items-center gap-4">
        <h2 class="text-2xl font-semibold text-gray-800">
          {{ filteredHotels.length }} Hotels in {{ areaData.title.replace('Best Hotels in ', '') }}
        </h2>
        <div class="flex gap-4 items-center">
          <button
            class="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            @click="showMap = !showMap"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            {{ showMap ? 'Hide Map' : 'Show Map' }}
          </button>
          <div class="relative">
            <select
              v-model="activeSort"
              class="appearance-none border border-gray-300 rounded-lg px-4 py-2 pr-8 bg-white text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
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
            <svg class="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Map Section (Toggle) -->
      <div v-if="showMap" class="bg-white rounded-xl p-6 mb-8 shadow-sm">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">
          Hotel Locations
        </h3>
        <div class="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
          <span class="text-gray-500">Interactive Map Component</span>
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex flex-col lg:flex-row gap-6">
        <!-- Filters Sidebar -->
        <HotelFilters @filters-changed="handleFiltersChanged" />

        <!-- Hotels List -->
        <div class="flex-1 space-y-4">
          <HotelCard
            v-for="hotel in paginatedHotels"
            :key="hotel.id"
            :hotel="hotel"
          />

          <!-- Pagination -->
          <div v-if="totalPages > 1" class="flex justify-center mt-8">
            <nav class="flex items-center space-x-2">
              <button
                :disabled="currentPage === 1"
                class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                @click="currentPage = Math.max(1, currentPage - 1)"
              >
                Previous
              </button>

              <button
                v-for="page in visiblePages"
                :key="page"
                class="px-3 py-2 text-sm font-medium border border-gray-300" :class="[
                  currentPage === page
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-500 hover:bg-gray-50',
                ]"
                @click="currentPage = page"
              >
                {{ page }}
              </button>

              <button
                :disabled="currentPage === totalPages"
                class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                @click="currentPage = Math.min(totalPages, currentPage + 1)"
              >
                Next
              </button>
            </nav>
          </div>

          <!-- No Results -->
          <div v-if="filteredHotels.length === 0" class="text-center py-12">
            <div class="text-gray-400 mb-4">
              <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-700 mb-2">
              No hotels found
            </h3>
            <p class="text-gray-500 mb-4">
              Try adjusting your filters to see more results
            </p>
          </div>
        </div>
      </div>

      <!-- Why Choose This Area Section -->
      <div class="bg-white rounded-xl p-8 mt-12 shadow-sm">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Why Stay in {{ areaData.title.replace('Best Hotels in ', '') }}?
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="benefit in areaData.benefits" :key="benefit.title" class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="benefit.icon" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-800 mb-2">
              {{ benefit.title }}
            </h3>
            <p class="text-gray-600">
              {{ benefit.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  min-height: 100vh;
}

.max-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 768px) {
  .max-container {
    padding: 0 2rem;
  }
}
</style>
