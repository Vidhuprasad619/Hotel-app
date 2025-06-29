<script setup lang="ts">
import Combobox from '~/components/ui/Combobox.vue';
import Polaroid from '~/components/ui/Polaroid.vue';

    const polaroids = [
        {
            image: '/images/hotels/hotel1/bt-hero-section-flight.png',
            caption: 'Best Deals on Flights Await ',
            
        },
        {
            image: '/images/hotels/hotel1/bt-hero-resort-final.jpg',
            caption: 'Rest Well. Eat Well. Feel Whole.',
            
        },
        {
            image: '/images/hotels/hotel1/bt-hero-section-bangalore-nightlife.jpeg',
            caption: 'A Tale of Tradition, Trends, and Tech Life ',
            
        },
        {
            image: '/images/hotels/hotel1/bt-hero-restaurants.webp',
            caption: 'Every meal feels like a vacation ',
            
        }
    ]
</script>

<template>
    <div class="main-container md:mt-5">
        <div class="max-container flex flex-col gap-y-5 bg-blue-50 rounded-[12px] mb-5">
            <h1 class="font-semibold text-center">
                  Find Flights. Getaways. City Life. One simple search

            </h1>
            <p class="text-[#334155] text-center md:mt-3">
                Whats Hot in the City? This is Bangalore Today Has Spoken!!! Eat, Sip & Celebrate in Style
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