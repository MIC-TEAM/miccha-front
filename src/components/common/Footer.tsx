import React from 'react'
import styled from '@emotion/styled'

const Footer = () => {
  return (
    <FooterWrap>
      <div>
        <p>
          주식회사 믹챠 | 대표
          <a href="https://github.com/devho813" target="_blank" rel="noreferrer">
            이찬호
          </a>
          <a href="https://github.com/leemember" target="_blank" rel="noreferrer">
            이현주
          </a>
          <a href="https://github.com/youmustgo" target="_blank" rel="noreferrer">
            배일섭
          </a>
          <a href="https://github.com/Roharui" target="_blank" rel="noreferrer">
            김태윤
          </a>
          <span>| 대한민국 이곳 저곳</span>
        </p>
        <p>MICCHA Copyright © 2021 by MIC-TEAM, Inc. All rights reserved.</p>
      </div>
    </FooterWrap>
  )
}

export default Footer

const FooterWrap = styled.footer`
  width: 100vw;
  background: rgb(3, 7, 8);
  padding: 100px;
  P {
    color: rgba(255, 255, 255, 0.5);
    line-height: 26px;
    a {
      margin-right: 0.2em;
      font-weight: 800;
      &:nth-of-type(1) {
        margin-left: 0.2em;
      }
    }
  }
`
