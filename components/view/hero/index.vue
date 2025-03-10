<script lang="ts" setup>

import image1 from '/images/hotels/hotel1/one.webp'
import image2 from '/images/hotels/hotel1/two.webp'
import image3 from '/images/hotels/hotel1/three.webp'
import image4 from '/images/hotels/hotel1/four.webp'
import image5 from '/images/hotels/hotel1/five.webp'

const images = [
    {
        mainImg: image1,
        otherImg: [image2, image3, image4, image5]
    }
]

</script>

<template>
    <div class="main-container bg-slate-50">
        <div v-for="(image, index) in images" :key="index" class="flex flex-col w-full md:flex-row">
            <div class="md:flex-1 h-[500px] bg-cover bg-no-repeat bg-center transition duration-300"
                :style="{ backgroundImage: `url(${image.mainImg})`}" />
            <div class="md:flex-1 grid grid-cols-2 h-[500px]">
                <div v-for="(img, i) in image.otherImg" :key="i" class="aspect-auto bg-cover bg-no-repeat bg-center hover:bg-opacity-75 transition duration-300"
                    :style="{ backgroundImage: `url(${img})`}" />
            </div>
        </div>
    </div>
</template>