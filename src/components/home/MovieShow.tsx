import styled from '@emotion/styled'
import React from 'react'
import { memo } from 'react'
import { MovieDetail } from '../../recoil/movie/atom'

interface Props {
  movie: MovieDetail
}

const MovieShow: React.FC<Props> = ({ movie }) => {
  console.log(movie)

  return (
    <MovieShowBox className="movie">
      <div className="movie__detailWrapper">
        <h1 className="movie__title">톰보이</h1>

        <div className="movie__detail">
          <div className="movie__detail--star">
            <span>평균 별점</span>
            <strong>3.8</strong>
          </div>
          <p className="movie__detail--ageTime">12세 • 2시간 9분</p>
        </div>

        <div className="movie__story">
          <p>
            국제법을 전공한 후 건축 회사에 입사한 에밀리는 리오로 출장을 간다. 우연히 기업의 사장인 클로리다를 만난
            에밀리는 그녀의 변호사로 일하게 되고, 윌터라는 남자를 소개받는다.
          </p>
        </div>

        <div className="movie__genre">
          <table>
            <tr>
              <th>감독</th>
              <td>잘만 킹</td>
            </tr>
            <tr>
              <th>출연</th>
              <td>미키 루크, 캐리 오티스, 재클린 비셋</td>
            </tr>
            <tr>
              <th>개요</th>
              <td>드라마 · 로맨스 | 미국 | 1989년 재생</td>
            </tr>
          </table>
        </div>

        <button type="button" className="movie__want">
          <span>
            <img src="./images/common/icon_want.svg" alt="보고싶어요" />
          </span>
          보고싶어요
        </button>
      </div>

      <div className="movie__imgWrapper">
        <img
          src="https://an2-img.amz.wtchn.net/image/v2/0e08665c01fd5df6e0893cfb6aa60cb0.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSmpjbTl3SWpwMGNuVmxMQ0pvWldsbmFIUWlPamN5TUN3aWNHRjBhQ0k2SWk5Mk1pOXpkRzl5WlM5cGJXRm5aUzh4TmpFMU9ETXlNVGMzTWprMU5qSXpOREU1SWl3aWNYVmhiR2wwZVNJNk9EQXNJbmRwWkhSb0lqb3hNamd3ZlEubnRNalBRV0tJTUZaQnI5MzY4Zld2c0hzT0JBZTE2ODlGUGxRMWRmQzRZVQ"
          alt="영화포스터"
        />
        <div className="shadowLeft"></div>
        <div className="shadowBottom"></div>
      </div>

      <button type="button" className="movie__close">
        <img src="./images/common/icon_close.svg" alt="닫기버튼" />
      </button>
    </MovieShowBox>
  )
}

export default memo(MovieShow)

export const MovieShowBox = styled.div`
  width: 100%;
  height: 35.15vw;
  opacity: 1;
  background-color: #000;
  padding: 40px 0 0 50px;
  margin: 20px 0;
  position: relative;
  overflow: hidden;
  .movie {
    &__detailWrapper {
      z-index: 10;
      position: absolute;
      width: auto;
    }
    &__title {
      margin-top: 0.703125vw;
      font-size: 2.8125vw;
      font-weight: 700;
      letter-spacing: -0.117188vw;
      line-height: 3.28125vw;
      color: rgba(255, 255, 255);
    }
    &__detail {
      font-size: 1.25vw;
      display: flex;
      align-items: center;
      margin: 1.09375vw 0px 0.625vw;
      &--ageTime {
        color: rgba(255, 255, 255, 0.7);
        font-size: 1.09375vw;
        font-weight: 700;
        margin-left: 1vw;
      }
      &--star {
        font-size: 0.9375vw;
        font-weight: 700;
        color: #fff;
        height: 1.7vw;
        display: flex;
        align-items: center;
        span {
          border: 1px solid #fff;
          height: 100%;
          display: inline-flex;
          align-items: center;
          padding: 0 0.4vw;
        }
        strong {
          font-size: 1.17188vw;
          background-color: #fff;
          color: #000;
          display: flex;
          align-items: center;
          height: 100%;
          padding: 0 0.4vw;
        }
      }
    }
    &__story {
      color: rgba(255, 255, 255, 0.8);
      width: 32.8125vw;
      margin-top: 0.15625vw;
      font-size: 1.17188vw;
      font-weight: 400;
      letter-spacing: -0.03125vw;
      line-height: 1.875vw;
    }
    &__genre {
      margin-top: 0.9375vw;
      color: rgba(255, 255, 255, 0.5);
      font-size: 1.01562vw;
      line-height: 1.40625vw;
      margin-bottom: 0.15625vw;
      th {
        font-weight: 700;
        padding-right: 1.2vw;
      }
      td {
        padding: 0.15vw 0;
      }
    }
    &__want {
      color: #fff;
      padding: 0.625vw 0.3125vw 0.625vw 0;
      font-size: 1.25vw;
      font-weight: 700;
      opacity: 0.5;
      display: flex;
      align-items: center;
      span {
        margin-right: 0.4vw;
      }
      &:hover {
        opacity: 0.8;
      }
    }
    &__close {
      position: absolute;
      top: 1.5vw;
      right: 1.5vw;
    }
    &__imgWrapper {
      position: absolute;
      width: 61.5625%;
      height: 100%;
      right: 0;
      top: 0;
      img {
        width: 100%;
        height: 100%;
      }
      .shadowLeft {
        position: absolute;
        top: 0px;
        left: 0px;
        background-image: linear-gradient(
          to right,
          rgb(0, 0, 0) 0,
          rgba(0, 0, 0, 0.7) 26%,
          rgba(0, 0, 0, 0.45) 50%,
          rgba(0, 0, 0, 0.2) 75%,
          rgba(0, 0, 0, 0) 100%
        );
        width: 65%;
        height: 100%;
      }
      .shadowBottom {
        position: absolute;
        bottom: 0px;
        right: 0px;
        background-image: linear-gradient(
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.17) 28%,
          rgba(0, 0, 0, 0.5) 62%,
          rgba(0, 0, 0, 0.85) 100%
        );
        height: 63.1%;
        width: 100%;
      }
    }
  }
`
