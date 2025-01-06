<script setup lang="ts">
import useDynamicData from '~/composables/useDynamicData'

const pokemonStore = usePokemonStore()
useDynamicData('pokemon', pokemonStore)

function fetchMorePokemons() {
  pokemonStore.setOffset(pokemonStore.offset + 20)
}
</script>

<template>
  <div>
    <UContainer>
      <div class="flex my-4 align-middle items-center justify-between">
        <BaseHeadline text="Pokemons" tag="h1" />
        <ModulesLayoutSwitcher
          :is-grid="pokemonStore.isGrid"
          :set-layout="pokemonStore.setLayout"
        />
      </div>
    </UContainer>

    <ModulesItemList :data="pokemonStore" :fetch-more="fetchMorePokemons" />
  </div>
</template>
