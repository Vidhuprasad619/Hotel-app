<script setup>
const data = [
    {
        img: 'https://platforms.makemytrip.com/contents/b945fe53-f41e-419a-9718-f36bbb6e23fe',
        name: 'Tamara Hotels',
        link: '/'
    },
    {
        img: 'https://platforms.makemytrip.com/contents/b945fe53-f41e-419a-9718-f36bbb6e23fe',
        name: 'Tamara Hotels',
        link: '/'
    },
    {
        img: 'https://platforms.makemytrip.com/contents/b945fe53-f41e-419a-9718-f36bbb6e23fe',
        name: 'Tamara Hotels',
        link: '/'
    }
]
</script>

<template>
    <div class="main-container bg-slate-50">
        <div class="max-container bg-gradient rounded shadow-lg flex justify-between items-center flex-col lg:flex-row gap-5 mb-5">
            <h3 class="text-black font-semibold">Flagship Hotel Stores on <br> MakeMyTrip</h3>
            <div class="flex flex-wrap gap-3 items-center justify-center">
                <HomeFlagshipCard v-for="(item, index) in data" :key="index" :img="item.img" :name="item.name" :link="item.link" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg-gradient {
    background: linear-gradient(90deg, rgb(234, 245, 255), rgb(255, 255, 255));
}
</style>