import styled from '@emotion/styled'
import { mq } from '../../../styles/media-query'

export const RightMenu = styled.div`
  height: 72px;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  button {
    color: rgba(255, 255, 255, 0.88);
    span {
      margin-left: 0.5em;
    }
    &.search {
      margin-right: 23px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &:hover span {
      opacity: 0.8;
    }
  }
  @media (max-width: 414px) {
    button.search {
      margin-right: 10px;
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

    &.active {
      font-weight: 700;
      color: #ffffff;
    }

    &:hover > span {
      opacity: 0.8;
    }

    &:hover > .genre-container {
      display: block;
    }
  }
  @media (max-width: 414px) {
    padding-left: 6px;
    & > a {
      display: inline-block;
      margin-right: 10px;
      color: rgba(255, 255, 255, 0.88);
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
  &.wishes {
    position: sticky;
    background: #000;
  }
  @media (max-width: 414px) {
    padding: 0 1em;
  }
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
  @media (max-width: 414px) {
    width: 94px;
    height: 72px;
  }
`

export const Login = styled.button`
  color: #fff;
  margin-left: 23px;
  border-radius: 20px;
  font-weight: 500;
  &:hover {
    .mymenu__modal {
      display: block;
    }
  }
  @media (max-width: 414px) {
    margin-left: 10px;
  }
`
