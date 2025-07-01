<script setup>
const route = useRoute()

const currentPage = ref(1)
const pageCount = ref(1)

const blogsPerPage = 9

const currentPageBlogs = ref([])
const loading = ref('false')

async function fetchBlogs() {
  loading.value = true
  const { data, total_items } = await $fetch(`https://api.iocod.com/api/list-blogs`, {
    method: 'post',
    body: {
      page: currentPage.value,
      per_page: blogsPerPage,
      category: route.query.tab,
    },
  })
  currentPageBlogs.value = data
  pageCount.value = Math.ceil(total_items / blogsPerPage)
  loading.value = false
}

function handlePageUpdate(newPage) {
  currentPage.value = newPage
  fetchBlogs()
}

watch(() => route.query.tab, () => {
  currentPage.value = 1
  fetchBlogs()
}, { immediate: true })
</script>

<template>
  <div class="main-container">
    <div class="max-container">
      <div class="w-full bg-white relative min-h-[200px] flex flex-col items-center">
        <div v-if="loading" class="absolute left-1/2 w-12 my-20 aspect-square border-4 border-white rounded-full border-b-secondary animate-spin -translate-x-1/2" />
        <template v-else>
          <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-[60px] bg-white px-4 md:px-[60px] lg:px-[80px] py-4 md:py-[60px]">
            <HotelItems v-for="item in currentPageBlogs" :id="item.id" :key="item.id" :date="item.date" :heading="item.title" :content="item.slug" :thumbnail="item.thumbnail" :url="item.url" :author="item.author_name" :type="item.category" />
          </div>
          <BasePagination :current-page="currentPage" :page-count="pageCount" @change="handlePageUpdate" />
        </template>
      </div>
    </div>
  </div>
</template>
