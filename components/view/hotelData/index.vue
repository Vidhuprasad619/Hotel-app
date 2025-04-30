<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const hotelDetails = [
    {
        section: 'rooms'
    },
    {
        section: 'about'
    },
    {
        section: 'facility'
    },
    {
        section: 'location'
    },
    {
        section: 'reviews'
    },
    {
        section: 'policies'
    },
]

</script>

<template>
    <div class="main-container bg-gray-100">
        <div class="max-container">
            <div class="flex gap-4 justify-between pb-5 md:pb-10 flex-col md:flex-row">
                <div class="">
                    <div class="flex gap-1 items-center mb-[18px] flex-wrap">
                        <h3 class="capitalize font-semibold text-nowrap">sea view hotel</h3>
                        <div class="flex items-center ml-4">
                            <Icon name="mdi:star" class="text-yellow-500" size="18" />
                            <Icon name="mdi:star" class="text-yellow-500" size="18" />
                            <Icon name="mdi:star" class="text-yellow-500" size="18" />
                            <Icon name="mdi:star" class="text-yellow-500" size="18" />
                            <Icon name="mdi:star-outline" class="text-yellow-500" size="18" />
                        </div>
                        <div class="flex gap-2 items-center ml-2">
                            <Button
                                class="capitalize text-base px-2.5 py-1 rounded-[8px] shadow-none bg-white border border-white hover:bg-white hover:border hover:border-red-500">
                                <Icon name="mdi:share" size="18" />
                                <span class="hidden md:block">share</span>
                            </Button>
                            <Button
                                class="capitalize text-base px-2.5 py-1 rounded-[8px] shadow-none bg-white border border-white hover:bg-white hover:border hover:border-red-500">
                                <Icon name="mdi:heart-outline" size="18" />
                                <span class="hidden md:block">save</span>
                            </Button>
                        </div>
                    </div>
                    <p class="text-gray-600 text-sm">Mina Road, Bur Dubai, Dubai, United Arab Emirates</p>
                    <div class="mt-4 text-xs text-gray-700 capitalize flex gap-2.5 items-center">
                        <span class="px-2 py-[2px] font-medium border border-gray-300 rounded">free wifi</span>
                        <span class="px-2 py-[2px] font-medium border border-gray-300 rounded">free breakfast</span>
                    </div>
                </div>
                <div class="flex flex-col gap-2 items-start md:items-end">
                    <h4 class="font-bold">$250<span class="text-base font-normal">/ per night</span></h4>
                    <Button
                        class="capitalize text-sm md:text-base text-white bg-red-600 rounded-full border border-red-600 px-6 py-2 hover:text-red-600 hover:bg-white hover:shadow-md">
                        Book This Now
                    </Button>
                </div>
            </div>

            <Tabs default-value="rooms" class="w-full">
                <TabsList class="bg-white flex-wrap justify-start">
                    <TabsTrigger v-for="(item, index) in hotelDetails" :key="index" :value="item.section" class=" capitalize p-3 text-black text-sm font-semibold">
                        {{ item.section }}
                    </TabsTrigger>
                </TabsList>
                <TabsContent v-for="(item, index) in hotelDetails" :key="index" :value="item.section" class="p-8 bg-white">
                    <div v-if="item.section === 'rooms'" class="flex flex-col gap-5">
                        <ViewHotelDataRooms />
                        <ViewHotelDataRooms />
                        <ViewHotelDataRooms />
                    </div>
                    <div v-if="item.section === 'about'" class="p-8">
                        <ViewHotelDataAbout />
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    </div>
</template>