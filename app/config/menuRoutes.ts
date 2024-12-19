import type { Route } from '~/types'

export const menuRoutes = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/rickandmorty',
    label: 'Rick and Morty',
  },
  {
    path: '/pokemon',
    label: 'Pokemon',
  },
] as Route[]
