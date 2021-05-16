import React from 'react'
import Link from 'next/link'
import { HeaderWrap, Logo, Login } from './styles'

const Header: React.FC = () => {
  return (
    <HeaderWrap>
      <Logo type="button">
        <Link href="/">믹챠</Link>
      </Logo>

      <Login type="button">
        <Link href="/sign_in">로그인</Link>
      </Login>
    </HeaderWrap>
  )
}

export default Header
