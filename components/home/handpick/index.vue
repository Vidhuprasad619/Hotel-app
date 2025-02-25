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
    }
]
</script>

<template>
    <div class="main-container bg-slate-50">
        <div class="max-container bg-white rounded-[12px] shadow-lg mb-5">
            <h3 class="text-black font-semibold">Handpicked Collections for You</h3>
            <div class="pl-1.5 pt-1.5 pb-2.5 mt-9 flex w-full">
                <Carousel class="relative w-full">
                  <CarouselContent>
                    <CarouselItem v-for="(item, index) in data" :key="index" class="basis-1/8">
                        <HomeHandpickCard :img="item.img" :top="item.top" :details="item.details" :link="item.link" />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious class="absolue -top-16 left-[90%] max-md:hidden" />
                  <CarouselNext class="absolute -top-16 right-0 max-md:hidden" />
                </Carousel>
            </div>
        </div>
    </div>
</template>