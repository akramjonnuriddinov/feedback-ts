import { defineStore } from 'pinia'
// FIREBASE
import { db } from '@/firebase'
import { collection, onSnapshot } from "firebase/firestore"
// FIREBASE
import router from '@/router'

export const useFeedStore = defineStore('feed', {
  state: () => {
    return {
      feeds: [] as any,
      feedsCollectionRef: collection(db, "feeds"),
      length: 0
    }
  },
  actions: {
    passHome(): void {
      router.push({ name: 'home' })
    },
    async getFeeds() {
      onSnapshot(this.feedsCollectionRef, async (querySnapshot) => {
        this.length = await this.feeds.length
        querySnapshot.forEach(async (doc) => {
          const feed = {
            id: doc.id,
            title: doc.data().title,
            category: doc.data().category,
            detail: doc.data().detail
          } as any

          await this.feeds.push(feed)
          this.length = await this.feeds.length
        })
      })
    }
  }
})
