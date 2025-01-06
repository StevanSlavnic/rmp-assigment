<script setup lang="ts">
import { defineProps } from 'vue'

const { loading, isGrid, numberOfskeletons } = defineProps({
  isGrid: {
    type: Boolean,
  },
  loading: {
    type: Boolean,
    required: true,
  },
  numberOfskeletons: {
    type: Number,
  },
})

const defaultNumber = numberOfskeletons || 1
</script>

<template>
  <div v-if="loading" :class="`grid ${isGrid ? 'grid-cols-4' : 'grid-cols-1'} gap-4 my-4`">
    <UCard v-for="i in defaultNumber" :key="i" class="">
      <div class="flex items-center space-x-4">
        <USkeleton v-if="!isGrid" class="h-12 w-12" :ui="{ rounded: 'rounded-full' }" />
        <div class="space-y-2">
          <USkeleton class="h-4 w-[100px]" />
          <USkeleton class="h-4 w-[120px]" />
        </div>
      </div>
    </UCard>
  </div>
</template>
