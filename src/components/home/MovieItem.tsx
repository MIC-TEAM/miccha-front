import { memo, useState } from 'react'
import { Movie } from '../../recoil/home_movies/selector'
import { MovieItemView, Image, SmallTitle } from '../../styles/home_movie'

interface Props {
  movie: Movie
}

const MovieItem: React.FC<Props> = ({ movie: { thumbnail, title } }) => {
  const [hoverd, setHoverd] = useState(false)
  const toggleBtn = () => setHoverd((hoverd) => !hoverd)

  return (
    <MovieItemView className={hoverd ? 'isHover' : 'notHover'} onMouseEnter={toggleBtn} onMouseLeave={toggleBtn}>
      <Image src={thumbnail} alt={`${title} 썸네일 이미지`} />
      {hoverd && (
        <div className="itemHover">
          <div className="itemHover__header">
            <button type="button" className="play">
              <Image
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjgiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA2OCA2OCI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYiIgZD0iTTI1LjUgMjEuMDhsMjIgMTIuNjY3LTIyIDEzLjMzM3oiLz4KICAgICAgICA8ZmlsdGVyIGlkPSJhIiB3aWR0aD0iMTU0LjUlIiBoZWlnaHQ9IjE0Ni4yJSIgeD0iLTI3LjMlIiB5PSItMjMuMSUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+CiAgICAgICAgICAgIDxmZU9mZnNldCBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiIHN0ZERldmlhdGlvbj0iMiIvPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCBpbj0ic2hhZG93Qmx1ck91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjI0IDAiLz4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBjeD0iMzQiIGN5PSIzNCIgcj0iMzIuNSIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuNTMiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICAgICAgPHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiIHhsaW5rOmhyZWY9IiNiIi8+CiAgICAgICAgPHVzZSBmaWxsPSIjRjgyRjYyIiB4bGluazpocmVmPSIjYiIvPgogICAgPC9nPgo8L3N2Zz4K"
                alt="재생하기"
              />
            </button>

            <div className="itemHover__title">
              <h3>스파이더맨</h3>
              <p className="itemHover__detail">
                <span className="itemHover__detail--age">청불</span>
                <span className="itemHover__detail--showtimes">1시간 36분</span>
              </p>
            </div>

            <button type="button" className="save">
              <Image src="/images/common/btn_save.svg" alt="보고싶은 콘텐츠에 추가" />
            </button>
          </div>

          <p className="itemHover__desc">
            엔드게임 이후 피터 파커는 친구들과 유럽 여행을 떠난다. 하지만 이내 닉 퓨리의 요청으로 정체불명의 조력자
            미스테리오와 함께 세계를 위협하는 엘리멘탈 크리쳐스에 맞서야 하는 상황에 처한다.
          </p>

          <div className="itemHover__more">
            <button type="button"></button>
          </div>
        </div>
      )}
      <SmallTitle className="movieTit">{title}</SmallTitle>
    </MovieItemView>
  )
}

export default memo(MovieItem)
