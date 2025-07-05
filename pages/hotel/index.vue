<template>
  <div class="main-container flex justify-center items-center min-h-screen bg-gray-100">
    <div class="max-container bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">
        Explore Top Hotels
      </h2>
      <ul class="divide-y divide-gray-200">
        <li class="py-3 group">
          <NuxtLink
            to="/hotel/best-hotels-in-bangalore"
            class="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <i class="fa-solid fa-hotel mr-2 text-blue-500 group-hover:scale-110 transition-transform" />
            <span class="underline-offset-4 group-hover:underline">Best Hotels in Bangalore</span>
          </NuxtLink>
        </li>
        <li class="py-3 group">
          <NuxtLink
            to="/hotel/best-hotels-in-hsr-layout"
            class="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <i class="fa-solid fa-map-marker-alt mr-2 text-blue-500 group-hover:scale-110 transition-transform" />
            <span class="underline-offset-4 group-hover:underline">Best Hotels in HSR Layout</span>
          </NuxtLink>
        </li>
        <li class="py-3 group">
          <NuxtLink
            to="/hotel/best-hotels-in-koramangala"
            class="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <i class="fa-solid fa-location-dot mr-2 text-blue-500 group-hover:scale-110 transition-transform" />
            <span class="underline-offset-4 group-hover:underline">Best Hotels in Koramangala</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
