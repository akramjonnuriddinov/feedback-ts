<script setup lang="ts">
import PrimaryBtn from '@/components/PrimaryBtn.vue'
</script>

<template>
  <div class="flex flex-col items-center bg-white py-28 rounded-10">
    <img src="@/assets/images/png/no-feed.png" width="130" height="136" alt="" class="mb-15" />
    <h2 class="mb-4 text-2xl font-bold text-indigo-950">There is no feedback yet.</h2>
    <p class="mb-12 text-indigo-800 max-w-410">
      Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to
      improve our app.
    </p>
    <primary-btn text="+ Add Feedback" bg-color="bg-primary" />
  </div>
</template>
