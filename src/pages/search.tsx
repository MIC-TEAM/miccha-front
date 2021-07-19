import React from 'react'
import HomeHeader from '../components/common/HomeHeader'
import styled from '@emotion/styled'

const Search = () => {
  return (
    <>
      <HomeHeader username="현주" className="wishes" />

      <SearchWrap>
        <ContentTitle>&apos;해리포터와 마법사의 돌&apos; 검색 결과</ContentTitle>
      </SearchWrap>
    </>
  )
}

export default Search

const SearchWrap = styled.main`
  background: rgb(20, 21, 23);
  color: #fff;
  width: 100%;
  min-height: 100vh;
  padding: 0 50px;
`

const ContentTitle = styled.h3`
  font-size: 1.5vw;
  font-weight: 700;
  letter-spacing: -0.031vw;
  padding-top: 3.35938vw;
  margin-bottom: 1.01562vw;
`
