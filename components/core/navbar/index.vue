<script setup lang="ts">
import { ChevronDown, ChevronRight, Menu } from 'lucide-vue-next'
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

// Mobile sidebar state
const isSidebarOpen = ref(false)

// Desktop dropdown states
const activeDropdown = ref<string | null>(null)

// Mobile dropdown states
const openMobileDropdowns = ref<Set<string>>(new Set())

// Navigation data
const navItems = [
  {
    title: 'Services',
    items: [
      { title: 'Hotels', href: '/hotels' },
      { title: 'Mobile Apps', href: '/services/mobile-apps' },
      { title: 'UI/UX Design', href: '/services/ui-ux-design' },
      { title: 'Consulting', href: '/services/consulting' },
    ],
  },
  {
    title: 'Products',
    items: [
      { title: 'SaaS Platform', href: '/products/saas-platform' },
      { title: 'E-commerce Solution', href: '/products/ecommerce' },
      { title: 'Analytics Tool', href: '/products/analytics' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { title: 'Documentation', href: '/resources/docs' },
      { title: 'Blog', href: '/resources/blog' },
      { title: 'Tutorials', href: '/resources/tutorials' },
      { title: 'Support', href: '/resources/support' },
    ],
  },
]

// Desktop dropdown functions
const dropdownTimeout = ref<NodeJS.Timeout | null>(null)

function showDropdown(title: string) {
  if (dropdownTimeout.value) {
    clearTimeout(dropdownTimeout.value)
    dropdownTimeout.value = null
  }
  activeDropdown.value = title
}

function hideDropdown() {
  dropdownTimeout.value = setTimeout(() => {
    activeDropdown.value = null
  }, 150) // 150ms delay before closing
}

function cancelHideDropdown() {
  if (dropdownTimeout.value) {
    clearTimeout(dropdownTimeout.value)
    dropdownTimeout.value = null
  }
}

// Mobile dropdown functions
function toggleMobileDropdown(title: string) {
  if (openMobileDropdowns.value.has(title)) {
    openMobileDropdowns.value.delete(title)
  }
  else {
    openMobileDropdowns.value.add(title)
  }
}

// Close sidebar
function closeSidebar() {
  isSidebarOpen.value = false
}
</script>

<template>
  <nav class="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
    <div class="container mx-auto flex h-16 items-center justify-between px-4">
      <!-- Brand Logo -->
      <div class="flex items-center">
        <NuxtLink to="/" class="flex items-center">
          <img
            src="/images/logo/logo.png"
            alt="Brand Logo"
            class="h-14 w-auto"
          >
        </NuxtLink>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        <!-- Home Link -->
        <NuxtLink
          to="/"
          class="text-sm font-medium transition-colors hover:text-white hover:bg-blue-600 px-3 py-2 rounded-md"
        >
          Home
        </NuxtLink>

        <!-- Dropdown Items -->
        <div
          v-for="navItem in navItems"
          :key="navItem.title"
          class="relative"
          @mouseenter="showDropdown(navItem.title)"
          @mouseleave="hideDropdown"
        >
          <Button
            variant="ghost"
            class="h-auto p-0 px-3 py-2 text-sm font-medium rounded-md transition-colors"
            @click="showDropdown(navItem.title)"
          >
            {{ navItem.title }}
            <ChevronDown
              class="ml-1 h-4 w-4 transition-transform duration-200"
              :class="{ 'rotate-180': activeDropdown === navItem.title }"
            />
          </Button>

          <!-- Dropdown Menu -->
          <div
            v-show="activeDropdown === navItem.title"
            class="absolute top-full left-0 mt-1 w-56 rounded-md border bg-white p-1 shadow-md"
            @mouseenter="cancelHideDropdown"
            @mouseleave="hideDropdown"
          >
            <NuxtLink
              v-for="item in navItem.items"
              :key="item.title"
              :to="item.href"
              class="block select-none rounded-sm px-3 py-2 text-sm outline-none transition-colors hover:bg-blue-100 hover:text-blue-700"
            >
              {{ item.title }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <Sheet v-model:open="isSidebarOpen">
          <SheetTrigger as-child>
            <Button variant="ghost" size="icon">
              <Menu class="h-5 w-5" />
              <span class="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" class="w-[300px] sm:w-[350px]">
            <SheetHeader>
              <SheetTitle class="text-left">
                <img
                  src="https://via.placeholder.com/120x40/6366f1/ffffff?text=BRAND"
                  alt="Brand Logo"
                  class="h-8 w-auto"
                >
              </SheetTitle>
            </SheetHeader>

            <div class="mt-6 space-y-1">
              <!-- Home Link -->
              <NuxtLink
                to="/"
                class="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-blue-100 hover:text-blue-700"
                @click="closeSidebar"
              >
                Home
              </NuxtLink>

              <!-- Mobile Dropdown Items -->
              <div v-for="navItem in navItems" :key="navItem.title">
                <Button
                  variant="ghost"
                  class="w-full justify-between h-auto p-3 font-medium"
                  @click="toggleMobileDropdown(navItem.title)"
                >
                  {{ navItem.title }}
                  <ChevronRight
                    class="h-4 w-4 transition-transform duration-200"
                    :class="{ 'rotate-90': openMobileDropdowns.has(navItem.title) }"
                  />
                </Button>

                <!-- Mobile Dropdown Content -->
                <div
                  v-show="openMobileDropdowns.has(navItem.title)"
                  class="ml-4 space-y-1"
                >
                  <NuxtLink
                    v-for="item in navItem.items"
                    :key="item.title"
                    :to="item.href"
                    class="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-blue-100 hover:text-blue-700"
                    @click="closeSidebar"
                  >
                    {{ item.title }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Custom dropdown animation */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease-in-out;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
