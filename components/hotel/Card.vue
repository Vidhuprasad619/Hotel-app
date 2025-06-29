<script setup>
defineProps({
    hotel: Object,
})

// Format the price with the appropriate currency symbol and commas
const formatPrice = (price) => {
    return price.toLocaleString() // Adjust this for different currency symbols or logic as needed
}
</script>

<template>
    <div
        class="md:ml-5 bg-white shadow rounded-lg overflow-hidden flex flex-col md:flex-row transition hover:shadow-md hover:scale-[1.01] duration-200">
        <router-link :to="`/hotels/${hotel.id}`" class="flex items-center">
            <!-- Hotel Image -->
            <img :src="hotel.image" class="w-full h-52 md:w-48 md:h-auto object-cover transition-transform transform shadow-md border-4 border-gray-200"
                alt="Hotel Image" />
        </router-link>

        <div class="flex-1 p-4">
            <!-- Tags -->
            <div class="flex flex-wrap gap-1 mb-1">
                <span v-for="tag in hotel.tags" :key="tag" :class="{
                    'bg-yellow-100 text-yellow-700': tag === 'Breakfast Included',
                    'bg-blue-100 text-blue-700': tag === 'MMT Luxe',
                    'bg-green-100 text-green-700': tag === 'Free Cancellation',
                    // Add more tag styles if needed
                }" class="text-xs font-semibold px-2 py-1 rounded">
                    {{ tag }}
                </span>
            </div>

            <!-- Hotel Name and Location -->
            <h3 class="text-lg font-semibold text-gray-800">{{ hotel.name }}</h3>
            <p class="text-sm text-gray-500">{{ hotel.location }}</p>

            <!-- Breakfast Included Notice -->
            <p class="text-sm text-green-600 mt-1" v-if="hotel.tags.includes('Breakfast Included')">🍳 Breakfast
                Included</p>
            <p class="text-sm text-gray-600 mt-2">{{ hotel.description }}</p>
        </div>

        <!-- Price and Rating Section -->
        <div class="md:w-40 border-t md:border-t-0 md:border-l p-4 flex flex-col justify-between">
            <!-- Price -->
            <div>
                <p class="text-blue-600 font-semibold text-lg">₹ {{ formatPrice(hotel.price) }}</p>
                <p class="text-xs text-gray-500">+ taxes & fees</p>
            </div>

            <!-- Rating -->
            <div class="mt-2 text-sm text-indigo-600 text-right">
                ⭐ {{ hotel.rating }} ({{ hotel.reviews }} Reviews)
            </div>
        </div>
    </div>
</template>

<style scoped>
/* You can add any additional styling here if necessary */
</style>