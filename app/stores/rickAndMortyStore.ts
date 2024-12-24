import { dtoFields } from '~/constants'

export const useRickAndMortyStore = defineStore('rickAndMortyStore', {
  state: () => ({
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
      const dto = responseDto(data, dtoFields)

      const characters = dto.results.map((character: any) => {
        return {
          id: character.id,
          name: character.name,
          image: character.image,
          slug: character.name.replace(/\s/g, '-').toLowerCase(),
          uri: `rickandmorty/${character.id}`,
        }
      })

      this.data = {
        ...data.value,
        results: [...this.data.results, ...characters],
      }

      this.data.pages = data.pages
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
