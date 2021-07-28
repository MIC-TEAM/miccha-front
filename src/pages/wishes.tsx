import React from 'react'
import HomeHeader from '../components/common/HomeHeader'
import styled from '@emotion/styled'
import Head from 'next/head'
import ProtectedRoute from '../hoc/ProtectedRoute'

const Wishes = () => {
  return (
    <>
      <Head>
        <title>믹챠 | 보고싶어요</title>
      </Head>

      <HomeHeader className="wishes" />

      <WishesWrap>
        <ContentTitle>현주님이 보고싶어요한 작품</ContentTitle>
      </WishesWrap>
    </>
  )
}

export default ProtectedRoute(Wishes)

const WishesWrap = styled.main`
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
