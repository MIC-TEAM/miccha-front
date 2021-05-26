import React from 'react'
import MovieSlider from '../components/home/MovieSlider'
import styled from '@emotion/styled'

const HomeWrap = styled.body`
  background: rgb(20, 21, 23);
  color: white;
`

const Home = () => {
  return (
    <HomeWrap>
      <MovieSlider title="이어보기" movieTitle="라라랜드" />
    </HomeWrap>
  )
}

export default Home
