import styled from '@emotion/styled'
import React, { memo } from 'react'
import useItemHover from '../../hooks/useItemHover'

type Props = {
  id: number
  title: string
  description: string
  duration: number
  rating: string
  sliderIndex: number
}

export const printDuration = (duration: number) => {
  const hours = Math.floor(duration / 3600)
  const minutes = Math.floor((duration % 3600) / 60)
  return `${hours > 0 ? hours + '시간 ' : ''}${minutes}분`
}

const ItemHover = ({ id, title, description, duration, rating, sliderIndex }: Props) => {
  const { onClickDetailArrow } = useItemHover(id, sliderIndex)

  return (
    <ItemHoverView>
      <div className="header">
        <button type="button" className="play">
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjgiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA2OCA2OCI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYiIgZD0iTTI1LjUgMjEuMDhsMjIgMTIuNjY3LTIyIDEzLjMzM3oiLz4KICAgICAgICA8ZmlsdGVyIGlkPSJhIiB3aWR0aD0iMTU0LjUlIiBoZWlnaHQ9IjE0Ni4yJSIgeD0iLTI3LjMlIiB5PSItMjMuMSUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+CiAgICAgICAgICAgIDxmZU9mZnNldCBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiIHN0ZERldmlhdGlvbj0iMiIvPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCBpbj0ic2hhZG93Qmx1ck91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjI0IDAiLz4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBjeD0iMzQiIGN5PSIzNCIgcj0iMzIuNSIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuNTMiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICAgICAgPHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiIHhsaW5rOmhyZWY9IiNiIi8+CiAgICAgICAgPHVzZSBmaWxsPSIjRjgyRjYyIiB4bGluazpocmVmPSIjYiIvPgogICAgPC9nPgo8L3N2Zz4K"
            alt="재생하기"
          />
        </button>

        <div className="title">
          <h3>{title}</h3>
          <p className="detail">
            <span>{rating}</span> &nbsp;
            <span>{printDuration(duration)}</span>
          </p>
        </div>

        <button type="button" className="save">
          <Image src="/images/common/btn_save.svg" alt="보고싶은 콘텐츠에 추가" />
        </button>
      </div>

      <p className="desc">{description}</p>

      <div className="more">
        <button type="button" className="btn" onClick={onClickDetailArrow} />
      </div>
    </ItemHoverView>
  )
}

export default memo(ItemHover)

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: flex;
  width: 100%;
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
