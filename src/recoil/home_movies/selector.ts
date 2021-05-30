import { selectorFamily } from 'recoil'
import { apiClient } from '../../lib/apiClient'

export interface Movie {
  id: string
  title: string
  thumbnail: string
  description: string
  rating: string
  duration: number
}

interface HomeMovies {
  theme: string
  movies: Movie[]
}

export const homeMoviesSelector = selectorFamily<HomeMovies[], number>({
  key: 'homeMoviesSelector',
  get: (page: number) => async () => {
    const res = await apiClient.get(`/home?page=${page}`)
    return res.data
  },
})
