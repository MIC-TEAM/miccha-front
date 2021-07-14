import styled from '@emotion/styled'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { useEffect } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { useRecoilValueLoadable } from 'recoil'
import { categoriesSelector } from '../../recoil/movie/selector'

const CategoryList = () => {
  const [showCategoryList, setShowCategoryList] = useState(false)
  const categoriesLoadable = useRecoilValueLoadable(categoriesSelector)
  const {
    query: { genre: tempGenre },
  } = useRouter()
  const genreId = parseInt(tempGenre as string, 10)

  useEffect(() => {
    setShowCategoryList(false)
  }, [genreId])

  const onClickNav = () => {
    setShowCategoryList((prevState) => !prevState)
  }

  const getCategories = useCallback(() => {
    switch (categoriesLoadable.state) {
      case 'loading':
        return <div>loading..</div>
      case 'hasValue':
        return categoriesLoadable.contents.map((category) => (
          <li key={category.id} className={genreId === category.id ? 'active' : ''}>
            <Link href={`/explore?genre=${category.id}`}>{category.name}</Link>
          </li>
        ))
    }
  }, [categoriesLoadable, genreId])

  const getCurrentCategory = useCallback(() => {
    if (categoriesLoadable.state !== 'hasValue') {
      return ''
    }

    const currentCategory = categoriesLoadable.contents.filter((category) => category.id === genreId)
    return currentCategory.length > 0 && currentCategory[0].name
  }, [categoriesLoadable, genreId])

  return (
    <CategoryListContainer>
      <CurrentCategory onClick={onClickNav}>
        <span>{getCurrentCategory()}</span>
        <img src="/images/explore/bottom_arrow.svg" alt="bottom arrow" />
      </CurrentCategory>
      <CategoryListWrapper show={showCategoryList}>{getCategories()}</CategoryListWrapper>
    </CategoryListContainer>
  )
}

export default CategoryList

const CategoryListContainer = styled.div`
  display: inline-block;
  position: relative;
  background-color: rgb(20, 21, 23);
  text-align: left;
  width: 17.1875vw;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  cursor: pointer;
  vertical-align: top;
`

const CurrentCategory = styled.div`
  position: relative;
  padding-right: 0.390625vw;
  padding-left: 0.78125vw;
  width: 100%;
  height: 2.42188vw;
  color: rgba(255, 255, 255, 0.7);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  font-size: 1.09375vw;
  font-weight: 700;
  letter-spacing: -0.015625vw;
  line-height: 2.3;

  img {
    position: absolute;
    right: 0.390625vw;
    top: 50%;
    transform: translateY(-50%);
    width: 1.95312vw;
    height: 1.95312vw;
  }
`

const CategoryListWrapper = styled.ul<{ show: boolean }>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  max-height: 18.75vw;
  overflow-y: scroll;

  li {
    color: rgb(102, 102, 102);
    font-size: 1.09375vw;
    font-weight: 700;
    letter-spacing: -0.015625vw;
    line-height: 1.71875vw;
    padding: 0.234375vw 0.78125vw;

    &.active {
      color: white;
      font-weight: 700;
    }

    &:hover {
      color: rgb(255, 255, 255);
    }
  }
`
