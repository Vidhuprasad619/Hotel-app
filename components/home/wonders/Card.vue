<script setup>
defineProps({
    img: String,
    details: String,
    link: String,

})
</script>

<template>
    <NuxtLink :to="link"
        class="w-[200px] h-[231px] flex items-end rounded-[12px] bg-cover bg-no-repeat"
        :style="{ backgroundImage: `url(${img})` }">
        <div class="p-3">
            <p class="text-white">{{ details }}</p>
        </div>
    </NuxtLink>
</template>