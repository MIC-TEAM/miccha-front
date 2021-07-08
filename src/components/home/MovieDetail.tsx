import styled from '@emotion/styled'
import React from 'react'

type Props = {
  title: string
  desc: string
}
const MovieDetail = ({ title, desc }: Props) => {
  return (
    <MovieDetailBox>
      <h2>{title}</h2>
      <p>{desc}</p>
      <button type="button">
        <img src="/images/home/list_view.svg" alt="목록보기" />
        목록보기
      </button>
    </MovieDetailBox>
  )
}

export default MovieDetail

export const MovieDetailBox = styled.div`
  position: absolute;
  top: 36vh;
  left: 5%;
  h2 {
    color: rgb(255, 255, 255);
    font-size: 4vw;
    font-weight: 700;
    letter-spacing: -0.25vw;
    line-height: 4.60938vw;
    white-space: pre-wrap;
    margin-left: -0.078125vw;
  }
  p {
    color: rgb(255, 255, 255);
    font-size: 1.33vw;
    margin-top: 0.8vw;
  }
  button {
    color: #fff;
    background: rgb(255, 255, 255, 0.1);
    padding: 0.5em;
    display: flex;
    align-items: center;
    font-size: 1.6vw;
    margin-top: 2.578125vw;
    &:hover {
      background: rgb(255, 255, 255);
      color: #000;
      path {
        fill: #000;
      }
    }
    img {
      margin-right: 4px;
      width: 1.4em;
    }
  }
`
