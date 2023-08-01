import { defineStore } from 'pinia'
// FIREBASE
import { db } from '@/firebase'
import { collection, onSnapshot } from "firebase/firestore"
// FIREBASE
import router from '@/router'

export const useCommentStore = defineStore('comments', {
  state: () => {
    return {
      fbComments: [] as any,
      comments: [] as any,
      commentsCollectionRef: collection(db, "comments"),
      length: 0
    }
  },
  actions: {
    passHome(): void {
      router.push({ name: 'home' })
    },
    async getFeeds() {
      onSnapshot(this.commentsCollectionRef, async (querySnapshot) => {
        this.length = await this.comments.length
        querySnapshot.forEach(async (doc) => {
          const comment = {
            // id: doc.id,
            uniqueId: doc.id,
            detail: doc.data().detail
          } as any

          await this.comments.push(comment)
          this.length = await this.comments.length
        })
      })
    }
  }
})
