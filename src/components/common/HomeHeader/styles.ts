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
  &.wishes {
    position: sticky;
    background: #000;
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

export const InputBox = styled.form`
  position: absolute;
  overflow: hidden;
  right: 130px;
  animation: 500ms ease 0s 1 normal none running none;
  width: 204px;
  span {
    display: inline-block;
    position: absolute;
    top: 11px;
    left: 10px;
    line-height: 1;
    width: 16px;
    height: 16px;
  }
  input {
    font-size: 1em;
    font-weight: 400;
    letter-spacing: -0.4px;
    line-height: 1.875vw;
    width: 100%;
    height: 36px;
    padding: 6px 30px 6px 36px;
    border: 0px;
    border-radius: 2px;
    outline: 0px;
  }
`

export const Close = styled.button`
  display: inline-block;
  position: absolute;
  top: 0px;
  right: 24px;
  line-height: 1;
  width: 16px;
  height: 16px;
  span {
    img {
      width: 100%;
    }
  }
`
