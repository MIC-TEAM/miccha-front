import styled from '@emotion/styled'
import React from 'react'

export default function Home() {
  return (
    <HomeContainer>
      <h1>PR 테스트!!</h1>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  margin-top: 15px;
  text-align: center;

  h1 {
    color: #f1c40f;
    font-size: 25px;
  }
`
