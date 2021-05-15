import styled from '@emotion/styled'
import facepaint from 'facepaint'

const mq = facepaint([
  '@media(min-width: 320px)',
  '@media(min-width: 375px)',
  '@media(min-width: 414px)',
  '@media(min-width: 768px)',
  '@media(min-width: 1024px)',
])

export const DownBtn = styled.button`
  transform: translateX(-50%) !important;
  left: 50%;
  position: absolute;
  bottom: 5.2083vw;
  border: none;
  background: none;
  border-radius: 50%;
  border: 1px solid #fff;
  cursor: pointer;
  ${mq({
    width: ['60px', '40px;', '45px;', '45px;', '60px;', '60px;'],
    height: ['60px', '40px;', '45px;', '45px;', '60px;', '60px;'],
  })};
  img {
    width: 70%;
    transform: rotate(-90deg);
  }
  &.top {
    img {
      transform: rotate(90deg);
    }
  }
`
