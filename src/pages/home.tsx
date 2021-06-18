import React from 'react'
import HomeHeader from '../components/common/HomeHeader'
import MovieSlider from '../components/home/MovieSlider'
import styled from '@emotion/styled'
import MovieMain from '../components/home/MovieMain'
import { useHome } from '../hooks/useHome'

const Home: React.FC = () => {
  const { homeMovies, inViewRef } = useHome()

  return (
    <>
      <HomeHeader username="현주" />
      <MovieMain />
      <HomeWrap>
        {homeMovies.map(({ theme, movies }, index) =>
          index === homeMovies.length - 1 ? (
            <MovieSlider key={theme} theme={theme} movies={movies} inViewRef={inViewRef} />
          ) : (
            <MovieSlider key={theme} theme={theme} movies={movies} />
          )
        )}
      </HomeWrap>
    </>
  )
}

export default Home

const HomeWrap = styled.main`
  background: rgb(20, 21, 23);
  color: #fff;
  width: 100%;
  min-height: 100%;
`
