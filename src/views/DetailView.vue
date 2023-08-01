<template>
  <div class="container py-20 the-container max-w-[825px]">
    <div class="flex items-center justify-between">
      <router-link
        class="flex items-center mb-16 text-sm font-bold text-purple-500"
        :to="{ name: 'home' }"
      >
        <img src="@/assets/images/svg/back-icon.svg" width="8" height="4" alt="" class="mr-4" />
        Go Back
      </router-link>
      <router-link
        :to="{ name: 'home' }"
        class="px-6 py-3 text-sm font-bold text-gray-100 bg-blue-600 rounded-10"
      >
        Edit Feedback
      </router-link>
    </div>
    <div v-for="feed in feeds" :key="feed">
      <div class="flex items-start px-8 mb-5 bg-white py-7 rounded-10">
        <div class="px-2 pt-4 pb-2 mr-10 text-sm font-bold text-indigo-900 bg-gray-50 rounded-10">
          12
        </div>
        <div class="flex flex-col items-start">
          <h2 class="mb-1 text-lg font-bold text-indigo-900">{{ feed.title }}</h2>
          <p>{{ feed.detail }}</p>
          <span
            class="text-blue-600 bg-blue-50 mt-3 rounded-10 flex items-center justify-center font-semibold px-4 py-1.5"
            >{{ feed.category }}
          </span>
        </div>
        <div class="flex ml-auto">
          <img src="@/assets/images/svg/comment-icon.svg" width="18" height="16" alt="" />
          <span class="ml-2 text-base font-bold text-indigo-900">2</span>
        </div>
      </div>
    </div>

    <have-comment />
    <create-comment title="Add Comment" placeholder="Type your comment here" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useFeedStore } from '@/stores/feed'
import HaveComment from '@/components/HaveComment.vue'
import CreateComment from '@/components/CreateComment.vue'
import { onSnapshot } from 'firebase/firestore'

const feedStore = useFeedStore()
const route = useRoute()

const getFeeds = async () => {
  await onSnapshot(feedStore.feedsCollectionRef, async (querySnapshot) => {
    feedStore.feeds = []
    feedStore.length = await feedStore.feeds.length
    querySnapshot.forEach(async (doc) => {
      const feed = {
        id: doc.id,
        title: doc.data().title,
        category: doc.data().category,
        detail: doc.data().detail
      } as any

      await feedStore.feeds.push(feed)
      feedStore.length = await feedStore.feeds.length
    })
  })
}

onMounted(async () => {
  await getFeeds()
})

const feeds = computed(() => {
  return feedStore.feeds.filter((item: any) => item.id === route.params.id)
})
</script>
