export interface Route {
  name: string
  path: string
  label: string
  realm?: string
}

export interface Pokemon {
  name: string
  uri: string
  id: number
  sprites?: {
    front_default: string
  }
  image: string
  height: number
  weight: number
}
