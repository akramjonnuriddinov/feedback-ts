<template>
  <div class="p-6 bg-white max-w-255 rounded-10">
    <ul class="flex flex-wrap gap-x-2 gap-y-4">
      <button
        @click="filterFeed(category, index)"
        :class="{ 'bg-indigo-900 text-white': isActive[index], 'bg-light-blue': !isActive[index] }"
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
const fbFeeds = feedStore.feeds
const isActive = ref<any>([])

isActive.value.ALL = true
const filterFeed = (id: String, index: any) => {
  isActive.value = []
  feedStore.feeds = fbFeeds.filter((item: any) => item.category == id)
  isActive.value[index] = !isActive.value[index]
}
</script>
