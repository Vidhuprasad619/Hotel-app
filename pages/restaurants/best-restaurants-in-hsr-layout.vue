<script setup>
import HotelCard from '~/components/hotel/Card.vue'
import HotelFilters from '~/components/hotel/Filters.vue'


useHead({
  title: 'Best Restaurants in HSR Layout',
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
        name: 'Aaranya Restaurant',
        location: ' 462, Dr Puneeth Rajkumar Rd, Sector 6, HSR Layout, BLR',
        image: '/images/hotels/hotel1/best-hotels-in bangalore-1.jpg',
        description: 'Aaranya Restaurant, one of the best restaurants in HSR Layout 2025, offers a stunning rooftop setting, exceptional service, and a vibrant American-inspired ambiance. Known for its flavorful non-vegetarian fare like Mirchi kebab and chicken lollipops, paired with a wide liquor selection, it’s the perfect spot for a night out. Experience bold flavors, great vibes, and unforgettable dining in Bangalore.',
        price: 950,
        rating: 4.2,
        reviews: 4000,
        tags: ['Signature Coconut Pudding', 'Free Cancellation'],
    },
    {
        id: 2,
        name: 'Daily Sushi',
        location: 'No.1212, SBM Fortune, 4th Floor, 22nd Cross Road, 14th Main Rd, 3rd Sector, HSR Layout, Bangalore, 560102.',
        image: '/images/hotels/hotel1/five.webp',
        description: 'Daily Sushi, among the top Japanese restaurants in HSR Layout, offers a refined casual dining experience with a vibrant selection of sushi, sashimi, tempura, and fusion dishes. With a chic ambiance, premium sake, and fresh ingredients, each bite reflects authentic Japanese craftsmanship. Perfect for sushi lovers, it’s a must-visit for an elevated yet approachable culinary journey.',
        price: 1000,
        rating: 4.4,
        reviews: 1850,
        tags: ['Free Cancellation', 'MMT Luxe'],
    },
    {
        id: 3,
        name: 'Basil Bistro',
        location: '2066, 2063, 24th Main Rd, Vanganahalli, 1st Sector, HSR Layout, BLR 560102.',
        image: 'https://source.unsplash.com/500x300/?beach,maldives',
        description: 'Basil Bistro, a standout dining spot in HSR Layout, takes you on a global culinary journey with its diverse, internationally-inspired menu. From comfort classics to creative twists, each dish is crafted with passion and flair. Paired with curated wines and craft cocktails, and set in a warm, inviting ambiance, Basil Bistro is perfect for any dining occasion.',
        price: 1800,
        rating: 4.2,
        reviews: 2100,
        tags: ['Breakfast Included', 'Private Beach', 'Luxury'],
    },
    {
        id: 4,
        name: 'Copper Kitchen',
        location: 'Lakshmi Chamers, Ground Floor, L-147, 5th Main Road, Sector – 6, HSR Layout Sector 6,',
        image: 'https://source.unsplash.com/500x300/?luxury,hotel',
        description: 'Copper Kitchen Restaurant, located near HSR Layout, is a must-visit for non-veg food lovers in Bangalore. Famous for its rich and aromatic Hyderabadi Dum Biryani, the menu also features gems like Tamil Muslim Wedding Biryani, Chettinad Mutton Shoulder, and Fish Pollichathu. With cozy vibes, warm hospitality, and bold South Indian flavors, it promises a truly satisfying dining experience.',
        price: 1200,
        rating: 4.0,
        reviews: 250,
        tags: ['Eco-Friendly', 'MMT Luxe', 'Private Pool'],
    },
    {
        id: 5,
        name: 'Shift Lounge Bar & Kitchen',
        location: '3rd and 4th floor, Sector 3 1085, 14th Main Road, HSR Layout, Bengaluru',
        image: 'https://source.unsplash.com/500x300/?island,maldives',
        description: 'This top-rated dine-in spot in HSR Layout is perfect for foodies and sports lovers alike. With cozy ambiance, a projector screen for live matches, and friendly service, it’s ideal for casual hangouts or celebrations. Enjoy a diverse menu featuring tasty vegetarian and non-veg options, including favorites like Tandoori Florets and Captain’s Stuff—making it a must-visit for a fun, flavorful night out.',
        price: 1700,
        rating: 4.5,
        reviews: 6565,
        tags: ['Breakfast Included', 'Private Villas', 'Free Cancellation'],
    },
    {
        id: 6,
        name: 'Broadway-The Gourmet Theatre',
        location: 'Sector 2,  27th Main Road, HSR Layout, Bengaluru',
        image: 'https://source.unsplash.com/500x300/?tropical,maldives',
        description: 'Next up is Broadway, a must-visit in HSR Layout where biryani takes center stage—cooked in bamboo for a smoky, fiery twist. Choose from chicken, mutton, or vegetarian options, each marinated with bold spices. Pair it with a cold beer for the perfect combo. Add in live Teppanyaki shows and a romantic ambiance, and you’ve got a unique, unforgettable dining experience.',
        price: 1700,
        rating: 4.2,
        reviews: 2200,
        tags: ['Luxury', 'Water Villas', 'Private Beach'],
    },
    {
        id: 7,
        name: 'Fat Tiger',
        location: ' 117, 27th Main Rd, HSR, Bengaluru',
        image: 'https://source.unsplash.com/500x300/?tropical,hotel',
        description: ' Celebrate the season at Fat Tiger, the newest vibrant café and quick-service spot in Namma Ooru. Enjoy a flavorful menu featuring savory momos, juicy burgers, artisanal pizzas, and refreshing drinks—all at great prices. Whether unwinding with family or friends, Fat Tiger’s cozy atmosphere and delicious dishes make it the perfect place to relax and create unforgettable memories.',
        price: 400,
        rating: 4.3,
        reviews: 11000,
        tags: ['Free Cancellation', 'MMT Luxe', 'Water Villas'],
    },
    {
        id: 8,
        name: 'Biriyani Zone',
        location: '9th Main Road, Sector 7, HSR, Bengaluru',
        image: '/images/hotels/hotel1/wayanad.jpg',
        description: 'Biriyani Zone, near HSR Layout, Bangalore, is a favorite for Biryani lovers, offering authentic Hyderabadi Dum Biryani and more. Known for excellent catering, takeaway, and a diverse menu including Chinese, tandoori, and Peshawari dishes, it caters to all tastes—including vegetarian and vegan. With great ambiance, prompt service, and affordable prices, Biriyani Zone is ideal for family and friend gatherings.',
        price: 950,
        rating: 4.2,
        reviews: 560,
        tags: ['Underwater Dining', 'Private Pool', 'Breakfast Included'],
    },
    {
        id: 9,
        name: 'Onesta',
        location: 'Sector 1, 27th Main Rd, HSR, Bengaluru',
        image: 'https://source.unsplash.com/500x300/?luxury,water-villa',
        description: 'Onesta is a perfect rooftop spot in Koramangala to hang out with friends, offering a cozy, plant-filled ambiance that’s both relaxing and inviting. Enjoy a diverse menu featuring favorites like chicken tikka skewers, cheese garlic bread, bacon-wrapped prawns, and paneer tikka lasagna. Ideal for laid-back evenings, Onesta promises great food and a soothing atmosphere to unwind and catch up.',
        price: 700,
        rating: 4.1,
        reviews: 350,
        tags: ['Water Villas', 'Private Beach', 'Luxury'],
    },
    {
        id: 10,
        name: 'Oyster, Bar & Kitchen',
        location: '3rd floor, Sector 7, 14th Main Road, HSR Layout, Bengaluru',
        image: 'https://source.unsplash.com/500x300/?maldives,resort-luxury',
        description: 'Looking for a chill rooftop hangout in HSR Layout? Oyster Bar and Kitchen is a pet-friendly, budget-friendly spot serving delicious bar snacks and drinks. Enjoy wood-fired pizzas, free Wi-Fi, and a special pet menu while taking in the relaxed vibe and city views. Perfect for dates or friends’ get-togethers, it’s a must-visit destination in HSR Layout!.',
        price: 1600,
        rating: 4.3,
        reviews: 6000,
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
                    Best Restaurants in HSR Layout 2025
                </h1>
                <p class="pb-5">
                    HSR Layout has emerged as one of Bangalore’s top dining destinations, offering a vibrant mix of cuisines and experiences. From authentic Indian dishes to global favorites, this neighborhood caters to every food lover. In this guide to the best restaurants in HSR Layout, we’ve handpicked top-rated spots that blend great food, inviting ambiance, and exceptional service—perfect for every craving and occasion.  .
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
