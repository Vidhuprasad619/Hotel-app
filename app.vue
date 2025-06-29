<script lang="ts" setup>
useHead({
  title: 'Bangalore Today – Discover, Explore & Experience the City',
  titleTemplate: (title?: string) => `${title}`,
  link: [
    { rel: 'icon', href: '/images/logo/favicon.png' }
  ],

  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content: 'Bangalore Today – Your one-stop destination to find flights, getaways, city life, resorts, restaurants, and much more — all in one simple search.',
    },
    {
      name: 'og:site_name',
      content: 'Bangalore Today – Your one-stop destination to find flights, getaways, city life, resorts, restaurants, and much more — all in one simple search.',
    },
    {
      name: 'og:url',
      content: 'https://in.bangaloretoday.in',
    },
    {
      name: 'keywords',
      content: 'Bangalore, Bangalore Today, Bangalore Flights, Bangalore Getaways, Bangalore City Life, Bangalore Resorts, Bangalore Restaurants, Bangalore Hotels',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style src="@/style/main.css" />