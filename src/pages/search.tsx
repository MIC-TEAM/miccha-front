import React from 'react'
import HomeHeader from '../components/common/HomeHeader'
import Footer from '../components/common/Footer'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import DefaultSlider from '../components/common/DefaultSlider'

const Search = () => {
  const {
    query: { q: query },
  } = useRouter()

  return (
    <>
      <HomeHeader className="wishes" />

      <SearchWrap>
        <ContentTitle>&apos;{query}&apos; 검색 결과</ContentTitle>
        <DefaultSlider />
      </SearchWrap>
      <Footer />
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
  font-size: 1.8vw;
  font-weight: 700;
  letter-spacing: -0.031vw;
  padding-top: 3.35938vw;
  margin-bottom: 1.01562vw;
`
