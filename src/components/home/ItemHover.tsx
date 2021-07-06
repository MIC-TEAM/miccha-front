import React, { memo } from 'react'
import { Image, ItemHoverView } from '../../styles/home_movie'

type Props = {
  movietit: string
  story: string
  showtime: string
  age: string
}

const ItemHover = ({ movietit, story, showtime, age }: Props) => {
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
          <h3>{movietit}</h3>
          <p className="detail">
            <span className="age">{age}</span>
            <span className="showtimes">{showtime}</span>
          </p>
        </div>

        <button type="button" className="save">
          <Image src="/images/common/btn_save.svg" alt="보고싶은 콘텐츠에 추가" />
        </button>
      </div>

      <p className="desc">{story}</p>

      <div className="more">
        <button type="button" className="btn"></button>
      </div>
    </ItemHoverView>
  )
}

export default memo(ItemHover)
