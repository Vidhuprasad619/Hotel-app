<script setup lang="ts">
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from '@/components/ui/sheet'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const props = defineProps<{
    navItems: { item: string; list: string[] }[]
}>()

</script>

<template>
    <Sheet>
        <SheetTrigger>
            <Icon name="mdi:menu" class="size-7 text-black" />
        </SheetTrigger>
        <SheetContent class="bg-white">
            <SheetClose as-child />
            <div class="justify-center items-center gap-10 mt-5">
                <NuxtLink class="text-base py-4 font-medium hover:underline" to="/">
                    Home
                </NuxtLink>
                <Accordion type="single" collapsible>
                  <AccordionItem v-for="(navItem, index) in props.navItems" :key="index" :value="navItem.item">
                    <AccordionTrigger class="text-base">{{ navItem.item }}</AccordionTrigger>
                    <AccordionContent v-for="(navList, i) in navItem.list">
                      {{ navList }}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
            </div>
        </SheetContent>
    </Sheet>
</template>