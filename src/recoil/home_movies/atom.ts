import { atom } from 'recoil'

interface Movie {
  id: string
  title: string
  thumbnail: string
  description: string
  rating: string
  duration: number
}

interface Movies {
  theme: string
  movies: Movie[]
}

interface HomeMovies {
  theme: string
  movies: Movies[]
}

const homeMoviesAtom = atom<HomeMovies[]>({
  key: 'homeMoviesAtom',
  default: [],
})

export default homeMoviesAtom
