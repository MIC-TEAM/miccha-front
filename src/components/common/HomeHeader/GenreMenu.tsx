import { memo } from 'react'
import styled from '@emotion/styled'
import { useRecoilValueLoadable } from 'recoil'
import { categoriesSelector } from '../../../recoil/movie/selector'
import { mq } from '../../../styles/media-query'

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
    background: #26272a;
    width: 100%;
    padding: 0.8125em;
    border-bottom: 1px solid #000;
    font-size: 1.0625rem;
    font-weight: 700;
  }
  ul {
    padding: 0.3125em 0.625em;
    background: #212225;
    display: grid;
    ${mq({
      gridTemplateColumns: ['auto auto auto', 'auto', 'auto', 'auto', 'auto auto', 'auto auto auto'],
    })};
    li {
      &:hover {
        background: #303134;
      }
      a {
        font-size: 0.875em;
        display: block;
        padding: 0.5625rem 0.6875rem;
      }
    }
  }
`
