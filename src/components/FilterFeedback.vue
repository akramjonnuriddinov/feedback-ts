<template>
  <div class="p-6 bg-white max-w-255 rounded-10">
    <ul class="flex flex-wrap gap-x-2 gap-y-4">
      <button
        @click="showAll"
        tag="li"
        :class="{ 'bg-indigo-600 text-white': allActive, 'bg-light-blue': !allActive }"
        class="px-4 rounded-10 py-2.5 text-dark-sky"
      >
        ALL
      </button>
      <button
        @click="filterFeed(category, index)"
        :class="{ 'bg-indigo-600 text-white': isActive[index], 'bg-light-blue': !isActive[index] }"
        tag="li"
        v-for="(category, index) in Categories"
        :key="category"
        class="px-4 rounded-10 py-2.5 text-dark-sky"
      >
        {{ category }}
      </button>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Categories } from '@/types/constants'
import { useFeedStore } from '@/stores/feed'

const feedStore = useFeedStore()

const isActive = ref<any>([])
const allActive = ref(true)

isActive.value.ALL = true
const filterFeed = (id: String, index: any) => {
  isActive.value = []
  feedStore.feeds = feedStore.fbFeeds.filter((item: any) => item.category == id)
  isActive.value[index] = !isActive.value[index]
  allActive.value = false
}

const showAll = () => {
  feedStore.feeds = feedStore.fbFeeds
  allActive.value = true
  isActive.value = []
}
</script>
