<script setup lang="ts">
defineProps({
  data: {
    type: Object,
    required: true,
  },
  fetchMore: {
    type: Function as PropType<(...args: any[]) => void>,
    required: true,
  },

})
const layoutStore = useLayoutStore()
</script>

<template>
  <UContainer>
    <MainGridLayout v-if="layoutStore.isGrid">
      <template v-for="({ name, image, uri }, index) in data?.data?.results" :key="name">
        <BaseCard
          :item="{ name, image, uri }"
        />
        <BasePaginationDivider
          :index="index"
          :data-length="data?.data?.results.length"
          :total-pages="data?.data?.pages"
        />
      </template>
    </MainGridLayout>

    <MainListLayout v-if="!layoutStore.isGrid">
      <template v-for="({ name, image, uri }, index) in data?.data?.results" :key="name">
        <BaseInlineCard
          :item="{ name, image, uri }"
        />
        <BasePaginationDivider
          :index="index"
          :data-length="data?.data?.results.length"
          :total-pages="data?.data?.pages"
        />
      </template>
    </MainListLayout>

    <MainGridLayout v-if="data?.loading && layoutStore.isGrid">
      <BaseSkeletonCard
        :number-ofskeletons="4"
      />
    </MainGridLayout>

    <MainListLayout v-if="data?.loading && !layoutStore.isGrid">
      <BaseSkeletonCard
        :number-ofskeletons="4"
      />
    </MainListLayout>

    <ClientOnly>
      <div class="flex justify-center my-4">
        <UButton @click="fetchMore">
          Load more
        </UButton>
      </div>
    </ClientOnly>
  </UContainer>
</template>
