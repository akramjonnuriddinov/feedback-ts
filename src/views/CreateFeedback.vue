<template>
  <div class="the-container max-w-540">
    <router-link
      class="flex items-center mb-16 text-sm font-bold text-purple-500"
      :to="{ name: 'home' }"
    >
      <img src="@/assets/images/svg/back-icon.svg" width="8" height="4" class="mr-4" />
      Go Back
    </router-link>

    <!-- CREATE NEW FEEDBACK -->
    <div class="relative px-10 py-12 text-indigo-900 bg-white max-w-540 rounded-10">
      <span
        class="absolute top-0 flex items-center justify-center p-5 text-3xl font-semibold text-white -translate-y-1/2 rounded-full bg-board-bg left-10 w-14 h-14"
      >
        +
      </span>
      <div class="pt-4">
        <h2 class="mb-10 text-2xl font-bold">Create New Feedback</h2>
        <form @submit.prevent="setFeed">
          <div class="mb-6">
            <label for="title" class="block mb-4 text-sm font-medium text-gray-900">
              <h3 class="text-sm font-bold leading-5 text-indigo-900">Feedback Title</h3>
              <p class="text-[#647196]">Add a short, descriptive headline</p>
            </label>
            <input
              v-model="newFeed.title"
              type="text"
              id="title"
              class="block w-full p-4 text-gray-900 bg-gray-100 rounded-md sm:text-md focus:ring-blue-500 outline-indigo-900 focus:border-blue-500"
            />
          </div>
          <div class="mb-6">
            <label for="categories" class="block mb-4 text-sm font-medium text-gray-900">
              <h3 class="text-sm font-bold leading-5 text-indigo-900">Category</h3>
              <p class="text-[#647196]">Choose a category for your feedback</p>
            </label>
            <select
              v-model="newFeed.categories"
              id="categories"
              class="block w-full px-6 py-3 text-sm text-indigo-900 bg-gray-100 border border-gray-300 rounded-lg outline-indigo-900 focus:ring-blue-500 focus:border-blue-500"
            >
              <option disabled selected>All</option>
              <option selected v-for="category in Categories" :key="category">
                {{ category }}
              </option>
            </select>
          </div>
          <div class="mb-6">
            <label for="detail" class="block mb-4 text-sm font-medium text-gray-900">
              <h3 class="text-sm font-bold leading-5 text-indigo-900">Feedback Detail</h3>
              <p class="text-[#647196]">
                Include any specific comments on what should be improved, added, etc.
              </p>
            </label>
            <textarea
              v-model="newFeed.detail"
              type="text"
              id="detail"
              class="block w-full p-4 text-gray-900 bg-gray-100 rounded-md min-h-96 sm:text-md outline-indigo-900"
            ></textarea>
          </div>

          <div class="flex justify-end">
            <primary-btn class="mr-4" bg-color="bg-indigo-900" text="Cancel" />
            <primary-btn :type="buttonType.buttonType" bg-color="bg-primary" text="Add Feedback" />
          </div>
        </form>
      </div>
    </div>
    <!-- CREATE NEW FEEDBACK -->
  </div>
</template>

<script setup lang="ts">
import { Categories } from '@/types/constants'
import type { NewFeed } from '@/types/types'
// FIREBASE
import { addDoc } from 'firebase/firestore'
// FIREBASE
import { ref, reactive } from 'vue'
import type { ButtonType } from '@/types/types'
import { btn } from '@/types/constants'
import PrimaryBtn from '@/components/PrimaryBtn.vue'
import { useFeedStore } from '@/stores/feed'

const feedStore = useFeedStore()

const newFeed = reactive<NewFeed>({
  id: '',
  title: '',
  categories: Categories.FEATURE,
  detail: ''
})

const buttonType = ref<ButtonType>({
  buttonType: btn.SUBMIT
})

const setFeed = async () => {
  await addDoc(feedStore.feedsCollectionRef, {
    title: newFeed.title,
    category: newFeed.categories,
    detail: newFeed.detail,
    date: Date.now()
  })
  feedStore.passHome()
}
</script>
