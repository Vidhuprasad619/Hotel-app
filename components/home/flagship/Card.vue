<script setup>
defineProps({
  img: String,
  name: String,
  link: String,
})
</script>

<template>
  <NuxtLink :to="link" class="h-[166px] w-[250px] shadow-lg rounded-[10px] flex items-end bg-cover bg-no-repeat hover:scale-105 duration-300" :style="{ backgroundImage: `url(${img})` }">
    <p class="text-white font-medium w-full p-2 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-b-[10px]">
      {{ name }}
    </p>
  </NuxtLink>
</template>
