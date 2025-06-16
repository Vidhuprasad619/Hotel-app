<script setup>
import HotelCard from '~/components/hotel/Card.vue'
import HotelFilters from '~/components/hotel/Filters.vue'

const activeSort = ref('Popular')

const hotels = ref([
    {
        id: 1,
        name: 'Sheraton Maldives Full Moon Resort & Spa',
        location: 'North Male Atoll',
        image: 'https://source.unsplash.com/500x300/?maldives,resort',
        description: 'Offers Indian cuisines, pool villas & sunset dolphin cruises.',
        price: 21258,
        rating: 4.5,
        reviews: 167,
        tags: ['Breakfast Included', 'MMT Luxe', 'Free Cancellation'],
    },
    {
        id: 2,
        name: 'Taj Exotica Resort & Spa',
        location: 'South Male Atoll',
        image: 'https://source.unsplash.com/500x300/?luxury,maldives',
        description: 'Overwater villas, infinity pool, spa & gourmet dining.',
        price: 28400,
        rating: 4.7,
        reviews: 210,
        tags: ['Free Cancellation', 'MMT Luxe'],
    },
    {
        id: 3,
        name: 'Anantara Veli Maldives Resort',
        location: 'South Male Atoll',
        image: 'https://source.unsplash.com/500x300/?beach,maldives',
        description: 'Exclusive overwater bungalows with private pools and fine dining.',
        price: 33000,
        rating: 4.8,
        reviews: 185,
        tags: ['Breakfast Included', 'Private Beach', 'Luxury'],
    },
    {
        id: 4,
        name: 'Soneva Fushi',
        location: 'Baa Atoll',
        image: 'https://source.unsplash.com/500x300/?luxury,hotel',
        description: 'Luxury resort with eco-friendly villas and beautiful sandy beaches.',
        price: 45200,
        rating: 5.0,
        reviews: 198,
        tags: ['Eco-Friendly', 'MMT Luxe', 'Private Pool'],
    },
    {
        id: 5,
        name: 'The St. Regis Maldives Vommuli Resort',
        location: 'Dhaalu Atoll',
        image: 'https://source.unsplash.com/500x300/?island,maldives',
        description: 'World-class resort with incredible ocean views and private villas.',
        price: 58000,
        rating: 4.9,
        reviews: 230,
        tags: ['Breakfast Included', 'Private Villas', 'Free Cancellation'],
    },
    {
        id: 6,
        name: 'One&Only Reethi Rah',
        location: 'North Male Atoll',
        image: 'https://source.unsplash.com/500x300/?tropical,maldives',
        description: 'All-villa luxury resort with a world-renowned spa and beach activities.',
        price: 41000,
        rating: 4.6,
        reviews: 275,
        tags: ['Luxury', 'Water Villas', 'Private Beach'],
    },
    {
        id: 7,
        name: 'W Maldives',
        location: 'North Ari Atoll',
        image: 'https://source.unsplash.com/500x300/?tropical,hotel',
        description: 'Vibrant resort offering water sports, spa, and gourmet dining.',
        price: 36900,
        rating: 4.4,
        reviews: 310,
        tags: ['Free Cancellation', 'MMT Luxe', 'Water Villas'],
    },
    {
        id: 8,
        name: 'Conrad Maldives Rangali Island',
        location: 'South Ari Atoll',
        image: 'https://source.unsplash.com/500x300/?resort,maldives',
        description: 'Five-star resort with luxury villas and a unique underwater restaurant.',
        price: 50300,
        rating: 4.7,
        reviews: 210,
        tags: ['Underwater Dining', 'Private Pool', 'Breakfast Included'],
    },
    {
        id: 9,
        name: 'Four Seasons Resort Maldives at Kuda Huraa',
        location: 'North Male Atoll',
        image: 'https://source.unsplash.com/500x300/?luxury,water-villa',
        description: 'A serene resort with luxurious villas and a premier wellness center.',
        price: 42000,
        rating: 4.8,
        reviews: 160,
        tags: ['Water Villas', 'Private Beach', 'Luxury'],
    },
    {
        id: 10,
        name: 'COMO Maalifushi',
        location: 'Thaa Atoll',
        image: 'https://source.unsplash.com/500x300/?maldives,resort-luxury',
        description: 'A tranquil luxury retreat with wellness programs and beachfront villas.',
        price: 49000,
        rating: 4.6,
        reviews: 185,
        tags: ['Wellness', 'Private Villas', 'Free Cancellation'],
    },
])

const sortedHotels = computed(() => {
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

</script>

<template>
    <div class="main-container bg-slate-50">
        <div class="max-container">
            <div class="border-b border-white/70 mb-5">
                <h1 class="text-5xl text-black font-semibold mb-2">
                    Restaurants in Bangalore
                </h1>
                <p class="pb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, minima porro. Quasi fugit impedit quibusdam. Vitae molestiae quod nisi similique sit. Laudantium itaque cupiditate, quo fugit quisquam quas mollitia rerum.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea ipsum hic quos omnis quisquam beatae explicabo quam aspernatur repellat tempora fugiat alias vitae reiciendis, nam doloremque delectus distinctio quidem. Natus?
                </p>
            </div>
            <!-- Sort & Title -->
            <div class="mb-4 flex flex-col md:flex-row justify-between md:items-center gap-2">
                <h2 class="text-lg font-semibold text-gray-800">Showing Properties in Maldives</h2>
                <div class="relative w-full md:w-fit text-sm">
                    <select v-model="activeSort" class="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 cursor-pointer">
                        <option value="Popular">Popular</option>
                        <option value="Rating">User Rating</option>
                        <option value="PriceLowToHigh">Price (Low to High)</option>
                        <option value="PriceHighToLow">Price (High to Low)</option>
                    </select>
                </div>
            </div>
            <div class="flex flex-col md:flex-row justify-between gap-6">
                <HotelFilters />
                <div class="space-y-4 ml-auto">
                    <HotelCard v-for="hotel in sortedHotels" :key="hotel.id" :hotel="hotel" />
                </div>
            </div>
        </div>
    </div>
    <div class="min-h-screen py-6" style="background-color: #f9fafb;">
        <div class="max-w-7xl mx-auto px-4">
            
        </div>
    </div>
</template>
