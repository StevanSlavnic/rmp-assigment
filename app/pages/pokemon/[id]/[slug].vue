<script setup lang="ts">
import { pokemonDomain } from '~/constants'
import type { Pokemon } from '~/types'

const route = useRoute()

const { data: pokemon, status } = usePokemonData<Pokemon>(`${pokemonDomain}/${(route.params as { slug: string }).slug}`)

const pokemonDetails = computed(() => ([
  { headline: 'General', data: [
    { name: `Experience: ${pokemon.value?.base_experience}` },
    { name: `Height: ${pokemon.value?.height}` },
    { name: `Weight: ${pokemon.value?.weight}` },
  ] },
  { headline: 'Abilities', data: pokemon.value?.abilities.map((ability: { ability: { name: string } }) => ({ name: ability.ability.name })) },
  { headline: 'Moves', data: pokemon.value?.moves.map((move: { move: { name: string } }) => ({ name: move.move.name })) },

]))
</script>

<template>
  <div class="my-6">
    <UContainer>
      <UtilitiesSkeletonCard :number-ofskeletons="1" :loading="status === 'pending'" />

      <UCard v-if="status === 'success'">
        <div class="flex flex-row justify-evenly">
          <div class="flex flex-col items-center">
            <BaseHeadline :text="pokemon?.name ?? ''" tag="h1" />
            <div>
              <img width="200" height="200" :src="pokemon?.sprites?.front_default" alt="pokemon">
            </div>
          </div>

          <div class="flex flex-row space-x-8">
            <div v-for="detail in pokemonDetails" :key="detail.headline">
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
