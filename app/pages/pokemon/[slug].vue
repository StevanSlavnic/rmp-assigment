<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const { data: pokemon } = usePokemonData(`pokemon/${route.params.slug}`)

function goToPrev() {
  router.go(-1)
}
</script>

<template>
  <div>
    <button @click="goToPrev">
      Go back
    </button>

    <!-- <EntityContent :name="`${pokemon.name}`" /> -->
    <div v-bind="pokemon">
      <h1>{{ pokemon?.name }}</h1>
      <img :src="pokemon?.sprites.front_default" :alt="pokemon?.name || 'Pokemon'">
    </div>
  </div>
</template>
