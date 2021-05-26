import React from 'react'
import Slick from 'react-slick'
import { Image, SlickWrap, ContentHead, ContentTitle, SmallTitle, AllView } from '../../styles/movie'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type Props = {
  title: string
  movieTitle: string
}

const Home = ({ title, movieTitle }: Props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    arrow: true,
    slide: 'ul',

    //반응형 1024, 768, 480
    responsive: [
      //iPad Pro
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      //iPad
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      //mobile
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const items = [
    {
      id: 1,
      url: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21H1/image/frnwiL8Kwpqe0OiAVdaJOU2Vl2g.jpg',
    },
    {
      id: 1,
      url: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21H1/image/frnwiL8Kwpqe0OiAVdaJOU2Vl2g.jpg',
    },
    {
      id: 1,
      url: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21H1/image/frnwiL8Kwpqe0OiAVdaJOU2Vl2g.jpg',
    },
    {
      id: 1,
      url: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21H1/image/frnwiL8Kwpqe0OiAVdaJOU2Vl2g.jpg',
    },
    {
      id: 1,
      url: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21H1/image/frnwiL8Kwpqe0OiAVdaJOU2Vl2g.jpg',
    },
    {
      id: 1,
      url: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21H1/image/frnwiL8Kwpqe0OiAVdaJOU2Vl2g.jpg',
    },
    {
      id: 1,
      url: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21H1/image/frnwiL8Kwpqe0OiAVdaJOU2Vl2g.jpg',
    },
    {
      id: 1,
      url: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21H1/image/frnwiL8Kwpqe0OiAVdaJOU2Vl2g.jpg',
    },
    {
      id: 1,
      url: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21H1/image/frnwiL8Kwpqe0OiAVdaJOU2Vl2g.jpg',
    },
    {
      id: 1,
      url: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21H1/image/frnwiL8Kwpqe0OiAVdaJOU2Vl2g.jpg',
    },
    {
      id: 1,
      url: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21H1/image/frnwiL8Kwpqe0OiAVdaJOU2Vl2g.jpg',
    },
    {
      id: 1,
      url: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21H1/image/frnwiL8Kwpqe0OiAVdaJOU2Vl2g.jpg',
    },
    {
      id: 1,
      url: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21H1/image/frnwiL8Kwpqe0OiAVdaJOU2Vl2g.jpg',
    },
    {
      id: 1,
      url: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21H1/image/frnwiL8Kwpqe0OiAVdaJOU2Vl2g.jpg',
    },
    {
      id: 1,
      url: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21H1/image/frnwiL8Kwpqe0OiAVdaJOU2Vl2g.jpg',
    },
  ]

  const itemsList = items.map((item) => (
    <li key={item.id}>
      <Image src={item.url} alt="" />
      <SmallTitle>{movieTitle}</SmallTitle>
    </li>
  ))

  return (
    <>
      <ContentHead>
        <ContentTitle>{title}</ContentTitle>
        <AllView href="#">
          모두 보기
          <svg width="8" height="14" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">
            <g id="Icons_Arrow_VIew-All" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Icons-/-Arrow-/-VIew-All">
                <rect id="Bound" opacity="0.300000012" x="0" y="0" width="8" height="14"></rect>
                <polygon
                  id="Combined-Shape"
                  fill-opacity="0.5"
                  fill="#FFFFFF"
                  points="5.31818182 7 1 11.3181818 1.68181818 12 6.34090909 7.34090909 6.68181818 7 1.68181818 2 1 2.68181818"
                />
              </g>
            </g>
          </svg>
        </AllView>
      </ContentHead>

      <SlickWrap style={{ padding: '0 50px' }}>
        <Slick {...settings}>{itemsList}</Slick>
      </SlickWrap>
    </>
  )
}

export default Home
