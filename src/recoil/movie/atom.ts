import { atom } from 'recoil'
export interface Movie {
  id: string
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

export const homeMoviesAtom = atom<HomeMovies[]>({
  key: 'homeMoviesAtom',
  default: [],
})

export const PAGE_SIZE = 5
export const homeMoviesPageAtom = atom<number>({
  key: 'homeMoviesPageAtom',
  default: 1,
})
