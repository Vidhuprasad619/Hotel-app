<script setup lang="ts">

const quickLinks = [
    {
        name: 'Home',
        link: '/'
    }
]
</script>

<template>
    <div class="main-container bg-gray-700">
        <div class="max-container !pb-0 !md:pb-0 !lg:pb-0">
            <div class="pb-4 sm:pb-10 flex flex-col sm:flex-row gap-10 border-b border-white/10">
                <div class="flex-1 space-y-5 md:space-y-12 max-w-[600px]">
                    <div class="space-y-6">
                        <!-- <img src="~/assets/svg/logo-white.svg" alt="logo"> -->
                        <p class="text-white/80 font-normal">
                            Lorem ipsum dolor sit amet consectetur. Odio semper leo viverra tristique. Risus in ac purus
                            vitae lacus sit morbi in tristique amet.
                        </p>
                    </div>
                </div>
                <div class="flex-1 flex flex-col sm:flex-row gap-8 md:gap-[60px] md:justify-end">
                    <div class="space-y-4 w-fit">
                        <h5 class="text-white text-sm md:text-base font-semibold">Quick Links</h5>
                        <div class="grid xl:grid-cols-2 gap-x-6 gap-y-3">
                            <NuxtLink v-for="(item, index) in quickLinks" :key="index" :to="item.link"
                                class="text-white/80 text-sm md:text-base font-normal text-nowrap">{{ item.name }}
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="w-fit">
                        <h5 class="text-white text-sm md:text-base font-semibold mb-4">Contact Us</h5>
                        <NuxtLink to="mailto:info@zipcode.iocod.com"
                            class="text-white/80 text-sm md:text-base font-normal text-nowrap">
                            info@zipcode.iocod.com
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="py-4 md:py-6 text-center text-white/50 text-xs font-light">© 2025 ZIPCode API</div>
        </div>
    </div>
</template>