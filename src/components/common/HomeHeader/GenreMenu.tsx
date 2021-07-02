import { memo } from 'react'
import styled from '@emotion/styled'
import { useRecoilValueLoadable } from 'recoil'
import { categoriesSelector } from '../../../recoil/movie/selector'

const GenreMenu = () => {
  const categoriesLoadable = useRecoilValueLoadable(categoriesSelector)

  const getCategories = () => {
    switch (categoriesLoadable.state) {
      case 'loading':
        return <div>loading..</div>
      case 'hasValue':
        return categoriesLoadable.contents.map((category) => (
          <li key={category.id}>
            <a href="#this">{category.name}</a>
          </li>
        ))
    }
  }

  return (
    <GenreMenuContainer className="genre-container">
      <h4>장르</h4>
      <ul>{getCategories()}</ul>
    </GenreMenuContainer>
  )
}

export default memo(GenreMenu)

export const GenreMenuContainer = styled.div`
  display: none;
  position: absolute;
  padding-top: 28px;
  left: 55px;
  width: 515px;

  h4 {
    background: #424242;
    width: 100%;
    padding: 1.1vw;
    border-bottom: 1px solid #000;
  }
  ul {
    padding: 0.6em 0.9em;
    background: #444;
    display: grid;
    grid-template-columns: auto auto auto;
    li {
      padding: 0.7rem 0 0.7rem 0.5rem;
      &:hover {
        background: #000;
      }
    }
  }
`
