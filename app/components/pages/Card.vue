<script setup lang="ts">
import { defineProps, ref } from 'vue'

const {
  item,
  isGrid,
} = defineProps({
  item: {
    type: Object,
    required: true,
  },
  isGrid: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <div>
    <UCard>
      <div :class="`flex ${isGrid ? 'justify-center items-center flex-col' : 'items-center justify-between '} space-y-2`">
        <div :class="`flex ${isGrid ? 'flex-col items-center' : 'items-center'} space-x-2`">
          <div>
            <UAvatar
              v-if="!isGrid"
              size="3xl"
              :src="item.image"
              :alt="item.name"
              :ui="{ strategy: 'override', background: 'gray' }"
            />
            <NuxtImg
              v-else
              :src="item.image"
              :alt="item.name"
              width="100"
              height="100"
              :placeholder="[100, 100]"
            />
          </div>
          <div class="capitalize text-md font-medium">
            {{ item.name }}
          </div>
        </div>
        <UButton :to="item.uri">
          See more
        </UButton>
      </div>
    </UCard>
  </div>
</template>

<style>

</style>
