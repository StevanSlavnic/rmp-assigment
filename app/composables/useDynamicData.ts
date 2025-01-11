import type { UseApiDataOptions } from 'nuxt-api-party'
import { characterDomain, dtoFields, pokemonDomain } from '~/constants'

export default async function useDynamicData(dataType: string, store?: any) {
  const pokemon = dataType === pokemonDomain
  const rickAndMorty = dataType === characterDomain

  const options: UseApiDataOptions = {
    onRequest: () => {
      store.loading = true
    },
    onResponse: async ({ response }: { response: any }) => {
      if (!response.ok) {
        store.error = 'Failed to process response data.'
        store.loading = false
        console.error(response)
      }
      const dto = responseDto(response._data, dtoFields)
      await store.setData(dto)
      store.loading = false
    },
    onRequestError: ({ error }: { error: any }) => {
      store.error = error
      store.loading = false
      console.error(error)
    },
    onResponseError: ({ error }: { error: any }) => {
      store.error = error
      store.loading = false
      console.error(error)
    },
    query: computed(() => {
      if (pokemon) {
        return { offset: store.offset }
      }

      if (rickAndMorty) {
        return { page: store.page }
      }
    }),
  }

  if (pokemon) {
    return usePokemonData(dataType, options)
  }

  if (rickAndMorty) {
    return useRickAndMortyData(dataType, options)
  }
}
