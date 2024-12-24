<script setup lang="ts">
import { defineProps } from 'vue'

const { data, fetchMore } = defineProps({
  data: {
    type: Object,
    required: true,
  },
  fetchMore: {
    type: Function,
    required: true,
  },
})
</script>

<template>
  <div>
    <div :class="`grid grid-cols-${data.isGrid ? 4 : 1} gap-4`">
      <template v-for="({ name, image, uri }, index) in data.data.results" :key="name">
        <PagesCard
          :item="{ name, image, uri }"
          :is-grid="data.isGrid"
        />
        <ApplicationPaginationDivider
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

    <div class="flex justify-center my-4">
      <UButton @click="fetchMore">
        Load more
      </UButton>
    </div>
  </div>
</template>
