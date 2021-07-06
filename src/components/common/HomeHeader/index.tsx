import React, { memo } from 'react'
import Link from 'next/link'
import { RightMenu, LeftMenu, HeaderWrap, Logo, Login, NavLink } from './styles'
import useHomeHeader from '../../../hooks/useHomeHeader'
import GenreMenu from './GenreMenu'
import Wishes from '../../../pages/wishes'

type Props = {
  username: string
  className?: string
}

const HomeHeader = ({ username, className }: Props) => {
  const { scrollTop } = useHomeHeader()

  return (
    <HeaderWrap scrollTop={scrollTop} className={className}>
      <LeftMenu>
        <Logo type="button">
          <Link href="/home">믹챠</Link>
        </Logo>
        <NavLink>
          <Link href="/home">
            <a>홈</a>
          </Link>
          <Link href="/home">
            <a>
              <span>탐색하기</span>
              <GenreMenu />
            </a>
          </Link>
        </NavLink>
      </LeftMenu>

      <RightMenu>
        <button type="button" className="search">
          <img src="/images/common/search.svg" alt="검색하기" />
          &nbsp;&nbsp; 검색
        </button>
        <Link href="/wishes">보고싶어요</Link>
        <Login type="button">{username}</Login>
      </RightMenu>
    </HeaderWrap>
  )
}

export default memo(HomeHeader)
