<script setup lang="ts">
import type { display } from 'virtual:nuxt-pwa-configuration'

const pokemonStore = usePokemonStore()
const mainStore = useMainStore()
useFetchPokemons()

function fetchMorePokemons() {
  pokemonStore.setOffset(pokemonStore.offset + 20)
}
</script>

<template>
  <div class="mx-4">
    <div class="flex my-4 align-middle items-center justify-between">
      <div>
        <h1>Pokemons</h1>
      </div>

      <div class="flex space-x-4 align-middle items-center">
        <div>
          Display:
        </div>
        <UButton icon="i-heroicons-squares-2x2" :disabled="mainStore.isGrid" @click="mainStore.setLayout(!mainStore.isGrid)">
          Grid
        </UButton>
        <UButton icon="i-heroicons-list-bullet" :disabled="!mainStore.isGrid" @click="mainStore.setLayout(!mainStore.isGrid)">
          List
        </UButton>
      </div>
    </div>

    <div :class="`grid grid-cols-${mainStore.isGrid ? 4 : 1} gap-4`">
      <template v-for="({ name, image, uri }, index) in pokemonStore.data.results" :key="name">
        <UCard>
          <div>
            <div>
              <UAvatar
                v-if="!mainStore.isGrid"
                size="3xl"
                :src="image"
                :alt="name"
              />
              <NuxtImg v-else :modifiers="{ roundCorner: '0:100' }" :src="image" alt="{{ name }}" width="100" height="100" :placeholder="[50, 25]" />
            </div>
            <div class="capitalize text-md font-medium">
              {{ name }}
            </div>
            <div>
              <UButton :to="uri">
                View
              </UButton>
            </div>
          </div>
        </UCard>

        <div
          v-if="(index + 1) % 20 === 0 || index + 1 === pokemonStore.data.results.length"
          class="col-span-full justify-self-end"
        >
          Page {{ (index + 1) / 20 }} of {{ pokemonStore.data.pages }}
        </div>
      </template>
    </div>

    <UCard v-if="pokemonStore.loading" class="my-4">
      <div class="flex items-center space-x-4">
        <USkeleton class="h-12 w-12" :ui="{ rounded: 'rounded-full' }" />
        <div class="space-y-2">
          <USkeleton class="h-4 w-[250px]" />
          <USkeleton class="h-4 w-[200px]" />
        </div>
      </div>
    </UCard>

    <div class="flex justify-center my-4">
      <UButton @click="fetchMorePokemons">
        Load more
      </UButton>
    </div>
  </div>
</template>
