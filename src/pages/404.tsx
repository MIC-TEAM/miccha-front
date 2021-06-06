import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

const Error: React.FC = () => {
  return (
    <ErrorNoti>
      <h1>404</h1>
      <p className="title">이 URL은 존재하지 않는 URL이에요</p>
      <p className="desc">여기에 당신과 저 빼고는 아무도 없는 것 같아요..</p>
      <Link href="/">왓챠 홈으로 가기</Link>
    </ErrorNoti>
  )
}

export default Error

const ErrorNoti = styled.main`
  display: grid;
  justify-content: center;
  align-content: center;
  background-color: #141517;
  height: 100%;
  width: 100%;
  font-family: Roboto, sans-serif;
  h1 {
    font-size: 70px;
    color: #fff;
    letter-spacing: -0.2px;
    line-height: 100%;
    margin: 0 0 11px;
    text-align: center;
    font-weight: 600;
  }
  .title {
    color: #fff;
    font-size: 21px;
    letter-spacing: -0.3px;
    margin: 0 0 5px;
    text-align: center;
  }
  .desc {
    color: #999;
    font-size: 14px;
    letter-spacing: -0.2px;
    line-height: 150%;
    text-align: center;
  }
  a {
    display: inline-block;
    background-color: #f82f62;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: -0.1px;
    text-decoration: none;
    line-height: 24px;
    padding: 11px 14px 12px 14px;
    margin: 33px auto 0;
  }
`
