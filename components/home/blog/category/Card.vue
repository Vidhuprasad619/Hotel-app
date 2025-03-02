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
    <div class="p-2.5 rounded bg-white shadow-md min-w-fit">
        <NuxtLink :to="link" class="flex flex-col gap-3 sm:gap-0 sm:flex-row items-center max-w-[260px] sm:items-top sm:max-w-[442px]">
            <img :src="img" alt="image" class="size-[134px] rounded aspect-square">
            <div class="ml-5">
                <p class="text-xs text-gray-600 mb-1">{{ category }}</p>
                <h5 class="text-black font-semibold mb-2.5">{{ title }}</h5>
                <p class="text-gray-600 text-sm">{{ description }}</p>
            </div>
        </NuxtLink>
    </div>
</template>