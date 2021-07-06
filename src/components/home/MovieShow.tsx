import React from 'react'
import { memo } from 'react'
import { MovieDetail } from '../../recoil/movie/atom'
import { MovieShowBox } from '../../styles/home_movie'

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
