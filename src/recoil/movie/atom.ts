import { atom } from 'recoil'
export interface Movie {
  country: string
  description: string
  duration: number
  id: number
  rating: string
  thumbnail: string
  title: string
  year: number
}

export interface Movies {
  theme: string
  movies: Movie[]
}

export interface MovieDetail {
  id: number
  title: string
  thumbnail: string
  description: string
  rating: string
  duration: number
  year: number
  country: string
  details: {
    director: string[]
    actor: string[]
    tags: string[]
  }
}

export const PAGE_SIZE = 5
export const homeMoviesAtom = atom<Movies[]>({
  key: 'homeMoviesAtom',
  default: [],
})

export const homeMoviesPageAtom = atom<number>({
  key: 'homeMoviesPageAtom',
  default: 1,
})

export const exploreMoviesAtom = atom<Movies[]>({
  key: 'exploreMoviesAtom',
  default: [],
})

export const exploreMoviesPageAtom = atom<number>({
  key: 'exploreMoviesPageAtom',
  default: 1,
})

export const movieDetailsAtom = atom<{ sliderIndex: number; detailMovie: MovieDetail | null }>({
  key: 'movieDetailsAtom',
  default: {
    sliderIndex: -1,
    detailMovie: null,
  },
})
