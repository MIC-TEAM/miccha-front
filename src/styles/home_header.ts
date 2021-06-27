import styled from '@emotion/styled'
import { mq } from './media-query'

export const RightMenu = styled.div`
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

export const LeftMenu = styled.div`
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
export const HeaderWrap = styled.nav`
  position: relative;
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

export const Logo = styled.button`
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

export const Login = styled.button`
  color: #fff;
  margin-left: 23px;
  a {
    padding: 0.5em 1em;
    border-radius: 20px;
    font-size: 0.9em;
    font-weight: 700;
  }
`
export const GenreMenu = styled.ul`
  position: absolute;
  margin-top: 72px;
  left: 15.3vw;
  width: 31vw;
  h4 {
    background: #424242;
    width: 100%;
    padding: 1.1vw;
    border-bottom: 1px solid #000;
  }
  ul {
    padding: 0.6em 0.9em;
    background: #444;
    display: grid;
    grid-template-columns: auto auto auto;
    li {
      padding: 0.7rem 0 0.7rem 0.5rem;
      &:hover {
        background: #000;
      }
    }
  }
`
