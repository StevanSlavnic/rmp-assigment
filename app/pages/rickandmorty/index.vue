<script setup lang="ts">
import useDynamicData from '~/composables/useDynamicData'
import { characterDomain } from '~/constants'

const rickAndMortyStore = useRickAndMortyStore()
useDynamicData(characterDomain, rickAndMortyStore)

function fetchMoreCharacters() {
  rickAndMortyStore.setPage(rickAndMortyStore.page + 1)
}
</script>

<template>
  <div>
    <UContainer>
      <div class="flex my-4 align-middle items-center justify-between">
        <BaseHeadline text="Rick and Morty" tag="h1" />
        <ModulesLayoutSwitcher
          :is-grid="rickAndMortyStore.isGrid"
          :set-layout="rickAndMortyStore.setLayout"
        />
      </div>
    </UContainer>

    <ModulesItemList :data="rickAndMortyStore" :fetch-more="fetchMoreCharacters" />
  </div>
</template>
