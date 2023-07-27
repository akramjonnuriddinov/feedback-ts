<template>
  <div>
    <button
      :type="props.type"
      :class="props.bgColor"
      class="px-6 py-3 text-sm font-bold text-gray-100 cursor-pointer rounded-10"
    >
      {{ props.text }}
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  bgColor: String,
  text: String,
  type: {
    type: undefined
  }
})
</script>
