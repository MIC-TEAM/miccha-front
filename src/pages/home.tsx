import React from 'react'
import HomeHeader from '../components/common/HomeHeader'
import Footer from '../components/common/Footer'
import MovieSlider from '../components/home/MovieSlider'
import styled from '@emotion/styled'
import MovieMain from '../components/home/MovieMain'
import { useHome } from '../hooks/useHome'
import Head from 'next/head'
import ProtectedRoute from '../hoc/ProtectedRoute'

const Home: React.FC = () => {
  const { homeMovies, inViewRef } = useHome()

  return (
    <>
      <Head>
        <title>믹챠 | Home</title>
      </Head>

      <HomeWrap>
        <HomeHeader />
        <MovieMain />

        <ul>
          {homeMovies.map(({ theme, movies }, index) =>
            index === homeMovies.length - 1 ? (
              <MovieSlider key={theme} sliderIndex={index} theme={theme} movies={movies} inViewRef={inViewRef} />
            ) : (
              <MovieSlider key={theme} sliderIndex={index} theme={theme} movies={movies} />
            )
          )}
        </ul>
      </HomeWrap>

      <Footer />
    </>
  )
}

export default ProtectedRoute(Home)

const HomeWrap = styled.main`
  background: rgb(20, 21, 23);
  color: #fff;
  width: 100%;
  min-height: 100%;
  padding-bottom: 72px;
`
