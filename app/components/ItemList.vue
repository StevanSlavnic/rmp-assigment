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
    <GridLayout v-if="layoutStore.isGrid">
      <template v-for="({ name, image, uri }, index) in data?.data?.results" :key="name">
        <Card
          :item="{ name, image, uri }"
        />
        <PaginationDivider
          :index="index"
          :data-length="data?.data?.results.length"
          :total-pages="data?.data?.pages"
        />
      </template>
    </GridLayout>

    <ListLayout v-if="!layoutStore.isGrid">
      <template v-for="({ name, image, uri }, index) in data?.data?.results" :key="name">
        <InlineCard
          :item="{ name, image, uri }"
        />
        <PaginationDivider
          :index="index"
          :data-length="data?.data?.results.length"
          :total-pages="data?.data?.pages"
        />
      </template>
    </ListLayout>

    <GridLayout v-if="data?.loading && layoutStore.isGrid">
      <BaseSkeletonCard
        :number-ofskeletons="4"
      />
    </GridLayout>

    <ListLayout v-if="data?.loading && !layoutStore.isGrid">
      <BaseSkeletonCard
        :number-ofskeletons="4"
      />
    </ListLayout>

    <ClientOnly>
      <div class="flex justify-center my-4">
        <UButton @click="fetchMore">
          Load more
        </UButton>
      </div>
    </ClientOnly>
  </UContainer>
</template>
