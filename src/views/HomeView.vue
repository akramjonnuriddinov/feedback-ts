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
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import TheHeader from '@/components/TheHeader.vue'
import FeedbackBoard from '@/components/FeedbackBoard.vue'
import FilterFeedback from '@/components/FilterFeedback.vue'
import NotFeedback from '@/components/NotFeedback.vue'
import HaveFeedback from '@/components/HaveFeedback.vue'
import TheLoader from '@/components/TheLoader.vue'
import { useFeedStore } from '@/stores/feed'
import { onMounted } from 'vue'
import { onSnapshot, query, orderBy } from 'firebase/firestore'
import { useAuthStore } from '@/stores/auth'

const feedStore = useFeedStore()
const authStore = useAuthStore()

const feedsCollectionQuery = query(feedStore.feedsCollectionRef, orderBy('date', 'desc'))

const getFeeds = () => {
  onSnapshot(feedsCollectionQuery, async (querySnapshot) => {
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

onMounted(() => {
  getFeeds()
})
onMounted(() => {
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      authStore.currentUser = user
      authStore.isLoggedIn = true
    } else {
      console.log('user is singed out')
    }
  })
})
</script>
