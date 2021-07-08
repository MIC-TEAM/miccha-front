import React, { memo } from 'react'
import MovieItem from './MovieItem'
import { Movie, movieDetailsAtom } from '../../recoil/movie/atom'
import MovieShow from './MovieShow'
import styled from '@emotion/styled'
import { useRecoilValue } from 'recoil'

type Props = {
  sliderIndex: number
  theme: string
  movies: Movie[]
  inViewRef?: (node?: Element | null | undefined) => void
}

const MovieSlider: React.FC<Props> = ({ sliderIndex, theme, movies, inViewRef }) => {
  const { sliderIndex: movieDetailSliderIndex, detailMovie } = useRecoilValue(movieDetailsAtom)

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
        <ul className="movieList">
          {movies.map((movie) => (
            <MovieItem key={movie.id} sliderIndex={sliderIndex} movie={movie} />
          ))}
        </ul>

        <div className="sliderBtn">
          <button className="pre">
            <img src="/images/common/sliderArr_left.svg" alt="왼쪽 버튼" />
          </button>

          <button className="next">
            <img src="/images/common/sliderArr_right.svg" alt="오른쪽 버튼" />
          </button>
        </div>
      </Slider>

      {sliderIndex === movieDetailSliderIndex && <MovieShow movie={detailMovie!} />}
    </li>
  )
}

export default memo(MovieSlider)

export const Slider = styled.div`
  position: relative;
  .movieList {
    display: inline-flex;
    position: relative;
    padding-left: 3.125em;
  }
  &:hover li {
    transform: translateX(-25%);
  }
  .sliderBtn {
    position: absolute;
    width: 100vw;
    height: 169.6px;
    left: 0;
    top: 3px;
    button {
      height: 100%;
      width: 53px;
      background-color: rgba(0, 0, 0, 0.6);
      position: absolute;
      z-index: 12;
      img {
        width: 1.8em;
      }
    }
    .next {
      right: 17px;
    }
  }
  li {
    z-index: 10;
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
