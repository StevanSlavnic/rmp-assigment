export const useRickAndMortyStore = defineStore('rickAndMortyStore', {
  state: () => ({
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
    async setRickAndMortyData(data: any) {
      const dto = responseDto(data, ['results', 'next', 'prev', 'previous', 'count', 'pages'])

      const characters = dto.results.map((character: any) => {
        return {
          id: character.id,
          name: character.name,
          image: character.image,
          slug: character.name.replace(/\s/g, '-').toLowerCase(),
          uri: `rickandmorty/${character.name.replace(/\s/g, '-').toLowerCase()}`,
        }
      })

      this.data = {
        ...data.value,
        results: [...this.data.results, ...characters],
      }
    },
    setPage(page: number) {
      this.page = page
    },
  },
  getters: {
    getCharacterByName: (state: any) => {
      return (name: string) => state.data.results.find((character: any) => character.slug === name)
    },
  },
})
