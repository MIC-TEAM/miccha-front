import { useRouter } from 'next/dist/client/router'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useRecoilState } from 'recoil'
import useAsyncEffect from 'use-async-effect'
import { apiClient } from '../lib/apiClient'
import { exploreMoviesAtom, exploreMoviesPageAtom, Movies, PAGE_SIZE } from '../recoil/movie/atom'

async function getExploreMovies(page: number, category: number): Promise<Movies[] | undefined> {
  try {
    const res = await apiClient.get(`/categories/contents?page=${page}&category=${category}`)
    return res.data
  } catch (error) {
    console.error(error)
  }
}

export const useExplore = () => {
  const [exploreMovies, setExploreMovies] = useRecoilState(exploreMoviesAtom)
  const [exploreMoviesPage, setExploreMoviesPage] = useRecoilState(exploreMoviesPageAtom)
  const [stopGetExploreMovies, setStopGetExploreMovies] = useState(false)
  const [inViewRef, inView] = useInView()
  const {
    query: { genre: tempGenre },
  } = useRouter()
  const genreId = parseInt(tempGenre as string, 10)

  useAsyncEffect(async () => {
    if (isNaN(genreId)) {
      return
    }

    try {
      const initialMovies = await getExploreMovies(1, genreId)
      setExploreMovies(initialMovies!)
      setExploreMoviesPage((prevState) => prevState + 1)
    } catch (error) {
      console.error(error)
    }
  }, [genreId])

  useAsyncEffect(async () => {
    if (!inView || stopGetExploreMovies) {
      return
    }

    try {
      const movies = await getExploreMovies(exploreMoviesPage, genreId)

      setExploreMovies((prevState) => [...prevState, ...movies!])
      setExploreMoviesPage((prevState) => prevState + 1)

      if (movies && movies.length < PAGE_SIZE) {
        setStopGetExploreMovies(true)
      }
    } catch (error) {
      console.error(error)
    }
  }, [stopGetExploreMovies, inView, exploreMoviesPage, genreId])

  return { genreId, exploreMovies, inViewRef }
}
