export interface Route {
  name: string
  path: string
  label: string
  realm?: string
}

export interface Pokemon {
  id: number
  name: string
  url: string
  sprites: {
    front_default: string
  }
  base_experience: number
  height: number
  weight: number
  abilities: {
    ability: {
      name: string
    }
  }[]
  moves: {
    move: {
      name: string
    }
  }[]
}

export interface Character {
  id: number
  name: string
  image: string
  uri: string
}

export interface Response {
  results: Character[] | Pokemon[]
  next: null | string
  previous: null | string
  pages: number
  count: number
}

export interface InitialState {
  data: Response
  page: number
  offset?: number
  loading: boolean
  error: any | null
}
