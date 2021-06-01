import styled from '@emotion/styled'

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
export const MovieItemView = styled.li`
  transition: 0.3s;
  width: 100%;
  position: relative;
  .itemHover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 100;
    height: 100%;
    padding-top: 2.5em;
    &__header {
      display: grid;
      grid-template-columns: 1fr 5fr;
      justify-content: center;
      align-items: center;
      padding: 0 1em;
      button {
        border: none;
        cursor: pointer;
        padding: 0;
        margin: 0;
        box-shadow: none;
        border-radius: 0;
        background: inherit;
        margin-right: 0.5em;
      }
    }
    &__title {
      h3 {
        font-size: 0.9em;
      }
    }
    &__detail {
      font-size: 0.7em;
      opacity: 0.8;
      margin-top: 5px;
    }
    &__desc {
      font-size: 0.8em;
      line-height: 1.3;
      padding: 0.3em 1em 0;
    }
  }
`

export const Image = styled.img`
  max-width: 100%;
  max-height: 180px;
  display: flex;
  padding: 0.156vw;
  width: 100%;
`

export const SmallTitle = styled.h4`
  margin-top: 6px;
  white-space: pre-wrap;
  letter-spacing: -0.031vw;
  margin-left: 4px;
`
