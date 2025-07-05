<script setup>

// meta information for the page
useHead({
  title: 'Bangalore Today – Discover, Explore & Experience the City',
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
      content: 'Bangalore Today – Your one-stop destination to find flights, getaways, city life, resorts, restaurants, and much more — all in one simple search.',
    },
    {
      name: 'og:site_name',
      content: 'Bangalore Today – Your one-stop destination to find flights, getaways, city life, resorts, restaurants, and much more — all in one simple search.',
    },
    {
      name: 'og:url',
      content: 'https://in.bangaloretoday.in',
    },
    {
      name: 'keywords',
      content: 'Bangalore, Bangalore Today, Bangalore Flights, Bangalore Getaways, Bangalore City Life, Bangalore Resorts, Bangalore Restaurants, Bangalore Hotels',
    },
  ],
})

// Hotel data
const hotels = ref([
  {
    title: 'Best Hotels in Bangalore',
    description: 'Experience the best of Bangalore\'s hospitality, from luxurious escapes to smart urban stays. Discover the top 20 places to stay in the heart of the city.',
    date: 'March 3, 2025',
    author: '',
    image: '/images/hotels/hotel1/hotels-in-bangalore-home.jpeg',
  },
  {
    title: 'Best Hotels in Koramangala',
    description: 'Koramangala blends trendy vibes with comfortable stays. Explore handpicked hotels perfect for work or leisure in this buzzing neighborhood.',
    date: 'March 3, 2025',
    author: '',
    image: '/images/hotels/hotel1/hotels-in-bangalore-home1.png',
  },
  {
    title: 'Best Hotels in HSR Layout',
    description: 'HSR Layout offers a mix of calm and connectivity. These top-rated hotels bring you relaxation and accessibility right where it matters.',
    date: 'March 3, 2025',
    author: '',
    image: '/images/hotels/hotel1/hotels-in-bangalore-home2.jpeg',
  },
])

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}
</script>

<template>
  <section class="main-container bg-gray-50">
    <div class="max-container bg-blue-50 rounded-[12px]">
      <!-- Header -->
      <div class="text-center font-semibold pb-5">
        <h1>
          Latest Hotel Guides
        </h1>
        <p class="pt-2 pb-5">
          Discover the best accommodation options across Bangalore's prime locations
        </p>
      </div>

      <!-- Hotels Grid -->
      <div class="card-grid">
        <article
          v-for="hotel in hotels"
          :key="hotel.title"
          class="bg-white rounded-[10px] shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-200"
        >
          <NuxtLink :to="`/hotels/${slugify(hotel.title)}`" class="block">
            <!-- Image -->
            <div class="relative h-[192px] overflow-hidden">
              <img
                :src="hotel.image"
                :alt="hotel.title"
                class="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              >
            </div>

            <!-- Content -->
            <div class="p-4 sm:p-5">
              <div class="flex items-center text-xs text-gray-500 mb-2">
                <span>{{ hotel.date }}</span>
              </div>

              <h2 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                {{ hotel.title }}
              </h2>

              <p class="text-sm text-gray-600 mb-4 line-clamp-3">
                {{ hotel.description }}
              </p>

              <!-- <div class="flex items-center justify-between text-xs text-gray-500">
                <div class="flex items-center">
                  <span>Author: </span>
                  <span class="font-medium text-gray-700 ml-1">{{ hotel.author }}</span>
                </div>
              </div> -->
            </div>
          </NuxtLink>
        </article>
      </div>

      <!-- Pagination Dots -->
      <div class="flex justify-center space-x-2">
        <button
          v-for="dot in 8"
          :key="dot"
          class="w-2 h-2 rounded-full transition-colors duration-200"
          :class="dot === 1 ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-grid {
  display: grid;
  gap: 16px;
}

@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}
</style>
