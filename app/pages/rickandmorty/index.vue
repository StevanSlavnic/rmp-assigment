<script setup lang="ts">
import type { UseApiDataOptions } from '#build/module/nuxt-api-party'

const store = useRickAndMortyStore()

useRickAndMortyData('character', {
  onRequest: () => {
    store.loading = true
  },
  onResponse: async ({ response }: any) => {
    await store.setRickAndMortyData(response._data)
    store.loading = false
  },
  onRequestError: ({ error }: any) => {
    store.error = error.message
    store.loading = false
  },
  onResponseError: ({ error }: any) => {
    store.error = error.message
    store.loading = false
  },
  query: computed(() => ({
    page: store.page,
  })),
} as UseApiDataOptions<any>)

function fetchMore() {
  store.setPage(store.page + 1)
}
</script>

<template>
  <div>
    <div>
      <h1>Rick and Morty</h1>
    </div>
    <div v-if="store.loading">
      Loading...
    </div>
    <div v-else>
      <div class="grid grid-cols-4 gap-4 px-4">
        <div v-for="{ id, name, image } in store.data.results" :key="name" v-bind="{ id, name, image }">
          <nuxt-link :to="`/rickandmorty/${id}`">
            <p title="name">
              {{ name }} {{ id }}
            </p>

            <img :src="image" alt="{{ name }}">
          </nuxt-link>
        </div>
      </div>
    </div>
    <button @click="fetchMore">
      Load More
    </button>
  </div>
</template>
