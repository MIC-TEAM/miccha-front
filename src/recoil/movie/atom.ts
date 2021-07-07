import { atom } from 'recoil'
export interface Movie {
  id: number
  title: string
  thumbnail: string
  description: string
  rating: string
  duration: number
}

export interface HomeMovies {
  theme: string
  movies: Movie[]
}

export interface MovieDetail {
  id: number
  title: string
  thumbnail: string[]
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

export const homeMoviesAtom = atom<HomeMovies[]>({
  key: 'homeMoviesAtom',
  default: [],
})

export const PAGE_SIZE = 5
export const homeMoviesPageAtom = atom<number>({
  key: 'homeMoviesPageAtom',
  default: 1,
})

export const movieDetailsAtom = atom<{ sliderIndex: number; detailMovie: MovieDetail | null }>({
  key: 'movieDetailsAtom',
  default: {
    sliderIndex: -1,
    detailMovie: null,
  },
})
