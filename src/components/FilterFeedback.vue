<template>
  <div class="p-6 bg-white max-w-255 rounded-10">
    <ul class="flex flex-wrap gap-x-2 gap-y-4">
      <button
        tag="li"
        v-for="category in Categories"
        :key="category"
        class="px-4 rounded-10 py-2.5 text-dark-sky bg-light-blue"
      >
        {{ category }}
      </button>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Categories } from '@/types/constants'
</script>
