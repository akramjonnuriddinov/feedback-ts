<template>
  <div class="pt-6 pb-8 mb-6 pr-8 bg-white rounded-10 pl-7.5">
    <h2 class="w-full text-lg font-bold text-indigo-900 truncate max-w-600">
      {{ commentsLen }} Comments
    </h2>
    <div
      v-for="(comment, index) in comments"
      :key="index"
      class="flex items-center pt-8 pb-8 border-b"
    >
      <img
        class="self-start mr-8 border-2 rounded-full"
        :src="`https://avatars.dicebear.com/api/avataaars/${1}.svg`"
        alt=""
        width="40"
        height="40"
      />
      <div class="w-full">
        <div class="flex items-center justify-between w-full mb-4">
          <h3 class="flex flex-col text-sm">
            <span class="font-bold text-indigo-900">{{ authStore.currentUser.email }}</span>
          </h3>
          <button
            @click="openNestedComment(comment.uniqueId)"
            class="font-semibold text-blue-600 rounded-10"
          >
            Reply
          </button>
        </div>
        <p>{{ comment.detail }}</p>
        <nested-comment v-if="false" />
        <create-comment v-if="comment.isOpen" placeholder="Type your nested comment here" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import NestedComment from './NestedComment.vue'
import CreateComment from '@/components/CreateComment.vue'
import { onSnapshot } from 'firebase/firestore'
import { useCommentStore } from '@/stores/comments'
import { useAuthStore } from '@/stores/auth'
import { useRoute } from 'vue-router'

const authStore = useAuthStore()
const route = useRoute()

const commentStore = useCommentStore()

const getComments = () => {
  onSnapshot(commentStore.commentsCollectionRef, async (querySnapshot) => {
    commentStore.length = await commentStore.comments.length
    commentStore.comments = []
    commentStore.fbComments = []
    querySnapshot.forEach(async (doc) => {
      const comment = {
        uniqueId: doc.id,
        detail: doc.data().detail,
        isOpen: doc.data().isOpen,
        id: doc.data().id
      } as any

      await commentStore.comments.push(comment)
      await commentStore.fbComments.push(comment)
      commentStore.length = await commentStore.comments.length
    })
  })
}

onMounted(() => {
  commentStore.comments = commentStore.fbComments.filter((item: any) => item.id == route.params.id)
  commentStore.comments.forEach((item: any) => {
    item.isOpen = false
  })
  getComments()
})

const comments = computed(() => {
  return commentStore.fbComments.filter((item: any) => item.id == route.params.id)
})
const commentsLen = computed(() => {
  return commentStore.fbComments.filter((item: any) => item.id == route.params.id).length
})

const openNestedComment = (id: String) => {
  commentStore.comments.forEach((item: any) => {
    if (item.uniqueId == id) {
      item.isOpen = !item.isOpen
    }
  })
}
</script>
