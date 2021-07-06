import React, { memo } from 'react'
import { ContentHead, ContentTitle, AllView, Slider } from '../../styles/home_movie'
import MovieItem from './MovieItem'
import { Movie } from '../../recoil/movie/atom'
// import { Movie, movieDetailsAtom } from '../../recoil/movie/atom'
// import MovieShow from './MovieShow'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/Io'
// import { useRecoilValue } from 'recoil'

type Props = {
  index: number
  theme: string
  movies: Movie[]
  inViewRef?: (node?: Element | null | undefined) => void
}

const MovieSlider: React.FC<Props> = ({ index, theme, movies, inViewRef }) => {
  // const { sliderIndex, detailMovie } = useRecoilValue(movieDetailsAtom)

  return (
    <li ref={inViewRef}>
      <ContentHead>
        <ContentTitle>{theme}</ContentTitle>
        <AllView href="#">
          모두 보기
          <img src="/images/common/arr_right.svg" alt="모두 보기 버튼" />
        </AllView>
      </ContentHead>

      <Slider>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}

        <div className="sliderBtn">
          <button className="pre">
            <IoIosArrowBack style={{ color: '#fff', opacity: '80%' }} />
          </button>
          <button className="next">
            <IoIosArrowForward style={{ color: '#fff', opacity: '80%' }} />
          </button>
        </div>
      </Slider>

      {/* {index === sliderIndex && <MovieShow movie={detailMovie!} />} */}
    </li>
  )
}

export default memo(MovieSlider)
