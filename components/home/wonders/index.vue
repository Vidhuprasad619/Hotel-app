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
        link: '/',
        details: 'Stays in & Around Delhi for a Weekend Getaway'
    },
    {
        img: 'https://platforms.makemytrip.com/contents/b945fe53-f41e-419a-9718-f36bbb6e23fe',
        link: '/',
        details: 'Stays in & Around Delhi for a Weekend Getaway'
    },
    {
        img: 'https://platforms.makemytrip.com/contents/b945fe53-f41e-419a-9718-f36bbb6e23fe',
        link: '/',
        details: 'Stays in & Around Delhi for a Weekend Getaway'
    },
    {
        img: 'https://platforms.makemytrip.com/contents/b945fe53-f41e-419a-9718-f36bbb6e23fe',
        link: '/',
        details: 'Stays in & Around Delhi for a Weekend Getaway'
    },
    {
        img: 'https://platforms.makemytrip.com/contents/b945fe53-f41e-419a-9718-f36bbb6e23fe',
        link: '/',
        details: 'Stays in & Around Delhi for a Weekend Getaway'
    },
    {
        img: 'https://platforms.makemytrip.com/contents/b945fe53-f41e-419a-9718-f36bbb6e23fe',
        link: '/',
        details: 'Stays in & Around Delhi for a Weekend Getaway'
    },
    {
        img: 'https://platforms.makemytrip.com/contents/b945fe53-f41e-419a-9718-f36bbb6e23fe',
        link: '/',
        details: 'Stays in & Around Delhi for a Weekend Getaway'
    },
    {
        img: 'https://platforms.makemytrip.com/contents/b945fe53-f41e-419a-9718-f36bbb6e23fe',
        link: '/',
        details: 'Stays in & Around Delhi for a Weekend Getaway'
    }
]
</script>

<template>
    <div class="main-container">
        <div class="max-container bg-white rounded-[12px] shadow-lg mb-5">
            <h3 class="text-black font-semibold mb-4">Unlock Lesser-Known Wonders of India</h3>
            <Carousel class="relative w-full">
                <CarouselContent>
                    <CarouselItem v-for="(item, index) in data" :key="index" class="basis-1/8">
                        <HomeWondersCard :img="item.img" :top="item.top" :details="item.details" :link="item.link" />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious class="absolue -top-10 left-[90%] max-md:hidden" />
                <CarouselNext class="absolute -top-10 right-0 max-md:hidden" />
            </Carousel>
        </div>
    </div>
</template>