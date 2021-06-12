import styled from '@emotion/styled'

export const Row = styled.section`
  position: relative;
`

export const SlickWrap = styled.div`
  max-width: 100%;
  max-height: 100%;
  position: relative;
  .slick-slider {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    .slick-arrow {
      position: absolute;
      width: 53px;
      background-color: rgba(0, 0, 0, 0.4) !important;
      display: none !important;
      top: 45%;
      height: 55.2%;
    }
    &:hover {
      .slick-arrow {
        display: block !important;
      }
    }
    .slick-list {
      padding: 45px 0;
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
  position: absolute;
  top: -30px;
  width: 100%;
`

export const ContentTitle = styled.h3`
  font-size: 1.5em;
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
  position: relative;
  height: 180px;
  object-fit: cover;
  &.notHover {
    transform: scale(1);
    z-index: 1;
    width: 100%;
    img {
      height: 155px;
    }
  }
  &.isHover {
    transform: scale(1.4);
    z-index: 4;
    .movieTit {
      display: none;
    }
    .itemHover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 81;
      height: 100%;
      padding-top: 2.5em;
      &__header {
        display: grid;
        grid-template-columns: 1fr 5fr 1fr;
        justify-content: center;
        align-items: center;
        padding: 0 1em;
        .save {
          width: 100%;
        }
        .play {
          margin-right: 0.8em;
          width: 100%;
        }
      }
      &__title {
        margin-left: 0.5em;
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
        padding: 0.5em 1em 0.2em;
      }

      &__more {
        width: 100%;
        display: flex;
        justify-content: center;
        &--btn {
          width: 48px;
          height: 20px;
          background-repeat: no-repeat;
          background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDQ0IDIwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iLjMyIj4KICAgICAgICA8cGF0aCBkPSJNMCAwaDQ0djIwSDB6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgZD0iTTIyLjAwNCAxNi41OTZsLS4wMDEuMDAyLS4wMDQtLjAwMkw0LjY4MiA2LjU5OCA2LjE4MiA0bDE1LjgyIDkuMTMzTDM3LjgyIDRsMS41IDIuNTk4LTE3LjMxNyA5Ljk5OHoiLz4KICAgIDwvZz4KPC9zdmc+Cg==);
          &:hover {
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDQ0IDIwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGg0NHYyMEgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGODJGNjIiIGQ9Ik0yMi4wMDQgMTYuNTk2bC0uMDAxLjAwMi0uMDA0LS4wMDJMNC42ODIgNi41OTggNi4xODIgNGwxNS44MiA5LjEzM0wzNy44MiA0bDEuNSAyLjU5OC0xNy4zMTcgOS45OTh6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=);
          }
        }
      }
    }
  }
`

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
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
