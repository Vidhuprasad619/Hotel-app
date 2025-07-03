<script setup>
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
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
  thumbnail: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
})
const to = computed(() => {
  if (props.url)
    return `/hotel/${encodeURIComponent(props.url)}/`
  else
    return `/hotel/${encodeURIComponent(props.heading)}/`
})
</script>

<template>
  <div
    class="w-full md:w-[30%] flex items-end cursor-pointer focus:outline-none focus:ring-2 focus:ring-white group"
  >
    <NuxtLink :to="to" class="flex flex-col justify-start gap-y-5">
      <div class="w-full aspect-[9/7] relative overflow-hidden">
        <div class="h-[99%] w-[99%] pr-3 pt-3 bg-transparent overflow-hidden rounded-xl">
          <div
            class="w-full h-full bg-cover bg-center bg-no-repeat rounded-xl transition-transform duration-700 ease-in-out group-hover:scale-105"
            :style="`background-image: url(${thumbnail});`"
          />
        </div>
        <div
          class="absolute top-0 w-full flex justify-end items-start h-full rounded-xl group-hover:bg-black/20 group-hover:backdrop-blur-sm"
        >
          <div class="w-[80px] h-[80px] relative">
            <div
              class="custom w-[80px] h-[80px] bg-white overflow-hidden absolute top-0 right-0 flex justify-center items-center rounded-bl-xl translate-y-[-62px] translate-x-[64px] ease-in-out duration-700 group-hover:translate-x-0 group-hover:translate-y-0"
            >
              <button
                class="w-9 h-9 bg-blue-900 rounded-full flex justify-center items-center absolute bottom-[-84px] left-[-84px] group-hover:bottom-6 group-hover:left-6 ease-in-out duration-700"
              >
                <Icon name="mdi:arrow-top-right" color="white" class="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex items-end">
        <HotelDetails :date="date" :heading="heading" :content="content" :author="author" :type="type" />
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
.gradient {
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 15%, rgba(0, 0, 0, 0.9) 100%);
}

.custom {
  clip-path: path("M 0,0 L 80,0 L 80,80 A 10,10 0,0,0 70,70 L 20,70 A 10,10 0,0,1 10,60 L 10,10 A 10,10 0,0,0 0,0 Z");
}
</style>
