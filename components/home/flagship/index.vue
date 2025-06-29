<script setup>
const data = [
    {
        img: '/images/hotels/hotel1/hotels-in-bangalore-home.jpeg',
        name: 'Top-Rated Hotels in Bengaluru',
        link: 'https://bangaloretoday.in/best-restaurants-in-bangalore-for-lunch/'
    },
    {
        img: '/images/hotels/hotel1/hotels-in-bangalore-home1.png',
        name: '5 star hotels in Bengaluru',
        link: '/'
    },
    {
        img: '/images/hotels/hotel1/hotels-in-bangalore-home2.jpeg',
        name: '3 star hotels in Bengaluru',
        link: '/'
    }
]
</script>

<template>
    <div class="main-container bg-slate-50">
        <div class="max-container bg-gradient rounded shadow-lg flex justify-between items-center flex-col lg:flex-row gap-5 mb-5">
            <h3 class="text-black font-semibold">Hotel Comfort: Where Luxury <br> Lives</h3>
            <div class="flex flex-wrap gap-3 items-center justify-center">
                <HomeFlagshipCard v-for="(item, index) in data" :key="index" :img="item.img" :name="item.name" :link="item.link" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg-gradient {
    background: linear-gradient(90deg, rgb(234, 245, 255), rgb(88, 92, 224));
}
</style>