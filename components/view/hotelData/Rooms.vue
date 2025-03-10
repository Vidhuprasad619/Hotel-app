<template>
    <div class="pt-2.5 border-t border-gray-100 flex gap-4 first:pt-0 first:border-none">
        <div class="flex flex-col justify-center">
            <h6 class="text-black mb-2.5 capitalize font-medium">Deluxe Room</h6>
            <img src="/images/hotels/hotel1/three.webp" class="w-[137px] h-[91px]" alt="image">
        </div>
        <div class="p-4 flex gap-8">
            <div>
                <h6 class="text-black mb-2.5 capitalize font-medium">Amenities</h6>
                <ul class="flex flex-col gap-2">
                    <li class="flex items-center gap-2">
                        <Icon name="mdi:bed-king-outline" size="20" />
                        <p class="text-sm leading-7 capitalize">king/twin</p>
                    </li>
                    <li class="flex items-center gap-2">
                        <Icon name="mdi:shower-head" size="20" />
                        <p class="text-sm leading-7 capitalize">Shower</p>
                    </li>
                    <li class="flex items-center gap-2">
                        <Icon name="mdi:television" size="20" />
                        <p class="text-sm leading-7 capitalize">LCD TV</p>
                    </li>
                    <li class="flex items-center gap-2">
                        <Icon name="mdi:sofa-outline" size="20" />
                        <p class="text-sm leading-7 capitalize">Couch</p>
                    </li>
                </ul>
            </div>
            <div>
                <h6 class="text-black mb-2.5 capitalize font-medium">Inclusion</h6>
                <ul class="flex flex-col gap-2">
                    <li class="flex items-center gap-2">
                        <Icon name="mdi:check" size="20" />
                        <p class="text-sm leading-7 capitalize">Wi-Fi</p>
                    </li>
                    <li class="flex items-center gap-2">
                        <Icon name="mdi:check" size="20" />
                        <p class="text-sm leading-7 capitalize">breakfast</p>
                    </li>
                    <li class="flex items-center gap-2">
                        <Icon name="mdi:check" size="20" />
                        <p class="text-sm leading-7 capitalize">non refundable</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex flex-col justify-center items-end">
            <p class="line-through text-sm mb-1">$1250</p>
            <h4 class="font-medium">$1000</h4>
            <p class="text-sm mb-1">per night</p>
            <Button class="mt-2 px-4 py-2 bg-red-600 text-white border border-red-600 hover:text-red-600 hover:bg-white">
                Book Now
            </Button>
        </div>
    </div>
</template>