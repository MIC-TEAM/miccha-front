import styled from '@emotion/styled'
import { memo } from 'react'
import { Movie } from '../../recoil/home_movies/selector'

interface Props {
  movie: Movie
}

const MovieItem: React.FC<Props> = ({ movie: { thumbnail, title } }) => {
  return (
    <MovieItemView>
      <span>
        <h3>스파이더맨</h3>
        <p>
          엔드게임 이후 피터 파커는 친구들과 유럽 여행을 떠난다. 하지만 이내 닉 퓨리의 요청으로 정체불명의 조력자
          미스테리오와 함께 세계를 위협하는 엘리멘탈 크리쳐스에 맞서야 하는 상황에 처한다.
        </p>
      </span>
      <Image src={thumbnail} alt={`${title} 썸네일 이미지`} />
      <SmallTitle>{title}</SmallTitle>
    </MovieItemView>
  )
}

export default memo(MovieItem)

const MovieItemView = styled.li`
  height: 208px;
  transition: 0.3s;
  position: relative;
  span {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    z-index: 100;
    height: 100%;
    display: none;
  }
  &:hover {
    transform: scale(1.3);
    span {
      display: block;
    }
  }
`

const Image = styled.img`
  max-width: 100%;
  max-height: 180px;
  display: flex;
  padding: 0.156vw;
  width: 100%;
`

const SmallTitle = styled.h4`
  margin-top: 6px;
  white-space: pre-wrap;
  letter-spacing: -0.031vw;
  margin-left: 4px;
`
