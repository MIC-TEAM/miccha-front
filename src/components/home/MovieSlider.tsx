import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { reactSlickSettings } from '../../utils/react-slick'
import React, { memo, useMemo } from 'react'
import Slick from 'react-slick'
import { SlickWrap, ContentHead, ContentTitle, AllView, Row } from '../../styles/home_movie'
import MovieItem from './MovieItem'
import { Movie } from '../../recoil/home_movies/selector'
import MovieDetail from './MovieDetail'

type Props = {
  theme: string
  movies: Movie[]
}

const MovieSlider: React.FC<Props> = ({ theme, movies }) => {
  const settings = useMemo(() => reactSlickSettings, [])
  const itemsList = movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)

  return (
    <>
      <Row>
        <ContentHead>
          <ContentTitle>{theme}</ContentTitle>
          <AllView href="#">
            모두 보기
            <img src="/images/common/arr_right.svg" alt="모두 보기 버튼" />
          </AllView>
        </ContentHead>

        <SlickWrap style={{ padding: '0 50px' }}>
          <Slick {...settings}>{itemsList}</Slick>
        </SlickWrap>

        <MovieDetail />
      </Row>
    </>
  )
}

export default memo(MovieSlider)
