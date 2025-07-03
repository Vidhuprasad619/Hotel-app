<script setup>
defineProps({
  date: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="w-full text-left flex flex-col gap-4">
    <div class="flex flex-col gap-y-1 w-auto">
      <span class="text-sm text-black font-medium lg:text-base">
        <span class="text-sm text-brand-purple capitalize">
          {{ type }}
        </span>
        -
        <span class="text-sm text-primary/80">
          {{ date }}
        </span>
      </span>

      <nuxt-link to="" class="text-sm text-black font-bold lg:text-2xl leading-5 lg:leading-10">
        <div class="w-full h-auto text-ellipsis line-clamp-2">
          {{ heading }}
        </div>
      </nuxt-link>

      <span class="text-sm text-primary/50">
        Author -
        <span class="text-sm text-primary/80">
          {{ author }}
        </span>
      </span>
    </div>
  </div>
</template>
