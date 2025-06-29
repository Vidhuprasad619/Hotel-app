<script setup>
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'


const data = [
    {
        img: 'https://platforms.makemytrip.com/contents/b945fe53-f41e-419a-9718-f36bbb6e23fe',
        top: 8,
        link: '/',
        details: 'Stays in & Around Delhi for a Weekend Getaway'
    },
    {
        img: 'https://platforms.makemytrip.com/contents/b945fe53-f41e-419a-9718-f36bbb6e23fe',
        top: 8,
        link: '/',
        details: 'Stays in & Around Delhi for a Weekend Getaway'
    },
    {
        img: 'https://platforms.makemytrip.com/contents/b945fe53-f41e-419a-9718-f36bbb6e23fe',
        top: 8,
        link: '/',
        details: 'Stays in & Around Delhi for a Weekend Getaway'
    },
    {
        img: 'https://platforms.makemytrip.com/contents/b945fe53-f41e-419a-9718-f36bbb6e23fe',
        top: 8,
        link: '/',
        details: 'Stays in & Around Delhi for a Weekend Getaway'
    },
    {
        img: 'https://platforms.makemytrip.com/contents/b945fe53-f41e-419a-9718-f36bbb6e23fe',
        top: 8,
        link: '/',
        details: 'Stays in & Around Delhi for a Weekend Getaway'
    },
    {
        img: 'https://platforms.makemytrip.com/contents/b945fe53-f41e-419a-9718-f36bbb6e23fe',
        top: 8,
        link: '/',
        details: 'Stays in & Around Delhi for a Weekend Getaway'
    },
    {
        img: 'https://platforms.makemytrip.com/contents/b945fe53-f41e-419a-9718-f36bbb6e23fe',
        top: 8,
        link: '/',
        details: 'Stays in & Around Delhi for a Weekend Getaway'
    },
    {
        img: 'https://platforms.makemytrip.com/contents/b945fe53-f41e-419a-9718-f36bbb6e23fe',
        top: 8,
        link: '/',
        details: 'Stays in & Around Delhi for a Weekend Getaway'
    },
    {
        img: 'https://platforms.makemytrip.com/contents/b945fe53-f41e-419a-9718-f36bbb6e23fe',
        top: 8,
        link: '/',
        details: 'Stays in & Around Delhi for a Weekend Getaway'
    },
    {
        img: 'https://platforms.makemytrip.com/contents/b945fe53-f41e-419a-9718-f36bbb6e23fe',
        top: 8,
        link: '/',
        details: 'Stays in & Around Delhi for a Weekend Getaway'
    },
    {
        img: 'https://platforms.makemytrip.com/contents/b945fe53-f41e-419a-9718-f36bbb6e23fe',
        top: 8,
        link: '/',
        details: 'Stays in & Around Delhi for a Weekend Getaway'
    },{
        img: 'https://platforms.makemytrip.com/contents/b945fe53-f41e-419a-9718-f36bbb6e23fe',
        top: 8,
        link: '/',
        details: 'Stays in & Around Delhi for a Weekend Getaway'
    }
]
</script>

<template>
    <div class="main-container bg-slate-50">
        <div class="max-container bg-white rounded-[12px] shadow-lg mb-5">
            <h3 class="text-black font-semibold">Find Your Stay — Experience the Bengaluru Way.</h3>
            <div class="pl-1.5 pt-1.5 pb-2.5 mt-9 flex w-full">
                <Carousel :opts="{
                    align: 'start',
                    }" class="relative w-full">
                    <CarouselContent class="-ml-2">
                        <CarouselItem v-for="(item, index) in data" :key="index" class="pt-5 basis-1/8">
                            <HomeHandpickCard :img="item.img" :top="item.top" :details="item.details"
                                :link="item.link" />
                        </CarouselItem>
                    </CarouselContent>
                    <div class="absolute -top-16 right-12 flex max-sm:hidden">
                        <CarouselPrevious class="w-9 h-8 relative left-12 text-blue-400 hover:text-blue-600 bg-white outline-none border-[#f1f1f1] rounded-r-[20px] shadow-md" />
                        <CarouselNext class="w-9 h-8 relative bg-white text-blue-400 hover:text-blue-600 outline-none border-[#f1f1f1] rounded-l-[20px] shadow-md" />
                    </div>
                </Carousel>
            </div>
        </div>
    </div>
</template>