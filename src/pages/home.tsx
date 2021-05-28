import React, { useCallback } from 'react'
import MovieSlider from '../components/home/MovieSlider'
import styled from '@emotion/styled'
import { useRecoilValueLoadable } from 'recoil'
import homeMoviesSelector from '../recoil/home_movies/selector'

const HomeWrap = styled.main`
  background: rgb(20, 21, 23);
  color: #fff;
  height: 100%;
  width: 100%;
`

const Home: React.FC = () => {
  const moviesSelectorLoadable = useRecoilValueLoadable(homeMoviesSelector(1))

  const getMovieInfo = useCallback(() => {
    switch (moviesSelectorLoadable.state) {
      case 'loading':
        return <div>Loading...</div>
      case 'hasValue':
        return moviesSelectorLoadable.contents.map(({ theme, movies }) => (
          <MovieSlider key={theme} theme={theme} movies={movies} />
        ))
      case 'hasError':
        console.error(moviesSelectorLoadable.contents)
    }
  }, [moviesSelectorLoadable])

  return <HomeWrap>{getMovieInfo()}</HomeWrap>
}

export default Home
