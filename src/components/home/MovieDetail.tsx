import React from 'react'
import { Detail, Desc } from '../../styles/home_movie'

const MovieDetail: React.FC = () => {
  return (
    <Detail>
      <h3 className="title">디서비디언스</h3>
      <p className="story">
        아버지의 부고로 인해 영국의 유대교 마을인 자신의 고향으로 돌아간 뉴욕의 사진작가 로닛은 비밀스러운 옛 연인이었던
        에스티와 도비드가 결혼했음을 알게 된다.
      </p>
      <Desc>
        <h5>감독</h5>
        <p>세바스찬 렐리오</p>
      </Desc>
      <Desc>
        <h5>출연</h5>
        <p>세바스찬 렐리오, 레이첼 바이스, 알렉산드로 니볼라</p>
      </Desc>
      <Desc>
        <h5>개요</h5>
        <p>드라마 · 로맨스 | 아일랜드 · 영국 | 2017년</p>
      </Desc>
    </Detail>
  )
}

export default MovieDetail
