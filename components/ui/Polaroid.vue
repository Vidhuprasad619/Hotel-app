<script setup lang="ts">
interface Polaroid {
  image: string;
  caption: string;
  name: string;
}
const props = defineProps<{
  polaroids: Polaroid[]
  
}>()

function rotate(index: number): string {
    switch (index) {
        case 0:
           return ' rotate-[-4.3deg]  translate-x-10 hidden lg:block'
        case 1:
           return ' lg:rotate-[3.88deg] lg:-translate-y-10 max-md:w-[176px] max-md:h-[181px]'
        case 2: 
           return 'lg:rotate-[5deg]  lg:-translate-x-[60px] translate-y-9 -translate-x-9 max-md:w-[176px] max-md:h-[181px]'
        default:
           return 'rotate-[-3.88deg]  -translate-x-[122px] hidden lg:block'
    }
}

</script>

<template>
<div class="flex justify-center">
    <div v-for="(polaroid, index) in polaroids" :key="index" :class="[rotate(index),index === 2 ? 'z-[1]': '']" class="bg-white p-2 lg:p-2.5 w-fit max-w-[232px] flex flex-col gap-y-2.5 shadow-md transition ease-in-out duration-500 hover:rotate-0 hover:z-20 hover:scale-110">
        <img :src="polaroid.image" alt="decorative image" class="md:w-[214px] md:h-[164px]">
        <div class="text-[9px] md:text-[13px] italic text-start font-normal">
            "{{ polaroid.caption }} - <span class="text-primary font-medium"> {{ polaroid.name }} </span>"
        </div>
    </div>
</div>
</template>