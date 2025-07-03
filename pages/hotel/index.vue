<script setup>
import { computed, ref } from 'vue'

// SEO Meta
useHead({
  title: 'Best Hotels in Bangalore - Bangalore Today',
  link: [
    { rel: 'icon', href: '/images/logo/favicon.png' },
  ],
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content: 'Discover the best hotels in Bangalore. From luxury stays to budget-friendly options, find the perfect accommodation for your trip to India\'s Silicon Valley.',
    },
    {
      name: 'og:site_name',
      content: 'Bangalore Today',
    },
    {
      name: 'og:url',
      content: 'https://in.bangaloretoday.in/hotels',
    },
    {
      property: 'og:image',
      content: '/images/og-banner/bangalore-hotels.png',
    },
    {
      name: 'keywords',
      content: 'Bangalore Hotels, Best Hotels Bangalore, Luxury Hotels Bangalore, Budget Hotels Bangalore, Business Hotels Bangalore',
    },
  ],
})

// Hotel areas/categories data
const hotelAreas = ref([
  {
    id: 1,
    title: 'Best Hotels in Bangalore',
    slug: 'bangalore',
    description: 'Discover luxury and comfort in Bangalore\'s finest hotels, from heritage properties to modern business hotels.',
    image: '/images/hotels/areas/bangalore-general.jpg',
    hotelCount: 25,
    priceRange: '₹2,500 - ₹15,000',
    featured: true,
    tags: ['Business Hub', 'Shopping', 'Nightlife'],
  },
  {
    id: 2,
    title: 'Best Hotels in Koramangala',
    slug: 'koramangala',
    description: 'Stay in the heart of Bangalore\'s startup ecosystem with premium hotels and boutique stays in Koramangala.',
    image: '/images/hotels/areas/koramangala.jpg',
    hotelCount: 18,
    priceRange: '₹3,000 - ₹12,000',
    featured: true,
    tags: ['Startup Hub', 'Restaurants', 'Tech Companies'],
  },
  {
    id: 3,
    title: 'Best Hotels in HSR Layout',
    slug: 'hsr-layout',
    description: 'Experience modern comfort in HSR Layout with contemporary hotels perfect for business and leisure travelers.',
    image: '/images/hotels/areas/hsr-layout.jpg',
    hotelCount: 15,
    priceRange: '₹2,800 - ₹10,000',
    featured: true,
    tags: ['Residential', 'IT Corridor', 'Family Friendly'],
  },
  {
    id: 4,
    title: 'Best Hotels in Whitefield',
    slug: 'whitefield',
    description: 'Luxury accommodations in Bangalore\'s IT capital, close to major tech parks and entertainment venues.',
    image: '/images/hotels/areas/whitefield.jpg',
    hotelCount: 20,
    priceRange: '₹3,500 - ₹18,000',
    featured: false,
    tags: ['IT Hub', 'Tech Parks', 'Modern'],
  },
  {
    id: 5,
    title: 'Best Hotels in Indiranagar',
    slug: 'indiranagar',
    description: 'Vibrant neighborhood hotels perfect for exploring Bangalore\'s cultural scene and nightlife.',
    image: '/images/hotels/areas/indiranagar.jpg',
    hotelCount: 12,
    priceRange: '₹2,200 - ₹8,500',
    featured: false,
    tags: ['Culture', 'Nightlife', 'Shopping'],
  },
  {
    id: 6,
    title: 'Best Hotels in Electronic City',
    slug: 'electronic-city',
    description: 'Business-focused hotels in Electronic City, ideal for corporate travelers and tech professionals.',
    image: '/images/hotels/areas/electronic-city.jpg',
    hotelCount: 14,
    priceRange: '₹2,000 - ₹9,000',
    featured: false,
    tags: ['Business', 'Corporate', 'Tech Hub'],
  },
  {
    id: 7,
    title: 'Best Hotels in MG Road',
    slug: 'mg-road',
    description: 'Heritage and luxury hotels on the iconic MG Road, perfect for shopping and business travelers.',
    image: '/images/hotels/areas/mg-road.jpg',
    hotelCount: 16,
    priceRange: '₹4,000 - ₹20,000',
    featured: false,
    tags: ['Heritage', 'Shopping', 'Business'],
  },
  {
    id: 8,
    title: 'Best Hotels in Jayanagar',
    slug: 'jayanagar',
    description: 'Traditional charm meets modern comfort in Jayanagar\'s well-appointed hotels and guesthouses.',
    image: '/images/hotels/areas/jayanagar.jpg',
    hotelCount: 10,
    priceRange: '₹1,800 - ₹6,000',
    featured: false,
    tags: ['Traditional', 'Residential', 'Family'],
  },
])

// Search and filter state
const searchQuery = ref('')
const selectedPriceRange = ref('all')
const showFeaturedOnly = ref(false)

// Computed filtered results
const filteredAreas = computed(() => {
  let filtered = hotelAreas.value

  // Filter by search query
  if (searchQuery.value) {
    filtered = filtered.filter(area =>
      area.title.toLowerCase().includes(searchQuery.value.toLowerCase())
      || area.description.toLowerCase().includes(searchQuery.value.toLowerCase())
      || area.tags.some(tag => tag.toLowerCase().includes(searchQuery.value.toLowerCase())),
    )
  }

  // Filter by featured
  if (showFeaturedOnly.value) {
    filtered = filtered.filter(area => area.featured)
  }

  return filtered
})

// Navigation function
function navigateToArea(slug) {
  navigateTo(`/hotels/${slug}`)
}
</script>

<template>
  <div class="main-container bg-slate-50">
    <div class="max-container">
      <!-- Hero Section -->
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mb-8">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Discover the Best Hotels in Bangalore
          </h1>
          <p class="text-lg md:text-xl mb-6 opacity-90">
            From luxury resorts to business hotels, find your perfect stay in India's Silicon Valley
          </p>

          <!-- Search Bar -->
          <div class="max-w-md mx-auto">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search by area or hotel type..."
                class="w-full px-4 py-3 pl-12 text-gray-800 rounded-lg border-0 focus:ring-2 focus:ring-white/20 focus:outline-none"
              >
              <div class="absolute left-4 top-1/2 transform -translate-y-1/2">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Filter Section -->
      <div class="flex flex-wrap gap-4 items-center justify-between mb-8">
        <div class="flex items-center gap-4">
          <h2 class="text-2xl font-semibold text-gray-800">
            Browse by Area
          </h2>
          <span class="text-sm text-gray-500">
            {{ filteredAreas.length }} area{{ filteredAreas.length !== 1 ? 's' : '' }} found
          </span>
        </div>

        <div class="flex gap-2">
          <label class="flex items-center gap-2 text-sm">
            <input
              v-model="showFeaturedOnly"
              type="checkbox"
              class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            >
            Featured Only
          </label>
        </div>
      </div>

      <!-- Featured Areas (if no search) -->
      <div v-if="!searchQuery && !showFeaturedOnly" class="mb-12">
        <h3 class="text-xl font-semibold text-gray-800 mb-6">
          Featured Areas
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="area in hotelAreas.filter(a => a.featured)"
            :key="area.id"
            class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
            @click="navigateToArea(area.slug)"
          >
            <div class="relative overflow-hidden rounded-t-xl">
              <img
                :src="area.image"
                :alt="area.title"
                class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              >
              <div class="absolute top-4 left-4">
                <span class="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Featured
                </span>
              </div>
              <div class="absolute bottom-4 right-4">
                <span class="bg-black/60 text-white text-sm px-2 py-1 rounded">
                  {{ area.hotelCount }} Hotels
                </span>
              </div>
            </div>

            <div class="p-6">
              <h4 class="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                {{ area.title }}
              </h4>
              <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                {{ area.description }}
              </p>

              <div class="flex items-center justify-between mb-4">
                <div class="text-sm font-medium text-green-600">
                  {{ area.priceRange }}
                </div>
              </div>

              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in area.tags"
                  :key="tag"
                  class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- All Areas Grid -->
      <div class="mb-8">
        <h3 v-if="!searchQuery && !showFeaturedOnly" class="text-xl font-semibold text-gray-800 mb-6">
          All Areas
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div
            v-for="area in filteredAreas"
            :key="area.id"
            class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
            @click="navigateToArea(area.slug)"
          >
            <div class="relative overflow-hidden rounded-t-xl">
              <img
                :src="area.image"
                :alt="area.title"
                class="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              >
              <div v-if="area.featured" class="absolute top-3 left-3">
                <span class="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Featured
                </span>
              </div>
              <div class="absolute bottom-3 right-3">
                <span class="bg-black/60 text-white text-xs px-2 py-1 rounded">
                  {{ area.hotelCount }} Hotels
                </span>
              </div>
            </div>

            <div class="p-5">
              <h4 class="text-base font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                {{ area.title }}
              </h4>
              <p class="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">
                {{ area.description }}
              </p>

              <div class="flex items-center justify-between mb-3">
                <div class="text-sm font-medium text-green-600">
                  {{ area.priceRange }}
                </div>
              </div>

              <div class="flex flex-wrap gap-1">
                <span
                  v-for="tag in area.tags.slice(0, 2)"
                  :key="tag"
                  class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                >
                  {{ tag }}
                </span>
                <span v-if="area.tags.length > 2" class="text-xs text-gray-400">
                  +{{ area.tags.length - 2 }} more
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredAreas.length === 0" class="text-center py-12">
        <div class="text-gray-400 mb-4">
          <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-gray-700 mb-2">
          No areas found
        </h3>
        <p class="text-gray-500 mb-4">
          Try adjusting your search or filters
        </p>
        <button
          class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          @click="searchQuery = ''; showFeaturedOnly = false"
        >
          Clear Filters
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
