import { dtoFields, rickAndMortyDomain } from '~/constants/index.js'
import type { Character, InitialState } from '~/types/index.js'

export const useRickAndMortyStore = defineStore('rickAndMortyStore', {
  state: (): InitialState => ({
    isGrid: true,
    data: {
      results: [],
      next: null,
      previous: null,
      pages: 0,
      count: 0,
    },
    page: 1,
    loading: false,
    error: null,
  }),
  actions: {
    async setData(data: any) {
      const characters = data.results.map((character: Character) => {
        return {
          id: character.id,
          name: character.name,
          image: character.image,
          uri: `${rickAndMortyDomain}/${character.id}/${character.name.replace(/\s/g, '-').toLowerCase()}`,
        }
      })

      this.data = {
        ...data.value,
        pages: data.pages,
        results: [...this.data.results, ...characters],
      }
    },
    setPage(page: number) {
      this.page = page
    },
    setError(error: any) {
      this.error = error
    },
    setLayout(layout: boolean) {
      this.isGrid = layout
    },
  },
})
