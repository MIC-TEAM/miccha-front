import React from 'react'
import HomeHeader from '../components/common/HomeHeader'
import styled from '@emotion/styled'
import CategoryList from '../components/explore/CategoryList'

const Explore = () => {
  return (
    <>
      <HomeHeader username="현주" className="wishes" />

      <ExploreWrap>
        <ContentTitle>보고싶은 작품을 찾아보세요</ContentTitle>
        <CategoryList />
      </ExploreWrap>
    </>
  )
}

export default Explore

const ExploreWrap = styled.main`
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