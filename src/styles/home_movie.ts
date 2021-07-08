import styled from '@emotion/styled'

export const Slider = styled.ul`
  display: inline-flex;
  position: relative;
  padding-left: 3.125em;
  &:hover li {
    transform: translateX(-25%);
  }
  .sliderBtn {
    position: absolute;
    width: 100vw;
    height: 100%;
    left: 0;
    button {
      height: 100%;
      width: 53px;
      background-color: rgba(0, 0, 0, 0.6);
      position: absolute;
      img {
        width: 1.8em;
      }
    }
    .next {
      right: 17px;
    }
  }

  li:hover ~ li {
    transform: translateX(25%);
  }

  li:hover {
    transform: scale(1.5);
  }
`

export const ContentHead = styled.div`
  display: flex;
  vertical-align: center;
  justify-content: space-between;
  align-items: center;
  padding: 43px 50px 0;
  margin: 0 0 0.5vw 0;
  position: relative;
  width: 100%;
`

export const ContentTitle = styled.h3`
  font-size: 1.5vw;
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

export const ItemHoverView = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(0, 0, 0, 0.23) 0%,
    rgba(0, 0, 0, 0.56) 40%,
    rgba(0, 0, 0, 0.68) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
  .header {
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    justify-content: center;
    align-items: center;
    padding: 1.5em 1em;
    .save {
      width: 100%;
    }
    .play {
      margin-right: 0.8em;
      width: 100%;
    }
  }
  .title {
    margin-left: 0.5em;
    h3 {
      font-size: 0.9rem;
    }
  }
  .detail {
    font-size: 0.6rem;
    opacity: 0.8;
    margin-top: 5px;
  }

  .desc {
    font-size: 0.6rem;
    line-height: 1.3;
    margin: 0.5em 1em 0.2em;
  }

  .more {
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0.5em;
    .btn {
      width: 1.875em;
      height: 1.25em;
      background-repeat: no-repeat;
      background-size: contain;
      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDQ0IDIwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iLjMyIj4KICAgICAgICA8cGF0aCBkPSJNMCAwaDQ0djIwSDB6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgZD0iTTIyLjAwNCAxNi41OTZsLS4wMDEuMDAyLS4wMDQtLjAwMkw0LjY4MiA2LjU5OCA2LjE4MiA0bDE1LjgyIDkuMTMzTDM3LjgyIDRsMS41IDIuNTk4LTE3LjMxNyA5Ljk5OHoiLz4KICAgIDwvZz4KPC9zdmc+Cg==);
      &:hover {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDQ0IDIwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGg0NHYyMEgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGODJGNjIiIGQ9Ik0yMi4wMDQgMTYuNTk2bC0uMDAxLjAwMi0uMDA0LS4wMDJMNC42ODIgNi41OTggNi4xODIgNGwxNS44MiA5LjEzM0wzNy44MiA0bDEuNSAyLjU5OC0xNy4zMTcgOS45OTh6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=);
      }
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

export const MovieMainWrap = styled.div`
  position: relative;
  background: rgb(20, 21, 23);
  .swiper-wrapper {
    height: 100vh;
    position: relative;
  }
  .movieMainSlider {
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    .backgroundImg {
      width: 100%;
      height: 100vh;
      object-fit: cover;
      position: absolute;
    }
  }
  .swiper-pagination {
    padding-right: 50px;
    padding-bottom: 20px;
    display: flex;
    justify-content: flex-end;
    span {
      display: inline-block;
      background-color: #ffffff;
      width: 0.78125vw;
      height: 0.78125vw;
      border-radius: 50%;
      margin: 0 0.3125vw;
      opacity: 0.25;
      cursor: pointer;
      &.swiper-pagination-bullet-active {
        opacity: 1;
      }
    }
  }
  div[class*='swiper-button'] {
    --swiper-navigation-size: 25px;
    color: #ffffff;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }
  .swiper-button-prev {
    left: 20px;
  }
  .swiper-button-next {
    right: 20px;
  }
`

export const MovieDetailBox = styled.div`
  position: absolute;
  top: 36vh;
  left: 5%;
  h2 {
    color: rgb(255, 255, 255);
    font-size: 4vw;
    font-weight: 700;
    letter-spacing: -0.25vw;
    line-height: 4.60938vw;
    white-space: pre-wrap;
    margin-left: -0.078125vw;
  }
  p {
    color: rgb(255, 255, 255);
    font-size: 1.33vw;
    margin-top: 0.8vw;
  }
  button {
    color: #fff;
    background: rgb(255, 255, 255, 0.1);
    padding: 0.5em;
    display: flex;
    align-items: center;
    font-size: 1.6vw;
    margin-top: 2.578125vw;
    &:hover {
      background: rgb(255, 255, 255);
      color: #000;
      path {
        fill: #000;
      }
    }
    svg {
      margin-right: 4px;
      width: 1.4em;
    }
  }
`

// 화살표 클릭 시 영화 정보 View 컴포넌트
export const MovieShowBox = styled.div`
  width: 100%;
  height: 35.15vw;
  opacity: 1;
  background-color: #000;
  padding: 40px 0 0 50px;
  margin: 20px 0;
  position: relative;
  overflow: hidden;
  .movie {
    &__detailWrapper {
      z-index: 10;
      position: absolute;
      width: auto;
    }
    &__title {
      margin-top: 0.703125vw;
      font-size: 2.8125vw;
      font-weight: 700;
      letter-spacing: -0.117188vw;
      line-height: 3.28125vw;
      color: rgba(255, 255, 255);
    }
    &__detail {
      font-size: 1.25vw;
      display: flex;
      align-items: center;
      margin: 1.09375vw 0px 0.625vw;
      &--ageTime {
        color: rgba(255, 255, 255, 0.7);
        font-size: 1.09375vw;
        font-weight: 700;
        margin-left: 1vw;
      }
      &--star {
        font-size: 0.9375vw;
        font-weight: 700;
        color: #fff;
        height: 1.7vw;
        display: flex;
        align-items: center;
        span {
          border: 1px solid #fff;
          height: 100%;
          display: inline-flex;
          align-items: center;
          padding: 0 0.4vw;
        }
        strong {
          font-size: 1.17188vw;
          background-color: #fff;
          color: #000;
          display: flex;
          align-items: center;
          height: 100%;
          padding: 0 0.4vw;
        }
      }
    }
    &__story {
      color: rgba(255, 255, 255, 0.8);
      width: 32.8125vw;
      margin-top: 0.15625vw;
      font-size: 1.17188vw;
      font-weight: 400;
      letter-spacing: -0.03125vw;
      line-height: 1.875vw;
    }
    &__genre {
      margin-top: 0.9375vw;
      color: rgba(255, 255, 255, 0.5);
      font-size: 1.01562vw;
      line-height: 1.40625vw;
      margin-bottom: 0.15625vw;
      th {
        font-weight: 700;
        padding-right: 1.2vw;
      }
      td {
        padding: 0.15vw 0;
      }
    }
    &__want {
      color: #fff;
      padding: 0.625vw 0.3125vw 0.625vw 0;
      font-size: 1.25vw;
      font-weight: 700;
      opacity: 0.5;
      display: flex;
      align-items: center;
      span {
        margin-right: 0.4vw;
      }
      &:hover {
        opacity: 0.8;
      }
    }
    &__close {
      position: absolute;
      top: 1.5vw;
      right: 1.5vw;
    }
    &__imgWrapper {
      position: absolute;
      width: 61.5625%;
      height: 100%;
      right: 0;
      top: 0;
      img {
        width: 100%;
        height: 100%;
      }
      .shadowLeft {
        position: absolute;
        top: 0px;
        left: 0px;
        background-image: linear-gradient(
          to right,
          rgb(0, 0, 0) 0,
          rgba(0, 0, 0, 0.7) 26%,
          rgba(0, 0, 0, 0.45) 50%,
          rgba(0, 0, 0, 0.2) 75%,
          rgba(0, 0, 0, 0) 100%
        );
        width: 65%;
        height: 100%;
      }
      .shadowBottom {
        position: absolute;
        bottom: 0px;
        right: 0px;
        background-image: linear-gradient(
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.17) 28%,
          rgba(0, 0, 0, 0.5) 62%,
          rgba(0, 0, 0, 0.85) 100%
        );
        height: 63.1%;
        width: 100%;
      }
    }
  }
`
