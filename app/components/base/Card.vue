<script setup lang="ts">
const {
  item,
} = defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <UCard>
    <div class="flex justify-center items-center flex-col space-y-2">
      <div class="flex shrink flex-col items-center space-x-2">
        <div>
          <NuxtImg
            :src="item.image"
            :alt="item.name"
            width="100"
            height="100"
            :placeholder="[100, 100]"
          />
        </div>
        <div class="mt-2 capitalize text-md font-medium">
          {{ item.name }}
        </div>
      </div>
      <UButton :to="item.uri">
        See more
      </UButton>
    </div>
  </UCard>
</template>
