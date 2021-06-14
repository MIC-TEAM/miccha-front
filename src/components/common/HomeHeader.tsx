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
        <div className="menu">
          <Link href="/home">홈</Link>
          <Link href="#this">탐색하기</Link>
        </div>
      </LeftMenu>

      <RightMenu>
        <button type="button" className="search">
          <img src="/images/common/search.svg" alt="검색하기" />
          &nbsp;&nbsp; 검색
        </button>
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
  a {
    &:hover {
      opacity: 0.8;
    }
  }
  button {
    color: rgba(255, 255, 255, 0.88);
    &.search {
      margin-right: 23px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &:hover {
      opacity: 0.8;
    }
  }
`

const LeftMenu = styled.div`
  height: 72px;
  justify-content: center;
  align-items: center;
  display: flex;
  .menu {
    padding-left: 23px;
    a {
      margin-right: 23px;
      color: rgba(255, 255, 255, 0.88);
      &:active {
        font-weight: 700;
      }
      &:hover {
        opacity: 0.8;
      }
    }
  }
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
  font-size: 0.9em;
  ${mq({
    padding: ['0 3em', '0 1em', '0 1.5em', '0 1.5em', '0 2.5em', '0 2em 0 3em'],
  })};
`

const Logo = styled.button`
  width: 94px;
  height: 72px;
  background: url('/images/common/logo.svg') no-repeat center 19px;
  background-size: contain;
  border: none;
  a {
    width: 100%;
    height: 100%;
    line-height: 0;
    opacity: 0;
    display: block;
  }
`

const Login = styled.button`
  color: #fff;
  margin-left: 23px;
  a {
    padding: 0.5em 1em;
    border-radius: 20px;
    font-size: 0.9em;
    font-weight: 700;
  }
`
