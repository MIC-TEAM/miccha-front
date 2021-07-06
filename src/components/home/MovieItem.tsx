import { memo, useState } from 'react'
import { Movie } from '../../recoil/movie/atom'
import { MovieItemView, Image, SmallTitle } from '../../styles/home_movie'
import ItemHover from './ItemHover'

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
        <ItemHover
          story="엔드게임 이후 피터 파커는 친구들과 유럽 여행을 떠난다."
          movietit="톰보이"
          showtime="1시간 36분"
          age="청불"
        />
      )}
      <SmallTitle className="movieTit">{title}</SmallTitle>
    </MovieItemView>
  )
}

export default memo(MovieItem)
