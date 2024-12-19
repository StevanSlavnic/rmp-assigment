<script setup lang="ts">
import type { UseApiDataOptions } from '#build/module/nuxt-api-party'

interface Pokemon {
  id: number
  name: string
  image: string
  uri: string
}
const store = usePokemonStore()

usePokemonData('pokemon', {
  onRequest: () => {
    store.loading = true
  },
  onResponse: async ({ response }: any) => {
    await store.setPokemons(response._data)
    store.loading = false
  },
  onRequestError: ({ error }: any) => {
    store.setError(error)
    store.loading = false

    console.error(error)
  },
  onResponseError: ({ error }: any) => {
    store.error = error.message
    store.loading = false
  },
  query: computed(() => ({
    offset: store.offset,
  })),
} as UseApiDataOptions<any>)

function fetchMorePokemons() {
  store.setOffset(store.offset + 20)
}
</script>

<template>
  <div>
    <div>
      <h1>Pokemons</h1>
    </div>
    <div v-if="store.loading">
      Loading...
    </div>
    <div v-else>
      <div class="grid grid-cols-4 gap-4 px-4">
        <div v-for="{ id, name, image } in store.data.results" :key="name">
          <nuxt-link :to="`pokemon/${name}`">
            <p>{{ name }} {{ id }}</p>
            <img :src="image" alt="{{ name }}">
          </nuxt-link>
        </div>
      </div>
    </div>

    <button @click="fetchMorePokemons">
      Load More
    </button>
  </div>
</template>
