import { defineStore } from 'pinia'
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
  page: number
  offset: number
  loading: boolean
  error: any | null
}

export const usePokemonStore = defineStore('pokemonStore', {
  state: (): InitialState => ({
    data: {
      results: [],
      next: null,
      previous: null,
      pages: 0,
      count: 0,
    },
    page: 1,
    offset: 0,
    loading: false,
    error: null,
  }),

  actions: {
    async setPokemons(data: any) {
      const dto = responseDto(data, ['results', 'next', 'prev', 'previous', 'count', 'pages'])
      const pokemonData = await Promise.all(dto.results.map(async (pokemonItem: Pokemon) => {
        const pokemon: Pokemon = await $fetch(pokemonItem.url)

        return {
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites?.front_default,
        }
      }))

      this.data = {
        ...data,
        pages: Math.round(data.count / 20),
        results: [...this.data.results, ...pokemonData],
      }

      this.$state.page = (this.data.results.length / 20) + 1
    },

    setOffset(offset: number) {
      this.offset = offset
    },
    setError(error: any) {
      this.error = error
    },
  },
  getters: {
    getPokemonByName: (state: InitialState) => {
      return (name: string) => state.data.results.find((pokemon: Pokemon) => pokemon.name === name)
    },
  },
})
