import styled from '@emotion/styled'
import { mq } from '../../../styles/media-query'

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
`

export const NavLink = styled.div`
  position: relative;
  padding-left: 23px;

  & > a {
    display: inline-block;
    margin-right: 23px;
    color: rgba(255, 255, 255, 0.88);

    &:hover > span {
      opacity: 0.8;
    }

    &:hover > .genre-container {
      display: block;
    }
  }
`

// 헤더 네비게이션
export const HeaderWrap = styled.nav<{ scrollTop: number }>`
  position: relative;
  z-index: 80;
  background: ${({ scrollTop }) => (scrollTop > 1 ? '#000' : 'none')};
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
