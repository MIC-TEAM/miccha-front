import React, { memo, useState, useEffect } from 'react'
import Link from 'next/link'
import { RightMenu, LeftMenu, HeaderWrap, Logo, Login, GenreMenu } from '../../styles/home_header'

type Props = {
  username: string
}

const useScroll = () => {
  const [state, setState] = useState({
    ScrollTop: 0,
  })
  const onScroll = () => {
    setState({ ScrollTop: window.scrollY })
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return state
}

const Header = ({ username }: Props) => {
  const { ScrollTop } = useScroll()

  return (
    <HeaderWrap style={{ background: ScrollTop > 1 ? 'black' : 'none' }}>
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

      <GenreMenu>
        <h4>장르</h4>
        <ul>
          <li>
            <a href="#this">새로 올라온 작품</a>
          </li>
          <li>
            <a href="#this">새로 올라온 작품</a>
          </li>
          <li>
            <a href="#this">새로 올라온 작품</a>
          </li>
          <li>
            <a href="#this">새로 올라온 작품</a>
          </li>
          <li>
            <a href="#this">새로 올라온 작품</a>
          </li>
          <li>
            <a href="#this">새로 올라온 작품</a>
          </li>
          <li>
            <a href="#this">새로 올라온 작품</a>
          </li>
          <li>
            <a href="#this">새로 올라온 작품</a>
          </li>
        </ul>
      </GenreMenu>
    </HeaderWrap>
  )
}

export default memo(Header)
