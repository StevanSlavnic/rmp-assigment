<script setup lang="ts">
const layoutStore = useLayoutStore()
const pokemonStore = usePokemonStore()

function fetchMorePokemons() {
  pokemonStore.setOffset(pokemonStore.offset + 20)
}
</script>

<template>
  <div>
    <UContainer>
      <div class="flex my-4 align-middle items-center justify-between">
        <BaseHeadline text="Pokemons" tag="h1" />
        <LayoutSwitcher
          :is-grid="layoutStore.isGrid"
          :set-layout="layoutStore.setLayout"
        />
      </div>
    </UContainer>
    <ItemList :data="pokemonStore" :fetch-more="fetchMorePokemons" />
  </div>
</template>
