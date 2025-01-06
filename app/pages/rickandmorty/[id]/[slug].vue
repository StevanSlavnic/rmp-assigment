<script setup lang="ts">
import { characterDomain } from '~/../app/constants/index'

const route = useRoute()

const { data: character, status } = useRickAndMortyData<any>(`${characterDomain}/${(route.params as { id: string }).id}`)

const characterDetails = computed(() => ([
  { headline: 'General', data: [
    { name: `Gender: ${character.value?.gender}` },
    { name: `Species: ${character.value?.species}` },
    { name: `Status: ${character.value?.status}` },
  ] },
]))
</script>

<template>
  <div class="my-6">
    <UContainer>
      <UtilitiesSkeletonCard :number-ofskeletons="1" :loading="status === 'pending'" />

      <UCard v-if="status === 'success'">
        <div class="flex flex-row justify-evenly">
          <div class="flex flex-col items-center">
            <BaseHeadline :text="character?.name ?? ''" tag="h1" />
            <div>
              <img width="200" height="200" :src="character?.image" alt="character">
            </div>
          </div>

          <div class="flex flex-row space-x-8">
            <div v-for="detail in characterDetails" :key="detail.headline">
              <BaseHeadline :text="detail.headline" tag="h2" />
              <div class="flex flex-col">
                <ul>
                  <li v-for="item in detail.data" :key="item.name">
                    <BaseHeadline :text="item.name" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </UCard>
    </UContainer>
  </div>
</template>
