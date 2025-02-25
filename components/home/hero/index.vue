<script setup lang="ts">
import Combobox from '~/components/ui/Combobox.vue';
import Polaroid from '~/components/ui/Polaroid.vue';

    const polaroids = [
        {
            image: '/images/home/polaroid/polaroid3.jpg',
            caption: 'Kosher Guru is a fantastic resource ',
            name: 'Aleena'
        },
        {
            image: '/images/home/polaroid/polaroid1.jpg',
            caption: 'Kosher Guru is a fantastic resource ',
            name: 'Aleena'
        },
        {
            image: '/images/home/polaroid/polaroid2.jpg',
            caption: 'Kosher Guru is a fantastic resource ',
            name: 'Aleena'
        },
        {
            image: '/images/home/polaroid/polaroid4.jpg',
            caption: 'Kosher Guru is a fantastic resource ',
            name: 'Aleena'
        }
    ]
</script>

<template>
    <div class="main-container">
        <div class="max-container flex flex-col gap-y-5 bg-blue-50 rounded-[12px] mb-5">
            <h1 class="font-semibold text-center">
                 Ultimate Destination for <span class="md:block" /> Experiencing <span class="text-blue-400">Kosher</span>  like never Before
            </h1>
            <p class="text-[#334155] text-center md:mt-3">
                Discover delicious kosher food, drinks, and entertainment for a flavorful and fun experience
            </p>
            <div class="flex w-full md:w-fit items-center justify-center mx-auto relative">
                <Combobox />
                <input type="text" placeholder="Search..." class="bg-red w-full md:w-[600px] h-14 px-4 py-2 rounded-r-full border border-black/80">
                <Button
                    class="absolute hidden sm:flex sm:gap-2 right-2 px-7 py-[6px] bg-blue-500 hover:bg-blue-400 rounded-full  text-[14px] font-normal text-white transition-all duration-200 ease-in-out group-focus-within:bg-blue-400 gap-x-1 ">
                    <Icon name="ph:magnifying-glass" size="18"></Icon>
                    Search
                </Button>
            </div>
            <div class="lg:mt-20 pb-10">
                <Polaroid :polaroids="polaroids" class="max-lg:w-[100%]"></Polaroid>
            </div>
        </div>
    </div>
</template>