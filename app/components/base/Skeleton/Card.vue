<script setup lang="ts">
const { numberOfskeletons } = defineProps({
  numberOfskeletons: {
    type: Number,
  },
})

const defaultNumber = numberOfskeletons || 1
</script>

<template>
  <UCard v-for="i in defaultNumber" :key="i" class="">
    <div class="flex items-center space-x-4">
      <div class="space-y-2">
        <USkeleton class="h-4 w-[100px]" />
        <USkeleton class="h-4 w-[120px]" />
      </div>
    </div>
  </UCard>
</template>
