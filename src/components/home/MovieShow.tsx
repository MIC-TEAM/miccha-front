import styled from '@emotion/styled'
import React, { useMemo } from 'react'
import { useState } from 'react'
import { useCallback } from 'react'
import { memo } from 'react'
import { useResetRecoilState } from 'recoil'
import { MovieDetail, movieDetailsAtom } from '../../recoil/movie/atom'
import { printDuration } from './ItemHover'

interface Props {
  movie: MovieDetail
}

const MovieShow: React.FC<Props> = ({ movie }) => {
  const resetMovieDetails = useResetRecoilState(movieDetailsAtom)

  const [isWant, setIsWant] = useState(false)
  const toggleWant = useCallback(() => {
    setIsWant((prevState) => !prevState)
  }, [])

  return (
    <MovieShowBox className="movie">
      <div className="movie__detailWrapper">
        <h1 className="movie__title">{movie.title}</h1>

        <div className="movie__detail">
          <div className="movie__detail--star">
            <span>평균 별점</span>
            <strong>3.8</strong>
          </div>
          <p className="movie__detail--ageTime">
            {movie.rating} • {printDuration(movie.duration)}
          </p>
        </div>

        <div className="movie__story">
          <p>{movie.description}</p>
        </div>

        <div className="movie__genre">
          <table>
            <tr>
              <th>감독</th>
              <td>{movie.details.director.join(', ')}</td>
            </tr>
            <tr>
              <th>출연</th>
              <td>{useMemo(() => [...movie.details.actor].splice(0, 3).join(', '), [])}</td>
            </tr>
            <tr>
              <th>개요</th>
              <td>
                {movie.details.tags.join(' · ')} | {movie.country} | {movie.year}년
              </td>
            </tr>
          </table>
        </div>

        {isWant ? (
          <button type="button" className="movie__want checked" onClick={toggleWant}>
            <img src="/images/common/icon_want_check.svg" alt="보고싶어요" />
            <i>보고싶어요</i>
          </button>
        ) : (
          <button type="button" className="movie__want" onClick={toggleWant}>
            <img src="/images/common/icon_want.svg" alt="보고싶어요" />
            <i>보고싶어요</i>
          </button>
        )}
      </div>

      <div className="movie__imgWrapper">
        <img src={movie.thumbnail} alt="영화포스터" />
        <div className="shadowLeft"></div>
        <div className="shadowBottom"></div>
      </div>

      <button
        type="button"
        className="movie__close"
        onClick={() => {
          resetMovieDetails()
        }}
      >
        <img src="/images/common/icon_close.svg" alt="닫기버튼" />
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
  margin: 55px 0;
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
      margin-right: 0.4vw;
      &.checked {
        color: rgb(255, 61, 110);
        opacity: 0.8;
        &:hover {
          opacity: 0.8;
        }
      }
      &:hover {
        opacity: 0.8;
      }
      i {
        margin-top: 3px;
        margin-left: 5px;
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

  @media (max-width: 768px) {
    height: 55vw;
    margin: 25px 0;
    .movie {
      &__imgWrapper {
        width: 68.5625%;
      }
      &__title {
        font-size: 3.8125vw;
      }
      &__want {
        font-size: 2.25vw;
      }
      &__genre {
        font-size: 2vw;
        margin-bottom: 2.15625vw;
        margin-top: 1.7375vw;
        td {
          padding: 0.65vw 0;
        }
      }
      &__story {
        width: 50.8125vw;
        font-size: 2.27188vw;
        line-height: 2.875vw;
        margin-top: 2.5625vw;
      }
      &__detail {
        margin: 2.09375vw 0px 0.625vw;
        &--star {
          font-size: 1.9375vw;
          height: 3.7vw;
          strong {
            font-size: 2.17188vw;
          }
        }
        &--ageTime {
          font-size: 2.09375vw;
        }
      }
    }
  }

  @media (max-width: 414px) {
    height: 61.15vw;
    margin: 15px 0;
    .movie {
      &__imgWrapper {
        width: 100%;
        img {
          opacity: 0.4;
        }
      }
      &__story {
        width: 83%;
        font-size: 2.68188vw;
        line-height: 3.675vw;
      }
      &__genre {
        line-height: 2vw;
      }
      &__title {
        margin-top: 0;
      }
      &__detail {
        &--star {
          height: 5vw;
        }
      }
    }
  }
`
