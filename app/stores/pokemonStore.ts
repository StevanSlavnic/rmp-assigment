import { defineStore } from 'pinia'
import { pokemonDomain } from '~/constants'
import type { Pokemon } from '~/types'

interface Response {
  results: Pokemon[]
  next: null | string
  previous: null | string
  pages: number
  count: number
}

interface InitialState {
  data: Response
  isGrid: boolean
  page: number
  offset: number
  loading: boolean
  error: any | null
}

export const usePokemonStore = defineStore('pokemonStore', {
  state: (): InitialState => ({
    isGrid: true,
    data: {
      results: [],
      next: null,
      previous: null,
      pages: 0,
      count: 0,
    },
    page: 0,
    offset: 0,
    loading: false,
    error: null,
  }),

  actions: {
    async setData(data: any) {
      const pokemonData = await Promise.all(data?.results?.map(async (pokemonItem: Pokemon) => {
        this.loading = true
        const pokemon: Pokemon = await $fetch(pokemonItem.url)

        return {
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites?.front_default,
          uri: `/${pokemonDomain}/${pokemon.id}/${pokemon.name}`,
        }
      })).finally(() => {
        this.loading = false
      })

      this.data = {
        ...data,
        pages: Math.round(data.count / 20),
        results: [...this.data.results, ...pokemonData],
      }

      this.page = (data.results.length / 20)
    },

    setOffset(offset: number) {
      this.offset = offset
    },
    setError(error: any) {
      this.error = error
    },
    setLayout(isGrid: boolean) {
      this.isGrid = isGrid
    },
  },
})
