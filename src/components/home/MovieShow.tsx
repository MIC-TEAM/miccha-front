import React from 'react'
import { MovieShowBox } from '../../styles/home_movie'

const MovieShow = () => {
  return (
    <MovieShowBox className="movie">
      <h1 className="movie__title">톰보이</h1>

      <div className="movie__detail">
        <p>
          평균 별점 <strong>3.8</strong>
        </p>
        <p>12세</p>
        <p>1시간 21분</p>
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

      <div>
        <button type="button" className="movie__want">
          <span>
            <svg
              className="SVGInline-svg css-1ch6v4l-svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.1458 10.0833V2.75H9.85417V10.0833H2.75V12.375H9.85417V19.25H12.1458V12.375H19.25V10.0833H12.1458Z"
                fill="white"
                fillOpacity="0.5"
              ></path>
            </svg>
          </span>
          보고싶어요
        </button>
      </div>
    </MovieShowBox>
  )
}

export default MovieShow
