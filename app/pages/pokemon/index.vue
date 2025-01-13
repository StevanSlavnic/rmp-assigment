<script setup lang="ts">
import useDynamicData from '~/composables/useDynamicData'
import { pokemonDomain } from '~/constants'

const pokemonStore = usePokemonStore()
const layoutStore = useLayoutStore()
useDynamicData(pokemonDomain, pokemonStore)

function fetchMorePokemons() {
  pokemonStore.setOffset(pokemonStore.offset + 20)
}
</script>

<template>
  <div>
    <UContainer>
      <div class="flex my-4 align-middle items-center justify-between">
        <BaseHeadline text="Pokemons" tag="h1" />
        <MainLayoutSwitcher
          :is-grid="layoutStore.isGrid"
          :set-layout="layoutStore.setLayout"
        />
      </div>
    </UContainer>

    <div v-if="pokemonStore.error" class="text-red-500 text-center">
      {{ pokemonStore.error }}
    </div>

    <MainItemList :data="pokemonStore" :fetch-more="fetchMorePokemons" />
  </div>
</template>
