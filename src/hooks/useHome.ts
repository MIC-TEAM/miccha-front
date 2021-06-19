import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useRecoilState } from 'recoil'
import useAsyncEffect from 'use-async-effect'
import { apiClient } from '../lib/apiClient'
import { HomeMovies, homeMoviesAtom, homeMoviesPageAtom, PAGE_SIZE } from '../recoil/home_movies/atom'

async function getHomeMovies(page: number): Promise<HomeMovies[] | undefined> {
  try {
    const res = await apiClient.get(`/home?page=${page}`)
    return res.data
  } catch (error) {
    console.error(error)
  }
}

export const useHome = () => {
  const [homeMovies, setHomeMovies] = useRecoilState(homeMoviesAtom)
  const [homeMoviesPage, setHomeMoviesPage] = useRecoilState(homeMoviesPageAtom)
  const [stopGetHomeMovies, setStopGetHomeMovies] = useState(false)
  const [inViewRef, inView] = useInView()

  useAsyncEffect(async () => {
    try {
      const initialMovies = await getHomeMovies(1)
      setHomeMovies(initialMovies!)
      setHomeMoviesPage((prevState) => prevState + 1)
    } catch (error) {
      console.error(error)
    }
  }, [])

  useAsyncEffect(async () => {
    if (!inView || stopGetHomeMovies) {
      return
    }

    try {
      const movies = await getHomeMovies(homeMoviesPage)

      setHomeMovies((prevState) => [...prevState, ...movies!])
      setHomeMoviesPage((prevState) => prevState + 1)

      if (movies && movies.length < PAGE_SIZE) {
        setStopGetHomeMovies(true)
      }
    } catch (error) {
      console.error(error)
    }
  }, [stopGetHomeMovies, inView, homeMoviesPage])

  return { homeMovies, inViewRef }
}
