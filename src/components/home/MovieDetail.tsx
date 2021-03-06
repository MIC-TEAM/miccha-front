import styled from '@emotion/styled'
import React from 'react'

type Props = {
  title: string
  desc: string
}
const MovieDetail = ({ title, desc }: Props) => {
  return (
    <MovieDetailBox>
      <h2>{title}</h2>
      <p>{desc}</p>
      <button type="button">
        <svg
          className="SVGInline-svg css-rxj3gn-StyledHomeBannerActionButtonIcon-StyledContentActionButtonIconStyle-svg eukriky0-svg"
          width="35"
          height="35"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="UI" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="t" transform="translate(-63.000000, -356.000000)">
              <g id="Group" transform="translate(51.000000, 346.000000)">
                <g id="Group-4" transform="translate(12.000000, 10.000000)">
                  <rect id="Rectangle" opacity="0.299362909" x="0" y="0" width="24" height="24"></rect>
                  <path
                    d="M4.2,16.5 C4.6418278,16.5 5,16.8581722 5,17.3 L5,18.7 C5,19.1418278 4.6418278,19.5 4.2,19.5 L2.8,19.5 C2.3581722,19.5 2,19.1418278 2,18.7 L2,17.3 C2,16.8581722 2.3581722,16.5 2.8,16.5 L4.2,16.5 Z M21.25,17 L21.25,19 L7.25,19 L7.25,17 L21.25,17 Z M4.2,10.5 C4.6418278,10.5 5,10.8581722 5,11.3 L5,12.7 C5,13.1418278 4.6418278,13.5 4.2,13.5 L2.8,13.5 C2.3581722,13.5 2,13.1418278 2,12.7 L2,11.3 C2,10.8581722 2.3581722,10.5 2.8,10.5 L4.2,10.5 Z M21.25,11 L21.25,13 L7.25,13 L7.25,11 L21.25,11 Z M4.2,4.5 C4.6418278,4.5 5,4.8581722 5,5.3 L5,6.7 C5,7.1418278 4.6418278,7.5 4.2,7.5 L2.8,7.5 C2.3581722,7.5 2,7.1418278 2,6.7 L2,5.3 C2,4.8581722 2.3581722,4.5 2.8,4.5 L4.2,4.5 Z M21.25,5 L21.25,7 L7.25,7 L7.25,5 L21.25,5 Z"
                    id="Combined-Shape"
                    fill="#FFFFFF"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
        목록보기
      </button>
    </MovieDetailBox>
  )
}

export default MovieDetail

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
    }
  }
  @media (max-width: 414px) {
    left: 13%;
    h2 {
      font-size: 5vw;
    }
    p {
      font-size: 3vw;
      margin-top: 1.8vw;
    }
  }
`
