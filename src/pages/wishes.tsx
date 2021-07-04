import React from 'react'
import HomeHeader from '../components/common/HomeHeader'
import styled from '@emotion/styled'

const Wishes = () => {
  return (
    <>
      <HomeHeader username="현주" />
      <WishesWrap></WishesWrap>
    </>
  )
}

export default Wishes

const WishesWrap = styled.main`
  background: rgb(20, 21, 23);
  color: #fff;
  width: 100%;
  min-height: 100%;
  padding-top: 1.25vw;
`
