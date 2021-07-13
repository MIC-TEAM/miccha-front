import React, { memo, useState } from 'react'
import Link from 'next/link'
import { RightMenu, LeftMenu, HeaderWrap, Logo, Login, NavLink } from './styles'
import useHomeHeader from '../../../hooks/useHomeHeader'
import GenreMenu from './GenreMenu'
import SearchBox from './SearchBox'

type Props = {
  username: string
  className?: string
}

const HomeHeader = ({ username, className }: Props) => {
  const { scrollTop } = useHomeHeader()

  const [searchShow, setSearchShow] = useState(false)

  const onToggleSearch = () => {
    setSearchShow((prevState) => !prevState)
  }

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
        {searchShow ? (
          <SearchBox />
        ) : (
          <button type="button" className="search" onClick={onToggleSearch}>
            <img src="/images/common/search.svg" alt="검색 버튼" />
            <span>검색</span>
          </button>
        )}

        <Link href="/wishes">보고싶어요</Link>
        <Login type="button">{username}</Login>
      </RightMenu>
    </HeaderWrap>
  )
}

export default memo(HomeHeader)
