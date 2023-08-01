<template>
  <div class="pt-6 pb-8 pr-8 bg-white rounded-10 pl-7.5">
    <h2 class="w-full mb-6 text-lg font-bold text-indigo-900 truncate max-w-600">
      {{ props.title }}
    </h2>
    <input
      v-model="comment"
      :placeholder="props.placeholder"
      type="text"
      id="title"
      class="block w-full px-6 pt-4 mb-4 text-gray-900 bg-gray-100 rounded-md pb-11 sm:text-md focus:ring-blue-500 outline-indigo-900 focus:border-blue-500"
    />

    <div class="flex items-center justify-between">
      <p class="text-[#647196]">250 Characters left</p>
      <button
        @click="postComment"
        type="submit"
        class="px-6 py-3 text-sm font-bold text-gray-100 bg-primary rounded-10"
      >
        Post Comment
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { db } from '@/firebase'
import { collection, addDoc } from 'firebase/firestore'

const commentsCollectionRef = collection(db, 'comments')

const route = useRoute()
console.log(route.params.id)

const props = defineProps({
  title: String,
  placeholder: String
})

const comment = ref('')

const postComment = () => {
  addDoc(commentsCollectionRef, {
    detail: comment.value,
    isOpen: false
  })
  comment.value = ''
}
</script>
