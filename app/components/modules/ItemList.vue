<script setup lang="ts">
defineProps({
  data: {
    type: Object,
    required: true,
  },
  error: {
    type: Object,
    required: false,
  },
  fetchMore: {
    type: Function as PropType<(...args: any[]) => void>,
    required: true,
  },
})
</script>

<template>
  <UContainer>
    <div :class="`grid ${data.isGrid ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4' : ' grid-cols-1'} gap-4`">
      <template v-for="({ name, image, uri }, index) in data.data.results" :key="name">
        <PagesCard
          :item="{ name, image, uri }"
          :is-grid="data.isGrid"
        />
        <UIPaginationDivider
          :index="index"
          :data-length="data.data.results.length"
          :total-pages="data.data.pages"
        />
      </template>
    </div>

    <UtilitiesSkeletonCard
      :number-ofskeletons="4"
      :loading="data.loading"
      :is-grid="data.isGrid"
    />

    <div v-if="!data.loading" class="flex justify-center my-4">
      <UButton @click="fetchMore">
        Load more
      </UButton>
    </div>
  </UContainer>
</template>
