import { memo } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

const MyMenu = () => {
  return (
    <MyMenuContainer className="mymenu__modal">
      <ul>
        <li>
          <Link href="/settings">
            <a>설정 페이지</a>
          </Link>
        </li>
        <li>
          <Link href="./">
            <a>로그아웃</a>
          </Link>
        </li>
      </ul>
    </MyMenuContainer>
  )
}

export default memo(MyMenu)

export const MyMenuContainer = styled.div`
  position: absolute;
  padding-top: 28px;
  left: 35px;
  width: 157px;
  display: none;
  ul {
    background: #212225;
    display: grid;
    li {
      color: rgba(255, 255, 255, 0.88);

      &.active {
        color: white;
      }

      &:hover {
        background: #303134;
      }
      a {
        font-size: 0.875em;
        display: block;
        padding: 0.5625rem 0.6875rem;
        font-weight: 500;
      }
    }
  }
`
