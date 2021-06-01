import { memo, useCallback, useState } from 'react'
import { Movie } from '../../recoil/home_movies/selector'
import { MovieItemView, Image, SmallTitle } from '../../styles/home_movie'

interface Props {
  movie: Movie
}

const MovieItem: React.FC<Props> = ({ movie: { thumbnail, title } }) => {
  const [isShow, setIsShow] = useState(false)

  const mouseEvent = useCallback(
    (type: 'Enter' | 'Leave') => () => {
      switch (type) {
        case 'Enter':
          setIsShow(true)
          break
        case 'Leave':
          setIsShow(false)
          break
      }
    },
    []
  )

  return (
    <MovieItemView onMouseEnter={mouseEvent('Enter')} onMouseLeave={mouseEvent('Leave')}>
      <Image src={thumbnail} alt={`${title} 썸네일 이미지`} />
      {isShow && (
        <div className="itemHover">
          <div className="itemHover__header">
            <button type="button">
              <Image src="/images/common/btn_play.svg" alt="재생하기" />
            </button>

            <div className="itemHover__title">
              <h3>스파이더맨</h3>
              <p className="itemHover__detail">
                <span className="itemHover__detail--age">청불</span>
                <span className="itemHover__detail--showtimes">1시간 36분</span>
              </p>
            </div>
          </div>

          <p className="itemHover__desc">
            엔드게임 이후 피터 파커는 친구들과 유럽 여행을 떠난다. 하지만 이내 닉 퓨리의 요청으로 정체불명의 조력자
            미스테리오와 함께 세계를 위협하는 엘리멘탈 크리쳐스에 맞서야 하는 상황에 처한다.
          </p>
        </div>
      )}
      <SmallTitle>{title}</SmallTitle>
    </MovieItemView>
  )
}

export default memo(MovieItem)
