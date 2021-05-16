import styled from '@emotion/styled'
import facepaint from 'facepaint'

//디바이스 미디어쿼리 (아이폰5부터 아이패드 Pro 해상도)
const mq = facepaint([
  '@media(min-width: 320px)',
  '@media(min-width: 375px)',
  '@media(min-width: 414px)',
  '@media(min-width: 768px)',
  '@media(min-width: 1024px)',
])

// 헤더 네비게이션
export const HeaderWrap = styled.nav`
  z-index: 100;
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

export const Logo = styled.button`
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

export const Login = styled.button`
  background: none;
  border: none;
  a {
    background: #fff;
    padding: 0.5em 1em;
    border-radius: 20px;
    font-size: 0.9em;
    font-weight: 700;
  }
`
