<script setup>
const data = ref(null)
const loading = ref('false')
const tableOfContents = ref([]) // Stores the hierarchical table of contents
const activeSection = ref(null) // Track the currently visible section

const route = useRoute()

async function extractTableOfContents() {
  // Wait for the DOM to update with v-html content
  await nextTick()

  // Query and organize <h2> and <h3> elements
  const container = document.querySelector('.content')
  if (container) {
    const headings = container.querySelectorAll('h2, h3')
    const toc = []
    let currentH2 = null

    headings.forEach((heading) => {
      const level = heading.tagName.toLowerCase()
      const text = heading.textContent.trim()
      // Remove special characters and ensure only text-based ID
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
      heading.id = id // Assign the ID to the heading

      if (level === 'h2') {
        currentH2 = { text, id, subHeadings: [] }
        toc.push(currentH2)
      }
      else if (level === 'h3' && currentH2) {
        currentH2.subHeadings.push({ text, id })
      }
      else {
        // If there's no h2, treat h3 as a top-level item
        toc.push({ text, id, subHeadings: [] })
      }
    })

    tableOfContents.value = toc
  }
}

// Smoothly scrolls to the target section and centers it in the viewport.
function scrollToSection(id) {
  const target = document.getElementById(id)
  if (target) {
    const navbarHeight = 105 // Height of the navbar
    const y = target.getBoundingClientRect().top + window.scrollY - navbarHeight
    window.scrollTo({ top: y })
  }
}

// Observer function to track visible headings
function observeSections() {
  const navbarHeight = 90 // Adjust based on actual navbar height
  const offset = 20 // Additional offset below the navbar
  const observerOptions = {
    root: null,
    rootMargin: `-${navbarHeight + offset}px 0px -100% 0px`, // Defines the area between navbar and 20px below it
    threshold: 0, // Trigger as soon as an element enters this area
  }

  const observer = new IntersectionObserver((entries) => {
    const visibleHeadings = []

    entries.forEach((entry) => {
      if (entry.isIntersecting)
        visibleHeadings.push({ id: entry.target.id, top: entry.boundingClientRect.top })
    })

    if (visibleHeadings.length > 0) {
      // Sort by top position to get the first visible heading
      visibleHeadings.sort((a, b) => a.top - b.top)
      activeSection.value = visibleHeadings[0].id // Set only the first heading as active
    }
  }, observerOptions)

  // Observe all h2 and h3 elements inside the .content section
  document.querySelectorAll('.content h2, .content h3').forEach((section) => {
    observer.observe(section)
  })
}

onMounted(async () => {
  loading.value = true
  const { data: blog } = await $fetch(`https://api.iocod.com/api/show-blog/${route.params.title}`, {
    method: 'post',
  })
  data.value = blog
  loading.value = false

  // Extract table of contents once the data is set
  await extractTableOfContents()
  observeSections() // Start observing sections after loading content
})

// Watch for changes in the data and re-extract table of contents if needed
watch(data, async () => {
  await extractTableOfContents()
  observeSections()
})

// Format date helper
function formatDate(dateString) {
  if (!dateString)
    return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const media = [
  {
    link: `https://api.whatsapp.com/send?text=https://in.bangaloretoday.in/hotel/${route.params.title}`,
    icon: 'mdi:whatsapp',
  },
  {
    link: `https://www.facebook.com/sharer/sharer.php?u=https://in.bangaloretoday.in/hotel/${route.params.title}`,
    icon: 'uil:facebook',
  },
  {
    link: `https://www.linkedin.com/shareArticle?mini=true&url=https://in.bangaloretoday.in/hotel/${route.params.title}`,
    icon: 'mdi:linkedin',
  },
  {
    link: `https://twitter.com/intent/tweet?text=Beyond%20the%20Office%3A%20A%20Weekend%20Getaway%20to%20Wayanad&url=https://in.bangaloretoday.in/hotel/${route.params.title}`,
    icon: 'pajamas:twitter',
  },
]
</script>

<template>
  <div class="main-container">
    <div class="max-container">
      <div class="w-full flex flex-col items-center pt-[100px]">
        <div
          v-if="loading"
          class="absolute left-1/2 top-1/2 w-12 aspect-square border-4 border-white rounded-full border-b-secondary animate-spin -translate-x-1/2"
        />
        <div
          v-else
          class="w-full max-w-[1040px] flex flex-col pb-5 gap-4 lg:gap-7 lg:pb-11 px-4 xl:px-0 border-b border-black/20"
        >
          <!-- Breadcrumb -->
          <div class="w-full flex items-center gap-5 pt-[15px] lg:pt-[55px]">
            <NuxtLink to="/blogs" class="cursor-pointer flex items-center">
              <Icon name="lucide:chevron-left" class="w-[30px] text-black" />
            </NuxtLink>
            <div class="text-black text-sm md:text-base font-normal flex items-center">
              Blogs -
              <div class="text-black/60 text-sm md:text-base font-light w-[200px] truncate">
                {{ data?.title }}
              </div>
            </div>
          </div>

          <!-- Title & Meta -->
          <div class="w-full md:mb-5">
            <div class="md:mx-[40px] mb-8 md:mb-[60px]">
              <h1 class="text-black text-2xl md:text-[54px] md:leading-[66px] font-medium py-6 border-b border-black/20">
                {{ data?.title }}
              </h1>
              <div class="flex flex-col md:flex-row justify-between gap-2 pt-6">
                <div class="flex items-center gap-2">
                  <span class="text-black/40 text-sm">Author:</span>
                  <div class="flex items-center gap-1.5">
                    <Icon name="lucide:circle-user-round" size="20" class="text-[#787878]" />
                    <span class="text-black/80 text-base font-medium break-words">{{ data.author_name }}</span>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-black/40 text-sm">Published:</span>
                  <div class="text-black/80 text-base font-medium">
                    {{ formatDate(data.date) }}
                  </div>
                </div>
              </div>
            </div>
            <img
              :src="data?.thumbnail"
              :alt="data?.title"
              loading="lazy"
              class="w-full max-h-[500px] object-cover object-top rounded-lg"
            >
          </div>

          <!-- Content & Sidebar -->
          <div class="flex md:gap-10 lg:gap-20">
            <!-- TOC Sidebar -->
            <div>
              <div class="md:sticky md:top-24 hidden md:flex flex-col gap-8 px-5 py-6 max-w-[280px] h-fit bg-[#514ed8]/5 rounded">
                <div class="flex flex-col gap-4 pb-8 border-b border-black/20">
                  <p class="text-black/40 text-sm">
                    Table of contents:
                  </p>
                  <div
                    v-for="(item, index) in tableOfContents"
                    :key="index"
                    class="flex flex-col gap-4"
                  >
                    <div class="flex gap-2">
                      <div
                        class="p-[5px] rounded-full flex items-center justify-center"
                        :class="activeSection === item.id ? 'bg-[#514ed8]' : 'bg-transparent'"
                      >
                        <Icon name="lucide:move-right" size="10" :class="activeSection === item.id ? 'text-white' : 'text-brand-purple'" />
                      </div>
                      <NuxtLink
                        class="text-black/80 text-base hover:underline"
                        :aria-current="activeSection === item.id ? 'true' : undefined"
                        :class="{ 'underline text-[#514ed8] font-medium': activeSection === item.id }"
                        @click.prevent="scrollToSection(item.id)"
                      >
                        {{ item.text }}
                      </NuxtLink>
                    </div>
                    <div
                      v-for="(subItem, subIndex) in item.subHeadings"
                      :key="subIndex"
                      class="flex gap-2.5"
                    >
                      <div
                        class="p-[5px] rounded-full flex items-center justify-center"
                        :class="activeSection === subItem.id ? 'bg-[#514ed8]' : 'bg-transparent'"
                      >
                        <Icon name="lucide:move-right" size="10" :class="activeSection === subItem.id ? 'text-white' : 'text-brand-purple'" />
                      </div>
                      <NuxtLink
                        class="text-black/70 text-base hover:underline"
                        :aria-current="activeSection === subItem.id ? 'true' : undefined"
                        :class="{ 'underline text-[#514ed8] font-medium': activeSection === subItem.id }"
                        @click.prevent="scrollToSection(subItem.id)"
                      >
                        {{ subItem.text }}
                      </NuxtLink>
                    </div>
                  </div>
                </div>

                <!-- Share -->
                <div class="flex flex-col gap-4 pb-8 border-b border-black/20">
                  <p class="text-black/40 text-sm">
                    Share the article:
                  </p>
                  <div class="flex gap-[18px]">
                    <div
                      v-for="(item, index) in media"
                      :key="index"
                      class="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center"
                    >
                      <NuxtLink :to="item.link" target="_blank">
                        <Icon :name="item.icon" class="text-[#464648]" size="24" />
                      </NuxtLink>
                    </div>
                  </div>
                </div>

                <!-- Author -->
                <div class="flex flex-col gap-4">
                  <p class="text-black/40 text-sm mb-0">
                    Author:
                  </p>
                  <div class="flex items-center gap-2">
                    <Icon name="lucide:circle-user-round" size="20" class="text-[#787878]" />
                    <span class="text-black/80 text-base font-medium">{{ data.author_name }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Main Content -->
            <article
              class="content flex-1 w-full text-black text-left prose prose-truegray"
              v-html="data?.description"
            />
          </div>
        </div>

        <!-- Related Blogs
        <div class="w-full pb-5 pt-5 px-5 xl:px-[74px] xl:pt-[60px] flex flex-col gap-8">
          <div class="flex justify-between items-center">
            <p class="text-black text-xl md:text-3xl lg:text-[40px] font-medium">
              Related Hotels
            </p>
            <NuxtLink
              to="/blogs"
              class="px-3 lg:px-7 py-2 lg:py-[22px] rounded-full border border-[#514ed8] flex items-center gap-2 text-black text-sm md:text-base"
            >
              View All Hotels
              <Icon name="lucide:chevron-right" class="w-[30px] rotate-180 text-black" />
            </NuxtLink>
          </div>
          <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-[60px] bg-white">
            <HotelItems
              v-for="item in data?.related_posts"
              :id="item.id"
              :key="item.id"
              :date="item.date"
              :heading="item.title"
              :content="item.slug"
              :thumbnail="item.thumbnail"
              :url="item.url"
              :author="item.author_name"
              :type="item.category"
            />
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
html,
body,
#__nuxt {
  overflow-x: visible !important;
}
html {
  scroll-behavior: smooth;
}
</style>
