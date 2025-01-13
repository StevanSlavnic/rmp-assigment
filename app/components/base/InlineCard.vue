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
    <div class="flex items-center justify-between space-y-2">
      <div class="flex shrink items-center space-x-2">
        <div>
          <UAvatar
            size="3xl"
            :src="item.image"
            :alt="item.name"
            :ui="{ strategy: 'override', background: 'gray' }"
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
