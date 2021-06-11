import React, { memo } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { mq } from '../../styles/media-query'

type Props = {
  username: string
}

const Header = ({ username }: Props) => {
  return (
    <HeaderWrap>
      <LeftMenu>
        <Logo type="button">
          <Link href="/home">믹챠</Link>
        </Logo>
        <Link href="/home">홈</Link>
        <Link href="#this">탐색하기</Link>
      </LeftMenu>

      <RightMenu>
        <button type="button">검색</button>
        <Link href="#this">보고싶어요</Link>
        <Login type="button">{username}</Login>
      </RightMenu>
    </HeaderWrap>
  )
}

export default memo(Header)

const RightMenu = styled.div`
  height: 72px;
  justify-content: center;
  align-items: center;
  display: flex;
`

const LeftMenu = styled.div`
  height: 72px;
  justify-content: center;
  align-items: center;
  display: flex;
`

// 헤더 네비게이션
const HeaderWrap = styled.nav`
  z-index: 80;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  ${mq({
    padding: ['0 3em', '0 1em', '0 1.5em', '0 1.5em', '0 2.5em', '0 2em 0 3em'],
  })};
`

const Logo = styled.button`
  width: 94px;
  height: 72px;
  background: url('/images/common/logo.svg') no-repeat center center;
  background-size: contain;
  border: none;
  a {
    width: 100%;
    height: 100%;
    line-height: 0;
    padding: 1em 5em;
    opacity: 0;
  }
`

const Login = styled.button`
  color: #fff;
  a {
    padding: 0.5em 1em;
    border-radius: 20px;
    font-size: 0.9em;
    font-weight: 700;
  }
`
