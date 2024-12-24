import type { UseApiDataOptions } from '#build/module/nuxt-api-party'
import { dtoFields } from '~/constants'

export default function useDynamicData(dataType: string, store: any) {
  const pokemon = dataType === 'pokemon'
  const rickAndMorty = dataType === 'character'

  const options = {
    onRequest: () => {
      store.loading = true
    },
    onResponse: async ({ response }) => {
      try {
        const dto = responseDto(response._data, dtoFields)
        await store.setData(dto)
        store.loading = false
      }
      catch (error) {
        store.error = 'Failed to process response data.'
        store.loading = false
        console.error(error)
      }
    },
    onRequestError: ({ error }) => {
      store.error = error.message
      store.loading = false
      console.error(error)
    },
    onResponseError: ({ error }) => {
      store.error = error?.message
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
  } as UseApiDataOptions<typeof store>

  if (pokemon) {
    return usePokemonData(dataType, options)
  }

  if (rickAndMorty) {
    return useRickAndMortyData(dataType, options)
  }
}
