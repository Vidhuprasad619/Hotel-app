<script setup>
defineProps({
    img: String,
    name: String,
    link: String,
})
</script>

<template>
    <NuxtLink :to="link" class="h-[166px] w-[250px] shadow-lg rounded-[10px] flex items-end bg-cover bg-no-repeat" :style="{ backgroundImage: `url(${img})` }">
        <p class="text-white font-medium w-full px-3 pb-3 pt-5">{{ name }}</p>
    </NuxtLink>
</template>