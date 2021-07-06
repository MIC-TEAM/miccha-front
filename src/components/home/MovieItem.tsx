import { memo, useState } from 'react'
import { Movie } from '../../recoil/movie/atom'
import { MovieItemView, Image, SmallTitle } from '../../styles/home_movie'
import ItemHover from './ItemHover'

interface Props {
  movie: Movie
}

// const printDuration = (duration: number) => {
//   const hours = Math.floor(duration / 3600)
//   const minutes = Math.floor((duration % 3600) / 60)
//   return `${hours > 0 ? hours + '시간 ' : ''}${minutes}분`
// }

const MovieItem: React.FC<Props> = ({ movie }) => {
  const [hoverd, setHoverd] = useState(false)
  const toggleBtn = () => setHoverd((hoverd) => !hoverd)

  return (
    <MovieItemView className={hoverd ? 'isHover' : 'notHover'} onMouseEnter={toggleBtn} onMouseLeave={toggleBtn}>
      <Image src={movie.thumbnail} alt={`${movie.title} 썸네일 이미지`} />
      {hoverd && (
        <ItemHover
          story="엔드게임 이후 피터 파커는 친구들과 유럽 여행을 떠난다."
          movieTit="톰보이"
          showTime="1시간 36분"
          age="청불"
        />
      )}
      <SmallTitle className="movieTit">{movie.title}</SmallTitle>
    </MovieItemView>
  )
}

export default memo(MovieItem)
