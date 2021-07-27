import React, { memo, useState } from 'react'
import Link from 'next/link'
import { RightMenu, LeftMenu, HeaderWrap, Logo, Login, NavLink } from './styles'
import useHomeHeader from '../../../hooks/useHomeHeader'
import GenreMenu from './GenreMenu'
import MyMenu from './MyMenu'
import { useRouter } from 'next/router'
import SearchBox from './SearchBox'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useRecoilValue } from 'recoil'
import { userAtom } from '../../../recoil/user/atom'

type Props = {
  className?: string
}

const HomeHeader = ({ className }: Props) => {
  const { scrollTop } = useHomeHeader()
  const [searchShow, setSearchShow] = useState(false)
  const router = useRouter()
  const rightMenuRef = useRef<HTMLDivElement>(null)
  const { name } = useRecoilValue(userAtom)

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [searchShow, rightMenuRef])

  const handleClickOutside = (e: MouseEvent) => {
    if (!searchShow) {
      return
    }

    if (rightMenuRef.current && !rightMenuRef.current.contains(e.target as Node)) {
      setSearchShow(false)
    }
  }

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
            <a className={router.pathname === '/home' ? 'active' : ''}>홈</a>
          </Link>
          <Link href="/explore?genre=1">
            <a className={router.pathname === '/explore' ? 'active' : ''}>
              <span>탐색하기</span>
              <GenreMenu />
            </a>
          </Link>
        </NavLink>
      </LeftMenu>

      <RightMenu ref={rightMenuRef}>
        {searchShow ? (
          <SearchBox />
        ) : (
          <button type="button" className="search" onClick={onToggleSearch}>
            <img src="/images/common/search.svg" alt="검색 버튼" />
            <span>검색</span>
          </button>
        )}

        <Link href="/wishes">보고싶어요</Link>

        <Login type="button">
          {name}
          <MyMenu />
        </Login>
      </RightMenu>
    </HeaderWrap>
  )
}

export default memo(HomeHeader)
