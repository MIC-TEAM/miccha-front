import { useSetRecoilState } from 'recoil'
import { apiClient } from '../lib/apiClient'
import { MovieDetail, movieDetailsAtom } from '../recoil/movie/atom'

const getMovieDetail = async (movieId: number): Promise<MovieDetail> => {
  const res = await apiClient.get(`/contents/${movieId}`)
  return res.data
}

const useItemHover = (id: number, sliderIndex: number) => {
  const setMovieDetailAtom = useSetRecoilState(movieDetailsAtom)

  const onClickDetailArrow = async () => {
    try {
      const movieInfo = await getMovieDetail(id)
      setMovieDetailAtom({ sliderIndex, detailMovie: movieInfo })
    } catch (error) {
      throw new Error(error)
    }
  }

  return { onClickDetailArrow }
}

export default useItemHover
