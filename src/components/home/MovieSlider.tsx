import React, { memo } from 'react'
import MovieItem from './MovieItem'
import { Movie } from '../../recoil/movie/atom'
// import { Movie, movieDetailsAtom } from '../../recoil/movie/atom'
// import MovieShow from './MovieShow'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/Io'
import styled from '@emotion/styled'
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

export const Slider = styled.ul`
  display: inline-flex;
  position: relative;
  padding-left: 3.125em;
  &:hover li {
    transform: translateX(-25%);
  }
  .sliderBtn {
    position: absolute;
  }

  li:hover ~ li {
    transform: translateX(25%);
  }

  li:hover {
    transform: scale(1.5);
  }
`

export const ContentHead = styled.div`
  display: flex;
  vertical-align: center;
  justify-content: space-between;
  align-items: center;
  padding: 43px 50px 0;
  margin: 0 0 0.5vw 0;
  position: relative;
  width: 100%;
`

export const ContentTitle = styled.h3`
  font-size: 1.5vw;
  font-weight: 700;
  letter-spacing: -0.031vw;
`

export const AllView = styled.a`
  justify-content: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }
  img {
    margin-left: 6px;
    position: relative;
    top: 2.8px;
    width: 9px;
    height: 100%;
  }
`
