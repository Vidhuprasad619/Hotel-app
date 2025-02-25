<script setup>
defineProps({
    category: String,
    title: String,
    description: String,
    img: String,
    link: String,
})
</script>

<template>
    <div class="p-2.5 rounded shadow-md min-w-fit">
        <NuxtLink :to="link" class="flex items-top">
            <img :src="img" alt="image" class="size-[134px] rounded aspect-square">
            <div class="ml-5">
                <p class="text-xs text-gray-600 mb-1">{{ category }}</p>
                <h5 class="text-black font-semibold mb-2.5">{{ title }}</h5>
                <p class="text-gray-600 text-sm">{{ description }}</p>
            </div>
        </NuxtLink>
    </div>
</template>