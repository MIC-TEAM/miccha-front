import React, { memo } from 'react'
import Link from 'next/link'
import { RightMenu, LeftMenu, HeaderWrap, Logo, Login, NavLink, InputBox, Close } from './styles'
import useHomeHeader from '../../../hooks/useHomeHeader'
import GenreMenu from './GenreMenu'
import { useRouter } from 'next/dist/client/router'

type Props = {
  username: string
  className?: string
}

const HomeHeader = ({ username, className }: Props) => {
  const { scrollTop } = useHomeHeader()
  const router = useRouter()

  return (
    <HeaderWrap scrollTop={scrollTop} className={className}>
      <LeftMenu>
        <Logo type="button">
          <Link href="/home">믹챠</Link>
        </Logo>
        <NavLink>
          <Link href="/home">
            <a className={router.pathname === '/home' ? 'active' : ''}>홈</a>
          </Link>
          <Link href="/explore">
            <a className={router.pathname === '/explore' ? 'active' : ''}>
              <span>탐색하기</span>
              <GenreMenu />
            </a>
          </Link>
        </NavLink>
      </LeftMenu>

      <RightMenu>
        <button type="button" className="search">
          <img src="/images/common/search.svg" alt="검색 버튼" />
          <span>검색</span>
        </button>

        <InputBox>
          <span>
            <img src="/images/common/search_bar.svg" alt="검색 버튼" />
          </span>
          <input placeholder="제목, 감독, 배우로 검색" type="text" className="searchBar" />

          <Close type="reset">
            <span>
              <img src="/images/common/search_del.svg" alt="검색취소" />
            </span>
          </Close>
        </InputBox>

        <Link href="/wishes">보고싶어요</Link>
        <Login type="button">{username}</Login>
      </RightMenu>
    </HeaderWrap>
  )
}

export default memo(HomeHeader)
