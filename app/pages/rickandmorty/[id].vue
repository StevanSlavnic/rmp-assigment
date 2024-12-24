<script setup lang="ts">
const route = useRoute()

const { data: character } = useRickAndMortyData<any>(`character/${route.params.id}`)
</script>

<template>
  <div>
    <div v-bind="character">
      <img :src="character?.image" :alt="character?.name">
      <p>{{ character?.name }}</p>
    </div>
  </div>
</template>
