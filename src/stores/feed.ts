import { defineStore } from 'pinia'
// FIREBASE
import { db } from '@/firebase'
import { collection } from "firebase/firestore"
// FIREBASE
import router from '@/router'

export const useFeedStore = defineStore('feed', {
  state: () => {
    return {
      fbFeeds: [] as any,
      feeds: [] as any,
      feedsCollectionRef: collection(db, "feeds"),
      length: 0
    }
  },
  actions: {
    passHome(): void {
      router.push({ name: 'home' })
    }
  }

})
