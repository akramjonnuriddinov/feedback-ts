<template>
  <div class="container flex items-start justify-between w-full mx-auto max-w-1110">
    <div class="w-full mr-5 max-w-255">
      <feedback-board class="mb-6" />
      <filter-feedback />
    </div>
    <div class="w-full">
      <the-header class="mb-6" />
      <the-loader class="absolute" v-if="!feedStore.length" />
      <div>
        <have-feedback :feeds="feedStore.feeds" v-if="feedStore.length" />
        <not-feedback v-if="!feedStore.length" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import TheHeader from '@/components/TheHeader.vue'
import FeedbackBoard from '@/components/FeedbackBoard.vue'
import FilterFeedback from '@/components/FilterFeedback.vue'
import NotFeedback from '@/components/NotFeedback.vue'
import HaveFeedback from '@/components/HaveFeedback.vue'
import TheLoader from '@/components/TheLoader.vue'
// FEED-STORE
import { useFeedStore } from '@/stores/feed'

const feedStore = useFeedStore()

onMounted(() => {
  feedStore.getFeeds()
})
</script>
