import styled from '@emotion/styled'
import { memo, useState } from 'react'
import { Movie } from '../../recoil/movie/atom'
import ItemHover from './ItemHover'

interface Props {
  movie: Movie
}

const MovieItem: React.FC<Props> = ({ movie }) => {
  const [hoverd, setHoverd] = useState(false)
  const toggleBtn = () => setHoverd((hoverd) => !hoverd)

  return (
    <MovieItemView className={hoverd ? 'isHover' : 'notHover'} onMouseEnter={toggleBtn} onMouseLeave={toggleBtn}>
      <Image src={movie.thumbnail} alt={`${movie.title} 썸네일 이미지`} />
      {hoverd && (
        <ItemHover
          description={movie.description}
          title={movie.title}
          duration={movie.duration}
          rating={movie.rating}
        />
      )}
      <SmallTitle className="movieTit">{movie.title}</SmallTitle>
    </MovieItemView>
  )
}

export default memo(MovieItem)

export const MovieItemView = styled.li`
  transition: transform 300ms ease 100ms;
  position: relative;
  object-fit: cover;
  width: 300px;
  transform: scale(1);
  margin: 0.156vw;
  &.isHover {
    height: 100%;
    .movieTit {
      display: none;
    }
  }
`
export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: flex;
  width: 100%;
`

export const SmallTitle = styled.h4`
  margin-top: 6px;
  white-space: pre-wrap;
  letter-spacing: -0.031vw;
  margin-left: 4px;
`
