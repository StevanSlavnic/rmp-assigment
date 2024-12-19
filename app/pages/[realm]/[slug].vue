<script setup lang="ts">
const route = useRoute()
console.log('route :', route)

const { data: pokemon } = usePokemonData(`pokemon/${route.params.slug}`)
</script>

<template>
  <div v-bind="pokemon">
    <h1>{{ pokemon?.name }}</h1>
    <img :src="pokemon?.sprites.front_default" :alt="pokemon?.name || 'Pokemon'">
  </div>
</template>
