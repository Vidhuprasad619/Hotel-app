<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const navItems = [
    {
        item: 'Travel Package',
        list: ['Bangalore to Ooty', 'Bangalore to Gokarna', 'Bangalore to Tirupati', 'Bangalore to Rameshwaram']
    },
    {
        item: 'Flights',
        list: ['list 1', 'list 2', 'list 3', 'list 4']
    },
    {
        item: 'City Guide',
        list: ['list 1', 'list 2', 'list 3', 'list 4']
    },
    {
        item: 'Places to Visit',
        list: ['list 1', 'list 2', 'list 3', 'list 4']
    },
]
</script>

<template>
    <div class="w-[100vw] p-4 px-5 md:px-14 lg:px-20 md:py-5 bg-white shadow-[0px_4px_24px_0px_rgba(110,68,255,0.06)] border-b border-black/10 justify-between items-center flex min-h-[71px] overflow-hidden">
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGoogle_logo&psig=AOvVaw3MhNyIVhLXJ9IPG1KGcg_b&ust=1738778327608000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwiJmuCVzKqLAxVge2wGHZQCEbMQjRx6BAgAEBk" class="h-8 w-fit" alt="logo" />
        <div class="justify-center items-center gap-10 hidden lg:flex">
            <NuxtLink to="/">
                Home
            </NuxtLink>
            <DropdownMenu v-for="(navItem, index) in navItems" :key="index">
                <DropdownMenuTrigger>
                    {{ navItem.item }}
                </DropdownMenuTrigger>
                <DropdownMenuContent class="bg-white">
                  <DropdownMenuItem v-for="(navList, i) in navItem.list" :key="i">
                    {{ navList }}
                </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
        <div class="lg:hidden ml-2 mt-2">
            <CoreNavbarSidebar :nav-items="navItems" />
        </div>
    </div>
</template>