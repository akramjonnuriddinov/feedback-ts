<template>
  <div
    class="flex items-center justify-between w-full px-6 py-5 text-white bg-indigo-950 max-w-825 rounded-10"
  >
    <div class="flex items-center">
      <beaker-icon class="mr-4 w-6 h-6" />
      <p class="text-lg font-bold mr-9">6 Suggestions</p>
    </div>
    <router-link :to="{ name: 'createFeedback' }">
      <primary-btn bg-color="bg-primary" text="+ Add Feedback" />
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { BeakerIcon } from '@heroicons/vue/24/solid'
import PrimaryBtn from './PrimaryBtn.vue'
</script>
