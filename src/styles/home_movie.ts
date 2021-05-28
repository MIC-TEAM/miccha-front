import styled from '@emotion/styled'

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: flex;
  padding: 0.156vw;
`
export const SlickWrap = styled.section`
  max-width: 100%;
  max-height: 100%;
  .slick-slider {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    button {
      height: 100%;
      width: 53px;
      background-color: rgba(0, 0, 0, 0.4) !important;
      display: none !important;
    }
    &:hover {
      button {
        display: block !important;
      }
    }
    .slick-prev {
      position: absolute;
      left: -50px;
      cursor: pointer;
      &::before {
        content: url(/images/common/sliderArr_left.svg);
      }
    }
    .slick-next {
      right: 50px;
      &::before {
        content: url(/images/common/sliderArr_right.svg);
      }
    }
  }
`
export const ContentHead = styled.div`
  display: flex;
  vertical-align: center;
  justify-content: space-between;
  align-items: center;
  padding: 43px 50px 0;
  margin: 0 0 0.5vw 0;
`

export const ContentTitle = styled.h3`
  font-size: 1em;
  font-weight: 700;
  letter-spacing: -0.031vw;
`
export const SmallTitle = styled.h4`
  margin-top: 6px;
  white-space: pre-wrap;
  letter-spacing: -0.031vw;
  margin-left: 4px;
`
export const AllView = styled.a`
  justify-content: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }
  img {
    margin-left: 6px;
    position: relative;
    top: 2.8px;
    width: 9px;
    height: 100%;
  }
`
