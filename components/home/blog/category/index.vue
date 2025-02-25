<script setup lang="ts">
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'


const blogs = [
    {
        category: 'blog-1',
        card: [
            {
                category: 'blog-1',
                title: 'Live Now: Valentines sale',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: 'https://promos.makemytrip.com/appfest/2x//flash-sale-116x116-14022025.jpg?',
                link: '/',
            },
            {
                category: 'blog-1',
                title: 'Live Now: Valentines sale',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: 'https://promos.makemytrip.com/appfest/2x//flash-sale-116x116-14022025.jpg?',
                link: '/',
            },
            {
                category: 'blog-1',
                title: 'Live Now: Valentines sale',
                description: 'on IndiGo, Air India Express, Akasa Air & Star Air flights.',
                img: 'https://promos.makemytrip.com/appfest/2x//flash-sale-116x116-14022025.jpg?',
                link: '/',
            }
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
            }
        ]
    }
]
</script>

<template>
  <Tabs default-value="account" class="w-full">
    <TabsList class="grid w-full grid-cols-6">
      <TabsTrigger v-for="(blog, index) in blogs" :key="index" :value="blog.category">
        {{ blog.category }}
      </TabsTrigger>
    </TabsList>
    <TabsContent v-for="(blog, index) in blogs" :key="index" :value="blog.category">
        <div class="w-full py-3 flex items-center gap-3 overflow-x-auto">
            <HomeBlogCategoryCard v-for="(card, i) in blog.card" :key="i" 
            :category="card.category"  
            :title="card.title"
            :description="card.description"
            :img="card.img"
            :link="card.link" />
        </div>
    </TabsContent>
  </Tabs>
</template>