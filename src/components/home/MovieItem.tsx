import styled from '@emotion/styled'
import { memo } from 'react'
import { Movie } from '../../recoil/home_movies/selector'

interface Props {
  movie: Movie
}

const MovieItem: React.FC<Props> = ({ movie: { thumbnail, title } }) => {
  return (
    <li>
      <Image src={thumbnail} alt={`${title} 썸네일 이미지`} />
      <SmallTitle>{title}</SmallTitle>
    </li>
  )
}

export default memo(MovieItem)

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: flex;
  padding: 0.156vw;
`

const SmallTitle = styled.h4`
  margin-top: 6px;
  white-space: pre-wrap;
  letter-spacing: -0.031vw;
  margin-left: 4px;
`
