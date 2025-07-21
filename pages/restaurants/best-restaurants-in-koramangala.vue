<script setup>
import HotelCard from '~/components/hotel/Card.vue'
import HotelFilters from '~/components/hotel/Filters.vue'


useHead({
  title: 'Best Restaurants in Koramangala',
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
      content: 'Experience the Best Hotels in Bangalore — where the city’s vibrant culture, cutting-edge innovation, and cosmopolitan energy come alive. These handpicked stays combine comfort, charm, and top-tier service to create truly unforgettable experiences. Whether you\'re in town for business, leisure, or a mix of both, Bangalore’s top hotels deliver excellence at every turn. From iconic luxury like The Oberoi, Bengaluru to contemporary elegance at Renaissance Bengaluru',
    },
    {
      name: 'og:site_name',
      content: 'Experience the Best Hotels in Bangalore — where the city’s vibrant culture, cutting-edge innovation, and cosmopolitan energy come alive. These handpicked stays combine comfort, charm, and top-tier service to create truly unforgettable experiences. Whether you\'re in town for business, leisure, or a mix of both, Bangalore’s top hotels deliver excellence at every turn. From iconic luxury like The Oberoi, Bengaluru to contemporary elegance at Renaissance Bengaluru',
    },
    {
      name: 'og:url',
      content: 'https://in.bangaloretoday.in',
    },
    {
      property: 'og:image',
      content: '/images/og-banner/bangalore.png',
    },
    {
      name: 'keywords',
      content: 'Bangalore, Bangalore Today, Bangalore Flights, Bangalore Getaways, Bangalore City Life, Bangalore Resorts, Bangalore Restaurants, Bangalore Hotels',
    },
  ],
})

const activeSort = ref('Popular')

const hotels = ref([
    {
        id: 1,
        name: 'Kappa Chakka Kandhari',
        location: '  438, 18th Main Rd, 6th Block, Koramangala, BLR, 560095',
        image: '/images/hotels/hotel1/best-hotels-in bangalore-1.jpg',
        description: 'Kandhari is one of the best restaurants in Koramangala, offering a rich taste of Kerala’s bold cuisine.    Known for heirloom recipes like Meen Curry and Coconut Pudding, it blends tradition with innovation. With vibrant decor and warm hospitality, Kandhari delivers an authentic, immersive dining experience that celebrates fresh ingredients and unforgettable flavors,.',
        price: 1800,
        rating: 4.2,
        reviews: 4000,
        tags: ['Signature Coconut Pudding', 'Free Cancellation'],
    },
    {
        id: 2,
        name: 'XOOX Brewmill',
        location: '8, 20th Main Road Koramangala Insdu Ly, 5th Block, Koramangala, BLR 560095',
        image: '/images/hotels/hotel1/five.webp',
        description: 'In the heart of Koramangala, this vibrant casual dining hotspot is a go-to for craft beer lovers and foodies alike. Enjoy signature brews like Hefeweizen and Citrus IPA, standout Asian cuisine, and fusion dishes like Malai Kulcha and Wasabi Cream. With swanky décor, lively vibes, and value-for-money offerings, it’s perfect for a fun night out.',
        price: 2500,
        rating: 4.1,
        reviews: 7000,
        tags: ['Free Cancellation', 'MMT Luxe'],
    },
    {
        id: 3,
        name: 'Koramangala Social',
        location: '118, 3rd Floor, Indus Area, 80 Feet Road, Koramangala 7th Block, BLR.',
        image: 'https://source.unsplash.com/500x300/?beach,maldives',
        description: 'Step into Koramangala Social, one of the best restaurants in Bangalore, inspired by the lush charm of Lal Bagh. This two-level café-bar blends greenery, quirky décor, and industrial-chic vibes. Indulge in favorites like honey chili fries, pork ribs, and PBJ toast with bacon and ice cream. It’s the perfect spot for vibrant hangouts and unforgettable dining experiences.',
        price: 1800,
        rating: 4.2,
        reviews: 2500,
        tags: ['Breakfast Included', 'Private Beach', 'Luxury'],
    },
    {
        id: 4,
        name: 'Chulha Chauki Da Dhaba',
        location: '#5, 2nd Floor, 7th Block, 80 Feet Road, Koramangala, BLR',
        image: 'https://source.unsplash.com/500x300/?luxury,hotel',
        description: 'Discover the authentic flavors of North India at Chulha Chauki Da Dhaba, one of the best restaurants in Bangalore for traditional Indian cuisine. Located in Koramangala, this rustic gem serves rich tandoori dishes, creamy curries, and fragrant biryanis. With its warm ambiance and flavorful menu, it offers a true taste of North India in every bite .',
        price: 45200,
        rating: 4.4,
        reviews: 198,
        tags: ['Eco-Friendly', 'MMT Luxe', 'Private Pool'],
    },
    {
        id: 5,
        name: 'Rim Naam',
        location: '782, 7th Block, Koramangala, BLR, 560095',
        image: 'https://source.unsplash.com/500x300/?island,maldives',
        description: 'Rim Naam, one of the best restaurants in Koramangala, Bengaluru, offers a refined Thai dining experience in a stylish setting. Known for dishes like Tom Yum Goong, Green Curry, and Massaman Lamb, the menu blends tradition with modern flair. With outdoor seating, private dining, and a lunch buffet, it’s ideal for both romantic dinners and casual get-togethers.',
        price: 1000,
        rating: 4.5,
        reviews: 2200,
        tags: ['Breakfast Included', 'Private Villas', 'Free Cancellation'],
    },
    {
        id: 6,
        name: 'Gramin',
        location: '# 5, 11th Cross, 5th Block, Koramangala, Bangalore',
        image: 'https://source.unsplash.com/500x300/?tropical,maldives',
        description: 'Gramin, one of the best restaurants in Koramangala, brings authentic North Indian and Chinese flavors to Bangalore’s vibrant food scene. With a cozy ambiance and a diverse menu—from spicy curries to savory noodles—Gramin caters to every craving. Whether it’s a quick bite or a hearty meal, this culinary hotspot promises a satisfying, flavor-packed dining experience.',
        price: 600,
        rating: 4.1,
        reviews: 3600,
        tags: ['Luxury', 'Water Villas', 'Private Beach'],
    },
    {
        id: 7,
        name: 'Fenny’s Lounge & Kitchen',
        location: ' No. 83/1, 100 Feet Road, 4th Block, Koramangala, Bengaluru',
        image: 'https://source.unsplash.com/500x300/?tropical,hotel',
        description: 'Fenny’s Lounge & Kitchen, one of the good restaurants in Koramangala, Bangalore, is the perfect hangout spot for friends. With a relaxed vibe and a diverse menu featuring North Indian, Chinese, Continental, and Italian dishes, there’s something for everyone. Enjoy fine wines, craft beers, and premium spirits while soaking in the lively ambiance and warm hospitality for an unforgettable experience.',
        price: 36900,
        rating: 4.3,
        reviews: 11000,
        tags: ['Free Cancellation', 'MMT Luxe', 'Water Villas'],
    },
    {
        id: 8,
        name: 'Kota Kachori',
        location: 'Shop 2, Ground Floor, Salarpuria Money Center, 121, Koramangala 7th Block, BLR',
        image: '/images/hotels/hotel1/wayanad.jpg',
        description: 'Kota Kachori, one of the best restaurants in Koramangala, is a must-visit for lovers of authentic North Indian snacks. Famous for its freshly made, flavor-packed Kachoris served with delicious chutneys, this eatery offers unbeatable taste, value, and quick service. With its warm hospitality and affordable pricing, Kota Kachori is a top spot for a satisfying street food fix in Bangalore .',
        price: 400,
        rating: 4.3,
        reviews: 3660,
        tags: ['Underwater Dining', 'Private Pool', 'Breakfast Included'],
    },
    {
        id: 9,
        name: 'Roots Restaurant',
        location: '43/A, 1st Main, Jakkasandra Road, Koramangala 1st Block, Bangalore',
        image: 'https://source.unsplash.com/500x300/?luxury,water-villa',
        description: 'Roots Restaurant, one of the Top restaurants in Koramangala, offers a flavorful mix of North Indian and Mediterranean cuisine in a relaxed, casual setting. Known for its warm hospitality, quality ingredients, and reasonable prices, it’s perfect for both hearty meals and quick bites. With its inviting ambiance and diverse menu, Roots promises a dining experience to remember.',
        price: 1600,
        rating: 4.3,
        reviews: 6900,
        tags: ['Water Villas', 'Private Beach', 'Luxury'],
    },
    {
        id: 10,
        name: 'The Black Pearl',
        location: 'MG Road (near Trinity Circle)',
        image: 'https://source.unsplash.com/500x300/?maldives,resort-luxury',
        description: 'The Black Pearl in Koramangala offers a global culinary journey in a warm, intimate setting—perfect for romantic dinners or special occasions. With an innovative menu, exceptional service, and world-inspired dishes, it’s a must-visit for food lovers. Whether you are celebrating or simply indulging, The Black Pearl delivers a truly memorable dining experience in the heart of Bangalore .',
        price: 1900,
        rating: 4.3,
        reviews: 36000,
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
                    Best Hotels in Koramagala 2025
                </h1>
                <p class="pb-5">
                    From Kappa Chakka Kandhari—the Best Restaurant in Koramangala 2025—to Fenny’s Lounge & Kitchen, Kota Kachori, Roots Restaurant, and more, this vibrant neighborhood is a true culinary hotspot in Bangalore. Known for its diverse mix of modern eateries and cozy cafés, Koramangala offers something for every food lover. Whether you’re in the mood for traditional South Indian flavors, North Indian street bites, or international cuisine, the best restaurants in Koramangala 2025 deliver it all. Ready to explore Koramangala’s dynamic food scene? Let’s dive in.
                </p>
            </div>
            <!-- Sort & Title -->
            <div class="mb-4 flex flex-col md:flex-row justify-between md:items-center gap-2">
                <h2 class="text-lg font-semibold text-gray-800">Showing Restaurants in Bangalore</h2>
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
