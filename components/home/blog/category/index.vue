<script setup lang="ts">
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/components/ui/tabs'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'


const blogs = [
    {
        category: 'blog-1',
        card: [
            {
                category: 'blog-1',
                title: 'Bangalore to Wayanad Package',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: '/images/hotels/hotel1/wayanad.jpg',
                link: '/',
            },
            {
                category: 'blog-1',
                title: 'Bangalore to Dubai Package',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: '/images/hotels/hotel1/dubai.jpg',
                link: '/',
            },
            {
                category: 'blog-1',
                title: 'Bangalore to Ooty Package',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: '/images/hotels/hotel1/ooty1.jpg',
                link: '/',
            },
            {
                category: 'blog-1',
                title: 'Bangalore to Kashmir Package',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: '/images/hotels/hotel1/kashmir.jpg',
                link: '/',
            },
            {
                category: 'blog-1',
                title: 'Bangalore to Coorg Package',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: '/images/hotels/hotel1/coorg.jpg',
                link: '/',
            },
            {
                category: 'blog-1',
                title: 'Bangalore to Manali Package',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: 'https://promos.makemytrip.com/appfest/2x//flash-sale-116x116-14022025.jpg?',
                link: '/',
            },
            {
                category: 'blog-1',
                title: 'Bangalore to Singapore Package',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: 'https://promos.makemytrip.com/appfest/2x//flash-sale-116x116-14022025.jpg?',
                link: '/',
            },
            {
                category: 'blog-1',
                title: 'Bangalore to Rameshwaram Package',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: 'https://promos.makemytrip.com/appfest/2x//flash-sale-116x116-14022025.jpg?',
                link: '/',
            },
            {
                category: 'blog-1',
                title: 'Bangalore to Tirupati Package',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: 'https://promos.makemytrip.com/appfest/2x//flash-sale-116x116-14022025.jpg?',
                link: '/',
            },
            {
                category: 'blog-1',
                title: 'Bangalore to Munnar Package',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: 'https://promos.makemytrip.com/appfest/2x//flash-sale-116x116-14022025.jpg?',
                link: '/',
            },
            {
                category: 'blog-1',
                title: 'Bangalore to Chikmagalur Package',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: 'https://promos.makemytrip.com/appfest/2x//flash-sale-116x116-14022025.jpg?',
                link: '/',
            },
        ]
    },
    {
        category: 'blog-2',
        card: [
            {
                category: 'blog-2',
                title: 'Live Now: Valentines sale',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: 'https://promos.makemytrip.com/appfest/2x//flash-sale-116x116-14022025.jpg?',
                link: '/',
            },
            {
                category: 'blog-2',
                title: 'Live Now: Valentines sale',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: 'https://promos.makemytrip.com/appfest/2x//flash-sale-116x116-14022025.jpg?',
                link: '/',
            },
            {
                category: 'blog-2',
                title: 'Live Now: Valentines sale',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: 'https://promos.makemytrip.com/appfest/2x//flash-sale-116x116-14022025.jpg?',
                link: '/',
            },
            {
                category: 'blog-2',
                title: 'Live Now: Valentines sale',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: 'https://promos.makemytrip.com/appfest/2x//flash-sale-116x116-14022025.jpg?',
                link: '/',
            }
        ]
    },
    {
        category: 'blog-3',
        card: [
            {
                category: 'blog-3',
                title: 'Live Now: Valentines sale',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: 'https://promos.makemytrip.com/appfest/2x//flash-sale-116x116-14022025.jpg?',
                link: '/',
            },
            {
                category: 'blog-3',
                title: 'Live Now: Valentines sale',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: 'https://promos.makemytrip.com/appfest/2x//flash-sale-116x116-14022025.jpg?',
                link: '/',
            },
            {
                category: 'blog-3',
                title: 'Live Now: Valentines sale',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: 'https://promos.makemytrip.com/appfest/2x//flash-sale-116x116-14022025.jpg?',
                link: '/',
            },
            {
                category: 'blog-3',
                title: 'Live Now: Valentines sale',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: 'https://promos.makemytrip.com/appfest/2x//flash-sale-116x116-14022025.jpg?',
                link: '/',
            },
            {
                category: 'blog-3',
                title: 'Live Now: Valentines sale',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: 'https://promos.makemytrip.com/appfest/2x//flash-sale-116x116-14022025.jpg?',
                link: '/',
            }
        ]
    },
    {
        category: 'blog-4',
        card: [
            {
                category: 'blog-4',
                title: 'Live Now: Valentines sale',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: 'https://promos.makemytrip.com/appfest/2x//flash-sale-116x116-14022025.jpg?',
                link: '/',
            },
            {
                category: 'blog-4',
                title: 'Live Now: Valentines sale',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: 'https://promos.makemytrip.com/appfest/2x//flash-sale-116x116-14022025.jpg?',
                link: '/',
            },
            {
                category: 'blog-4',
                title: 'Live Now: Valentines sale',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: 'https://promos.makemytrip.com/appfest/2x//flash-sale-116x116-14022025.jpg?',
                link: '/',
            },
            {
                category: 'blog-4',
                title: 'Live Now: Valentines sale',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: 'https://promos.makemytrip.com/appfest/2x//flash-sale-116x116-14022025.jpg?',
                link: '/',
            },
            {
                category: 'blog-4',
                title: 'Live Now: Valentines sale',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: 'https://promos.makemytrip.com/appfest/2x//flash-sale-116x116-14022025.jpg?',
                link: '/',
            },
            {
                category: 'blog-4',
                title: 'Live Now: Valentines sale',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: 'https://promos.makemytrip.com/appfest/2x//flash-sale-116x116-14022025.jpg?',
                link: '/',
            },
            {
                category: 'blog-4',
                title: 'Live Now: Valentines sale',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: 'https://promos.makemytrip.com/appfest/2x//flash-sale-116x116-14022025.jpg?',
                link: '/',
            },
            {
                category: 'blog-4',
                title: 'Live Now: Valentines sale',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: 'https://promos.makemytrip.com/appfest/2x//flash-sale-116x116-14022025.jpg?',
                link: '/',
            },
            {
                category: 'blog-4',
                title: 'Live Now: Valentines sale',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: 'https://promos.makemytrip.com/appfest/2x//flash-sale-116x116-14022025.jpg?',
                link: '/',
            },
            {
                category: 'blog-4',
                title: 'Live Now: Valentines sale',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: 'https://promos.makemytrip.com/appfest/2x//flash-sale-116x116-14022025.jpg?',
                link: '/',
            },
            {
                category: 'blog-4',
                title: 'Live Now: Valentines sale',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: 'https://promos.makemytrip.com/appfest/2x//flash-sale-116x116-14022025.jpg?',
                link: '/',
            }
        ]
    }
]
</script>

<template>
    <Tabs default-value="blog-1" class="w-full">
        <TabsList class="flex gap-3 p-0 w-fit border-b border-[#c6c6c6]">
            <TabsTrigger v-for="(blog, index) in blogs" :key="index" :value="blog.category"
                class="data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 transition-all duration-300 ease-in-out">
                {{ blog.category }}
            </TabsTrigger>
        </TabsList>
        <TabsContent v-for="(blog, index) in blogs" :key="index" :value="blog.category" class="mt-5 relative" :class="blog.card.length > 8 ? 'md:-left-[100px]' : 'md:-left-[0px]'">
            <Transition name="fade-slide" mode="out-in">
                <Carousel :opts="{
                    align: 'center',
                }" class="relative w-full">
                    <CarouselContent class="-ml-2">
                        <CarouselItem v-for="(card, i) in blog.card" :key="i" class="py-4 pl-5 max-w-fit">
                            <HomeBlogCategoryCard :category="card.category" :title="card.title"
                                :description="card.description" :img="card.img" :link="card.link" />
                        </CarouselItem>
                    </CarouselContent>
                    <div class="absolute -top-16 right-12 flex max-sm:hidden">
                        <CarouselPrevious
                            class="w-9 h-8 relative left-12 bg-white text-blue-400 hover:text-blue-600 outline-none border-[#f1f1f1] rounded-r-[20px] shadow-xl" />
                        <CarouselNext
                            class="w-9 h-8 relative bg-white text-blue-400 hover:text-blue-600 outline-none border-[#f1f1f1] rounded-l-[20px] shadow-xl" />
                    </div>
                </Carousel>
            </Transition>
        </TabsContent>
    </Tabs>
</template>

<style scoped>
/* Fade + Slide Animation */
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.4s ease-in-out;
}

.fade-slide-enter-from {
    opacity: 0;
    transform: translateY(10px);
}

.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>