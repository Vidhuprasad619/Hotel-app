<script setup>
defineProps({
    img: String,
    top: Number,
    details: String,
    link: String,

})
</script>

<template>
    <NuxtLink :to="link">
       <div class="custom-card relative w-[200px] h-[231px] flex items-end rounded-[12px] bg-cover bg-no-repeat"
        :style="{ backgroundImage: `url(${img})` }">
        <div class="p-3">
            <div v-if="top" class="w-fit text-sm font-semibold text-black px-2.5 py-[2px] bg-white rounded-[8px]">
                TOP {{ top }}
            </div>
            <p class="text-white">{{ details }}</p>
        </div>
       </div>
    </NuxtLink>
</template>

<style scoped>
.custom-card {
    @apply after:w-[180px] before:w-[160px] after:h-2.5 before:h-2.5 after:bg-[#dcdcdc] before:bg-[#f5f5f5] after:absolute before:absolute after:-top-2.5 before:-top-5 after:left-3 before:left-5 after:rounded-t-[12px] before:rounded-t-[12px]
}
</style>