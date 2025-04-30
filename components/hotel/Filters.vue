<script setup>
const tabs = ['Popular', 'Amenities', 'Star Rating']
const activeTab = ref('Popular')

// Filter state
const filters = ref({
    freeCancellation: false,
    payAtHotel: false,
    airportTransfer: false,
    mealsIncluded: false,
    waterVillas: false,
    starRating: null,
})

// Clear Filters
const clearFilters = () => {
    filters.value = {
        freeCancellation: false,
        payAtHotel: false,
        airportTransfer: false,
        mealsIncluded: false,
        waterVillas: false,
        starRating: null,
    }
}
</script>

<template>
    <aside class="w-full mb-4 h-fit md:w-64 bg-white p-4 rounded shadow-md md:sticky md:top-20">
        <h2 class="font-semibold text-lg mb-4">Filters</h2>

        <!-- Tabs -->
        <div class="flex overflow-x-auto space-x-2 mb-4 border-b scrollbar-hide">
            <button v-for="tab in tabs" :key="tab" @click="activeTab = tab"
                class="px-3 py-1 text-sm font-medium border-b-2 whitespace-nowrap" :class="{
                    'border-indigo-500 text-indigo-600': activeTab === tab,
                    'border-transparent text-gray-500': activeTab !== tab,
                }">
                {{ tab }}
            </button>
        </div>

        <!-- Content -->
        <transition name="fade" mode="out-in">
            <div :key="activeTab">
                <div v-if="activeTab === 'Popular'">
                    <label class="block mb-2">
                        <input type="checkbox" v-model="filters.freeCancellation" class="mr-2" /> Free Cancellation
                    </label>
                    <label class="block mb-2">
                        <input type="checkbox" v-model="filters.payAtHotel" class="mr-2" /> Pay @ Hotel
                    </label>
                </div>

                <div v-else-if="activeTab === 'Amenities'">
                    <label class="block mb-2">
                        <input type="checkbox" v-model="filters.airportTransfer" class="mr-2" /> Airport Transfer
                    </label>
                    <label class="block mb-2">
                        <input type="checkbox" v-model="filters.mealsIncluded" class="mr-2" /> Meals Included
                    </label>
                    <label class="block mb-2">
                        <input type="checkbox" v-model="filters.waterVillas" class="mr-2" /> Water Villas
                    </label>
                </div>

                <div v-else-if="activeTab === 'Star Rating'">
                    <label v-for="n in 5" :key="n" class="block mb-2">
                        <input type="radio" :value="n" v-model="filters.starRating" id="star-{{ n }}" class="mr-2" />
                        {{ n }} Star
                    </label>
                </div>
            </div>
        </transition>

        <!-- Clear Filters Button -->
        <button @click="clearFilters"
            class="w-full bg-gray-800 text-white py-2 rounded mt-4 hover:bg-gray-700 transition">
            Clear Filters
        </button>
    </aside>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>