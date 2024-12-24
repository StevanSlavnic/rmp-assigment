<script setup lang="ts">
const {
  index,
  dataLength,
  totalPages,
} = defineProps({
  index: {
    type: Number,
    required: true,
  },
  dataLength: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <div
    v-if="(index + 1) % 20 === 0 || index + 1 === dataLength"
    class="col-span-full justify-center flex my-4"
  >
    Page {{ (index + 1) / 20 }} of {{ totalPages }}
  </div>
</template>

<style>

</style>
