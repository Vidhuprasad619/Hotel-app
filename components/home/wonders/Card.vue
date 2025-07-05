<script setup>
defineProps({
  img: String,
  details: String,
  link: String,

})
</script>

<template>
  <NuxtLink
    :to="link"
    class="w-[200px] h-[231px] flex items-end rounded-[12px] bg-cover bg-no-repeat"
    :style="{ backgroundImage: `url(${img})` }"
  >
  <div class="p-3 w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-b-[12px] overflow-hidden">
    <p class="text-white">
        {{ details }}
      </p>
    </div>
  </NuxtLink>
</template>
