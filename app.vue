<script lang="ts" setup>
useHead({
  title: 'Bangalore Today',
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
      content: 'Maximize MCA success with our tailored Financial CRM. Streamline operations, accelerate growth, and build trust with precision.',
    },
    {
      name: 'og:site_name',
      content: 'Bangalore Today',
    },
    {
      name: 'og:url',
      content: 'Bangalore Today',
    },
    {
      name: 'keywords',
      content: 'MCA Financial CRM, Trustworthy MCA solutions, Streamlined MCA operations, Reliable MCA growth tools, Precise MCA CRM, Tailored MCA software, Accelerate MCA success, Boost MCA performance, Efficient MCA management, Customized MCA CRM',
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