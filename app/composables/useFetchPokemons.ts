export default function useFetchPokemons() {
  const store = usePokemonStore()

  usePokemonData('pokemon', {
    onRequest: () => {
      store.loading = true
    },
    onResponse: async ({ response }: any) => {
      await store.setData(response._data)
      store.loading = false
    },
    onRequestError: ({ error }: any) => {
      store.error = error.message
      store.loading = false

      console.error(error)
    },
    onResponseError: ({ error }: any) => {
      store.error = error.message
      store.loading = false
    },
    query: computed(() => ({
      offset: store.offset,
    })),
  })
}
