<script setup>
defineProps({
  pageCount: {
    type: Number,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
  maxPages: {
    type: Number,
    required: false,
    default: 10,
  },
})

const emit = defineEmits(['change'])

const updatePage = number => emit('change', number)
</script>

<template>
  <div v-if="pageCount > 1" class="flex gap-1.5">
    <button v-if="currentPage > 1 && pageCount > 2" class="w-7 h-7 rounded-[7px] border border-[#4D4D4D] bg-[#323232] md:w-8 md:h-8 md:rounded-md flex justify-center items-center text-[13px] font-semibold" aria-label="Previous button" @click="updatePage(currentPage - 1)">
      <Icon name="lucide:chevrons-left" class="w-5 text-white" />
    </button>
    <template v-for="number in pageCount" :key="number">
      <button class="w-7 h-7 rounded-[7px] border border-[#4D4D4D] text-white bg-[#323232] md:w-8 md:h-8 md:rounded-md flex justify-center items-center text-[13px] font-semibold duration-300" :class="{ '!bg-brand-purple !border-brand-purple': currentPage === number }" aria-label="Page number" @click="updatePage(number)">
        {{ number }}
      </button>
    </template>
    <button v-if="currentPage !== pageCount && pageCount > 2" class="w-7 h-7 rounded-[7px] border border-[#4D4D4D] bg-[#323232] md:w-8 md:h-8 md:rounded-md flex justify-center items-center" aria-label="Next button" @click="updatePage(currentPage + 1)">
      <Icon name="lucide:chevrons-right" class="w-5 text-white" />
    </button>
  </div>
</template>

<style scoped>
button:focus {
  background-color: #5914c9;
}
</style>
