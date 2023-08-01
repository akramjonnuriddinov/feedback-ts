<template>
  <div class="bg-white pr-8-ml-6 rounded-10">
    <div class="flex items-center pt-8 pb-8">
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
            <span class="font-bold text-indigo-900">{{ generate() }}</span>
            <span class="w-32 overflow-hidden whitespace-nowrap">@{{ generate() }}</span>
          </h3>
          <button class="font-semibold text-blue-600 rounded-10">Reply</button>
        </div>
        <p>
          {{ 'comment.detail' }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { generate } from '@/composables/random'
</script>
